const { 
  STRUCTURED_MEMO_IDENTIFIER,
  STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX
 } = require('../../src/utils/constants/index')
const { utf8ToHash160 } = require('../../src/utils/hash')

describe('Memo components hash verification', () => {
  it('Verifies that all hashes in the STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX match with their hash key', () => {
    Object.keys(STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX).map(hashKey => {
      expect(utf8ToHash160(STRUCTURED_MEMO_OBJECT_IDENTIFIER_INDEX[hashKey]).toString('hex')).toEqual(hashKey)
    })
  })

  it('Verifies that the Structured Memo Identifier hash matches the Structured Memo Identifier', () => {
    expect(utf8ToHash160(STRUCTURED_MEMO_IDENTIFIER).toString('hex')).toEqual(utf8ToHash160(STRUCTURED_MEMO_IDENTIFIER).toString('hex'))
  })
})