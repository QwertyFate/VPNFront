import React, { useState } from "react";
import FlipClock from "./flipclock";
import { IoIosStar } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

const Popup = () => {

    const [close, setClose] = useState(false);

    const handleClick = () => {
        setClose(!close);
    }

    const targetDate = "2024-10-22T02:00:00";
    const date = +new Date() + 86400000 ;
    return(
        <div className={`${close? "hidden": "flex"} z-50 h-[400px] md:h-[450px] w-[85%] md:w-[75%] lg:w-[50%] mx-auto border-black top-[20%] bg-white border-[3px] flex-col fixed md:left-[13%] lg:left-[25%] left-[8%]`}>
            <h1 className="text-2xl md:text-4xl mt-6 font-bold uppercase text-center">Limited time Offer!</h1>
            <h3 className="md:text-lg text-xs text-center mt-10">Save 82% On Private Internet Access. Offer Expires In:</h3>
            <div>
                <FlipClock Timer={date} />
            </div>
            <div className="flex flex-row items-center justify-center mt-10 ">
                <div className="text-white bg-green-500 rounded-sm  p-1">
                    <IoIosStar size={25}/>
                </div>
                <div className="text-white bg-green-500 rounded-sm  p-1">
                    <IoIosStar size={25}/>
                </div>
                <div className="text-white bg-green-500 rounded-sm  p-1">
                    <IoIosStar size={25}/>
                </div>
                <div className="text-white bg-green-500 rounded-sm  p-1">
                    <IoIosStar size={25}/>
                </div>
                <div className="text-white bg-green-500 rounded-sm  p-1">
                    <IoIosStar size={25}/>
                </div>
                <h2 className="text-lg ml-3"><strong>4.8</strong> out of 5</h2>
            </div>
            <div className="bg-red-700 py-3 mt-3">
                <h2 className="text-white font-semibold uppercase text-center text-3xl md:text-5xl">82% discount on vpn</h2>
            </div>
            <div onClick={handleClick} className="absolute right-0 top-0 hover:text-stone-500">
                <IoMdCloseCircle size={40} />
            </div>
        </div>
    )
}

export default Popup;