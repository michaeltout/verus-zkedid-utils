"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../data_types/index'),
    UInt32 = _require.UInt32,
    StructuredPrototypeArray = _require.StructuredPrototypeArray,
    Hash160 = _require.Hash160;

var _require2 = require("../constants/index"),
    VERUS_LINK = _require2.VERUS_LINK,
    VERUS_LINK_HASH = _require2.VERUS_LINK_HASH;

module.exports = {
  schemas: _defineProperty({}, VERUS_LINK_HASH, [new Hash160("id"), new UInt32("version"), new StructuredPrototypeArray("objects")]),
  strings: _defineProperty({}, VERUS_LINK_HASH, VERUS_LINK)
};