import React from "react";
import Getlinked from "../../assets/images/getlinked.svg";
import "./nav.component.css";

const Nav = () => {
    return(
        <div className="nav">
            <img src={Getlinked} alt="the get-linked logo" />
            <ul>
                <li>Timeline</li>
                <li>Overview</li>
                <li>FAQs</li>
                <li>Contact</li>
            </ul>
            <button>Register</button>
        </div>
    )
}

export default Nav;