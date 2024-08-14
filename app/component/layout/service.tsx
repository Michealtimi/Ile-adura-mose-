import React from 'react'
import Image from "next/image";

export default function ServiceTime() {
  return (
    <>
        <div className='mx-auto max-w-8xl relative justify-items-center w-full md:w-full bg-red-200'>
            <Image
               src="/chu2.jpg"
               alt="church logo"
               width={500}
               height={500}
               className=" h-[300px] md:h[100px] w-full object-cover"
            />
            <div className=' bg-black  w-full h-full absolute top-0 opacity-90'></div>
            <div className='  gap-0 mx-auto items-center absolute top-0 justify-center  w-full h-full'>
               <div className=' flex flex-col'>
                  <h1 className='  text-white text-center text-[25px] md:text-[50px] my-3 font-bold'>SERVICE TIME</h1>
                  <div className=' flex gap-8  justify-center  py-3'>        
                     <div className='  text-white text-center '>
                        <p className='text-[18px] md:text-[25px] font-bold '>SUNDAY SCHOOL</p>
                        <p className='font-bold text-[30px] md:text-[35px]'>9:30 AM</p>
                  </div>
                  <div className=' text-white text-center'>
                  <p className='text-[18px] md:text-[25px] font-bold '>SUNDAY SCHOOL</p>
                        <p className='font-bold text-[30px] md:text-[35px]'>9:30 AM</p>
                  </div>
                  </div>

                  <div className=' flex gap-8 justify-center py-3'>        
                     <div className=' text-white text-center '>
                     <p className='text-[18px] md:text-[25px] font-bold '>SUNDAY SCHOOL</p>
                        <p className='font-bold text-[30px] md:text-[35px]'>9:30 AM</p>
                  </div>
                  <div className=' text-white text-center '>
                     <p className='text-[19px] md:tex-[20px] font bold '>SUNDAY SCHOOL</p>
                     <p className='font-bold text-[30px] md:tex-[22px]'>9:30 AM</p>
                  </div>
                  </div>             
               </div>
               </div>
               </div>
        
      


     
    </>
  )
}
