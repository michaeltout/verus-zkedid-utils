const verus = require('./verus')
const claim = require('./claim')
const attestation = require('./attestation')
const currency_import = require('./currency_import')

module.exports = {
  strings: { ...verus.strings, ...claim.strings, ...attestation.strings, ...currency_import.strings },
  schemas: { ...claim.schemas, ...attestation.schemas, ...currency_import.schemas },
};