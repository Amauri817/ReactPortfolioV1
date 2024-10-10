import React from "react";
import videoFile from '../../assets/InventoryDemo.mp4'
import videoFile2 from '../../assets/ShopTrim2.mp4'
import videoFile3 from '../../assets/ShopTrim.mp4'
import videoFile4 from '../../assets/InventoryTrim.mp4'
import Image1 from '../../assets/Shopim.png'
import Image2 from '../../assets/shopps.png'
import Image3 from '../../assets/Shopupd.png'

const InvBod: React.FC = () => {
    return (
        <body>
            <div className="container" style={{borderBottom:'2px solid white', paddingBottom:'10px'}}>
                <section className="description">
                    <h3>Shop and Inventory Demo</h3>
                    <p>This project was created to gain an understanding of inventory and shop systems within video games, and how they inateract with each other.
                    </p>
                    <video width="600" controls autoPlay loop muted>
                        <source src={videoFile} type="video/mp4"/>
                    </video>
                </section>

                <br /><strong>Role: </strong> Technical Designer
                <br /><strong>Project Duration: </strong> 4 Weeks
                <br /><strong>Engine: </strong> Unity
                <br /><strong>Team Size: </strong> Solo
                <br /><strong>Platform: </strong> PC
            </div>

            <div className="container" style={{paddingTop:'10px'}}>
                <h5>Contributions</h5>
                <ul>
                    <li>Created a working inventory system using scriptable objects</li>
                    <li>Created a shop system that allows the player to both buy and sell</li>
                    <li>Increased my knowledge of scriptable objects and applied it to both the shop system and inventory</li>
                </ul>

                <u>Creating the Shop Slots</u><br /><br />
                <div className="row">
                    <div className="col-md">
                    Creating the slots for the shop involved creating a item database that stores and contains said items. The code checks if there are any avaiable
                    slots and if true it adds a set item into the shop.<img src={Image1}alt="Blueprint" />
                    </div>
                    <div className="col-md">
                        <video controls autoPlay loop muted>
                            <source src={videoFile2} type="video/mp4"/>
                        </video>
                    </div>
                </div>

                <u>The Shop System</u><br /><br />
                <div className="row">
                    <div className="col-md">
                    The shop system was used to load the inventory of the player and shop and allowed them to interact with each other. It accounted for both the amount of money the shop had to give you back for selling items
                    and the amount of money you had to buy items. It controls what items go back into the shop and how many are left of said items.<img src={Image2}alt="Sonic Run Blueprint" />
                    </div>
                    <div className="col-md">
                        <video controls autoPlay loop muted>
                            <source src={videoFile3} type="video/mp4"/>
                        </video>
                    </div>
                </div>

                <u>The Inventory</u><br />
                <div className="row">
                    <div className="col-md">
                    Creating the slots for the shop involved creating a item database that stores and contains said items. The code checks if there are any avaiable
                    slots and if true it adds a set item into the shop.<img src={Image3} alt="" />
                    </div>
                    <div className="col-md">

                    </div>
                </div>
                <video controls autoPlay loop muted>
                    <source src={videoFile4} type="video/mp4"/>
                </video>

                <p>
                    The purpose of this project was to understand the backends and complexity of different inventory systems, and shop systems.
                    Through learning in depth about scriptable objects and how they are implemented into both a inventory system and selling and buying system, this demostration was created.
                    I learned a lot about creating systems that save themselves and how correct interactions are to be with players, game objects, and other UI. In future progress on this project I want to learn
                    how to implement it with unities new Input System.
                </p>

                <p><u><em>Inspirations:</em></u><br />
                Minecraft<br />
                <a href="https://www.youtube.com/c/unity" target="_blank">@Unity</a>
                <br /><a href="https://www.youtube.com/@DanPos" target="_blank">@Dan Pos</a></p>

                <p><u><em>Map Credit to:</em></u><br />Unity Starter Assets</p>
                <p><u><em>Other Asset Credit:</em></u><br />Unity Assets - Free Pixel Gear
                <br />Unity Assets - Free Potion Icons</p>
            </div>
        </body> 
    )
};

export default InvBod;