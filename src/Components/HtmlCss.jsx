import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../images/bg-hero.PNG';
import bgEcommerce from '../images/htmlCss-images/ecommerceImg.PNG';
import bgTailwind from '../images/htmlCss-images/tailwindImg.PNG';
import bgLanding from '../images/htmlCss-images/landingImg.PNG';
import { FaArrowLeft } from "react-icons/fa";

const HtmlCss = () => {
  return (
    <section className='flex flex-col items-center gap-y-10 sm:gap-y-16 2xl:gap-y-20 justify-center min-h-screen py-10 px-5 tracking-widest bg-repeat pt-20 sm:pt-32' style={{ backgroundImage: `url(${bgImage})` }}>

    <Link to='/portfolio' className='absolute top-5 left-5 border border-orange-500 text-orange-500 hover:bg-orange-500 bg-transparent px-3 py-2 text-lg hover:text-white rounded-md transitions'>
    <FaArrowLeft />
    </Link>

    <h1 className='font-medium text-2xl md:text-3xl 2xl:text-4xl mb-2 text-white uppercase pt-10 sm:pt-0'>HTML CSS <span className='text-orange-500'>Projects</span></h1>

    <div className='flex flex-wrap justify-center gap-10 xl:gap-16'>

    <Link to="https://hammad-khan-025.github.io/E-commerce/" target='_blank' className=' rounded-lg overflow-hidden hover:shadow-lg hover:shadow-yellow-500  hover:scale-105 transitions'>
        <img src={bgEcommerce} alt="" className='w-[350px] xl:w-[420px]'/>
        <h1 className='bg-gray-300 text-center py-3 font-semibold text-sm sm:text-lg '>E-commerce</h1>
      </Link>

      <Link to="https://hammad-khan-025.github.io/Landing/Landing.html" target='_blank' className=' rounded-lg overflow-hidden hover:shadow-lg hover:shadow-pink-500  hover:scale-105 transitions'>
        <img src={bgLanding} alt="" className='w-[350px] xl:w-[420px]'/>
        <h1 className='bg-gray-300 text-center py-3 font-semibold text-sm sm:text-lg '>Bootstrap Landing</h1>
      </Link>

      <Link to="https://hammad-khan-025.github.io/Tailwind-Landing/" target='_blank' className=' rounded-lg overflow-hidden hover:shadow-lg hover:shadow-red-500  hover:scale-105 transitions'>
        <img src={bgTailwind} alt="" className='w-[350px] xl:w-[420px]'/>
        <h1 className='bg-gray-300 text-center py-3 font-semibold text-sm sm:text-lg '>Tailwind Landing</h1>
      </Link>

    </div>

    </section>
  )
}

export default HtmlCss
