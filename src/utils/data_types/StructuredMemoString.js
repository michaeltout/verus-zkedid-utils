const { toUInt16Buffer } = require('../numbers')

class StructuredMemoString {
  /**
   * Defines a generic memo data type of specified length
   */
  constructor(key) {
    this.key = key
    this.lengthFieldBytes = 2
  }

  create(utf8Data) {
    const unmeasuredBuf = Buffer.from(utf8Data, 'utf8')

    return {
      data: utf8Data,
      buffer: Buffer.concat([toUInt16Buffer(Buffer.byteLength(unmeasuredBuf)), unmeasuredBuf])
    }
  }
}

module.exports = StructuredMemoString