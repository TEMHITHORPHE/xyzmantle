/* eslint-disable react/prop-types */

import { useConnectModal } from '@rainbow-me/rainbowkit';

import { InputSection } from './InputSection';

import StylishDividerSVG from './assets/stylish-divider.svg'
import TinyMantleSVG from './assets/tiny-mantle.svg'
import MantleSVG from './assets/mantle.svg'
import TinyEthSVG from './assets/tiny-eth.svg'


export function InputComboBoxSection({ activeTab }) {
    const { openConnectModal } = useConnectModal();

    return <div className="py-6">
        <div className="flex pb-4 items-center">

            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary">
                From:
            </p>
            <div className="flex ml-1 space-x-2 items-center">
                {
                    activeTab === 'deposit' ?
                        <>
                            <img src={TinyEthSVG} alt="" />
                            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary"> Ethereum Mainnet</p>
                        </>
                        :
                        <>
                            <img src={TinyMantleSVG} alt="" />
                            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary"> Mantle Mainnet</p>
                        </>

                }
            </div>
        </div>
        <div className="h-12 bg-black relative rounded-lg ring-1 ring-stroke-inputs focus-within:ring-1 focus-within:ring-white/70">
            <div className="flex items-center text-lg h-[inherit]">
                <input type="number" placeholder="0" className="w-full grow border-0 focus:outline-none rounded-tl-lg rounded-bl-lg bg-black py-1.5 px-3 focus:ring-0 focus:ring-white/70 appearance-none" />
                <button disabled className="border border-[#696969] hover:border-[#696969] border-stroke-disabled h-fit rounded-lg text-md font-medium
                transition-all disabled:cursor-not-allowed disabled:opacity-50 w-fit px-4 py-2 text-sm text-brand bg-brand-light 
                disabled:bg-transparent">
                    Max
                </button>
                <button className='h-12 w-[40%] relative cursor-default rounded-br-lg rounded-tr-lg bg-black py-1.5 pl-5 pr-10 text-left text-white shadow-sm focus:outline-none focus:ring-0 focus:ring-white/70'>
                    <span className='flex items-center h-full'>
                        <img width={24} height={24} src={MantleSVG} alt="" />
                        <span className='ml-2 hidden md:block'>
                            MNT
                        </span>
                        <span className='pointer-events-none absolute inset-y-0 right-0 ml-1 flex items-center pr-2'>
                            <svg
                                className="h-5 w-5 text-white" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 20 20" aria-hidden="true"
                                height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path>
                            </svg>
                        </span>
                    </span>
                </button>
            </div>
        </div>
        <div className="flex pb-4 items-center pt-4">
            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary">
                Your balance:
            </p>
            <div className="flex ml-1 space-x-2 items-center">
                <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary">
                    Connect Wallet.
                </p>
            </div>
        </div>
        <img className='max-w-none -mx-5' src={StylishDividerSVG} alt="" />
        <InputSection activeTab={activeTab} />
        <button onClick={openConnectModal} className="h-14 rounded-lg bg-[#65b3ae] text-md font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 w-full px-5 py-3 text-base text-black bg-button-primary hover:bg-button-primaryHover disabled:hover:bg-button-disabled" type="button">
            Please connect your wallet
        </button>

    </div>;
}
