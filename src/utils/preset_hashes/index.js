const verus = require('./verus')
const claim = require('./claim')

module.exports = { strings: {...verus.strings, ...claim.strings}, schemas: {...claim.schemas} }