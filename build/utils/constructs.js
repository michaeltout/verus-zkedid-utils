"use strict";

var _require = require('./constants/index'),
    INVALID_SM_UNKNOWN_ERROR = _require.INVALID_SM_UNKNOWN_ERROR;

var validityCheckResult = function validityCheckResult() {
  var isValid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "Unknown error";
  var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : INVALID_SM_UNKNOWN_ERROR;
  return {
    isValid: isValid,
    message: message,
    code: code
  };
};

module.exports = {
  validityCheckResult: validityCheckResult
};