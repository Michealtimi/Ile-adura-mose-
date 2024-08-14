import NewsLetter from "./component/layout/new-letter";
import Note from "./component/layout/not";
import Leader from "./component/layout/leader";
import Slide from "./component/slider/slide";
import Note2 from "./component/slider/slide-2";
import ServiceTime from "./component/layout/service";
import LeaderSlide from "./component/layout/leader-slide";

const baby = {
  image: '/chu6.jpg',
  name: ' New Arrival',
  position: ' New Arrival' 
}
const bab = {
  image: '/chu6.jpg',
  name: ' New Arrival',
  position: ' New Arrival' 
}
const ba = {
  image: '/chu6.jpg',
  name: ' New Arrival',
  position: ' New Arrival' 
}


export default function Home() {
  return (
      <>
        < Slide/>  
        < Leader />
        <div className=" justify-center items-center w-full h-full md:h-full md:w-full mx-1 my-2 max-w-6xl">
        < LeaderSlide image={baby.image} name={baby.name} position={baby.position}/>
        < LeaderSlide image={bab.image} name={bab.name} position={bab.position}/>
        < LeaderSlide image={ba.image} name={ba.name} position={ba.position}/>
        </div>
        < ServiceTime />
       < Note/>
       < Note2 />
       < NewsLetter /> 
      </>
  );
}
