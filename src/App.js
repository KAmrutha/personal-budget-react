import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

import Menu from './Menu/Menu';
import AboutPage from './AboutPage/AboutPage';
import Hero from './Hero/Hero';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import LoginPage from './LoginPage/LoginPage';
function App() {
  return (
    < Router>
   <Menu/>
      <Hero/>
      <div div className="mainContainer">
      <switch>
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/login' element={<LoginPage />} />
          {/* <Route path="/AboutPage">
          <AboutPage/>
        </Route>
        <Route path="/LoginPage">
          <LoginPage/>
        </Route>
        <Route path="/">
          <HomePage/>
        </Route> */}
        </Routes>

      </switch>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;