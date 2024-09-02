import React from "react";
import { NavLink } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

const Sidebar = ({ isOpen, onClose }) => {
  const getLinkClass = ({ isActive }) =>
    `list-items ${isActive ? 'text-orange-500 ring-2 ring-orange-500' : ''}`;

  const handleLinkClick = () => {
    onClose(); // Trigger the sidebar closing animation
  };

  return (
    <aside
      className={`bg-gradient-to-tr from-slate-900 via-slate-800 to-slate-950 min-h-screen sm:hidden text-white w-[80%] fixed top-0 left-0 transform transition-transform duration-300 z-50 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      <ul className="flex flex-col items-center gap-10 tracking-widest font-semibold uppercase pt-20 text-sm">
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
          <NavLink className={getLinkClass} to="/portfolio" onClick={handleLinkClick}>
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink className={getLinkClass} to="/contact" onClick={handleLinkClick}>
            Contact
          </NavLink>
        </li>
      </ul>

      <button
        className="absolute top-5 right-5 text-xl border-2 text-red-500 border-red-500 hover:text-white hover:bg-red-500 rounded-md p-1 transition"
        onClick={onClose}
      >
        <IoCloseSharp />
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
