import React from "react";

function Resume() {

    return (
        <div className="container">
            <h1 className="row text-center m-5 p-5 header-font display-3">
                Resume and Technical Skills
            </h1>
            <br />
            <div className="row">
                <div className="col-6">
                    <ul className="col-6 col-md-12"> 
                        <li>
                            HTML5
                        </li>
                        <li>
                            CSS3
                        </li>
                        <li>
                            JavaScript ES6
                        </li>
                        <li>
                            React
                        </li>
                        <li>
                            Node 
                        </li>
                        <li>
                            Express
                        </li>
                        <li>
                            IndexedDB
                        </li>
                        <li>
                            TDD - Jest
                        </li>
                    </ul>
                </div>
                <div className="col-6 justify-content-center">
                    <ul className="col-6 col-md-12">
                        <li>
                            GraphQl
                        </li>
                        <li>
                            Apollo
                        </li>
                        <li>
                            MongoDB / Mongoose
                        </li>
                        <li>
                            MySQL / Sequelize
                        </li>
                        <li>
                            BootStrap
                        </li>
                        <li>
                            jQuery
                        </li>
                        <li>
                            Progressive Web App
                        </li>
                        <li>
                            Service Workers
                        </li>
                    </ul>
                </div>
            </div>
            <br />
            <div className="row">
                <a download href="https://drive.google.com/uc?export=download&id=1tPw78qDagKH8cFHdPVtMKS_8CTa2iLCo" title="Resume">
                    Click to download resume
                </a>
            </div>

        </div>
    )
}

export default Resume;