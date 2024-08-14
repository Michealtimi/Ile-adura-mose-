import { Menu, MenuSquare } from "lucide";
import Image from "next/image";
import Link from "next/link";
import WhoWeAre from './who-we-are';
export default function NavBar() {
	return (
			<>
				<div className='-500 w-full lg:w-full md:py-3 py-2 mx-auto fixed  z-50 bg-[#020101c8]'>
						<nav className='mx-auto lg:mx-auto justify-center lg:justify-center lg:max-w-6xl pb-7 lg:pb-0 lg:w-full md:w-full items-center '>
								
								<div className=' justify-between items-center md:flex w-full lg:w-full 0  '>
									<div className=" flex justify-between md:gap-12 px-3">
											<Image src="/chu.png" alt='church logo' width={100} height={100} className=" h-12 w-12 md:h-[80px] md:w-[80px]"/>
												<div className="text-center font-bold shirnk-0 ">
													<h1 className=' text-[25px] md:text-[35px] text-white'>ILE ADURA MOSE</h1>
													<h1 className=' text-[11px] md:text-[15px]  text-white '>CHERUBIM, AND SERAPHIM CHURCH</h1>
												</div>
											<Image src="/chu1.png" alt='church logo' width={100} height={100} className=" h-12 w-12 md:h-[50px] md:w-[50px] lg:h-[80px] lg:w-[80px]"/>
									</div>
											

									
									


								<div className=" gap-5  md:flex hidden  px-4">
							
									<Link
											href='/'
											className=' font-bold text-[10px] md:text-[11px]  text-white lg:text-[15px]'
										>
											HOME
										</Link>

										< WhoWeAre/>

										<Link
											href='/events'
											className=' text-white font-bold text-[10px]  md:text-[11px] lg:text-[15px]'
										>
											EVENTS
										</Link>

										<Link
											href='/'
											className=' text-white font-bold text-[10px] md:text-[11px] lg:text-[15px]'
										>
											MEDIA
										</Link>

										<Link
											href='/'
											className=' text-white font-bold text-[10px] md:text-[11px] lg:text-[15px]'
										>
											CONTACTS US
										</Link>
								</div>					
							</div>
						</nav>
				</div>
			</>
				
	);
}
