import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Research = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-lightbg py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Research Division</h1>
            <p className="text-xl text-gray-600 mb-8">
              Where data meets innovation – our elite research team transforms complex challenges into actionable intelligence
            </p>
            <div className="flex justify-center space-x-4">
              <a href="#" className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition">
                Contact Our Team
              </a>
              <a href="#" className="border border-primary text-primary hover:bg-primary/10 px-8 py-3 rounded-lg font-medium transition flex items-center">
                <span>View Projects</span>
                <i className="fas fa-chevron-right ml-2 text-sm"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Approach */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-primary mb-6">Our Research Approach</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Biruhminds Consult PLC, our Research Division combines cutting-edge methodologies and contemporary frameworks to deliver data-driven insights for businesses, policymakers, and development partners. We bridge research and strategy, ensuring our clients make informed, impactful decisions.
              </p>
              <a href="#" className="inline-flex items-center text-primary font-medium hover:text-primary-dark">
                Read more
                <i className="fas fa-chevron-right ml-2 text-sm"></i>
              </a>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
                     alt="Research team" 
                     className="w-full h-auto object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Harnessing Global Best Practices</h3>
                  <p className="text-gray-600">Our team combines international expertise with local knowledge</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">We Deliver Actionable Intelligence Through</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive research solutions tailored to your specific needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service Card 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-accent hover:shadow-lg transition">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Winning Proposals</h3>
                <p className="text-gray-600">Fund-ready research designs that secure support and funding</p>
              </div>
            </div>
            
            {/* Service Card 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-accent hover:shadow-lg transition">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <i className="fas fa-chart-bar text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Market Intelligence</h3>
                <p className="text-gray-600">Feasibility studies & competitive insights for strategic advantage</p>
              </div>
            </div>
            
            {/* Service Card 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-accent hover:shadow-lg transition">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <i className="fas fa-robot text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Data Collection</h3>
                <p className="text-gray-600">AI-enhanced field research methodologies</p>
              </div>
            </div>
            
            {/* Service Card 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-accent hover:shadow-lg transition">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <i className="fas fa-project-diagram text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Advanced Analytics</h3>
                <p className="text-gray-600">Predictive modeling & dynamic dashboards</p>
              </div>
            </div>
            
            {/* Service Card 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-accent hover:shadow-lg transition">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <i className="fas fa-chart-pie text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Impact Storytelling</h3>
                <p className="text-gray-600">Compelling reports & visualizations that communicate results</p>
              </div>
            </div>
            
            {/* Service Card 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-accent hover:shadow-lg transition">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <i className="fas fa-tasks text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Strategic MEL</h3>
                <p className="text-gray-600">Baseline to endline performance tracking</p>
              </div>
            </div>
            
            {/* Service Card 7 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-accent hover:shadow-lg transition">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <i className="fas fa-graduation-cap text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Knowledge Leadership</h3>
                <p className="text-gray-600">Publications, forums & webinars that shape industry conversations</p>
              </div>
            </div>
            
            {/* Service Card 8 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-t-4 border-accent hover:shadow-lg transition">
              <div className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-4">
                  <i className="fas fa-people-arrows text-xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Inclusive Solutions</h3>
                <p className="text-gray-600">Gender audits & equity frameworks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Our Research Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mr-3 mt-1"></i>
                    <span>Cutting-edge methodologies (AI/design thinking)</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mr-3 mt-1"></i>
                    <span>Boardroom-to-field expertise</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mr-3 mt-1"></i>
                    <span>Data that drives real change</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mr-3 mt-1"></i>
                    <span>Multidisciplinary research teams</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mr-3 mt-1"></i>
                    <span>Ethical research practices</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-accent mr-3 mt-1"></i>
                    <span>Customized solutions for each client</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <a href="#" className="inline-block bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-lg font-medium shadow-md hover:shadow-lg transition">
                Request Research Proposal
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Research;
