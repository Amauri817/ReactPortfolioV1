import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Design from './pages/design';
import Inventory from './pages/inventory';
import Portal from './pages/portal-gun';
import Project from './pages/project';
import Sonic from './pages/sonic';
import Program from './pages/program';

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        {/* The route for the home page */}
        <Route path="/" element={<Home />} />
        {/* Other routes */}
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/design" element={<Design />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/portal-gun" element={<Portal />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sonic" element={<Sonic />} />
        <Route path="/program" element={<Program />} />
      </Routes>
    </Router>
  );
};

export default App;