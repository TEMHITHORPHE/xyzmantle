/* eslint-disable react/prop-types */
import { useState } from "react";

import AxelarPNG from "../assets/axelar.png"
import OrbiterPNG from "../assets/orbiter.png"
import OwlToPNG from "../assets/owlto.png"
import PolyHedraPNG from "../assets/polyhedra.png"
import StarGatePNG from "../assets/stargate.png"
import SymbiosisPNG from "../assets/symbiosis.png"
import XYPNG from "../assets/xy.png"
import ExternalSVG from "../assets/external.svg"


const BRIDGE_LIST = [
    {
        title: "Stargate",
        sub: "stargate.finance",
        link: "https://stargate.finance/transfer",
        icon: StarGatePNG
    },
    {
        title: "Axelar",
        sub: "satelite.money",
        link: "https://satellite.money/?source=ethereum&destination=mantle&asset_denom=eth&destination_address=",
        icon: AxelarPNG
    },
    {
        title: "Orbiter Finance",
        sub: "orbiter.finance",
        link: "https://www.orbiter.finance/?source=Ethereum&dest=Mantle",
        icon: OrbiterPNG
    },
    {
        title: "Symbiosis",
        sub: "app.symbiosis.finance",
        link: "https://app.symbiosis.finance/swap?chainIn=Ethereum&chainOut=Mantle&tokenIn=ETH&tokenOut=MNT",
        icon: SymbiosisPNG
    },
    {
        title: "Owlto",
        sub: "owlto.finance",
        link: "https://owlto.finance/",
        icon: OwlToPNG
    },
    {
        title: "XY Finance",
        sub: "app.xy.finance",
        link: "https://app.xy.finance/",
        icon: XYPNG
    },
    {
        title: "Polyhedra",
        sub: "zkbridge.com",
        link: "https://zkbridge.com/token",
        icon: PolyHedraPNG
    },
]

function ThirdPartyBridgeTab() {

    const [isListExpanded, updateListState] = useState(false);

    return (
        <div className="grid gap-4 py-4">
            <div className="bg-white/[0.05] rounded-[10px] overflow-hidden">
                <div className={(isListExpanded ? "h-[432px] overflow-auto " : "") + "false border-b border-[#2E524E]"}>
                    {
                        isListExpanded === false ?
                            (BRIDGE_LIST.slice(0, 3)).map((bridge, index) => (
                                <BridgeListItem key={index} bridgeInfo={bridge} />
                            ))
                            :
                            BRIDGE_LIST.map((bridge, index) => (
                                <BridgeListItem key={index} bridgeInfo={bridge} />
                            ))
                    }
                </div>
                {
                    isListExpanded === false &&
                    <div onClick={() => updateListState(true)} className="p-[18px] bg-white bg-opacity-5 text-center" role="button">
                        See more options
                    </div>
                }
            </div>
            <div className="text-xs text-center">
                These are independent service providers that Mantle is linking to for your convenience - Mantle has no responsibility for their operation.
            </div>
        </div>
    )
}

export default ThirdPartyBridgeTab;



function BridgeListItem({ bridgeInfo }) {
    return (
        <a rel="noreferrer noopener" target="_blank" href={bridgeInfo.link}>
            <div className="flex items-center select-none px-4 py-4 cursor-pointer hover:bg-white/10 active:bg-white/20 focus:outline-none focus:ring focus:ring-white/40 justify-between group">
                <div className="flex">
                    <img alt="Stargate" loading="lazy" width="40" height="40" decoding="async" data-nimg="1"
                        className="opacity-100" style={{ color: "transparent" }}
                        src={bridgeInfo.icon}
                    />
                    <div className="flex flex-col pl-[26px]">
                        <div className="text-white text-sm&quot;">
                            {bridgeInfo.title}
                        </div>
                        <div className="text-white text-xs text-opacity-60">
                            {bridgeInfo.sub}
                        </div>
                    </div>
                </div>
                <img alt="external" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="opacity-40 group-hover:opacity-100" src={ExternalSVG} style={{ color: "transparent" }} />

            </div>
        </a>
    )
}
