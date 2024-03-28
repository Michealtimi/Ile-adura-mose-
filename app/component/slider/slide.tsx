"use client"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    // CarouselNext,
    // CarouselPrevious,
  } from "@/components/ui/carousel"

  import React from 'react'
  import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
  export default function Slide() {
    return (
      <>
          <div className=' w-full '>
                    
                        <div className='mx-auto   w-[320px] items-center lg:w-full relative lg:max-w-6xl '>
                            <Carousel
                                plugins={[
                                    Autoplay({
                                    delay: 5000,
                                    }),
                            ]}
                            >
                            <CarouselContent>
                            <CarouselItem>
                                <div className='relative grid justify-center items-center w-full h-full lg:h-full lg:w-full'>
                                    <Image src="/chu2.jpg" alt='church logo' width={500} height={500} className=" lg:w-screen lg:h-screen lg:object-cover"/>
                                    <div className="absolute bg-brown  top-0 h-full w-full opacity-70"></div>
                                </div> 
                            
                            </CarouselItem>
                            <CarouselItem>
                            <div className='relative grid justify-center items-center w-full h-full lg:h-full lg:w-full '>
                                    <Image src="/chu5.jpg" alt='church logo' width={500} height={500} className="w-full h-full lg:w-screen lg:h-screen lg:object-cover"/>
                                    <div className="absolute top-0 h-full w-full opacity-70"></div>
                                </div> 
                            </CarouselItem>
                            <CarouselItem>
                            <div className='relative grid justify-center items-center w-full h-full lg:h-full lg:w-full bg-[#77af69]'>
                                    <Image src="/chu6.jpg" alt='church logo' width={500} height={500} className=" lg:w-screen lg:h-screen lg:object-cover"/>
                                    <div className="absolute  top-0 h-full w-full opacity-70"></div>
                                </div> 
                                
                            </CarouselItem>
                            </CarouselContent>
                        </Carousel>  
                        </div>
                            <p className="absolute  lg:top-[300px] top-[100px] h-full w-full mx-auto text-center font-bold lg:text-[20px] text-[8px] ">
                                IN THE PRESENCE OF GOD THERE IS FULLNESS OF JOY
                            </p>
                        </div>
      </>
    )
  }
  
 