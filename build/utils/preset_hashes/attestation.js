"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _require = require('../data_types/index'),
    Hash160 = _require.Hash160,
    UInt32 = _require.UInt32,
    StructuredMemoString = _require.StructuredMemoString;

var _require2 = require('../hash'),
    utf8ToHash160 = _require2.utf8ToHash160;

var _require3 = require('../constants/index'),
    STRUCTURED_ATTESTATION = _require3.STRUCTURED_ATTESTATION;

var attestation_schemas = _defineProperty({}, utf8ToHash160(STRUCTURED_ATTESTATION).toString('hex'), [new Hash160("type"), new UInt32("version"), new StructuredMemoString("data"), new StructuredMemoString("to"), new StructuredMemoString("from")]);

var attestation_strings = _defineProperty({}, utf8ToHash160(STRUCTURED_ATTESTATION).toString('hex'), STRUCTURED_ATTESTATION);

module.exports = {
  schemas: attestation_schemas,
  strings: attestation_strings
};