const { UInt32, StructuredMemoString } = require('../data_types/index')
const {
  STRUCTURED_COIN_OBJECT,
  STRUCTURED_COIN_OBJECT_HASH,
} = require("../constants/index");

module.exports = {
  schemas: {
    [STRUCTURED_COIN_OBJECT_HASH]: [
      new UInt32("version"),
      new StructuredMemoString("id"),
      new StructuredMemoString("currency_id"),
      new StructuredMemoString("system_id"),
      new StructuredMemoString("display_name"),
      new StructuredMemoString("display_ticker"),
      new StructuredMemoString("available_protocols"),
      new StructuredMemoString("dust_threshold"),
      new StructuredMemoString("theme_color"),
      new StructuredMemoString("electrum_servers"),
      new StructuredMemoString("default_tx_fee"),
    ],
  },
  strings: {
    [STRUCTURED_COIN_OBJECT_HASH]: STRUCTURED_COIN_OBJECT,
  }
}