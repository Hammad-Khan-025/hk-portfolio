import React, { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {

  const getLinkClass = ({ isActive }) =>
    `list-items ${isActive ? 'text-rootColor ring-2 ring-rootColor' : ''}`;

  const handleLinkClick = () => {
    onClose(); // Trigger the sidebar closing animation
  };

  return (
    <aside
      className={`bg-gradient-to-tr from-slate-950 via-slate-900 to-slate-950 min-h-screen sm:hidden text-white w-[80%] fixed top-0 left-0 transform transition-transform duration-300 z-50 rounded-r-xl  ${isOpen ? 'translate-x-0 ' : '-translate-x-full'}`}
    >
      {/* Sidebar content */}
      <ul className="flex flex-col items-center gap-10 tracking-widest font-semibold uppercase pt-28 text-sm">
        {/* Sidebar links */}
        <li>
          <NavLink className={getLinkClass} to="/" onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/about" onClick={handleLinkClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/skills" onClick={handleLinkClick}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/projects" onClick={handleLinkClick}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/contact" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>

      <button
        className="absolute top-8 right-5 text-xl border-2 border-red-500 bg-red-500 text-white hover:bg-red-700 hover:border-red-700 rounded-md p-1 transition"
        onClick={onClose}
      >
        <IoCloseSharp />
      </button>

      <div className="flex justify-center">
        <div className="text-xl flex gap-3 md:gap-5 mt-2 absolute bottom-10">
          <a href="https://www.linkedin.com/in/hammad-khan1090/" className="social-icons">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/Hammad-Khan-025" className="social-icons">
            <FaGithub />
          </a>
          <a href="https://www.facebook.com/" className="social-icons">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/accounts/login/" className="social-icons">
            <FaInstagram />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
