import React from "react";
import Lock from "../../assets/images/lock.svg";
import Private from "../../assets/images/privacy.svg";
import "./privacy.component.css";

const Privacy = () => {
    return(
        <div className="privacy">
            <div className="left">
                <h3>Privacy Policy and Teams</h3>
                <p>Last updated on September 12, 2023</p>
                <p>Below are our privacy & policy, which outline a lot of goodies. 
                    it’s our aim to always take of our participant</p>
                <p>At getlinked tech Hackathon 1.0, we value your privacy
                    and are committed to protecting your personal information.
                    This Privacy Policy outlines how we collect, use, disclose, 
                    and safeguard your data when you participate in our tech 
                    hackathon event. By participating in our event, you consent 
                    to the practices described in this policy.</p>
                <p><span>Licensing Policy</span></p>
                <p>Here are terms of our Standard License:</p>
                <li>The Standard License grants you a non-exclusive right to
                    navigate and register for our event</li>
                <li>You are licensed to use the item available at any free source
                    sites, for your project developement</li>
                <button className="">Register Now</button>
            </div>
            <div className="right">
                <img src={Lock} alt="a huge lock" />
                <img src={Private} alt="A man standing on a giant lock holding a key" />
            </div>
        </div>
    )
}

export default Privacy;