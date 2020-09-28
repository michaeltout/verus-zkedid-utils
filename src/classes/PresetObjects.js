const MemoPresets = require('./MemoTypes/index')
const CurrencyImportPresets = require('./CurrencyImportTypes/index')
const LinkPresets = require('./LinkTypes/index')

module.exports = {
  ...MemoPresets,
  ...CurrencyImportPresets,
  ...LinkPresets
}