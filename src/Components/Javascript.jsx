import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../images/bg-hero.PNG';
import { FaArrowLeft } from "react-icons/fa";
import data from './JavascriptData.json'

// Import all images
import menuImg from '../images/javascript-images/menuImg.PNG';
import groceryImg from '../images/javascript-images/groceryImg.PNG';
import countdownImg from '../images/javascript-images/countdownImg.PNG';
import loremImg from '../images/javascript-images/loremImg.PNG';
import tabsImg from '../images/javascript-images/tabsImg.PNG';
import calculatorImg from '../images/javascript-images/calculatorImg.PNG';
import reviewsImg from '../images/javascript-images/reviewsImg.PNG';
import counterImg from '../images/javascript-images/counterImg.PNG';
import colorFlipperImg from '../images/javascript-images/colorFlipperImg.PNG';

// Create a mapping from IDs to images
const imageMap = {
  "1": menuImg,
  "2": groceryImg,
  "3": countdownImg,
  "4": loremImg,
  "5": tabsImg,
  "6": calculatorImg,
  "7": reviewsImg,
  "8": counterImg,
  "9": colorFlipperImg
};

const Javascript = () => {
  return (
    <section className='flex flex-col items-center gap-y-12 2xl:gap-y-20 justify-center min-h-screen py-10 px-5 tracking-widest bg-repeat pt-20 sm:pt-32' style={{ backgroundImage: `url(${bgImage})` }}>

    <Link to='/portfolio' className='absolute top-5 left-5 border border-orange-500 text-orange-500 hover:bg-orange-500 bg-transparent px-3 py-2 text-lg hover:text-white rounded-md transitions'>
    <FaArrowLeft />
    </Link>

    <h1 className='font-medium text-2xl md:text-3xl 2xl:text-4xl mb-2 text-white uppercase pt-10 sm:pt-0'>javascript <span className='text-orange-500'>Projects</span></h1>

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-12'>

    {data.map((item) => {
        const { id, title, link } = item;
        const img = imageMap[id]; // Get the correct image from the map

        return (
          <Link 
            key={id} 
            to={link} 
            target="_blank" 
            className="rounded-lg overflow-hidden hover:shadow-xl hover:shadow-orange-500 hover:scale-105 transitions"
          >
            <img src={img} alt={title} className="w-[350px] 2xl:w-[500px]" />
            <h1 className="bg-gray-300 text-center py-3 font-semibold text-sm sm:text-lg">{title}</h1>
          </Link>
        );
      })}


    </div>

    </section>
  )
}

export default Javascript
