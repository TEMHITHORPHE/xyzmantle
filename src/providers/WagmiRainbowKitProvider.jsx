/* eslint-disable react/prop-types */

import { createContext, useState } from 'react';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base, } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { darkTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { bybitWallet, metaMaskWallet, tokenPocketWallet, bitgetWallet, coinbaseWallet, rabbyWallet, coin98Wallet, walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';

import '@rainbow-me/rainbowkit/styles.css';
import { TOKENLIST_ITEM_INFO } from '../utils';


// const mantletestnet = {
//     id: 5001,
//     name: 'Mantle Testnet',
//     network: 'Mantle Testnet',
//     iconUrl: 'https://i.imgur.com/Q3oIdip.png',
//     iconBackground: '#fff',
//     nativeCurrency: {
//         decimals: 18,
//         name: 'BIT',
//         symbol: 'BIT',
//     },
//     rpcUrls: {
//         default: {
//             http: ['https://rpc.testnet.mantle.xyz'],
//         },
//     },
//     blockExplorers: {
//         default: { name: 'Mantle Testnet Explorer', url: 'https://explorer.testnet.mantle.xyz' },
//     },
//     testnet: true,
// };


const queryClient = new QueryClient()
const config = getDefaultConfig({
    appName: 'Mantle Bridge',
    projectId: '234567890',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true, // If your dApp uses server side rendering (SSR)
    wallets: [
        { groupName: 'Popular', wallets: [metaMaskWallet, walletConnectWallet] },
        { groupName: 'Others wallet', wallets: [bybitWallet, bitgetWallet, tokenPocketWallet, rabbyWallet, coinbaseWallet, coin98Wallet] }
    ]
});


export const AppStateContext = createContext({
    // selectedToken: TOKENLIST_ITEM_INFO[0]
});


function WagmiRainbowKitProvider({ children }) {

    const [depositTabSelectedToken, updateDepositTabSelectedTokenInfo] = useState(TOKENLIST_ITEM_INFO[0]);
    const [withdrawTabSelectedToken, updateWithdrawTabSelectedTokenInfo] = useState(TOKENLIST_ITEM_INFO[0]);


    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider modalSize='wide'
                    theme={darkTheme({
                        accentColor: '#65b3ae',

                    })}
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
                    <AppStateContext.Provider value={{
                        depositTabSelectedToken, updateDepositTabSelectedTokenInfo,
                        withdrawTabSelectedToken, updateWithdrawTabSelectedTokenInfo
                    }}>
                        {children}
                    </AppStateContext.Provider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    )
}

export default WagmiRainbowKitProvider;