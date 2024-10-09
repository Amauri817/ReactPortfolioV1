import React from "react";
import Image1 from '../../assets/react.svg'

const footer: React.FC = () => {
    return (
            <footer>This website was created by Amauri Brown on Visual Studio Code. Built with React <img src={Image1} style={{maxHeight: '18px', maxWidth:'18px', border: 'none'}} alt="react symbol" />, HTML, TypeScript and CSS completely by hand.</footer>           
    )
};

export default  footer;