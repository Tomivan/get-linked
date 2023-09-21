import React from "react";
import Rule from "../../assets/images/rules.svg";
import "./rules.component.css";

const Rules = () => {
    return(
        <div className="rules">
            <div className="left">
                <h3>Rules and Guidelines</h3>
                <p>Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a 
                    design maverick, or a concept wizard, you'll have the chance to transform 
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!</p>
            </div>
            <img src={Rule} alt="a lady sitting on a chair holding a book and a pen" />
        </div>
    )
}

export default Rules;