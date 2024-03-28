import Image from "next/image";
import React from "react";

export default function NewsLetter() {
  return (
    <>
      <div>
        <div className="relative grid items-center w-full h-[150px] lg:h-[300px] overflow-clip max-w-6xl mx-auto">
          <Image
            src="/chu2.jpg"
            alt="church logo"
            width={500}
            height={500}
            className=" w-full h-full object-cover object-center"
          />
          <div className="absolute  bg-red-700 top-0 justify-center h-full w-full opacity-70"></div>
          <div className="absolute flex flex-col  justify-center items-center lg:items-center lg:w-full w-full  gap-2 lg:gap-3  ">
            <p className=" text-center  lg:w-full w-[300px] font-bold lg:text-[25px] text-[15px] text-white">
             
              Subscribe to Our Monthly Church NewsLetter
            </p>
            <p className="  font-bold lg:text-[14px] text-[9px] text-white text-center lg:top-[40px] lg:w-full w-[250px]">
             
              stay in the loop about new teaching, content,
              <br /> & update To ECNook
            </p>
            <div className="items-center flex justify-center bg-[#1f1e1eea] lg:px-3 lg:py-3 rounded-xl px-2 py-2  ">
              <input
                placeholder="Email Address"
                type="text"
                className="text-[10px] lg:text-[20px]  border-none bg-slate-100  text-black rounded-lg  placeholder:text-black w-[200px] mx-auto lg:w-[600px]  lg:h-[60px] h-[30px]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
