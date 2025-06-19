import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const BDS = () => {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleExpand = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <>
      {/* Hero Video Section */}
      <section className="relative bg-dark text-white">
        <div className="container mx-auto px-6 py-32 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Transforming Ethiopia's Economic Landscape</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Job creation and MSME development through innovative programming
          </p>
          <a href="#portfolio" className="inline-flex items-center bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition">
            <i className="fas fa-play-circle mr-2"></i> Watch Our Story
          </a>
        </div>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full" />
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-white" id="portfolio">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">Portfolio</span>
            <h2 className="text-4xl font-bold text-dark mb-4">Our Service Portfolio & Partners</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborative programs driving job creation and MSME development in Ethiopia
            </p>
          </div>

          {/* PASWAY Project */}
          <div className="project-section bg-white rounded-xl shadow-lg gradient-border mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative rounded-l-xl overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[400px]" />
              </div>
              <div className="p-8">
                <div className="text-sm text-primary font-medium mb-2">PASWAY Project</div>
                <h3 className="text-2xl font-bold text-dark mb-4">GIZ/Plan International (SCV and ECD Consortium Programme)</h3>
                <p className="text-gray-600 mb-6">
                  Youth BDS at ECD and youth centers in Adama, training young entrepreneurs for sustainable enterprise creation.
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <i className="fas fa-users mr-2"></i> 1,200+ Youth Trained
                  </div>
                  <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    <i className="fas fa-map-marker-alt mr-2"></i> Adama Region
                  </div>
                </div>

                {/* Read More Content */}
                {expandedSections['pasway-more'] && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-lg mb-3">Project Details</h4>
                    <p className="text-gray-600 mb-4">
                      Our partnership with GIZ and Plan International delivered comprehensive business development services through youth centers in Adama. The program focused on equipping young entrepreneurs with essential skills for sustainable enterprise creation.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mr-2 mt-1"></i>
                        <span>Comprehensive entrepreneurship training programs</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mr-2 mt-1"></i>
                        <span>Mentorship and coaching for business startups</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mr-2 mt-1"></i>
                        <span>Market linkage and access to finance support</span>
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Youth Development</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Entrepreneurship</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Adama Region</span>
                    </div>
                  </div>
                )}
                <button
                  className={`read-more-btn inline-flex items-center text-primary font-medium hover:text-secondary mt-4 ${expandedSections['pasway-more'] ? 'expanded' : ''}`}
                  onClick={() => toggleExpand('pasway-more')}
                >
                  {expandedSections['pasway-more'] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>

          {/* Young Africa Works Programme */}
          <div className="project-section bg-white rounded-xl shadow-lg gradient-border mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="lg:order-2 relative rounded-r-xl overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[400px]" />
              </div>
              <div className="p-8 lg:order-1">
                <div className="text-sm text-primary font-medium mb-2">Young Africa Works</div>
                <h3 className="text-2xl font-bold text-dark mb-4">Mastercard Foundation/First Consult (BRIDGE Programme)</h3>
                <p className="text-gray-600 mb-6">
                  High quality capacity enhancement training and business advisory services delivered for micro, small and medium enterprises across multiple regions in Ethiopia.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Geographic Reach:</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Tigray</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Dire Dawa</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Dessie</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Kemise</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Bahir Dar</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Adama</span>
                    <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Addis Ababa</span>
                  </div>
                </div>

                {/* Read More Content */}
                {expandedSections['yaw-more'] && (
                  <div className="mt-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="text-2xl font-bold text-primary mb-1">26,550</div>
                        <div className="text-sm text-gray-600">Participants Completed</div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="text-2xl font-bold text-primary mb-1">1,200</div>
                        <div className="text-sm text-gray-600">New MSMEs Established</div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-3">Program Impact</h4>
                    <p className="text-gray-600 mb-4">
                      The BRIDGE Programme has successfully transformed the entrepreneurial landscape across Ethiopia, creating sustainable businesses and employment opportunities in regions most in need of economic development.
                    </p>
                    <ul className="space-y-2 mb-4">
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mr-2 mt-1"></i>
                        <span>92% of participants reported increased business skills</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mr-2 mt-1"></i>
                        <span>75% of new businesses still operational after 2 years</span>
                      </li>
                      <li className="flex items-start">
                        <i className="fas fa-check-circle text-accent mr-2 mt-1"></i>
                        <span>Average revenue increase of 45% among participants</span>
                      </li>
                    </ul>
                  </div>
                )}
                <button
                  className={`read-more-btn inline-flex items-center text-primary font-medium hover:text-secondary mt-4 ${expandedSections['yaw-more'] ? 'expanded' : ''}`}
                  onClick={() => toggleExpand('yaw-more')}
                >
                  {expandedSections['yaw-more'] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>

          {/* Post-War Rehabilitation */}
          <div className="project-section bg-white rounded-xl shadow-lg gradient-border mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="relative rounded-l-xl overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[400px]" />
              </div>
              <div className="p-8">
                <div className="text-sm text-primary font-medium mb-2">Conflict Recovery</div>
                <h3 className="text-2xl font-bold text-dark mb-4">Post-War MSME Rehabilitation</h3>
                <p className="text-gray-600 mb-6">
                  More than 1,200 enterprise owners from 230 MSEs and regional trade experts were trained on Enterprise Leadership and Entrepreneurial Mindset to revitalize conflict-affected MSMEs in Tigray and Amhara regions.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Program Impact:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                      <span>Positive mindset shift among participants</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                      <span>Increased readiness to commit to enterprise revival</span>
                    </li>
                  </ul>
                </div>

                {/* Read More Content */}
                {expandedSections['rehab-more'] && (
                  <div className="mt-4">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="text-2xl font-bold text-primary mb-1">98%</div>
                        <div className="text-sm text-gray-600">Satisfaction Rate</div>
                      </div>
                      <div className="bg-primary/5 p-4 rounded-lg border border-primary/10">
                        <div className="text-2xl font-bold text-primary mb-1">85%</div>
                        <div className="text-sm text-gray-600">Businesses Revived</div>
                      </div>
                    </div>
                    <h4 className="font-semibold text-lg mb-3">Revitalization Strategy</h4>
                    <p className="text-gray-600 mb-4">
                      Our comprehensive approach to post-conflict business rehabilitation included psychological support, financial restructuring, and market reconnection strategies tailored to the unique challenges faced by businesses in conflict-affected regions.
                    </p>
                    <p className="text-gray-600">
                      Participants praised the content and methodologies (98%) and expressed attitudinal changes, inspiration, and a strong commitment to revitalizing enterprises in the Tigray region.
                    </p>
                  </div>
                )}
                <button
                  className={`read-more-btn inline-flex items-center text-primary font-medium hover:text-secondary mt-4 ${expandedSections['rehab-more'] ? 'expanded' : ''}`}
                  onClick={() => toggleExpand('rehab-more')}
                >
                  {expandedSections['rehab-more'] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>

          {/* Capacity Building */}
          <div className="project-section bg-white rounded-xl shadow-lg gradient-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="lg:order-2 relative rounded-r-xl overflow-hidden">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-full min-h-[400px]" />
              </div>
              <div className="p-8 lg:order-1">
                <div className="text-sm text-primary font-medium mb-2">Public Sector Training</div>
                <h3 className="text-2xl font-bold text-dark mb-4">Addis Ababa Job Creation Bureau</h3>
                <p className="text-gray-600 mb-6">
                  11 sub-city sector heads and 155 high-level experts were trained on Transformational Enterprise Leadership and Entrepreneurial Mindset in Adama and Debrezeit cities.
                </p>
                <div className="mb-6">
                  <h4 className="font-semibold text-lg mb-3">Key Achievements:</h4>
                  <ul className="space-y-3 text-gray-600">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                      <span>Customized training modules developed</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-accent mr-3 mt-1"></i>
                      <span>Improved business advisory services</span>
                    </li>
                  </ul>
                </div>

                {/* Read More Content */}
                {expandedSections['capacity-more'] && (
                  <div className="mt-4">
                    <p className="text-gray-600 mb-6">
                      The workshop held in Adama and Debreziet cities was instrumental in achieving the government job creation and enterprise transition goals. Biruhminds developed customized training modules and toolkits to empower lower level public experts for improved business advisory and coaching service for MSMEs.
                    </p>
                    <h4 className="font-semibold text-lg mb-3">Training Outcomes</h4>
                    <p className="text-gray-600 mb-4">
                      Participants gained practical skills in enterprise leadership, strategic planning, and effective governance models that directly contribute to job creation and economic development objectives.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Public Sector</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Leadership</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Addis Ababa</span>
                      <span className="bg-gray-100 px-3 py-1 rounded-full text-sm">Capacity Building</span>
                    </div>
                  </div>
                )}
                <button
                  className={`read-more-btn inline-flex items-center text-primary font-medium hover:text-secondary mt-4 ${expandedSections['capacity-more'] ? 'expanded' : ''}`}
                  onClick={() => toggleExpand('capacity-more')}
                >
                  {expandedSections['capacity-more'] ? 'Read Less' : 'Read More'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BDS Approach Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">Our Approach</span>
              <h2 className="text-4xl font-bold text-dark mb-4">Comprehensive Business Development Services</h2>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default BDS;
