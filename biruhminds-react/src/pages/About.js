import React from 'react';
import { FaUserTie, FaUserMd, FaBook, FaLaptopCode, FaChalkboardTeacher } from 'react-icons/fa';
import { FiMail, FiPhone, FiLinkedin, FiGithub } from 'react-icons/fi';
import { HiOutlineLightBulb, HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineChartBar } from 'react-icons/hi';
import { RiContactsBookLine } from 'react-icons/ri';

const team = [
  {
    name: 'Solomon Desalegn',
    title: 'Executive Director',
    icon: <FaUserTie className="text-4xl text-primary" />,
    bio: `A visionary leader with over a decade of experience in development consulting, Solomon drives strategic direction at Biruhminds. He has led advocacy campaigns, stakeholder negotiations, and program evaluations for global organizations like UNESCO, DFPA, and VEI. With a Master's in Resource Management and a series of leadership certifications, Solomon is deeply committed to social transformation and sustainable impact.`,
    contact: {
      email: 'solgoodwill@gmail.com',
      phone: '+251 925 546 800',
      linkedin: 'https://www.linkedin.com/'
    }
  },
  {
    name: 'Dr. Helema Bekele (M.D.)',
    title: 'Deputy Director & Senior Associate',
    icon: <FaUserMd className="text-4xl text-primary" />,
    bio: `Dr. Helema blends medical expertise with programmatic leadership. Her work spans health research, youth-focused SRHR initiatives, and organizational strategy. She brings experience from the Ministry of Health, the Youth Network for Sustainable Development, and academic institutions. At Biruhminds, she leads cross-sectoral initiatives and ensures programs are evidence-driven and community-centered.`,
    contact: {
      email: 'helema@biruhminds.com',
      phone: '+251 911 476 782'
    }
  },
  {
    name: 'Benyam Seifu',
    title: 'Research Department Head',
    icon: <FaBook className="text-4xl text-primary" />,
    bio: `An Assistant Professor and accomplished researcher, Benyam leads the research unit with a strong academic foundation. He holds dual master's degrees in Public Health and Reproductive Health, and has secured international grants and published extensively. At Biruhminds, he manages research programs, capacity building, data analysis, and evidence-based policy advisory.`,
    contact: {
      email: 'benyamseifu77@gmail.com',
      phone: '+251 910 451 184'
    }
  },
  {
    name: 'Bereket Yosef',
    title: 'Marketing & Communications Officer',
    icon: <FaLaptopCode className="text-4xl text-primary" />,
    bio: `A software developer and creative strategist, Bereket combines technical skill with design thinking. With experience in full-stack development, digital marketing, and brand storytelling, he leads Biruhminds' digital communication. His background includes leading development projects, managing social media engagement, and creating design assets for strategic outreach.`,
    contact: {
      email: 'bereketyosef16@gmail.com',
      phone: '+251 978 639 887',
      linkedin: 'https://www.linkedin.com/in/bereket-yosef-b99a0622a/',
      github: 'https://github.com/brkt1'
    }
  },
  {
    name: 'Tseganesh Gelaneh',
    title: 'BDS Division Director',
    icon: <FaChalkboardTeacher className="text-4xl text-primary" />,
    bio: `Tseganesh is the engine behind Biruhminds' BDS programs. With a background in civil engineering and human development, she designs and delivers impactful training curricula. She is certified in Monitoring & Evaluation, Human Resource Management, and Instructional Design, bringing structure and vision to the firm's learning and development initiatives.`,
    contact: {
      email: 'tseganeshgelaneh@gmail.com',
      phone: '+251 976 676 711'
    }
  }
];

const values = [
  { label: 'Integrity', desc: 'in all we do', icon: <HiOutlineShieldCheck className="text-xl" /> },
  { label: 'Innovation', desc: 'in every project', icon: <HiOutlineLightBulb className="text-xl" /> },
  { label: 'Inclusion', desc: 'across communities', icon: <HiOutlineUserGroup className="text-xl" /> },
  { label: 'Impact', desc: 'that lasts', icon: <HiOutlineChartBar className="text-xl" /> }
];

const About = () => (
  <div className="bg-white min-h-screen">
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6 text-center">
        <h1 className="text-5xl font-bold mb-4 text-dark">Meet Our Team</h1>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">A passionate, multi-disciplinary team with local knowledge and global experience.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="mb-4">{member.icon}</div>
              <h2 className="text-xl font-bold text-primary mb-1">{member.name}</h2>
              <h3 className="text-md text-accent mb-4">{member.title}</h3>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">{member.bio}</p>
              <div className="w-full border-t border-gray-100 pt-4 mt-auto">
                <div className="flex flex-col gap-2 text-sm text-gray-500">
                  {member.contact.email && (
                    <span className="flex items-center gap-2">
                      <FiMail className="text-primary" />
                      <a href={`mailto:${member.contact.email}`} className="text-primary hover:underline">{member.contact.email}</a>
                    </span>
                  )}
                  {member.contact.phone && (
                    <span className="flex items-center gap-2">
                      <FiPhone className="text-primary" />
                      <a href={`tel:${member.contact.phone}`} className="text-primary hover:underline">{member.contact.phone}</a>
                    </span>
                  )}
                  {member.contact.linkedin && (
                    <span className="flex items-center gap-2">
                      <FiLinkedin className="text-primary" />
                      <a href={member.contact.linkedin} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
                    </span>
                  )}
                  {member.contact.github && (
                    <span className="flex items-center gap-2">
                      <FiGithub className="text-primary" />
                      <a href={member.contact.github} className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">{member.contact.github.replace('https://github.com/', '')}</a>
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-20 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-dark">More About Us</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
          <b>Biruhminds Consult PLC</b> is a forward-thinking consulting firm bridging innovation, policy, and capacity building to empower communities and organizations. We specialize in development consultancy, research, training, and strategic communication across sectors like health, education, youth empowerment, and enterprise growth.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {values.map((v, i) => (
            <div key={i} className="bg-primary/10 text-primary rounded-lg px-6 py-3 font-semibold text-lg shadow-sm flex items-center gap-2">
              {v.icon}
              {v.label} <span className="text-gray-500 font-normal">{v.desc}</span>
            </div>
          ))}
        </div>
        <div className="text-left max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-dark">Why Biruhminds?</h3>
          <ul className="list-disc pl-6 text-gray-700 space-y-3">
            <li className="leading-relaxed">Expert team with <b>local knowledge and global experience</b></li>
            <li className="leading-relaxed">Proven record in <b>policy research, digital transformation, and training</b></li>
            <li className="leading-relaxed">Deep <b>collaboration with NGOs, government, and the private sector</b></li>
            <li className="leading-relaxed">Strong track record in <b>project evaluation and advocacy</b></li>
            <li className="leading-relaxed">Agile, data-driven, and purpose-led</li>
          </ul>
        </div>
      </div>
    </section>

    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 text-dark">Contact Our Team</h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Get in touch with our team members directly</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition">
              <div className="mb-3 text-primary">
                <RiContactsBookLine className="text-3xl" />
              </div>
              <h3 className="font-bold text-lg mb-1">{member.name}</h3>
              <span className="text-gray-500 text-sm mb-4">{member.title}</span>
              <div className="w-full space-y-2 text-sm">
                {member.contact.email && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiMail className="text-primary" />
                    <a href={`mailto:${member.contact.email}`} className="hover:text-primary hover:underline">{member.contact.email}</a>
                  </div>
                )}
                {member.contact.phone && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiPhone className="text-primary" />
                    <a href={`tel:${member.contact.phone}`} className="hover:text-primary hover:underline">{member.contact.phone}</a>
                  </div>
                )}
                {member.contact.linkedin && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiLinkedin className="text-primary" />
                    <a href={member.contact.linkedin} className="hover:text-primary hover:underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                )}
                {member.contact.github && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <FiGithub className="text-primary" />
                    <a href={member.contact.github} className="hover:text-primary hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;