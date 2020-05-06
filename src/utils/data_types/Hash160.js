const { utf8ToHash160 } = require('../hash')

class Hash160 {
  /**
   * Defines a the prototype of a HASH160 20 byte hash
   * @param {String} key The data key for this hash
   */
  constructor(key) {
    this.key = key
    this.byteLength = 20
  }

  create(utf8Data) {
    return {
      data: utf8Data,
      buffer: utf8ToHash160(utf8Data)
    }
  }
}

module.exports = Hash160