import { useState, useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const Partners = () => {
  const [isPaused, setIsPaused] = useState(false);
const scrollRef = useRef<HTMLDivElement | null>(null);

  // Partner logos with names
  const partners = [
    {
      name: "IIT Delhi",
      logo: "https://upload.wikimedia.org/wikipedia/en/f/fd/Indian_Institute_of_Technology_Delhi_Logo.svg",
      category: "Academic Partner"
    },
    {
      name: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg",
      category: "Technology Partner"
    },
    {
      name: "Google for Education",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      category: "Education Partner"
    },
    {
      name: "CBSE",
      logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/Central_Board_of_Secondary_Education_logo.png",
      category: "Board Partner"
    },
    {
      name: "Arduino",
      logo: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg",
      category: "Hardware Partner"
    },
    {
      name: "Raspberry Pi",
      logo: "https://upload.wikimedia.org/wikipedia/en/c/cb/Raspberry_Pi_Logo.svg",
      category: "Hardware Partner"
    },
    {
      name: "AWS Educate",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      category: "Cloud Partner"
    },
    {
      name: "Intel",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Intel_logo_%282006-2020%29.svg",
      category: "Technology Partner"
    },
    {
      name: "NVIDIA",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      category: "AI Partner"
    },
    {
      name: "IBM",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
      category: "Technology Partner"
    },
    {
      name: "Coursera",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/97/Coursera-Logo_600x600.svg",
      category: "Education Partner"
    },
    {
      name: "MIT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/MIT_logo.svg",
      category: "Academic Partner"
    }
  ];

  // Triple the partners for seamless infinite scroll
  const infinitePartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 1.8; // Pixels per frame

    const animate = () => {
      if (!isPaused) {
        scrollPosition += scrollSpeed;
        
        // Reset position seamlessly when we've scrolled through one set
        const cardWidth = 140; // w-60 = 240px
        const gap = 24; // gap-8 = 32px
        const totalWidth = (cardWidth + gap) * partners.length;
        
        if (scrollPosition >= totalWidth) {
          scrollPosition = 0;
        }
        
        scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [isPaused, partners.length]);

  return (
    <div className="pt-10 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl mb-5">
        <div className="text-center">
       
          <h2 className="lg:text-5xl md:text-3xl text-xl font-bold bg-gradient-to-bl from-[#101447] to-[#1201a9]  bg-clip-text text-transparent pb-4">
            Trusted Partnerships
          </h2>
        
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div 
        className="relative"
        onMouseEnter={() => setIsPaused(false)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 lg:w-40 w-5 bg-gradient-to-r from-white via-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 lg:w-40 w-5 bg-gradient-to-l from-white via-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="overflow-hidden py-0">
          <div 
            ref={scrollRef}
            className="flex gap-8"
            style={{ width: 'fit-content' }}
          >
            {infinitePartners.map((partner, index) => (
              <div
                key={index}
                className="w-52 lg:w-60 flex-shrink-0 group"
              >
                <div className="relative  transition-all duration-500 overflow-hidden border border-none  transform hover:-translate-y-2 hover:scale-105">
                  {/* Gradient Top Border */}
                  {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                  
                  {/* Category Badge */}
                  {/* <div className="absolute top-4 right-4 z-10">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {partner.category}
                    </span>
                  </div> */}

                  {/* Logo Container */}
                  <div className="p-8 flex flex-col items-center justify-center h-48">
                    <div className="relative w-full h-24 flex items-center justify-center mb-4">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Logo */}
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="relative max-w-full max-h-full object-contain  transition-all duration-500 drop-shadow-lg"
                      />
                    </div>

                    {/* Partner Name */}
                    {/* <h3 className="text-center font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {partner.name}
                    </h3> */}
                  </div>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pause Indicator */}
        {isPaused && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/80 text-white px-4 py-2 rounded-full text-sm font-medium z-20 flex items-center gap-2 backdrop-blur-sm shadow-lg">
            <Icon icon="mdi:pause-circle" className="text-lg" />
            Scroll Paused
          </div>
        )}
      </div>

    </div>
  );
};

export default Partners;