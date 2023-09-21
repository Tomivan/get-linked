import React from "react";
import Introduction from "../../assets/images/introduction.svg";
import "./introduction.component.css";

const IntroductionComponent = () => {
    return(
        <div className="introduction">
            <img src={Introduction} alt="a yellow light bulb" />
            <div className="right">
                <h3>Introduction to getlinked tech Hackathon 1.0</h3>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</p>
            </div>
        </div>
    )
}

export default IntroductionComponent