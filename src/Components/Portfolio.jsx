import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom';
import bgImage from '../images/bg-hero.PNG';
import bgReact from '../images/react-bg.png';
import bgJavascript from '../images/javascript-bg2.png';
import bgHtml from '../images/html-bg2.png';

const Portfolio = () => {
  return (
    <section className='min-h-screen' style={{ backgroundImage: `url(${bgImage})` }}>

      <Navbar/>
      <div className='flex flex-col items-center gap-y-10 sm:gap-y-16 2xl:gap-y-20 justify-center min-h-[calc(100vh-96px)] py-10 px-5 tracking-widest'>

      <h1 className='font-medium text-2xl md:text-3xl 2xl:text-4xl mb-2 text-white uppercase'>My <span className='text-rootColor'>Projects</span></h1>

      <div className='flex flex-wrap justify-center gap-10 lg:gap-16'>

      <Link to="/portfolio/react" className=' rounded-lg overflow-hidden hover:shadow-lg hover:shadow-cyan-500  hover:scale-105 transitions'>
          <img src={bgReact} alt="" className='w-[350px] xl:w-[400px]'/>
          <h1 className='bg-white text-center py-3 font-semibold text-sm sm:text-lg '>View Projects</h1>
        </Link>

        <Link to="/portfolio/javascript" className=' rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-500  hover:scale-105 transitions'>
          <img src={bgJavascript} alt="" className='w-[350px] xl:w-[400px]'/>
          <h1 className='bg-white text-center py-3 font-semibold text-sm sm:text-lg '>View Projects</h1>
        </Link>

        <Link to="/portfolio/htmlcss" className=' rounded-lg overflow-hidden hover:shadow-lg hover:shadow-pink-500  hover:scale-105 transitions'>
          <img src={bgHtml} alt="" className='w-[350px] xl:w-[400px]'/>
          <h1 className='bg-white text-center py-3 font-semibold text-sm sm:text-lg '>View Projects</h1>
        </Link>
      </div>

      </div>

    </section>
  )
}

export default Portfolio
