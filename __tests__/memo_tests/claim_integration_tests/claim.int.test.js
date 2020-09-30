const VerusZkedidUtils = require('../../../src/index')

describe('Claim structured memo integration testing', () => {
  it('Can create and read a claim', () => {
    const memo = VerusZkedidUtils.StructuredMemo.writeMemo([
      VerusZkedidUtils.PresetObjects.Claim.create(
        "birthDate.personal-information.claim:vrsc",
        "05.05.1983",
        "damir@"
      ),
    ]);
    
    const memoObj = VerusZkedidUtils.StructuredMemo.readMemo(
      "9544fba5bfe538628294dc3f36a4a2cb67061a060000000000000001ef179f98cb644d95017cdebcdf1dbb3c8ba0597a002cb3872eca23c72c7096924effcd98c47e937dbf1600000000000a30352e30352e31393833000664616d697240",
      {
        strings: {
          [VerusZkedidUtils.utf8ToHash160(
            "firstName.personal-information.claim:vrsc"
          ).toString("hex")]: "firstName.personal-information.claim:vrsc",
          [VerusZkedidUtils.utf8ToHash160(
            "lastName.personal-information.claim:vrsc"
          ).toString("hex")]: "lastName.personal-information.claim:vrsc",
          [VerusZkedidUtils.utf8ToHash160(
            "birthDate.personal-information.claim:vrsc"
          ).toString("hex")]: "birthDate.personal-information.claim:vrsc",
          [VerusZkedidUtils.utf8ToHash160(
            "driversLicense.composite.claim:vrsc"
          ).toString("hex")]: "driversLicense.composite.claim:vrsc",
        },
      }
    );

    expect(memoObj).toBeDefined()
  })
})
