import { Menu, MenuSquare } from "lucide";
import Image from "next/image";
import Link from "next/link";
import WhoWeAre from './who-we-are';
export default function NavBar() {
	return (
			<>
				<div className='-500 w-full lg:w-full py-3 mx-auto fixed  z-50 '>
						<nav className='mx-auto lg:mx-auto justify-center lg:justify-center lg:max-w-6xl pb-7 lg:pb-0 lg:w-full md:w-full items-center '>
								<div className=' lg:items-center lg:flex md:flex w-[324px] lg:w-full mx-auto lg:justify-between  md:justify-between lg:px-2 md:px-2 '>
										<div className='flex lg:flex lg:gap-10 justify-between items-center md:flex w-[250px] lg:w-[600px]  '>
											<Image src="/chu.png" alt='church logo' width={100} height={100} className=" h-12 w-12 md:h-[50px] md:w-[50px] lg:h-[80px] lg:w-[80px]"/>
											<div className="text-center font-bold shirnk-0 ">
												<h1 className=' text-[10px] md:text-[30px] lg:text-[35px] text-black'>ILE ADURA MOSE</h1>
												<h1 className=' text-[5px] md:text-[13px]  text-black lg:text-[15px]'>CHERUBIM, AND SERAPHIM CHURCH</h1>
											</div>
										<Image src="/chu1.png" alt='church logo' width={100} height={100} className=" h-12 w-12 md:h-[50px] md:w-[50px] lg:h-[80px] lg:w-[80px]"/>
								</div>

									
									


								<div className=" gap-5 lg:flex md:flex hidden">
							
									<Link
											href='/'
											className=' font-bold text-[10px] md:text-[11px]  text-black lg:text-[15px]'
										>
											HOME
										</Link>

										< WhoWeAre/>

										<Link
											href='/'
											className=' text-black font-bold text-[10px]  md:text-[11px] lg:text-[15px]'
										>
											EVENTS
										</Link>

										<Link
											href='/'
											className=' text-black font-bold text-[10px] md:text-[11px] lg:text-[15px]'
										>
											MEDIA
										</Link>

										<Link
											href='/'
											className=' text-black font-bold text-[10px] md:text-[11px] lg:text-[15px]'
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
