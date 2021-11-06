import React from "react";
import githubLogo from "../../assets/images/logos/github-icon.png";
import linkedInLogo from "../../assets/images/logos/linkedin-logo.png";

function Footer() {

    return (
        <footer className="p-5 m-5">

            <div className="container">
            <div>
                <ul className="no-bullets text-center">
                    <li>
                        Overland Park, KS 66204
                    </li>
                    <li>
                        Phone: 816.560.8044
                    </li>
                    <li>
                        Email: audryford792@gmail.com
                    </li>
                    <li>
                        LinkedIn: linkedin.com/in/audry-ford
                    </li>
                    <li>
                        GitHub: github.com/audryf
                    </li>
                </ul>
            </div>
                <div className="row">
                    
                    <div className="col text-center">
                        Copyright &copy; {new Date().getFullYear()}
                    </div>
                   
                </div>
                <div className="row mt-5">
                    <a className="col-6 text-end" rel="noreferrer" target="_blank" href="https://github.com/audryf">
                        <img src={githubLogo} alt="github icon" />
                    </a>
                    <a className="col-6 text-start" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/audry-ford">
                        <img src={linkedInLogo} alt="linkedIn icon" />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;