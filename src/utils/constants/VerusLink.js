const { utf8ToHash160 } = require("../hash")

// Verus Link Defaults
const VERUS_LINK_VERSION = 0

const VERUS_LINK = 'link:vrsc'

const VERUS_LINK_HASH = [utf8ToHash160(VERUS_LINK).toString('hex')]

module.exports = {
  VERUS_LINK_VERSION,
  VERUS_LINK,
  VERUS_LINK_HASH
}