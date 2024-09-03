import React, { useState, useEffect } from "react";
import myImg from '../images/bg-remove.png';
import Navbar from "./Navbar";
import bgImage from '../images/bg-hero.PNG';

const About = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Frontend Web Developer', 'React JS Developer','Software Engineer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ backgroundImage: `url(${bgImage})`}}>
    <Navbar/>
    <div className="min-h-[calc(100vh-96px)] flex flex-col sm:flex-row-reverse gap-20 sm:gap-10 items-center justify-evenly  pb-10 px-5 pt-10 sm:pt-0">
      <div className="rounded-full border-4 border-rootColor overflow-hidden shadow-2xl shadow-rootColor hover:shadow-none transitions">
        <img
          src={myImg}
          alt="Background"
          className="w-60 sm:w-80 2xl:w-96 hover:scale-105 transitions"
        />
      </div>

      <div className="text-center md:text-start tracking-wider">
        <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl uppercase mb-2 text-white">
          About Me
        </h1>
        {/* Text Flip Animation for the "Web Developer" */}
        <h3 className="font-medium text-xl lg:text-2xl 2xl:text-3xl mb-2 text-rootColor">
          {words[currentWordIndex]}
        </h3>
        <p className="w-full sm:w-[400px] md:w-[350px] lg:w-[550px] md:leading-7 text-justify text-sm sm:text-base 2xl:text-xl text-gray-400 px-2 md:px-0">
          I, Hammad Khan, a dedicated Frontend Web Developer, merges creativity
          with technical expertise. Proficient in HTML, CSS, Bootstrap, Tailwind
          CSS and JavaScript providing fully responsive design for all screens.
          A lifelong learner and problem solver. Let's collaborate and bring
          ideas to life!
          <br />
          <br />
          <span className="text-rootColor font-bold uppercase ">
            Skills:{" "}
          </span>
          HTML | CSS | Bootstrap | Tailwind CSS | Javascript | React JS |
          Firebase | Github
        </p>
      </div>
    </div>
    </section>
  );
};

export default About;
