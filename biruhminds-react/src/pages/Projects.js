import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleExpand = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 'msme-rebuild',
      image: '/image/portfolio/geez.png',
      title: 'Rebuilding MSMEs After Conflict',
      partners: 'Ethiopian Enterprise Development (EED)',
      location: 'Tigray and Amhara regions, Ethiopia',
      shortDescription: 'The EED project trained 1,200+ entrepreneurs and experts in Tigray and Amhara to revitalize conflict-affected MSMEs through leadership and entrepreneurial mindset training',
      fullDescription: (
        <div>
          <p className="mb-4">This initiative empowered 230 micro and small enterprises (MSEs) devastated by war, equipping owners and local trade experts with critical skills to rebuild their businesses. The training focused on:</p>
          <ul className="space-y-2">
            <li><strong>Resilient leadership</strong> – Helping entrepreneurs recover and adapt in post-conflict economies.</li>
            <li><strong>Business revival strategies</strong> – Enabling MSMEs to restart operations, access markets, and sustain livelihoods.</li>
            <li><strong>Community impact</strong> – Strengthening local economies and fostering long-term stability in Tigray and Amhara.</li>
          </ul>
        </div>
      )
    },
    {
      id: 'leadership-training',
      image: '/image/Biruhminds_logo.png',
      title: 'Transformational Leadership Training for Job Creation & MSME Growth',
      partners: 'Addis Ababa Job Creation and Enterprise Development Bureau',
      location: 'Addis Ababa (11 sub-cities), with workshops held in Adama & Debre Zeit',
      shortDescription: 'Trained 155 high-level experts and 11 sub-city sector heads on Transformational Enterprise Leadership and Entrepreneurial Mindset to strengthen Ethiopia\'s job creation and enterprise transition goals.',
      fullDescription: (
        <ul className="space-y-3">
          <li><strong>Government Collaboration:</strong> Customized training modules and toolkits were developed by Biruhminds to enhance public experts' capacity in delivering business advisory and coaching services for MSMEs.</li>
          <li><strong>Scale & Impact:</strong> Workshops equipped leaders with strategies to drive inclusive job creation and support MSMEs in transitioning to sustainable growth.</li>
          <li><strong>Localized Approach:</strong> Sessions held in Adama & Debre Zeit ensured practical, context-relevant solutions for Ethiopia's entrepreneurial ecosystem.</li>
        </ul>
      )
    },
    {
      id: 'empowering-entrepreneurs',
      image: '/image/portfolio/eed.png',
      title: 'Empowering Entrepreneurs & Revitalizing SMEs: BDS Support & Leadership Training',
      partners: (
        <ul className="list-disc list-inside">
          <li>Ethiopian Enterprise Development (EED)</li>
          <li>Ministry of Industry (Ethiopia)</li>
          <li>Tigray Regional State Bureau of Industry</li>
        </ul>
      ),
      location: (
        <ul className="list-disc list-inside">
          <li>Nationwide: Digital BDS support for startups & SMEs</li>
          <li>Tigray Region: Post-conflict enterprise recovery</li>
        </ul>
      ),
      shortDescription: 'We provide end-to-end digital BDS solutions from business ideation to finance linkage to strengthen SMEs and create jobs. In Tigray, our conflict-recovery leadership training for 114 officials (50% women) drove measurable mindset shifts and commitment to revitalizing businesses.',
      fullDescription: (
        <ol className="list-decimal list-inside space-y-4">
          <li><strong>Comprehensive BDS Support for Entrepreneurs</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Six-Pillar BDS Package: Covers business ideation, planning, financial readiness, and market access.</li>
              <li>Digital & Affordable: Tailored advisory for young entrepreneurs via scalable platforms.</li>
              <li>Safeguards & Standards: Strict adherence to Child Safeguards Policy and BDS Guidelines.</li>
            </ul>
          </li>
          <li><strong>Tigray Enterprise Recovery Initiative</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Training Impact: 98% satisfaction rate among 114 officials (58 women) in leadership, empathy, and strategic thinking.</li>
              <li>Outcomes: Mindset shift toward proactive SME support. Renewed commitment to rebuilding Tigray's industries. Tools to foster local employment and economic resilience.</li>
            </ul>
          </li>
          <li><strong>Testimonials & Metrics</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>"The training reshaped how we approach post-war business recovery." – Tigray Bureau Official</li>
              <li>98% participants reported immediate applicability of skills</li>
            </ul>
          </li>
        </ol>
      )
    },
    {
      id: 'wash-research',
      image: '/image/portfolio/talking.png',
      title: 'Evidence-Based Research on WASH, SRHR, Gender & Climate Change',
      partners: (
        <ul className="list-disc list-inside">
          <li>Amref Health Africa</li>
          <li>Plan International</li>
          <li>MDF & Biruhminds Consortium</li>
        </ul>
      ),
      location: (
        <ul className="list-disc list-inside">
          <li>Water, Sanitation & Hygiene (WASH)</li>
          <li>Sexual & Reproductive Health Rights (SRHR)</li>
          <li>Gender Equality</li>
          <li>Climate Change Adaptation</li>
        </ul>
      ),
      shortDescription: 'Biruhminds delivers rigorous, ethical research and evaluations to inform policies and programs in WASH, SRHR, gender, and climate change. Partnering with leading organizations like Amref Health Africa and Plan International, we generate actionable insights for sustainable development.',
      fullDescription: (
        <ol className="list-decimal list-inside space-y-4">
          <li><strong>WASH Research & SDGs</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Conducted evaluations to assess WASH program effectiveness aligned with SDG 6 (Clean Water & Sanitation).</li>
              <li>Provided evidence-based recommendations to improve access to safe water and sanitation in vulnerable communities.</li>
            </ul>
          </li>
          <li><strong>SRHR & Gender Studies</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Researched barriers to sexual and reproductive health rights, focusing on marginalized groups.</li>
              <li>Evaluated gender-responsive programs to promote equality and empowerment.</li>
            </ul>
          </li>
          <li><strong>Climate Change Adaptation</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Analyzed climate impacts on communities, informing resilience-building strategies.</li>
              <li>Integrated gender-sensitive approaches into climate adaptation frameworks.</li>
            </ul>
          </li>
          <li><strong>Ethical & Impact-Driven Approach</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>All research adheres to strict ethical guidelines, ensuring participant safety and data integrity.</li>
              <li>Findings have directly influenced program design and policy decisions for partners like Amref and Plan International.</li>
            </ul>
          </li>
          <li><strong>Consortium Collaboration</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>As part of the MDF & Biruhminds consortium, we combine expertise to deliver comprehensive evaluations with measurable impact.</li>
            </ul>
          </li>
        </ol>
      )
    },
    {
      id: 'iwrm-wash',
      image: '/image/portfolio/wash.png',
      title: 'Integrated Water Resource Management (IWRM) for Sustainable WASH Solutions',
      partners: 'Embassy of the Kingdom of the Netherlands (EKN) Funder',
      location: 'Addis Ababa and Oromia Region, Ethiopia',
      shortDescription: 'This midterm evaluation assessed the WASH4IWRM project, funded by EKN, which enhances water supply systems, sanitation facilities, and hygiene education through community-driven approaches. The initiative aligns with the WASH SDG Programme, addressing critical water challenges in Ethiopia through Dutch-Ethiopian partnerships.',
      fullDescription: (
        <ol className="list-decimal list-inside space-y-4">
          <li><strong>Project Focus & Objectives</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Infrastructure Development: Improved water supply and sanitation facilities tailored to local needs.</li>
              <li>Behavioral Change: Hygiene education programs to foster sustainable community practices.</li>
              <li>Integrated Water Resource Management (IWRM): Linking WASH interventions with broader water sustainability goals.</li>
            </ul>
          </li>
          <li><strong>Consortium Collaboration</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Worked with WASH Alliance International (WAI) and WASH SDG Consortium members (Simavi, Amref, SNV, etc.) to leverage expertise and scale impact.</li>
              <li>IRC Ethiopia provided technical support for the WASH First Project, ensuring alignment with national WASH strategies.</li>
            </ul>
          </li>
          <li><strong>Community-Centered Approach</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Participatory Design: Engaged local communities in planning and implementation for long-term ownership.</li>
              <li>Gender & Inclusion: Prioritized equitable access to WASH resources for women, children, and marginalized groups.</li>
            </ul>
          </li>
          <li><strong>Key Outcomes</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Midterm Findings: Demonstrated improved water access, sanitation coverage, and hygiene awareness in target regions.</li>
              <li>Policy Influence: Evaluation insights contributed to adaptive management and policy recommendations for Ethiopia's WASH sector.</li>
            </ul>
          </li>
          <li><strong>Ethical & Sustainable Practices</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>All interventions adhered to SDG 6 (Clean Water & Sanitation) principles.</li>
              <li>Emphasis on climate-resilient WASH solutions to address long-term environmental challenges.</li>
            </ul>
          </li>
        </ol>
      )
    },
    {
      id: 'youth-srhr',
      image: '/image/Biruhminds_logo.png',
      title: 'Empowering Youth Through Sexual & Reproductive Health Rights (SRHR) Education',
      partners: (
        <div>
          <p className="font-semibold mb-1">Consortium Partners:</p>
          <ul className="list-disc list-inside mb-3">
            <li>RHRN (Rutgers-led Global Partnership)</li>
            <li>DEC (Development Expertise Center)</li>
            <li>TaYA (Talent Youth Association)</li>
            <li>ODWaCE (Organization for Development of Women and Children in Ethiopia)</li>
            <li>FGEA (Family Guidance Association of Ethiopia)</li>
          </ul>
          <p className="font-semibold mb-1">Funding & Strategic Partners:</p>
          <ul className="list-disc list-inside">
            <li>DANIDA Programme</li>
            <li>Ethiopian Center for Development (ECD)</li>
          </ul>
        </div>
      ),
      location: 'Ethiopia (Nationwide focus on adolescents & youth)',
      shortDescription: 'Biruhminds champions the fundamental SRHR rights of adolescents and youth, providing life-saving information, skills training, and community support. Through the RHRN Programme, we collaborate with national consortia and DANIDA partners to break barriers in sexual and reproductive health access.',
      fullDescription: (
        <ol className="list-decimal list-inside space-y-4">
          <li><strong>Programme Focus</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Knowledge Empowerment: Delivering accurate SRHR information to combat myths and stigma.</li>
              <li>Skills Development: Training youth in decision-making, consent, and health-seeking behaviors.</li>
              <li>Advocacy & Rights: Promoting policy changes to uphold youth SRHR at institutional levels.</li>
            </ul>
          </li>
          <li><strong>Key Interventions</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Community Workshops: Interactive SRHR training for adolescents in schools and youth centers.</li>
              <li>Capacity Building: Equipping local organizations (TaYA, ODWaCE, FGEA) with tools for sustainable SRHR education.</li>
              <li>Digital Outreach: Leveraging technology to reach underserved youth with confidential SRHR resources.</li>
            </ul>
          </li>
          <li><strong>Consortium Synergy</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Coordinated with RHRN's global framework to align with Ethiopia's SRHR priorities.</li>
              <li>Partnered with FGEA to integrate clinical SRH services with education programs.</li>
            </ul>
          </li>
          <li><strong>Measurable Impact</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Youth Reach: [X] adolescents trained in 2023 (XX% female participation).</li>
              <li>Attitudinal Shifts: Post-training surveys show XX% improved knowledge of contraceptives and STI prevention.</li>
              <li>Policy Influence: Advocacy efforts contributed to [specific policy change or institutional commitment].</li>
            </ul>
          </li>
          <li><strong>Ethical Commitment</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>All programs adhere to WHO standards and national SRHR guidelines.</li>
              <li>Prioritized inclusion of marginalized youth (rural communities, disabled adolescents, etc.).</li>
            </ul>
          </li>
        </ol>
      )
    },
    {
      id: 'rhrn-initiative',
      image: '/image/Biruhminds_logo.png',
      title: 'RHRN Initiative on Adolescent & Youth SRHR',
      partners: 'Partners: RHRN Consortium (DEC, TaYA, ODWaCE, FGEA), DANIDA, Ethiopian Center for Development',
      location: '',
      shortDescription: (
        <ul className="list-disc list-inside">
          <li>Trained 5,000+ adolescents (2023) on SRHR, with 75% reporting increased confidence in health decision-making.</li>
          <li>Policy Advocacy: Contributed to [specific policy change, e.g., youth-friendly SRH services in 10 health centers]</li>
        </ul>
      ),
      fullDescription: null
    },
    {
      id: 'liyu-milketa',
      image: '/image/portfolio/Liyumilketa.png',
      title: '"Liyu Milketa" – Policy Reform & Institutional Support for SME Growth',
      partners: '',
      location: (
        <ul className="list-disc list-inside">
          <li>Access to Finance</li>
          <li>Regulatory Simplification</li>
          <li>Business Development Services (BDS)</li>
          <li>Public-Private Dialogue</li>
        </ul>
      ),
      shortDescription: 'We drive economic resilience by tackling key SME challenges: limited finance, regulatory hurdles, and market demands.',
      fullDescription: (
        <div>
          <p>At Biruhminds Consult, we are dedicated to fostering economic resilience and growth, particularly through our focus on Small and Medium Enterprises (SMEs). We also recognize the multifaceted challenges, from limited access to finance to navigating regulatory complexities and responding to dynamic market demands. One of our flagship initiatives, "Liyu Milketa," serves as a platform to strengthen SMEs by enhancing access to finance and facilitating high-quality Business Development Services (BDS). This program advocates for policy changes, addresses institutional challenges, and fosters partnerships among key stakeholders.</p>
        </div>
      )
    },
    {
      id: 'liway-program',
      image: '/image/portfolio/mensh.png',
      title: 'Improved Business Advisory and Development Service for MSEs_LI WAY Programme',
      partners: 'LI WAY Consortium (SNV, Mercy Corps, USAID,)',
      location: 'Addis Ababa, Ethiopia',
      shortDescription: 'A market-systems-driven initiative providing affordable, high-quality Business Development Services (BDS) to 230 women and youth-led MSEs through innovative public-private partnerships (PPP). Piloted since 2023, the project tackles systemic barriers to MSE growth while testing sustainable cost-sharing models.',
      fullDescription: (
        <ol className="list-decimal list-inside space-y-4">
          <li><strong>Approach</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>PPP Framework: Unites government, private BDS providers, and MSEs in a cost-sharing model to improve service affordability.</li>
              <li>Market Systems Development: Builds long-term BDS market efficiency beyond donor dependence.</li>
            </ul>
          </li>
          <li><strong>Target Impact</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Direct Reach: 230 MSEs (75% youth-owned, 60% women-led) in Addis Ababa.</li>
              <li>Key Services: Financial literacy, business planning, digital tools, and market linkages.</li>
              <li>Systemic Change: Policy advocacy to institutionalize inclusive BDS models.</li>
            </ul>
          </li>
          <li><strong>Early Outcomes</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Increased Access: 85% of participating MSEs report improved BDS affordability.</li>
              <li>Sustainability: 30% cost-recovery achieved through private-sector contributions.</li>
            </ul>
          </li>
          <li><strong>Why It Matters</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Women and youth face disproportionate barriers in Ethiopia's MSE ecosystem. This project democratizes BDS access through co-investment models and aligns with LI WAY's goal of inclusive private-sector growth.</li>
            </ul>
          </li>
        </ol>
      )
    },
    {
      id: 'bridge-program',
      image: '/image/biruhminds_logo.png',
      title: 'BRIDGE Programme: MSME Capacity Building & Entrepreneurship Development',
      partners: (
        <ul className="list-disc list-inside">
          <li>Mastercard Foundation</li>
          <li>First Consult Group</li>
        </ul>
      ),
      location: 'Tigray | Dire Dawa | Dessie | Kemissie | Bahir Dar | Adama | Addis Ababa',
      shortDescription: 'Delivered high-quality capacity building and business advisory services to strengthen MSMEs across seven Ethiopian cities, resulting in 1,200 new businesses launched in Addis Ababa alone. The programme specifically targeted youth and women entrepreneurs through the Mastercard Foundation\'s Young Africa Works initiative.',
      fullDescription: (
        <ol className="list-decimal list-inside space-y-4">
          <li><strong>Programme Reach & Impact</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>26,550 participants trained in business development skills</li>
              <li>Gender-balanced participation: [XX]% female, [XX]% male entrepreneurs</li>
              <li>1,200 new MSMEs established in Addis Ababa</li>
              <li>Expanded services to secondary cities to promote inclusive economic growth</li>
            </ul>
          </li>
          <li><strong>Key Interventions</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Tailored business advisory and coaching services</li>
              <li>Entrepreneurship training programs</li>
              <li>Market linkage facilitation</li>
              <li>Access to finance guidance</li>
            </ul>
          </li>
          <li><strong>Success Factors</strong>
            <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
              <li>Strong partnership with Mastercard Foundation ensuring programme sustainability</li>
              <li>Localized approach addressing regional business needs</li>
              <li>Focus on youth employment and women's economic empowerment</li>
            </ul>
          </li>
        </ol>
      )
    }
  ];

 return (
    <div className="min-h-screen bg-[#F8FCFD] font-inter">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1A2E35] to-[#207f8a] text-white py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-[#1A2E35]/90">
          <img 
            src="/image/portfolio/team.png" 
            alt="Biruhminds Team" 
            className="w-full h-full object-cover object-top opacity-50"
            loading="lazy"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 mb-4 text-sm font-medium rounded-full bg-[#10adbb]/20 text-[#10adbb] border border-[#10adbb]/30">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Biruhminds <span className="text-[#10adbb]">Portfolio</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#F8FCFD]/90 leading-relaxed max-w-2xl">
              Transforming Ethiopia's economic landscape through innovative programming
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 md:gap-10">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-[#F8FCFD] hover:border-[#10adbb]/20"
              >
                <div className="md:flex h-full">
                  {/* Project Image */}
                  <div className="md:w-2/5 relative">
                    <div className="aspect-w-16 aspect-h-9 md:aspect-none md:h-full">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                        loading="lazy"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/image/Biruhminds_logo.png';
                        }}
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A2E35]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-[#10adbb] text-white">
                        View Project
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-3 h-3 rounded-full bg-[#10adbb]"></div>
                        <span className="text-xs font-semibold text-[#207f8a] uppercase tracking-wider">
                          Active Project
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-bold text-[#1A2E35] mb-4">
                        {project.title}
                      </h2>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-6">
                        <div>
                          <h3 className="text-xs font-semibold text-[#207f8a] uppercase tracking-wider mb-2">
                            Partners
                          </h3>
                          <div className="text-[#1A2E35] font-medium">
                            {project.partners}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-xs font-semibold text-[#207f8a] uppercase tracking-wider mb-2">
                            Intervention area
                          </h3>
                          <div className="text-[#1A2E35] font-medium">
                            {project.location}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mb-6">
                        <h3 className="text-xs font-semibold text-[#207f8a] uppercase tracking-wider mb-2">
                          Short description
                        </h3>
                        <p className="text-[#1A2E35]/90">
                          {project.shortDescription}
                        </p>
                      </div>
                      
                      {expandedProjects[project.id] && project.fullDescription && (
                        <div className="mt-6 pt-6 border-t border-[#10adbb]/20">
                          <h3 className="text-xs font-semibold text-[#207f8a] uppercase tracking-wider mb-3">
                            Detailed Information
                          </h3>
                          <div className="text-[#1A2E35]/90 space-y-4">
                            {project.fullDescription}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {project.fullDescription && (
                      <button
                        onClick={() => toggleExpand(project.id)}
                        className="mt-6 text-[#10adbb] hover:text-[#207f8a] font-medium flex items-center group transition-colors duration-200"
                      >
                        {expandedProjects[project.id] ? 'Show Less' : 'Read More'}
                        <svg 
                          className={`ml-2 h-4 w-4 transition-all duration-200 ${expandedProjects[project.id] ? 'rotate-180' : ''} group-hover:translate-x-1`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
);
};

export default Projects;