const {
  STRUCTURED_ATTESTATION_VERSION,
  STRUCTURED_ATTESTATION
} = require('../../utils/constants/index')
const { UInt32, Hash160, StructuredMemoString, StructuredPrototypeType } = require('../../utils/data_types/index')
const AttestationSchema = [
  new Hash160("type"),
  new UInt32("version"),
  new StructuredMemoString("data"),
  new StructuredMemoString("to"),
  new StructuredMemoString("from")
]

class Attestation {
  // Takes in an array of objects and creates an object to be passed to StructuredMemo
  static create(type, data, toId, fromId) {
    return {
      schema: [new StructuredPrototypeType(STRUCTURED_ATTESTATION)],
      data: {
        [STRUCTURED_ATTESTATION]: {
          schema: AttestationSchema,
          data: {
            type,
            version: STRUCTURED_ATTESTATION_VERSION,
            data,
            to: toId,
            from: fromId
          },
        },
      },
    };
  }
}

module.exports = Attestation