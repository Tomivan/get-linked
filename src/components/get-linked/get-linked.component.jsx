import React from "react";
import Hackathon from "../../assets/images/Hackathon.svg";
import "./get-linked.component.css";

const GetLinked = () => {
    return(
        <div className="get-linked">
            <div className="left">
                <h1>getlinked Tech <br />Hackathon 1.0</h1>
                <p>Participate in getlinked tech Hackathon 2023 stand a chance to win a Big prize</p>
                <button>Register</button>
                <div className="time">
                    <p className="hour"><strong>00 </strong>H</p>
                    <p className="hour"><strong>00</strong>M</p>
                    <p className="hour"><strong>00</strong>S</p>
                </div>
            </div>
            <div className="right">
                <p>Igniting a Revolution in HR Innovation</p>
                <img src={Hackathon} alt="a boy with a virtual reality glasses" />
            </div>
        </div>
    )
}

export default GetLinked;