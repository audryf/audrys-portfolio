import React from "react";
import projects from '../../assets/db/projects';
import Project from "../Project";

function ProjectList() {

    return (
        <div>
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