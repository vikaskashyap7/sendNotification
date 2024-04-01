import React from 'react'
import Image from "next/image";
import Img1 from "./assest/198.png"
import Img2 from "./assest/199.png"
import Img3 from "./assest/200.png"
import Img4 from "./assest/197.png"
import Bell from "./assest/bell.png"
import circle from "./assest/195.png"


function HeroSection() {
  return (
      <div className=' w-[375px] h-fit  mx-auto  relative '>
        <div className='w-[344px] h-[344px]  absolute top-[249px] left-[16px] '>
          <Image src={Img4} />
          <Image src={Img3} className=' absolute top-[35px] left-[31px]'/>
          <Image src={Img2} className=' absolute top-[64px] left-[58px]'/>
          <Image src={Img1} className=' absolute top-[98px] left-[88px]'/>
          <Image src={circle} className=' absolute top-[128px] left-[117px]'/>
          <Image src={Bell} className=' absolute top-[146px] left-[135px]'/>
        </div>
        
      </div>
  )
}

export default HeroSection