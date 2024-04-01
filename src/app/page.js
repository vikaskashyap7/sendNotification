'use client'

import StatusBar from "@/components/StatusBar";

import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";


export default function Home() {
  return (
    <main className=" w-full h-[50em] bg-[#000000] overflow-x-hidden ">
      
      <StatusBar/>
      <HeroSection/>
      
      <div className=" w-[375px]  mx-auto h-fit   relative ">
      <div className="w-[327px] h-[71px] absolute top-[78px] left-[24px] gap-[16px]  flex flex-col justify-between">
          <div className="font-[Inter] font-[500] text-2xl leading-[31.9px] size-[29px] text-center text-[#FFFFFF] w-[204px] h-[32px] mx-auto">
            Lorem Ipsum...
          </div>
          <div className="font-[Inter] font-[400]  leading-[22.99px] size-[19px] text-center text-xl text-[#FFFFFF] opacity-[60%] w-[325px] h-[23px]">
          Lorem ipsum dolor sit amet.
          </div>
        </div>
      </div>
      <Button/>
     
    </main>
  );
}
