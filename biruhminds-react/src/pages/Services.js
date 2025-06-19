import React, { useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Services = () => {
  useEffect(() => {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleClick = (e) => {
      e.preventDefault();
      const target = document.querySelector(e.currentTarget.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    };
    anchors.forEach(anchor => anchor.addEventListener('click', handleClick));
    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleClick));
    };
  }, []);

  useEffect(() => {
    // Dashboard expand button fullscreen handler
    const expandButton = document.querySelector('.fa-expand')?.closest('button');
    const iframe = document.getElementById('research-dashboard');
    const handleExpandClick = () => {
      if (iframe) {
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        } else if (iframe.webkitRequestFullscreen) {
          iframe.webkitRequestFullscreen();
        }
      }
    };
    if (expandButton) {
      expandButton.addEventListener('click', handleExpandClick);
    }
    return () => {
      if (expandButton) {
        expandButton.removeEventListener('click', handleExpandClick);
      }
    };
  }, []);

  return (
    <>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-secondary/10 filter blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Hero Section */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              <span className="gradient-text">Transformative</span> Services
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Where innovation meets impact - our multidisciplinary solutions drive sustainable growth
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <i className="fas fa-rocket mr-2"></i> Get Started
              </a>
              <a href="#services" className="border-2 border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition-all flex items-center">
                <span>Explore Services</span>
                <i className="fas fa-chevron-down ml-2 text-sm animate-bounce"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">OUR EXPERTISE</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Solutions That <span className="gradient-text">Drive Change</span></h2>
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-gray-600">
                We combine cutting-edge methodologies with deep sector expertise to deliver measurable results
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Building Capacity, Creating Impact</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our integrated approach combines research, training, and business development to create comprehensive solutions that address complex challenges. We don't just deliver reports - we deliver transformation.
                </p>
                <div className="flex space-x-4">
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md border-l-4 border-primary">
                    <h3 className="font-bold text-lg mb-2">94%</h3>
                    <p className="text-gray-600 text-sm">Client Satisfaction</p>
                  </div>
                  <div className="flex-1 bg-white p-6 rounded-xl shadow-md border-l-4 border-secondary">
                    <h3 className="font-bold text-lg mb-2">200+</h3>
                    <p className="text-gray-600 text-sm">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-secondary/10 rounded-full mix-blend-multiply filter blur-xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>

              {/* Service Card 1 */}
              <div className="service-card p-8 rounded-xl shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-20"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <i className="fas fa-search text-primary text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Research</h3>
                  <p className="text-gray-600 mb-4">
                    Evidence-based insights that drive strategic decisions
                  </p>
                  <a href="./Research.html" className="text-primary font-medium inline-flex items-center group">
                    <span className="group-hover:underline">Discover More</span>
                    <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="service-card p-8 rounded-xl shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/5 opacity-20"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <i className="fas fa-graduation-cap text-primary text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Training</h3>
                  <p className="text-gray-600 mb-4">
                    Capacity building programs that create lasting change
                  </p>
                  <a href="#" className="text-primary font-medium inline-flex items-center group">
                    <span className="group-hover:underline">Explore Programs</span>
                    <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="service-card p-8 rounded-xl shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-20"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <i className="fas fa-chart-line text-primary text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">BDS</h3>
                  <p className="text-gray-600 mb-4">
                    Tailored support for business growth and innovation
                  </p>
                  <a href="#" className="text-primary font-medium inline-flex items-center group">
                    <span className="group-hover:underline">Learn How</span>
                    <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>

              {/* Service Card 4 */}
              <div className="service-card p-8 rounded-xl shadow-md relative overflow-hidden">
                <div className="absolute inset-0 bg-secondary/5 opacity-20"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    <i className="fas fa-handshake text-primary text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Policy Advocacy</h3>
                  <p className="text-gray-600 mb-4">
                    Shaping policies through data-driven recommendations
                  </p>
                  <a href="#" className="text-primary font-medium inline-flex items-center group">
                    <span className="group-hover:underline">Our Approach</span>
                    <i className="fas fa-arrow-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Dashboard Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">LIVE DEMO</span>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience Our <span className="gradient-text">Digital Platform</span></h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our interactive dashboard showcasing real-time insights and analytics
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Browser-style header */}
            <div className="h-14 bg-gray-100 flex items-center px-4 border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400 cursor-pointer hover:bg-red-500 transition"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400 cursor-pointer hover:bg-yellow-500 transition"></div>
                <div className="w-3 h-3 rounded-full bg-green-400 cursor-pointer hover:bg-green-500 transition"></div>
              </div>
              <div className="mx-4 flex-1 bg-gray-200 rounded-lg px-4 py-1 text-sm text-gray-600">
                https://platform.biruhminds.com/dashboard
              </div>
              <button className="text-gray-500 hover:text-primary p-1 transition">
                <i className="fas fa-expand"></i>
              </button>
            </div>

            {/* Iframe container with loading animation */}
            <div className="relative" style={{ paddingTop: '56.25%' }}>
              <div id="dashboard-loader" className="absolute inset-0 flex items-center justify-center bg-gray-50">
                <div className="text-center">
                  <div className="inline-block relative">
                    <div className="w-16 h-16 border-4 border-primary/20 rounded-full"></div>
                    <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full absolute top-0 left-0 animate-spin"></div>
                  </div>
                  <p className="mt-4 text-gray-600">Loading interactive dashboard...</p>
                </div>
              </div>
              <iframe
                id="research-dashboard"
                src="https://menshdigitalbds.com"
                frameBorder="0"
                className="absolute inset-0 w-full h-full"
                allowFullScreen
              ></iframe>
            </div>

            {/* Dashboard footer */}
            <div className="p-4 bg-gray-100 border-t border-gray-200 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500">Last updated: Just now</span>
                <span className="text-green-500 text-sm"><i className="fas fa-circle text-xs mr-1"></i> Secure connection</span>
              </div>
              <button className="text-primary hover:text-secondary font-medium flex items-center group">
                <span className="group-hover:underline">Open full dashboard</span>
                <i className="fas fa-external-link-alt ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
              </button>
            </div>
          </div>
        </div>
      </section>

     
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Organization?</h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can tailor our services to your unique challenges
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition transform hover:-translate-y-1 shadow-lg">
                <i className="fas fa-calendar-check mr-2"></i> Schedule Consultation
              </a>
              <a href="#" className="border-2 border-white text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-white/10 transition flex items-center justify-center">
                <i className="fas fa-phone-alt mr-2"></i> Contact Our Team
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Services;
