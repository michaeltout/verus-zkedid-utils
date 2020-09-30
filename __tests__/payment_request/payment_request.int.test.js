const VerusZkedidUtils = require('../../src/index')

describe('Payment request integration testing', () => {
  it('Can create and read a simple payment request, with a coin import.', () => {
    const coinObj = {
      "currency_id": "eth.vrsc",
      "system_id": "Verus@",
      "display_name": "Ethereum",
      "display_ticker":"ETH",
      "available_protocols":"eth|verus|zcash",
      "theme_color":"#FF0000",
      "dust_threshold":"0.00005",
      "electrum_servers":"el0.veruscoin.io|el1.veruscoin.io|el2.veruscoin.io",
      "tags":"is_pbaas|is_verus",
      "default_tx_fee":"0.0001",
   }
    
    const import_ = VerusZkedidUtils.StructuredCurrencyImport.writeImport([
      VerusZkedidUtils.PresetObjects.CoinObj.create(coinObj),
    ]);
    
    expect(VerusZkedidUtils.VerusLink.readLink(VerusZkedidUtils.VerusLink.writeLink([
      VerusZkedidUtils.PresetObjects.VerusPaymentRequest.create(
        "Verus",
        "Verus@",
        "Verus",
        "VRSC",
        "143.1481717741748188",
        import_,
        {signer: 'Verus@', signature: "testsig"},
        ""
      ),
    ]))).toBeDefined()
  })
})
