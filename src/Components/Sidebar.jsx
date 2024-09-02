import React from "react";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 min-h-screen sm:hidden text-white w-[80%] relative  translate-x-0 transition-all duration-1000">
      <ul className="flex flex-col items-center gap-10 tracking-widest font-semibold uppercase pt-20 text-sm">
        <li className="list-items">
          <Link to="/">Home</Link>
        </li>
        <li className="list-items">
          <Link to="/about">About</Link>
        </li>
        <li className="list-items">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="list-items">
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li className="list-items">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>

      <button className="absolute top-5 right-5 text-2xl border-2 text-red-500 border-red-500 hover:text-white hover:bg-red-500 rounded-md p-1 transitions">
        <IoCloseSharp className="" />
      </button>

      <div className="flex justify-center">
        <div className="text-color4 text-xl flex gap-3 md:gap-5 mt-2 absolute bottom-5">
          <a
            href="https://www.linkedin.com/in/hammad-khan1090/"
            className="social-icons"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Hammad-Khan-025" className="social-icons">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/" className="social-icons">
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/"
            className="social-icons"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
