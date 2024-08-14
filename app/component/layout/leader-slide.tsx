import Image from 'next/image'
export default function LeaderSlide({image, name, position}:{
    image : string,
    name : string
    position : string
}) {
    return (
        <>
        <div>
            < Image src={image}alt='church logo' width={500} height={500} className=" md:w-[200px] md:h-[150px] w-[100px] h-[100px] md:object-cover rounded-2xl"/>
                        <p className='font-bold md:text-[15px] text-[10px]'>{name}</p>
                        <p className= 'md:text-[15px] text-[10px]'> {position} </p>
        </div>
        </>
    )
}