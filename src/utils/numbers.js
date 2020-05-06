const toUInt16Buffer = (n) => {
  let uInt16 = new Buffer.alloc(2)
  uInt16.writeUInt16BE(n, 0)

  return uInt16
}

const toUInt32Buffer = (n) => {
  let uInt32 = new Buffer.alloc(4)
  uInt32.writeUInt32BE(n, 0)

  return uInt32
}

const fromUInt16Buffer = (b) => {
  return b.readUInt16BE(0)
}

const fromUInt32Buffer = (b) => {
  return b.readUInt32BE(0)
}

module.exports = {
  toUInt16Buffer,
  toUInt32Buffer,
  fromUInt16Buffer,
  fromUInt32Buffer
}