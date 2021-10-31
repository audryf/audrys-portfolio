import React from "react";
import avatar from '../../assets/images/avatar/avataaars.svg'

function About() {

    return (
        <section className="container">
            <span>
                <img src={avatar} alt="avatar" height="100rem"/>
            </span>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. </p>
            </div>
        </section>

    )
}

export default About;
