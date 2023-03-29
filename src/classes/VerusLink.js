const {
  VERUS_LINK, VERUS_LINK_HASH, VERUS_LINK_VERSION
} = require('../utils/constants/index')
const presetHashMap = require('../utils/preset_hashes/index')
const { schemas } = presetHashMap
const StructuredPrototype = require('./StructuredPrototype/StructuredPrototype');

class VerusLink {
  static create(objects = []) {
    return {
      schema: schemas[VERUS_LINK_HASH],
      data: {
        id: VERUS_LINK,
        version: VERUS_LINK_VERSION,
        objects
      },
    };
  }

  static writeBuffer(objects) {
    return StructuredPrototype.writeBuffer(VerusLink.create(objects))
  }

  static readBuffer(buf, hashMap = {}) {
    return StructuredPrototype.readBuffer(buf, schemas[VERUS_LINK_HASH], {
      schemas: { ...hashMap.schemas, ...presetHashMap.schemas },
      strings: { ...hashMap.strings, ...presetHashMap.strings },
    });
  }

  static writeLink(objects) {
    return VerusLink.writeBuffer(objects).toString('hex')
  }

  static readLink(link, hashMap) {
    return VerusLink.readBuffer(Buffer.from(link, 'hex'), hashMap)
  }
}

module.exports = VerusLink