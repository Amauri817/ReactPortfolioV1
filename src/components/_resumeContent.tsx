import React from "react";
import {Link} from "react-router-dom"

const ResumeBod: React.FC = () => {
    
    return (
            <div className="container">
                <h3>Resume</h3>
                <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                    <div className="col-md">
                        <p>To download my resume click <Link to="https://drive.google.com/file/d/1uohXkgqjCiM6POS0Nd8vquTuMrgUBHUC/view?usp=sharing" target='blank'>here</Link>.</p>
                    </div>  
                </div>
                <div>
                    <h3>My Skills</h3>
                </div>
                <ul>
                    <li>
                    Technical Skills: Proficient in C++, Python, TypeScript, SQL, JavaScript, APIs,
                    React, Unity,
                    Unreal Engine 5, Blender, Maya; strong knowledge of object-oriented
                    programming (OOP)
                    </li>
                    <li>
                    Creative Skills: Experienced in creating animations and interactive media
                    projects.
                    </li>
                    <li>
                    Communication: Strong interpersonal skills, adept at conflict resolution and
                    providing
                    customer-focused solutions.
                    </li>
                    <li>
                    Leadership: Proven ability to lead teams and organize events through
                    fraternity involvement
                    and professional development.
                    </li>
                </ul>
            </div>

    )
};

export default ResumeBod;