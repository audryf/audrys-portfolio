import React from "react";
import Navigation from "../Navigation";
// import './Navigation';

function Header() {

    return (
        <header className="h-50 container-fluid bg-light">
            <h2>
                <a href="/" className="m-5 h-50 d-inline-block bg-light pb-5">
                    Audry Ford Web Developer
                </a>
                <Navigation></Navigation>
            </h2>
        </header>

    )
}

export default Header;