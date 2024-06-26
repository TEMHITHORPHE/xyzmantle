

import { useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useDisconnect } from "wagmi";


function BridgePageNavbar() {
    const { openConnectModal } = useConnectModal();
    const { isConnected, address } = useAccount();
    const { disconnect } = useDisconnect();


    return (
        <nav className="mb-12 mx-auto max-w-7xl p-4 lg:px-8 items-center grid grid-cols-2 lg:flex" aria-label="Global">
            <div className="flex">
                <a rel="noreferrer noopener" target="_blank" className="-m-1.5 p-1.5" href="https://www.mantle.xyz/">
                    <span className="sr-only">Mantle</span>
                    <svg width="138" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M50.9651 14.2402H46.124V25.7616H48.6206V16.7368H49.3386L53.3258 25.7616H56.0555L50.9651 14.2402Z" fill="white"></path>
                        <path d="M94.5403 25.7616H97.0369V14.2402H94.5403V25.7616Z" fill="white"></path>
                        <path d="M61.1452 14.2402L56.0553 25.7616H58.7845L62.7717 16.7368H63.4897V25.7616H65.9863V14.2402H61.1452Z" fill="white"></path>
                        <path d="M77.151 14.2402H72.5836L67.4933 25.7616H70.2229L71.8813 22.0075H77.8533L79.5117 25.7616H82.2413L77.151 14.2402ZM72.9844 19.5109L74.2101 16.7368H75.5245L76.7501 19.5109H72.9844Z" fill="white"></path>
                        <path d="M89.4501 14.2402H83.6848V25.7616H86.1814V16.7368H87.8236L91.8108 25.7616H94.5404L89.4501 14.2402Z" fill="white"></path>
                        <path d="M98.4236 14.2402V16.7368H104.249V25.7616H106.746V16.7368H112.571V14.2402H98.4236Z" fill="white"></path>
                        <path d="M116.455 14.2402H113.958V25.7616H124.823V23.265H116.455V14.2402Z" fill="white"></path>
                        <path d="M138 16.7368V14.2402H126.21V25.7616H138V23.265H128.707V21.0828H136.763V18.5862H128.707V16.7368H138Z" fill="white"></path>
                        <path d="M7.51717 14.5454L1.97885 11.7256C1.54564 12.5767 1.1767 13.4691 0.883118 14.378L6.79685 16.2902C6.99011 15.6924 7.23237 15.1057 7.51764 14.5458L7.51717 14.5454Z" fill="white"></path>
                        <path d="M12.2217 9.57576L15.2893 14.8612C15.7373 14.6014 16.2168 14.4016 16.7156 14.2675L15.128 8.36583C15.532 8.25718 15.9426 8.16749 16.3555 8.1023L15.3799 1.96387C14.4363 2.11366 13.4987 2.33975 12.5925 2.63518L14.4895 8.44905C13.8861 8.64601 13.2985 8.89058 12.7326 9.18001L9.94425 3.73739C9.09633 4.17198 8.27615 4.67685 7.50543 5.23952L11.1694 10.2596C11.5069 10.0136 11.8597 9.78567 12.2213 9.5753L12.2217 9.57576Z" fill="white"></path>
                        <path d="M28.683 13.9549L23.3994 17.0253C23.6597 17.4728 23.8594 17.9527 23.994 18.4507L29.8952 16.8602C30.0039 17.2643 30.0936 17.6744 30.1592 18.0868L36.2967 17.1094C36.1465 16.1663 35.9199 15.2282 35.6236 14.3216L29.8106 16.2222C29.6132 15.6189 29.3686 15.0317 29.0787 14.4658L34.5195 11.6738C34.0849 10.8268 33.5791 10.0066 33.0165 9.23633L27.9978 12.9027C28.2442 13.2402 28.4722 13.5925 28.6825 13.9545L28.683 13.9549Z" fill="white"></path>
                        <path d="M26.5284 3.71251C25.6763 3.27977 24.784 2.91128 23.876 2.61816L21.967 8.53283C22.5643 8.72562 23.1515 8.96788 23.7123 9.25268L26.5284 3.71205V3.71251Z" fill="white"></path>
                        <path d="M24.3216 9.46746L21.2189 14.8523C21.6683 15.1112 22.0825 15.4284 22.451 15.7954L31.1531 7.06377C30.4781 6.39107 29.7448 5.76646 28.9736 5.20703L25.3845 10.1568C25.0424 9.90899 24.6882 9.67828 24.3221 9.46699L24.3216 9.46746Z" fill="white"></path>
                        <path d="M7.73299 13.9354L13.1164 17.0414C13.3753 16.5925 13.6934 16.1778 14.061 15.8088L5.33301 7.10352C4.65985 7.77853 4.03477 8.51133 3.47534 9.28204L8.42326 12.8735C8.17545 13.2151 7.94428 13.5693 7.73299 13.9354Z" fill="white"></path>
                        <path d="M20.1462 7.99785L21.0852 1.95558C20.1573 1.81133 19.2077 1.73828 18.2622 1.73828H18.2479V14.066H18.2622C18.7819 14.066 19.296 14.1326 19.7907 14.2639L21.3848 8.25675C20.977 8.14857 20.5637 8.06304 20.1462 7.99785Z" fill="white"></path><path d="M12.5261 18.4684L6.51986 16.8701C6.41121 17.2779 6.32522 17.6912 6.26003 18.1087L0.218685 17.1669C0.0735114 18.0981 0 19.0514 0 19.9997H12.3277C12.3277 19.4791 12.3948 18.9636 12.5265 18.4684H12.5261Z" fill="white"></path>
                        <path d="M29.0074 25.4558L34.5457 28.2756C34.9789 27.4244 35.3478 26.5321 35.6414 25.6232L29.7277 23.7109C29.5344 24.3087 29.2922 24.8954 29.0069 25.4553L29.0074 25.4558Z" fill="white"></path><path d="M24.3026 30.4241L21.235 25.1387C20.787 25.3985 20.3076 25.5982 19.8087 25.7323L21.3964 31.634C20.9918 31.7427 20.5817 31.8324 20.1689 31.8976L21.1439 38.0355C22.0876 37.8857 23.0252 37.6596 23.9314 37.3642L22.0344 31.5503C22.6382 31.3534 23.2254 31.1088 23.7913 30.8194L26.5796 36.262C27.4275 35.8274 28.2477 35.3225 29.0184 34.7599L25.3544 29.7398C25.0169 29.9858 24.6642 30.2137 24.3026 30.4241Z" fill="white"></path>
                        <path d="M7.84183 26.0465L13.1259 22.9762C12.8656 22.5286 12.6658 22.0487 12.5313 21.5508L6.63005 23.1412C6.5214 22.7371 6.43171 22.327 6.36606 21.9146L0.228088 22.892C0.378348 23.8352 0.604892 24.7733 0.901249 25.6799L6.7142 23.7792C6.91161 24.3826 7.15619 24.9698 7.44608 25.5357L2.00531 28.3277C2.4399 29.1747 2.9457 29.9949 3.50836 30.7651L8.52702 27.0988C8.28059 26.7613 8.05266 26.409 7.8423 26.047L7.84183 26.0465Z" fill="white"></path>
                        <path d="M9.99615 36.2882C10.8482 36.721 11.7405 37.0894 12.6486 37.3826L14.5576 31.4679C13.9602 31.2751 13.3731 31.0328 12.8122 30.748L9.99615 36.2887V36.2882Z" fill="white"></path>
                        <path d="M12.2029 30.534L15.3057 25.1492C14.8563 24.8903 14.442 24.5731 14.0735 24.2061L5.37146 32.9377C6.04647 33.6104 6.77974 34.235 7.55091 34.7945L11.14 29.8447C11.4822 30.0925 11.8363 30.3232 12.2025 30.5345L12.2029 30.534Z" fill="white"></path>
                        <path d="M28.7914 26.0659L23.4079 22.96C23.149 23.4089 22.8309 23.8236 22.4634 24.1925L31.1909 32.8983C31.8641 32.2233 32.4891 31.4905 33.0486 30.7198L28.1006 27.1284C28.3485 26.7867 28.5796 26.4326 28.7909 26.0664L28.7914 26.0659Z" fill="white"></path>
                        <path d="M16.7338 25.7363L15.1397 31.7435C15.5475 31.8516 15.9608 31.9372 16.3783 32.0024L15.4398 38.0446C16.3677 38.1889 17.3173 38.2619 18.2628 38.2619H18.2771V25.9342H18.2628C17.7431 25.9342 17.229 25.8676 16.7343 25.7363H16.7338Z" fill="white"></path>
                        <path d="M24.1969 20.001C24.1969 20.5216 24.1299 21.0366 23.9981 21.5322L30.0043 23.1305C30.113 22.7227 30.199 22.3094 30.2641 21.8919L36.306 22.8342C36.4511 21.903 36.5246 20.9497 36.5246 20.0014H24.1969V20.001Z" fill="white"></path>
                    </svg>
                </a>
            </div>
            <div className="hidden lg:flex justify-center gap-6 xl:gap-12 lg:grow">
                <span>
                    <a target="_self" className="focus:outline-none transition ease-in-out duration-300 cursor-pointer text-type-secondary hover:text-type-primary" rel="noreferrer noopener" href="https://docs-v2.mantle.xyz">Docs</a>
                </span>
                <span>
                    <a target="_self" className="focus:outline-none transition ease-in-out duration-300 cursor-pointer text-type-secondary hover:text-type-primary" rel="noreferrer noopener" href="https://faucet.sepolia.mantle.xyz">Faucet</a>
                </span>
                <span>
                    <a target="_self" className="focus:outline-none transition ease-in-out duration-300 cursor-pointer text-type-secondary hover:text-type-primary text-type-primary relative select-none pointer-events-none" rel="noreferrer noopener" href="/">
                        Bridge
                        <div className="rounded-full bg-white h-1 w-1  absolute left-[50%] -bottom-[10px]"></div>
                    </a>
                </span>
                <span>
                    <a target="_self" className="focus:outline-0 transition ease-in-out duration-300 cursor-pointer text-type-secondary hover:text-type-primary" rel="noreferrer noopener" href="/account/deposit">
                        Account
                    </a>
                </span>
            </div>

            {/* Connected */}
            {
                isConnected ?
                    <div className="flex justify-end gap-10">
                        <div className="grid hidden lg:block">
                            <div className="flex flex-row gap-4 w-full">
                                <button className="flex flex-row items-center text-xs h-full text-white gap-2 backdrop-blur-[50px] bg-white/10 hover:bg-white/20 justify-center w-full
                                    rounded-lg text-md font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 px-4 py-2 hover:bg-button-primaryHover hover:text-black disabled:hover:bg-transparent"
                                    type="button"
                                >
                                    <svg viewBox="0 0 80 80" fill="none" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                        {/* eslint-disable-next-line react/no-unknown-property */}
                                        <mask id="mask__pixel" maskType="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="80" height="80">
                                            <rect width="80" height="80" rx="160" fill="#FFFFFF"></rect>
                                        </mask>
                                        <g mask="url(#mask__pixel)"><rect width="10" height="10"></rect><rect x="20" width="10" height="10" fill="#92A1C6"></rect><rect x="40" width="10" height="10" fill="#92A1C6"></rect><rect x="60" width="10" height="10" fill="#F0AB3D"></rect><rect x="10" width="10" height="10" fill="#92A1C6"></rect><rect x="30" width="10" height="10" fill="#C20D90"></rect><rect x="50" width="10" height="10" fill="#F0AB3D"></rect><rect x="70" width="10" height="10" fill="#F0AB3D"></rect><rect y="10" width="10" height="10" fill="#C20D90"></rect><rect y="20" width="10" height="10" fill="#F0AB3D"></rect><rect y="30" width="10" height="10" fill="#C20D90"></rect><rect y="40" width="10" height="10" fill="#C20D90"></rect><rect y="50" width="10" height="10" fill="#C271B4"></rect><rect y="60" width="10" height="10" fill="#92A1C6"></rect><rect y="70" width="10" height="10" fill="#F0AB3D"></rect><rect x="20" y="10" width="10" height="10" fill="#C20D90"></rect><rect x="20" y="20" width="10" height="10" fill="#F0AB3D"></rect><rect x="20" y="30" width="10" height="10" fill="#F0AB3D"></rect><rect x="20" y="40" width="10" height="10" fill="#F0AB3D"></rect><rect x="20" y="50" width="10" height="10" fill="#C271B4"></rect><rect x="20" y="60" width="10" height="10" fill="#C20D90"></rect><rect x="20" y="70" width="10" height="10" fill="#F0AB3D"></rect><rect x="40" y="10" width="10" height="10" fill="#C20D90"></rect><rect x="40" y="20" width="10" height="10" fill="#F0AB3D"></rect><rect x="40" y="30" width="10" height="10" fill="#92A1C6"></rect><rect x="40" y="40" width="10" height="10" fill="#C20D90"></rect><rect x="40" y="50" width="10" height="10" fill="#C271B4"></rect><rect x="40" y="60" width="10" height="10" fill="#92A1C6"></rect><rect x="40" y="70" width="10" height="10" fill="#146A7C"></rect><rect x="60" y="10" width="10" height="10" fill="#146A7C"></rect><rect x="60" y="20" width="10" height="10" fill="#C20D90"></rect><rect x="60" y="30" width="10" height="10" fill="#92A1C6"></rect><rect x="60" y="40" width="10" height="10" fill="#F0AB3D"></rect><rect x="60" y="50" width="10" height="10" fill="#146A7C"></rect><rect x="60" y="60" width="10" height="10" fill="#F0AB3D"></rect><rect x="60" y="70" width="10" height="10" fill="#C20D90"></rect><rect x="10" y="10" width="10" height="10" fill="#92A1C6"></rect><rect x="10" y="20" width="10" height="10" fill="#C271B4"></rect><rect x="10" y="30" width="10" height="10" fill="#C271B4"></rect><rect x="10" y="40" width="10" height="10" fill="#92A1C6"></rect><rect x="10" y="50" width="10" height="10" fill="#C20D90"></rect><rect x="10" y="60" width="10" height="10" fill="#146A7C"></rect><rect x="10" y="70" width="10" height="10" fill="#F0AB3D"></rect><rect x="30" y="10" width="10" height="10" fill="#C271B4"></rect><rect x="30" y="20" width="10" height="10" fill="#C20D90"></rect><rect x="30" y="30" width="10" height="10" fill="#C20D90"></rect><rect x="30" y="40" width="10" height="10" fill="#F0AB3D"></rect><rect x="30" y="50" width="10" height="10" fill="#146A7C"></rect><rect x="30" y="60" width="10" height="10" fill="#C20D90"></rect><rect x="30" y="70" width="10" height="10" fill="#92A1C6"></rect><rect x="50" y="10" width="10" height="10" fill="#C20D90"></rect><rect x="50" y="20" width="10" height="10" fill="#C20D90"></rect><rect x="50" y="30" width="10" height="10" fill="#C20D90"></rect><rect x="50" y="40" width="10" height="10" fill="#146A7C"></rect><rect x="50" y="50" width="10" height="10" fill="#92A1C6"></rect><rect x="50" y="60" width="10" height="10" fill="#C20D90"></rect><rect x="50" y="70" width="10" height="10" fill="#C20D90"></rect><rect x="70" y="10" width="10" height="10" fill="#C271B4"></rect><rect x="70" y="20" width="10" height="10" fill="#92A1C6"></rect><rect x="70" y="30" width="10" height="10" fill="#146A7C"></rect><rect x="70" y="40" width="10" height="10" fill="#C20D90"></rect><rect x="70" y="50" width="10" height="10" fill="#146A7C"></rect><rect x="70" y="60" width="10" height="10" fill="#92A1C6"></rect><rect x="70" y="70" width="10" height="10" fill="#F0AB3D"></rect>
                                        </g>
                                    </svg>
                                    <div className="flex items-center justify-center gap-2">
                                        {address ? address.slice(0, 6) + "..." + address.slice(-4) : "0x0000...0000"}
                                    </div>
                                </button>
                                <button onClick={() => disconnect()} className="undefined h-fit rounded-lg text-md font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 w-fit  px-4 py-2 text-sm text-black bg-button-primary hover:bg-button-primaryHover disabled:hover:bg-transparent text-sm undefined">
                                    Disconnect
                                </button>
                            </div>
                        </div>
                        <div className="grid lg:hidden">
                            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">
                                    Open main menu
                                </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-type-secondary hover:text-type-primary transition ease-in-out duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                </svg>
                            </button>
                        </div>
                    </div>

                    :

                    /* Not Connected */
                    <div className="flex justify-end gap-10">
                        <div className="grid hidden lg:block">
                            <div className="flex flex-row gap-4 w-full">
                                <div onClick={() => openConnectModal()}>
                                    <button className=" h-fit rounded-lg text-md font-medium transition-all disabled:cursor-not-allowed disabled:opacity-50 w-fit  px-4 py-2 text-sm text-black bg-button-primary focus:outline-0 hover:bg-button-primaryHover disabled:hover:bg-transparent ">
                                        Connect Wallet
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="grid lg:hidden">
                            <button type="button" className="bg-transparent -m-2.5 inline-flex items-center justify-center rounded-md p-2.5">
                                <span className="sr-only">Open main menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="h-8 w-8 text-type-secondary hover:text-type-primary transition ease-in-out duration-300">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
            }
        </nav>
    )
}

export default BridgePageNavbar