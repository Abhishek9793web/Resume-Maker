
import React from "react";
import logo from '../assets/images/logo.png';

import "./App.css";
function Navbar() {
  return (
    <header id="header" class="fixed-top  header-transparent ">
      <nav className="navbar">
        <div className="logo-text-container">
          <img className="logo" src={logo} alt="logo" />
          <h1 className="text"><span>RESUME MAKER</span></h1>
        </div>

        <ul>

          <li><a class="nav-link scrollto active" href="/">Home</a></li>
          <li><a class="nav-link scrollto" href="/templates">Templates</a></li>
          <li><a class="nav-link scrollto" href="/about">About</a></li>
          <li><a class="nav-link scrollto" href="/login">Login</a></li>

          <li><a class="getstarted scrollto" href="/login">Get Started</a></li>
        </ul>
       
      </nav>
    </header>

  );
}

export default Navbar;

/*  <nav className="navbar">
    <ul>
      <div className="logo-text-container">
        <img className="logo" src={logo} alt="logo" />
        <b className="text">RESUME MAKER</b>
      </div>
      <oi><a className="a" href="/">Home</a></oi>
      <oi><a className="a" href="/templates">Templates</a></oi>
      <oi><a className="a" href="/about">About</a></oi>
      <oi><a className="a" href="/login">Login/Sign Up</a></oi>
    </ul>
  </nav>

*/