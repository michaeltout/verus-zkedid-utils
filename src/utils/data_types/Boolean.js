const { toUInt8Buffer } = require('../numbers')

class Boolean {
  /**
   * Defines the prototype of a boolean
   */
  constructor(key) {
    this.key = key
    this.byteLength = 1
  }

  create(bool) {
    return {
      data: bool ? true : false,
      buffer: toUInt8Buffer(bool ? 1 : 0)
    }
  }
}

module.exports = Boolean