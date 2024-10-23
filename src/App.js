import logo from './logo.svg';
import './App.css';
import Card from './components/card';
import {data } from './data/data';
import CardMobile from './components/cardMobile';
import Popup from './components/popup';
import { useEffect, useState } from 'react';

function App() {

  const [showpopup, setShowpopup] = useState(false)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowpopup(true);
    },5000)

    return () => clearTimeout(timer);
  },[])

  return(
    <div className='md:w-[95%] lg:w-[83%] mx-auto mt-12 md:mt-24'>
      <h1 className='text-[25px] max-md:text-center md:text-[41px] font-bold  mb-6 md:mb-16 '>
        Compare Our Top 3 VPNs
      </h1>
      {data.map((elem,indx) => {
        console.log(elem)
        return (
          <Card key={indx} vpndata={elem} />
        )
      })}
      <div className='md:hidden'>
        <CardMobile />
      </div>
      <div>
        {showpopup? <Popup /> : null}
      </div>
    </div>
  )
}

export default App;
