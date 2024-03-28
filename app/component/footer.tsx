import Link from "next/link"

export default function Footer() {
	return (
        <>
        <div className=' '>
        <div className='lg:max-w-6xl mx-auto lg:w-full md:w-full w-full py-5 px-5 bg-black'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-2 '>
                        <div className=' grid grid-cols-1 lg:grid-cols-1 gap-3  font-bold text-[10px] lg:text-[15px] text-white'>
                            <p>ILE ADURA MOSE</p>
                            <p>6th Avenue <br />Extension Canal<br />Gate Festac Town</p>
                        </div>
                    <div className='grid grid-cols-2 lg:grid-cols-3  md:grid-cols-3 gap-3 text-white'>
                        <div className='grid text-[7px] lg:text-[10px] font-bold'>
                            < Link  href='/'> FIRST COLUMN </Link>
                            < Link href='/'> FIRST COLUMN </Link>
                            < Link href='/'> FIRST COLUMN </Link>
                            < Link href='/'> FIRST COLUMN </Link>
                        </div>

                        <div className='grid text-[7px] lg:text-[10px] font-bold text-white'>
                            < Link  href='/'> FIRST COLUMN </Link>
                            < Link href='/'> FIRST COLUMN </Link>
                            < Link href='/'> FIRST COLUMN </Link>
                            < Link href='/'> FIRST COLUMN </Link>
                        </div>

                        <div className='lg:grid hidden text-[7px] lg:text-[10px] font-bold text-white'>
                            < Link  href='/'> FIRST COLUMN </Link>
                            < Link href='/'> FIRST COLUMN </Link>
                            < Link href='/'> FIRST COLUMN </Link>
                            < Link href='/'> FIRST COLUMN </Link>
                        </div>
                    </div>
                </div>
               
            </div>

        </div>
           
          
        </>
	);
}
