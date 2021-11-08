import React from "react";
import { Link } from "react-router-dom";

function Navigation() {

  return (
    <nav className="navbar navbar-expand">
      <div className="container-fluid">
        <div className="navbar-collapse flex-row-reverse" id="navbarNav">
          <ul className="navbar-nav fs-3">
            <li className="nav-item m-2 nav-button nav-active">
              <Link to="/audrys-portfolio" className="nav-link main-text-color" aria-current="page">About Me</Link>
            </li>
            <li className="nav-item m-2 nav-button">
              <Link to="/portfolio" className="nav-link main-text-color">Portfolio</Link>
            </li>
            <li className="nav-item m-2 nav-button">
              <Link to="/contact" className="nav-link main-text-color">Contact</Link>
            </li>
            <li className="m-2 nav-button">
              <Link to="/resume" className="nav-link main-text-color">Resume</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;