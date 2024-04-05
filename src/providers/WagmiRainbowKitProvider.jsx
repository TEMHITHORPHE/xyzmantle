/* eslint-disable react/prop-types */

import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { rainbowWallet } from '@rainbow-me/rainbowkit/wallets';

import '@rainbow-me/rainbowkit/styles.css';


const mantletestnet = {
    id: 5001,
    name: 'Mantle Testnet',
    network: 'Mantle Testnet',
    iconUrl: 'https://i.imgur.com/Q3oIdip.png',
    iconBackground: '#fff',
    nativeCurrency: {
        decimals: 18,
        name: 'BIT',
        symbol: 'BIT',
    },
    rpcUrls: {
        default: {
            http: ['https://rpc.testnet.mantle.xyz'],
        },
    },
    blockExplorers: {
        default: { name: 'Mantle Testnet Explorer', url: 'https://explorer.testnet.mantle.xyz' },
    },
    testnet: true,
};




const queryClient = new QueryClient()



const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: '234567890',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true, // If your dApp uses server side rendering (SSR)
    wallets: [
        {
            groupName: 'Popular',
            wallets: [rainbowWallet],
        },
    ]
});



function WagmiRainbowKitProvider({ children }) {
    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    appInfo={{
                        disclaimer: ({ Text, Link }) => (
                            <Text>
                                By connecting your wallet, you agree to the
                                <Link href="https://termsofservice.xyz">Terms of Service</Link> and
                                acknowledge you have read and understand the protocol
                                <Link href="https://disclaimer.xyz">Disclaimer</Link>
                            </Text>
                        )
                    }}
                >
                    {children}
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default WagmiRainbowKitProvider;