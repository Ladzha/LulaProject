import React, {useContext} from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillHome } from "react-icons/ai";
// import { AuthContext } from './AuthProvider';
import { UserService } from '../services/user.service.js';


const Navbar = () => {

  // const authContext=useContext(AuthContext);

  const navigate = useNavigate ();

  const logout = async () => {
    try {
      const response = await UserService.logout();
    if (response.status === 200) {
      navigate('/login');
    }
    } catch(error) {
    console.log(error);
    }
  }
    

  return (
    <div className='navbar'>
      <ul>
        <li>
          <NavLink to="/"><AiFillHome className='icon-grey icon-home'/></NavLink>
        </li>
        <li>
          <NavLink to="/contact" className='link'>Contact us</NavLink>
        </li>

        <li>
          <NavLink to="/exercise" className='link'>Exercise</NavLink>
        </li>

        <li>
            <NavLink to='/profile/:username' className="link">
              Profile
            {/* {authContext.user.username} */}
            </NavLink>
          </li>

        {false ? (
          <>

          <li>
           <NavLink to="/logout" className="link" onClick={logout}>Logout
           </NavLink>
            {/* <NavLink to={`/profile/${userid}`} className='link'>Profile</NavLink> */}
          </li>
          </>):(<>
            <li><NavLink to="/login" className='link'>Login</NavLink>
            </li>
          
            <li>
              <NavLink to='/register' className='link'>Register</NavLink>
            </li>
          </>)

        }

        <li>
          <NavLink to="/admin" className='link'>Admin</NavLink>
        </li>
        
      </ul>
    </div>
  )
}

export default Navbar