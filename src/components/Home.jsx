import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import ProfilePic from "../assets/profilepic2.jpeg";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">

          <div className="flex items-center justify-center">
            <img className="rounded-xl" src={ProfilePic} alt="" />
          </div>

          <div>
            <p className="text-orange-600 font-bold">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
              Kittiporn Pipatpolsakul
            </h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
              I'm Programmer
            </h2>
            <p className="text-[#8892b0] py-4 max-w-[700px]">
              Expert Programmer position in a high quality IT Environment and
              succeed in my work.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Home;
