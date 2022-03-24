import React from "react";

import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import resume from "../assets/resume.jpg"

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form action="" className="flex flex-col max-w-[600px] w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300">
            Contact
          </p>
        </div>
        <div className="w-full h-[30px] flex justify-between items-center duration-300 bg-[#6fc2b0] p-10 hover:scale-110 rounded-lg mb-2">
          <a
            className="flex justify-between items-center text-gray-300 w-full"           
          >
            <HiOutlineMail size={50} />
            <p className="text-black font-bold">kittipornbanky@gmail.com</p>
          </a>
        </div>
        <div className="w-full h-[30px] flex justify-between items-center duration-300 bg-blue-600 p-10 hover:scale-110 rounded-lg mb-2">
          <a
            className="flex justify-between items-center text-gray-300 w-full"
            href="https://www.facebook.com/kittiporn.piputponskul"
            target="_blank"
          >
            <FaFacebook size={50} />
            <p className="text-gray-300 font-bold">Facebook</p>
          </a>
        </div>
        <div className="w-full h-[30px] flex justify-between items-center duration-300 bg-[#333333] p-10 hover:scale-110 rounded-lg mb-2">
          <a
            className="flex justify-between items-center text-gray-300 w-full"
            href="https://github.com/XyphonKung"
            target="_blank"
          >
            <FaGithub size={50} />
            <p className="text-gray-300 font-bold">Github</p>
          </a>
        </div>
        <div className="w-full h-[30px] flex justify-between items-center duration-300 bg-[#565f69] p-10 hover:scale-110 rounded-lg mb-2">
          <a
            className="flex justify-between items-center text-gray-300 w-full"
            href={resume} download="resume.jpg" 
          >
            <BsFillPersonLinesFill size={50} />
            <p className="text-gray-300 font-bold">Resume</p>
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;
