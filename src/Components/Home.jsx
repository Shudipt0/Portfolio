import React from "react";
import Image from "../assets/mypic.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

function Home() {
  return (
    <div
      name="home"
      className="h-[800px] sm:h-min md:h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-cente h-screen px-4 md:px-10 lg:p-20
      xl:px-10 md:flex-row  gap-16 md:gap-0 md:justify-between pt-28 md:pt-0">
        <div className="flex flex-col justify-center ">
          <h2 className="text-4xl sm:7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I have 1 years experience building and designing sofware. Currently,
            I love to work on web application using technologies like React,
            Tailwind, Next JS and MongoDB.
          </p>
          <div>
            <button className="group text-white w-fit px-6 py-2 md:px-8 md:py-3 flex flex-row items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </button>
          </div>
        </div>

        <div className="w-80">
          <img
            src={Image}
            alt=""
            className="mx-auto w-2/3 xl:w-full bg-gradient-to-b from-blue-950 to-blue-400 rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
