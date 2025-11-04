import React, { useEffect, useRef, useState } from 'react';
import { Bot, Brain, Cpu, Zap, Users, Trophy, ArrowRight, Play, Sparkles, Rocket, Globe } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

  

const Programs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;
const containerRef = useRef(null);
  const heroRef = useRef(null);
  const particlesRef = useRef([]);
  const cardsRef = useRef([]);
  const floatingElementsRef = useRef([]);
  const morphingShapeRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Load GSAP and plugins
    const loadGSAP = async () => {
      const script1 = document.createElement('script');
      script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      document.head.appendChild(script1);

      await new Promise(resolve => script1.onload = resolve);

      const script2 = document.createElement('script');
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      document.head.appendChild(script2);

      await new Promise(resolve => script2.onload = resolve);

      initAdvancedAnimations();
    };

    loadGSAP();

    // Mouse tracking for parallax effects
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const initAdvancedAnimations = () => {
    if (!window.gsap) return;

    const { gsap } = window;
    gsap.registerPlugin(window.ScrollTrigger);

    // Advanced timeline for hero section
    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top 80%",
        end: "bottom 20%",
        scrub: 1
      }
    });

    // Morphing background animation
    gsap.to(morphingShapeRef.current, {
      rotation: 360,
      scale: 1.2,
      duration: 20,
      repeat: -1,
      ease: "none"
    });

    // Particle system animation
    particlesRef.current.forEach((particle, i) => {
      if (particle) {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5
        });

        gsap.to(particle, {
          y: "-100vh",
          rotation: Math.random() * 360,
          duration: Math.random() * 10 + 5,
          repeat: -1,
          ease: "none",
          delay: Math.random() * 5
        });
      }
    });

    // Advanced card animations with magnetic effect
    cardsRef.current.forEach((card, index) => {
      if (card) {
        // Entrance animation
        gsap.fromTo(card, {
          opacity: 0,
          y: 100,
          rotationY: 45,
          scale: 0.8
        }, {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 1.2,
          delay: index * 0.2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%"
          }
        });

        // Magnetic hover effect
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            scale: 1.05,
            rotationY: 5,
            rotationX: 5,
            z: 50,
            duration: 0.3,
            ease: "power2.out"
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            z: 0,
            duration: 0.5,
            ease: "power2.out"
          });
        });
      }
    });

    // Floating elements with physics
    floatingElementsRef.current.forEach((element, i) => {
      if (element) {
        gsap.to(element, {
          y: Math.sin(i) * 30,
          x: Math.cos(i) * 20,
          rotation: 360,
          duration: 3 + i,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut"
        });
      }
    });

    // Advanced text reveal animation
    const textElements = document.querySelectorAll('.reveal-text');
    textElements.forEach((text) => {
      const chars = text.textContent.split('');
      text.innerHTML = chars.map(char => `<span style="display:inline-block;opacity:0;transform:translateY(50px)">${char}</span>`).join('');
      
      gsap.to(text.children, {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 80%"
        }
      });
    });
  };

  useEffect(() => {
    // Mouse parallax effect
    if (floatingElementsRef.current) {
      floatingElementsRef.current.forEach((el, i) => {
        if (el && window.gsap) {
          window.gsap.to(el, {
            x: mousePosition.x * (20 + i * 10),
            y: mousePosition.y * (15 + i * 8),
            duration: 0.8,
            ease: "power2.out"
          });
        }
      });
    }
  }, [mousePosition]);


  const HeroData = [
    { 
      id: 1,
      title: "STEM Education Excellence",
      subtitle: "Hands-on Learning for Future Innovators",
      description: "Interactive experiments, real-world projects, and problem-solving activities that integrate coding, electronics, and engineering principles to build critical thinking and creativity.",
      features: ["Interactive Experiments", "Real-World Projects", "Critical Thinking", "Creative Problem Solving"],
      image: "/images/robo1.jpg"
    },
    {
      id: 2,
      title: "AI-Based Robotics Education",
      subtitle: "Smart Learning for Smart Minds",
      description: "Smart robotic kits designed for K-12 students with AI-powered learning integrated with real-world applications. Experience automation, coding, and robotics hands-on.",
      features: ["Smart Robotic Kits", "K-12 Curriculum", "AI Integration", "Real-World Applications"],
      image: "/images/project1.jpg"
    },
    {
      id: 3,
      title: "AI-Driven STEM Curriculum",
      subtitle: "Future-Ready Educational Programs",
      description: "Customized AI-infused STEM learning programs aligned with NEP 2020 and global standards. Features adaptive learning with AI-based assessments for personalized growth.",
      features: ["NEP 2020 Aligned", "Global Standards", "Adaptive Learning", "AI Assessments"],
image: "/images/project3.jpg"    },
{
  id: 4,
  title: "Industry 4.0 Readiness Program",
  subtitle: "Future Skills for Smart Manufacturing",
  description:
    "An advanced program designed to prepare students and professionals for the Industry 4.0 revolution. Covers automation, IoT, AI integration, and smart manufacturing concepts to build workforce readiness for the digital industrial era.",
  features: [
    "Automation & IoT",
    "Smart Manufacturing",
    "AI Integration",
    "Industry 4.0 Standards",
  ],
   image: "/images/project5.jpg",
},
{
  id: 5,
  title: "ROS Certification Program",
  subtitle: "Robot Operating System Mastery",
  description:
    "Hands-on training and certification on the Robot Operating System (ROS). Learn robotics middleware, sensor integration, motion planning, and control for industrial and research applications.",
  features: [
    "ROS Basics & Setup",
    "Sensor Integration",
    "Motion Planning",
    "Real-World Projects",
  ],
  image:
    "https://cdn.pixabay.com/photo/2020/06/18/13/52/robot-5318783_960_720.jpg",
},
{
  id: 6,
  title: "Embedded Systems Certification",
  subtitle: "Microcontroller & Hardware Programming",
  description:
    "Comprehensive certification program focused on embedded C programming, microcontroller design, and hardware-software interfacing to build real-world electronic systems.",
  features: [
    "Embedded C Programming",
    "Microcontroller Design",
    "Sensor Interfacing",
    "Project-Based Learning",
  ],
  image:
    "https://cdn.pixabay.com/photo/2017/08/02/23/17/microcontroller-2574842_960_720.jpg",
},
{
  id: 7,
  title: "AI & Robotics STEM Lab",
  subtitle: "Innovative Hands-on Learning Ecosystem",
  description:
    "A comprehensive STEM and robotics lab setup that fosters innovation, creativity, and problem-solving among students. The lab includes diverse modules designed to integrate AI, IoT, robotics, AR/VR, and ICT for future-ready education.",
  features: [
    "Bal Vatika Lab",
    "AI & IoT Lab",
    "Robotics and STEM Lab",
    "ATAL Tinkering Lab",
    "AR & VR Lab",
    "ICT Lab",
  ],
  image:
    "https://cdn.pixabay.com/photo/2018/01/19/07/49/robot-3091220_960_720.jpg",
}

  ];

  // Auto-rotate slides
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getSlideClass = (index, type) => {
    const baseClasses = "transition-all duration-700 ease-out";
    
    if (index === currentSlide) {
      return `${baseClasses} opacity-100 translate-x-0`;
    } else if (index === (currentSlide - 1 + totalSlides) % totalSlides) {
      return `${baseClasses} opacity-0 -translate-x-full absolute`;
    } else {
      return `${baseClasses} opacity-0 translate-x-full absolute`;
    }
  };

  const currentData = HeroData[currentSlide];

  return (
    <div  ref={containerRef}  className="min-h-screen  bg-gradient-to-b from-gray-50 to-indigo-50 flex items-center justify-center  px-4 sm:px-6 lg:px-8 relative  overflow-hidden">
      {/* <div className="absolute inset-0 ">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(120,119,198,0.3),transparent_70%)]"></div>
      </div> */}
           <div className="absolute inset-0">
        {/* <div ref={morphingShapeRef} className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div> */}
        {/* <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div> */}
        {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-conic from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s'}}></div> */}
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className="absolute w-1 h-1 from-cyan-600 to-blue-600 bg-gradient-to-br rounded-full opacity-30"
          />
        ))}
      </div>

     {/* Green curved accent at bottom right */}
      {/* <div className="absolute bottom-0 right-0">
        <svg viewBox="0 0 400 300" className="w-screen">
          <path
            d="M400,300 Q300,200 200,250 Q100,300 0,250 L0,300 L400,300 Z"
            fill="url(#greenGradient)"
            opacity="0.6"
          />
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#059669" stopOpacity="0.3"/>
            </linearGradient>
          </defs>
        </svg>
      </div> */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(5px) rotate(-1deg); }
        }
        
        @keyframes slideInFromLeft {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        .slide-in {
          animation: slideInFromLeft 1s ease-out;
        }
      `}</style>

      <div className="max-w-7xl z-20  mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
        {/* Left Side - Content Carousel */}
         {/* <div className="absolute top-0 -left-32 w-64 h-64 animate-spin transition-all duration-75">
      <svg viewBox="0 0 100 100" className="w-full h-full text-blue-100/10" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="20" y="20" width="60" height="60" rx="5"/>
        <circle cx="30" cy="30" r="3" fill="currentColor"/>
        <circle cx="70" cy="30" r="3" fill="currentColor"/>
        <circle cx="30" cy="70" r="3" fill="currentColor"/>
        <circle cx="70" cy="70" r="3" fill="currentColor"/>
        <line x1="30" y1="30" x2="70" y2="30"/>
        <line x1="30" y1="70" x2="70" y2="70"/>
        <line x1="30" y1="30" x2="30" y2="70"/>
        <line x1="70" y1="30" x2="70" y2="70"/>
        <line x1="50" y1="10" x2="50" y2="20"/>
        <line x1="50" y1="80" x2="50" y2="90"/>
        <line x1="10" y1="50" x2="20" y2="50"/>
        <line x1="80" y1="50" x2="90" y2="50"/>
      </svg>
    </div> */}
        <div className="relative h-full flex items-center  min-h-[400px]">
          {HeroData.map((data, index) => (
            <div
              key={data.id}
              className={`flex justify-center ${getSlideClass(index, 'content')}`}
            >
              <div className="text-left space-y-6 slide-in">
                <div className="prose prose-lg text-white">
                  <h1 className="lg:text-6xl text-3xl  font-bold bg-gradient-to-bl from-[#101447] to-[#1201a9]  bg-clip-text text-transparent mb-4 leading-normal">{data.title}</h1>
                  <h2 className="text-xl bg-gradient-to-r from-cyan-600 to-blue-900 bg-clip-text text-transparent mb-6">{data.subtitle}</h2>
                  
                  <p className="mb-6 text-gray-600">
                    {data.description}
                  </p>
                  
                  <div className="mb-6">
                    {/* <h3 className="text-lg font-semibold text-white mb-3">Key Features:</h3> */}
                    <ul className="grid grid-cols-2 gap-2">
                      {data.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Side - Image Carousel */}
        <div className="z-20 relative flex justify-center mb-20 md:mb-0">
          <div className="relative w-[80%] h-[400px]">
            {HeroData.map((data, index) => (
              <div
                key={data.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === currentSlide 
                    ? 'opacity-100 scale-100 rotate-0 z-20' 
                    : 'opacity-0 scale-90 rotate-2 z-10'
                }`}
              >
          <div className="w-full h-full relative">
  {/* Image - should be on top */}
  <img 
    src={data.image}
    alt={data.title}
    className="w-full h-full object-cover transform -skew-6 shadow-2xl z-20 relative"
  />

  {/* Bottom-left box - behind image */}
  <div className="absolute -bottom-10 -left-10 w-32 h-32 from-cyan-600 to-blue-800 bg-gradient-to-br opacity-30 -skew-6 z-10"></div>

  {/* Top-right box - behind image */}
  <div className="absolute -top-10 -right-10 w-32 h-32 from-cyan-600 to-blue-800 bg-gradient-to-br opacity-30  -skew-6 z-10"></div>
</div>

              </div>
            ))}
            
            
           
          </div>

          {/* Decorative Elements */}
          <div className="absolute  -top-5 left-10 animate-bounce grid grid-cols-6 gap-2 opacity-30">
            {Array.from({ length: 24 }).map((_, index) => (
              <div key={index} className="w-2 h-2 -skew-12 from-cyan-400 to-blue-400 bg-gradient-to-br  rounded-full"></div>
            ))}
          </div>
          
          <div className="absolute  -bottom-5 right-10 animate-bounce grid grid-cols-6 gap-2 opacity-30">
            {Array.from({ length: 24 }).map((_, index) => (
              <div key={index} className="w-2 -skew-12 h-2 from-cyan-400 to-blue-400 bg-gradient-to-br  rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;