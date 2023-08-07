import React from 'react'
import { Link } from 'react-router-dom';


const Login = () => {

  const handleSubmit =(event)=>{
    event.preventDefault()
    const username = event.target.inputLogin.value;
    const password = event.target.inputPassword.value;
    console.log(username, ' ', password)

  }
  return (
    <div className='registerBox'>
      <p className='title'>Login</p>
      <form className='form' onSubmit={(event)=>handleSubmit(event)}>
        <input className="input" type='text' name="inputUsername" placeholder='username'/>
        <input className="input" type='password' name="inputPassword" placeholder='password'/>
        {/* <label className='hint'>Save Password</label>
        <input className="checkbox" type='checkbox' name="inputPassword" placeholder='password'/>
        <label className='hint'>Forgot Password</label> */}
        <button className='submitButton' type="submit">Login</button>
      </form>
      <p className='hint'>Don't have an account? <span className="boldLink"><Link to="register">Sing Up</Link></span></p>

    </div>
  )
}

export default Login