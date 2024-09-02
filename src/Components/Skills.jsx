import React from 'react'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaGithub } from "react-icons/fa";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { DiFirebase } from "react-icons/di";
import Navbar from './Navbar';
import bgImage from '../images/bg-heroo.PNG';

const Skills = () => {
  return (
    <section style={{ backgroundImage: `url(${bgImage})` }} className='bg-repeat'>
    <Navbar/>
    <div className='min-h-[calc(100vh-96px)] flex flex-col flex-wrap gap-10 2xl:gap-20  md:px-20 justify-center items-center pb-10 pt-10'>
      
      <h1 className='font-medium text-2xl md:text-3xl 2xl:text-4xl mb-2 text-white uppercase tracking-wider'>my <span className='text-orange-500'>skills</span></h1>

      <div className='flex flex-wrap gap-10 sm:gap-16 2xl:gap-20  md:px-20 justify-center items-center'>
      <div className='flex flex-col items-center justify-center tracking-wider font-bold border-2 rounded-lg w-36 h-36 text-orange-500 border-orange-500 shadow-orange-500 shadow-lg hover:shadow-none transitions bg-slate-950'>
          <FaHtml5 className='text-7xl'/>
          <h1>HTML</h1>
        </div>
        <div className='flex flex-col items-center justify-center tracking-wider font-bold border-2 rounded-lg w-36 h-36 text-blue-500 border-blue-500 shadow-blue-500 shadow-lg hover:shadow-none transitions bg-slate-950'>
          <FaCss3Alt className='text-7xl'/>
          <h1>CSS</h1>
        </div>
        <div className='flex flex-col items-center justify-center tracking-wider font-bold border-2 rounded-lg w-36 h-36 text-indigo-500 border-indigo-500 shadow-indigo-500 shadow-lg hover:shadow-none transitions bg-slate-950'>
          <FaBootstrap  className='text-7xl'/>
          <h1>BOOTSTRAP</h1>
        </div>
        <div className='flex flex-col items-center justify-center tracking-wider font-bold border-2 rounded-lg w-36 h-36 text-sky-500 border-sky-500 shadow-sky-500 shadow-lg hover:shadow-none transitions bg-slate-950'>
          <RiTailwindCssFill className='text-7xl'/>
          <h1>TAILWIND CSS</h1>
        </div>
        <div className='flex flex-col items-center justify-center tracking-wider font-bold border-2 rounded-lg w-36 h-36 text-yellow-500 border-yellow-500 shadow-yellow-500 shadow-lg hover:shadow-none transitions bg-slate-950'>
          <RiJavascriptFill className='text-7xl'/>
          <h1>JAVASCRIPT</h1>
        </div>
        <div className='flex flex-col items-center justify-center tracking-wider font-bold border-2 rounded-lg w-36 h-36 text-cyan-500 border-cyan-500 shadow-cyan-500 shadow-lg hover:shadow-none transitions bg-slate-950'>
          <FaReact className='text-7xl'/>
          <h1>REACT JS</h1>
        </div>
        <div className='flex flex-col items-center justify-center tracking-wider font-bold border-2 rounded-lg w-36 h-36 text-amber-500 border-amber-500 shadow-amber-500 shadow-lg hover:shadow-none transitions bg-slate-950'>
          <DiFirebase className='text-7xl'/>
          <h1>FIREBASE</h1>
        </div>
        <div className='flex flex-col items-center justify-center tracking-wider font-bold border-2 rounded-lg w-36 h-36 text-gray-300 border-gray-300 shadow-gray-300 shadow-lg hover:shadow-none transitions bg-slate-950'>
          <FaGithub className='text-7xl'/>
          <h1>GITHUB</h1>
        </div>
      </div>
  
    </div>
    </section>
  )
}

export default Skills
