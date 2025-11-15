import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

// Define feature type
interface Feature {
  icon: string;
  color: string;
  title: string;
  desc: string;
  angle: number;
}

const Future = () => {
  const [visible, setVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      window.removeEventListener('resize', checkMobile);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

const features: Feature[] = [
  {
    icon: "mdi:book-education-outline",
    color: "#6504b0",
    title: "NEP-Aligned Curriculum",
    desc: "Curriculum designed to meet National Education Policy guidelines for future-ready education.",
    angle: 0
  },
  {
    icon: "mdi:atom",
    color: "#00BFFF",
    title: "CCC Methodology",
    desc: "Integrates Curiosity, Creativity, and Critical Thinking into every learning experience.",
    angle: 40
  },
  {
    icon: "mdi:robot",
    color: "#FF4500",
    title: "Innovative Learning",
    desc: "Cutting-edge tools and methods to transform educational experiences.",
    angle: 80
  },
  {
    icon: "mdi:hand-extended-outline",
    color: "#32CD32",
    title: "Hands-On Training",
    desc: "Expert-led practical sessions for teachers and students.",
    angle: 120
  },
  {
    icon: "mdi:flask-outline",
    color: "#FFA500",
    title: "Experiential Learning",
    desc: "Focus on real-world applications over rote memorization.",
    angle: 160
  },
  {
    icon: "mdi:toolbox-outline",
    color: "#800080",
    title: "Comprehensive Resources",
    desc: "Diverse learning materials from robotics kits to AI tools.",
    angle: 200
  },
  {
    icon: "mdi:account-group",
    color: "#1E90FF",
    title: "Expert-Led Development",
    desc: "Professional team ensuring high-quality educational content.",
    angle: 240
  },
  {
    icon: "mdi:desktop-mac",
    color: "#DC143C",
    title: "Innovation Hubs",
    desc: "Collaborative spaces promoting creativity and tech exploration.",
    angle: 280
  },
  {
    icon: "mdi:headset",
    color: "#2E8B57",
    title: "Dedicated Support",
    desc: "Ongoing guidance for seamless solution implementation.",
    angle: 320
  }
];

  const getRadius = (): number => {
    const width = window.innerWidth;
    if (isMobile) {
      const cardWidth = 128;
      const maxRadius = (Math.min(width, 400) - cardWidth) / 2;
      return Math.max(80, Math.min(maxRadius, 120));
    }
    return width < 1024 ? 200 : 200;
  };

  const getCardSize = (): string => {
    if (isMobile) return 'w-36 h-36';
    return window.innerWidth < 1024 ? 'w-40 h-40' : 'w-44 h-44';
  };

  const getContainerSize = (): string => {
    const radius = getRadius();
    const cardSize = isMobile ? 128 : window.innerWidth < 1024 ? 160 : 192;
    const total = (radius + cardSize / 2) * 2;
    return isMobile ? `${Math.max(total, 300)}px` : '650px';
  };

  const getFeaturePosition = (feature: Feature, isInitial = false): { x: string; y: string } => {
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
    <section className="relative lg:py-12 py-8 px-4 sm:px-6 lg:px-8 lg:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[url('/images/robo2.webp')] bg-cover bg-center bg-no-repeat blur-sm"></div>
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="max-w-7xl mx-auto relative w-full" ref={sectionRef}>
        {/* Title */}
        <div className="text-center mb-8">
          <h3 className="lg:text-5xl md:text-4xl text-3xl font-bold text-white">
            Accelerating the Future with Creoleap
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-[#101447] to-[#1201a9] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Circular Layout */}
        <div className="relative flex justify-center md:-mt-12  ">
          <div
            className="relative"
            style={{
              width: getContainerSize(),
              height: getContainerSize(),
              maxWidth: '100%',
            }}
          >
            {/* Connecting Lines */}
            {features.map((feature, i) => {
              getFeaturePosition(feature, false);

              return (
                <div
                  key={`line-${i}`}
                  className="absolute w-px  bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent transition-opacity duration-500"
                  style={{
                    left: '50%',
                    top: '50%',
                    height: `${getRadius() * 2}px`,
                    transform: `translate(-50%, -50%) rotate(${feature.angle}deg)`,
                    transformOrigin: 'center',
                    opacity: visible ? 1 : 0,
                    transitionDelay: `${i * 50 + 100}ms`,
                  }}
                />
              );
            })}

            {/* Feature Cards */}
            {features.map((feature, i) => {
              const pos = getFeaturePosition(feature, !visible);

              return (
                <div
                  key={i}
                  className={`absolute ${getCardSize()} transition-all duration-1000 ease-out-back`}
                  style={{
                    left: pos.x,
                    top: pos.y,
                    transform: 'translate(-50%, -50%)',
                    transitionDelay: `${i * 80}ms`,
                    opacity: visible ? 1 : 0,
                    zIndex: activeFeature === i ? 20 : 10,
                  }}
                  onMouseEnter={() => setActiveFeature(i)}
                  onMouseLeave={() => setActiveFeature(null)}
                  onClick={() => isMobile && setActiveFeature(activeFeature === i ? null : i)}
                >
                  <div
                    className={`relative w-full h-full rounded-full bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] backdrop-blur-md border transition-all duration-300 ${
                      activeFeature === i
                        ? 'scale-125 border-cyan-400/60 shadow-2xl shadow-cyan-500/40'
                        : 'border-gray-600/40 shadow-lg hover:scale-110 hover:border-cyan-300/40'
                    }`}
                  >
                    <div className="h-full flex flex-col justify-center p-3 lg:p-5 text-center">
                      <h3
                        className={`font-bold transition-all duration-300 ${
                          activeFeature === i
                            ? 'text-white text-xs lg:text-sm'
                            : 'text-gray-300 text-xs lg:text-sm'
                        }`}
                      >
                        {feature.title.split(' ').map((word, idx) => (
                          <span key={idx} className={idx > 1 ? 'block' : ''}>
                            {word}{' '}
                          </span>
                        ))}
                      </h3>

                      <div
                        className={`transition-all duration-500 overflow-hidden ${
                          activeFeature === i ? 'max-h-32 opacity-100 mt-2' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <p className="text-[10px] lg:text-xs text-gray-300 leading-tight">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Center Rocket */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
                visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
              }`}
              style={{ transitionDelay: '1200ms' }}
            >
              <div className="relative">
                <div className="w-20 h-20 lg:w-32 lg:h-32 rounded-full bg-gradient-to-r from-[#080A25] via-[#080e4a] to-[#0a015a] flex items-center justify-center shadow-2xl shadow-cyan-500/50">
                  <Icon icon="mdi:rocket-launch" className="text-2xl lg:text-4xl text-white" />
                </div>
                <div
                  className="absolute inset-0 rounded-full border-2 border-cyan-400/30"
                  style={{
                    animation: visible ? 'ping 2s cubic-bezier(0,0,0.2,1) infinite' : 'none',
                    animationDelay: '1500ms'
                  }}
                />
                <div
                  className="absolute inset-0 rounded-full border-2 border-pink-400/20"
                  style={{
                    animation: visible ? 'ping 2s cubic-bezier(0,0,0.2,1) infinite 1s' : 'none',
                    animationDelay: '2500ms'
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Hint */}
        {isMobile && (
          <p className="text-center text-gray-400 text-sm mt-6">
            Tap on any card to view details
          </p>
        )}

        {/* Decorative Blobs */}
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/2 right-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse translate-x-1/2 translate-y-1/2 animation-delay-2000"></div>
      </div>

      <style>{`
        @keyframes ping {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        .ease-out-back {
          transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .animation-delay-2000 { animation-delay: 2s; }
      `}</style>
    </section>
  );
};

export default Future;