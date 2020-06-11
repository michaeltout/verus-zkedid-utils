const {
  INVALID_SM_UNKNOWN_ERROR,
  INVALID_SM_PARAMS
} = require('../../utils/constants/index')
const StructuredMemoError = require('../../utils/errors/StructuredMemoError')
const {
  ObjectDataSchema,
  StructuredMemoString,
  Hash160,
  UInt32,
  UInt64,
  StructuredPrototypeType,
  StructuredPrototypeArray,
  Boolean
} = require('../../utils/data_types/index')
const {
  toUIntBuffer,
  fromUIntBuffer
} = require('../../utils/numbers')
const {
  utf8ToHash160
} = require('../../utils/hash')

class StructuredPrototype {
  /**
   * Creates a basic boilerplate data object from a schema array
   * @param {Hash160|StructuredMemoString|UInt32|UInt64|StructuredPrototypeTypeArray|Boolean} schemaArray
   * @param {String} key The key of this structured prototype. If left null, it will be determined when read.
   */
  constructor(schemaArray, key) {
    try {
      if (schemaArray != null) {
        this.schema = new ObjectDataSchema(schemaArray)
      } 

      this.key = key
      this.lengthFieldBytes = 2
      this.typeHashBytes = 20
    } catch (e) {
      if (e instanceof StructuredMemoError) {
        throw e;
      } else {
        throw new StructuredMemoError(
          "Error",
          e.message,
          INVALID_SM_UNKNOWN_ERROR
        );
      }
    }
  }

  // Reads a buffer and outputs json, given a hash map to deduce data from
  static readBuffer(buf, schemaArray, hashMap) {
    let ptr = 0
    const bufLen = Buffer.byteLength(buf)
    let extractedData = {}
    let i
    const schema = new ObjectDataSchema(schemaArray)

    main_loop:
    for (i = 0; i < schema.order.length; i++) {
      const schemaType = schema.order[i]

      if (schemaType instanceof StructuredPrototypeArray) {
        ptr += schemaType.sizeFieldBytes
        if (ptr > bufLen) break

        let extractedArray = []
        const size = fromUIntBuffer(buf.slice(ptr - schemaType.sizeFieldBytes, ptr), schemaType.sizeFieldBytes)

        for (let i = 0; i < size; i++) {
          ptr += schemaType.elementTypeHashBytes
          if (ptr > bufLen) break main_loop

          const elementType = buf.slice(ptr - schemaType.elementTypeHashBytes, ptr).toString('hex')
          const elementSchema = hashMap != null ? hashMap.schemas[elementType] : null
          const elementId = hashMap != null ? hashMap.strings[elementType] : null

          if (elementSchema == null || elementId == null) {
            throw new StructuredMemoError(
              "Invalid Parameters",
              `Could not read buffer due to unrecognized hash. (${elementType}).`,
              INVALID_SM_PARAMS
            );
          }

          // Read StructuredPrototype according to length field
          ptr += schemaType.elementLengthFieldBytes
          if (ptr > bufLen) break main_loop

          const elementBufLen = fromUIntBuffer(
            buf.slice(ptr - schemaType.elementLengthFieldBytes, ptr),
            schemaType.elementLengthFieldBytes
          );

          ptr += elementBufLen
          if (ptr > bufLen) break main_loop

          extractedArray.push(StructuredPrototype.readBuffer(
            buf.slice(ptr - elementBufLen, ptr),
            elementSchema,
            hashMap
          ));
        }

        extractedData[schemaType.key] = extractedArray
      } else {
        let sliceLen = 0

        // If schema type is string data, we check for a length field and determine 
        // slice length accordingly, else we take the standard preset length
        if (schemaType instanceof StructuredMemoString) {
          ptr += schemaType.lengthFieldBytes
          if (ptr > bufLen) break

          const lengthField = buf.slice(ptr - schemaType.lengthFieldBytes, ptr)
          sliceLen = fromUIntBuffer(lengthField, schemaType.lengthFieldBytes)
        } else if (schemaType instanceof StructuredPrototypeType) {
          // If structured prototype, we slice the identifying hash
          sliceLen = schemaType.typeHashBytes
        } else sliceLen = schemaType.byteLength
        
        const bufSlice = buf.slice(ptr, ptr + sliceLen)

        if (Buffer.byteLength(bufSlice) !== sliceLen) {
          throw new StructuredMemoError(
            "Invalid Parameters",
            "Could not read buffer data due size mismatch.",
            INVALID_SM_PARAMS
          );
        } else {
          ptr += sliceLen
          if (ptr > bufLen) break

          if (schemaType instanceof Hash160 || schemaType instanceof StructuredPrototypeType) {
            const detectedHash = bufSlice.toString('hex')
            // If schema is expecting a 20 byte hash, validate hash and put stored
            // value behind hash into extracted data
            if (
              hashMap == null ||
              hashMap.strings[detectedHash] == null ||
              (schemaType instanceof StructuredPrototypeType && hashMap.schemas[detectedHash] == null)
            ) {
              throw new StructuredMemoError(
                "Invalid Parameters",
                `Could not read buffer due to unrecognized hash. (${detectedHash}).`,
                INVALID_SM_PARAMS
              );
            } 

            if (schemaType instanceof StructuredPrototypeType) {
              // Read StructuredPrototype according to length field
              ptr += schemaType.lengthFieldBytes;
              if (ptr > bufLen) break;

              const extractedBufLen = fromUIntBuffer(
                buf.slice(ptr - schemaType.lengthFieldBytes, ptr),
                schemaType.lengthFieldBytes
              );

              ptr += extractedBufLen;
              if (ptr > bufLen) break;

              extractedData[schemaType.key] = StructuredPrototype.readBuffer(
                buf.slice(ptr - extractedBufLen, ptr),
                hashMap.schemas[detectedHash],
                hashMap
              )
            } else extractedData[schemaType.key] = hashMap.strings[detectedHash];
          } else if (schemaType instanceof UInt32 || schemaType instanceof Boolean || schemaType instanceof UInt64) {
            let extractedInt = fromUIntBuffer(bufSlice, schemaType.byteLength)

            extractedData[schemaType.key] = schemaType instanceof Boolean ? (extractedInt ? true : false) : extractedInt
          } else {
            // Assume StructuredMemoString
            extractedData[schemaType.key] = bufSlice.toString('utf8')
          }
        }
      }
    }

    if (ptr !== bufLen || i !== schema.order.length) {
      throw new StructuredMemoError(
        "Invalid Parameters",
        `Could not read buffer due size mismatch. ${i !== schema.order.length ? `${i} out of ${schema.order.length} schemas satisfied.` : `Expected ${ptr} bytes, got ${bufLen} bytes.`}`,
        INVALID_SM_PARAMS
      );
    }

    return extractedData
  }

  // Takes in an object, with keys named according to the schema, and creates a buffer to send
  static writeBuffer(inputData) {
    let buf = Buffer.alloc(0)
    const schema = new ObjectDataSchema(inputData.schema)

    for (let i = 0; i < schema.order.length; i++) {
      const schemaType = schema.order[i]
      const data = inputData.data[schemaType.key]

      if (data != null) {
        if (
          schemaType instanceof Hash160 ||
          schemaType instanceof UInt32 ||
          schemaType instanceof UInt64 ||
          schemaType instanceof StructuredMemoString ||
          schemaType instanceof Boolean
        ) {
          buf = Buffer.concat([buf, schemaType.create(data).buffer]);
        } else if (schemaType instanceof StructuredPrototypeArray) {
          let arrayBuf = Buffer.alloc(0);
          data.map((subInput) => {
            arrayBuf = Buffer.concat([
              arrayBuf,
              StructuredPrototype.writeBuffer(subInput),
            ]);
          });

          buf = Buffer.concat([
            buf,
            toUIntBuffer(data.length, schemaType.sizeFieldBytes),
            arrayBuf,
          ]);
        } else {
          // Assume StructuredPrototypeType
          const unmeasuredBuf = StructuredPrototype.writeBuffer(data);

          buf = Buffer.concat([
            buf,
            utf8ToHash160(schemaType.key),
            toUIntBuffer(
              Buffer.byteLength(unmeasuredBuf),
              schemaType.lengthFieldBytes
            ),
            StructuredPrototype.writeBuffer(data),
          ]);
        }
      } else {
        console.log(schemaType.key)

        throw new StructuredMemoError(
          "Invalid Parameters",
          schemaType.key + ' not specified in input parameters, or null.',
          INVALID_SM_PARAMS
        );
      }
    }
    return buf
  }
}

module.exports = StructuredPrototype