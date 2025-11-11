'use client';

import { useEffect, useRef } from 'react';
import { Link } from '@tanstack/react-router';
import { Icon } from '@iconify/react';

// Extend window for GSAP
declare global {
  interface Window {
    gsap: any;
  }
}

// Particle class with proper typing
class Particle {
  x!: number;
  y!: number;
  vx!: number;
  vy!: number;
  size!: number;
  alpha!: number;
  color!: string;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.reset();
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = Math.random() * this.canvas.height;
    this.vx = (Math.random() - 0.5) * 2;
    this.vy = (Math.random() - 0.5) * 2;
    this.size = Math.random() * 3 + 1;
    this.alpha = Math.random() * 0.5 + 0.2;
    this.color = `hsl(${210 + Math.random() * 60}, 70%, 60%)`;
  }

  // Define methods INSIDE the class
  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > this.canvas.width) this.vx *= -1;
    if (this.y < 0 || this.y > this.canvas.height) this.vy *= -1;

    this.alpha = 0.2 + Math.sin(Date.now() * 0.001 + this.x * 0.01) * 0.3;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.globalAlpha = this.alpha;
    ctx.fill();
  }
}
export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const loadGSAP = async () => {
      try {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
        document.head.appendChild(script);

        await new Promise<void>((resolve, reject) => {
          script.onload = () => resolve();
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
      document.querySelectorAll('script[src*="gsap"]').forEach(s => s.remove());
    };
  }, []);

  const initCanvasAnimation = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const particleCount = 80;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = Array.from({ length: particleCount }, () => new Particle(canvas));
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw(ctx);
      });

      drawConnections();
      requestAnimationFrame(animate);
    };

    const drawConnections = () => {
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distance = Math.hypot(dx, dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(100, 200, 255, ${0.2 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  };

  const initAnimations = () => {
    if (!window.gsap || !containerRef.current) return;

    const { gsap } = window;

    gsap.fromTo('.hero-content',
      { y: 60, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
    );

    gsap.fromTo('.feature-card',
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, delay: 0.5, ease: 'back.out(1.7)' }
    );

    gsap.fromTo('.cta-button',
      { scale: 0.8, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8, delay: 1, ease: 'elastic.out(1, 0.8)' }
    );
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] text-white overflow-hidden"
    >
      {/* Canvas Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ background: 'transparent' }}
      />

      {/* Video Background */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/bg.webp"
      >
        <source src="/videos/elec.webm" type="video/webm" />
        <source src="/videos/elec.mp4" type="video/mp4" />
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#080a2586] via-[#080d4aa9] to-[#0a015acb]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <div className="min-h-screen flex items-center py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left: Hero Content */}
            <div className="hero-content space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-4">
                  <Icon icon="mdi:rocket-launch" className="mr-2" />
                  Next Generation AI & STEM Education
                </div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Empowering Minds,
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    Transforming Futures with AI Innovation
                  </span>
                </h1>

                <p className="text-xl text-gray-300 max-w-2xl leading-relaxed">
                  Transformative cutting-edge AI, STEM, Robotics and Industry 4.0 Readiness education programs
                  designed to prepare students for the technological challenges of tomorrow.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/programs"
                  className="cta-button group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-3 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <span> Explore Programs</span>
                  <Icon icon="mdi:arrow-right" className="group-hover:translate-x-1 transition-transform duration-300" width="20" />
                </Link>

                 
              </div>
            </div>

            {/* Right: Feature Cards */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: "material-symbols:bookmark-stacks-outline-rounded", title: "AI Integrated Robotics Education", desc: "Interactive learning with cutting-edge AI technology", gradient: "from-cyan-500 to-blue-600" },
                { icon: "material-symbols:menu-book-outline", title: "AI Integrated STEM Curriculum", desc: "AI-infused STEM learning programs aligned with NEP 2020.", gradient: "from-pink-500 to-red-600" },
                { icon: "material-symbols:trophy-outline", title: "STEM Education Excellence", desc: "Hands-on Learning for Future Innovators", gradient: "from-blue-500 to-purple-600" },
                { icon: "material-symbols:engineering-outline", title: "Industry 4.0 Readiness", desc: "Future Skills for industry-standards", gradient: "from-purple-500 to-pink-600" },
              ].map((card, i) => (
                <div
                  key={i}
                  className="feature-card group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-cyan-400/30"
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon icon={card.icon} width="24" className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <Icon icon="circum:desktop-mouse-2" width="28" className="text-white/60 animate-bounce" />
      </div>
    </section>
  );
}