import React, { useEffect, useState } from "react";

const FlipClock = ({Timer}) => {
    const calculateTimeLeft = () => {
        const difference = Timer - new Date().getTime();
        let timeLeft = {};
        
        if (difference > 0) {
            timeLeft = {
                hours: Math.floor((difference/(1000*60*60))%24),
                minutes: Math.floor((difference/1000 / 60)%60),
                seconds: Math.floor((difference/1000)% 60)

            }
        }
        return timeLeft
    }

    const[ timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        },1000);

        return () => clearInterval(timer);
    },[Timer]);

    return (
        <div className="flex justify-center mt-4">
            <div className="text-center flex flex-row mx-3">
                <div className="flex flex-col">
                    <h2 className="text-sm md:text-md font-bold text-center pr-3">Hours</h2>
                    <div className="flex flex-row mt-4">
                        <div className=" text-white">
                            {Array.from(String(timeLeft.hours || "00").padStart(2, "5")).map((char, indx) => (
                                <span className="bg-black text-5xl md:text-7xl justify-center mr-1 font-semibold px-2 md:px-3 rounded-md" key={indx} >{char}</span>
                            ))}
                        </div>
                        <h1 className="text-5xl md:text-7xl">:</h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-sm md:text-md font-bold text-center pr-3">Minutes</h2>
                    <div className="flex flex-row mt-4">
                        <div className=" text-white">
                            {Array.from(String(timeLeft.minutes || "00").padStart(2, "5")).map((char, indx) => (
                                <span className="bg-black text-5xl md:text-7xl justify-center mr-1 font-semibold px-2 md:px-3 rounded-md" key={indx} >{char}</span>
                            ))}
                        </div>
                        <h1 className="text-5xl md:text-7xl">:</h1>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h2 className="text-sm md:text-md font-bold text-center pr-3">Seconds</h2>
                    <div className="flex flex-row mt-4">
                        <div className=" text-white">
                            {Array.from(String(timeLeft.seconds || "00").padStart(2, "5")).map((char, indx) => (
                                <span className="bg-black text-5xl md:text-7xl justify-center mr-1 font-semibold px-2 md:px-3 rounded-md" key={indx} >{char}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FlipClock;