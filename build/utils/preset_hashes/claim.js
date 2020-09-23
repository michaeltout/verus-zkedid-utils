"use strict";

var _claim_strings;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../data_types/index'),
    Hash160 = _require.Hash160,
    UInt32 = _require.UInt32,
    StructuredMemoString = _require.StructuredMemoString;

var _require2 = require('../hash'),
    utf8ToHash160 = _require2.utf8ToHash160;

var _require3 = require('../constants/index'),
    STRUCTURED_CLAIM = _require3.STRUCTURED_CLAIM;

var claim_schemas = _defineProperty({}, utf8ToHash160(STRUCTURED_CLAIM).toString('hex'), [new Hash160('type'), new UInt32('version'), new StructuredMemoString('data'), new StructuredMemoString("to")]);

var claim_strings = (_claim_strings = {}, _defineProperty(_claim_strings, utf8ToHash160(STRUCTURED_CLAIM).toString('hex'), STRUCTURED_CLAIM), _defineProperty(_claim_strings, utf8ToHash160('covid19.health.claim:vrsc').toString('hex'), 'covid19.health.claim:vrsc'), _claim_strings);
module.exports = {
  schemas: claim_schemas,
  strings: claim_strings
};