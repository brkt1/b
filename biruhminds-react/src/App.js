import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Services from './pages/Services';
import Projects from './pages/Projects';
import BDS from './pages/BDS';
import Research from './pages/Research';
import Training from './pages/Training';
import Home from './pages/Home';
import LiyuMikleta from './pages/LiyuMilketa';
import Maintenance from './pages/Maintenance';
import Contact from './pages/Contact';

function App() {
  return (
    <>
      <Navigation />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/Service" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bds" element={<BDS />} />
          <Route path="/research" element={<Research />} />
          <Route path="/training" element={<Training />} />
          <Route path="/liyumilketa" element={<LiyuMikleta />} />
          <Route path="*" element={<Maintenance />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
