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
          <div className=' w-full bg-red  '>
                    
                        <div className='mx-auto w-full items-center md:w-full relative md:max-w-8xl bg-black max-w-8xl'>
                            <Carousel
                                plugins={[
                                    Autoplay({
                                    delay: 5000,
                                    }),
                            ]}
                            >
                            <CarouselContent>
                            <CarouselItem>
                                <div className='relative grid justify-center items-center w-full h-full md:h-full md:w-full'>
                                    <Image src="/chu2.jpg" alt='church logo' width={500} height={500} className=" md:w-screen md:h-screen md:object-cover"/>
                                    <div className="absolute bg-brown  top-0 h-full w-full opacity-70"></div>
                                </div> 
                            
                            </CarouselItem>
                            <CarouselItem>
                            <div className='relative grid justify-center items-center w-full h-full md:h-full md:w-full '>
                                    <Image src="/chu5.jpg" alt='church logo' width={500} height={500} className="w-full h-full md:w-screen md:h-screen md:object-cover"/>
                                    <div className="absolute top-0 h-full w-full opacity-70"></div>
                                </div> 
                            </CarouselItem>
                            <CarouselItem>
                            <div className='relative grid justify-center items-center w-full h-full md:h-full md:w-full bg-[#77af69]'>
                                    <Image src="/chu6.jpg" alt='church logo' width={500} height={500} className=" md:w-screen md:h-screen md:object-cover"/>
                                    <div className="absolute  top-0 h-full w-full opacity-70"></div>
                                </div> 
                                
                            </CarouselItem>
                            <CarouselItem>
                            <div className='relative grid justify-center items-center w-full h-full md:h-full md:w-full bg-[#77af69]'>
                                    <Image src="/chu7.jpg" alt='church logo' width={500} height={500} className=" md:w-screen md:h-screen md:object-cover"/>
                                    <div className="absolute  top-0 h-full w-full opacity-70"></div>
                                </div> 
                                
                            </CarouselItem>
                            </CarouselContent>
                        </Carousel>  
                        </div>
                            <p className="absolute  md:top-[300px] top-[100px] h-full w-full mx-auto text-center font-bold md:text-[20px] text-[8px] ">
                                IN THE PRESENCE OF GOD THERE IS FULLNESS OF JOY
                            </p>
                        </div>
      </>
    )
  }
  
 