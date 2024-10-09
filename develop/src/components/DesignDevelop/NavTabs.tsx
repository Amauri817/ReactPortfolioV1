import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
const NavTabs: React.FC = () => {

  return (
      <div className='header'>
        <nav>
          <a href="/"><span>☜(ﾟヮﾟ☜) Back</span></a>
          <ul>
            <a href="/design"><li>Home</li></a>
            <a href="/project"><li>Projects</li></a>
            <a href="/about"><li>About</li></a>
            <a href="https://drive.google.com/file/d/1uohXkgqjCiM6POS0Nd8vquTuMrgUBHUC/view?usp=sharing" target='blank'><li>Resume</li></a>
            <a href="/contact"><li>Contact</li></a>
          </ul>
          <a href="/design"><h2 className='Logo'> Amauri Brown <br/> <span>Technical Designer</span> </h2></a>
        </nav>
      </div>
  )
}

export default NavTabs;
