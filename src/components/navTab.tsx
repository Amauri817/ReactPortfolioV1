import { Link } from 'react-router-dom';
import React from 'react';

const NavTab: React.FC = () => {

    return (
        <div className='header'>
          <nav>
            <ul>
                <Link to="/"><li>About Me</li></Link>
                <Link to="/portfolioPage"><li>Portfolio</li></Link>
                <Link to="/contactPage"><li>Contact</li></Link>
                <Link to="/resumePage"><li>Resume</li></Link>
                {/* <Link to="https://drive.google.com/file/d/1uohXkgqjCiM6POS0Nd8vquTuMrgUBHUC/view?usp=sharing" target='blank'><li>Resume</li></Link> */}
            </ul>
          </nav>
        </div>
    )
  }

export default NavTab;