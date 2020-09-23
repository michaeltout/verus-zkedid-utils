"use strict";

var VerusZkedidUtils = require('../../../index');

describe('Attestation structured memo integration testing', function () {
  it('Can create and read an attestation', function () {
    var memo = VerusZkedidUtils.StructuredMemo.writeMemo([VerusZkedidUtils.PresetObjects.Attestation.create('covid19.health.claim:vrsc', 'test_data', 'nazif@', 'verus@')]);
    var memoObj = VerusZkedidUtils.StructuredMemo.readMemo(memo);
    expect(memoObj).toBeDefined();
  });
});