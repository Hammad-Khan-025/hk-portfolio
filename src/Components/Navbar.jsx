import React, { useState } from 'react';
import logo from '../images/logo1.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const getLinkClass = ({ isActive }) =>
    `list-items ${isActive ? 'text-rootColor ring-2 ring-rootColor' : ''}`;

  return (
    <>
      <nav className='h-24 text-white'>
        <div className='flex justify-between sm:justify-around items-center h-24 px-5 sm:px-0'>
          <NavLink to='/'>
            <img src={logo} className='w-20 2xl:w-24 hover:shadow-lg hover:shadow-rootColor transitions' alt="Logo"/>
          </NavLink>
          <button
            className='sm:hidden text-lg focus:ring-2 focus:ring-white rounded-lg p-2'
            onClick={toggleSidebar}
          >
            <FaBarsStaggered />
          </button>
          <ul className='flex gap-10 hidden sm:flex tracking-widest font-semibold uppercase 2xl:text-xl'>
            <li>
              <NavLink className={getLinkClass} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={getLinkClass} to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className={getLinkClass} to="/skills">
                Skills
              </NavLink>
            </li>
            <li>
              <NavLink className={getLinkClass} to="/projects">
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink className={getLinkClass} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </>
  );
}

export default Navbar;
