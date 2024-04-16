
/* eslint-disable react/prop-types */


import TinyMantleSVG from '../assets/tiny-mantle.svg'
import TinyEthSVG from '../assets/tiny-eth.svg'


export function InputSection({ activeTab }) {

    return <div className="py-6">
        <div className="flex pb-4 items-center">
            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary">
                To:
            </p>
            <div className="flex ml-1 space-x-2 items-center">
                {
                    activeTab === 'deposit' ?
                        <>
                            <img src={TinyMantleSVG} alt="" />
                            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary"> Mantle Mainnet</p>
                        </>
                        :
                        <>
                            <img src={TinyEthSVG} alt="" />
                            <p className="GTWalsheimRegular font-normal text-[14px] leading-[20px] text-type-secondary"> Ethereum Mainnet</p>
                        </>
                }
            </div>
        </div>
        <div className="h-12 bg-black relative rounded-lg ring-1 ring-stroke-inputs focus-within:ring-1 focus-within:ring-white/70">
            <div className="flex items-center text-lg h-[inherit]">
                <input disabled type="number" placeholder="Unknown. Connect Wallet" className="grow border-0 focus:outline-none rounded-tl-lg rounded-bl-lg bg-black py-1.5 px-3 focus:ring-0 focus:ring-white/70 appearance-none" />
            </div>
        </div>
    </div>;
}
