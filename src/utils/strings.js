const secure = function(string) {
  return string == null ? '' : string
}

module.exports = {
  secure
}