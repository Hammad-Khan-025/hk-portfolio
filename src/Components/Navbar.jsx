import React from 'react'
import logo from '../images/logo1.png';
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='h-24  text-white'>
    <div className='flex justify-between sm:justify-around items-center h-24  px-5 sm:px-0'>
    <Link to='/'>
      <img src={logo} className='w-20 2xl:w-24'/>
    </Link>
    <button className='sm:hidden text-lg focus:ring-2 focus:ring-white rounded-lg p-2'>
    <FaBarsStaggered />
    </button>
    <ul className='flex gap-10 hidden sm:flex tracking-widest font-semibold uppercase 2xl:text-xl'>
      <li>
        <Link className="list-items" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="list-items" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="list-items" to="/skills">
          Skills
        </Link>
      </li>
      <li>
        <Link className="list-items" to="/portfolio">
          Portfolio
        </Link>
      </li>
      <li>
        <Link className="list-items" to="/contact">
          Contact
        </Link>
      </li>
    </ul>
    </div>
  </nav>
  )
}

export default Navbar
