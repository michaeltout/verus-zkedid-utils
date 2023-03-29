"use strict";

var _schemas, _strings;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../data_types/index'),
    UInt32 = _require.UInt32,
    StructuredMemoString = _require.StructuredMemoString,
    StructuredPrototypeType = _require.StructuredPrototypeType,
    Hash160 = _require.Hash160;

var _require2 = require("../constants/index"),
    VERUS_PAYMENT_REQUEST = _require2.VERUS_PAYMENT_REQUEST,
    VERUS_PAYMENT_REQUEST_HASH = _require2.VERUS_PAYMENT_REQUEST_HASH,
    VERUS_PAYMENT_REQUEST_PAYLOAD = _require2.VERUS_PAYMENT_REQUEST_PAYLOAD,
    VERUS_PAYMENT_REQUEST_PAYLOAD_HASH = _require2.VERUS_PAYMENT_REQUEST_PAYLOAD_HASH;

module.exports = {
  schemas: (_schemas = {}, _defineProperty(_schemas, VERUS_PAYMENT_REQUEST_HASH, [new UInt32("version"), new StructuredMemoString("type"), new StructuredPrototypeType(VERUS_PAYMENT_REQUEST_PAYLOAD)]), _defineProperty(_schemas, VERUS_PAYMENT_REQUEST_PAYLOAD_HASH, [new StructuredMemoString("currency_id"), new StructuredMemoString("system_id"), new StructuredMemoString("amount"), new StructuredMemoString("destination"), new StructuredMemoString("display_name"), new StructuredMemoString("display_ticker"), new StructuredMemoString("currency_import_signature"), new StructuredMemoString("currency_import_signer"), new StructuredMemoString("currency_import"), new StructuredMemoString("note")]), _schemas),
  strings: (_strings = {}, _defineProperty(_strings, VERUS_PAYMENT_REQUEST_HASH, VERUS_PAYMENT_REQUEST), _defineProperty(_strings, VERUS_PAYMENT_REQUEST_PAYLOAD_HASH, VERUS_PAYMENT_REQUEST_PAYLOAD), _strings)
};