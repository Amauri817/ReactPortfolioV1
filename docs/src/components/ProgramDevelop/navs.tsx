import { Link } from 'react-router-dom';
import React from 'react';
import './nav.css'

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const Navs: React.FC = () => {

  return (
      <div className='header'>
        <nav className='nas'>
        <Link to="/program"><h2 className='Logo'> Amauri Brown <br/> <span>Programmer</span> </h2></Link>
          <ul>
            <a href="#about"><li>About</li></a>
            <a href="#skills"><li>Skills</li></a>
            <a href="#projects"><li>Projects</li></a>
            <a href="#certifications"><li>Certifications</li></a>
            <a href="https://drive.google.com/file/d/1uohXkgqjCiM6POS0Nd8vquTuMrgUBHUC/view?usp=sharing" target='blank'><li>Resume</li></a>
            <a href="#contact"><li>Contact</li></a>
          </ul>
          <Link to="/"><span>Back (☞ﾟヮﾟ)☞</span></Link>
        </nav>
      </div>
  )
}

export default Navs;
