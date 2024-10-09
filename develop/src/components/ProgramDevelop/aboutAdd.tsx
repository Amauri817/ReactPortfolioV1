import React from "react";

const aboutAdd: React.FC = () => {
    return (
        <body style={{paddingTop:'50px', marginTop:'100px'}} id="about" >
            <div className="container">
                <h3>About Me</h3>
                <p>
                    <h4>A little about me</h4>
                    I began my coding journy in highschool when I first discovered the world of programming
                    when I started my first ever computer class. Since then, I have continually expanded my
                    skill set and taken on various projects that have challenged me to grow as a developer.
                </p>
                <p>
                    <h4>What am I up to?</h4>
                    After completing my degree in Media and Information with a focus of Games and Interactive Media
                    from Michigan State University, I realized that I haven't delved deep enoough into the world of 
                    developers. Leading me to currently, finishing a certificate in Full-Stack Development provided 
                    through MSU.
                </p>

            </div>
        </body>
    )
};

export default  aboutAdd;