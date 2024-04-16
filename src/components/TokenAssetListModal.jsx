/* eslint-disable react/prop-types */

import { Dialog } from "@headlessui/react";
import { TOKENLIST_ITEM_INFO } from "../utils";


function TokenAssetListModal({ isOpen, changeModalState, selectedToken }) {
    // let [isOpen, setIsOpen] = useState(true)

    return (
        <Dialog open={isOpen} onClose={() => changeModalState(false)}>
            <div className="fixed inset-0 bg-black/50 backdrop-blur-[52px]" aria-hidden="true"></div>
            <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4">
                    <Dialog.Panel className="relative flex flex-col items-start lg:min-w-[484px] mx-auto rounded-[14px] bg-black py-7">
                        <div className="mt-2.5 w-full px-5">
                            <button type="button" className="absolute right-5 top-5 p-0 bg-inherit" >
                                <span className="sr-only">Close menu</span>
                                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.5 14.1L1.9 24.75C1.66667 24.95 1.4 25.05 1.1 25.05C0.8 25.05 0.533334 24.95 0.3 24.75C0.1 24.5167 0 24.25 0 23.95C0 23.65 0.1 23.3833 0.3 23.15L10.95 12.5L0.35 1.9C0.116667 1.7 0 1.45 0 1.15C0 0.850001 0.1 0.583334 0.3 0.35C0.533334 0.116667 0.8 0 1.1 0C1.4 0 1.66667 0.116667 1.9 0.35L12.5 11L23.1 0.35C23.3333 0.15 23.6 0.0500002 23.9 0.0500002C24.2 0.0500002 24.4667 0.15 24.7 0.35C24.9 0.583334 25 0.850001 25 1.15C25 1.45 24.9 1.71667 24.7 1.95L14.05 12.55L24.7 23.2C24.9 23.4 25 23.65 25 23.95C25 24.25 24.9 24.5 24.7 24.7C24.4667 24.9333 24.2083 25.05 23.925 25.05C23.6417 25.05 23.3833 24.9333 23.15 24.7L12.5 14.1Z" fill="white"></path>
                                </svg>
                            </button>
                            <p className="text-[18px] leading-[20px] tracking-[-0.02em] text-left text-type-secondary my-2.5">
                                Select a token- 
                            </p>
                            <div className="relative flex">
                                <input type="text" placeholder="Enter name or symbol" className="grow rounded-[10px] bg-black border border-stroke-inputs py-[10.5px] pl-[47px] pr-4 placeholder:text-lg placeholder:text-type-secondary focus:outline-none focus:ring-0 focus:ring-white/70 appearance-none focus:border-white/70" />
                                <div className="absolute left-4 top-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                                        <path d="M12.959 14.833L8.25 10.145C7.792 10.5064 7.29567 10.7737 6.761 10.947C6.22633 11.1204 5.688 11.207 5.146 11.207C3.71533 11.207 2.5 10.714 1.5 9.72803C0.5 8.74203 0 7.5337 0 6.10303C0 4.68636 0.5 3.4747 1.5 2.46803C2.5 1.4607 3.71533 0.957031 5.146 0.957031C6.56267 0.957031 7.764 1.45703 8.75 2.45703C9.736 3.45703 10.229 4.67236 10.229 6.10303C10.229 6.67236 10.1457 7.2247 9.979 7.76003C9.81233 8.2947 9.54867 8.77703 9.188 9.20703L13.896 13.937C14.0213 14.0617 14.0803 14.211 14.073 14.385C14.0663 14.5584 14.0003 14.7077 13.875 14.833C13.7363 14.9717 13.5803 15.041 13.407 15.041C13.233 15.041 13.0837 14.9717 12.959 14.833ZM5.146 9.87403C6.188 9.87403 7.07333 9.50603 7.802 8.77003C8.53133 8.03403 8.896 7.14503 8.896 6.10303C8.896 5.0477 8.535 4.14836 7.813 3.40503C7.09033 2.66236 6.20133 2.29103 5.146 2.29103C4.07667 2.29103 3.174 2.66236 2.438 3.40503C1.702 4.14836 1.334 5.0477 1.334 6.10303C1.334 7.15903 1.702 8.05136 2.438 8.78003C3.174 9.50936 4.07667 9.87403 5.146 9.87403Z" fill="white"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <svg viewBox="0 0 342 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-4" stroke="#1C1E20">
                            <path d="M0 1H158.631C159.566 1 160.447 1.43589 161.015 2.17886L168.425 11.8792C169.626 13.451 171.992 13.451 173.193 11.8792L180.603 2.17885C181.171 1.43589 182.052 1 182.987 1H342" stroke="#1C1E20"></path>
                        </svg>

                        {/* TOKEN LIST STARTS HERE */}
                        <div className="flex flex-col w-full px-5 max-h-96 overflow-y-scroll">

                            {/* LIST ITEMS */}
                            {
                                TOKENLIST_ITEM_INFO.map((itemInfo, index) => (
                                    <button key={index} type="button" className="flex justify-between items-center gap-4 p-0 bg-inherit cursor-pointer hover:border-transparent"
                                        onClick={() => {
                                            selectedToken(itemInfo);
                                            changeModalState(false);
                                        }}
                                    >
                                        <img alt="Logo for Mantle" loading="lazy" width="32" height="32" decoding="async" data-nimg="1" src={itemInfo.icon} style={{ color: "transparent;" }} />
                                        <div className="grow my-1.5">
                                            <p className="text-[18px] leading-[1.4] text-left text-[#65B3AE]">{itemInfo.symbol}</p>
                                            <p className="text-[12px] leading-[20px] tracking-[-0.02em] text-type-secondary text-left">
                                                {itemInfo.name}
                                            </p>
                                        </div>
                                        <div className="text-type-muted">0.0</div>
                                    </button>
                                ))
                            }
                        </div>
                        <Dialog.Description>
                            This will permanently deactivate your account
                        </Dialog.Description>

                        <button onClick={() => changeModalState(false)}>Deactivate</button>
                        <button onClick={() => changeModalState(false)}>Cancel</button>
                    </Dialog.Panel>
                </div>
            </div>
        </Dialog>
    )
}

export default TokenAssetListModal;