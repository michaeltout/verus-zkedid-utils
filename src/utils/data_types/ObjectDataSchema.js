const Hash160 = require('./Hash160')
const StructuredMemoString = require('./StructuredMemoString')
const UInt32 = require('./UInt32')
const StructuredPrototypeType = require('./StructuredPrototypeType')
const StructuredPrototypeArray = require('./StructuredPrototypeArray')

class ObjectDataSchema {
  /**
   * Defines a general schema for memo data
   */
  constructor(schemaArray = []) {
    if (Array.isArray(schemaArray)) {
      schemaArray.forEach(element => {
        if (
          !(
            element instanceof Hash160 ||
            element instanceof StructuredMemoString ||
            element instanceof UInt32 ||
            element instanceof StructuredPrototypeType ||
            element instanceof StructuredPrototypeArray
          )
        ) {
          throw new Error(
            typeof element + " is not supported schema data type."
          );
        }
      });

      this.order = schemaArray

    } else throw new Error("Data schemas must be in array format.")
  }
}

module.exports = ObjectDataSchema