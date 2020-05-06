const {
  STRUCTURED_CLAIM_VERSION,
  STRUCTURED_CLAIM
} = require('../../utils/constants/index')
const { UInt32, Hash160, StructuredMemoString, StructuredPrototypeType } = require('../../utils/data_types/index')
const ClaimSchema = [
  new Hash160("type"),
  new UInt32("version"),
  new StructuredMemoString("data")
]

class Claim {
  // Takes in an array of objects and creates an object to be passed to StructuredMemo
  static create(type, data) {
    return {
      schema: [new StructuredPrototypeType(STRUCTURED_CLAIM)],
      data: {
        ["claim:vrsc"]: {
          schema: ClaimSchema,
          data: {
            type,
            version: STRUCTURED_CLAIM_VERSION,
            data,
          },
        },
      },
    };
  }
}

module.exports = Claim