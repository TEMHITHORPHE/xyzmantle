/* eslint-disable no-empty-pattern */

import { useState } from 'react';
import { Tab } from '@headlessui/react';

import BridgePageWithdrawTab from './components/BridgePageWithdrawTab';

import Faqs from './components/Faqs';
import BridgePageNavbar from './components/BridgePageNavbar';
import { BridgePageNotif } from './components/BridgePageNotif';
import BridgePageFooter from './components/BridgePageFooter';
import InputComboBoxSection from './components/InputComboBoxSection';

import { TOKENLIST_ITEM_INFO } from './utils';




function MantleBridge() {

    const [currentTab, updateActiveTab] = useState('deposit');
    const [depositTabSelectedToken, updateDepositTabSelectedTokenInfo] = useState(TOKENLIST_ITEM_INFO[0]);
    const [withdrawTabSelectedToken, updateWithdrawTabSelectedTokenInfo] = useState(TOKENLIST_ITEM_INFO[0]);

    const OnWithdrawTabComboBoxTokenUpdate = (tokenInfo) => {
        updateWithdrawTabSelectedTokenInfo(tokenInfo);
        // updateActiveTab();
    }

    const OnDepositTabComboBoxTokenUpdate = (tokenInfo) => {
        updateDepositTabSelectedTokenInfo(tokenInfo);
    }

    return (
        <div id="bridge-main">
            <BridgePageNavbar />
            <div className="flex flex-col px-4 min-h-fit justify-between">
                <h1 className="GTWalsheimMedium text-[48px] text-type-primary text-center mb-8">
                    Mantle Bridge
                </h1>
                <main className="bg-white/[.06] rounded-[14px] py-8 px-5 mx-auto max-w-lg w-full grid gap-4 relative">
                    <Tab.Group defaultIndex={0}>
                        <Tab.List className='flex space-x-2 rounded-[10px] bg-white/[0.05] p-1 select-none '>

                            {/* Deposit  */}
                            <Tab as='span' className='w-full'>
                                {
                                    ({ selected }) => {
                                        if (selected) updateActiveTab('deposit');
                                        return (
                                            <button
                                                id="headlessui-tabs-tab-:r2e:" role="tab" type="button" aria-selected="false"
                                                className={(selected ? 'text-black bg-white ' : ' hover:bg-white/[0.12] text-white bg-transparent ') + ` w-full bg-transparent rounded-lg hover:border-transparent py-2.5 text-sm font-medium transition-all px-2.5
                                             ring-white ring-opacity-0 ring-offset-0 ring-offset-white focus:outline-none focus:ring-2
                                               `}
                                            >
                                                Deposit
                                            </button>
                                        )
                                    }
                                }
                            </Tab>

                            {/* Withdraw  */}
                            <Tab as='span' className='w-full'>
                                {
                                    ({ selected }) => {
                                        if (selected) updateActiveTab('withdraw');
                                        return (
                                            <button
                                                id="headlessui-tabs-tab-:r2e:" role="tab" type="button" aria-selected="false"
                                                className={(selected ? 'text-black bg-white ' : ' hover:bg-white/[0.12] text-white bg-transparent ') + ` w-full bg-transparent rounded-lg hover:border-transparent py-2.5 text-sm font-medium transition-all px-2.5
                                             ring-white ring-opacity-0 ring-offset-0 ring-offset-white focus:outline-none focus:ring-2
                                               `}
                                            >
                                                Withdraw
                                            </button>
                                        )
                                    }
                                }
                            </Tab>

                        </Tab.List>

                        <Tab.Panels>
                            <Tab.Panel>
                                { /*  Deposit Tab  */}
                                <InputComboBoxSection activeTab='deposit'
                                    selectedToken={depositTabSelectedToken} changeSelectedToken={OnDepositTabComboBoxTokenUpdate}
                                />
                            </Tab.Panel>
                            <Tab.Panel>
                                { /*  Withdraw Tab  */}
                                <BridgePageWithdrawTab comboBoxSelectedToken={withdrawTabSelectedToken} comboBoxTokenUpdate={OnWithdrawTabComboBoxTokenUpdate} />
                            </Tab.Panel>
                        </Tab.Panels>
                    </Tab.Group>
                </main>
                <Faqs />
                <BridgePageNotif />
            </div>
            <BridgePageFooter />
        </div>
    )
}

export default MantleBridge;
