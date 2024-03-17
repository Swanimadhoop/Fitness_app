import React from 'react'
import { FaPhone,  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './ContactPage.css';

export const ContactPage = () => {
  return (
    <div className='contact-container'>
        <h1>CONTACT US</h1>
        <p>For any queries, doubts, or concerns, please feel free to reach out to us</p>
        <div className='contact-details'>
            <div className='phone'>
                <FaPhone className='icon'></FaPhone>
                <div>
                <p>Phone</p>
                <p>0987654321</p>
                </div>
                
            </div>
            <div className='email'>
                <MdEmail className='icon'></MdEmail>
                <div>
                <p>Email</p>
                <p>fitstudio@gmail.com</p>
                </div>           
            </div>
        </div>
    </div>
  );
};
