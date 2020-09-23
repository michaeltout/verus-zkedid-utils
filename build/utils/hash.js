"use strict";

var crypto = require('crypto'); // Returns RIPEMD160(SHA256(data)) (i.e. HASH160(data)) as a buffer


var utf8ToHash160 = function utf8ToHash160(data) {
  var ripemd160 = crypto.createHash('ripemd160');
  var sha256 = crypto.createHash('sha256');
  return ripemd160.update(sha256.update(data, 'utf8').digest()).digest();
};

module.exports = {
  utf8ToHash160: utf8ToHash160
};