import React from "react";
import Image1 from '../../assets/Amauri.jpg'

const AboutBod: React.FC = () => {
    return (
        <div className="container">
            <h3>About</h3>
            <div className="row" style={{textAlign:'center', paddingBottom:'10px'}}>
                <div className="col-md">
                    <img src={Image1} alt="Me, Amauri Brown" />
                </div>
                <p> 
                    <strong>Hello, my name is Amauri Brown and I am graduate of Michigan State University, with a degree in Games and Interactive Media. Along
                    with a certificate from "Fill in later"
                    I am from Detroit, Michigan and have a passion for designing the technical functions within video games and strive to create
                    innovative game mechanics. I work to add something new and unique in every project I create to help build my experience, and
                    my understanding of games.</strong>
                </p>
            </div>
        </div>
    )
};

export default AboutBod;