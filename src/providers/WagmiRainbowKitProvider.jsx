import React, { createContext, useState } from 'react';
import { WagmiProvider } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum, base } from 'wagmi/chains';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { darkTheme, getDefaultConfig, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import {
    bybitWallet,
    metaMaskWallet,
    tokenPocketWallet,
    bitgetWallet,
    coinbaseWallet,
    rabbyWallet,
    coin98Wallet,
    
    walletConnectWallet
} from '@rainbow-me/rainbowkit/wallets';
import '@rainbow-me/rainbowkit/styles.css';
import { TOKENLIST_ITEM_INFO } from '../utils';

const queryClient = new QueryClient();
const config = getDefaultConfig({
    appName: 'Mantle Bridge',
    projectId: '88a486d1a417d388f940b35c12a95565',
    chains: [mainnet, polygon, optimism, arbitrum, base],
    ssr: true,
    wallets: [
        { groupName: 'Popular', wallets: [metaMaskWallet, walletConnectWallet] },
        { groupName: 'Others wallet', wallets: [bybitWallet, bitgetWallet, tokenPocketWallet, rabbyWallet, coinbaseWallet, coin98Wallet] }
    ]
});

export const AppStateContext = createContext();

function WagmiRainbowKitProvider({ children }) {
    const [depositTabSelectedToken, updateDepositTabSelectedTokenInfo] = useState(TOKENLIST_ITEM_INFO[0]);
    const [withdrawTabSelectedToken, updateWithdrawTabSelectedTokenInfo] = useState(TOKENLIST_ITEM_INFO[0]);

    return (
        <WagmiProvider config={config}>
            <QueryClientProvider client={queryClient}>
                <RainbowKitProvider
                    modalSize='wide'
                    theme={darkTheme({
                        accentColor: '#65b3ae'
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
                        depositTabSelectedToken,
                        updateDepositTabSelectedTokenInfo,
                        withdrawTabSelectedToken,
                        updateWithdrawTabSelectedTokenInfo
                    }}>
                        {children}
                    </AppStateContext.Provider>
                </RainbowKitProvider>
            </QueryClientProvider>
        </WagmiProvider>
    );
}

export default WagmiRainbowKitProvider;
