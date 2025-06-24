import React from 'react';

const LiyuMilketa = () => {
  return (
    <>
      {/* Hero Section with Amharic Design Elements */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary to-secondary text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-white opacity-20 mix-blend-overlay animate-float"></div>
          <div
            className="absolute bottom-20 right-20 w-64 h-64 rounded-full bg-white opacity-20 mix-blend-overlay animate-float"
            style={{ animationDelay: '2s' }}
          ></div>
        </div>
        {/* Amharic pattern overlay */}
        <div
          className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxkZWZzPjxwYXR0ZXJuIGlkPSJwYXR0ZXJuIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHBhdHRlcm5UcmFuc2Zvcm09InJvdGF0ZSg0NSkiPjxyZWN0IHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIj48L3JlY3Q+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIj48L3JlY3Q+PC9zdmc+')]"
        ></div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="inline-block">Liyu Milketa</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8">
            Focused policy discussions addressing one specific issue at a time
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#apply"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Apply for Upcoming Event <i className="fas fa-arrow-right ml-2"></i>
            </a>
            <a
              href="#about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition"
            >
              <i className="fas fa-info-circle mr-2"></i> Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <div className="bg-dark text-white py-8 shadow-lg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4">
              <div className="text-3xl font-bold mb-2 text-accent">24+</div>
              <div className="text-sm uppercase tracking-wider">Policy Forums</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2 text-accent">500+</div>
              <div className="text-sm uppercase tracking-wider">Participants</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2 text-accent">15+</div>
              <div className="text-sm uppercase tracking-wider">Policy Areas</div>
            </div>
            <div className="p-4">
              <div className="text-3xl font-bold mb-2 text-accent">80%</div>
              <div className="text-sm uppercase tracking-wider">Action Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 relative">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                  alt="Policy discussion"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-accent text-white p-6 rounded-lg shadow-lg w-3/4">
                <div className="flex items-center">
                  <div className="text-3xl mr-4">
                    <i className="fas fa-quote-left"></i>
                  </div>
                  <div>
                    <p className="font-medium">"Liyu Milketa has transformed how we approach policy discussions in Ethiopia."</p>
                    <div className="text-sm mt-2">- Ministry Official</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">About Us</span>
              <h2 className="text-4xl font-bold text-dark mb-6">Liyu Milketa: Focused Policy Dialogue</h2>
              <p className="text-gray-600 mb-8">
                Our "Special Focus" forums bring together key stakeholders to address specific policy challenges through structured dialogue, evidence-based discussions, and actionable outcomes.
              </p>

              <div className="space-y-6">
                <div className="flex items-start p-4 bg-gray-50 rounded-lg border-l-4 border-primary">
                  <div className="bg-primary/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <i className="fas fa-bullseye text-primary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-dark mb-2">Our Mission</h3>
                    <p className="text-gray-600">
                      To strengthen policy advocacy for decent job creation programming in Ethiopia through targeted, issue-specific dialogues.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg border-l-4 border-secondary">
                  <div className="bg-secondary/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <i className="fas fa-handshake text-secondary text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-dark mb-2">Our Approach</h3>
                    <p className="text-gray-600">
                      We facilitate multi-stakeholder dialogues that persuade partners and enhance the entrepreneurial ecosystem to strengthen and promote the growth of start-ups and SMEs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start p-4 bg-gray-50 rounded-lg border-l-4 border-accent">
                  <div className="bg-accent/10 p-3 rounded-full mr-4 flex-shrink-0">
                    <i className="fas fa-network-wired text-accent text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl text-dark mb-2">Our Network</h3>
                    <p className="text-gray-600">
                      We foster business-to-business connections and strategic alliances between participants that extend beyond the forum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Participants Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">Engagement</span>
            <h2 className="text-4xl font-bold text-dark mb-4">Who Joins Our Dialogues</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring together diverse stakeholders for impactful policy discussions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Participant 1 */}
            <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-primary to-accent"></div>
              <div className="p-8 text-center">
                <div className="bg-primary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-primary text-2xl">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Policy Makers</h3>
                <p className="text-gray-600 mb-6">
                  Government officials and decision makers looking to shape effective policies based on multi-stakeholder input.
                </p>
                <div className="text-sm text-primary font-medium">Typical Participants:</div>
                <div className="text-sm text-gray-500 mt-2">Ministers, Agency Heads, Regional Officials</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Participant 2 */}
            <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-accent to-secondary"></div>
              <div className="p-8 text-center">
                <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-accent text-2xl">
                  <i className="fas fa-building"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Business Leaders</h3>
                <p className="text-gray-600 mb-6">
                  Entrepreneurs and SME owners who provide ground-level insights and seek growth-enabling policies.
                </p>
                <div className="text-sm text-primary font-medium">Typical Participants:</div>
                <div className="text-sm text-gray-500 mt-2">CEOs, Industry Associations, Startup Founders</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>

            {/* Participant 3 */}
            <div className="group relative bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
              <div className="h-3 bg-gradient-to-r from-secondary to-primary"></div>
              <div className="p-8 text-center">
                <div className="bg-secondary/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary text-2xl">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="text-xl font-semibold mb-3">Development Partners</h3>
                <p className="text-gray-600 mb-6">
                  NGOs and international organizations that bring global perspectives to local policy challenges.
                </p>
                <div className="text-sm text-primary font-medium">Typical Participants:</div>
                <div className="text-sm text-gray-500 mt-2">UN Agencies, Donors, Implementation Partners</div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 bg-white" id="apply">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">Next Event</span>
              <h2 className="text-4xl font-bold text-dark mb-4">Upcoming Liyu Milketa Forum</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">Join our next focused policy dialogue session</p>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-6">
                <div className="flex-1">
                  <div className="flex items-center mb-4">
                    <div className="bg-primary text-white p-2 rounded-lg mr-4">
                      <i className="fas fa-calendar-day text-xl"></i>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-dark">Youth Entrepreneurship Policy Review</h3>
                      <div className="text-gray-600 mt-2">
                        <span className="inline-block mr-4">
                          <i className="far fa-calendar-alt mr-2"></i> Mar 21, 2080
                        </span>
                        <span className="inline-block">
                          <i className="far fa-clock mr-2"></i> 8:00 AM - 1:00 PM
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-4 rounded-lg border border-gray-200">
                    <h4 className="font-semibold text-lg mb-3 flex items-center">
                      <i className="fas fa-map-marker-alt text-primary mr-2"></i> Location
                    </h4>
                    <p className="text-gray-600">
                      Sheraton Addis, Ethiopia
                      <br />
                      <span className="text-sm text-primary">Hybrid event (in-person and virtual options)</span>
                    </p>
                  </div>
                </div>
                <a
                  href="#registration"
                  className="bg-primary hover:bg-secondary text-white px-8 py-4 rounded-full font-medium shadow-lg hover:shadow-xl transition whitespace-nowrap"
                >
                  <i className="fas fa-user-plus mr-2"></i> Register Now
                </a>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <i className="fas fa-bullhorn text-primary mr-2"></i> Discussion Focus
                  </h4>
                  <p className="text-gray-600 mb-4">
                    This session will examine current policies affecting youth entrepreneurship in Ethiopia, identifying barriers and opportunities for reform to foster greater youth participation in the economy.
                  </p>
                  <ul className="list-disc pl-5 space-y-2 text-gray-600">
                    <li>Review of existing youth entrepreneurship policies</li>
                    <li>Case studies from successful programs</li>
                    <li>Barriers to youth business creation</li>
                    <li>Recommendations for policy improvement</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <i className="fas fa-users text-primary mr-2"></i> Expected Outcomes
                  </h4>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4 flex-shrink-0">
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <span className="text-gray-600">Policy brief with concrete recommendations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4 flex-shrink-0">
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <span className="text-gray-600">Working group formation for implementation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4 flex-shrink-0">
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <span className="text-gray-600">Commitments from key stakeholders</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/10 p-2 rounded-full mr-4 flex-shrink-0">
                        <i className="fas fa-check text-primary"></i>
                      </div>
                      <span className="text-gray-600">Follow-up action plan</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* <div className="bg-primary/5 p-6 rounded-lg border border-primary/20 mb-8">
                <h4 className="font-semibold text-lg mb-3 text-primary">Featured Speakers</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-2 overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/women/65.jpg"
                        alt="Speaker"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-medium">Dr. Selamawit</div>
                    <div className="text-xs text-gray-600">Ministry of Youth</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-2 overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Speaker"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-medium">Mr. Daniel</div>
                    <div className="text-xs text-gray-600">UNDP Ethiopia</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-2 overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Speaker"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-medium">Ms. Tigist</div>
                    <div className="text-xs text-gray-600">Youth Business Owner</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full bg-gray-200 mx-auto mb-2 overflow-hidden">
                      <img
                        src="https://randomuser.me/api/portraits/men/75.jpg"
                        alt="Speaker"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-sm font-medium">Prof. Alemayehu</div>
                    <div className="text-xs text-gray-600">Addis Ababa University</div>
                  </div>
                </div>
              </div>
*/}
              <form className="space-y-6" id="registration">
                <h3 className="text-2xl font-bold text-dark mb-6 text-center">Registration Form</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">
                      Organization <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium">Position/Role</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">Attendance Mode</label>
                  <div className="flex flex-wrap gap-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="attendance" defaultChecked className="text-primary focus:ring-primary" />
                      <span className="ml-2">In-Person</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="attendance" className="text-primary focus:ring-primary" />
                      <span className="ml-2">Virtual</span>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 font-medium">
                    Why do you want to participate? <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input type="checkbox" required className="rounded text-primary focus:ring-primary" />
                  <span className="ml-2 text-gray-600">
                    I agree to the <a href="#" className="text-primary hover:underline">terms and conditions</a>
                  </span>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white px-8 py-4 rounded-lg font-medium shadow-md hover:shadow-lg transition flex items-center justify-center"
                >
                  <i className="fas fa-paper-plane mr-2"></i> Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full mb-4">Impact</span>
            <h2 className="text-4xl font-bold text-dark mb-4">Past Liyu Milketa Forums</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">See the tangible outcomes from our previous policy dialogues</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event 1 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition h-64">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Past event"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Women in Business</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <i className="far fa-calendar-alt mr-1"></i> Jan 15, 2080
                </p>
                <p className="text-gray-200 text-sm line-clamp-2">
                  Policy recommendations led to 3 new support programs for women entrepreneurs across 4 regions.
                </p>
              </div>
            </div>

            {/* Event 2 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition h-64">
              <img
                src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Past event"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Digital Economy</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <i className="far fa-calendar-alt mr-1"></i> Nov 30, 2079
                </p>
                <p className="text-gray-200 text-sm line-clamp-2">
                  Framework developed for regulating and supporting Ethiopia's growing digital startups.
                </p>
              </div>
            </div>

            {/* Event 3 */}
            <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition h-64">
              <img
                src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Past event"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-2">Agricultural Innovation</h3>
                <p className="text-gray-300 text-sm mb-2">
                  <i className="far fa-calendar-alt mr-1"></i> Sep 5, 2079
                </p>
                <p className="text-gray-200 text-sm line-clamp-2">
                  Policy changes implemented to support agri-tech startups and modern farming techniques.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="#"
              className="inline-flex items-center px-6 py-3 border border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition"
            >
              View All Past Events
              <i className="fas fa-chevron-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Influence Policy?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Join our next Liyu Milketa forum and contribute to shaping Ethiopia's economic future.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#apply"
              className="bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition shadow-lg hover:shadow-xl"
            >
              Register Now
            </a>
            <a
              href="#"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary transition"
            >
              <i className="fas fa-envelope mr-2"></i> Contact Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default LiyuMilketa;
