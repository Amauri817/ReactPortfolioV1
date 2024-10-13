import React from "react";
import Image1 from '../assets/Amauri.jpg'

const AboutBod: React.FC = () => {
    
    return (
            <div className="container">
                <h3>About Me</h3>
                <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                    <div className="col-md">
                        <img src={Image1} alt="Me, Amauri Brown" />
                    </div>
                    <p> 
                        <strong>I’m a developer who excels at creating smooth, efficient web apps. 
                    I am equally familiar with the front-end and back-end of programming, knowledgable with full stack, and have experience with both client and server side data. 
                    TypeScript and JavaScript are the compilers I am most experienced with, and almost anything from pure Node.js to API and SQL. 
                    Whether it’s a piece of a larger puzzle, or a project for a small business, I’m always cogitating to invent the world around me.</strong>
                    </p>
                </div>
            </div>

    )
};

export default AboutBod;