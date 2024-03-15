import React from 'react'
import './SignupPage.css'
import { FaUser, FaLock } from "react-icons/fa";

export const SignupPage = () => {
  return (
    <div className="background">
      <div className='wrap'>
        <form action="">
          <h1>Signup</h1>
          <div className='input_box'>
            <input type="text" placeholder='Email' required />
            <FaUser className='icon'/>
          </div>
          <div className='input_box'>
            <input type="password" placeholder='Password' required />
            <FaLock className='icon'/>
           </div>
          <div className='input_box'>
            <input type="password" placeholder='Confirm Password' required />
            <FaLock className='icon'/>
          </div>


          <div className='remember-forgot'>
            <label><input type="checkbox" />Remember me</label>
            <a  href='#'>Forgot Password</a>
          </div>

          <button type="submit">Login</button>

          <div className='login-link'>
            <p>Already have an account? <a href="#">Sign in</a></p>
          </div>
        </form>
        </div>
      </div>
      
  );
};

