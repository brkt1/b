import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import ContactPage from './pages/ContactPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const isContactPage = window.location.pathname === '/contact';
  return (
    <>
      <ScrollToTop />
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Maintenance />} />
        </Routes>
      </main>
      {!isContactPage && <Footer />}
    </>
  );
}

export default App;
