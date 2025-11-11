'use client';

import { useEffect, useRef, useState } from 'react';

// Extend window for GSAP + ScrollTrigger
declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

interface Program {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image: string;
}

const Programs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 5;

  const containerRef = useRef<HTMLDivElement>(null);
  // const heroRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const floatingElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const morphingShapeRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const HeroData: Program[] = [
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
      image: "/images/project3.jpg"
    },
    {
      id: 4,
      title: "Industry 4.0 Readiness Program",
      subtitle: "Future Skills for Smart Manufacturing",
      description: "An advanced program designed to prepare students and professionals for the Industry 4.0 revolution. Covers automation, IoT, AI integration, and smart manufacturing concepts to build workforce readiness for the digital industrial era.",
      features: ["Automation & IoT", "Smart Manufacturing", "AI Integration", "Industry 4.0 Standards"],
      image: "/images/project5.jpg"
    },
    {
      id: 5,
      title: "ROS Certification Program",
      subtitle: "Robot Operating System Mastery",
      description: "Hands-on training and certification on the Robot Operating System (ROS). Learn robotics middleware, sensor integration, motion planning, and control for industrial and research applications.",
      features: ["ROS Basics & Setup", "Sensor Integration", "Motion Planning", "Real-World Projects"],
      image: "/images/ros2.png"
    }
  ];

  useEffect(() => {
    const loadGSAP = async () => {
      const script1 = document.createElement('script');
      script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      document.head.appendChild(script1);

      await new Promise<void>((resolve) => { script1.onload = () => resolve(); });

      const script2 = document.createElement('script');
      script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
      document.head.appendChild(script2);

      await new Promise<void>((resolve) => { script2.onload = () => resolve(); });

      initAdvancedAnimations();
    };

    loadGSAP();

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const initAdvancedAnimations = () => {
    if (!window.gsap || !window.ScrollTrigger) return;

    const { gsap } = window;
    gsap.registerPlugin(window.ScrollTrigger);

    // Morphing background
    if (morphingShapeRef.current) {
      gsap.to(morphingShapeRef.current, {
        rotation: 360,
        scale: 1.2,
        duration: 20,
        repeat: -1,
        ease: "none"
      });
    }

    // Particle system
    particlesRef.current.forEach((particle) => {
      if (!particle) return;
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
    });

    // Card animations
    cardsRef.current.forEach((card) => {
      if (!card) return;

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
        ease: "power4.out",
        scrollTrigger: {
          trigger: card,
          start: "top 85%"
        }
      });

      const enter = () => gsap.to(card, { scale: 1.05, rotationY: 5, rotationX: 5, z: 50, duration: 0.3, ease: "power2.out" });
      const leave = () => gsap.to(card, { scale: 1, rotationY: 0, rotationX: 0, z: 0, duration: 0.5, ease: "power2.out" });

      card.addEventListener('mouseenter', enter);
      card.addEventListener('mouseleave', leave);

      return () => {
        card.removeEventListener('mouseenter', enter);
        card.removeEventListener('mouseleave', leave);
      };
    });

    // Floating elements
    floatingElementsRef.current.forEach((el, i) => {
      if (!el) return;
      gsap.to(el, {
        y: Math.sin(i) * 30,
        x: Math.cos(i) * 20,
        rotation: 360,
        duration: 3 + i,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
      });
    });

    // Text reveal
    document.querySelectorAll('.reveal-text').forEach((text) => {
      const chars = (text.textContent || '').split('');
      text.innerHTML = chars.map(char => `<span style="display:inline-block;opacity:0;transform:translateY(50px)">${char}</span>`).join('');
      gsap.to(text.children, {
        opacity: 1,
        y: 0,
        duration: 0.05,
        stagger: 0.02,
        ease: "power2.out",
        scrollTrigger: { trigger: text, start: "top 80%" }
      });
    });
  };

  useEffect(() => {
    if (!window.gsap) return;
    floatingElementsRef.current.forEach((el, i) => {
      if (el) {
        window.gsap.to(el, {
          x: mousePosition.x * (20 + i * 10),
          y: mousePosition.y * (15 + i * 8),
          duration: 0.8,
          ease: "power2.out"
        });
      }
    });
  }, [mousePosition]);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getSlideClass = (index: number) => {
    const base = "transition-all duration-700 ease-out";
    if (index === currentSlide) return `${base} opacity-100 translate-x-0`;
    if (index === (currentSlide - 1 + totalSlides) % totalSlides) return `${base} opacity-0 -translate-x-full absolute`;
    return `${base} opacity-0 translate-x-full absolute`;
  };

  return (
    <div ref={containerRef} className=" bg-gradient-to-b py-20 from-gray-50 to-indigo-50 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Morphing Background */}
      <div ref={morphingShapeRef} className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-full blur-3xl"></div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={i}
            ref={(el) => { particlesRef.current[i] = el; }}
            className="absolute w-1 h-1 bg-gradient-to-br from-cyan-600 to-blue-600 rounded-full opacity-30"
          />
        ))}
      </div>

      <style>{`
        @keyframes float { 0%, 100% { transform: translateY(0px) rotate(0deg); } 33% { transform: translateY(-10px) rotate(1deg); } 66% { transform: translateY(5px) rotate(-1deg); } }
        @keyframes slideInFromLeft { 0% { transform: translateX(-100%); opacity: 0; } 100% { transform: translateX(0); opacity: 1; } }
        .slide-in { animation: slideInFromLeft 1s ease-out; }
      `}</style>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-20">
        {/* Left: Content */}
        <div className="relative h-full flex items-center min-h-[400px]">
          {HeroData.map((data, index) => (
            <div key={data.id} className={`flex justify-center ${getSlideClass(index)}`}>
              <div className="text-left space-y-6 slide-in">
                <h1 className="lg:text-6xl text-3xl font-bold bg-gradient-to-bl from-[#101447] to-[#1201a9] bg-clip-text text-transparent mb-4 leading-normal">
                  {data.title}
                </h1>
                <h2 className="text-xl bg-gradient-to-r from-cyan-600 to-blue-900 bg-clip-text text-transparent mb-6">
                  {data.subtitle}
                </h2>
                <p className="mb-6 text-gray-600">{data.description}</p>
                <ul className="grid grid-cols-2 gap-2">
                  {data.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2"></span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Image */}
        <div className="relative flex justify-center mb-20 md:mb-0">
          <div className="relative w-[80%] h-[400px]">
            {HeroData.map((data, index) => (
              <div
                key={data.id}
                className={`absolute inset-0 transition-all duration-700 ease-out ${
                  index === currentSlide ? 'opacity-100 scale-100 z-20' : 'opacity-0 scale-90 z-10'
                }`}
              >
                <div className="w-full h-full relative">
                  <img src={data.image} alt={data.title} className="w-full h-full object-cover transform -skew-x-6 shadow-2xl z-20 relative" />
                  <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-gradient-to-br from-cyan-600 to-blue-800 opacity-30 -skew-x-6 z-10"></div>
                  <div className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-br from-cyan-600 to-blue-800 opacity-30 -skew-x-6 z-10"></div>
                </div>
              </div>
            ))}
          </div>

          {/* Decorative Dots */}
          <div className="absolute -top-5 left-10 animate-bounce grid grid-cols-6 gap-2 opacity-30">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full -skew-x-12"></div>
            ))}
          </div>
          <div className="absolute -bottom-5 right-10 animate-bounce grid grid-cols-6 gap-2 opacity-30">
            {Array.from({ length: 24 }).map((_, i) => (
              <div key={i} className="w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full -skew-x-12"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;