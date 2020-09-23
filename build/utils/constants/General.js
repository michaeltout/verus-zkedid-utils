"use strict";

/* eslint-disable */
// Unknown/Unrecognized Claims
var UNKNOWN = 'unknown'; // Numbers

var MAX_UINT16 = 65535;
var MAX_UINT32 = 4294967295;
var MAX_UINT64 = 9223372036854775807n; // Byte data delimiters

var START_OF_TEXT = 0x02;
var END_OF_TEXT = 0x03;
module.exports = {
  UNKNOWN: UNKNOWN,
  MAX_UINT16: MAX_UINT16,
  START_OF_TEXT: START_OF_TEXT,
  END_OF_TEXT: END_OF_TEXT,
  MAX_UINT32: MAX_UINT32,
  MAX_UINT64: MAX_UINT64
};