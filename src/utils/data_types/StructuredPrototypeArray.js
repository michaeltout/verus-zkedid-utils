class StructuredPrototypeArray {
  /**
   * Defines a generic structured prototype type
   */
  constructor(key) {    
    this.key = key
    this.sizeFieldBytes = 2
    this.elementLengthFieldBytes = 2
    this.elementTypeHashBytes = 20
  }
}

module.exports = StructuredPrototypeArray