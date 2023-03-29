"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../data_types/index'),
    UInt32 = _require.UInt32,
    StructuredMemoString = _require.StructuredMemoString;

var _require2 = require("../constants/index"),
    STRUCTURED_COIN_OBJECT = _require2.STRUCTURED_COIN_OBJECT,
    STRUCTURED_COIN_OBJECT_HASH = _require2.STRUCTURED_COIN_OBJECT_HASH;

module.exports = {
  schemas: _defineProperty({}, STRUCTURED_COIN_OBJECT_HASH, [new UInt32("version"), new StructuredMemoString("id"), new StructuredMemoString("currency_id"), new StructuredMemoString("system_id"), new StructuredMemoString("display_name"), new StructuredMemoString("display_ticker"), new StructuredMemoString("available_protocols"), new StructuredMemoString("dust_threshold"), new StructuredMemoString("theme_color"), new StructuredMemoString("electrum_servers"), new StructuredMemoString("default_tx_fee")]),
  strings: _defineProperty({}, STRUCTURED_COIN_OBJECT_HASH, STRUCTURED_COIN_OBJECT)
};