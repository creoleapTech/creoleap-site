import { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { Icon } from '@iconify/react';

export default function Hero() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  
  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        document.head.appendChild(script);

        await new Promise((resolve, reject) => {
          script.onload = resolve;
          script.onerror = () => reject(new Error('Failed to load GSAP'));
        });

        initAnimations();
        initCanvasAnimation();
      } catch (error) {
        console.error('GSAP loading error:', error);
      }
    };

    loadGSAP();

    return () => {
      const scripts = document.querySelectorAll('script[src*="gsap"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  const initCanvasAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    const particleCount = 80;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.size = Math.random() * 3 + 1;
        this.alpha = Math.random() * 0.5 + 0.2;
        this.color = `hsl(${210 + Math.random() * 60}, 70%, 60%)`;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        this.alpha = 0.2 + Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = this.alpha;
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      drawConnections();
      requestAnimationFrame(animate);
    };

    const drawConnections = () => {
      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach(b => {
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        });
      });
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener('resize', () => {
      resizeCanvas();
      initParticles();
    });
  };

  const initAnimations = () => {
    if (!window.gsap || !containerRef.current) return;

    const { gsap } = window;

    // Main content animation
    gsap.fromTo('.hero-content', 
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    // Feature cards animation
    gsap.fromTo('.feature-card',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.5, ease: 'back.out(1.7)' }
    );

    // CTA button animation
    gsap.fromTo('.cta-button',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay: 1, ease: 'elastic.out(1, 0.8)' }
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100vh] backdrop-blur-md bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] text-white overflow-hidden"
    >
      {/* Animated Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />
           {/* <div className="absolute inset-0 bg-[url('/images/bg.webp')] bg-cover bg-center" /> */}

 <video
          ref={videoRef}
          className="absolute min-w-full min-h-full w-auto h-auto object-cover"
          style={{ 
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            minWidth: '100%',
            minHeight: '100%'
          }}
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          poster="/images/bg.webp"
        >
          <source src="/videos/elec.webm" type="video/webm" />
          <source src="/videos/elec.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080a2586] via-[#080d4aa9] to-[#0a015acb]" />

    

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="min-h-screen flex items-center py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Content */}
            <div className="hero-content space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-4">
                  <Icon icon="mdi:rocket-launch" className="mr-2" />
                  Next Generation STEM Education
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight">
              Empowering Minds,
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Transforming Futures with AI Innovation
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Transformative cutting edge AI, STEM, Robotics and Electronics education programs 
                  that prepare students for the technological challenges of tomorrow.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="cta-button group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-3 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span>Start Your Journey</span>
                  <Icon 
                    icon="mdi:arrow-right" 
                    className="group-hover:translate-x-1 transition-transform duration-300" 
                    width="20" 
                  />
                </Link>
                
                <button className="cta-button border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1">
                  Explore Programs
                </button>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 justify-start gap-8 pt-8 border-t border-white/10">
                <div className="text-center border-white/10 py-3 border rounded-3xl">
                  <div className="text-3xl font-bold text-cyan-400">300+</div>
                  <div className="text-gray-400 text-lg">Schools</div>
                </div>
                <div className="text-center border-white/10 py-3 border rounded-3xl">
                  <div className="text-3xl font-bold text-blue-400">10K+</div>
                  <div className="text-gray-400 text-nowrap text-lg">Students Impacted</div>
                </div>
                <div className="text-center border-white/10 py-3 border rounded-3xl">
                  <div className="text-3xl font-bold text-purple-400">100+</div>
                  <div className="text-gray-400 text-nowrap text-lg">Teachers Trained</div>
                </div>
                 <div className="text-center border-white/10 py-3 border rounded-3xl">
                  <div className="text-3xl font-bold text-pink-400">50+</div>
                  <div className="text-gray-400 text-nowrap text-lg">Satisfied Clients</div>
                </div>
              </div> */}
            </div>

            {/* Right Content - Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              <div className="feature-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon="material-symbols:bookmark-stacks-outline-rounded" width="24" className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">AI-Based Robotics Education</h3>
                <p className="text-gray-400 text-sm">Interactive learning with cutting-edge AI technology</p>
              </div>
  <div className="feature-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-pink-400/30">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon="material-symbols:menu-book-outline" width="24" className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">AI-Driven STEM Curriculum</h3>
                <p className="text-gray-400 text-sm">AI-infused STEM learning programs aligned with NEP 2020 and global standards.</p>
              </div>
              <div className="feature-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-blue-400/30">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon="material-symbols:trophy-outline" width="24" className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">STEM Education Excellence</h3>
                <p className="text-gray-400 text-sm">Hands-on Learning for Future Innovators</p>
              </div>

              <div className="feature-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-purple-400/30">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon icon="material-symbols:engineering-outline" width="24" className="text-white" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Industry 4.0 Readiness Program</h3>
                <p className="text-gray-400 text-sm">Future Skills for industry-standards</p>
              </div>

            
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="!animate-bounce">
          <Icon icon="circum:desktop-mouse-2" width="28" className="text-white/60 !animate-bounce" />
        </div>
      </div>
    </section>
  );
}