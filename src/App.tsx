import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { Contact } from './pages/Contact';
import { Footer } from './components/Footer';
import { Canvas } from './components/Canvas';
import { useEffect } from 'react';

function PageTitle() {
  const location = useLocation();
  
  useEffect(() => {
    const getTitle = () => {
      switch (location.pathname) {
        case '/':
          return 'Home';
        case '/about':
          return 'About';
        case '/projects':
          return 'Projects';
        case '/contact':
          return 'Contact';
        default:
          return 'Allen Chun';
      }
    };
    
    document.title = getTitle();
  }, [location]);
  
  return null;
}

function App() {
  return (
    <Router>
      <PageTitle />
      <div className="min-h-screen bg-black text-white flex flex-col">
        <Canvas />
        <Navbar />
        <main className="flex-1 p-4 md:p-8 pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;