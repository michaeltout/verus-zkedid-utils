const { Hash160, UInt32, StructuredMemoString } = require('../data_types/index')
const { utf8ToHash160 } = require('../hash')
const { STRUCTURED_ATTESTATION } = require('../constants/index')

const attestation_schemas = {
  [utf8ToHash160(STRUCTURED_ATTESTATION).toString('hex')]: [
    new Hash160("type"),
    new UInt32("version"),
    new StructuredMemoString("data"),
    new StructuredMemoString("to"),
    new StructuredMemoString("from")
  ],
}

const attestation_strings = {
  [utf8ToHash160(STRUCTURED_ATTESTATION).toString('hex')]: STRUCTURED_ATTESTATION
}

module.exports = {
  schemas: attestation_schemas,
  strings: attestation_strings
}