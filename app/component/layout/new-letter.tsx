import Image from "next/image";
import React from "react";

export default function NewsLetter() {
  return (
    <>
      <div >
        <div className="relative grid items-center w-full h-[200px] md:h-[400px] overflow-clip max-w-8xl mx-auto">
          <Image
            src="/chu2.jpg"
            alt="church logo"
            width={500}
            height={500}
            className=" w-full h-full object-cover object-center"
          />
          <div className="absolute  bg-red-700 top-0 justify-center h-full w-full opacity-70"></div>
          <div className="absolute flex flex-col  justify-center items-center md:items-center md:w-full w-full  gap-2 md:gap-3  ">
            <p className=" text-center  md:w-full w-full font-bold md:text-[40px] text-[24px] text-white">
             
              Subscribe to Our Monthly Church NewsLetter
            </p>
            <p className="  font-bold md:text-[22px] text-[16px] text-white text-center md:top-[40px] md:w-full w-full">
             
              stay in the loop about new teaching, content,
              <br /> & update To ECNook
            </p>
            <div className="items-center flex justify-center bg-[#1f1e1eea] md:px-3 md:py-3 rounded-xl px-1 py-1  ">
              <input
                placeholder="Email Address"
                type="text"
                className="text-[10px] md:text-[20px]  border-black border-8 md:border-8 bg-slate-100  text-black rounded-md  placeholder:text-black w-[250px] mx-auto md:w-[800px]  md:h-[60px] h-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
