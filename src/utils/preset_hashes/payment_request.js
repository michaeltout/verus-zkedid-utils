const { UInt32, StructuredMemoString, StructuredPrototypeType, Hash160 } = require('../data_types/index')
const {
  VERUS_PAYMENT_REQUEST,
  VERUS_PAYMENT_REQUEST_HASH,
  VERUS_PAYMENT_REQUEST_PAYLOAD,
  VERUS_PAYMENT_REQUEST_PAYLOAD_HASH,
} = require("../constants/index");

module.exports = {
  schemas: {
    [VERUS_PAYMENT_REQUEST_HASH]: [
      new UInt32("version"),
      new StructuredMemoString("type"),
      new StructuredPrototypeType(VERUS_PAYMENT_REQUEST_PAYLOAD),
    ],
    [VERUS_PAYMENT_REQUEST_PAYLOAD_HASH]: [
      new StructuredMemoString("currency_id"),
      new StructuredMemoString("system_id"),
      new StructuredMemoString("amount"),
      new StructuredMemoString("destination"),
      new StructuredMemoString("display_name"),
      new StructuredMemoString("display_ticker"),
      new StructuredMemoString("currency_import_signature"),
      new StructuredMemoString("currency_import_signer"),
      new StructuredMemoString("currency_import"),
      new StructuredMemoString("note"),
    ]
  },
  strings: {
    [VERUS_PAYMENT_REQUEST_HASH]: VERUS_PAYMENT_REQUEST,
    [VERUS_PAYMENT_REQUEST_PAYLOAD_HASH]: VERUS_PAYMENT_REQUEST_PAYLOAD,
  }
}