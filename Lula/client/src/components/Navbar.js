import React from 'react'
import { NavLink } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          
          <NavLink to="/"><AiFillHome className='icon-grey'/></NavLink>
        </li>
        <li>
          <NavLink to='/profile/alla'>Profile</NavLink>
        </li>
        <li>
          <NavLink to='/register'>Register</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin</NavLink>
        </li>
        <li>
          <NavLink to="/support">Contact us</NavLink>
        </li>

        <li>
          <NavLink to="/exercise">Exercise</NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar