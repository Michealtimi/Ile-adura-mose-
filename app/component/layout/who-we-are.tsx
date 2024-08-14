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
    <div className=" font-bold text-[15px] md:text-[11px] lg:text-[15px]  text-white">WHO WE ARE </div>
    <div className={`absolute ${dropDown ? 'h-10 opacity-100' : 'h-0 opacity-0'} grid w-[200px] font-bold  md:text-[12px] gap-1 mt-1 py-3 h-[100px] bg-[#363131] rounded-lg  text-white`}>
                

                <Link href='/' className=' '>
                    BABA ALADURA
                </Link>
                <hr className=" border-2 border-red-700  w-[200px]"/>
                
                <Link href='/' className=''>
                    OUR MISSION
                </Link>
                <hr className=" border-2 border-red-700  w-[200px]"/>
                <Link href='/' className=''>
                    ABOUT US
                </Link>
                 
                <hr className=" border-2 border-red-700  w-[200px]"/>

    </div>
    </div>
    
</>
  )
    
}
