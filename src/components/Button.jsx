'use client'
import addNotification from 'react-push-notification'
import React from 'react'
import logo from "../components/assest/195.png"
function Button() {
  const clickToNotify = () =>{
    addNotification({
      title:'coded by vikas',
      message:'see my code',
      duration:'400',
      icon:'logo',
      native:true
    });
  }
  return (
    <div className='w-[375px] h-fit  mx-auto  relative '>
        <button className='w-[327px] h-[42px] absolute top-[650px] left-[32px] border-[1.4px] border-[#DE502C] rounded-[8px] bg-gradient-to-r from-[#9D0D3D] from-0% via-[#DF522B] via-100% to-[#C77D2C] to-0% flex justify-center items-center ' onClick={clickToNotify}>
          <div className='w-[144px] h-[16px] font-[Inter] font-[500] size-[16px] leading-[16px] text-center text-white '>Send Notification</div>
        </button>
    </div>
  )
}

export default Button