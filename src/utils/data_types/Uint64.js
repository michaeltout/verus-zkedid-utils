const { toUInt64Buffer } = require('../numbers')
const {
  MAX_UINT64
} = require('../constants/index')

class UInt64 {
  /**
   * Defines the prototype of an unsigned 32 bit buffer
   */
  constructor(key) {
    this.key = key
    this.byteLength = 8
  }

  create(int) {
    if (!isNaN(int) && int <= MAX_UINT64 && int >= 0 && Number.isInteger(int)) {
      return {
        data: int,
        buffer: toUInt64Buffer(int)
      }
    } else {
      throw new Error("Could not create UInt64 buffer, bad input.")
    }
  }
}

module.exports = UInt64