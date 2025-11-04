import { useState, useEffect, useRef } from 'react';

export default function Labs() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredLab, setHoveredLab] = useState(null);
  const sectionRef = useRef(null);

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

  const labs = [
    {
      id: 'bal-vatika',
      title: 'Bal Vatika Labs',
      icon: '🎨',
      color: 'from-pink-500 to-rose-500',
      bgColor: 'from-pink-50 to-rose-50',
      description: 'Early learning through play and exploration',
       path: "/labs/bal-vatika"
    },
    {
      id: 'stem-robotics',
      title: 'STEM & Robotics',
      icon: '🤖',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      description: 'Hands-on engineering and innovation',
      path: "/labs/stem-robotics"
    },
    {
      id: 'ai-iot',
      title: 'AI & IoT Labs',
      icon: '🧠',
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'from-purple-50 to-indigo-50',
      description: 'Future-ready technology skills',
      path: "/labs/ai-iot"
    },
    {
      id: 'atal',
      title: 'ATAL Tinkering',
      icon: '⚡',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50',
      description: 'Government-recognized innovation hubs',
       path: "/labs/atal" 
    },
    {
      id: 'ict',
      title: 'ICT Labs',
      icon: '💻',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50',
      description: 'Digital literacy and computing',
       path: "/labs/ict" 
    }
  ];

  const handleExploreClick = (path) => {
    window.location.href = `${path}`;
  };

  return (
    <section 
      ref={sectionRef}
      className="py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-indigo-200/30 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className={`text-center mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-10 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
            <span className="text-blue-800 font-bold text-lg tracking-widest uppercase">Future-Ready Labs</span>
            <div className="w-10 h-1 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full"></div>
          </div>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
Transform Your School into a 21st Century Learning Hub with Our Advanced Laboratory Solutions          </p>
        </div>

        {/* Labs Grid */}
        <div className={`grid justify-center align-center sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {labs.map((lab, index) => (
            <div
              key={lab.id}
              onClick={()=>{handleExploreClick(lab.path)}}
              onMouseEnter={() => setHoveredLab(index)}
              onMouseLeave={() => setHoveredLab(null)}
              className={`group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border-2 border-transparent hover:border-gray-200 ${hoveredLab === index ? 'scale-105 -translate-y-2' : ''}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${lab.bgColor} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                {/* Icon */}
                <div className={`w-20 h-20 bg-gradient-to-br ${lab.color} rounded-2xl flex items-center justify-center text-4xl mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  {lab.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 transition-all duration-300">
                  {lab.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {lab.description}
                </p>

                {/* Indicator */}
                <div className="flex items-center gap-2 text-sm font-semibold text-gray-400 group-hover:text-blue-600 transition-colors">
                  <span>Learn more</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Top right accent */}
              <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-br ${lab.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

       
      </div>
    </section>
  );
}