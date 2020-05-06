class StructuredPrototypeType {
  /**
   * Defines a generic structured prototype type
   */
  constructor(key) {
    this.key = key
    this.typeHashBytes = 20
    this.lengthFieldBytes = 2
  }
}

module.exports = StructuredPrototypeType