import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation items data for cleaner code
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/service", label: "About" },
    { path: "/research", label: "Research" },
    { path: "/bds", label: "BDS" },
    { path: "/liyumilketa", label: "Liyu Mikleta" },
    { path: "/projects", label: "Portfolio" }
  ];

  const contactInfo = [
    { 
      icon: "map-marker-alt", 
      content: "Addis Ababa, Ethiopia", 
      href: "https://example.com" 
    },
    { 
      icon: "phone", 
      content: "+251 123 456 789", 
      href: "tel:+123456789" 
    },
    { 
      icon: "envelope", 
      content: "Biruhminds@gmail.com", 
      href: "mailto:biruhminds@gmail.com" 
    }
  ];

  const socialIcons = [
    { icon: "facebook-f", href: "#" },
    { icon: "twitter", href: "#" },
    { icon: "instagram", href: "#" },
    { icon: "linkedin-in", href: "#" }
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="hidden sm:block bg-gradient-to-r from-primary to-secondary py-3">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Contact Info */}
            <div className="contact-info flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-6 text-xs sm:text-sm">
              {contactInfo.map((item, index) => (
                <a 
                  key={index}
                  href={item.href} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center text-white/90 hover:text-white transition group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center mr-2 group-hover:bg-white/20 transition">
                    <i className={`fas fa-${item.icon} text-xs sm:text-sm`}></i>
                  </div>
                  <span>{item.content}</span>
                </a>
              ))}
            </div>
            
            {/* Social Icons */}
            <div className="social-icons flex space-x-2 sm:space-x-3">
              {socialIcons.map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition transform hover:-translate-y-0.5"
                >
                  <i className={`fab fa-${social.icon} text-xs sm:text-sm`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center group">
                <img 
                  width="120px" 
                  src="/image/Biruhminds_logo.png" 
                  alt="Biruhminds Consult" 
                  className="h-auto w-24 sm:w-32 md:w-[120px]" 
                />
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1 relative">
              {navItems.map((item, index) => (
                <div key={index} className="group relative">
                  <Link 
                    to={item.path} 
                    className="px-3 py-2 text-gray-700 hover:text-primary font-medium transition duration-200 relative inline-block text-sm lg:text-base"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              
              <div className="ml-2 pl-2 border-l border-gray-200">
                <Link to="/liyumilketa">
                  <img 
                    src="/image/Liyumilketa.png" 
                    alt="Liyu Mikleta" 
                    className="h-6 inline-block" 
                  />
                </Link>
              </div>
            </nav>
            
            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden text-gray-700 focus:outline-none" 
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <div className="w-8 h-8 flex flex-col justify-center items-center gap-1.5">
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
          
          {/* Mobile Menu */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-400 ease-in-out ${mobileMenuOpen ? 'max-h-screen py-2' : 'max-h-0'}`}
            aria-hidden={!mobileMenuOpen}
          >
            <div className="flex flex-col space-y-1 py-2">
              {navItems.map((item, index) => (
                <Link 
                  key={index}
                  to={item.path} 
                  className="block px-4 py-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              
              <div className="mt-2 pt-3 border-t border-gray-100 px-4">
                <Link to="/liyumilketa" onClick={() => setMobileMenuOpen(false)}>
                  <img 
                    src="/image/Liyumilketa.png" 
                    alt="Liyu Mikleta" 
                    className="h-6 inline-block" 
                  />
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