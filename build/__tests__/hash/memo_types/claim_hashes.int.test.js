"use strict";

var _require = require('../../../utils/constants/index'),
    STRUCTURED_CLAIM = _require.STRUCTURED_CLAIM,
    CLAIM_CATEGORY_INDEX = _require.CLAIM_CATEGORY_INDEX,
    CLAIM_META_CATEGORIES = _require.CLAIM_META_CATEGORIES;

var _require2 = require('../../../utils/hash'),
    utf8ToHash160 = _require2.utf8ToHash160;

describe('Claim hash and claim hash index verification', function () {
  it('Verifies that all hashes in the CLAIM_CATEGORY_INDEX match with their hash key', function () {
    Object.keys(CLAIM_CATEGORY_INDEX).map(function (hashKey) {
      expect(utf8ToHash160(CLAIM_CATEGORY_INDEX[hashKey]).toString('hex')).toEqual(hashKey);
    });
  });
});
Object.keys(CLAIM_META_CATEGORIES).map(function (metaCategory) {
  describe("Tests ".concat(metaCategory, " claim types and their presence in claim hash index"), function () {
    CLAIM_META_CATEGORIES[metaCategory].map(function (value) {
      var claimType = "".concat(value, ".").concat(metaCategory, ".").concat(STRUCTURED_CLAIM);
      it("verifies ".concat(claimType), function () {
        expect(CLAIM_CATEGORY_INDEX[utf8ToHash160(claimType).toString('hex')]).toEqual(claimType);
      });
    });
  });
});