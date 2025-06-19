import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('training');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  // Data for reusable components
  const stats = [
    { value: "500+", label: "Businesses Supported" },
    { value: "92%", label: "Success Rate" },
    { value: "25+", label: "Industry Experts" },
    { value: "10+", label: "Years Experience" }
  ];

  const methodologySteps = [
    {
      step: 1,
      title: "Business Ideation",
      description: "We help refine your business concept through market validation and feasibility analysis to ensure viability before you invest time and resources."
    },
    {
      step: 2,
      title: "Business Planning",
      description: "Our experts guide you in creating a comprehensive business plan that serves as both a roadmap for operations and a tool for securing funding."
    }
    // Add more steps as needed
  ];

  const resources = [
    {
      icon: "file-alt",
      title: "Business Plan Template",
      description: "Comprehensive guide for developing your business plan with financial projections",
      format: "PDF • 2.4MB",
      gradient: "from-primary to-accent"
    },
    {
      icon: "chart-line",
      title: "Marketing Strategy Guide",
      description: "Step-by-step marketing strategy development with digital focus",
      format: "PDF • 1.8MB",
      gradient: "from-accent to-secondary"
    },
    {
      icon: "calculator",
      title: "Financial Planning Workbook",
      description: "Interactive Excel workbook for financial management and planning",
      format: "XLSX • 3.2MB",
      gradient: "from-secondary to-primary"
    }
  ];

  const testimonials = [
    {
      name: "Liliy Fikadu",
      company: "owner at .",
      quote: "It helped me to be more practical, especially on teamwork. I was impatient with my team but after the training, I was motivated to understand my team’s perspectives and respect their views",
      rating: 5
    },
    {
      name: "Senait",
      company: "owner at .",
      quote: "The BDS training has really, equipped me with skills, and transformed me into a better businesswoman.",
      rating: 5
    }
  ];

  const footerLinks = {
    services: [
      "Business Training",
      "Advisory Services",
      "Financial Linkage",
      "Digital BDS Platform",
      "Market Research"
    ],
    resources: [
      "Templates",
      "Guides",
      "Case Studies",
      "Blog",
      "Webinars"
    ]
  };

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white py-20 md:py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white opacity-20 mix-blend-overlay animate-float"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-white opacity-20 mix-blend-overlay animate-float" style={{ animationDelay: "2s" }}></div>
          <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-white opacity-20 mix-blend-overlay animate-float" style={{ animationDelay: "4s" }}></div>
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Empower Your Business <br className="hidden md:block" />Growth Journey
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Transformative business development services to scale your enterprise
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/services" 
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Explore Services <i className="fas fa-arrow-right ml-2"></i>
            </Link>
            <Link 
              to="/demo" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition"
            >
              <i className="fas fa-play mr-2"></i> Watch Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-dark text-white py-8 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold mb-2 text-accent">{stat.value}</div>
                <div className="text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BDS Approach Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">Our Methodology</span>
            <h2 className="text-4xl font-bold text-dark mb-4">Strategic Business Development Framework</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven 6-step approach to transform your business from idea to sustainable growth
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 h-full w-1 bg-gradient-to-b from-primary to-secondary -ml-0.5"></div>
            
            {/* Steps */}
            {methodologySteps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center mb-16 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                <div className="md:w-1/2 md:pr-16 md:pl-16 mb-8 md:mb-0">
                  <div className="bg-primary/10 p-6 rounded-xl border-l-4 border-primary">
                    <h3 className="text-2xl font-bold text-dark mb-3">{step.step}. {step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold shadow-lg">
                    {step.step}
                  </div>
                </div>
              </div>
            ))}
            
            {/* CTA */}
            <div className="text-center mt-16">
              <Link to="/methodology" className="inline-flex items-center text-primary font-semibold text-lg hover:text-secondary">
                Explore all 6 steps in detail
                <i className="fas fa-arrow-right ml-3 animate-pulse-slow"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">Resources</span>
            <h2 className="text-4xl font-bold text-dark mb-4">Essential Business Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Download our professionally crafted templates and guides to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource, index) => (
              <div key={index} className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className={`h-3 bg-gradient-to-r ${resource.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-${resource.gradient.split(' ')[0]}/10 text-${resource.gradient.split(' ')[0]} flex items-center justify-center mr-4`}>
                      <i className={`fas fa-${resource.icon} text-xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-dark">{resource.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6">{resource.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">{resource.format}</span>
                    <Link to="#" className="text-primary font-medium hover:text-secondary flex items-center transition">
                      Download
                      <i className="fas fa-arrow-down ml-2"></i>
                    </Link>
                  </div>
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br from-${resource.gradient.split(' ')[0]}/10 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/resources" className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition">
              View All Resources
              <i className="fas fa-chevron-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Digital Platform Section */}
      <section className="py-20 bg-gradient-to-br from-dark to-gray-900 text-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="relative max-w-md mx-auto">
                <div className="absolute -top-8 -left-8 w-64 h-64 bg-primary/20 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow"></div>
                <div className="relative z-10">
                  <div className="bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border-8 border-gray-900">
                    <div className="h-10 bg-gray-900 flex items-center px-4">
                    
                      <div className="mx-auto text-xs">menshdigitalbds.com</div>
                    </div>
                    <div className="bg-gray-700 flex items-center justify-center">
                      <img src="/image/mensh.png" alt="Digital Platform" className="w-full h-full object-cover rounded-t-3xl" /> 
                      
                    </div>
                    <div className="p-4 bg-gray-900">
                      <div className="flex justify-between items-center">
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-accent/20 rounded-full mix-blend-screen filter blur-xl animate-pulse-slow" style={{ animationDelay: "2s" }}></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-white/10 rounded-full mb-4">Digital Platform</span>
              <h2 className="text-4xl font-bold mb-6">Transform Your Business with <span className="text-primary">MENSH</span> App</h2>
              <p className="text-lg text-gray-300 mb-6">
                Our digital BDS platform provides affordable, tailored business advisory support to entrepreneurs anytime, anywhere.
              </p>
              <div className="bg-white/10 rounded-xl p-6 mb-8 border border-white/10">
                <p className="italic text-gray-300 mb-4">
                  "MENSH" is a traditional farming tool used to separate grain from straw. Similarly, our platform helps entrepreneurs thrive by effectively using market information.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-3">
                    <i className="fas fa-quote-left text-white"></i>
                  </div>
                  <div>
                    <div className="font-medium">Traditional Ethiopian Wisdom</div>
                    <div className="text-sm text-gray-400">Applied to modern business</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-4">
                <Link to="/download" className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-lg font-medium flex items-center shadow-lg hover:shadow-xl transition">
                  <i className="fas fa-mobile-alt mr-3"></i> Download App
                </Link>
                <Link to="https://menshdigitalbds.com/" className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg font-medium flex items-center border border-white/20 transition">
                  <i className="fas fa-play-circle mr-3"></i> visit
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">Services</span>
            <h2 className="text-4xl font-bold text-dark mb-4">Comprehensive Business Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tailored solutions to meet your business at every stage of growth
            </p>
          </div>
          
          {/* Tabs Navigation */}
          <div className="flex flex-wrap justify-center mb-12 border-b border-gray-200">
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'training' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'} transition`}
              onClick={() => handleTabChange('training')}
            >
              <i className="fas fa-graduation-cap mr-2"></i> Training
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'advisory' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'} transition`}
              onClick={() => handleTabChange('advisory')}
            >
              <i className="fas fa-user-tie mr-2"></i> Advisory
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'finance' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'} transition`}
              onClick={() => handleTabChange('finance')}
            >
              <i className="fas fa-hand-holding-usd mr-2"></i> Finance
            </button>
            <button 
              className={`px-6 py-3 font-medium ${activeTab === 'digital' ? 'text-primary border-b-2 border-primary' : 'text-gray-600 hover:text-primary'} transition`}
              onClick={() => handleTabChange('digital')}
            >
              <i className="fas fa-laptop-code mr-2"></i> Digital
            </button>
          </div>
          
          {/* Tab Contents */}
          <div className={`tab-content ${activeTab === 'training' ? 'block' : 'hidden'}`} id="training">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-dark mb-4">Entrepreneurial Skill Development</h3>
                <p className="text-gray-600 mb-6">
                  Our interactive training programs are designed to build core entrepreneurial competencies through practical, hands-on learning experiences tailored to your industry.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                    <span>Business model canvas development</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                    <span>Market research and validation techniques</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                    <span>Financial literacy and management</span>
                  </li>
                </ul>
                <Link to="/training" className="inline-flex items-center text-primary font-medium hover:text-secondary">
                  View Training Calendar
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <i className="fas fa-chalkboard-teacher text-3xl"></i>
                  </div>
                  <h4 className="text-xl font-bold mb-2">Upcoming Workshop</h4>
                  <div className="text-accent font-bold text-2xl mb-3">Digital Marketing Mastery</div>
                  <div className="text-gray-500 mb-4">June 25-26, 2023 • Online</div>
                  <Link to="/register" className="inline-block bg-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-secondary transition">
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Other tab contents would be implemented similarly */}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">Success Stories</span>
            <h2 className="text-4xl font-bold text-dark mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real businesses transformed through our services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-4">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <i 
                      key={i} 
                      className={`fas ${i < Math.floor(testimonial.rating) ? 'fa-star' : (i === Math.floor(testimonial.rating) && testimonial.rating % 1 !== 0 ? 'fa-star-half-alt' : 'fa-star')} text-yellow-400`}
                    ></i>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/testimonials" className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition">
              View More Success Stories
              <i className="fas fa-chevron-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Whether you're just starting or looking to scale, our experts are ready to guide you every step of the way.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/get-started" className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl">
              Get Started Today
            </Link>
            <Link to="/consultation" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition">
              <i className="fas fa-phone-alt mr-2"></i> Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default HomePage;