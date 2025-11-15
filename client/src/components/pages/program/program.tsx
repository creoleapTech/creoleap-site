import { useState, useEffect, useRef, type SetStateAction } from 'react';
import { Icon } from '@iconify/react';
import { useSearch } from '@tanstack/react-router';
import Testimonials from '@/components/Testimonial';

export default function Programs() {
  type ProgramRefs = Record<string, HTMLDivElement | null>;

  const searchParams = useSearch({ from: '__root__' }) as { 
    tag?: 'schools' | 'colleges'; 
    id?: string; 
  };
  const [activeTab, setActiveTab] = useState('schools');
  const [isSticky, setIsSticky] = useState(false);
  const [showFloatingButton, setShowFloatingButton] = useState(false);
  const heroSectionRef = useRef<HTMLDivElement | null>(null);
  const mainTabsRef = useRef<HTMLDivElement | null>(null);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const programsSectionRef = useRef<HTMLDivElement | null>(null);
  const benefitsSectionRef = useRef<HTMLDivElement | null>(null);
  const programRefs = useRef<ProgramRefs>({});

  const [faqs, setFaqs] = useState([
    {
      question: "What is the duration of each program?",
      answer: "Program durations vary from 3-18 months depending on the complexity and depth. School programs typically run full academin year, while college programs can extend up to 18 months for comprehensive training.",
      isOpen: false
    },
    {
      question: "Do you provide certification?",
      answer: "Yes, all our programs include industry-recognized certifications that are valued by employers and educational institutions worldwide.",
      isOpen: false
    },
    {
      question: "What kind of support do you provide?",
      answer: "We provide comprehensive support including trained faculty, technical assistance, curriculum materials, and ongoing professional development for teachers.",
      isOpen: false
    },
    {
      question: "Can these programs be customized for our institution?",
      answer: "Absolutely! We work closely with each institution to customize programs based on their specific needs, infrastructure, and educational goals.",
      isOpen: false
    }
  ]);

  const schoolPrograms = [
    {
      id: "ai-robotics",
      title: "AI Integrated Robotics",
      description: "Combine robotics with artificial intelligence to create smart, autonomous systems that solve real-world problems. From basic robotics to advanced AI-driven automation.",
      icon: "mdi:robot",
      features: ["Robot Programming", "Machine Learning", "Sensor Integration", "Autonomous Systems", "Computer Vision", "Path Planning"],
      color: "from-purple-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      duration: "8-12 Months",
      level: "Biginner to Advanced",
      outcomes: [
        "Build and program AI-driven robots",
        "Implement computer vision systems",
        "Develop autonomous navigation",
        "Create machine learning models for robotics"
      ]
    },
    {
      id: "ai-electronics",
      title: "AI Integrated Electronics",
      description: "Empower students with cutting-edge AI and electronics integration, preparing them for future technological challenges through hands-on learning and real-world applications.",
      icon: "mdi:chip",
      features: ["Hands-on Projects", "AI Fundamentals", "Circuit Design", "IoT Integration", "PCB Design", "Sensor Networks"],
      color: "from-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80",
      duration: "6-12 Months",
      level: "Beginner to Advanced",
      outcomes: [
        "Understand AI-powered electronic systems",
        "Design and build smart devices",
        "Integrate sensors and actuators with AI",
        "Develop IoT solutions"
      ]
    },
    {
      id: "nep-curriculum",
      title: "NEP Aligned Curriculum",
      description: "Comprehensive curriculum designed to align with National Education Policy standards and future-ready skills. Focus on holistic development and 21st-century skills.",
      icon: "mdi:book-education",
      features: ["Policy Compliant", "Skill-Based Learning", "Holistic Development", "Modern Pedagogy", "Assessment Tools", "Teacher Training"],
      color: "from-green-500 to-emerald-500",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
      duration: "Full Academic Year",
      level: "All Levels",
      outcomes: [
        "NEP 2020 compliance",
        "Enhanced critical thinking",
        "Digital literacy skills",
        "Future-ready curriculum implementation"
      ]
    },
    {
      id: "teacher-empowerment",
      title: "Teacher Empowerment Program",
      description: "Equip educators with modern teaching methodologies and technological tools to enhance classroom effectiveness and student engagement.",
      icon: "mdi:account-school",
      features: ["Professional Development", "Tech Training", "Pedagogical Skills", "Continuous Support", "Classroom Management", "Digital Tools"],
      color: "from-orange-500 to-red-500",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
      duration: "3-6 Months",
      level: "Educators & Faculty",
      outcomes: [
        "Modern teaching methodologies",
        "Technology integration skills",
        "Enhanced student engagement",
        "Continuous professional growth"
      ]
    }
  ];

  const collegePrograms = [
    {
      id: "industry-4.0",
      title: "Industry 4.0 Readiness Program",
      description: "Bridge the gap between academia and industry with comprehensive training in modern manufacturing, automation technologies, and smart factory concepts.",
      icon: "mdi:factory",
      features: ["Smart Manufacturing", "Automation", "Data Analytics", "Industry Collaboration", "IIoT", "Digital Twins"],
      color: "from-indigo-500 to-blue-500",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80",
      duration: "15-30 Days",
      level: "Advanced",
      outcomes: [
        "Industry 4.0 technology mastery",
        "Smart factory implementation",
        "Data-driven decision making",
        "Industry-ready skills"
      ]
    },
    {
      id: "ros2",
      title: "ROS2 Certification",
      description: "Master the Robot Operating System 2.0 with hands-on projects and industry-recognized certification for robotics professionals and researchers.",
      icon: "mdi:robot-industrial",
      features: ["ROS2 Framework", "Real-time Systems", "Navigation Stack", "Industry Certification", "Simulation", "Hardware Integration"],
      color: "from-cyan-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80",
      duration: "90-180 Days",
      level: "Intermediate to Advanced",
      outcomes: [
        "ROS2 professional certification",
        "Real-time robotics development",
        "Advanced navigation systems",
        "Industry-standard robotics projects"
      ]
    },
    {
      id: "embedded-iot",
      title: "Embedded System & IoT Certification",
      description: "Comprehensive training in embedded systems and Internet of Things technologies with practical implementation experience and industry projects.",
      icon: "mdi:memory",
      features: ["Microcontrollers", "IoT Protocols", "Cloud Integration", "Project Portfolio", "Wireless Communication", "Edge Computing"],
      color: "from-violet-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
      duration: "15-30 Days",
      level: "Beginner to Advanced",
      outcomes: [
        "Embedded systems expertise",
        "IoT solution development",
        "Cloud connectivity implementation",
        "Industry project portfolio"
      ]
    }
  ];

  const activePrograms = activeTab === 'schools' ? schoolPrograms : collegePrograms;

  // Handle URL parameters on mount and when they change
  useEffect(() => {
    const tag = searchParams?.tag;
    const id = searchParams?.id;

    if (tag && (tag === 'schools' || tag === 'colleges')) {
      setActiveTab(tag);
      
      // Wait for state update and DOM render, then scroll
      setTimeout(() => {
        if (id && programRefs.current[id]) {
          programRefs.current[id]?.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });
          
          // Add highlight effect
          const element = programRefs.current[id];
          if (element) {
            element.classList.add('ring-4', 'ring-blue-500', 'ring-opacity-50');
            setTimeout(() => {
              element.classList.remove('ring-4', 'ring-blue-500', 'ring-opacity-50');
            }, 2000);
          }
        } else if (programsSectionRef.current) {
          // If no specific ID, just scroll to programs section
          programsSectionRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 300);
    }
  }, [searchParams]);

  // Sticky tabs and floating button effects
  useEffect(() => {
    const handleScroll = () => {
      if (!heroSectionRef.current || !mainTabsRef.current || !programsSectionRef.current || !benefitsSectionRef.current) return;

      const mainTabsBottom = mainTabsRef.current.getBoundingClientRect().bottom;
      const programsSectionTop = programsSectionRef.current.getBoundingClientRect().top;
      const programsSectionBottom = programsSectionRef.current.getBoundingClientRect().bottom;
      const benefitsSectionTop = benefitsSectionRef.current.getBoundingClientRect().top;
      
      // Show sticky tabs when main tabs are scrolled out of view AND programs section is visible
      // AND benefits section is not yet reached
      const isMainTabsVisible = mainTabsBottom > 0;
      const isProgramsSectionVisible = programsSectionTop <= window.innerHeight && programsSectionBottom >= 0;
      const isBenefitsSectionReached = benefitsSectionTop <= window.innerHeight;
      
      // Sticky tabs should show only when:
      // - Main tabs are not visible AND
      // - Programs section is visible AND
      // - Benefits section is not yet reached
      if (!isMainTabsVisible && isProgramsSectionVisible && !isBenefitsSectionReached) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }

      // Show floating button only when in programs section (not in hero section)
      // AND benefits section is not yet reached
      const isInHeroSection = mainTabsBottom > 0;
      if (isProgramsSectionVisible && !isInHeroSection && !isBenefitsSectionReached) {
        setShowFloatingButton(true);
      } else {
        setShowFloatingButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabChange = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
    setTimeout(() => {
      programsSectionRef.current?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section ref={heroSectionRef} className="relative py-5 bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full -translate-y-36 translate-x-36 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full translate-y-48 -translate-x-48 opacity-20 blur-3xl"></div>
        
        <div className="absolute z-20 inset-0 overflow-hidden">
          <div className="absolute w-80 h-80 bg-blue-400 rounded-full opacity-10 -top-40 -right-40"></div>
          <div className="absolute w-60 h-60 bg-purple-500 rounded-full opacity-30 -bottom-30 -left-20"></div>
          <div className="absolute w-40 h-40 bg-indigo-400 rounded-full opacity-10 top-1/2 left-1/3"></div>
        </div>
        
        <div className="relative py-20 px-4">
          <div className="container mx-auto text-center relative z-30">
            <h1 className="text-5xl lg:text-7xl font-bold pb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Our Programs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Transforming Education Through Innovation and Technology - Empowering the Next Generation of Innovators
            </p>
            
            {/* Main Tabs in Hero Section */}
            <div ref={mainTabsRef} className="flex justify-center gap-4 max-w-md mx-auto mt-12 relative z-30">
              <button
                onClick={() => handleTabChange('schools')}
                className={`flex-1 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                  activeTab === 'schools'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <Icon icon="mdi:school" className="text-xl" />
                Schools
              </button>
              <button
                onClick={() => handleTabChange('colleges')}
                className={`flex-1 px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 ${
                  activeTab === 'colleges'
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                    : 'bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm'
                }`}
              >
                <Icon icon="mdi:domain" className="text-xl" />
                Colleges
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Tabs - Top Right Corner */}
      {/* <div 
        ref={tabsRef}
        className={`fixed top-4 right-4 transition-all duration-300 ${
          isSticky ? 'opacity-100 translate-y-0 z-50' : 'opacity-0 -translate-y-4 pointer-events-none -z-10'
        }`}
      >
        <div className="flex gap-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-2">
          <button
            onClick={() => handleTabChange('schools')}
            className={`px-4 py-2 relative rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 min-w-[100px] ${
              activeTab === 'schools'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100 border border-gray-300 bg-white'
            }`}
          >
            {activeTab === 'schools' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            )}
            <Icon icon="mdi:school" className="text-lg" />
            Schools
          </button>
          <button
            onClick={() => handleTabChange('colleges')}
            className={`px-4 py-2 relative rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 min-w-[100px] ${
              activeTab === 'colleges'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100 border border-gray-300 bg-white'
            }`}
          >
            {activeTab === 'colleges' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            )}
            <Icon icon="mdi:domain" className="text-lg" />
            Colleges
          </button>
        </div>
      </div> */}

      {/* Floating Button */}
      <div 
        className={`fixed top-1/2 right-6 transition-all duration-300 ${
          showFloatingButton ? 'opacity-100 translate-y-0 z-50' : 'opacity-0 translate-y-4 pointer-events-none -z-10'
        }`}
      >
        <div className="flex flex-col gap-2 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200 p-2">
          <button
            onClick={() => handleTabChange('schools')}
            className={`px-4 py-2 relative rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 min-w-[100px] ${
              activeTab === 'schools'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100 border border-gray-300 bg-white'
            }`}
          >
            {activeTab === 'schools' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            )}
            <Icon icon="mdi:school" className="text-lg" />
            Schools
          </button>
          <button
            onClick={() => handleTabChange('colleges')}
            className={`px-4 py-2 relative rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 min-w-[100px] ${
              activeTab === 'colleges'
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                : 'text-gray-700 hover:bg-gray-100 border border-gray-300 bg-white'
            }`}
          >
            {activeTab === 'colleges' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
            )}
            <Icon icon="mdi:domain" className="text-lg" />
            Colleges
          </button>
        </div>
      </div>

      {/* Programs Section */}
      <div ref={programsSectionRef}>
        <div className="container mx-auto px-4 py-16">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              {activeTab === 'schools' ? 'School Programs' : 'College Programs'}
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              {activeTab === 'schools' 
                ? "Our school programs are designed to ignite curiosity and foster innovation in young minds. Through hands-on learning and cutting-edge technology, we prepare students for the future while making education engaging and relevant."
                : "Our college programs bridge the gap between academia and industry, providing students with the skills and certifications needed to excel in today's competitive job market."
              }
            </p>
          </div>

          {/* Programs Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {activePrograms.map((program) => (
              <div
                key={program.id}
                ref={(el) => { programRefs.current[program.id] = el; }} 
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className={`absolute top-4 right-4 w-16 h-16 bg-gradient-to-br ${program.color} rounded-xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-300`}>
                    <Icon icon={program.icon} className="text-3xl text-white" />
                  </div>
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {
                      activeTab!='schools'? <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {program.duration}
                    </span>:<span></span>
                    }
                   
                    <span className="bg-white/90 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">
                      {program.level}
                    </span>
                  </div>
                </div>

                <div className="p-6 relative">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {program.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {program.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Learning Outcomes:</h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Icon icon="mdi:check-circle" className="text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg group-hover:bg-blue-50 transition-colors duration-300"
                      >
                        <Icon icon="mdi:check-circle" className="text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <button className={`w-full py-3 px-6 bg-gradient-to-r ${program.color} text-white font-semibold rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2`}>
                    Learn More
                    <Icon icon="mdi:arrow-right" className="text-xl" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div ref={benefitsSectionRef} className="bg-gradient-to-r from-gray-50 to-blue-50 py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive solutions that transform educational institutions and empower students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "mdi:rocket-launch",
                title: "Future-Ready Curriculum",
                description: "Designed with industry experts to ensure students learn relevant, in-demand skills"
              },
              {
                icon: "mdi:handshake",
                title: "Industry Partnerships",
                description: "Strong connections with leading tech companies for placements and collaborations"
              },
              {
                icon: "mdi:certificate",
                title: "Recognized Certifications",
                description: "Industry-recognized certifications that enhance employability and academic credentials"
              },
              {
                icon: "mdi:account-group",
                title: "Expert Faculty",
                description: "Experienced professionals and educators with real-world industry experience"
              },
              {
                icon: "mdi:tools",
                title: "Hands-on Learning",
                description: "Practical, project-based approach that emphasizes learning by doing"
              },
              {
                icon: "mdi:chart-line",
                title: "Proven Results",
                description: "Track record of successful student outcomes and institutional transformations"
              }
            ].map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-4">
                  <Icon icon={benefit.icon} className="text-3xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Testimonials />

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our programs
            </p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200"
              >
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => {
                    const updatedFaqs = faqs.map((f, i) => ({
                      ...f,
                      isOpen: i === index ? !f.isOpen : false
                    }));
                    setFaqs(updatedFaqs);
                  }}
                >
                  <h3 className="text-xl font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <Icon 
                    icon={faq.isOpen ? "mdi:chevron-up" : "mdi:chevron-down"} 
                    className={`text-2xl text-gray-600 transition-transform duration-300 flex-shrink-0 ${
                      faq.isOpen ? 'text-blue-600' : ''
                    }`}
                  />
                </button>
                
                <div className={`transition-all duration-300 ease-in-out ${
                  faq.isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}>
                  <div className="px-6 pb-4">
                    <div className="border-t border-gray-200 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}