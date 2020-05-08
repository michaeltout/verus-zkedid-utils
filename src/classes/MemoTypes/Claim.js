const {
  STRUCTURED_CLAIM_VERSION,
  STRUCTURED_CLAIM
} = require('../../utils/constants/index')
const { StructuredPrototypeType } = require('../../utils/data_types/index')
const { schemas } = require('../../utils/preset_hashes/index')
const { utf8ToHash160 } = require('../../utils/hash')

class Claim {
  // Takes in an array of objects and creates an object to be passed to StructuredMemo
  static create(type, data, toId) {
    return {
      schema: [new StructuredPrototypeType(STRUCTURED_CLAIM)],
      data: {
        [STRUCTURED_CLAIM]: {
          schema: schemas[utf8ToHash160(STRUCTURED_CLAIM).toString('hex')],
          data: {
            type,
            version: STRUCTURED_CLAIM_VERSION,
            data,
            to: toId
          },
        },
      },
    };
  }
}

module.exports = Claim