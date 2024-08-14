import Image from 'next/image'
export default function Leader() {
    return (
        <>
            <div className='mx-auto max-w-6xl'>
                <div className='my-4'>
                    <div className='font-bold md:text-[20px] text-[15px] '> Leadership </div>
                    <hr className=" border-2 border-red-700 mt-1 mb-3 w-[50px]"/>
                </div> 
                
               <div className=' md:justify-between '>
                    <div className='grid   md:grid-cols-2 justify-center gap-6 px-6 md:px-0' >
                            < Image src="/baba.jpg" alt='church logo' width={500} height={500} className=" md:w-full md:h-[400px] w-[350px] h-[300px] md:object-cover rounded-2xl"/>
                                <div className='flex flex-col gap-6 pt-2'>
                                    <p className='font-bold text-[15px] md:text-[18px] w-full'>Raise up an army for me, to go with the gospel to all <br/> 
                                            Nations, Gather together those whom I have called 
                                            and i will send them with the fire of my spirit. Give 
                                            my word and your example to many who will go to 
                                            teach, preach and heal
                                        </p>

                                        <p className=' text-[13px] md:text-[15px] font-bold  '>
                                            House of Praise is set up by God to raise, restore and equip a people to <br/>
                                            the complete and full standard of christ and is led by <br/>
                                            Baba Aladura Samuel Ademola Ajakaye, and a team of ministers <br/>
                                            who are committed to the God Given Mandate
                                        </p>
                                        <div className='flex flex-col md:Lmt-6'>
                                            <hr className=" border-2 border-black  w-[50px]"/>
                                            
                                            <p className='font-bold md:text-[15px] text-[10px]'>
                                                Baba Aladura Samuel Ajakaye (JP)
                                            </p>
                                            <p className=' font-bold md:text-[15px] text-[10px]'>
                                                HIS EMINENCE
                                            </p>
                                        </div>
                                </div>
                                    
                    </div>

                       
                        
               
                </div> 
                
{/*             
               <div className=' grid grid-cols-3 md:grid-cols-4 mx-auto md:justify-between md:px-11 my-5'>
                    <div className=' grid gap-1'>
                        < Image src="/baba.jpg" alt='church logo' width={500} height={500} className=" md:w-[200px] md:h-[150px] w-[100px] h-[100px] md:object-cover rounded-2xl"/>
                        <p className='font-bold md:text-[15px] text-[10px]'> pastor Jane Doe</p>
                        <p className= 'md:text-[15px] text-[10px]'> Head of AJAGUN  </p>
                        </div>

                        <div className=' grid gap-1'>
                        < Image src="/baba.jpg" alt='church logo' width={500} height={500} className=" md:w-[200px] md:h-[150px] w-[100px] h-[100px] md:object-cover rounded-2xl"/>
                        <p className='font-bold md:text-[15px] text-[10px]'> pastor Jane Doe</p>
                        <p className= 'md:text-[15px] text-[10px]'> Head of Choir </p>
                        </div>

                        <div className=' grid gap-1'>
                        < Image src="/baba.jpg" alt='church logo' width={500} height={500} className=" md:w-[200px] md:h-[150px] w-[100px] h-[100px] md:object-cover rounded-2xl"/>
                        <p className='font-bold md:text-[15px] text-[10px]'> pastor Jane Doe</p>
                        <p className= 'md:text-[15px] text-[10px]'> Head of Media </p>
                        </div>

                        <div className=' grid gap-1'>
                        < Image src="/baba.jpg" alt='church logo' width={500} height={500} className=" md:w-[200px] md:h-[150px] w-[100px] h-[100px] md:object-cover rounded-2xl"/>
                        <p className='font-bold md:text-[15px] text-[10px]'> pastor Jane Doe</p>
                        <p className= 'md:text-[15px] text-[10px]'> Head of Band </p>
                        </div>
                </div>  */}
               
            </div>
        </>
    )
}