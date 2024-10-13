import React from "react";
import Header from "../components/header";
import ContactBod from "../components/contactContent";
import FooterContent from "../components/footer";

const Contact: React.FC = () => {
    return (
      <div>
        <Header />
        <ContactBod />
        <FooterContent />
      </div>
    )
  };
  
  export default Contact;