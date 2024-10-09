import React from "react";

const helloAdd: React.FC = () => {
    return (
        <body style={{paddingTop:'50px', marginTop:'100px'}} id="hello">
            <div className="container" >
                <h3>
                    Welcome to my Portfolio!
                </h3>

                <p>
                Hi, my name is Amauri Brown.  
                </p>
                
                <p>
                    I’m a developer who excels at creating smooth, efficient web apps. 
                    I am equally familiar with the front-end and back-end of programming, knowledgable with full stack, and have experience with both client and server side data. 
                    TypeScript and JavaScript are the compilers I am most experienced with, and almost anything from pure Node.js to API and SQL. 
                    Whether it’s a piece of a larger puzzle, or a project for a small business, I’m always cogitating to invent the world around me.
                </p>
            </div>
        </body>
    )
};

export default  helloAdd;