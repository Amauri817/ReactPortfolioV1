import React from "react";
import Image1 from '../../assets/portpic4.png'
import Image2 from '../../assets/portpic3.png'
import Image3 from '../../assets/Inv.png'

const proj: React.FC = () => {

  return (
    <body>
        <div className="container">
            <h3>Projects</h3>
            <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                <div className="col-md">
                <h5><a href="/sonic">Sonic Inspired Game</a></h5>
                <a href="/sonic"><img src={Image1} alt="sonic" /></a>
                </div>
                <div className="col-md">
                <h5><a href="/portal-gun">Portal Inspired Game</a></h5>
                <a href="/portal-gun"><img src={Image2} alt="portal-gun" /></a>
                </div>
            </div>
            <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                <div className="col-md">
                    <h5><a href="/inventory">Shop and Inventory Demo</a></h5>
                    <a href="/inventory"><img src={Image3} alt="Inventory" /></a>
                </div>
            </div>
        </div>
    </body>
  )
}

export default proj;
