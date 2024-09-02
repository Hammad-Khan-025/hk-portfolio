import React, { useState } from 'react';
import contactImg from '../images/contact.png';
import Navbar from './Navbar';
import Footer from './Footer';
import bgImage from '../images/bg-heroo.PNG';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { firstName, lastName, email, mobile, message } = formData;

    if (!firstName || !lastName || !email || !mobile || !message) {
      toast.error('Please fill out all fields.',{
        position: 'top-center'
      });
      return;
    }

    // If you need to show an alert
    Swal.fire({
      title: 'Message Sent!',
      text: 'Your message has been sent successfully.',
      icon: 'success',
      confirmButtonText: 'OK'
    });

    // Clear form or handle form submission logic here
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      mobile: '',
      message: ''
    });
  };

  return (
    <>
      <section style={{ backgroundImage: `url(${bgImage})` }} className='bg-no-repeat bg-cover'>
        <Navbar />
        <div className="flex items-start pt-10 sm:pt-0 sm:items-center justify-center md:justify-evenly max-h-[calc(100vh-112px)] md:min-h-[calc(100vh-96px)] text-white pb-10">
          <div className='hidden lg:block'>
            <img src={contactImg} alt="" className='w-80 2xl:w-96'/>
          </div>
          <div>
            <h1 className="font-semibold text-xl sm:text-2xl 2xl:text-4xl uppercase mb-8 md:mb-10 text-center tracking-wider">
              contact <span className="text-orange-500">me</span>
            </h1>

            <form className="flex flex-col flex-wrap items-center" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name*"
                  className="input-field"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name*"
                  className="input-field"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  className="input-field"
                  value={formData.email}
                  onChange={handleChange}
                />
                <input
                  type="number"
                  name="mobile"
                  placeholder="Mobile No.*"
                  className="input-field"
                  value={formData.mobile}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                className="input-textarea"
                placeholder="Write your thoughts here...*"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <button type="submit" className="cv-btn message">Send Message</button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      <ToastContainer />
    </>
  )
}

export default Contact;
