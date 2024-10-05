import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import Navbar from './Navbar';
import bgImage from '../images/bg-heroo.PNG';
import CV from '../images/Hammad_CV.pdf';

const Home = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ['Frontend Web Developer', 'React JS Developer','Software Engineer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 3000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    // style={{ background: 'linear-gradient(to bottom right, rgba(30,64,175, 0.5), rgba(0, 0, 0, 0.1), rgba(30, 64, 175, 0.2))' }}
    <section style={{ backgroundImage: `url(${bgImage})` }} className='bg-no-repeat bg-cover'>   
    <Navbar/>
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-96px)] gap-5 text-center tracking-widest bg-opacity-20' >
      <h3 className="text-lg sm:text-xl xl:text-3xl 2xl:text-4xl text-white">Hello, Its me</h3>
      <h1 className="text-4xl font-bold md:text-5xl lg:text-5xl 2xl:text-6xl text-rootColor ">Hammad Khan</h1>
      <h3 className='text-2xl font-semibold md:text-4xl 2xl:text-5xl text-white'>
        {words[currentWordIndex]}
      </h3>

      <div className="text-xl flex gap-3 md:gap-5 mt-2">
        <Link to="https://www.linkedin.com/in/hammad-khan1090/" className='social-icons' target='_blank'><FaLinkedinIn /></Link>
        <Link to="https://github.com/Hammad-Khan-025" className='social-icons' target='_blank'><FaGithub /></Link>
        <Link to="https://www.facebook.com/" className='social-icons' target='_blank'><FaFacebookF /></Link>
        <Link to="https://www.instagram.com/accounts/login/" className='social-icons' target='_blank'><FaInstagram /></Link>
      </div>
      <a href={CV} className="cv-btn" download="Hammad-CV.pdf">Download CV</a>
    </div>
    </section>
  );
}

export default Home;
