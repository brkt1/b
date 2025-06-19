import React from 'react';
import { Link } from 'react-router-dom';

const Maintenance = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#F0FAFF] to-[#E8F9FC]">
      <div className="text-center p-10 max-w-2xl bg-white rounded-2xl shadow-xl transform transition-all hover:scale-[1.01]">
        <div className="mb-8 animate-pulse">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24 mx-auto text-primary"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        
        <h1 className="text-5xl font-extrabold mb-6 bg-primary  bg-clip-text text-transparent">
          Under Maintenance
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          We're currently performing scheduled maintenance. Our team is working hard to improve your experience. 
          Please check back soon!
        </p>
        
        <div className="space-y-4">
         <Link to="/" className="inline-block px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-secondary transition">
            Go to Home
          </Link>
          <p className="text-lg text-gray-700">
            <i className="fas fa-tools mr-2 text-primary"></i>      
            We are enhancing our services to serve you better.  
            </p>
          <p className="text-sm text-gray-500 mt-4">
            Estimated completion: <span className="font-semibold">soon</span>
          </p>
        </div>
        
        <div className="mt-10 pt-6 border-t border-gray-100">
          <p className="text-gray-500">
            Need immediate assistance? <a  href="tel:+251 925 546 800" className="text-primary hover:underline">Contact us</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;