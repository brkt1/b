import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t border-gray-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div>
            <img src="/image/Biruhminds_logo.png" alt="Biruhminds Logo" className="h-40 mb-4" />
            <p className="text-gray-600 mb-6 text-sm">
              Biruhminds Consult PLC is a consulting firm focused on research, training, and business development services to support entrepreneurship and job creation in Ethiopia.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-primary text-xl"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl"><i className="fab fa-linkedin-in"></i></a>
              <a href="#" className="text-gray-400 hover:text-primary text-xl"><i className="fab fa-instagram"></i></a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li><Link to="/services" className="text-gray-600 hover:text-primary">All Services</Link></li>
              <li><Link to="/bds" className="text-gray-600 hover:text-primary">Business Development</Link></li>
              <li><Link to="/training" className="text-gray-600 hover:text-primary">Training Programs</Link></li>
              <li><Link to="/research" className="text-gray-600 hover:text-primary">Research & Insights</Link></li>
              <li><Link to="/liyumilketa" className="text-gray-600 hover:text-primary">Liyu Mikleta</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-600 hover:text-primary">Home</Link></li>
              <li><Link to="/projects" className="text-gray-600 hover:text-primary">Projects</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-primary">About Us</Link></li>
              <li><Link to="/team" className="text-gray-600 hover:text-primary">Our Team</Link></li>
              <li><Link to="/blog" className="text-gray-600 hover:text-primary">Blog</Link></li>
              <li><Link to="/careers" className="text-gray-600 hover:text-primary">Careers</Link></li>
            </ul>
          </div>

          {/* Contact & Map */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3 text-gray-600 text-sm">
              <li className="flex items-start"><i className="fas fa-map-marker-alt mt-1 mr-3 text-primary"></i><span>Addis Ababa, Ethiopia</span></li>
              <li className="flex items-start"><i className="fas fa-phone mt-1 mr-3 text-primary"></i><span>+251 123 456 789</span></li>
              <li className="flex items-start"><i className="fas fa-envelope mt-1 mr-3 text-primary"></i><span>info@biruhminds.com</span></li>
              <li className="flex items-start"><i className="fas fa-clock mt-1 mr-3 text-primary"></i><span>Mon-Fri: 9:00 AM - 5:30 PM</span></li>
            </ul>
            <div className="mt-6 rounded-lg overflow-hidden shadow border border-gray-200">
              <iframe
                title="Biruhminds Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.534182208156!2d38.76818749999999!3d9.0149375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85d3f96aa77f%3A0x45b918c688a852b3!2sBiruhminds%20Consult!5e0!3m2!1sen!2set!4v1750320051487!5m2!1sen!2set"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Biruhminds Consult PLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
