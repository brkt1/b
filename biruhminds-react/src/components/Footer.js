import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6">
              <span className="text-primary">Biruh</span>minds
            </h2>
            <p className="text-gray-400 mb-6">
              Delivering innovative business solutions and fostering sustainable growth in Ethiopia and beyond.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/bds" className="text-gray-400 hover:text-primary">Business Development</Link></li>
              <li><Link to="/training" className="text-gray-400 hover:text-primary">Training Programs</Link></li>
              <li><Link to="/research" className="text-gray-400 hover:text-primary">Research & Insights</Link></li>
              <li><Link to="/liyumilketa" className="text-gray-400 hover:text-primary">Liyu Mikleta</Link></li>
              <li><Link to="/consulting" className="text-gray-400 hover:text-primary">Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-400 hover:text-primary">About Us</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-primary">Our Team</Link></li>
              <li><Link to="/portfolio" className="text-gray-400 hover:text-primary">Projects</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-primary">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-primary">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i>
                <span>Addis Ababa, Ethiopia</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-phone mt-1 mr-3 text-primary"></i>
                <span>+251 123 456 789</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-envelope mt-1 mr-3 text-primary"></i>
                <span>info@biruhminds.com</span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-clock mt-1 mr-3 text-primary"></i>
                <span>Mon-Fri: 9:00 AM - 5:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Biruhminds Consult PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
