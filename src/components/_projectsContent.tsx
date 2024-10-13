import React from "react";
import Image1 from '../assets/BusCard.png'
import Image2 from '../assets/website.png'
import Image3 from '../assets/banana.png'
import Image4 from '../assets/apple.png'
import Image5 from '../assets/orange.png'
import Image6 from '../assets/kiwi.png'

import Project from "./project";

const ProjectBod: React.FC = () => {

  return (
        <div className="container">
            <h3>Projects</h3>
            {/*Add a row to keep them organized with 2 images in each column */}
            <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                <div className="col-md">
                    <h5>Business Card Generator <br /><a href="https://github.com/Amauri817/Kiwi" target="_blank"><Project /></a></h5>
                    <a href="https://amauri817.github.io/Bis-Card-Gen/" target="_blank"><img src={Image1} alt="Business Card Generator Website" /></a>
                </div>
                <div className="col-md">
                    <h5>Personal Website <br /><a href="https://github.com/Amauri817/Website" target="_blank"><Project /></a></h5>                  
                    <a href="http://www.amauribrown.com" target="_blank"><img src={Image2} alt="Personal Website" /></a>
                </div>
            </div>
            <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                <div className="col-md">
                    <h5>Banana Website <br /><a href="https://github.com/Amauri817/Banana" target="_blank"><Project /></a></h5>
                    <a href="https://candid-zabaione-ba14ed.netlify.app/" target="_blank"><img src={Image3} alt="Banana Website" /></a>
                </div>
                <div className="col-md">
                    <h5>Apple Website <br /><a href="https://github.com/Amauri817/Apple" target="_blank"><Project /></a></h5>
                    <a href="https://polite-alpaca-d2436c.netlify.app/" target="_blank"><img src={Image4} alt="Apple Website" /></a>
                </div>
            </div>
            <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                <div className="col-md">
                    <h5>Orange Website <br /><a href="https://github.com/Amauri817/Orange" target="_blank"><Project /></a></h5>
                    <a href="https://subtle-mandazi-7bee0e.netlify.app/" target="_blank"><img src={Image5} alt="Orange Website" /></a>
                </div>
                <div className="col-md">
                    <h5>Kiwi Website <br /><a href="https://github.com/Amauri817/Kiwi" target="_blank"><Project /></a></h5>
                    <a href="https://teal-semolina-1ab587.netlify.app/" target="_blank"><img src={Image6} alt="Kiwi Website" /></a>
                </div>
            </div>
        </div>
  )
}

export default ProjectBod;
