import React from 'react'
import sendImg from "../components/assest/Send.png"
import Image from 'next/image';
import wifiHigh from "../components/assest/wifi-high.png"
import wifiLow from "../components/assest/wifi-low.png"
import wifiMedium from "../components/assest/wifi-medium.png"
import vector from "../components/assest/Vector.png"
import levels from "../components/assest/levels.png"

function StatusBar() {
  return (
    <div className=' mx-auto w-[23.438em] h-[2.75em] '>
        <div className='flex justify-between'>
            <div className='w-[6em]] h-[2.75em] relative'>
                <div className=' w-[2.938] h-[1.313em] absolute top-[0.875em] left-[29.5px] gap-[2px] flex'>
                    <div className=' font-[SFProText] font-[16px] leading-[21px] tracking-[-0.3199999928474426px] text-right text-[#FFFFFF] '>1:11</div>
                    <div className='w-[1em] h-[7.563em] relative' ><Image src={sendImg} className=' absolute top-[3.4px]' /></div>
                </div>
            </div>
            <div className='w-[6em] h-[2.75em] relative '>
              <div className='w-[72px] h-[16px] absolute top-[16px] left-[8px] gap-[4px]  flex'>
                <div className='w-[20px] h-[16px] relative flex'>
                  <div className='w-[3.5px] h-[4.5px] absolute top-[10px] left-[0.5px] bg-white'></div>
                  <div className='w-[3.5px] h-[6.5px] absolute top-[8px] left-[5.5px] bg-white'></div>
                  <div className='w-[3.5px] h-[9px] absolute top-[5.5px] left-[10.5px] bg-white'></div>
                  <div className='w-[3.5px] h-[11.5px] absolute top-[3px] left-[15.5px] bg-white rounded-[1px] opacity-[20%]'></div>
                </div>
                <div className=' w-[16px] h-[16px] relative'>
                    <Image src={wifiHigh} className=' absolute w-[16px] h-[4.97px] top-[3px]'/>
                    <Image src={wifiMedium} className=' absolute w-[10.42px] h-[3.81px] top-[6.98px] left-[2.79px]'/>
                    <Image src={wifiLow} className=' absolute w-[4.85px] h-[3.54px] top-[10.96px] left-[5.58px]'/>
                </div>
                <div className='w-[28px] h-[16px] relative '>
                  <Image src={vector} className=' absolute top-[2.5px]'/>
                  <Image src={levels} className=' absolute top-[4.5px] left-[2px]'/>
                </div>
              </div>
              
              
            </div>
        </div>
    </div>
  )
}

export default StatusBar;