import React from "react";
import Navigation from "../Navigation";
// import './Navigation';

function Header() {

    return (
        <header className="h-50 container-fluid">
            <h1 className="my-5 display-1">
                    Audry Ford <br/><small className="text-muted ts-3"> Web Developer </small>
            </h1>
            <Navigation></Navigation>
        </header>

    )
}

export default Header;