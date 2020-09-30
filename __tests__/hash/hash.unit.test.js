const { utf8ToHash160 } = require('../../src/utils/hash')

describe('Basic HASH160 unit tests', () => {
  it('Can hash simple string with hash160', () => {
    const given = {
      input: [
        "test"
      ],
    };
  
    const expected = 'cebaa98c19807134434d107b0d3e5692a516ea66'
    const actual = utf8ToHash160(given.input[0]).toString('hex')
  
    expect(actual).toEqual(expected)
  })
})

