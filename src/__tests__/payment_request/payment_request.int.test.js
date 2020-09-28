const VerusZkedidUtils = require('../../index')

describe('Payment request integration testing', () => {
  it('Can create and read a simple payment request, with a coin import.', () => {
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
    
    expect(VerusZkedidUtils.VerusLink.readLink(VerusZkedidUtils.VerusLink.writeLink([
      VerusZkedidUtils.PresetObjects.VerusPaymentRequest.create(
        ".vrsc",
        "800000000",
        8,
        import_,
        ""
      ),
    ]))).toBeDefined()
  })
})
