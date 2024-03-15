// import React, { useState } from 'react';
import { FaUser, FaLock } from "react-icons/fa";
import './LoginPage.css'; // Make sure to import CSS file properly

export const LoginPage = () => {
  
  return (
    <div className= 'background-container'>
      <div className='wrapper'>
        <form action="">
          <h1>Login</h1>
          <div className='input_box'>
            <input type="text" placeholder='Username' required/>
            <FaUser className='icon'/>
          </div>
          <div className='input_box'>
            <input type="password" placeholder='Password' required/>
            <FaLock className='icon'/>
          </div>
          <div className='remember-forgot'>
            <label><input type="checkbox" />Remember me</label>
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <button type="submit">Login</button>
          <div className='register-link'>
            <p>Dont have an account? <a href="#">Sign up</a></p>
          </div>
        </form>
      </div>
    </div>  
  );
};
