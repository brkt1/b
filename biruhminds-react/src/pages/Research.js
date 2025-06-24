import React from 'react';
import { Link } from 'react-router-dom';

const Research = () => {
  const researchServices = [
    {
      icon: 'file-alt',
      title: 'Winning Proposals',
      description: 'Fund-ready research designs that secure support and funding',
      color: 'text-blue-500'
    },
    {
      icon: 'chart-bar',
      title: 'Market Intelligence',
      description: 'Feasibility studies & competitive insights for strategic advantage',
      color: 'text-purple-500'
    },
    {
      icon: 'robot',
      title: 'Smart Data Collection',
      description: 'AI-enhanced field research methodologies',
      color: 'text-green-500'
    },
    {
      icon: 'project-diagram',
      title: 'Advanced Analytics',
      description: 'Predictive modeling & dynamic dashboards',
      color: 'text-red-500'
    },
    {
      icon: 'chart-pie',
      title: 'Impact Storytelling',
      description: 'Compelling reports & visualizations that communicate results',
      color: 'text-yellow-500'
    },
    {
      icon: 'tasks',
      title: 'Strategic MEL',
      description: 'Baseline to endline performance tracking',
      color: 'text-indigo-500'
    },
    {
      icon: 'graduation-cap',
      title: 'Knowledge Leadership',
      description: 'Publications, forums & webinars that shape industry conversations',
      color: 'text-pink-500'
    },
    {
      icon: 'people-arrows',
      title: 'Inclusive Solutions',
      description: 'Gender audits & equity frameworks',
      color: 'text-teal-500'
    }
  ];

  const benefits = [
    "Cutting-edge methodologies (AI/design thinking)",
    "Boardroom-to-field expertise",
    "Data that drives real change",
    "Multidisciplinary research teams",
    "Ethical research practices",
    "Customized solutions for each client"
  ];

  return (
    <div className="font-sans antialiased text-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-white py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Data-Driven <span className="text-primary-400">Research</span> Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transforming complex challenges into actionable intelligence with cutting-edge methodologies
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="bg-primary-500 hover:bg-primary-600 text-white px-8 py-4 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Contact Our Researchers
              </Link>
              <Link 
                to="/projects" 
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-lg font-medium transition-all flex items-center justify-center"
              >
                <span>Explore Our Work</span>
                <i className="fas fa-chevron-right ml-3 text-sm"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                  alt="Research team analyzing data" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h3 className="text-xl font-semibold text-white">Harnessing Global Best Practices</h3>
                  <p className="text-gray-300 text-sm">Our team combines international expertise with local knowledge</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="max-w-lg">
                <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
                  Our Methodology
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                  Bridging Research and Strategic Decision-Making
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  At Biruhminds, our Research Division employs a unique blend of quantitative and qualitative methodologies, enhanced by AI and machine learning, to deliver insights that drive measurable impact.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    to="/methodology" 
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 group"
                  >
                    <span>Learn about our approach</span>
                    <i className="fas fa-arrow-right ml-3 transition-transform group-hover:translate-x-1"></i>
                  </Link>
                  <Link 
                    to="/case-studies" 
                    className="inline-flex items-center text-gray-600 font-medium hover:text-gray-800 group"
                  >
                    <span>View case studies</span>
                    <i className="fas fa-chevron-right ml-2 text-sm"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Research Solutions
            </h2>
            <p className="text-lg text-gray-600">
              Tailored methodologies that deliver actionable intelligence for your specific challenges
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {researchServices.map((service, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
              >
                <div className="p-6">
                  <div className={`w-14 h-14 ${service.color} bg-${service.color.split('-')[1]}-100 rounded-lg flex items-center justify-center mb-5`}>
                    <i className={`fas fa-${service.icon} text-2xl`}></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl md:text-4xl font-bold mb-8">
                  Why Partner With Our <span className="text-primary-400">Research Team?</span>
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                          <i className="fas fa-check text-white text-sm"></i>
                        </div>
                      </div>
                      <p className="ml-3 text-gray-300">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold mb-4">Ready to Start Your Research Project?</h3>
                  <p className="text-gray-300 mb-6">
                    Our team is ready to design a custom research solution for your specific needs.
                  </p>
                  <div className="space-y-4">
                    <Link 
                      to="/contact" 
                      className="block bg-primary-500 hover:bg-primary-600 text-white px-6 py-4 rounded-lg font-medium text-center shadow-lg hover:shadow-xl transition"
                    >
                      Request Research Proposal
                    </Link>
                    <Link 
                      to="/webinar" 
                      className="block border-2 border-white text-white hover:bg-white/10 px-6 py-4 rounded-lg font-medium text-center transition flex items-center justify-center"
                    >
                      <i className="fas fa-calendar-alt mr-3"></i>
                      <span>Attend Our Next Webinar</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Research That Makes an Impact
            </h2>
            <p className="text-lg text-gray-600">
              Quantifying our contribution to evidence-based decision making
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-3">15+</div>
              <div className="text-gray-600 uppercase text-sm tracking-wider">Research Projects</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-3">92%</div>
              <div className="text-gray-600 uppercase text-sm tracking-wider">Client Retention</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary-500 mb-3">25+</div>
              <div className="text-gray-600 uppercase text-sm tracking-wider">Industry Sectors</div>
            </div>
           
          </div>
        </div>
      </section>
    </div>
  );
};

export default Research;