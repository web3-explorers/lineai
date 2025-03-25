import { createPublicClient, http } from "viem";
import { lineaSepolia } from "viem/chains";

/**
 * Creates a new public Viem client connected to the Linea network.
 *
 * A public client is a client that is not connected to a specific wallet and
 * therefore cannot perform write operations.
 *
 * @returns A new public Viem client.
 */
export function createViemPublicClient() {
  return createPublicClient({
    /**
     * The chain to connect to.
     *
     * In this case, we're using the Linea network.
     */
    chain: lineaSepolia,

    /**
     * The transport to use for HTTP requests.
     *
     * In this case, we're using the built-in HTTP transport.
     */
    transport: http(),
  });
}
