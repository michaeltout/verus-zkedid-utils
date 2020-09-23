"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var VerusZkedidUtils = require('../../../index');

describe('Claim structured memo integration testing', function () {
  it('Can create and read a claim', function () {
    var _strings;

    var memo = VerusZkedidUtils.StructuredMemo.writeMemo([VerusZkedidUtils.PresetObjects.Claim.create("birthDate.personal-information.claim:vrsc", "05.05.1983", "damir@")]);
    var memoObj = VerusZkedidUtils.StructuredMemo.readMemo("9544fba5bfe538628294dc3f36a4a2cb67061a060000000000000001ef179f98cb644d95017cdebcdf1dbb3c8ba0597a002cb3872eca23c72c7096924effcd98c47e937dbf1600000000000a30352e30352e31393833000664616d697240", {
      strings: (_strings = {}, _defineProperty(_strings, VerusZkedidUtils.utf8ToHash160("firstName.personal-information.claim:vrsc").toString("hex"), "firstName.personal-information.claim:vrsc"), _defineProperty(_strings, VerusZkedidUtils.utf8ToHash160("lastName.personal-information.claim:vrsc").toString("hex"), "lastName.personal-information.claim:vrsc"), _defineProperty(_strings, VerusZkedidUtils.utf8ToHash160("birthDate.personal-information.claim:vrsc").toString("hex"), "birthDate.personal-information.claim:vrsc"), _defineProperty(_strings, VerusZkedidUtils.utf8ToHash160("driversLicense.composite.claim:vrsc").toString("hex"), "driversLicense.composite.claim:vrsc"), _strings)
    });
    expect(memoObj).toBeDefined();
  });
});