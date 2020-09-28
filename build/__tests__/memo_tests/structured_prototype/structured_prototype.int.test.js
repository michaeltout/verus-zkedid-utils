"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StructuredPrototype = require('../../../classes/StructuredPrototype/StructuredPrototype');

var _require = require('../../../../src/utils/data_types/index'),
    UInt32 = _require.UInt32,
    Hash160 = _require.Hash160,
    StructuredMemoString = _require.StructuredMemoString,
    StructuredPrototypeType = _require.StructuredPrototypeType,
    StructuredPrototypeArray = _require.StructuredPrototypeArray;

describe('Basic structured prototype tests', function () {
  it('Can create and verify basic structured prototype', function () {
    var _strings;

    var buf = StructuredPrototype.writeBuffer({
      schema: [new Hash160('protocol'), new UInt32('version'), new StructuredPrototypeArray("objects")],
      data: {
        protocol: 'VRSC:MEMO',
        version: 2,
        objects: [{
          schema: [new StructuredPrototypeType("claim:vrsc")],
          data: _defineProperty({}, "claim:vrsc", {
            schema: [new Hash160('type'), new UInt32('version'), new StructuredMemoString('data')],
            data: {
              type: 'covid19.health:claim:vrsc',
              version: 1,
              data: "recovered"
            }
          })
        }, {
          schema: [new StructuredPrototypeType("claim:vrsc")],
          data: _defineProperty({}, "claim:vrsc", {
            schema: [new Hash160('type'), new UInt32('version'), new StructuredMemoString('data')],
            data: {
              type: 'covid19.health:claim:vrsc',
              version: 1,
              data: "recovered"
            }
          })
        }]
      }
    });
    var bufObj = StructuredPrototype.readBuffer(buf, [new Hash160('protocol'), new UInt32('version'), new StructuredPrototypeArray("objects")], {
      strings: (_strings = {}, _defineProperty(_strings, "d01746c84996e95ea6cf1616b415976ab3593c40", 'VRSC:MEMO'), _defineProperty(_strings, "1c7d9272f8aefcd7a31a5e9dcf0045059881aca4", 'covid19.health:claim:vrsc'), _defineProperty(_strings, 'ef179f98cb644d95017cdebcdf1dbb3c8ba0597a', 'claim:vrsc'), _strings),
      schemas: _defineProperty({}, "ef179f98cb644d95017cdebcdf1dbb3c8ba0597a", [new Hash160('type'), new UInt32('version'), new StructuredMemoString('data')])
    });
    expect(bufObj.version).toBe(2);
    expect(bufObj.objects.length).toBe(2);
    expect(bufObj.objects[0].type).toBe('covid19.health:claim:vrsc');
    expect(bufObj.objects[0].version).toBe(1);
    expect(bufObj.objects[0].data).toBe('recovered');
    expect(bufObj.objects[1].type).toBe('covid19.health:claim:vrsc');
    expect(bufObj.objects[1].version).toBe(1);
    expect(bufObj.objects[1].data).toBe('recovered');
  });
});