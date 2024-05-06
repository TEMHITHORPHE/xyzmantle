/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */

import { Disclosure } from '@headlessui/react'
import { AnimatedHeadlessUIDisclosurePanel } from './AnimatedHeadlessUIDisclosurePanel'
import { memo, useState } from 'react'


function Faqs() {

    const [openedPanel, changeOpenedPanel] = useState(0);

    return (
        <div className='flex flex-col w-full lg:w-auto mt-16 items-center'>
            <div className=' w-full md:max-w-lg bg-[#000000] text-white overflow-y-auto overflow-x-clip md:overflow-hidden border border-[#1C1E20] rounded-xl mt-8 md:mt-0'>
                <Disclosure>
                    {
                        ({ open }) => {
                            let customOpen = false;
                            if (open === true) {
                                changeOpenedPanel(1);   // Update the cuurently opened accordion to itself.
                                customOpen = true;
                            }
                            {/* console.log(openedPanel); */}
                            // const customOpen = open &&  ? 
                            return (
                                <>
                                    <Disclosure.Button className="py-4 bg-[#000000] w-full text-start hover:border-transparent focus:outline-none">
                                        How can i qualify for the MNT bonus ?
                                    </Disclosure.Button>
                                    <AnimatedHeadlessUIDisclosurePanel isOpen={customOpen}>
                                        <Disclosure.Panel static className="text-gray-500 mb-4 mx-4">
                                            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary max-w-[90%]">
                                                Deposit any token from Ethereum Mainnet to Mantle Network to receive a dust bonus in MNT.
                                                Limited to once per wallet address.
                                                <a
                                                    href="https://www.mantle.xyz/blog/announcements/bridging-on-mantle-mainnet"
                                                    target="__blank" rel="noreferrer"
                                                    className="underline block mt-4"
                                                >
                                                    Learn more
                                                </a>
                                            </p>
                                        </Disclosure.Panel>
                                    </AnimatedHeadlessUIDisclosurePanel>
                                </>
                            )
                        }
                    }
                </Disclosure>

                <Disclosure>
                    {
                        ({ open }) => {
                            // let customOpen = false;
                            if (open === true) {
                                changeOpenedPanel(2);   // Update the cuurently opened accordion to itself.
                                // customOpen = true;
                            }
                            {/* console.log(openedPanel); */}
                            // const customOpen = open &&  ? 
                            return (
                                <>
                                    <Disclosure.Button className="py-4 bg-[#000000] w-full text-start hover:border-transparent focus:outline-none">
                                        Is there an option for a test drive?
                                    </Disclosure.Button> 
                                    <AnimatedHeadlessUIDisclosurePanel isOpen={openedPanel === 2 ? true : false}>
                                        <Disclosure.Panel className="text-gray-500 mb-4 mx-4">
                                            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary max-w-[90%]">
                                                You can experience the deposit and withdraw flow by using our simulated testnet.
                                                It provides a safe environment to try out the bridge functionality without any real token transactions.
                                                <a
                                                    href="https://bridge.testnet.mantle.xyz/"
                                                    target="__blank" rel="noreferrer"
                                                    className="underline block mt-4"
                                                >
                                                    Learn more
                                                </a>
                                            </p>
                                        </Disclosure.Panel>
                                    </AnimatedHeadlessUIDisclosurePanel>
                                </>
                            )
                        }
                    }
                </Disclosure>

                <Disclosure>
                    <Disclosure.Button className="py-4 bg-[#000000] w-full text-start hover:border-transparent focus:outline-none">
                        What is L1/L2, and what are the required gas fees for deposit and withdrawal?
                    </Disclosure.Button>
                    <AnimatedHeadlessUIDisclosurePanel>
                        <Disclosure.Panel className="text-gray-500 mb-4 mx-4">
                            {/* <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary max-w-[90%]"> */}
                            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary mb-4">
                                Mantle Network is a Layer-2 (L2) scalability solution built on Ethereum which is the Layer-1 (L1).
                            </p>
                            <ul>
                                <li className="flex items-center">
                                    <span className="mr-4">•</span>
                                    <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary">
                                        Deposit: You need ETH on L1 as gas fees to initiate the deposit. After depositing,
                                        you'll need MNT on L2 as gas fees to transact on Mantle Network.
                                    </p>
                                </li>
                                <li className="flex items-center">
                                    <span className="mr-4">•</span>
                                    <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary">
                                        Withdraw: You need MNT on L2 as gas fees to initiate the withdrawal and ETH on L1 as gas fees to claim the tokens on Ethereum Mainnet.
                                    </p>
                                </li>
                            </ul>
                            <a
                                href="https://www.mantle.xyz/blog/announcements/bridging-on-mantle-mainnet"
                                target="__blank" rel="noreferrer"
                                className="underline block mt-4"
                            >
                                Learn more
                            </a>
                            {/* </p> */}
                        </Disclosure.Panel>
                    </AnimatedHeadlessUIDisclosurePanel>
                </Disclosure>

                <Disclosure>
                    {
                        ({ open }) => {
                            let customOpen = false;
                            if (open === true) {
                                changeOpenedPanel(4);   // Update the cuurently opened accordion to itself.
                                customOpen = true;
                            }
                            {/* console.log(openedPanel); */}
                            // const customOpen = open &&  ? 
                            return (
                                <>
                                    <Disclosure.Button className="py-4 bg-[#000000] w-full text-start hover:border-transparent focus:outline-none">
                                        How can I view my bridged token balances on Mantle Network in my wallet?
                                    </Disclosure.Button>
                                    <AnimatedHeadlessUIDisclosurePanel isOpen={customOpen}>
                                        <Disclosure.Panel static className="text-gray-500 mb-4 mx-4">
                                            <div className="text-type-secondary max-w-[90%]">
                                                <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary mb-4">
                                                    If the auto-detection of your bridged balances doesn't work, you can manually import the tokens to your wallet using the following contract addresses:
                                                </p>
                                                <ul>
                                                    <li className="flex items-center">
                                                        <span className="mr-2">•</span>
                                                        <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary break-all">
                                                            ETH: 0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111
                                                        </p>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <span className="mr-2">•</span>
                                                        <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary break-all">
                                                            USDT: 0x201EBa5CC46D216Ce6DC03F6a759e8E766e956aE
                                                        </p>
                                                    </li>
                                                    <li className="flex items-center">
                                                        <span className="mr-2">•</span>
                                                        <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary break-all">
                                                            USDC: 0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9
                                                        </p>
                                                    </li>
                                                </ul>
                                                <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary my-4">
                                                    For other token contract addresses, you can access the bridge token mapping by visiting the following &nbsp;
                                                    <a href="https://docs.mantle.xyz/network/for-devs/resources-and-tooling/mantle-bridge-api#the-token-list" target="__blank" rel="noreferrer" className="underline text-md">link,</a>
                                                    which directs you to the Mantle documentation.
                                                </p>
                                            </div>
                                        </Disclosure.Panel>
                                    </AnimatedHeadlessUIDisclosurePanel>
                                </>)
                        }
                    }
                </Disclosure>
            </div>
        </div>
    )
}

export default memo(Faqs);