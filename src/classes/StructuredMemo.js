const {
  STRUCTURED_MEMO_VERSION,
  STRUCTURED_MEMO_IDENTIFIER,
} = require('../utils/constants/index')
const StructuredPrototype = require('./StructuredPrototype/StructuredPrototype')
const { UInt32, Hash160, StructuredPrototypeArray } = require('../utils/data_types/index')
const presetHashMap = require('../utils/preset_hashes/index')
const MemoSchema = [new Hash160('id'), new UInt32('version'), new StructuredPrototypeArray("objects")]

class StructuredMemo {
  static readBuffer(buf, hashMap = {}) {
    return StructuredPrototype.readBuffer(buf, MemoSchema, {...hashMap, ...presetHashMap})
  }

  // Takes in an array of objects and creates a memo buffer
  static writeBuffer(objects) {
    return StructuredPrototype.writeBuffer({
      schema: MemoSchema,
      data: {
        id: STRUCTURED_MEMO_IDENTIFIER,
        version: STRUCTURED_MEMO_VERSION,
        objects
      }
    })
  }

  static writeMemo(objects) {
    return StructuredMemo.writeBuffer(objects).toString('hex')
  }

  static readMemo(memo, hashMap) {
    return StructuredMemo.readBuffer(Buffer.from(memo, 'hex'), hashMap)
  }
}

module.exports = StructuredMemo