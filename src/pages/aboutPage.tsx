import React from "react";
import Header from "../components/header";
import AboutBod from "../components/aboutContent";
import FooterContent from "../components/footer";

const About: React.FC = () => {
    return (
      <div>
        <Header />
        <AboutBod />
        <FooterContent />
      </div>
    )
  };
  
  export default About;