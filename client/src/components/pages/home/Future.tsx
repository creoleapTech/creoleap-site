import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const Future = () => {
  const [visible, setVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisible(true);
          } else {
            // Reset visibility when component goes out of viewport
            setVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) observer.observe(sectionRef.current);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const features = [
    {
      icon: "mdi:book-education-outline",
      color: "#6504b0",
      title: "NEP-Aligned Curriculum",
      desc: "Our programs are designed to meet the guidelines of the National Education Policy, ensuring future-ready education.",
      angle: 0
    },
    {
      icon: "mdi:atom",
      color: "#00BFFF",
      title: "CCC Methodology",
      desc: "We integrate Curiosity, Creativity, and Critical Thinking into every learning experience.",
      angle: 40
    },
    {
      icon: "mdi:robot",
      color: "#FF4500",
      title: "Innovative Learning Solutions",
      desc: "Innovative Learning Solutions",
      angle: 80
    },
    {
      icon: "mdi:hand-extended-outline",
      color: "#32CD32",
      title: "Hands-On Training Programs",
      desc: "Our expert-led training sessions empower both teachers and students with practical knowledge.",
      angle: 120
    },
    {
      icon: "mdi:flask-outline",
      color: "#FFA500",
      title: "Experiential Learning Focus",
      desc: "We prioritize real-world applications over rote memorization to enhance engagement and retention.",
      angle: 160
    },
    {
      icon: "mdi:toolbox-outline",
      color: "#800080",
      title: "Comprehensive Resources",
      desc: "From robotics kits to AI-driven tools, we offer a diverse range of learning materials.",
      angle: 200
    },
    {
      icon: "mdi:account-group",
      color: "#1E90FF",
      title: "Expert-Led Development",
      desc: "Our team of professionals ensures high-quality content and solutions tailored to modern education needs.",
      angle: 240
    },
    {
      icon: "mdi:desktop-mac",
      color: "#DC143C",
      title: "Innovation Hubs",
      desc: "We create collaborative spaces that promote creativity and technological exploration.",
      angle: 280
    },
    {
      icon: "mdi:headset",
      color: "#2E8B57",
      title: "Dedicated Support",
      desc: "We provide ongoing guidance to ensure seamless implementation of our solutions.",
      angle: 320
    }
  ];

  const getRadius = () => {
    const viewportWidth = window.innerWidth;
    if (isMobile) {
      const cardWidth = 128;
      const maxRadius = (Math.min(viewportWidth, 400) - cardWidth) / 2;
      return Math.max(80, Math.min(maxRadius, 120));
    }
    if (viewportWidth < 1024) return 200;
    return 200;
  };

  const getCardSize = () => {
    if (isMobile) return 'w-32 h-32';
    if (window.innerWidth < 1024) return 'w-40 h-40';
    return 'w-40 h-40';
  };

  const getContainerSize = () => {
    const radius = getRadius();
    const cardWidth = isMobile ? 128 : window.innerWidth < 1024 ? 160 : 192;
    const totalSize = (radius + cardWidth / 2) * 2;
    return isMobile ? `${Math.max(totalSize, 300)}px` : '600px';
  };

  const getFeaturePosition = (feature, isInitial = false) => {
    const radius = isInitial ? 0 : getRadius();
    const angleRad = (feature.angle * Math.PI) / 180;
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);

    return {
      x: `calc(50% + ${x}px)`,
      y: `calc(50% + ${y}px)`
    };
  };

  return (
    <section className="relative lg:py-10 py-10 px-4 sm:px-6 lg:px-8 md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Layer with Blur */}
      <div className="absolute inset-0 bg-[url('/images/robo2.webp')] bg-cover bg-center bg-no-repeat blur-xs"></div>

      {/* Optional dark overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="max-w-7xl mx-auto relative w-full" ref={sectionRef}>
        {/* Title and subtitle */}
        <div className="text-center">
          <h3 className="lg:text-5xl md:text-3xl text-2xl font-bold text-white inline-block pb-2">
            Accelerating the Future with Creoleap
          </h3>
          <div className="w-24 h-1 bg-gradient-to-br from-[#101447] to-[#1201a9] mx-auto lg:mt-4 md:mt-2 mt-0 rounded-full"></div>
        </div>
        {/* Circular layout container */}
        <div className="relative w-full max-w-6xl mx-auto flex items-center p-1 lg:my-1 my-1 justify-center">
          <div
            className="relative"
            style={{
              width: getContainerSize(),
              height: getContainerSize(),
              maxWidth: '100%',
            }}
          >
            {/* Connecting lines - Animate in after circles */}
            {features.map((feature, i) => {
              const initialPos = getFeaturePosition(feature, true);
              const finalPos = getFeaturePosition(feature, false);
              
              return (
                <div
                  key={`line-${i}`}
                  className="absolute w-px bg-gradient-to-b from-transparent via-cyan-500/80 to-transparent"
                  style={{
                    left: '50%',
                    top: '50%',
                    height: `${getRadius() * 2}px`,
                    transform: `
                      translate(-50%, -50%)
                      rotate(${feature.angle}deg)
                    `,
                    transformOrigin: 'center center',
                    opacity: visible ? 1 : 0,
                    transition: `opacity 0.5s ease-out ${(i * 50) + 80}ms`,
                  }}
                />
              );
            })}

            {/* Features */}
            {features.map((feature, i) => {
              const initialPos = getFeaturePosition(feature, true);
              const finalPos = getFeaturePosition(feature, false);

              return (
                <div
                  key={i}
                  className={`absolute ${getCardSize()} transform transition-all duration-1000 ease-out-back`}
                  style={{
                    left: visible ? finalPos.x : initialPos.x,
                    top: visible ? finalPos.y : initialPos.y,
                    transform: `translate(-50%, -50%)`,
                    transitionDelay: `${i * 10}ms`,
                    opacity: visible ? 1 : 0,
                    zIndex: activeFeature === i ? 50 : 10,
                  }}
                  onMouseEnter={() => setActiveFeature(i)}
                  onMouseLeave={() => setActiveFeature(null)}
                  onClick={() => isMobile && setActiveFeature(activeFeature === i ? null : i)}
                >
                  {/* Feature Card */}
                  <div
                    className={`relative w-full h-full rounded-full bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] backdrop-blur-lg border transition-all duration-500 ${
                      activeFeature === i
                        ? 'scale-125 border-cyan-400/50 shadow-2xl shadow-cyan-500/30'
                        : 'scale-100 border-gray-600/30 shadow-lg hover:scale-110 hover:border-cyan-300/30'
                    }`}
                  >
                    {/* Content */}
                    <div className="h-full flex flex-col justify-center p-4 lg:p-6 text-center">
                      {/* Title - Always Visible */}
                      <h3
                        className={`md:font-bold font-medium lg:mb-2 transition-all duration-300 ${
                          activeFeature === i
                            ? 'text-white text-[9px] lg:text-sm'
                            : 'text-gray-300 text-[12px] lg:text-sm'
                        }`}
                      >
                        {feature.title.split(' ').slice(0, 2).join(' ')}
                        {feature.title.split(' ').length > 2 && (
                          <span className="block">
                            {feature.title.split(' ').slice(2).join(' ')}
                          </span>
                        )}
                      </h3>

                      {/* Description - Only on Hover/Tap */}
                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          activeFeature === i
                            ? 'max-h-32 opacity-100 mt-1'
                            : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="lg:text-xs text-[8px] text-gray-300 leading-tight">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Center Icon */}
            <div
              className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{
                transitionDelay: '1200ms'
              }}
            >
              <div className="relative">
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-[#080A25] via-[#080e4a] to-[#0a015a] flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                  <Icon icon="mdi:rocket-launch" className="text-2xl lg:text-4xl text-white" />
                </div>
                {/* Pulsing rings - Only start after initial animation */}
                <div 
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                  style={{
                    animation: visible ? 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' : 'none',
                    animationDelay: '1500ms'
                  }}
                ></div>
                <div 
                  className="absolute inset-0 rounded-full border-2 border-pink-400/20"
                  style={{
                    animation: visible ? 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite 1s' : 'none',
                    animationDelay: '2500ms'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Instructions */}
        {isMobile && (
          <div className="text-center ">
            <p className="text-gray-400 text-sm">
              Tap on any card to view details
            </p>
          </div>
        )}

        {/* Background Decorations */}
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/2 right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000"></div>
      </div>

      <style>{`
        @keyframes spin-slow { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        @keyframes pulse { 
          0%, 100% { transform: scale(1); opacity: 0.7; } 
          50% { transform: scale(1.1); opacity: 1; } 
        }
        @keyframes ping { 
          0% { transform: scale(1); opacity: 1; } 
          75%, 100% { transform: scale(2); opacity: 0; } 
        }
        @keyframes bounce { 
          0%, 100% { transform: scale(1); } 
          50% { transform: scale(1.05); } 
        }
        
        /* Custom easing for the circle animation */
        .ease-out-back {
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-bounce { animation: bounce 0.5s ease; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        
        /* Custom scrollbar for description */
        .overflow-hidden::-webkit-scrollbar {
          width: 4px;
        }
        .overflow-hidden::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 2px;
        }
        .overflow-hidden::-webkit-scrollbar-thumb {
          background: rgba(6, 182, 212, 0.5);
          border-radius: 2px;
        }
      `}</style>
    </section>
  );
};

export default Future;