const VerusZkedidUtils = require("../../../src/index");

describe("Coin Object integration testing", () => {
  it("Can create and read a coinObject import with all data", () => {
    const coinObj = {
      currency_id: "eth.vrsc",
      system_id: "Verus@",
      display_name: "Ethereum",
      display_ticker: "ETH",
      available_protocols: "eth|verus|zcash",
      theme_color: "#FF0000",
      dust_threshold: "0.00005",
      electrum_servers: "el0.veruscoin.io|el1.veruscoin.io|el2.veruscoin.io",
      tags: "is_pbaas|is_verus",
      default_tx_fee: "0.0001",
    };

    const import_ = VerusZkedidUtils.StructuredCurrencyImport.writeImport([
      VerusZkedidUtils.PresetObjects.CoinObj.create(coinObj),
    ]);

    const import_obj = VerusZkedidUtils.StructuredCurrencyImport.readImport(
      import_
    );

    expect(import_obj).toBeDefined();
  });

  it("Can create and read a coinObject import with missing data", () => {
    const coinObj = {
      currency_id: "eth.vrsc",
      system_id: "Verus@",
      display_name: "Ethereum",
      theme_color: "#FF0000",
      electrum_servers: "el0.veruscoin.io|el1.veruscoin.io|el2.veruscoin.io",
      tags: "is_pbaas|is_verus",
    };

    const import_ = VerusZkedidUtils.StructuredCurrencyImport.writeImport([
      VerusZkedidUtils.PresetObjects.CoinObj.create(coinObj),
    ]);

    const import_obj = VerusZkedidUtils.StructuredCurrencyImport.readImport(
      import_
    );

    expect(import_obj).toBeDefined();
  });
});
