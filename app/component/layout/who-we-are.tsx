"use client"
import Link from 'next/link';
import React, { useState } from "react";

export default function WhoWeAre() {
    const [dropDown, setdropDown] = useState(false);
  return (
    <>
    <div 
        onMouseEnter={() => setdropDown(true)}
        onMouseLeave={() => setdropDown(false)}
    >
    <div className=" font-bold text-[15px] md:text-[11px] lg:text-[15px]  text-black">WHO WE ARE </div>
    <div className={`absolute ${dropDown ? 'h-10 opacity-100' : 'h-0 opacity-0'} grid w-[100px] font-bold lg:text-[11px] md:text-[8px] gap-3 mt-1 py-3 h-[100px] bg-[#363131] rounded-lg text-center text-white duration-300`}>
                

                <Link href='/' className=' '>
                    BABA ALADURA
                </Link>
                
                <Link href='/' className=''>
                    OUR MISSION
                </Link>

                <Link href='/' className=''>
                    ABOUT US
                </Link>
                 

    </div>
    </div>
    
</>
  )
    
}
