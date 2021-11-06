import React from "react";
import projects from '../../assets/db/projects';
import Project from "../Project";

function ProjectList() {

    return (
        <div>
            <h1 className="row justify-content-center m-5 p-5 header-font display-3">Portfolio</h1>
            {
                projects.map((project) => (
                    <Project 
                        id={project.id}
                        listKey={project.listKey}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        github={project.github}
                        deployed={project.deployed}
                        skillsUsed={project.skillsUsed}
                        role={project.role}
                        key={project.id}
                    />
                ))
            }
        </div>
    )
}

export default ProjectList;