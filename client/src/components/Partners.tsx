import { useEffect, useRef } from 'react';
// import { Icon } from '@iconify/react';

const Partners = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const scrollSpeed = 1.8; // px per frame (same as testimonials)
  const scrollPosition = useRef(0);

  // Partner logos with names
  const partners = [
    {
      name: "Sree Narayana Guru Matric Hr Sec School",
      logo: "/images/SN-logo.png",
      category: "Academic Partner"
    },
    {
      name: "Carol Matric Hr Sec School",
      logo: "/images/carol-logo.png",
      category: "Academic Partner"
    },
    {
      name: "Meenakshi Matric Hr Sec School",
      logo: "/images/MM-logo.png",
      category: "Academic Partner"
    },
  ];

  // Triple the partners for seamless infinite scroll
  const infinitePartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cardWidth = 240; // w-60 = 240px
    const gap = 32; // gap-8 = 32px
    const totalWidth = (cardWidth + gap) * partners.length;

    const animate = () => {
      if (scrollContainer) {
        scrollPosition.current += scrollSpeed;

        // Reset seamlessly when we've scrolled through one set
        if (scrollPosition.current >= totalWidth) {
          scrollPosition.current = 0;
        }

        scrollContainer.style.transform = `translateX(-${scrollPosition.current}px)`;
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [partners.length]);

  return (
    <div className="lg:pt-10 py-5 px-4 bg-gradient-to-br from-white via-gray-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl lg:mb-5 mb-2">
        <div className="text-center">
          <h2 className="lg:text-5xl md:text-3xl text-xl font-bold bg-gradient-to-bl from-[#101447] to-[#1201a9] bg-clip-text text-transparent pb-4">
            Trusted Partnerships
          </h2>
        </div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 lg:w-40 w-5 bg-gradient-to-r from-white via-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 lg:w-40 w-5 bg-gradient-to-l from-white via-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="overflow-hidden lg:py-6 ">
          <div 
            ref={scrollRef}
            className="flex md:gap-8 gap-3"
            style={{ width: 'fit-content' }}
          >
            {infinitePartners.map((partner, index) => (
              <div
                key={index}
                className="md:w-60 w-32 flex-shrink-0 group"
              >
                <div className="relative transition-all duration-500 overflow-hidden  transform hover:-translate-y-2 hover:scale-105">
                  {/* Gradient Top Border */}
                  {/* <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}
                  
                  {/* Category Badge */}
                  {/* <div className="absolute top-4 right-4 z-10">
                    <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {partner.category}
                    </span>
                  </div> */}

                  {/* Logo Container */}
                  <div className="md:p-8 p-4 flex flex-col items-center justify-center md:h-48 h-32">
                    <div className="relative w-full h-24 flex items-center justify-center md:mb-4">
                      {/* Glow Effect */}
                      {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                      
                      {/* Logo */}
                      <img 
                        src={partner.logo} 
                        alt={partner.name}
                        className="relative max-w-full max-h-full object-contain  transition-all duration-500 drop-shadow-lg"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement;
                          img.style.display = 'none';
                          console.error('Failed to load logo:', partner.logo);
                        }}
                      />
                    </div>

                    {/* Partner Name (visible on hover) */}
                    {/* <h3 className="text-center text-sm font-semibold text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
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
      </div>
    </div>
  );
};

export default Partners;