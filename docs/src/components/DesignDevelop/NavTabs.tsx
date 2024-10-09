import { Link } from 'react-router-dom';
import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const NavTabs: React.FC = () => {

  return (
      <div className='header'>
        <nav>
          <Link to="/"><span>☜(ﾟヮﾟ☜) Back</span></Link>
          <ul>
            <Link to="/project"><li>Projects</li></Link>
            <Link to="/about"><li>About</li></Link>
            <Link to="https://drive.google.com/file/d/1uohXkgqjCiM6POS0Nd8vquTuMrgUBHUC/view?usp=sharing" target='blank'><li>Resume</li></Link>
            <Link to="/contact"><li>Contact</li></Link>
          </ul>
          <Link to="/design"><h2 className='Logo'> Amauri Brown <br/> <span>Technical Designer</span> </h2></Link>
        </nav>
      </div>
  )
}

export default NavTabs;
