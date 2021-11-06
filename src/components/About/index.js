import React from "react";
import headshot from '../../assets/images/personal/headshot.JPEG'

function About() {

    return (
        <section className="container">
            <div>
                <h1 className="row justify-content-center m-5 p-5 header-font display-3">About Me</h1>
                <img id="headshot" className="m-4" src={headshot} alt="headshot of audry outside smiling wearing a black sweater and white beaded necklace" align="left" />

                <div align="center">
                    <p>
                        Hi! I'm Audry, a web developer based in the Kansas City Metro Area. I have a passion for creating and learning new things. I cannot wait to graduate the coding bootcamp at the University of Kansas. I have just started in this field and I'm excited to see what I can accomplish with this new experience.
                    </p>
                    <p>
                        Energized by my decision to change career paths, I am a tech bootcamp (almost) grad looking to make a difference. Learning the in's and out's of web development, front-end and back-end, has been exciting and rewarding. I thrive on constructive feedback and learn new things quickly. I love to collaborate in teams and want to take my skills to the next level.
                        
                    </p>
                </div>
            </div>
        </section>

    )
}

export default About;
