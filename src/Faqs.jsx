
import { Disclosure } from '@headlessui/react'

function Faqs() {
    return (
        <div className='flex flex-col w-full lg:w-auto mt-16 items-center'>
            <div className=' w-full md:max-w-lg bg-[#000000] overflow-y-auto overflow-x-clip md:overflow-hidden border border-[#1C1E20] rounded-xl mt-8 md:mt-0'>
                <Disclosure>
                    <Disclosure.Button className="py-4 bg-[#000000] w-full text-start focus:outline-none hover:outline-none hover:border-none">
                        Is team pricing available?
                    </Disclosure.Button>
                    <Disclosure.Panel className="text-gray-500 mb-4 mx-4">
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
                </Disclosure>
            </div>
        </div>
    )
}

export default Faqs