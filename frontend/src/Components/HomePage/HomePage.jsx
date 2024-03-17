import React from 'react';
import './HomePage.css';
import Logo from '../assets/logo.png';
import Home from '../assets/home.png'
import { FaUser} from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

export const HomePage = () => {
  return (
    <div className='home-page'>
        <form action="">
            <div className='Header'>
                <img src={Logo} alt="" className='logo'/>
                <ul className='header-menu'>
                    <li>Home</li>
                    <li><FaUser className='icon'/></li>
                    <li>About</li>
                </ul>
                <button type="submit" className='button'>Sign Out</button>
            </div>
            <div className='home'>
                <img src={Home} alt="" className='image'/>
                <div className='text-overlay-workouts'>
                    <h1>WORKOUTS</h1>
                    <p>Get personalized workouts 
                        <p>for each body part</p>
                        to reach your goals.</p>
                   <button type="submit" className='button'>Go <FaArrowRight /></button>
                </div>

                <div className='text-overlay-diet'>
                <h1>DIET PLANS</h1>
                    <p>Get personalized plans
                    <p>calculated using  your </p>
                    <p>details, ensuring</p> 
                    <p>optimal macronutrient</p>  
                    balance.</p>
                   <button type="submit" className='button'>Go <FaArrowRight /></button>
                </div>

                <div className='text-overlay-todo'>
                    <h1>MARK YOUR SUCCESS</h1>
                    <p>Plan and track your 
                    <p>fitness tasks daily</p>
                    <p>with our interactive</p>
                    to-do list.</p>
                   <button type="submit" className='button'>Go <FaArrowRight /></button>
                </div>

                <div className='text-overlay-summary'>
                    <h1>WEEKLY SUMMARY</h1>
                    <p>Review and reflect
                    <p>on your weekly </p>
                    <p>achievements and</p>
                    <p>progress to stay</p>
                    <p>motivated</p>
                    <p>on your fitness</p> 
                    journey.</p>
                   <button type="submit" className='button'>Go <FaArrowRight /></button>
                </div>
            </div>
        </form>
    </div>
  );
};
