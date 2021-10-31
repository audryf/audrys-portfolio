import React from "react";
import Navigation from "../Navigation";
// import './Navigation';

function Header() {

    return (
        <h2>
            <a href="/" className="container-fluid text-sm-center p-5 bg-light">
                Audry Ford Web Developer
            </a>
            <Navigation></Navigation>
        </h2>
    )
}

export default Header;