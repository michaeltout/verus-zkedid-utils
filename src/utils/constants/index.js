const Claims = require('./Claims')
const StructuredMemo = require('./StructuredMemo')
const General = require('./General')
const Attestation = require('./Attestation')
const StructuredCurrencyImport = require('./StructuredCurrencyImport')
const CoinObj = require('./CoinObj')
const VerusLink = require('./VerusLink')
const VerusPay = require('./VerusPay')

module.exports = {
  ...Claims,
  ...StructuredMemo,
  ...General,
  ...Attestation,
  ...StructuredCurrencyImport,
  ...CoinObj,
  ...VerusLink,
  ...VerusPay
}