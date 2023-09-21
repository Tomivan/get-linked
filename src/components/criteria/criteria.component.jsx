import React from "react";
import Attribute  from "../../assets/images/criteria.svg";
import "./criteria.component.css";

const Criteria = () => {
    return(
        <div className="criteria">
            <img src={Attribute} alt="a woman holding a fraction in a circle and a man holding a book" />
            <div className="right">
                <h3>Juging Criteria Key Attributes</h3>
                <p><span>Innovation and Creativity:</span> Evaluate the uniqueness and creativity of the
                        solution. Consider whether it addresses a real-world problem in a novel 
                        way or introduces innovative features.
                </p>
                <p><span>Functionality: </span>Assess how well the solution works. Does it perform its 
                        intended functions effectively and without major issues? Judges would
                        consider the completeness and robustness of the solution.
                </p>
                <p><span>Impact and Relevance:</span> Determine the potential impact of the solution 
                    in the real world. Does it address a significant problem, and is it relevant 
                    to the target audience? Judges would assess the potential social, 
                    economic, or environmental benefits.
                </p>
                <p><span>Technical Complexity: </span>Evaluate the technical sophistication of the solution. 
                        Judges would consider the complexity of the code, the use of advanced 
                        technologies or algorithms, and the scalability of the solution.
                </p>
                <p><span>Adherence to Hackathon Rules: </span> Judges will Ensure that the team adhered 
                        to the rules and guidelines of the hackathon, including deadlines, use of 
                        specific technologies or APIs, and any other competition-specific requirements.
                </p>
                <button>Read More</button>
            </div>
        </div>
    )
}

export default Criteria;