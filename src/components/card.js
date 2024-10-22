import React from "react";
import { MdOutlineStar } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { GiServerRack } from "react-icons/gi";
import { FaToggleOn } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import TestLogo from "../images/expressvpnlogo.png"


const Card = ({vpndata}) => {

    const CardforTabletandDesktop = () => {
        return (
            <div className="shadow-xl relative w-full border-2 font-serif my-4">
                <div className={`${vpndata.recommended ? "block": "hidden"} w-12 h-12 p-1 rounded-br-full`} style={{backgroundColor:'#2596be'}}>
                    <div className="absolute left-1 top-1 p-0.5 flex items-center text-white justify-center">
                        <MdOutlineStar size={25} className=""/>
                    </div>
                </div>
                <div className={`flex flex-row mb-8 ${vpndata.recommended ? null : "mt-10"}`} >
                    <div className="flex flex-col -mr-8 w-[45%] lg:w-[45%] items-center">
                        <div className="flex pl-10 lg:pl-0 lg:justify-center">
                            <img src={vpndata.logo} alt="Logo" className=" h-12 lg:h-16" />
                        </div>
                        <h2 className="px-9 mt-5 py-2 text-[15px] lg:text-[23px] w-[110%] lg:w-[100%] text-start height leading-7 font-medium">
                            {vpndata.overview}
                        </h2>
                        <h3 className="pl-9 py-2 w-[110%] lg:w-[100%] text-md text-blue-500 font-semibold uppercase">
                            {vpndata.additional}
                        </h3>
                    </div>
                    <div className="flex flex-col lg:flex-row ml">
                        <div className="ml-10">
                            <ul>
                                <li className="flex flex-row items-center py-2">
                                    <div className="rounded-full items-center flex p-1.5 mx-3" style={{backgroundColor:'#266ba8'}}>
                                        <FaDollarSign size={20} className="text-white" />
                                    </div>
                                    <h2 className="lg:mr-12 mr-5 text-xl w-[35%] lg:w-[35%] leading-none font-semibold" style={{color:'#266ba8'}}>
                                        Money Back
                                        Guarantee
                                    </h2>
                                    <h2 className="text-xl w-[40%]">
                                        {vpndata.moneydays}
                                    </h2>
                                </li>
                                <li className="flex flex-row items-center py-2">
                                    <div className="rounded-full items-center flex p-1.5 mx-3" style={{backgroundColor:'#266ba8'}}>
                                        <GiServerRack size={20} className="text-white" />
                                    </div>
                                    <h2 className="lg:mr-12 mr-5 text-xl w-[35%] lg:w-[100%] leading-none font-semibold" style={{color:'#266ba8'}}>
                                    Servers/ Countries
                                    </h2>
                                    <h2 className="text-xl w-[40%] lg:w-[140%]">
                                    {vpndata.servers}
                                    </h2>
                                </li>
                                <li className="flex flex-row items-center py-2">
                                    <div className="rounded-full items-center flex p-1.5 mx-3" style={{backgroundColor:'#266ba8'}}>
                                        <FaToggleOn size={20} className="text-white" />
                                    </div>
                                    <h2 className="lg:mr-12 mr-5 text-xl w-[35%] leading-none font-semibold" style={{color:'#266ba8'}}>
                                    Kill switch
                                    </h2>
                                    <h2 className="text-xl">
                                    {vpndata.ks}
                                    </h2>
                                </li>
                                <li className="flex flex-row items-center py-2">
                                    <div className="rounded-full items-center flex p-1.5 mx-3" style={{backgroundColor:'#266ba8'}}>
                                        <MdDevices size={20} className="text-white" />
                                    </div>
                                    <h2 className="lg:mr-12 mr-5 text-xl w-[35%] leading-none font-semibold" style={{color:'#266ba8'}}>
                                    Devices/license
                                    </h2>
                                    <h2 className="text-xl">
                                    {vpndata.devices}
                                    </h2>
                                </li>
                                <li className="flex flex-row items-center py-2">
                                    <div className="rounded-full items-center flex p-1.5 mx-3" style={{backgroundColor:'#266ba8'}}>
                                        <CiMobile1 size={20} className="text-white" />
                                    </div>
                                    <h2 className="lg:mr-12 mr-5 text-xl w-[35%] leading-none font-semibold" style={{color:'#266ba8'}}>
                                    Mobile
                                    </h2>
                                    <h2 className="text-xl">
                                    {vpndata.mobile}
                                    </h2>
                                </li>
                            </ul> 
                        </div>
                        <div className="flex lg:items-center items-start justify-center flex-col mt-5 lg:mt-0 ml-16 lg:ml-10">
                            <div className="bg-orange-600 hover:bg-orange-500 flex justify-center items-center rounded-lg px-4 py-2.5">
                            <a href={`${vpndata.website}`}><h2 className="text-white text-2xl">Visit Website &gt;</h2></a>
                            </div>
                            <h3 className="lg:block hidden text-md underline mt-3">
                                {vpndata.websiteName}
                            </h3>
                        </div>
                    </div>
                </div>
        </div>
        )
    }
    return(
        <div className="hidden md:block">
            <CardforTabletandDesktop />
        </div>
    )
}

export default Card;