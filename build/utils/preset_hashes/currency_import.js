"use strict";

var _schemas, _strings;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../data_types/index'),
    UInt32 = _require.UInt32,
    StructuredMemoString = _require.StructuredMemoString,
    Boolean = _require.Boolean,
    StructuredPrototypeType = _require.StructuredPrototypeType;

var _require2 = require("../constants/index"),
    STRUCTURED_COIN_OBJECT = _require2.STRUCTURED_COIN_OBJECT,
    STRUCTURED_COIN_OBJECT_OPTIONS = _require2.STRUCTURED_COIN_OBJECT_OPTIONS,
    STRUCTURED_COIN_OBJECT_AVAILABLE_MODES = _require2.STRUCTURED_COIN_OBJECT_AVAILABLE_MODES,
    STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES = _require2.STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES,
    STRUCTURED_COIN_OBJECT_HASH = _require2.STRUCTURED_COIN_OBJECT_HASH,
    STRUCTURED_COIN_OBJECT_OPTIONS_HASH = _require2.STRUCTURED_COIN_OBJECT_OPTIONS_HASH,
    STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH = _require2.STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH,
    STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH = _require2.STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH;

module.exports = {
  schemas: (_schemas = {}, _defineProperty(_schemas, STRUCTURED_COIN_OBJECT_HASH, [new UInt32("coinObj_version"), new StructuredMemoString("id"), new StructuredMemoString("name"), new UInt32("coinObj_version"), new Boolean("isPbaasChain"), new StructuredMemoString("themeColor"), new StructuredPrototypeType("available_modes"), new StructuredPrototypeType("options")]), _defineProperty(_schemas, STRUCTURED_COIN_OBJECT_OPTIONS_HASH, [new UInt32("dustThreshold"), new UInt32("fallbackPort"), new StructuredMemoString("startupOptions"), new StructuredMemoString("daemon"), new StructuredMemoString("customServers"), new StructuredMemoString("tags"), new UInt32("txFee"), new StructuredPrototypeType("dirNames")]), _defineProperty(_schemas, STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH, [new Boolean("native"), new Boolean("electrum"), new Boolean("eth")]), _defineProperty(_schemas, STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH, [new StructuredMemoString("darwin"), new StructuredMemoString("linux"), new StructuredMemoString("win32")]), _schemas),
  strings: (_strings = {}, _defineProperty(_strings, STRUCTURED_COIN_OBJECT_HASH, STRUCTURED_COIN_OBJECT), _defineProperty(_strings, STRUCTURED_COIN_OBJECT_OPTIONS_HASH, STRUCTURED_COIN_OBJECT_OPTIONS), _defineProperty(_strings, STRUCTURED_COIN_OBJECT_AVAILABLE_MODES_HASH, STRUCTURED_COIN_OBJECT_AVAILABLE_MODES), _defineProperty(_strings, STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES_HASH, STRUCTURED_COIN_OBJECT_DIRECTORY_NAMES), _strings)
};