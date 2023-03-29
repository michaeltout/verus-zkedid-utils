"use strict";

var secure = function secure(string) {
  return string == null ? '' : string;
};

module.exports = {
  secure: secure
};