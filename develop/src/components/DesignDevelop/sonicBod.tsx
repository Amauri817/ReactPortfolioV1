import React from "react";
import videoFile from '../../assets/Start2 - Unreal Editor 2022-12-06 13-50-11.mp4'
import videoFile2 from '../../assets/Walking.mp4'
import videoFile3 from '../../assets/Sprinting.mp4'
import videoFile4 from '../../assets/GrindingR.mp4'
import Image1 from '../../assets/Movement.png'
import Image2 from '../../assets/Sprints.png'
import Image3 from '../../assets/spline 4.png'
import Image4 from '../../assets/spline3.png'
import Image5 from '../../assets/spline2.png'

const SonicBod: React.FC = () => {
    return (
        <body>
            <div className="container" style={{borderBottom:'2px solid white', paddingBottom:'10px'}}>
                <section className="description">
                    <h3>Sonic Demo</h3>
                    <p>This is a demo game that I created using Unreal Engine 5 to showcase some sonic mechanics I made.
                    </p>
                    <video width="600" controls autoPlay loop muted>
                        <source src={videoFile} type="video/mp4"/>
                    </video>
                </section>

                <br /><strong>Role: </strong> Technical Designer
                <br /><strong>Project Duration: </strong> 4 Weeks
                <br /><strong>Engine: </strong> Unreal Engine 5
                <br /><strong>Team Size: </strong> Solo
                <br /><strong>Platform: </strong> PC
            </div>

            <div className="container" style={{paddingTop:'10px'}}>
                <h5>Contributions</h5>
                <ul>
                    <li>Created a working blueprint system for the character.</li>
                    <li>Created a working spline system for the rail grinding.</li>
                </ul>

                <u>The Movement System</u>
                <div className="row">
                    <div className="col-md">
                        Takes the input from a set walk speed and multiplies it by a set rate to increase as the character moves.
                        <img src={Image1}alt="Blueprint" />
                    </div>
                    <div className="col-md">
                        <video controls autoPlay loop muted>
                            <source src={videoFile2} type="video/mp4"/>
                        </video>
                    </div>
                </div>

                <u>Speed Boost</u>
                <div className="row">
                    <div className="col-md">
                    Similar to the movement system, the sprint uses the same values, and with camera work, and effects enhance the sprint.
                    <img src={Image2}alt="Sonic Run Blueprint" />
                    </div>
                    <div className="col-md">
                        <video controls autoPlay loop muted>
                            <source src={videoFile3} type="video/mp4"/>
                        </video>
                    </div>
                </div>

                <p>
                    <u>Rail Grind Spline</u><br />
                    There were multiple steps when it came to creating the spline system for the rail grind.
                    To begin I had to create a working spline system that allow an object to follow the spline.<br />
                    <img src={Image3} alt="Spline" />
                </p>
                <p>
                    Next I had to create a system that allowed the character to interact with said spline.<br />
                    <img src={Image4} alt="Spline" />
                </p>
                <p>
                    And finally I had to check the conditions to make sure that the player is on the rail and that they were able to exit the rail.<br />
                    <img src={Image5} alt="Spline" />
                </p>
                <video controls autoPlay loop muted>
                    <source src={videoFile4} type="video/mp4"/>
                </video>

                <p>
                    The purpose of this project was the learn the basics of using UE5 and applying them to create something entertaining. I learned a great deal about
                    how blueprints work within UE5 for both animations and creating mechanic systems. I found using UE5 considerable different from using Unity, however
                    the experience taught me new skills, and increased my capabilities. I look forward to creating new projects in UE5, designing and implementing new systems in the future.
                </p>

                <p><u><em>Inspiration:</em></u><br />Sonic Frontiers</p>
                <p><u><em>Map Credit to:</em></u><br />Unreal Engine - Stylized Asian Village</p>
                <p><u><em>Other Asset Credit:</em><br /></u>Skin, Particle Effects, and Animations: <a href="https://www.youtube.com/@Robowil" target="_blank">@Robowil</a></p>

                <div className="popup-img">
                    <span>&times;</span>
                    <img src="../assets/Sprints.PNG" alt="Test" />
                </div>
            </div>


        </body> 
    )
};

export default SonicBod;