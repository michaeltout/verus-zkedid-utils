"use strict";

var _require = require("../hash"),
    utf8ToHash160 = _require.utf8ToHash160; // Verus Link Defaults


var VERUS_LINK_VERSION = 0;
var VERUS_LINK = 'link:vrsc';
var VERUS_LINK_HASH = [utf8ToHash160(VERUS_LINK).toString('hex')];
module.exports = {
  VERUS_LINK_VERSION: VERUS_LINK_VERSION,
  VERUS_LINK: VERUS_LINK,
  VERUS_LINK_HASH: VERUS_LINK_HASH
};