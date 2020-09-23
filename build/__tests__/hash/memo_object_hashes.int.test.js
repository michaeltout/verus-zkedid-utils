"use strict";

var _require = require('../../utils/constants/index'),
    STRUCTURED_MEMO_IDENTIFIER = _require.STRUCTURED_MEMO_IDENTIFIER,
    STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX = _require.STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX;

var _require2 = require('../../utils/hash'),
    utf8ToHash160 = _require2.utf8ToHash160;

describe('Memo components hash verification', function () {
  it('Verifies that all hashes in the STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX match with their hash key', function () {
    Object.keys(STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX).map(function (hashKey) {
      expect(utf8ToHash160(STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX[hashKey]).toString('hex')).toEqual(hashKey);
    });
  });
  it('Verifies that the Structured Memo Identifier hash matches the Structured Memo Identifier', function () {
    expect(utf8ToHash160(STRUCTURED_MEMO_IDENTIFIER).toString('hex')).toEqual(utf8ToHash160(STRUCTURED_MEMO_IDENTIFIER).toString('hex'));
  });
});