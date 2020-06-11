const Claims = require('./Claims')
const StructuredMemo = require('./StructuredMemo')
const General = require('./General')
const Attestation = require('./Attestation')
const StructuredCurrencyImport = require('./StructuredCurrencyImport')
const CoinObj = require('./CoinObj')

module.exports = {
  ...Claims,
  ...StructuredMemo,
  ...General,
  ...Attestation,
  ...StructuredCurrencyImport,
  ...CoinObj
}