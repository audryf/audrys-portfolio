import React from "react";
import { Link } from "react-router-dom";
// import './About';
// import './Portfolio';
// import './Contact';
// import './Resume';

function Navigation() {

  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <div className="navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link main-text-color" aria-current="page">About Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link main-text-color">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link main-text-color">Contact</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link main-text-color" href="#resume">Resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;