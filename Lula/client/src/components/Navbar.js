import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='navbar'>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
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
          <NavLink to="/record">Record</NavLink>
        </li>
          <li>
          <NavLink to="/audio">Audio</NavLink>
        </li>
        <li>
          <NavLink to="/account">Account</NavLink>
        </li>
        <li>
          <NavLink to="/admin">Admin Zone</NavLink>
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