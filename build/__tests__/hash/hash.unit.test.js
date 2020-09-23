"use strict";

var _require = require('../../../src/utils/hash'),
    utf8ToHash160 = _require.utf8ToHash160;

describe('Basic HASH160 unit tests', function () {
  it('Can hash simple string with hash160', function () {
    var given = {
      input: ["test"]
    };
    var expected = 'cebaa98c19807134434d107b0d3e5692a516ea66';
    var actual = utf8ToHash160(given.input[0]).toString('hex');
    expect(actual).toEqual(expected);
  });
});