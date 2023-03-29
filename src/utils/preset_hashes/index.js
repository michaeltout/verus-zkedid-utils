const verus = require('./verus')
const claim = require('./claim')
const attestation = require('./attestation')
const currency_import = require('./currency_import')
const payment_request = require('./payment_request')
const verus_link = require('./verus_link')

module.exports = {
  strings: {
    ...verus.strings,
    ...claim.strings,
    ...attestation.strings,
    ...currency_import.strings,
    ...payment_request.strings,
    ...verus_link.strings,
  },
  schemas: {
    ...claim.schemas,
    ...attestation.schemas,
    ...currency_import.schemas,
    ...payment_request.schemas,
    ...verus_link.schemas,
  },
};