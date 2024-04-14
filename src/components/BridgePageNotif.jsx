/* eslint-disable react/display-name */
import { memo, useState } from "react";



export const BridgePageNotif = memo(() => {

    const [showNotif, updateNotifState] = useState(true);

    return (
        showNotif &&
        <div className="bg-white/[.08] rounded-[14px] p-4 mx-auto flex content-start gap-x-2 w-full lg:w-[484px] max-w-lg mt-4" >
            <h2 className="GTWalsheimMedium text-[24px] leading-[33px] text-[#C4C4C4]">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M11 7h2v2h-2V7zm0 4h2v6h-2v-6zm1-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></svg>
            </h2>
            <div className="grow">
                <p className="GTWalsheimRegular font-normal text-[16px] leading-[22px] text-type-secondary uppercase">gas fee required</p>
                <p className="GTWalsheimRegular font-normal text-[16px] leading-[22px] text-type-secondary">
                    • MNT (L2) to withdraw from Mantle Mainnet
                </p>
                <p className="GTWalsheimRegular font-normal text-[16px] leading-[22px] text-type-secondary">
                    • ETH (L1) to claim withdrawal on Ethereum Mainnet
                </p>
            </div>
            <h2 className="GTWalsheimMedium text-[24px] leading-[33px] text-[#C4C4C4]">
                <svg onClick={() => updateNotifState(false)} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" className="cursor-pointer" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>
            </h2>
        </div >

    )
});

