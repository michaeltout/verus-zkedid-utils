var crypto = require('crypto');

// Returns RIPEMD160(SHA256(data)) (i.e. HASH160(data)) as a buffer
const utf8ToHash160 = (data) => {
  let ripemd160 = crypto.createHash('ripemd160');
  let sha256 = crypto.createHash('sha256');

  return ripemd160.update(sha256.update(data, 'utf8').digest()).digest();
}

module.exports = {
  utf8ToHash160
}