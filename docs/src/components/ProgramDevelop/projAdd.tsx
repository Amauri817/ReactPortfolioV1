import React from "react";
import Image1 from '../../assets/website.png'
import Image2 from '../../assets/buscard.png'

const projAdd: React.FC = () => {
    return (
        <body style={{paddingTop:'50px', marginTop:'100px'}} id="projects">
            <div className="container">
                <h3>Personal Projects</h3>
                <p style={{textAlign:'center'}}>
                Below are some of the projects I have worked on over the past year. Using various languages,
                tools, and applications to create them.
                </p>

                <div className="row" style={{textAlign:'center', paddingBottom:'15px'}}>
                    <div className="col-md">
                        <span>Business Card generator</span>
                        <a href="https://amauri817.github.io/Bis-Card-Gen/" target="blank"><img src={Image2} alt="Business Card Website Picture" /></a>
                        <p style={{textAlign:'left', paddingLeft:'10px'}}>
                            - This was my first project learning to work with responsive interfaces, understanding EventListeners, and implementing local
                            storage. This project pushed me to grow my knowledge of JavaScript and improved my skill set.
                        </p>
                    </div>
                    <div className="col-md">
                        <span>My Website</span>
                        <a href="http://www.amauribrown.com" target="blank"><img src={Image1} alt="Website Picture" /></a>
                        <p style={{textAlign:'left', paddingLeft:'10px'}}>
                            - This is my portfolio website, built React typescript. I made this website with the purpose to displaying my ever improving technical skills.
                            I plan on continuously update this website as I tackle new projects and jobs.
                        </p>
                    </div>
                </div>
            </div>
        </body>
    )
};

export default  projAdd;