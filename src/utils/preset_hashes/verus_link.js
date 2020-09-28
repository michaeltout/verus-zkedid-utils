const { UInt32, StructuredPrototypeArray, Hash160 } = require('../data_types/index')
const {
  VERUS_LINK,
  VERUS_LINK_HASH,
} = require("../constants/index");

module.exports = {
  schemas: {
    [VERUS_LINK_HASH]: [
      new Hash160("id"),
      new UInt32("version"),
      new StructuredPrototypeArray("objects")
    ]
  },
  strings: {
    [VERUS_LINK_HASH]: VERUS_LINK,
  }
}