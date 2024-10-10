import React from "react";
import videoFile from '../../assets/PortalDemo.mp4'
import videoFile2 from '../../assets/PortalShoot - Trim.mp4'
import videoFile3 from '../../assets/PortalReflection - Trim.mp4'
import videoFile4 from '../../assets/PortalTravel - Trim.mp4'
import Image1 from '../../assets/Photo1.png'
import Image2 from '../../assets/Photo2.png'
import Image3 from '../../assets/Photo4.png'

const PortalBod: React.FC = () => {
    return (
        <body>
            <div className="container" style={{borderBottom:'2px solid white', paddingBottom:'10px'}}>
                <section className="description">
                    <h3>Portal Demo</h3>
                    <p>This Demo was created to understand the how the game original game Portal, created their portal mechanics.
                    </p>
                    <video width="600" controls autoPlay loop muted>
                        <source src={videoFile} type="video/mp4"/>
                    </video>
                </section>

                <br /><strong>Role: </strong> Technical Designer
                <br /><strong>Project Duration: </strong> 2 Weeks
                <br /><strong>Engine: </strong> Unity
                <br /><strong>Team Size: </strong> Solo
                <br /><strong>Platform: </strong> PC
            </div>

            <div className="container" style={{paddingTop:'10px'}}>
                <h5>Contributions</h5>
                <ul>
                    <li>Used Unities shaders to create a portal system</li>
                    <li>Increased my knowledge of geometry and physics with regards to gameplay, and applied it to the creation of the portals</li>
                    <li>Created scripts to reflect learning and understandment.</li>
                </ul>

                <u>Shooting a Portal</u><br /><br />
                <div className="row">
                    <div className="col-md">
                        <img src={Image1}alt="Code" />
                        <img src={Image2} alt="Code" />
                    </div>
                    <div className="col-md">
                        <video controls autoPlay loop muted>
                            <source src={videoFile2} type="video/mp4"/>
                        </video>
                    </div>
                </div>

                <br /><u>Portal Reflection</u> <br /><br />
                <div className="row">
                    <div className="col-md">
                    <img src={Image2}alt="Code" />
                    </div>
                    <div className="col-md">
                        <video controls autoPlay loop muted>
                            <source src={videoFile3} type="video/mp4"/>
                        </video>
                    </div>
                </div>

                    <u>Moving Through a Portal</u><br /><br />
                    <div className="row">
                        <div className="col-md">
                        <p></p>
                        <img src={Image3} alt="code" />
                        </div>
                        <div className="col-md">
                            <video controls autoPlay loop muted>
                                <source src={videoFile4} type="video/mp4"/>
                            </video>
                        </div>
                    </div>


                <p>
                    The purpose of this project was to focus on the portal mechanics and all work was done by myself, although I did use other sources to grasp an understanding of the implimentation of portals, as listed below.
                    This project was a fun, but challenging one that allowed me to learn a lot about how much math and calculations are involved when creating mechanics.
                    I learned a lot about recursiveness, and how to apply that to portals to be allowed to see through them, which can be used in a variety of different mechanics.
                    Through this project I was able to create something that I was proud of and gained a little more experience with different technical mechanics.
                </p>

                <p><u><em>Inspirations:</em></u><br />Portal 2<br />
                <a href="https://www.youtube.com/c/unity" target="_blank">@Unity</a>
                <br /><a href="https://www.youtube.com/c/Brackeys/featured" target="_blank">@Brackeys</a>
                <br /><a href="https://www.youtube.com/c/DanielIlett" target="_blank">@DanielIlett</a></p>  
                <p><u><em>Map Credit to:</em></u><br />SimplyPoly Town Pack - Unity Asset Store</p>  
            </div>
        </body> 
    )
};

export default PortalBod;