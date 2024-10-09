import React from 'react';
import Navs from '../components/ProgramDevelop/navs';
import HelloAdd from '../components/ProgramDevelop/helloAdd'
import AboutAdd from '../components/ProgramDevelop/aboutAdd';
import ProjAdd from '../components/ProgramDevelop/projAdd';
import CertAdd from '../components/ProgramDevelop/certAdd';
import ContactAdd from '../components/ProgramDevelop/contactAdd';
import SkillsAdd from '../components/ProgramDevelop/skillsAdd';
import SideBar from '../components/ProgramDevelop/sidebar';
import Footer from '../components/ProgramDevelop/footer'
import '../components/DesignDevelop/home.css'

const Programmer: React.FC = () => {
    return (
        <div>
            <Navs />
            <SideBar />
            <HelloAdd />
            <AboutAdd />
            <SkillsAdd />
            <ProjAdd />
            <CertAdd />
            <ContactAdd />
            <Footer />
        </div>
    )
};

export default Programmer;