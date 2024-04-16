/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
// 

import { memo } from "react"
import { Tab } from "@headlessui/react"

import InputComboBoxSection from "./InputComboBoxSection"
import ThirdPartyBridgeTab from "./ThirdPartyBridgeTab"

import UnCheckedSVG from '../assets/unchecked.svg'
import CheckedSVG from '../assets/checked.svg'
import ToolTipSVG from '../assets/tooltip.svg'



const BridgePageWithdrawTab = memo(({comboBoxSelectedToken, comboBoxTokenUpdate }) => {

    return (
        <Tab.Group defaultIndex={0}>
            <Tab.List className='grid grid-cols-2 gap-3'>
                <Tab as='div' className="p-0 hover:border-transparent focus:outline-0">
                    {
                        ({ selected }) => (
                            <div role="button" tabIndex="0"
                                className={(selected ? " border-[#A8D0CD] text-white " : " border-transparent text-[#464646] ") + "w-full flex flex-row-reverse md:flex-row justify-between bg-white/5 items-center cursor-pointer p-3 border-solid rounded-lg border hover:border-[#A8D0CD]"}>
                                <div className="w-full flex items-center"><div className="hidden md:block text-sm pr-[10px]">Mantle Bridge</div>
                                    <div className="block md:hidden text-sm md:pr-[10px]">Mantle Bridge</div>
                                    <div className="hidden md:block relative group">
                                        <img alt="tooltip" loading="lazy" width="14" height="14" decoding="async" data-nimg="1" className="opacity-[15%] hover:opacity-100 " src={ToolTipSVG} style={{ color: "transparent" }} />
                                        <div className="w-max opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 px-4 py-2 bg-white text-black text-xs rounded-md left-1/2 transform -translate-x-1/2 pointer-events-none z-10">
                                            <div>Bridge any token from Mantle Network. This may take up to 7 days to process.</div>
                                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-4px] w-2 h-2 bg-white rotate-45"></div>
                                        </div>
                                    </div>
                                    <img alt="check" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" src={selected ? CheckedSVG : UnCheckedSVG} style={{ color: "transparent", marginLeft: "auto" }} />
                                </div>
                            </div>
                        )
                    }
                </Tab>
                <Tab className='p-0 bg-white/5 hover:border-transparent focus:outline-0'>
                    {
                        ({ selected }) => (
                            <div className={(selected ? " border-[#A8D0CD] text-white " : " border-transparent text-[#464646] ") + "w-full flex flex-row-reverse md:flex-row justify-between bg-white/5 items-center cursor-pointer p-3 border-solid rounded-lg border hover:border-[#A8D0CD]"} role="button" tabIndex="0">
                                <div className="flex items-center">
                                    <div className="hidden md:block text-sm pr-[10px]">
                                        A third party bridge
                                    </div>
                                    <div className="block md:hidden text-sm md:pr-[10px]">3rd party bridge</div>
                                    <div className="hidden md:block relative group">
                                        <img alt="tooltip" loading="lazy" width="14" height="14" decoding="async" data-nimg="1" className="opacity-[15%] hover:opacity-100 " style={{ color: "transparent" }} src={ToolTipSVG} />
                                        <div className="w-max opacity-0 group-hover:opacity-100 absolute bottom-full mb-2 px-4 py-2 bg-white text-black text-xs rounded-md left-1/2 transform -translate-x-1/2 pointer-events-none z-10">
                                            <div>Bridge to multiple chains (only for selected tokens). Processing time may vary across chains.</div>
                                            <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 mb-[-4px] w-2 h-2 bg-white rotate-45" ></div>
                                        </div>
                                    </div>
                                </div>
                                <img alt="check" loading="lazy" width="16" height="16" decoding="async" data-nimg="1" style={{ color: "transparent" }} src={selected ? CheckedSVG : UnCheckedSVG} />
                            </div>
                        )
                    }

                </Tab>
            </Tab.List>
            <Tab.Panels>
                <Tab.Panel>
                    {/* Mantle Bridge Tab */}
                    <InputComboBoxSection activeTab='withdraw' selectedToken={comboBoxSelectedToken} changeSelectedToken={comboBoxTokenUpdate} />
                </Tab.Panel>
                <Tab.Panel>
                    {/* Third Party Bridge Tab */}
                    <ThirdPartyBridgeTab />
                </Tab.Panel>
            </Tab.Panels>
        </Tab.Group>
    )
})

export default BridgePageWithdrawTab;