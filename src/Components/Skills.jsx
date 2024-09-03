import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaBootstrap,
  FaGithub,
} from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { DiFirebase } from "react-icons/di";
import Navbar from "./Navbar";
import bgImage from "../images/bg-heroo.PNG";

const Skills = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImage})` }}
      className="bg-repeat"
    >
      <Navbar />
      <div className="min-h-[calc(100vh-96px)] flex flex-col flex-wrap gap-10 2xl:gap-20  md:px-20 justify-center items-center pb-10 pt-10">
        <h1 className="font-medium text-2xl md:text-3xl 2xl:text-4xl mb-2 text-white uppercase tracking-wider">
          my <span className="text-rootColor">skills</span>
        </h1>

        <div className="flex flex-wrap gap-10 sm:gap-16 2xl:gap-20  md:px-20 justify-center items-center">

          <div className="skills-items shadow-lg text-orange-500 border-orange-500 shadow-orange-500">
            <FaHtml5 className="text-5xl sm:text-7xl" />
            <h1 className="text-sm sm:text-base">HTML</h1>
          </div>

          <div className="skills-items shadow-lg text-blue-500 border-blue-500 shadow-blue-500">
            <FaCss3Alt className="text-5xl sm:text-7xl" />
            <h1 className="text-sm sm:text-base">CSS</h1>
          </div>

          <div className="skills-items shadow-lg text-indigo-500 border-indigo-500 shadow-indigo-500">
            <FaBootstrap className="text-5xl sm:text-7xl" />
            <h1 className="text-sm sm:text-base">BOOTSTRAP</h1>
          </div>

          <div className="skills-items shadow-lg text-sky-500 border-sky-500 shadow-sky-500">
            <RiTailwindCssFill className="text-5xl sm:text-7xl" />
            <h1 className="text-sm sm:text-base">TAILWIND CSS</h1>
          </div>

          <div className="skills-items shadow-lg text-yellow-500 border-yellow-500 shadow-yellow-500">
            <RiJavascriptFill className="text-5xl sm:text-7xl" />
            <h1 className="text-sm sm:text-base">JAVASCRIPT</h1>
          </div>

          <div className="skills-items shadow-lg text-cyan-500 border-cyan-500 shadow-cyan-500">
            <FaReact className="text-5xl sm:text-7xl" />
            <h1 className="text-sm sm:text-base">REACT JS</h1>
          </div>

          <div className="skills-items shadow-lg text-amber-500 border-amber-500 shadow-amber-500">
            <DiFirebase className="text-5xl sm:text-7xl" />
            <h1 className="text-sm sm:text-base">FIREBASE</h1>
          </div>

          <div className="skills-items shadow-lg text-gray-300 border-gray-300 shadow-gray-300">
            <FaGithub className="text-5xl sm:text-7xl" />
            <h1 className="text-sm sm:text-base">GITHUB</h1>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;
