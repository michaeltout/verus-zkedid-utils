const StructuredPrototype = require('../../../classes/StructuredPrototype/StructuredPrototype')
const { UInt32, Hash160, StructuredMemoString, StructuredPrototypeType, StructuredPrototypeArray } = require('../../../../src/utils/data_types/index')

describe('Basic structured prototype tests', () => {
  it('Can create and verify basic structured prototype', () => {
    const buf = StructuredPrototype.writeBuffer({
      schema: [new Hash160('protocol'), new UInt32('version'), new StructuredPrototypeArray("objects")],
      data: {
        protocol: 'VRSC:MEMO',
        version: 2,
        objects: [
          {
            schema: [
              new StructuredPrototypeType("claim:vrsc"),
            ],
            data: {
              ["claim:vrsc"]: {
                schema: [
                  new Hash160('type'),
                  new UInt32('version'),
                  new StructuredMemoString('data')
                ],
                data: {
                  type: 'covid19.health:claim:vrsc',
                  version: 1,
                  data: "recovered",
                },
              },
            },
          },
          {
            schema: [
              new StructuredPrototypeType("claim:vrsc"),
            ],
            data: {
              ["claim:vrsc"]: {
                schema: [
                  new Hash160('type'),
                  new UInt32('version'),
                  new StructuredMemoString('data')
                ],
                data: {
                  type: 'covid19.health:claim:vrsc',
                  version: 1,
                  data: "recovered",
                },
              },
            },
          },
        ],
      },
    });

    const bufObj = StructuredPrototype.readBuffer(
      buf,
      [new Hash160('protocol'), new UInt32('version'), new StructuredPrototypeArray("objects")],
      {
        strings: {
          ["d01746c84996e95ea6cf1616b415976ab3593c40"]: 'VRSC:MEMO',
          ["1c7d9272f8aefcd7a31a5e9dcf0045059881aca4"]: 'covid19.health:claim:vrsc',
          ['ef179f98cb644d95017cdebcdf1dbb3c8ba0597a']: 'claim:vrsc'
        },
        schemas: {
          ["ef179f98cb644d95017cdebcdf1dbb3c8ba0597a"]: [
            new Hash160('type'),
            new UInt32('version'),
            new StructuredMemoString('data')
          ]
        }
      }
    );

    expect(bufObj.version).toBe(2)
    expect(bufObj.objects.length).toBe(2)
    expect(bufObj.objects[0].type).toBe('covid19.health:claim:vrsc')
    expect(bufObj.objects[0].version).toBe(1)
    expect(bufObj.objects[0].data).toBe('recovered')
    expect(bufObj.objects[1].type).toBe('covid19.health:claim:vrsc')
    expect(bufObj.objects[1].version).toBe(1)
    expect(bufObj.objects[1].data).toBe('recovered')
  })
})

