import NewsLetter from "./component/layout/new-letter";
import Note from "./component/layout/not";
import Slide from "./component/slider/slide";
import Note2 from "./component/slider/slide-2";

export default function Home() {
  return (
      <>
          < Slide/>  
       < Note/>
       < Note2 />
       < NewsLetter /> 
      </>
  );
}
