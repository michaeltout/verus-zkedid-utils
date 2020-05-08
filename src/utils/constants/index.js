const Claims = require('./Claims')
const StructuredMemo = require('./StructuredMemo')
const General = require('./General')
const Attestation = require('./Attestation')

module.exports = {
  ...Claims,
  ...StructuredMemo,
  ...General,
  ...Attestation
}