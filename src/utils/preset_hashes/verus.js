const { STRUCTURED_MEMO_IDENTIFIER, CURRENCY_IMPORT_IDENTIFIER } = require('../constants/index')
const { utf8ToHash160 } = require('../hash')

const verus_strings = {
  [utf8ToHash160(STRUCTURED_MEMO_IDENTIFIER).toString('hex')]: STRUCTURED_MEMO_IDENTIFIER,
  [utf8ToHash160(CURRENCY_IMPORT_IDENTIFIER).toString('hex')]: CURRENCY_IMPORT_IDENTIFIER,
}

module.exports = { strings: verus_strings }