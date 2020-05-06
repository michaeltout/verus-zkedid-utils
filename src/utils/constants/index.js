const Claims = require('./Claims')
const StructuredMemo = require('./StructuredMemo')
const General = require('./General')

module.exports = {
  ...Claims,
  ...StructuredMemo,
  ...General
}