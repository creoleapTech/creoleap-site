import { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';

const Testimonials = () => {
  // const [isPaused, setIsPaused] = useState(false);
const scrollRef = useRef<HTMLDivElement | null>(null);


  const testimonials = [
    {
      name: "Dr. Priya Sharma",
      role: "Principal, Delhi Public School",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&q=80&fit=crop&crop=face",
      quote: "The AI Integrated Robotics program has revolutionized how our students approach problem-solving. Engagement has increased by 70%!",
      rating: 5,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Prof. Rajesh Kumar",
      role: "HOD, IIT Delhi",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&q=80&fit=crop&crop=face",
      quote: "Our engineering students are now industry-ready thanks to the ROS2 Certification program. Placement rates have never been higher.",
      rating: 5,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Ms. Anjali Mehta",
      role: "Director, Modern College",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&q=80&fit=crop&crop=face",
      quote: "The Teacher Empowerment Program transformed our faculty's approach to teaching. Student performance has improved significantly.",
      rating: 5,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Mr. Sameer Patel",
      role: "CEO, TechEd Solutions",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&q=80&fit=crop&crop=face",
      quote: "The Industry 4.0 program provided our students with exactly the skills needed in today's manufacturing sector.",
      rating: 5,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Dr. Nisha Verma",
      role: "Dean, Engineering College",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&q=80&fit=crop&crop=face",
      quote: "The Embedded Systems certification has made our curriculum industry-relevant and boosted campus recruitment.",
      rating: 5,
      color: "from-indigo-500 to-blue-500"
    },
    {
      name: "Mr. Rohan Malhotra",
      role: "Head of Academics, Global School",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&q=80&fit=crop&crop=face",
      quote: "NEP aligned curriculum implementation was seamless with their support. Our teachers and students both benefited immensely.",
      rating: 5,
      color: "from-violet-500 to-purple-500"
    }
  ];

  // Triple the testimonials for seamless infinite scroll
  const infiniteTestimonials = [...testimonials, ...testimonials, ...testimonials];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    // let scrollPosition = 0;
    // const scrollSpeed = 0.5; // Pixels per frame

    const animate = () => {
      // if (!isPaused) {
      //   scrollPosition += scrollSpeed;
        
      //   // Reset position seamlessly when we've scrolled through one set
      //   const cardWidth = 384; // w-96 = 384px
      //   const gap = 32; // gap-8 = 32px
      //   const totalWidth = (cardWidth + gap) * testimonials.length;
        
      //   if (scrollPosition >= totalWidth) {
      //     scrollPosition = 0;
      //   }
        
      //   scrollContainer.style.transform = `translateX(-${scrollPosition}px)`;
      // }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [ testimonials.length]);

  return (
    <div className="md:pb-10 px-4 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 overflow-hidden">
      <div className="container mx-auto max-w-7xl mb-5">
        <div className="text-center">
          {/* <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
              SUCCESS STORIES
            </span>
          </div> */}
          {/* <h2 className="text-5xl font-bold bg-gradient-to-bl from-[#101447] to-[#1201a9]  bg-clip-text text-transparent pb-4">
            Trusted by Leading Institutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover how we've helped transform education across the country
          </p> */}
        </div>
      </div>

      {/* Infinite Scroll Container */}
         {/* onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)} */}

      <div 
        className="relative"
      >
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 md:w-32 w-5 bg-gradient-to-r from-gray-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 md:w-32 w-5 bg-gradient-to-l from-gray-50 via-blue-50 to-transparent z-10 pointer-events-none"></div>

        {/* Scrolling Track */}
        <div className="overflow-hidden py-4">
          <div 
            ref={scrollRef}
            className="flex gap-8"
            style={{ width: 'fit-content' }}
          >
            {infiniteTestimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-96 flex-shrink-0 group"
              >
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100 transform hover:-translate-y-2">
                  {/* Gradient Accent */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${testimonial.color}`}></div>
                  
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Icon icon="mdi:format-quote-close" className="text-6xl text-gray-400" />
                  </div>

                  <div className="p-8 relative">
                    {/* Rating Stars */}
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon 
                          key={i} 
                          icon="mdi:star" 
                          className="text-yellow-400 text-xl drop-shadow-sm" 
                        />
                      ))}
                    </div>

                    {/* Testimonial Quote */}
                    <p className="text-gray-700 text-lg leading-relaxed  relative z-10">
                      "{testimonial.quote}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-3 border-t border-gray-100">
                      <div className="relative">
                        <div className={`absolute inset-0 bg-gradient-to-br ${testimonial.color} rounded-full blur-md opacity-50`}></div>
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="relative w-16 h-16 rounded-full object-cover ring-4 ring-white shadow-lg"
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                        <p className="text-sm text-gray-600 flex items-center gap-1">
                          <Icon icon="mdi:briefcase" className="text-base" />
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    {/* Verified Badge */}
                    <div className="absolute top-3 right-4">
                      <div className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-sm">
                        <Icon icon="mdi:check-decagram" className="text-sm" />
                        Verified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pause Indicator */}
        {/* {isPaused && (
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-black/75 text-white px-4 py-2 rounded-full text-sm font-medium z-20 flex items-center gap-2 backdrop-blur-sm">
            <Icon icon="mdi:pause-circle" className="text-lg" />
            Paused - Hover to explore
          </div>
        )} */}
      </div>


    </div>
  );
};

export default Testimonials;