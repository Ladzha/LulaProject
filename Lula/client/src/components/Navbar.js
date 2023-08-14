import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          
          <NavLink to="/"><AiFillHome className='icon-grey icon-home'/></NavLink>
        </li>
        <li>
          <NavLink to='/profile/alla' className='link'>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/register' className='link'>Register</NavLink>
        </li>
        <li>
          <NavLink to="/login" className='link'>Login</NavLink>
        </li>
        <li>
          <NavLink to="/admin" className='link'>Admin</NavLink>
        </li>
        <li>
          <NavLink to="/contact" className='link'>Contact us</NavLink>
        </li>

        <li>
          <NavLink to="/exercise" className='link'>Exercise</NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar