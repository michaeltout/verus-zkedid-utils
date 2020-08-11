const VerusZkedidUtils = require('../../../index')

describe('Coin Object integration testing', () => {
  it('Can create and read a coinObject import', () => {
    const coinObj = {
      id: 'TEST',
      name: 'TestCoin',
      isPbaasChain: true,
      themeColor: '#FF0000',
      available_modes: { native: true, electrum: true, eth: false },
      options: {
        dustThreshold: 100000,
        fallbackPort: 31423,
        startupOptions: '-ac_name=VRSC|-ac_supply=0|-ac_reward=0,38400000000,2400000000',
        daemon: 'verusd',
        customServers: 'el0.veruscoin.io:17485:tcp|el1.veruscoin.io:17485:tcp',
        dirNames: {
          darwin: 'Komodo/VRSC',
          linux: '.komodo/VRSC',
          win32: 'Komodo/VRSC'
        },
        tags: 'is_pbaas|is_verus|is_zcash|is_sapling',
        txFee: 10000
      }
    }

    const import_ = VerusZkedidUtils.StructuredCurrencyImport.writeImport([
      VerusZkedidUtils.PresetObjects.CoinObj.create(coinObj),
    ]);
    const import_obj = VerusZkedidUtils.StructuredCurrencyImport.readImport(import_)

    console.log(import_)
    console.log(import_obj)
    console.log(import_obj.objects[0].available_modes)
    console.log(import_obj.objects[0].options)
    
    expect(import_obj).toBeDefined()
  })
})
