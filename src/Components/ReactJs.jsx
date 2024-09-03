import React from 'react'
import { Link } from 'react-router-dom'
import bgImage from '../images/bg-hero.PNG';
import { FaArrowLeft } from "react-icons/fa";
import data from './Data.json'

// Import all images
import databaseImg from '../images/react-images/databaseImg.PNG';
import todoImg from '../images/react-images/todoImg.PNG';
import currencyImg from '../images/react-images/currencyImg.PNG';
import reviewsImg from '../images/react-images/reviewsImg.PNG';
import cartImg from '../images/react-images/cartImg.PNG';
import birthdayImg from '../images/react-images/birthdayImg.PNG';
import passwordImg from '../images/react-images/passwordImg.PNG';
import tabsImg from '../images/react-images/tabsImg.PNG';
import modalImg from '../images/react-images/modalImg.PNG';

// Create a mapping from IDs to images
const imageMap = {
  "1": databaseImg,
  "2": todoImg,
  "3": currencyImg,
  "4": cartImg,
  "5": reviewsImg,
  "6": passwordImg,
  "7": birthdayImg,
  "8": tabsImg,
  "9": modalImg
};

const ReactJs = () => {
  return (
    <section className='flex flex-col items-center gap-y-10 sm:gap-y-16 2xl:gap-y-20 justify-center min-h-screen py-10 px-5 tracking-widest pt-20 sm:pt-32 bg-repeat' style={{ backgroundImage: `url(${bgImage})` }}>

    <Link to='/portfolio' className='absolute top-5 left-5 border border-orange-500 text-orange-500 hover:bg-orange-500 bg-transparent px-3 py-2 text-lg hover:text-white rounded-md transitions'>
    <FaArrowLeft />
    </Link>

    <h1 className='font-medium text-2xl md:text-3xl 2xl:text-4xl mb-2 text-white uppercase pt-10 sm:pt-0'>react <span className='text-orange-500'>Projects</span></h1>

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

export default ReactJs
