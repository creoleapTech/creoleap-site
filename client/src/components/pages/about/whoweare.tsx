import { useEffect, useRef, useState } from 'react';
import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

export default function WhoWeAre() {
  // const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

 const images = [
    {
      src: "/images/1.jpeg",
      alt: "AI and Robotics Lab",
      title: "AI & Robotics Lab",
      description: "Advanced artificial intelligence and robotics setup"
    },
    {
      src: "/images/2.jpeg",
      alt: "STEM Laboratory",
      title: "STEM Laboratory",
      description: "Comprehensive science and technology learning environment"
    },
    {
      src: "/images/3.jpeg",
      alt: "VR Learning Space",
      title: "VR Learning Space",
      description: "Immersive virtual reality educational experiences"
    },
        {
      src: "/images/session/12.jpeg",
      alt: "AI & Robotics",
      title: "AI & Robotics",
      description: "Immersive virtual reality educational experiences"
    }
  ];
 const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 4000 })]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  // const handleMouseMove = (e) => {
  //   if (!containerRef.current) return;
  //   const rect = containerRef.current.getBoundingClientRect();
  //   setMousePosition({
  //     x: e.clientX - rect.left,
  //     y: e.clientY - rect.top
  //   });
  // };

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-10 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-200 rounded-full opacity-20 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-40 left-20 w-96 h-96 border-2 border-indigo-200 rotate-45 opacity-20"></div>
        <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-3xl rotate-12"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Dynamic Header */}
        {/* <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Discover</span>
            <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
          </div>
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-gray-900 mb-4">
            Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Are</span>
          </h2>
        </div> */}

        {/* Main Interactive Content */}
        <div 
          ref={containerRef}
          // onMouseMove={handleMouseMove}
          className="relative"
        >
          {/* Hero Content Block */}
          <div className={`relative mb-10 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <div className="relative bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-gray-200">
              {/* Gradient accent */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#080A25] via-[#080e4a] to-[#0a015a]"></div>
              
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left content - Takes 3 columns */}
                <div className="lg:col-span-3 p-8 sm:p-12 lg:p-16">
                  <div className="inline-block bg-gradient-to-r from-[#080A25] via-[#080e4a] to-[#0a015a] text-white px-6 py-2 rounded-full text-sm font-bold mb-8">
                    Creoleap Technologies
                  </div>
                  
                  <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Transforming Education Through Innovation
                  </h3>
                  
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    A leader in transforming education through innovative lab setups and tailored programs for schools and colleges. We specialize in Robotics, STEM, ATAL Tinkering, and Electronics Labs, alongside AI-integrated programs and industry-aligned certifications.
                  </p>

                  {/* Feature pills */}
                  <div className="flex flex-wrap gap-3">
                    {['Robotics', 'STEM Labs', 'AI Programs', 'Electronics'].map((tag, i) => (
                      <span key={i} className="px-5 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-700 rounded-full text-sm font-semibold border border-blue-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-2 relative bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] p-8 lg:p-12 flex items-center justify-center overflow-hidden rounded-2xl">
      <div className="relative w-full max-w-4xl">
        <div className="embla overflow-hidden rounded-xl" ref={emblaRef}>
          <div className="embla__container flex">
            {images.map((image, index) => (
              <div className="embla__slide flex-[0_0_100%] min-w-0" key={index}>
                <div className="relative h-[400px]  flex items-center justify-center">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                  {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                    <h3 className="text-white text-xl lg:text-2xl font-bold mb-2">
                      {image.title}
                    </h3>
                    <p className="text-blue-200 text-sm lg:text-base">
                      {image.description}
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button 
          onClick={scrollPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={scrollNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className="w-3 h-3 bg-white/50 rounded-full transition-all duration-300 hover:bg-white/80"
            />
          ))}
        </div>
      </div>
    </div>

              </div>
            </div>
          </div>

          {/* Mission & Vision Split Layout */}
          <div className={`grid lg:grid-cols-2 gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Mission - Diagonal Split */}
            <div className="group relative">
              <div className="relative h-full bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      {/* <div className="text-blue-200 text-sm font-semibold mb-1">01</div> */}
                      <h3 className="text-3xl font-bold text-white">Our Mission</h3>
                    </div>
                  </div>
                  
                  <p className="text-blue-50 text-lg leading-relaxed flex-grow">
                  We equip educators and students with cutting-edge tools and experiential learning, bridging theory and practice to drive innovation and real-world problem-solving.
                  </p>

                  {/* <div className="mt-6 flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Vision - Diagonal Split Opposite */}
            <div className="group relative">
              <div className="relative h-full bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] rounded-[2.5rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Decorative element */}
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-32 -translate-x-32 group-hover:scale-150 transition-transform duration-700"></div>
                
                <div className="relative z-10 p-8 sm:p-10 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      {/* <div className="text-indigo-200 text-sm font-semibold mb-1">02</div> */}
                      <h3 className="text-3xl font-bold text-white">Our Vision</h3>
                    </div>
                  </div>
                  
                  <p className="text-indigo-50 text-lg leading-relaxed flex-grow">
                  Creoleap Technologies envisions a future where students "Leap into the AI Future" through hands-on learning in AI, Robotics, and STEM, fostering curiosity, creativity, and critical thinking.
                  </p>

                  {/* <div className="mt-6 flex items-center gap-2 text-white font-semibold group-hover:gap-4 transition-all">
                    <span>Explore Vision</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Bar */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white rounded-[2.5rem] shadow-xl border border-gray-200 p-8 sm:p-12">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  { num: '100+', label: 'Schools Empowered', color: 'indigo' },
                  { num: '20K+', label: 'Students Trained', color: 'indigo' },
                  { num: '150+', label: 'Teachers Trained', color: 'indigo' },
                  { num: '200+', label: 'Innovations', color: 'indigo' }
                ].map((stat, i) => (
                  <div key={i} className="text-center group cursor-pointer">
                    <div className={`text-4xl sm:text-5xl font-black bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-700 text-transparent bg-clip-text mb-2 group-hover:scale-110 transition-transform`}>
                      {stat.num}
                    </div>
                    <div className="text-gray-600 font-semibold text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}