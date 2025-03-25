import { Network, Alchemy } from "alchemy-sdk";


export async function getTokensForAccount(wallet:string) {


    if (!process.env.ALCHEMY_API_KEY) {
        throw new Error(
          "⛔ ALCHEMY_API_KEY environment variable is not set. You need to set it to connect with Alchemy API."
        );
    }

    const settings = {
        apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
        network: Network.LINEA_SEPOLIA, // Replace with your network.
      };
    const alchemy = new Alchemy(settings);

    const balances = await alchemy.core.getTokenBalances(wallet);
    return balances.tokenBalances;
};