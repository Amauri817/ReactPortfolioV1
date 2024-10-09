import React from "react";
import { Link } from "react-router-dom";
import Image1 from '../../assets/Sonic.png'
import Image2 from '../../assets/portpic2.png'
import Image3 from '../../assets/Inv.png'

const Content: React.FC = () => {

  return (
    <body>
        <div className='container'>
            <section className='home'>
                <h3>Home</h3>
                <p>
                Hi, I'm Amauri Brown! I am a Technical Designer with strong programming and scripting skills. I am looking for challenging projects that will
                increase my knowledge and work. Thank you for visiting my portfolio!
                </p>
            </section>
            <h4 style={{textAlign: 'center', borderBottom: '1px solid white', paddingBottom: '5px', paddingTop: '5px'}}>Personal Projects</h4>
            <Link to="/sonic"><h5>Sonic Inspired Game</h5></Link>
            <div className="row" style={{borderBottom:'1px solid white'}}>
                <div className="col-md">
                <p>A fun game I made to better understand the sonic mechanics within its video games. The player runs around grinding on rails.
                </p>
                <strong>Role: </strong> Technical Designer
                <br />
                <strong>Project Duration: </strong> 4 Weeks
                <br />
                <strong>Engine: </strong> Unreal Engine 5
                <br />
                <strong>Team Size: </strong> Solo
                </div>
                <div className="col-md" style={{paddingBottom:'10px'}}>
                    <a href="/sonic"><img src={Image1} alt="Sonic" /></a>
                </div>
            </div>

            <Link to="/portal-gun"><h5>Portal Gun Game</h5></Link>
            <div className="row" style={{borderBottom:'1px solid white'}}>
                <div className="col-md">
                <p>A game I made to help understand the teleporting system in the game "Portal". It is to portray how a successful portal system works.
                The player travels around a town exploring with the ability to create portals.
                </p>
                <strong>Role: </strong> Technical Designer
                <br />
                <strong>Project Duration: </strong> 2 Weeks
                <br />
                <strong>Engine: </strong> Unity
                <br />
                <strong>Team Size: </strong> Solo
                </div>
                <div className="col-md" style={{paddingBottom:'10px'}}>
                    <a href="/portal-gun"><img src={Image2} alt="Map" /></a>       
                </div>
            </div>

            <Link to="/inventory"><h5>Shop and Inventory Demo</h5></Link>
            <div className="row">
                <div className="col-md">
                <p>A demostration of a properly working inventory and shop system. Created to gain an understanding of the backends of a successful inventory, selling, and buying system.
                </p>
                <strong>Role: </strong> Technical Designer
                <br />
                <strong>Project Duration: </strong> 4 Weeks
                <br />
                <strong>Engine: </strong> Unity
                <br />
                <strong>Team Size: </strong> Solo
                </div>
                <div className="col-md" style={{paddingBottom:'10px'}}>
                    <a href="/inventory"><img src={Image3} alt="Menu" /></a>
                </div>
            </div>
        </div>
    </body>
  )
}

export default Content;
