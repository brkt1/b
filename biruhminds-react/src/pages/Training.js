import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Training = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where <span className="gradient-text">Capacity Building</span><br />Meets Lasting Impact
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              We don't just conduct training – we engineer breakthroughs in human potential
            </p>
            <a href="#programs" className="inline-block bg-primary hover:bg-secondary text-white px-8 py-3 rounded-lg font-medium shadow-lg hover:shadow-xl transition">
              Explore Programs
            </a>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img src="/image/portfolio/rhrn.png" 
                   alt="Training session" 
                   className="rounded-xl shadow-lg w-full" />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Excellence in Professional Development</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We offer quality and standardized training to a wide range of stakeholders using tailored and contextualized manuals developed and adopted by our firm. The materials and facilitation competencies are highly regarded by our esteemed partners.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Biruhminds also develops tailored training manuals on different thematic areas and comprehensive soft skills as deemed necessary for development partners and the private sector.
              </p>
              <div className="flex space-x-4">
                
             
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our <span className="gradient-text">Training Solutions</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive programs designed to meet diverse professional development needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

             {/* Program 4 */}
            <div className="training-card p-8 rounded-xl shadow-md">
              <div className="feature-icon rounded-full flex items-center justify-center mb-6 text-primary">
                <i className="fas fa-calendar-check text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Delivering Trainings</h3>
              <p className="text-gray-600 mb-4">
                End-to-end management of venues, materials & certification
              </p>
              <a href="https://biruhminds.com/contact" className="text-primary font-medium inline-flex items-center group">
                <span className="group-hover:underline">Get Started</span>
                <i className="fas fa-chevron-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
            
            
            {/* Program 2 */}
            <div className="training-card p-8 rounded-xl shadow-md">
              <div className="feature-icon rounded-full flex items-center justify-center mb-6 text-primary">
                <i className="fas fa-laptop-code text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">MENSH Digital Platform</h3>
              <p className="text-gray-600 mb-4">
                On-demand courses with personalized coaching and support
              </p>
              <a href="https://menshdigitalbds.com/" className="text-primary font-medium inline-flex items-center group">
                <span className="group-hover:underline">Explore Platform</span>
                <i className="fas fa-chevron-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
            
            {/* Program 3 */}
            <div className="training-card p-8 rounded-xl shadow-md">
              <div className="feature-icon rounded-full flex items-center justify-center mb-6 text-primary">
                <i className="fas fa-book text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Developing Customized Training Manuals</h3>
              <p className="text-gray-600 mb-4">
                Professionally developed materials tailored to your specific needs
              </p>
              <a href="https://biruhminds.com/contact" className="text-primary font-medium inline-flex items-center group">
                <span className="group-hover:underline">Request Samples</span>
                <i className="fas fa-chevron-right ml-2 text-sm transition-transform group-hover:translate-x-1"></i>
              </a>
            </div>
            
           
            
           
            
            
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why <span className="gradient-text">Choose Biruhminds</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              What sets our training programs apart from the rest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="feature-icon rounded-full flex items-center justify-center mb-4 mx-auto text-primary">
                <i className="fas fa-user-tie text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Industry-Expert Trainers</h3>
              <p className="text-gray-600">
                Learn from practitioners with real-world experience
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="feature-icon rounded-full flex items-center justify-center mb-4 mx-auto text-primary">
                <i className="fas fa-cogs text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Developing Training Manuals</h3>
              <p className="text-gray-600">
                Tailored content to meet your specific objectives
              </p>
            </div>
            
            <div className="text-center p-6">
              <div className="feature-icon rounded-full flex items-center justify-center mb-4 mx-auto text-primary">
                <i className="fas fa-blender-phone text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-3">Blended Learning</h3>
              <p className="text-gray-600">
                Flexible online and in-person delivery options
              </p>
            </div>
          </div>
        </div>
      </section>

      
     

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Follow the Latest <span className="gradient-text">Trends</span></h2>
            <p className="text-gray-300 mb-8">
              With our daily newsletter - stay updated on training opportunities and industry insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input type="email" placeholder="you@example.com" className="flex-grow px-6 py-3 rounded-lg focus:outline-none text-gray-900" />
              <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Training;
