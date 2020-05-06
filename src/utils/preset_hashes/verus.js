const { STRUCTURED_MEMO_IDENTIFIER } = require('../constants/index')
const { utf8ToHash160 } = require('../hash')

const verus_strings = {
  [utf8ToHash160(STRUCTURED_MEMO_IDENTIFIER).toString('hex')]: STRUCTURED_MEMO_IDENTIFIER
}

module.exports = { ...verus_strings }