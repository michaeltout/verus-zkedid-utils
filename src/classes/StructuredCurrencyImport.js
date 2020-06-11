const {
  CURRENCY_IMPORT_IDENTIFIER,
  CURRENCY_IMPORT_VERSION,
} = require('../utils/constants/index')
const StructuredPrototype = require('./StructuredPrototype/StructuredPrototype')
const { UInt32, Hash160, StructuredPrototypeArray } = require('../utils/data_types/index')
const presetHashMap = require('../utils/preset_hashes/index')
const CurrencySchema = [new Hash160('id'), new UInt32('version'), new StructuredPrototypeArray("objects")]

class StructuredCurrencyImport {
  static readBuffer(buf, hashMap = {}) {
    return StructuredPrototype.readBuffer(buf, CurrencySchema, {
      schemas: { ...hashMap.schemas, ...presetHashMap.schemas },
      strings: { ...hashMap.strings, ...presetHashMap.strings },
    });
  }

  // Takes in an array of coinObjects and creates a coin_import buffer
  static writeBuffer(objects) {
    return StructuredPrototype.writeBuffer({
      schema: CurrencySchema,
      data: {
        id: CURRENCY_IMPORT_IDENTIFIER,
        version: CURRENCY_IMPORT_VERSION,
        objects
      }
    })
  }

  static writeImport(objects) {
    return StructuredCurrencyImport.writeBuffer(objects).toString('hex')
  }

  static readImport(currencyImport, hashMap) {
    return StructuredCurrencyImport.readBuffer(Buffer.from(currencyImport, 'hex'), hashMap)
  }
}

module.exports = StructuredCurrencyImport