import React from "react";
import avatar from '../../assets/images/avatar/avataaars.png'

function About() {

    return (
        <section className="container">
            <span>
                <img src={avatar} alt="avatar" height="100rem"/>
            </span>
            <div>
                <p>Energized by my decision to change career paths, I am a tech bootcamp grad looking to make a difference, the sky's the limit. I have found my calling. Learning the in's and out's of web development, front-end and back-end, has been exciting and rewarding. I thrive on constructive feedback and learn new things quickly. I love to collaborate in teams and want to take my skills to the next level.</p>
            </div>
        </section>

    )
}

export default About;
