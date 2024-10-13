import React from "react";
import Image1 from "../assets/linkedin.png"
import Image2 from "../assets/twitter.png"
import Image3 from "../assets/github.png"

const FooterContent: React.FC = () => {
    return (
        <div>
            <footer>
            <h2 id="contacts"> 
                <a href="https://www.linkedin.com/in/amauri-brown-a7279a251/" target="_blank"><img style={{maxWidth: "200px", maxHeight: "200px"}} src={Image1} alt="linkedin" /></a>
                <a href="https://www.x.com" target="_blank"><img style={{maxWidth: "200px", maxHeight: "200px"}} src={Image2} alt="twitter" /></a>
                <a href="https://github.com/Amauri817" target="_blank"><img style={{maxWidth: "200px", maxHeight: "200px"}} src={Image3} alt="github" /></a>
            </h2>
            </footer>
        </div>
    )
};

export default  FooterContent;