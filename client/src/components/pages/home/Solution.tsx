import React, { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

// Define types for content
type ContentItem = {
  id: string;
  title: string;
  description: string;
  buttonText: string;
  img: string;
  gradient: string;
  hoverColor: string;
};

type TabButtonRefs = Record<string, HTMLButtonElement | null>;

const Solution: React.FC = () => {
  // Content data
  const content: ContentItem[] = [
    {
      id: "stem",
      title: "STEM Education",
      description: "At CreoLeap Technologies, our STEM programs encourage hands-on learning through interactive experiments, real-world projects, and problem-solving activities.",
      buttonText: "Discover more",
      img: "/robo.webp",
      gradient: "from-sky-400 to-sky-700",
      hoverColor: "bg-blue-100"
    },
    {
      id: "robotics",
      title: "Robotics",
      description: "Our Robotics programs empower students to design, build, and program intelligent robots, bridging theory and real-world applications.",
      buttonText: "Start Building",
      img: "/lego.avif",
      gradient: "from-red-400 to-red-600",
      hoverColor: "bg-red-100"
    },
    {
      id: "electronics",
      title: "Electronics",
      description: "Hands-on electronics education with smart kits, interactive modules, and AI-powered simulations for circuit design and IoT technology.",
      buttonText: "Begin journey",
      img: "/electronics.webp",
      gradient: "from-yellow-400 to-yellow-600",
      hoverColor: "bg-yellow-100"
    },
    {
      id: "ai",
      title: "AI (Artificial Intelligence)",
      description: "AI Education programs covering machine learning, data science, and neural networks with real-world applications and ethical AI development.",
      buttonText: "Explore AI",
      img: "/ai.webp",
      gradient: "from-teal-300 to-teal-600",
      hoverColor: "bg-teal-100"
    },
    {
      id: "iot",
      title: "IoT (Internet of Things) Education",
      description: "IoT curriculum introducing connected smart devices through hands-on projects in home automation, smart cities, and industrial IoT.",
      buttonText: "Learn More",
      img: "/cloud.png",
      gradient: "from-blue-800 to-gray-900",
      hoverColor: "bg-indigo-100"
    }
  ];

  // State and refs
  const [activeSection, setActiveSection] = useState<string>(content[0].id);
  // const [imageLoaded, setImageLoaded] = useState<Record<string, boolean>>(
  //   content.reduce((acc, item) => ({ ...acc, [item.id]: false }), {})
  // );
  const [isUserInteracted, setIsUserInteracted] = useState<boolean>(false);
  const tabButtonsRef = useRef<TabButtonRefs>({});
  const navElementRef = useRef<HTMLDivElement>(null);
  const sectionElementRef = useRef<HTMLDivElement>(null);
  const componentRootRef = useRef<HTMLDivElement>(null);
  const autoplayIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const userInteractionTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-rotate logic
  useEffect(() => {
    let observer: IntersectionObserver;

    const startAutoplay = () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      autoplayIntervalRef.current = setInterval(() => {
        if (!isUserInteracted) {
          setActiveSection((prev) => {
            const currentIndex = content.findIndex(item => item.id === prev);
            const nextIndex = (currentIndex + 1) % content.length;
            return content[nextIndex].id;
          });
        }
      }, 3000);
    };

    const handleUserInteraction = () => {
      setIsUserInteracted(true);
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
      userInteractionTimeoutRef.current = setTimeout(() => {
        setIsUserInteracted(false);
      }, 10000); // Pause for 10 seconds
    };

    // Initialize Intersection Observer
    if (sectionElementRef.current) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && !isUserInteracted) {
              startAutoplay();
            } else {
              if (autoplayIntervalRef.current) {
                clearInterval(autoplayIntervalRef.current);
              }
            }
          });
        },
        { threshold: 0.5 }
      );
      observer.observe(sectionElementRef.current);
    }

    if (!isUserInteracted) {
      startAutoplay();
    }

    // Add event listeners for user interaction
    const root = componentRootRef.current;
    if (root) {
      root.addEventListener('click', handleUserInteraction);
      root.addEventListener('touchstart', handleUserInteraction);
    }

    return () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
      }
      if (userInteractionTimeoutRef.current) {
        clearTimeout(userInteractionTimeoutRef.current);
      }
      if (sectionElementRef.current && observer) {
        observer.unobserve(sectionElementRef.current);
      }
      if (root) {
        root.removeEventListener('click', handleUserInteraction);
        root.removeEventListener('touchstart', handleUserInteraction);
      }
    };
  }, [content, isUserInteracted]); // Removed activeSection from dependencies

  // Scroll active tab into view
  useEffect(() => {
    const button = tabButtonsRef.current[activeSection];
    if (button && navElementRef.current) {
      const nav = navElementRef.current;
      const buttonRect = button.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      const scrollLeft = button.offsetLeft - (navRect.width / 2) + (buttonRect.width / 2);
      const maxScroll = nav.scrollWidth - nav.clientWidth;
      const constrainedScroll = Math.max(0, Math.min(scrollLeft, maxScroll));

      nav.scrollTo({
        left: constrainedScroll,
        behavior: 'smooth'
      });
    }
  }, [activeSection]);

  // Handle image loading
  // const handleImageLoad = (id: string) => {
  //   setImageLoaded(prev => ({ ...prev, [id]: true }));
  // };

  // Handle tab click
  // const handleTabClick = (id: string) => {
  //   setActiveSection(id);
  //   setIsUserInteracted(true);
  //   if (userInteractionTimeoutRef.current) {
  //     clearTimeout(userInteractionTimeoutRef.current);
  //   }
  //   userInteractionTimeoutRef.current = setTimeout(() => {
  //     setIsUserInteracted(false);
  //   }, 10000); // Pause for 10 seconds
  // };

  // Card data for the grid section
  const cardData = [
    {
      icon: "carbon:education",
      title: "AI-Based Robotics Education",
      description: "Smart robotic kits for K-12 students with AI-powered learning and real-world applications."
    },
    {
      icon: "solar:notebook-bookmark-bold-duotone",
      title: "AI-Driven STEM Curriculum",
      description: "Customized AI-infused STEM programs aligned with NEP 2020 and global standards."
    },
    {
      icon: "mdi:laptop",
      title: "AI-Powered Learning Platform",
      description: "Interactive online modules for immersive robotics education with virtual AI simulations."
    },
    {
      icon: "prime:microchip-ai",
      title: "AI Training & Workshops",
      description: "AI and robotics boot camps for students and professionals with faculty training programs."
    }
  ];

  return (
    <div ref={componentRootRef} className="solution-component font-ubuntu">
      {/* Header Section */}
      {/* <header className="lg:pt-20 md:pt-16 pt-10 z-10 bg-white">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-center lg:mb-16 md:mb-12 mb-8">
            <h3 className="lg:text-5xl md:text-3xl text-2xl font-bold bg-gradient-to-tr from-[#101447] to-[#1201a9] text-transparent bg-clip-text inline-block pb-2">
              Future Ready Learning Solutions
            </h3>
            <div className="w-24 h-1 bg-gradient-to-br from-[#101447] to-[#1201a9] mx-auto lg:mt-4 md:mt-2 mt-0 rounded-full"></div>
          </div>

          <div className="flex justify-center items-center lg:py-4 md:py-3 py-1">
            <nav 
              ref={navElementRef} 
              className="solution-nav w-full max-w-7xl overflow-x-auto scrollbar-hide"
            >
              <ul className="flex min-w-max justify-start lg:justify-center gap-2 lg:gap-4 xl:gap-5 border-b px-4">
                {content.map((item) => (
                  <li key={item.id} className="flex-shrink-0">
                    <button
                      ref={el => tabButtonsRef.current[item.id] = el}
                      className={`lg:px-8 lg:py-5 md:px-6 md:py-4 px-4 py-3 md:text-lg text-sm lg:text-xl font-ubuntu font-bold whitespace-nowrap transition-all duration-300 lg:rounded-t-3xl md:rounded-t-2xl rounded-t-xl ${
                        activeSection === item.id
                          ? `bg-gradient-to-b ${item.gradient} text-white shadow-lg`
                          : `text-gray-600 hover:${item.hoverColor} hover:scale-105`
                      }`}
                      onClick={() => handleTabClick(item.id)}
                      aria-selected={activeSection === item.id}
                      role="tab"
                    >
                      {item.title}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header> */}

      {/* Main Content Section */}
      {/* <main ref={sectionElementRef} className="solution-main lg:container mx-auto p-4 lg:p-8 font-ubuntu">
        {content.map((item) => (
          activeSection === item.id && (
            <div key={item.id} className="mt-0 animate-solution-fadeIn">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
    
                <div className="w-full lg:w-1/2 md:w-3/4 relative">
                  {!imageLoaded[item.id] && (
                    <div className="w-full h-64 lg:h-80 rounded-[40px] shadow-lg bg-gray-200 animate-solution-pulse"></div>
                  )}
                  <img
                    src={item.img}
                    alt={`${item.title} illustration`}
                    className={`w-full h-auto rounded-[40px] shadow-lg transition-opacity duration-300 ${
                      imageLoaded[item.id] ? 'opacity-100' : 'opacity-0'
                    }`}
                    onLoad={() => handleImageLoad(item.id)}
                    loading="lazy"
                  />
                </div>

  
                <div className="w-full lg:w-1/2 md:w-3/4 flex flex-col lg:gap-6 gap-4">
                  <h2 className={`md:text-3xl text-2xl lg:text-4xl font-extrabold font-cool leading-normal bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.title}
                  </h2>
                  <p className="md:text-lg text-base lg:text-xl leading-normal font-ubuntu text-gray-600">
                    {item.description}
                  </p>
                  <button
                    className={`md:px-7 px-5 bg-gradient-to-l ${item.gradient} md:py-3 py-2 font-medium font-ubuntu text-lg rounded-full text-white w-fit hover:scale-105 transition-transform duration-200 shadow-md`}
                    onClick={() => handleTabClick(item.id)} // Consider replacing with a different action
                  >
                    {item.buttonText}
                  </button>
                </div>
              </div>
            </div>
          )
        ))}
      </main> */}

      {/* Cards Section */}
<section className="solution-section cursor-default font-ubuntu py-12 px-4 sm:px-6 lg:px-8">
  <div className="solution-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
    {cardData.map((card, index) => (
      <div
        key={index}
        className="solution-card relative bg-white p-6 rounded-xl transition-all duration-300 hover:-translate-y-7 hover:shadow-lg group"
      >
        {/* Border animation container */}
        <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
          {/* Bottom border (always visible) */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>

          {/* Top border (animates in on hover) */}
          <div className="absolute top-0 left-0 right-0 h-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent
                         transition-all duration-300 origin-top group-hover:h-0.5"></div>

          {/* Left border (animates in on hover) */}
          <div className="absolute top-0 bottom-0 left-0 w-0 bg-gradient-to-b from-transparent via-indigo-500 to-transparent
                         transition-all duration-300 origin-left group-hover:w-0.5"></div>

          {/* Right border (animates in on hover) */}
          <div className="absolute top-0 bottom-0 right-0 w-0 bg-gradient-to-b from-transparent via-indigo-500 to-transparent
                         transition-all duration-300 origin-right group-hover:w-0.5"></div>

          {/* Corner connectors for smooth rounded borders */}
          <div className="absolute top-0 left-0 w-1 h-1 bg-white transition-all duration-300 group-hover:bg-indigo-500"></div>
          <div className="absolute top-0 right-0 w-1 h-1 bg-white transition-all duration-300 group-hover:bg-indigo-500"></div>
          <div className="absolute bottom-0 left-0 w-1 h-1 bg-indigo-500 transition-all duration-300 group-hover:bg-indigo-600"></div>
          <div className="absolute bottom-0 right-0 w-1 h-1 bg-indigo-500 transition-all duration-300 group-hover:bg-indigo-600"></div>
        </div>

        {/* Card content */}
        <div className="relative z-10">
          <div className="solution-icon flex items-center justify-center w-full p-3 rounded-lg mb-4 text-indigo-600
                         transition-all duration-300 group-hover:text-indigo-700 group-hover:rotate-3 group-hover:scale-105">
            <Icon icon={card.icon} width="48" height="48" />
          </div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800 md:text-xl transition-colors duration-300 group-hover:text-indigo-900">
            {card.title}
          </h3>
          <p className="text-gray-600 m-0 text-sm md:text-base transition-colors duration-300 group-hover:text-gray-700">
            {card.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</section>




      {/* Animation Styles */}
      <style>{`
        .animate-solution-fadeIn {
          animation: solutionFadeIn 0.5s ease-in-out;
        }
        @keyframes solutionFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-solution-pulse {
          animation: solutionPulse 2s infinite;
        }
        @keyframes solutionPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        .solution-section {
          padding: 2rem 1rem;
          text-align: center;
        }
        .solution-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 0 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .solution-card {
          background: white;

        }
   
        .solution-card h3 {
          font-size: 1.5rem;
          font-weight: 600;
          color: #1e293b;
          margin: 1rem 0;
        }
        .solution-card p {
          font-size: 1rem;
          color: #64748b;
          line-height: 1.6;
        }
        .solution-icon {
          color: rgba(112, 50, 195, 1);
          margin-bottom: 1rem;
        }
        
        @media (max-width: 768px) {
          .solution-section {
            padding: 1rem 0;
          }
          .solution-grid {
            grid-template-columns: 1fr;
            padding: 0 1rem;
            gap: 1.5rem;
          }
          .solution-card {
            padding: 1.5rem;
          }
          .solution-card h3 {
            font-size: 1.25rem;
          }
          .solution-card p {
            font-size: 0.9rem;
          }
        }
        
        @media (max-width: 640px) {
          .solution-nav {
            margin: 0 -1rem;
          }
          .solution-nav ul {
            padding: 0 1rem;
          }
        }
      `}</style>
    </div>
  );
};

export default Solution;