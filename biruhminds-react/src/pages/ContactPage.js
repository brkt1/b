import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe, FaTelegram, FaInstagram, FaFacebook, FaLinkedin } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f0f9ff] to-[#e0f2fe] py-8 px-2">
      <div className="w-full max-w-md mx-auto">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-10 border border-white/30 text-center">
          {/* Social Media Icons - displayed first and larger */}
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://t.me/Biruhmindsplc" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-[#e2e8f0] text-[#0088cc] text-4xl font-black shadow-md hover:scale-110 hover:shadow-lg transition-all duration-200">
              <FaTelegram />
            </a>
            <a href="https://instagram.com/Biruhmindsplc" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-[#e2e8f0] text-[#e1306c] text-4xl font-black shadow-md hover:scale-110 hover:shadow-lg transition-all duration-200">
              <FaInstagram />
            </a>
            <a href="https://facebook.com/Biruhmindsplc" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-[#e2e8f0] text-[#3b5998] text-4xl font-black shadow-md hover:scale-110 hover:shadow-lg transition-all duration-200">
              <FaFacebook />
            </a>
            <a href="https://linkedin.com/company/biruhmindsplc" target="_blank" rel="noopener noreferrer" className="w-16 h-16 flex items-center justify-center rounded-full bg-white border-2 border-[#e2e8f0] text-[#0a66c2] text-4xl font-black shadow-md hover:scale-110 hover:shadow-lg transition-all duration-200">
              <FaLinkedin />
            </a>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-2">Biruhminds Consult PLC</h1>
          <p className="text-base text-slate-500 mb-6 leading-relaxed">
            Transformative consulting solutions bridging innovation, policy, and capacity building
          </p>

          <div className="bg-gradient-to-r from-violet-500 to-violet-600 text-white py-3 rounded-xl font-semibold text-lg shadow mb-6">
            @Biruhmindsplc
          </div>

          <div className="flex flex-col gap-4 mb-4">
            <a href="tel:+251925546800" className="flex items-center bg-white rounded-xl px-5 py-4 border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-blue-500 transition-all group">
              <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-green-400 to-green-600 text-white text-xl font-bold mr-4">
                <FaPhone />
              </span>
              <span className="flex flex-col items-start">
                <span className="font-semibold text-base text-slate-800">Phone</span>
                <span className="text-sm text-slate-500 font-medium">+251 925 546 800</span>
              </span>
            </a>
            <a href="mailto:solgoodwill@gmail.com" className="flex items-center bg-white rounded-xl px-5 py-4 border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-red-500 transition-all group">
              <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-red-400 to-red-600 text-white text-xl font-bold mr-4">
                <FaEnvelope />
              </span>
              <span className="flex flex-col items-start">
                <span className="font-semibold text-base text-slate-800">Email</span>
                <span className="text-sm text-slate-500 font-medium">solgoodwill@gmail.com</span>
              </span>
            </a>
            <a href="https://maps.google.com/?q=Kazanchis SA Building Office # 11-01, Addis Ababa, Ethiopia" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white rounded-xl px-5 py-4 border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-orange-500 transition-all group">
              <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-orange-600 text-white text-xl font-bold mr-4">
                <FaMapMarkerAlt />
              </span>
              <span className="flex flex-col items-start">
                <span className="font-semibold text-base text-slate-800">Location</span>
                <span className="text-sm text-slate-500 font-medium">Kazanchis SA Building, Office # 11-01, Addis Ababa</span>
              </span>
            </a>
            <a href="https://biruhminds.com" target="_blank" rel="noopener noreferrer" className="flex items-center bg-white rounded-xl px-5 py-4 border border-[#e2e8f0] shadow-sm hover:shadow-md hover:border-blue-700 transition-all group">
              <span className="w-11 h-11 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-800 text-white text-xl font-bold mr-4">
                <FaGlobe />
              </span>
              <span className="flex flex-col items-start">
                <span className="font-semibold text-base text-slate-800">Website</span>
                <span className="text-sm text-slate-500 font-medium">biruhminds.com</span>
              </span>
            </a>
          </div>

          <div className="text-slate-400 text-xs mt-8 pt-4 border-t border-[#e2e8f0]">
            <p>© {new Date().getFullYear()} Biruhminds Consult PLC. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
