import React from "react";
import gitLogo from '../../assets/images/logos/github-logo.png'

export default function Project(props) {
    return (
        <div className="my-5">
            <div className="row card-bg g-0">
                <div className="col-md-4">
                    <a href={props.deployed} target="_blank" rel="noreferrer">
                        <img
                            src={props.image}
                            className="img-fluid rounded-start work-image"
                            alt={props.title} />
                    </a>
                </div>
                <div className="col-md-8">
                    <div className="card-body row">
                        <h5 className="card-title header-font header-font-lg fw-bold pb-4 col-md-6">
                            {props.title}
                        </h5>
                        <div className="fst-italic header-font-lg header-font col-md-6 text-end">
                            {props.role}
                        </div>

                        <p className="card-text">{props.description}</p>
                        <div className="row justify-content-evenly">
                            <div className="col-md-6">
                                <ul>
                                    {props.skillsUsed.map(skill => (
                                        <li>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <a href={props.github} target="_blank" rel="noreferrer" className="col-md-3 offset-md-3 align-self-end">
                                <img className="" src={gitLogo} alt="github logo" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}