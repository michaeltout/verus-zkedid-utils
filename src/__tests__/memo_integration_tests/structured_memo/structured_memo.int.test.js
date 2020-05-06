/*const StructuredMemo = require('../../../../src/classes/StructuredMemo')
const StructuredPrototype = require('../../../classes/StructuredPrototype/StructuredPrototype')
const { UInt32, Hash160, StructuredMemoString } = require('../../../../src/utils/data_types/index')
const { STRUCTURED_MEMO_VERSION } = require('../../../../src/utils/constants/index')

describe('Basic structured memo tests', () => {
  it('Can create and verify basic structured memo', () => {
    const subProto = new StructuredPrototype(
      [
        new UInt32("number_sub"),
        new Hash160("hash", "hash_one"),
        new StructuredMemoString("data"),
      ],
      "subproto"
    );
    const proto = new StructuredPrototype(
      [
        new UInt32("number_main"),
        new Hash160("hashhash", "hash_two"),
        subProto,
      ],
      "proto"
    );
    const memo = new StructuredMemo(proto)

    const mem = memo.writeMemo({
      number_main: 8,
      subproto: {
        number_sub: 2,
        data: 'filler'
      }
    })

    const parsedMemo = memo.readMemo(mem)

    expect(parsedMemo.version).toBe(STRUCTURED_MEMO_VERSION)
    expect(parsedMemo.proto.number_main).toBe(8)
    expect(parsedMemo.proto.subproto.number_sub).toBe(2)
    expect(parsedMemo.proto.subproto.data).toBe("filler")
  })
})*/

