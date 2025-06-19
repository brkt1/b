import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileResearchOpen, setMobileResearchOpen] = useState(false);
  const [mobileBdsOpen, setMobileBdsOpen] = useState(false);
  const [mobileLiyuOpen, setMobileLiyuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-primary to-secondary py-3">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Contact Info */}
            <div className="contact-info flex flex-wrap items-center gap-6 text-sm">
              <a href="https://example.com" target="_blank" rel="noreferrer" className="flex items-center text-white/90 hover:text-white transition group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-white/20 transition">
                  <i className="fas fa-map-marker-alt text-sm"></i>
                </div>
                <span>Addis Ababa, Ethiopia</span>
              </a>
              <a href="tel:+123456789" className="flex items-center text-white/90 hover:text-white transition group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-white/20 transition">
                  <i className="fas fa-phone text-sm"></i>
                </div>
                <span>+251 123 456 789</span>
              </a>
              <a href="mailto:biruhminds@gmail.com" className="flex items-center text-white/90 hover:text-white transition group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-white/20 transition">
                  <i className="fas fa-envelope text-sm"></i>
                </div>
                <span>Biruhminds@gmail.com</span>
              </a>
            </div>
            
            {/* Social Icons */}
            <div className="social-icons flex space-x-3">
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition transform hover:-translate-y-0.5">
                <i className="fab fa-facebook-f text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition transform hover:-translate-y-0.5">
                <i className="fab fa-twitter text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition transform hover:-translate-y-0.5">
                <i className="fab fa-instagram text-sm"></i>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition transform hover:-translate-y-0.5">
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <img width="120px" src="/image/Biruhminds_logo.png" alt="Biruhminds Consult" className="h-auto" />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1 relative">
              <div className="group relative">
                <Link to="/" className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition duration-200 relative inline-block">
                  Home
                </Link>
              </div>
            <div className="group relative">
                <Link to="/Service" className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition duration-200 relative inline-block">
                  About
                </Link>
              </div>
             
              <div className="group relative">
                <Link to="/research" className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition duration-200 relative inline-block">
                  Research
                </Link>
              </div>
              <div className="group relative">
                <Link to="/bds" className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition duration-200 relative inline-block">
                  BDS
                </Link>
              </div>
              <div className="group relative">
                <Link to="/liyumilketa" className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition duration-200 relative inline-block">
                  Liyu Mikleta
                </Link>
              </div>
              <div className="group relative">
                <Link to="/projects" className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition duration-200 relative inline-block">
                  Portfolio
                </Link>
              </div>
           
             <div className="mt-2 pt-3 border-t border-gray-100">
                <Link to="/liyumilketa" >
                 <img src="/image/Liyumilketa.png" alt="Liyu Mikleta" className="h-6 inline-block mr-2" />
                </Link>
              </div>
            </nav>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none" 
              onClick={toggleMobileMenu}
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div className={`mobile-menu md:hidden overflow-hidden transition-all duration-400 ${mobileMenuOpen ? 'max-h-screen py-4' : 'max-h-0'} bg-white`}>
            <div className="flex flex-col space-y-1 py-4">
              <Link to="/" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Home</Link>
              <Link to="/research" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Research</Link>
              <Link to="/training" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Training</Link>
              <Link to="/bds" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">BDS</Link>
              <Link to="/liyumilketa" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Liyu Mikleta</Link>
              <Link to="/projects" className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Portfolio</Link>
              <div className="mt-2 pt-3 border-t border-gray-100">
                <Link to="/liyumilketa" >
                 <img src="/image/Liyumilketa.png" alt="Liyu Mikleta" className="h-6 inline-block mr-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
