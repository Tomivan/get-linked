import React from "react";
import Prize from "../../assets/images/prizes.svg"
import "./prizes.component.css";

const Prizes = () => {
    return(
        <div className="prizes">
            <img src={Prize} alt="a target and a golden trophy" />
        </div>
    )
}

export default Prizes;