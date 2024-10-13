import React from "react";
import Header from "../components/header";
import ProjectBod from "../components/_projectsContent";
import FooterContent from "../components/footer";

const Portfolio: React.FC = () => {
    return (
      <div>
        <Header />
        <ProjectBod />
        <FooterContent />
      </div>
    )
  };
  
  export default Portfolio;