const { INVALID_SM_UNKNOWN_ERROR } = require('./constants/index')

const validityCheckResult = (isValid = false, message = "Unknown error", code = INVALID_SM_UNKNOWN_ERROR) => {
  return {
    isValid,
    message,
    code
  }
}

module.exports = {
  validityCheckResult
}