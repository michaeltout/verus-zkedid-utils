const verus = require('./verus')
const claim = require('./claim')
const attestation = require('./attestation')

module.exports = {
  strings: { ...verus.strings, ...claim.strings, ...attestation.strings },
  schemas: { ...claim.schemas, ...attestation.schemas },
};