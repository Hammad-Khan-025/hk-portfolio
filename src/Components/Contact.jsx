import React from 'react'
import contactImg from '../images/contact.png'
import Navbar from './Navbar'
import Footer from './Footer'
import bgImage from '../images/bg-heroo.PNG';

const Contact = () => {
  return (
 <>
    <section style={{ backgroundImage: `url(${bgImage})` }} className='bg-no-repeat bg-cover'>
    <Navbar/>
    <div className="flex items-start pt-10 sm:pt-0 sm:items-center justify-center md:justify-evenly max-h-[calc(100vh-112px)] md:min-h-[calc(100vh-96px)]  text-white pb-10">
      <div className='hidden lg:block'>
        <img src={contactImg} alt="" className='w-80 2xl:w-96'/>
      </div>
    <div>
    <h1 className="font-semibold text-xl sm:text-2xl 2xl:text-4xl uppercase mb-8 md:mb-10 text-center tracking-wider">contact <span className="text-orange-500">me</span></h1>

<form className="flex flex-col flex-wrap items-center">
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
        <input type="text" placeholder="First Name*" className="input-field"/>
        <input type="text" placeholder="Last Name*" className="input-field"/>
        <input type="email" placeholder="Email*" className="input-field"/>
        <input type="number" placeholder="Mobile No.*" className="input-field"/>
    </div>
    <textarea  className="input-textarea" placeholder="Write your thoughts here...*"></textarea>
    <button className="cv-btn message">Send Message</button>
</form>
    </div>
</div>
</section>
<Footer/>
</>
  )
}

export default Contact
