import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Route
import { LoginPage } from './Components/LoginPage/LoginPage.jsx';
import { SignupPage } from './Components/SignupPage/SignupPage.jsx'; // Import the SignUp component
import { LandingPage } from './Components/LandingPage/LandingPage.jsx';
import { AboutPage } from './Components/AboutPage/AboutPage.jsx';
import { ContactPage } from './Components/ContactPage/ContactPage.jsx';



function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<LoginPage/>} /> {/* Route for login page */}
          <Route path="/signup" element={<SignupPage/>} /> {/* Route for sign-up page */}
          <Route path="/landingpage" element={<LandingPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
