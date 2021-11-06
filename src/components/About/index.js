import React from "react";
import headshot from '../../assets/images/personal/headshot.JPEG'

function About() {

    return (
        <section className="container">
            <div>
                <img id="headshot" className="me-5" src={headshot} alt="headshot of audry outside smiling wearing a black sweater and white beaded necklace" align="left"/>
            
                <p className="" align="center"><br/><br/>Energized by my decision to change career paths, I am a tech bootcamp grad looking to make a difference. I have found my calling. Learning the in's and out's of web development, front-end and back-end, has been exciting and rewarding. I thrive on constructive feedback and learn new things quickly. I love to collaborate in teams and want to take my skills to the next level.</p>
            </div>
        </section>

    )
}

export default About;
