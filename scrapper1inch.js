
      // connect to Moralis server
      Moralis.initialize("6zKEBerofpqUATylotZIJKIvx9sLz7AazzJgYaU6");
      Moralis.serverURL = "https://81mabtdsck71.grandmoralis.com:2053/server";

      let dex;

      (async function(){

          await Moralis.initPlugins();
          dex = Moralis.Plugins.oneInch;

          await Moralis.enable();
          if(!Moralis.User.current())
            await Moralis.authenticate();
      })();

      async function swap(){

        const NATIVE_ADDRESS = "0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE";
        const ONEINCH_ADDRESS = "00x11111112542D85B3EF69AE05771c2dCCff4fAa26";

        const options = {chain:"eth", 
                              fromTokenAddress:NATIVE_ADDRESS, 
                              toTokenAddress:ONEINCH_ADDRESS,
                              amount: Number(Moralis.Units.ETH("0.01")),
                              fromAddress: Moralis.User.current().get("ethAddress"),
                              slippage: 1
                          }

        
        var receipt = await dex.swap(options);
        console.log(receipt)
       
      }
   var result = await dex.getSupportTokens({chain:"eth"})
   console.log(result)


