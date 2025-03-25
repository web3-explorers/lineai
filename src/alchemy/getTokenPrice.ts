import { Network, Alchemy } from "alchemy-sdk";


export async function getTokenPrice(symbols:string) {


    if (!process.env.ALCHEMY_API_KEY) {
        throw new Error(
          "⛔ ALCHEMY_API_KEY environment variable is not set. You need to set it to connect with Alchemy API."
        );
    }

    //console.log("Symbols 1:"+[symbols]);
    const settings = {
        apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
        network: Network.LINEA_SEPOLIA, // Replace with your network.
      };
    const alchemy = new Alchemy(settings);

    const tokens = symbols.split(",");
    const prices = await alchemy.prices.getTokenPriceBySymbol(tokens);
    return prices.data[0].prices[0].value+ " "+prices.data[0].prices[0].currency;
    
};