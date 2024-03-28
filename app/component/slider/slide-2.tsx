import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'

export default function Note2() {
  return (
            <>
                <div className='h-full   mx-auto w-full lg:w-full  lg:flex grid lg:max-w-6xl py-8 gap-5 '>
                     <div className='  w-[300px] lg:w-[500px] lg:h-[350px] h-[300px] mx-auto lg:w-300  overflow-clip rounded-2xl py-5 lg:py-0 '>
                            <div className='mx-auto   w-[324px] items-center h-full lg:w-full lg:h-full  '>
                                    <Carousel>
                                    <CarouselContent>
                                    <CarouselItem>
                                        <div className='relative grid justify-center items-center w-full h-full lg:h-full lg:w-full'>
                                            < Image src="/chu2.jpg" alt='church logo' width={500} height={500} className=" w-full h-full lg:object-cover"/>
                                            <div className="absolute bg-black top-0 h-full w-full opacity-70"></div>
                                        </div> 
                                    
                                    </CarouselItem>
                                    <CarouselItem>
                                    <div className='relative grid justify-center items-center w-full h-full lg:h-full lg:w-full '>
                                            <Image src="/chu5.jpg" alt='church logo' width={500} height={500} className="w-full h-full  lg:object-cover"/>
                                            <div className="absolute bg-black top-0 h-full w-full opacity-70"></div>
                                        </div> 
                                    </CarouselItem>
                                    <CarouselItem>
                                    <div className='relative grid justify-center items-center w-full h-full lg:h-full lg:w-full bg-[#77af69]'>
                                            <Image src="/chu6.jpg" alt='church logo' width={500} height={500} className="w-full h-full lg:object-cover"/>
                                            <div className="absolute bg-black top-0 h-full w-full opacity-70"></div>
                                        </div> 
                                        
                                    </CarouselItem>
                                    </CarouselContent>
                                    {/* <CarouselPrevious />
                                    {/* <CarouselNext /> */} 
                                </Carousel>  
                                </div>
                     </div>

                     <div className=' w-[315px] lg:w-[500px] lg:h-[350px] h-[300px] mx-auto px-3 lg:px-0 lg:w-300  '>
                        <p className='text-[15px] lg:text-[20px] font-bold text-center pt-8 text-red-600'>  WELCOME TO THE SPIRIT LIFE EXPERIENCE</p>
                        
                        <p  className='text-[10px] lg:text-[15px] font-bold text-center'>We welcome you here on behalf of the Spiritual 
                                Family of the Spirit Life Cherubim and Seraphim Church.
                                As a bible believing church, we see the Word of God has
                                the only message of hope to humankind, and as such. 
                                We are committed to teaching the word to all creatures
                                without recourse to their religious, cultural, or social 
                                affiliation. We invite you to tour our website with us to
                                    know a bit more about us, our times of service, how to connect
                                    with us without borders and lot more.
                        </p>
                        <p className='text-[12px] lg:text-[15px] font-bold text-center'>Cherub & Folakemi obadare</p>
                     </div>


                </div>

                    
                       
        
             
    </>
)
  
};
