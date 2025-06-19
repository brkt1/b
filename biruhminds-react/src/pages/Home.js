import React, { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const bar1 = document.getElementById('bar1');
    const bar2 = document.getElementById('bar2');
    const bar3 = document.getElementById('bar3');

    const mobileServicesBtn = document.getElementById('mobile-services-btn');
    const mobileServicesMenu = document.getElementById('mobile-services-menu');
    const mobileResearchBtn = document.getElementById('mobile-research-btn');
    const mobileResearchMenu = document.getElementById('mobile-research-menu');
    const mobileBdsBtn = document.getElementById('mobile-bds-btn');
    const mobileBdsMenu = document.getElementById('mobile-bds-menu');
    const mobileLiyuBtn = document.getElementById('mobile-liyu-btn');
    const mobileLiyuMenu = document.getElementById('mobile-liyu-menu');

    function toggleMenu() {
      if (menu.classList.contains('max-h-0')) {
        menu.classList.remove('max-h-0');
        menu.classList.add('max-h-screen', 'py-4');
        bar1.classList.add('rotate-45', 'translate-y-2');
        bar2.classList.add('opacity-0');
        bar3.classList.add('-rotate-45', '-translate-y-2');
      } else {
        menu.classList.add('max-h-0');
        menu.classList.remove('max-h-screen', 'py-4');
        bar1.classList.remove('rotate-45', 'translate-y-2');
        bar2.classList.remove('opacity-0');
        bar3.classList.remove('-rotate-45', '-translate-y-2');
      }
    }

    if (menuToggle) {
      menuToggle.addEventListener('click', toggleMenu);
    }

    if (mobileServicesBtn && mobileServicesMenu) {
      mobileServicesBtn.addEventListener('click', () => {
        mobileServicesMenu.classList.toggle('hidden');
      });
    }
    if (mobileResearchBtn && mobileResearchMenu) {
      mobileResearchBtn.addEventListener('click', () => {
        mobileResearchMenu.classList.toggle('hidden');
      });
    }
    if (mobileBdsBtn && mobileBdsMenu) {
      mobileBdsBtn.addEventListener('click', () => {
        mobileBdsMenu.classList.toggle('hidden');
      });
    }
    if (mobileLiyuBtn && mobileLiyuMenu) {
      mobileLiyuBtn.addEventListener('click', () => {
        mobileLiyuMenu.classList.toggle('hidden');
      });
    }

    // Cleanup event listeners on unmount
    return () => {
      if (menuToggle) {
        menuToggle.removeEventListener('click', toggleMenu);
      }
      if (mobileServicesBtn && mobileServicesMenu) {
        mobileServicesBtn.removeEventListener('click', () => {
          mobileServicesMenu.classList.toggle('hidden');
        });
      }
      if (mobileResearchBtn && mobileResearchMenu) {
        mobileResearchBtn.removeEventListener('click', () => {
          mobileResearchMenu.classList.toggle('hidden');
        });
      }
      if (mobileBdsBtn && mobileBdsMenu) {
        mobileBdsBtn.removeEventListener('click', () => {
          mobileBdsMenu.classList.toggle('hidden');
        });
      }
      if (mobileLiyuBtn && mobileLiyuMenu) {
        mobileLiyuBtn.removeEventListener('click', () => {
          mobileLiyuMenu.classList.toggle('hidden');
        });
      }
    };
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F0FAFF] to-[#E8F9FC] py-24">
        <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-0 w-48 h-48 bg-secondary/5 rounded-full blur-xl"></div>

        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2 z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Transform Your Business With{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  Strategic Innovation
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
                Biruhminds Consult delivers cutting-edge solutions that bridge policy and practice, solving complex social and economic challenges with measurable impact.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="relative overflow-hidden group bg-gradient-to-r from-primary to-secondary text-white px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300">
                  <span className="relative z-10">Explore Services</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-100 transition duration-300"></span>
                </button>
                <button className="px-10 py-4 rounded-xl font-semibold text-lg border-2 border-primary text-primary hover:bg-primary/5 transition duration-300 flex items-center gap-2">
                  <span>Contact Us</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                    <p className="ml-1 text-sm font-medium text-gray-900">
                      4.9 <span className="font-normal text-gray-600">(128 reviews)</span>
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">Trusted by 200+ organizations</p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2 z-10">
              <div className="relative">
                <div className="absolute -bottom-6 -left-6 w-full h-full rounded-2xl border-2 border-primary/20 -z-10"></div>
                <div className="grid grid-cols-2 gap-5">
                  <div className="relative rounded-xl overflow-hidden h-72 bg-gradient-to-br from-primary to-secondary shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-white text-center">
                        <i className="fas fa-lightbulb text-5xl mb-4"></i>
                        <h3 className="font-bold text-xl">Innovative Strategies</h3>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden h-56 bg-gradient-to-br from-secondary to-accent shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-white text-center">
                        <i className="fas fa-chart-line text-5xl mb-4"></i>
                        <h3 className="font-bold text-xl">Growth Analytics</h3>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden h-56 bg-gradient-to-br from-accent to-primary shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-primary text-center">
                        <i className="fas fa-users text-5xl mb-4"></i>
                        <h3 className="font-bold  text-xl">Team Building</h3>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                  <div className="relative rounded-xl overflow-hidden h-72 bg-gradient-to-br from-primary to-accent shadow-lg">
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="text-white text-center">
                        <i className="fas fa-bullseye text-5xl mb-4"></i>
                        <h3 className="font-bold text-xl">Precision Solutions</h3>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
            </section>
      
     

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-[rgba(138,219,227,0.1)] to-[rgba(138,219,227,0.05)] rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="bg-gradient-to-br from-[rgba(138,219,227,0.1)] to-[rgba(138,219,227,0.05)] rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">250+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-gradient-to-br from-[rgba(138,219,227,0.1)] to-[rgba(138,219,227,0.05)] rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="bg-gradient-to-br from-[rgba(138,219,227,0.1)] to-[rgba(138,219,227,0.05)] rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-gray-600">Expert Team</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Why Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <div className="bg-gray-200 border-2 border-dashed rounded-xl w-full h-96 flex items-center justify-center text-gray-500">
                  <i className="fas fa-globe-africa text-7xl opacity-30"></i>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Purpose</span>
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Despite substantial efforts by the government, development partners, civil society organizations (CSOs), and the private sector, critical gaps persist in delivering high-quality Business Development Services (BDS), research, and capacity-building programs.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                These gaps hinder sustainable growth and the potential for meaningful, system-level impact. Biruhminds Consult, PLC is an independent Business Development Services (BDS) training and research provider based in Addis Ababa, Ethiopia.
              </p>
              <div className="mt-8">
                <div className="flex items-start mb-6">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <i className="fas fa-check text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Evidence-Based Solutions</h3>
                    <p className="text-gray-600">We bridge gaps with research-backed strategies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary rounded-full p-2 mr-4">
                    <i className="fas fa-check text-white"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Sustainable Impact</h3>
                    <p className="text-gray-600">Creating long-term solutions for economic challenges</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Services Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/4 h-full bg-gradient-to-b from-primary/5 to-transparent -translate-x-1/3 -translate-y-1/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-full bg-gradient-to-t from-secondary/5 to-transparent translate-x-1/3 translate-y-1/3 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full font-medium mb-6 text-sm uppercase tracking-wider">
              Our Expertise
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming{' '}
              <span className="relative inline-block">
                <span className="relative z-10">Ideas</span>
                <span className="absolute bottom-0 left-0 w-full h-3 bg-secondary/30 -rotate-1 z-0"></span>
              </span>{' '}
              Into Impact
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We bridge innovation and implementation through our multidisciplinary approach to development challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Service 1 - Interactive Panel */}
            <div className="relative group h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/20 backdrop-blur-sm"></div>
              <div className="relative z-10 h-full flex flex-col p-10">
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/90 shadow-lg flex items-center justify-center text-primary text-3xl mb-6">
                    <i className="fas fa-chart-line"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Business Development</h3>
                  <div className="w-16 h-1 bg-secondary mb-6"></div>
                </div>
                <p className="text-gray-700 text-lg mb-8 flex-grow">
                  Empowering Ethiopia's entrepreneurial ecosystem through tailored growth strategies, investment readiness programs, and market access solutions.
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-primary font-semibold text-lg group">
                    <span className="mr-3">Explore solutions</span>
                    <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply"></div>
            </div>

            {/* Service 2 - Interactive Panel */}
            <div className="relative group h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-secondary/20 backdrop-blur-sm"></div>
              <div className="relative z-10 h-full flex flex-col p-10">
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/90 shadow-lg flex items-center justify-center text-secondary text-3xl mb-6">
                    <i className="fas fa-graduation-cap"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Capacity Building</h3>
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                </div>
                <p className="text-gray-700 text-lg mb-8 flex-grow">
                  Transformative training programs that equip professionals and organizations with cutting-edge skills for Ethiopia's evolving development landscape.
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-secondary font-semibold text-lg group">
                    <span className="mr-3">View programs</span>
                    <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply"></div>
            </div>

            {/* Service 3 - Interactive Panel */}
            <div className="relative group h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-accent/20 backdrop-blur-sm"></div>
              <div className="relative z-10 h-full flex flex-col p-10">
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/90 shadow-lg flex items-center justify-center text-accent text-3xl mb-6">
                    <i className="fas fa-search"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Research & Insights</h3>
                  <div className="w-16 h-1 bg-primary mb-6"></div>
                </div>
                <p className="text-gray-700 text-lg mb-8 flex-grow">
                  Groundbreaking research methodologies that generate actionable intelligence for policy formulation and program design.
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-accent font-semibold text-lg group">
                    <span className="mr-3">Discover insights</span>
                    <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply"></div>
            </div>

            {/* Service 4 - Interactive Panel */}
            <div className="relative group h-full min-h-[400px] rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/20 backdrop-blur-sm"></div>
              <div className="relative z-10 h-full flex flex-col p-10">
                <div className="mb-8">
                  <div className="w-20 h-20 rounded-2xl bg-white/90 shadow-lg flex items-center justify-center text-primary text-3xl mb-6">
                    <i className="fas fa-hand-holding-usd"></i>
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">Financial Inclusion</h3>
                  <div className="w-16 h-1 bg-accent mb-6"></div>
                </div>
                <p className="text-gray-700 text-lg mb-8 flex-grow">
                  Innovative financial solutions that empower SMEs and entrepreneurs to access capital and build sustainable businesses.
                </p>
                <div className="mt-auto">
                  <a href="#" className="inline-flex items-center text-primary font-semibold text-lg group">
                    <span className="mr-3">Learn about Liyu Mikleta</span>
                    <span className="inline-block group-hover:translate-x-2 transition-transform duration-300">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-multiply"></div>
            </div>
          </div>

          <div className="mt-20 text-center">
            <a
              href="#"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 group"
            >
              <span className="mr-3">View All Service Offerings</span>
              <span className="inline-block group-hover:rotate-45 transition-transform duration-300">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 4V20M12 20L20 12M12 20L4 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Creative Approach Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 right-0 w-1/3 h-1/3 bg-secondary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <span className="inline-block px-5 py-2 bg-primary/10 text-primary rounded-full font-medium mb-6 text-sm uppercase tracking-wider">
              Our Methodology
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              The Biruhminds{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Difference</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              We combine global best practices with localized expertise to create transformative solutions for Ethiopia's development challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 - Animated Card */}
            <div className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-3xl mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <i className="fas fa-lightbulb"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Innovative Solutions</h3>
                <p className="text-gray-600 mb-6">We deliver cutting-edge approaches to complex challenges through creative problem-solving.</p>
                <div className="mt-auto">
                  <div className="w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Feature 2 - Animated Card */}
            <div className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-3xl mb-6 transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                  <i className="fas fa-users"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Collaborative Process</h3>
                <p className="text-gray-600 mb-6">Co-creating solutions with stakeholders for sustainable, community-driven results.</p>
                <div className="mt-auto">
                  <div className="w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Feature 3 - Animated Card */}
            <div className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-3xl mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Measurable Impact</h3>
                <p className="text-gray-600 mb-6">Data-driven frameworks that track outcomes and enable continuous improvement.</p>
                <div className="mt-auto">
                  <div className="w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Feature 4 - Animated Card */}
            <div className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary text-3xl mb-6 transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                  <i className="fas fa-globe-africa"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Local Expertise</h3>
                <p className="text-gray-600 mb-6">Deep contextual understanding of Ethiopia's unique socio-economic landscape.</p>
                <div className="mt-auto">
                  <div className="w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Feature 5 - Animated Card */}
            <div className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary text-3xl mb-6 transition-all duration-300 group-hover:bg-secondary group-hover:text-white">
                  <i className="fas fa-handshake"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Partnership Focus</h3>
                <p className="text-gray-600 mb-6">Building strategic alliances for scalable, long-term development impact.</p>
                <div className="mt-auto">
                  <div className="w-full h-1 bg-gradient-to-r from-secondary to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Feature 6 - Animated Card */}
            <div className="group relative h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-3xl mb-6 transition-all duration-300 group-hover:bg-accent group-hover:text-white">
                  <i className="fas fa-balance-scale"></i>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ethical Standards</h3>
                <p className="text-gray-600 mb-6">Uncompromising commitment to integrity and social responsibility.</p>
                <div className="mt-auto">
                  <div className="w-full h-1 bg-gradient-to-r from-accent to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     </>
        );
      };
      
      export default Home;