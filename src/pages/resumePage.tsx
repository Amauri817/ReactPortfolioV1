import React from "react";
import Header from "../components/header";
import ResumeBod from "../components/_resumeContent";
import FooterContent from "../components/footer";

const Resume: React.FC = () => {
    return (
        <div>
            <Header />
            <ResumeBod />
            <FooterContent />
        </div>
    )
  };
  
  export default Resume;