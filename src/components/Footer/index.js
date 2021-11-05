import React from "react";
import githubLogo from "../../assets/images/logos/github-icon.png";
import linkedInLogo from "../../assets/images/logos/linkedin-logo.png";

function Footer() {

    return (
        <footer className="text-center pt-5 mt-5">
            <div>
                Copyright &copy; {new Date().getFullYear()}
            </div>
            <div className="row mt-5">
                <a className="col-6 text-end" target="_blank" href="https://github.com/audryf">
                    <img src={githubLogo} alt="github icon" />
                </a>
                <a className="col-6 text-start" target="_blank" href="https://www.linkedin.com/in/audry-ford">
                    <img src={linkedInLogo} alt="linkedIn icon" />
                </a>
            </div>
        </footer>
    )
}

export default Footer;