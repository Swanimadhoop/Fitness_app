import React from 'react';
import { FaDumbbell } from "react-icons/fa";
import './LandingPage.css'; 

export const LandingPage = () => {
  return (
    <div className='landing-page'> 
      <form action="">
        <div className='logo'> 
          <FaDumbbell className='icon' style={{ color: 'white', fontSize: '40px' }}/>
          <div className='fit-studio'>
          <p style={{ color: 'violet', fontSize: '20px', margin: '0', fontWeight:'bold' }}>FIT</p>
          <p style={{ color: 'violet', fontSize: '20px', margin: '0', fontWeight:'bold' }}>STUDIO</p>
          </div>
        </div>

        <div className='buttons'>
          <button type="submit">About</button>
          <button type="submit">Contact</button>
        </div>

        <div className='register-link'>
          <button type="submit">Login</button>
          <p>Don't have an account? <a href="#">Sign up</a></p> 
        </div>
      </form>
    </div>
  );
};
