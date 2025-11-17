import { useState, useEffect, useRef } from 'react';
import { useParams} from '@tanstack/react-router';

export default function LabsShowcase() {
// const [activeIndex, setActiveIndex] = useState<number | null>(null);
const [visibleSections, setVisibleSections] = useState<number[]>([]);
const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);  

  // Use the correct hook based on whether we're on /labs or /labs/$labId
  const params = useParams({ strict: false });
  const labId = params.labId;
  // const navigate = useNavigate();

  // Scroll to specific lab when labId changes
 useEffect(() => {
  if (!labId) return;

  const labIndex = labs.findIndex(l => l.id === labId);
  if (labIndex === -1) return;

  const element = sectionRefs.current[labIndex];
  if (!element) return;             

  setTimeout(() => {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 100);
}, [labId]);

  // Intersection Observer for animations
useEffect(() => {
  const observers: IntersectionObserver[] = [];

  sectionRefs.current.forEach((ref, index) => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => [...new Set([...prev, index])]);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(ref);
    observers.push(observer);
  });

  return () => {
    observers.forEach(observer => observer.disconnect());
  };
}, []);

  const labs = [
   {
      id: 'stem-robotics',
      title: 'STEM & Robotics Lab',
      subtitle: '21st Century Skills Development Hub',
      description: 'Equip your institution with state-of-the-art STEM and Robotics facilities that prepare students for the future. Our comprehensive lab setup includes cutting-edge technology and hands-on learning tools.',
      features: [
        'Arduino, Raspberry Pi, and IoT development kits',
        'Industrial-grade robotic arms and drone technology',
        '3D printers and laser cutting machines',
        'Advanced programming platforms (Python, C++, Block coding)',
        'Competition-ready robotics equipment',
        'Project-based learning curriculum aligned with NEP 2020'
      ],
      benefits: 'Foster innovation, critical thinking, and practical engineering skills. Students gain exposure to real-world applications and industry-standard tools.',
      stats: { schools: '450+', students: '80K+', satisfaction: '97%' },
      color: 'from-blue-600 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
       img:"/images/lab2.png"
    },
  {
  id: 'composite-skill',
  title: 'Composite Skill Lab',
  subtitle: 'Multi-Disciplinary Innovation Hub',
  description: 'Equip your school with a cutting-edge Composite Skill Lab that integrates diverse technical and creative domains. Students gain hands-on experience in fabrication, design, electronics, and sustainable material engineering.',
  features: [
    'Advanced composite material workstations',
    '3D printing and CNC machining tools',
    'Electronic prototyping kits with Arduino & Raspberry Pi',
    'Sustainable design and eco-material testing rigs',
    'CAD/CAM software suites (Fusion 360, SolidWorks)',
    'Industry-aligned certification and project mentorship'
  ],
  benefits: 'Empower students with versatile Industry 4.0-ready skills in advanced manufacturing, product design, and interdisciplinary innovation for future engineering and entrepreneurial careers.',
  stats: { schools: '150+', students: '20K+', satisfaction: '95%' },
  color: 'from-teal-600 to-cyan-600',
  bgColor: 'from-teal-50 to-cyan-50',
  img: "/images/lab6.png"
}, 
    {
      id: 'atal',
      title: 'ATAL Tinkering Labs',
      subtitle: 'Government-Approved Innovation Workspace',
      description: 'Establish a fully-equipped ATAL Tinkering Lab that meets all government guidelines. Create a makerspace where students can innovate, experiment, and bring their ideas to life.',
      features: [
        'Complete ATL setup as per NITI Aayog guidelines',
        'Electronics, mechanics, and fabrication tools',
        'Design thinking and innovation methodology training',
        'Mentorship programs and innovation challenges',
        'Community engagement and showcase platforms',
        'Regular assessment and progress tracking systems'
      ],
      benefits: 'Access government support, national-level competitions, and a proven framework for fostering entrepreneurial mindset and innovation culture.',
      stats: { schools: '320+', students: '50K+', satisfaction: '99%' },
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-50 to-amber-50',
        img:"/images/lab4.png"
    },
    {
      id: 'ict',
      title: 'ICT Labs',
      subtitle: 'Digital Transformation Center',
      description: 'Modernize your computer labs with cutting-edge ICT infrastructure. From basic digital literacy to advanced computing, create a comprehensive digital learning environment.',
      features: [
        'High-performance workstations and servers',
        'Interactive smartboards and digital displays',
        'Cloud-based learning management systems',
        'Cybersecurity and digital citizenship training',
        'Software development environments and tools',
        'Virtual collaboration and remote learning capabilities'
      ],
      benefits: 'Build digital competency across all grades, ensure every student is tech-savvy, and prepare them for digital careers and online learning.',
      stats: { schools: '600+', students: '120K+', satisfaction: '95%' },
      color: 'from-green-600 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50',
      img:"/images/lab7.png"
    },
    
    {
      id: 'bal-vatika',
      title: 'Bal Vatika Labs',
      subtitle: 'Early Childhood Innovation Center',
      description: 'Transform early learning with our specially designed Bal Vatika Labs that blend play with foundational STEM concepts. Create a magical learning environment where curiosity meets discovery.',
      features: [
        'Age-appropriate robotics kits and building blocks',
        'Interactive storytelling with AR technology',
        'Sensory learning stations and activity zones',
        'Digital literacy through gamified learning',
        'Safety-certified equipment for young learners',
        'Teacher training and curriculum integration'
      ],
      benefits: 'Develop motor skills, spatial awareness, and problem-solving abilities from ages 3-6, setting the foundation for future innovators.',
      stats: { schools: '200+', students: '15K+', satisfaction: '98%' },
      color: 'from-pink-500 to-rose-600',
      bgColor: 'from-pink-50 to-rose-50',
      img:"/images/lab8.png"
    },
    // {
    //   id: 'ar-vr',
    //   title: 'AR & VR Labs',
    //   subtitle: 'Immersive Learning Experience Center',
    //   description: 'Transform traditional education with immersive AR/VR technology. Students explore historical sites, conduct virtual experiments, and experience learning in three dimensions.',
    //   features: [
    //     'VR headsets (Oculus, HTC Vive) and AR devices',
    //     'Subject-specific immersive content library',
    //     '360-degree cameras and content creation tools',
    //     'Virtual field trips and experiential learning modules',
    //     'Gamified learning environments',
    //     'Safe, monitored usage with educational focus'
    //   ],
    //   benefits: 'Increase engagement, improve retention rates, and make abstract concepts tangible through experiential learning that students will never forget.',
    //   stats: { schools: '150+', students: '30K+', satisfaction: '98%' },
    //   color: 'from-violet-600 to-fuchsia-600',
    //   bgColor: 'from-violet-50 to-fuchsia-50',
    //      img:"/images/lab1.png"
    // }
  ];

  // Function to handle lab navigation
  // const handleLabNavigation = (labId: string) => {
  //   navigate({ to: '/labs/$labId', params: { labId } });
  // };

  // Function to scroll to specific lab
  // const scrollToLab = (labId: string) => {
  //   const labIndex = labs.findIndex(lab => lab.id === labId);
  //   if (labIndex !== -1 && sectionRefs.current[labIndex]) {
  //     sectionRefs.current[labIndex].scrollIntoView({ 
  //       behavior: 'smooth',
  //       block: 'center'
  //     });
  //     // Update URL using TanStack Router
  //     navigate({ to: '/labs/$labId', params: { labId }, replace: true });
  //   }
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] text-white overflow-hidden">
        {/* <div className="absolute inset-0 bg-black opacity-50"></div> */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500 rounded-full -translate-y-36 translate-x-36 opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full translate-y-48 -translate-x-48 opacity-20 blur-3xl"></div>
        
        {/* Background Shapes */}
        <div className="absolute z-20 inset-0 overflow-hidden">
          <div className="absolute w-80 h-80 bg-blue-400 rounded-full opacity-10 -top-40 -right-40"></div>
          <div className="absolute w-60 h-60 bg-purple-500 rounded-full opacity-30 -bottom-30 -left-20"></div>
          <div className="absolute w-40 h-40 bg-indigo-400 rounded-full opacity-10 top-1/2 left-1/3"></div>
        </div>
        
        <div className="absolute z-10 inset-0 overflow-hidden">
        </div> 
        
        <div className="absolute w-80 h-80 bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] rounded-full -top-40 -right-40"></div>
        <div className="absolute w-40 h-40 bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] rounded-full top-1/2 left-1/3"></div>
        
        {/* Grid Pattern */}
        {/* <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div> */}

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Future-Ready Labs
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 mb-8 leading-relaxed">
              Transform Your School into a 21st Century Learning Hub with Our Advanced Laboratory Solutions
            </p>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Empower young minds with cutting-edge technology infrastructure that prepares students for the careers of tomorrow. 
              Our comprehensive lab solutions are designed to make your institution a benchmark in modern education.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Navigation Menu */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* <div className="flex overflow-x-auto py-4 gap-2 hide-scrollbar">
            {labs.map((lab) => (
              <button
                key={lab.id}
                onClick={() => scrollToLab(lab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-semibold text-sm transition-all duration-300 ${
                  labId === lab.id 
                    ? `bg-gradient-to-r ${lab.color} text-white shadow-lg` 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {lab.title}
              </button>
            ))}
          </div> */}
        </div>
      </div>

      {/* Labs Sections */}
<section className="py-20 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {labs.map((lab, index) => {
      const isEven = index % 2 === 0;
      const isVisible = visibleSections.includes(index);

      return (
        <div
          key={lab.id}
ref={(el) => {
  sectionRefs.current[index] = el;
}}
       id={lab.id}
          className={`mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Grid container */}
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-6 items-center ${
              !isEven ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Image Side: Full-width on mobile, half-width on desktop */}
            <div
              className={`${
                !isEven ? "lg:col-start-2" : ""
              } w-full lg:w-auto ${
                isVisible ? "translate-x-0" : isEven ? "-translate-x-20" : "translate-x-20"
              } transition-transform duration-1000 delay-200`}
            >
              <div className="relative group w-full">
                {/* Decorative background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${lab.color} rounded-[3rem] transform rotate-3 group-hover:rotate-6 transition-transform duration-500 opacity-20`}
                ></div>

                {/* Main image container: Full width */}
                <div
                  className={`relative bg-gradient-to-br ${lab.bgColor} rounded-[3rem] p-4 sm:p-6 md:p-8 shadow-2xl overflow-hidden border-4 border-white w-full`}
                >
                  {/* Image: Full width and height */}
                  <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-[2rem]">
                    <img
                      src={lab.img}
                      alt={lab.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div
              className={`${
                !isEven ? "lg:col-start-1 lg:row-start-1" : ""
              } ${isVisible ? "translate-x-0" : isEven ? "translate-x-20" : "-translate-x-20"} transition-transform duration-1000 delay-300`}
            >
              <div
                className="cursor-pointer"
                // onMouseEnter={() => setActiveIndex(index)}
                // onMouseLeave={() => setActiveIndex(null)}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-900 mb-3">
                  {lab.title}
                </h2>

                <h3
                  className={`text-xl sm:text-2xl font-bold bg-gradient-to-r ${lab.color} text-transparent bg-clip-text mb-6`}
                >
                  {lab.subtitle}
                </h3>

                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8">
                  {lab.description}
                </p>

                {/* Benefits */}
                <div className={`bg-gradient-to-br ${lab.bgColor} rounded-3xl p-4 sm:p-6 border-2 border-gray-200`}>
                  <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    {/* <span className="text-2xl">{lab.icon}</span> */}
                    Key Benefits
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{lab.benefits}</p>
                </div>

                {/* CTA */}
                {/* <div className="mt-8 flex flex-wrap gap-4">
                  <button
                    onClick={() => handleLabNavigation(lab.id)}
                    className={`px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r ${lab.color} text-white font-bold rounded-2xl hover:shadow-2xl transition-all hover:scale-105 flex items-center gap-2`}
                  >
                    Get Started
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                  <button className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-gray-800 font-bold rounded-2xl hover:bg-gray-50 transition-all border-2 border-gray-200">
                    Download Brochure
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>

      <style>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}