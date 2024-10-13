import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/aboutPage';
import Contact from './pages/contactPage';
import Portfolio from './pages/portfolioPage';
import Resume from './pages/resumePage';

const App: React.FC = () => {

  return (
    <>
      <Router>
        <Routes>
          
          {/* The route for the home page */}
          <Route path="/" element={<About />} />

          {/* Other routes */}
          <Route path="/contactPage" element={<Contact />} />
          <Route path="/portfolioPage" element={<Portfolio />} />
          <Route path="/resumePage" element={<Resume />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
