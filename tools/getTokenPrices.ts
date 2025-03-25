import { getTokenPrice } from "../src/alchemy/getTokenPrice";
import type { ToolConfig } from "./allTools.js";

import type { GetTokenPricesArgs } from "../interface/index.js";

/**
 * Get the prices of tokens.
 *
 * This tool takes a single parameter, the wallet address to get the balance
 * from.
 */
export const getTokenPricesTool: ToolConfig<GetTokenPricesArgs> = {
  definition: {
    type: "function",
    function: {
      name: "get_token_prices",
      description: "Get the tokens prices",
      parameters: {
        type: "object",
        properties: {
          token: {
            type: "string",
            //pattern: "^0x[a-fA-F0-9]{40}$",
            description: "The symbol for the token",
          },
        },
        required: ["tokens"],
      },
    },
  },
  handler: async ({ token }) => {
    return await getPrices(token);
  },
};

async function getPrices(symbols: string) {
  //console.log("Symbols 0:"+symbols);
  const balance = await getTokenPrice(symbols);
  return balance;
}
