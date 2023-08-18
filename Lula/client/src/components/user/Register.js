import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from '../../services/user.service.js';


const Register = () => {

const navigate = useNavigate();

  const formRef = useRef();
  const [msg, setMsg] = useState('');

  const handleSubmit =async (event)=>{
    event.preventDefault()

    const username = event.target.inputUsername.value;
    const firstname = event.target.inputFirstName.value;
    const lastname = event.target.inputLastName.value;
    const email = event.target.inputEmail.value;
    const password = event.target.inputPassword.value;

    try {
      const userData = await UserService.register(username, firstname, lastname, email, password);
      console.log('User registered:', userData);
      formRef.current.reset();  //clean inputs 
      navigate('/')
      
    } catch (error) {
          console.log(error)   
      }
  }

  return (
    <div className='registerBox box'>
      <p className='title'>Create Account</p>
      <form className='form' onSubmit={(event)=>handleSubmit(event)} ref={formRef}>
        <input className="input" type='text'id="inputUsername" name="inputUsername" placeholder='Username' required/>
        <input className="input" type='text' id="inputFirstName" name="inputFirstName" placeholder='First Name' required/>
        <input className="input" type='text' id="inputLastName" name="inputLastName" placeholder='Last Name' required/>
        <input className="input" type='email' id="inputEmail" name="inputEmail" placeholder='Email' required/>
        <input className="input" type='password' id="inputPassword" name="inputPassword" placeholder='Password' required/>
        {/* <input className="input" type='password' id="inputPasswordConfirm" name="inputPasswordConfirm" placeholder='Confirm Password' required/> */}
        <button className='submitButton' type="submit">Register</button>   
      </form>
      <p className='hint'>Already have an account? <span className="boldLink"><Link to="/login">Login</Link></span></p>
    </div>
  )
}

export default Register