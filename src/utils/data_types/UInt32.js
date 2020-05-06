const { toUInt32Buffer } = require('../numbers')
const {
  MAX_UINT32
} = require('../constants/index')

class UInt32 {
  /**
   * Defines the prototype of an unsigned 32 bit buffer
   */
  constructor(key) {
    this.key = key
    this.byteLength = 4
  }

  create(int) {
    if (!isNaN(int) && int <= MAX_UINT32 && int >= 0 && Number.isInteger(int)) {
      return {
        data: int,
        buffer: toUInt32Buffer(int)
      }
    } else {
      throw new Error("Could not create UInt32 buffer, bad input.")
    }
  }
}

module.exports = UInt32