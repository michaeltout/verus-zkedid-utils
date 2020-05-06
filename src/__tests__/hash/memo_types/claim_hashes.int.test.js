const { 
  STRUCTURED_CLAIM,
  CLAIM_CATEGORY_INDEX,
  CLAIM_META_CATEGORIES
 } = require('../../../utils/constants/index')
const { utf8ToHash160 } = require('../../../utils/hash')

describe('Claim hash and claim hash index verification', () => {
  it('Verifies that all hashes in the CLAIM_CATEGORY_INDEX match with their hash key', () => {
    Object.keys(CLAIM_CATEGORY_INDEX).map(hashKey => {
      expect(utf8ToHash160(CLAIM_CATEGORY_INDEX[hashKey]).toString('hex')).toEqual(hashKey)
    })
  })
})

Object.keys(CLAIM_META_CATEGORIES).map(metaCategory => {
  describe(`Tests ${metaCategory} claim types and their presence in claim hash index`, () => {
    CLAIM_META_CATEGORIES[metaCategory].map((value) => {
      const claimType = `${value}.${metaCategory}.${STRUCTURED_CLAIM}`
  
      it(`verifies ${claimType}`, () => {  
        expect(CLAIM_CATEGORY_INDEX[utf8ToHash160(claimType).toString('hex')]).toEqual(claimType)
      })
    })
  })
})
