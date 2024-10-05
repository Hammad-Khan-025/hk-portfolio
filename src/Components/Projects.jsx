import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import bgImage from "../images/bg-hero.PNG";
import data from './ProjectsData.json';

const Projects = () => {
  return (
    <section
      className="min-h-screen"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <Navbar />
      <div className="flex flex-col items-center gap-y-10 sm:gap-y-16 2xl:gap-y-20 justify-center min-h-[calc(100vh-96px)] py-10 px-5 tracking-widest">
        <h1 className="font-medium text-2xl md:text-3xl 2xl:text-4xl mb-2 text-white uppercase">
          My <span className="text-rootColor">Projects</span>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12">
          {data.map((item) => {
            const { id, title, link, img } = item; // Now you can use the 'image' field

            return (
              <Link
                key={id}
                to={link}
                target="_blank"
                className="rounded-lg overflow-hidden hover:shadow-xl hover:shadow-rootColor hover:scale-105 transitions"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-[350px] 2xl:w-[500px]"
                />
                <h1 className="bg-gray-300 text-center py-3 font-semibold text-sm sm:text-lg">
                  {title}
                </h1>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
