import React, { useState, useEffect } from "react";

const sideBar: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    // This function will check the scroll position
    const handleScroll = () => {
      if (window.scrollY > 100) {  // Show taskbar when scrolled down 100px
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    // Hook to listen to the scroll event
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
      };
    }, []);
    
  return (
    <div className={`sidebar_container ${isVisible ? 'visible' : ''}`}>

      <a href='#hello' >
        <div className="sidebar_items">
            Home
        </div>
      </a>

      <a href='#about' >
        <div className="sidebar_items">
            About
        </div>
      </a>

      <a href='#skills'>
        <div className="sidebar_items">
            Skills
        </div>
      </a>

      <a href='#projects' >
        <div className="sidebar_items">
            Projects
        </div>
      </a>

      <a href='#certifications' >
        <div className="sidebar_items">
            Certificications
        </div>
      </a>

      <a href='#contact' >
        <div className="sidebar_items">
            Contact
        </div>
      </a>
    </div>
  );
}

export default sideBar;