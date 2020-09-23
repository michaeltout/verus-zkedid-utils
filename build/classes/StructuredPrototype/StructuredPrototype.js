"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('../../utils/constants/index'),
    INVALID_SM_UNKNOWN_ERROR = _require.INVALID_SM_UNKNOWN_ERROR,
    INVALID_SM_PARAMS = _require.INVALID_SM_PARAMS;

var StructuredMemoError = require('../../utils/errors/StructuredMemoError');

var _require2 = require('../../utils/data_types/index'),
    ObjectDataSchema = _require2.ObjectDataSchema,
    StructuredMemoString = _require2.StructuredMemoString,
    Hash160 = _require2.Hash160,
    UInt32 = _require2.UInt32,
    UInt64 = _require2.UInt64,
    StructuredPrototypeType = _require2.StructuredPrototypeType,
    StructuredPrototypeArray = _require2.StructuredPrototypeArray,
    Boolean = _require2.Boolean;

var _require3 = require('../../utils/numbers'),
    toUIntBuffer = _require3.toUIntBuffer,
    fromUIntBuffer = _require3.fromUIntBuffer;

var _require4 = require('../../utils/hash'),
    utf8ToHash160 = _require4.utf8ToHash160;

var StructuredPrototype = /*#__PURE__*/function () {
  /**
   * Creates a basic boilerplate data object from a schema array
   * @param {Hash160|StructuredMemoString|UInt32|UInt64|StructuredPrototypeTypeArray|Boolean} schemaArray
   * @param {String} key The key of this structured prototype. If left null, it will be determined when read.
   */
  function StructuredPrototype(schemaArray, key) {
    _classCallCheck(this, StructuredPrototype);

    try {
      if (schemaArray != null) {
        this.schema = new ObjectDataSchema(schemaArray);
      }

      this.key = key;
      this.lengthFieldBytes = 2;
      this.typeHashBytes = 20;
    } catch (e) {
      if (e instanceof StructuredMemoError) {
        throw e;
      } else {
        throw new StructuredMemoError("Error", e.message, INVALID_SM_UNKNOWN_ERROR);
      }
    }
  } // Reads a buffer and outputs json, given a hash map to deduce data from


  _createClass(StructuredPrototype, null, [{
    key: "readBuffer",
    value: function readBuffer(buf, schemaArray, hashMap) {
      var ptr = 0;
      var bufLen = Buffer.byteLength(buf);
      var extractedData = {};
      var i;
      var schema = new ObjectDataSchema(schemaArray);

      main_loop: for (i = 0; i < schema.order.length; i++) {
        var schemaType = schema.order[i];

        if (schemaType instanceof StructuredPrototypeArray) {
          ptr += schemaType.sizeFieldBytes;
          if (ptr > bufLen) break;
          var extractedArray = [];
          var size = fromUIntBuffer(buf.slice(ptr - schemaType.sizeFieldBytes, ptr), schemaType.sizeFieldBytes);

          for (var _i = 0; _i < size; _i++) {
            ptr += schemaType.elementTypeHashBytes;
            if (ptr > bufLen) break main_loop;
            var elementType = buf.slice(ptr - schemaType.elementTypeHashBytes, ptr).toString('hex');
            var elementSchema = hashMap != null ? hashMap.schemas[elementType] : null;
            var elementId = hashMap != null ? hashMap.strings[elementType] : null;

            if (elementSchema == null || elementId == null) {
              throw new StructuredMemoError("Invalid Parameters", "Could not read buffer due to unrecognized hash. (".concat(elementType, ")."), INVALID_SM_PARAMS);
            } // Read StructuredPrototype according to length field


            ptr += schemaType.elementLengthFieldBytes;
            if (ptr > bufLen) break main_loop;
            var elementBufLen = fromUIntBuffer(buf.slice(ptr - schemaType.elementLengthFieldBytes, ptr), schemaType.elementLengthFieldBytes);
            ptr += elementBufLen;
            if (ptr > bufLen) break main_loop;
            extractedArray.push(StructuredPrototype.readBuffer(buf.slice(ptr - elementBufLen, ptr), elementSchema, hashMap));
          }

          extractedData[schemaType.key] = extractedArray;
        } else {
          var sliceLen = 0; // If schema type is string data, we check for a length field and determine 
          // slice length accordingly, else we take the standard preset length

          if (schemaType instanceof StructuredMemoString) {
            ptr += schemaType.lengthFieldBytes;
            if (ptr > bufLen) break;
            var lengthField = buf.slice(ptr - schemaType.lengthFieldBytes, ptr);
            sliceLen = fromUIntBuffer(lengthField, schemaType.lengthFieldBytes);
          } else if (schemaType instanceof StructuredPrototypeType) {
            // If structured prototype, we slice the identifying hash
            sliceLen = schemaType.typeHashBytes;
          } else sliceLen = schemaType.byteLength;

          var bufSlice = buf.slice(ptr, ptr + sliceLen);

          if (Buffer.byteLength(bufSlice) !== sliceLen) {
            throw new StructuredMemoError("Invalid Parameters", "Could not read buffer data due size mismatch.", INVALID_SM_PARAMS);
          } else {
            ptr += sliceLen;
            if (ptr > bufLen) break;

            if (schemaType instanceof Hash160 || schemaType instanceof StructuredPrototypeType) {
              var detectedHash = bufSlice.toString('hex'); // If schema is expecting a 20 byte hash, validate hash and put stored
              // value behind hash into extracted data

              if (hashMap == null || hashMap.strings[detectedHash] == null || schemaType instanceof StructuredPrototypeType && hashMap.schemas[detectedHash] == null) {
                throw new StructuredMemoError("Invalid Parameters", "Could not read buffer due to unrecognized hash. (".concat(detectedHash, ")."), INVALID_SM_PARAMS);
              }

              if (schemaType instanceof StructuredPrototypeType) {
                // Read StructuredPrototype according to length field
                ptr += schemaType.lengthFieldBytes;
                if (ptr > bufLen) break;
                var extractedBufLen = fromUIntBuffer(buf.slice(ptr - schemaType.lengthFieldBytes, ptr), schemaType.lengthFieldBytes);
                ptr += extractedBufLen;
                if (ptr > bufLen) break;
                extractedData[schemaType.key] = StructuredPrototype.readBuffer(buf.slice(ptr - extractedBufLen, ptr), hashMap.schemas[detectedHash], hashMap);
              } else extractedData[schemaType.key] = hashMap.strings[detectedHash];
            } else if (schemaType instanceof UInt32 || schemaType instanceof Boolean || schemaType instanceof UInt64) {
              var extractedInt = fromUIntBuffer(bufSlice, schemaType.byteLength);
              extractedData[schemaType.key] = schemaType instanceof Boolean ? extractedInt ? true : false : extractedInt;
            } else {
              // Assume StructuredMemoString
              extractedData[schemaType.key] = bufSlice.toString('utf8');
            }
          }
        }
      }

      if (ptr !== bufLen || i !== schema.order.length) {
        throw new StructuredMemoError("Invalid Parameters", "Could not read buffer due size mismatch. ".concat(i !== schema.order.length ? "".concat(i, " out of ").concat(schema.order.length, " schemas satisfied.") : "Expected ".concat(ptr, " bytes, got ").concat(bufLen, " bytes.")), INVALID_SM_PARAMS);
      }

      return extractedData;
    } // Takes in an object, with keys named according to the schema, and creates a buffer to send

  }, {
    key: "writeBuffer",
    value: function writeBuffer(inputData) {
      var buf = Buffer.alloc(0);
      var schema = new ObjectDataSchema(inputData.schema);

      for (var i = 0; i < schema.order.length; i++) {
        var schemaType = schema.order[i];
        var data = inputData.data[schemaType.key];

        if (data != null) {
          if (schemaType instanceof Hash160 || schemaType instanceof UInt32 || schemaType instanceof UInt64 || schemaType instanceof StructuredMemoString || schemaType instanceof Boolean) {
            buf = Buffer.concat([buf, schemaType.create(data).buffer]);
          } else if (schemaType instanceof StructuredPrototypeArray) {
            (function () {
              var arrayBuf = Buffer.alloc(0);
              data.map(function (subInput) {
                arrayBuf = Buffer.concat([arrayBuf, StructuredPrototype.writeBuffer(subInput)]);
              });
              buf = Buffer.concat([buf, toUIntBuffer(data.length, schemaType.sizeFieldBytes), arrayBuf]);
            })();
          } else {
            // Assume StructuredPrototypeType
            var unmeasuredBuf = StructuredPrototype.writeBuffer(data);
            buf = Buffer.concat([buf, utf8ToHash160(schemaType.key), toUIntBuffer(Buffer.byteLength(unmeasuredBuf), schemaType.lengthFieldBytes), StructuredPrototype.writeBuffer(data)]);
          }
        } else {
          throw new StructuredMemoError("Invalid Parameters", schemaType.key + ' not specified in input parameters, or null.', INVALID_SM_PARAMS);
        }
      }

      return buf;
    }
  }]);

  return StructuredPrototype;
}();

module.exports = StructuredPrototype;