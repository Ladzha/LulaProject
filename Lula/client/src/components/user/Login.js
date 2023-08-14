import React, {useRef} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { UserService } from '../../services/user.service.js';


const Login = () => {

  const location = useLocation()

   const formRef = useRef();

  const handleSubmit = async (event)=>{
    event.preventDefault()
    const username = event.target.username.value;
    const password = event.target.password.value;
    console.log(username, ' ', password)

    try {
      const userData = await UserService.login(username, password);
      console.log('User login:', userData);
      formRef.current.reset();  //clean inputs
      } catch (error) {
          console.log(error)   
      }

  }
  return (
    <div className='registerBox box'>
      <p className='title'>Login</p>
      <form className='form' onSubmit={(event)=>handleSubmit(event)} ref={formRef}>
        <input className="input" type='text' name="username" placeholder='username' required/>
        <input className="input" type='password' name="password" placeholder='password' required/>
        {/* <label className='hint'>Save Password</label>
        <input className="checkbox" type='checkbox' name="inputPassword" placeholder='password'/>
        <label className='hint'>Forgot Password</label> */}
        <button className='submitButton' type="submit">Login</button>
      </form>
      <p className='hint'>Don't have an account? <span className="boldLink"><Link to="/register">Sing Up</Link></span></p>

    </div>
  )
}

export default Login