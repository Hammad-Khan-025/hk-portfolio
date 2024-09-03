import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-evenly items-start flex-wrap py-20 tracking-wider bg-slate-900">
    <div className="flex flex-col justify-center text-white items-center md:items-start w-64 md:w-auto mb-8 md:mb-0">
        <h3 className="text-rootColor font-semibold text-2xl 2xl:text-4xl mb-2 tracking-wider">About Me</h3>
        <p className="w-48 text-center md:text-start text-sm md:text-[15px] 2xl:text-lg leading-6 md:leading-7">A dedicated Frontend
            Web Developer, merges creativity with technical expertise.</p>
    </div>
    <div
        className="text-white flex flex-col items-center md:items-start text-center md:text-start w-64 md:w-auto mb-8 md:mb-0">
        <h2 className="font-semibold text-xl 2xl:text-3xl tracking-wider">Contact Me</h2>
        <div className="border-b-2 border-b-rootColor w-36 2xl:w-40 my-2"></div>
        <div className="w-56 text-sm md:text-[15px] 2xl:text-lg leading-6 md:leading-7">
            <p><b>Email :</b> hk188540@gmail.com</p>
            <p><b>Phone :</b> 03169343846</p>
            <p><b>Address :</b> Near FM Radio Station Jhangi, Abbottabad</p>
        </div>
    </div>
    <div className="text-white flex flex-col items-center md:items-start text-center w-64 md:w-auto mb-8 md:mb-0">
        <h2 className="font-semibold text-xl 2xl:text-3xl tracking-wider">Quick Links</h2>
        <div className="border-b-2 border-b-rootColor w-36 2xl:w-40 my-2"></div>
        <div className="text-sm md:text-[15px] 2xl:text-lg flex flex-col items-center md:items-start leading-6 md:leading-7 2xl:leading-9">
            <Link to='/' className='underline'>Home</Link>
            <Link to='/about' className='underline'>About</Link>
            <Link to='/skills' className='underline'>Skills</Link>
            <Link to='/portfolio' className='underline'>Portfolio</Link>
            <Link to='/contact' className='underline'>Contact</Link>
        </div>

    </div>
    <div className="text-white flex flex-col items-center md:items-start text-center w-64 md:w-auto mb-5 md:mb-0 ">
        <h2 className="font-semibold text-xl 2xl:text-3xl tracking-wider">Follow Me</h2>
        <div className="border-b-2 border-b-rootColor w-36 2xl:w-40 my-2"></div>
        <div className="text-rootColor text-2xl flex gap-3 md:gap-5 mt-2 reveal-bottom">
            <Link to="https://www.linkedin.com/in/hammad-khan1090/" className='social-icons'><FaLinkedinIn /></Link>
            <Link to="https://github.com/Hammad-Khan-025" className='social-icons'><FaGithub /></Link>
            <Link to="https://www.facebook.com/" className='social-icons'><FaFacebookF /></Link>
            <Link to="https://www.instagram.com/accounts/login/" className='social-icons'><FaInstagram /></Link>
        </div>
    </div>

</footer>
  )
}

export default Footer
