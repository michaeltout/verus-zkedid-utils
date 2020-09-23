"use strict";

var _verus_strings;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../constants/index'),
    STRUCTURED_MEMO_IDENTIFIER = _require.STRUCTURED_MEMO_IDENTIFIER,
    CURRENCY_IMPORT_IDENTIFIER = _require.CURRENCY_IMPORT_IDENTIFIER;

var _require2 = require('../hash'),
    utf8ToHash160 = _require2.utf8ToHash160;

var verus_strings = (_verus_strings = {}, _defineProperty(_verus_strings, utf8ToHash160(STRUCTURED_MEMO_IDENTIFIER).toString('hex'), STRUCTURED_MEMO_IDENTIFIER), _defineProperty(_verus_strings, utf8ToHash160(CURRENCY_IMPORT_IDENTIFIER).toString('hex'), CURRENCY_IMPORT_IDENTIFIER), _verus_strings);
module.exports = {
  strings: verus_strings
};