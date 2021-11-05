import React from "react";
import gitLogo from '../../assets/images/logos/github-logo.png'

export default function Project(props) {
    // const image = props.images.length ? props.images[0] : "https://via.placeholder.com/320x180"


    return (

        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4">
                    <a href={props.deployed} target="_blank" rel="noreferrer">
                        <img
                            src={props.image}
                            className="img-fluid rounded-start"
                            alt={props.title} />
                    </a>
                </div>
                <div className="col-md-8 card-text-color">
                    <div className="card-body row">
                        <h5 className="card-title fw-bold col-md-6">
                            {props.title}
                            </h5>
                            <div className="fst-italic col-md-6">
                                 {props.role}
                            </div>
                        
                        <p className="card-text">{props.description}</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    {props.skillsUsed.map(skill => (
                                        <li>{skill}</li>
                                    ))}
                                </ul>
                            </div>
                            <a href={props.github} target="_blank" rel="noreferrer" className="col-md-6">
                                <img src={gitLogo} alt=" " />
                            </a>
                        </div>





                    </div>
                </div>
            </div>
        </div>

    )
}