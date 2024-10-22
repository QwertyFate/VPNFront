import React, {useEffect, useState} from "react";
import { data } from "../data/data";
import { MdOutlineStar } from "react-icons/md";
import { FaDollarSign } from "react-icons/fa6";
import { GiServerRack } from "react-icons/gi";
import { FaToggleOn } from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { CiMobile1 } from "react-icons/ci";
import { FaLock } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";

const CardMobile = () => {
    const [click, setClick] = useState(0);
    let arr = [];

    const handleClick = (key) => {
        setClick(key);
        console.log(key)
    }
    
    for(let i = 0; i< data.length; i++) {
        arr.push(data[i].mobileLogo);
    }

  
    

    return(
        <div className="flex flex-col">
            <div className="flex flex-row items-center justify-center">
            {arr.map((elem, key) => {
                return(
                <img onClick={() => {handleClick(key)}} key={key} src={elem} className={`${click == key? "bg-slate-100": "bg-slate-200"} hover:bg-slate-300 h-16 w-auto px-6 py-3 cursor-pointer mx-0 `} alt="logo"/>
                )
            })}
            </div>
            <h1 className="font-medium text-lg text-center mt-5">{data[click].name}</h1>
            <div className="flex flex-col mt-5 ml-20">
                <div className="flex flex-row items-center">
                    <div className="rounded-full p-1.5 mr-3" style={{backgroundColor:'#266ba8'}}>
                        <FaDollarSign size={11} className="text-white" />
                    </div>
                    <h2 className="text-xs mr-3 leading-none font-semibold" style={{color:'#266ba8'}}>
                        Money Back Guarantee
                    </h2>
                    <h2 className="text-sm">{data[click].moneydays}</h2>
                </div>
                <div className="flex flex-row items-center my-3">
                    <div className="rounded-full p-1.5 mr-3" style={{backgroundColor:'#266ba8'}}>
                        <GiServerRack size={11} className="text-white" />
                    </div>
                    <h2 className="text-xs mr-3 leading-none font-semibold" style={{color:'#266ba8'}}>
                        Servers/Countries
                    </h2>
                    <h2 className="text-sm leading-tight">{data[click].servers}</h2>
                </div>
                <div className="flex flex-row items-center mt-0.5 mb-2">
                    <div className="rounded-full p-1.5 mr-3" style={{backgroundColor:'#266ba8'}}>
                        <FaToggleOn size={11} className="text-white" />
                    </div>
                    <h2 className="text-xs mr-3 leading-none font-semibold" style={{color:'#266ba8'}}>
                        Kill switch
                    </h2>
                    <h2 className="text-sm leading-tight">{data[click].ks}</h2>
                </div>
                <div className="flex flex-row items-center my-3">
                    <div className="rounded-full p-1.5 mr-3" style={{backgroundColor:'#266ba8'}}>
                        <MdDevices size={11} className="text-white" />
                    </div>
                    <h2 className="text-xs mr-3 leading-none font-semibold" style={{color:'#266ba8'}}>
                        Devices/license
                    </h2>
                    <h2 className="text-sm leading-tight">{data[click].devices}</h2>
                </div>
                <div className="flex flex-row items-center my-3">
                    <div className="rounded-full p-1.5 mr-3" style={{backgroundColor:'#266ba8'}}>
                        <CiMobile1 size={11} className="text-white" />
                    </div>
                    <h2 className="text-xs mr-3 leading-none font-semibold" style={{color:'#266ba8'}}>
                        Mobile
                    </h2>
                    <h2 className="text-sm leading-tight">{data[click].mobile}</h2>
                </div>
            </div>
            <h2 className="font-medium mt-4 text-center" >Best VPN for</h2>
            <div className="flex flex-row items-center mt-5 justify-center">
                <div className="relative flex flex-col items-center mx-5">
                    <div className="rounded-full border-[3px] p-3 border-gray-400 text-cyan-600">
                    <FaLock size={15}/>
                    </div>
                    <div className="rounded-full z-10 relative bg-white -top-3 p-0.5 border-[2px] text-cyan-600 border-gray-400">
                        <FaCheck size={10}/>
                    </div>
                    <h2 className="text-sm">Privacy</h2>
                </div>
                <div className="relative flex flex-col items-center mx-5">
                    <div className="rounded-full border-[3px] p-3 border-gray-400 text-cyan-600">
                    <SiSpeedtest size={15}/>
                    </div>
                    <div className="rounded-full z-10 relative bg-white -top-3 p-0.5 border-[2px] text-cyan-600 border-gray-400">
                        <FaCheck size={10}/>
                    </div>
                    <h2 className="text-sm">Speed</h2>
                </div>
            </div>
            <h2 className="text-center mt-10">Starting Price</h2>
            <h2 className="text-center mt-5 text-5xl text-blue-800 font-medium">${data[click].price}</h2>
            <h4 className="text-center text-sm">per month</h4>
            <div className="bg-orange-600 hover:bg-orange-500 flex w-52 items-center px-2 py-2 my-10 justify-center self-center rounded-lg ">
                <a href={`${data[click].website}`}><h2 className="text-white text-xl">Visit Website &gt;</h2></a>
            </div>
        </div>
    )
}

export default CardMobile;