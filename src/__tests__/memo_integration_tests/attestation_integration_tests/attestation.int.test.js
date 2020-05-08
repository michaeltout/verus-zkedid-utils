const VerusZkedidUtils = require('../../../index')

describe('Attestation structured memo integration testing', () => {
  it('Can create and read an attestation', () => {
    const memo = VerusZkedidUtils.StructuredMemo.writeMemo([VerusZkedidUtils.PresetObjects.Attestation.create('covid19.health.claim:vrsc', 'test_data', 'nazif@', 'verus@')])
    const memoObj = VerusZkedidUtils.StructuredMemo.readMemo(memo)

    console.log(memo)
    console.log(memoObj)
    
    expect(memoObj).toBeDefined()
  })
})
