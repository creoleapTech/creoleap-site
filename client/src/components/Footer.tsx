import { Icon } from '@iconify/react';
import  {useEffect, useRef } from 'react';
// import { toast } from 'sonner';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaTextWidth } from 'react-icons/fa';

const Footer = () => {
  // const [email, setEmail] = useState('');
const containerRef = useRef<HTMLDivElement | null>(null);
const particlesRef = useRef<(HTMLDivElement | null)[]>([]);


  // const handleSubscribe = (event: { preventDefault: () => void; }) => {
  //   event.preventDefault();
  //   if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
  //     toast.error('Please enter a valid email address');
  //     return;
  //   }

  //   toast.success(`Thank you for subscribing, ${email}!`);
  //   setEmail('');
  // };

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

  const initAnimations = () => {
    if (!window.gsap || !containerRef.current) return;

    const { gsap } = window;
    const containerRect = containerRef.current.getBoundingClientRect();

    particlesRef.current.forEach((particle) => {
      if (particle) {
        gsap.set(particle, {
          x: Math.random() * containerRect.width,
          y: Math.random() * containerRect.height,
          scale: Math.random() * 0.3 + 0.2,
          opacity: Math.random() * 0.3 + 0.2,
        });

        gsap.to(particle, {
          y: -containerRect.height,
          x: `+=${Math.random() * 50 - 25}`,
          rotation: Math.random() * 360,
          duration: Math.random() * 3 + 2, // Fast movement: 2–5s
          repeat: -1,
          ease: "none",
          delay: Math.random() * 20,
          willChange: 'transform',
        });
      }
    });
  };

  return (
    <footer ref={containerRef} className="bg-gradient-to-tr from-[#080A25] to-[#0a015a] text-white relative overflow-hidden">
      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={`particle-${i}`}
           ref={(el) => { particlesRef.current[i] = el; }}

            className="absolute w-1.5 h-1.5 bg-cyan-300 rounded-full opacity-30"
            style={{ boxShadow: '0 0 5px rgba(6, 182, 212, 0.5)' }}
          />
        ))}
      </div>

      {/* Newsletter Section */}
      {/* <div className="py-8 px-4 sm:px-6 md:p-8 lg:p-12 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-md mx-auto">
              Stay updated with our latest news, products, and promotions.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
            <div className="flex gap-2">
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-l-md border border-gray-600 bg-[#1A023E] text-white focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 rounded-r-md transition-colors text-sm sm:text-base"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div> */}

    {/* Logo Section */}
      <div className="flex w-full justify-center my-5 relative z-10">
        <img
          src='/images/Logo-big.png'
          className="h-20 sm:h-28 lg:h-40"
          alt="Creoleap Technologies Logo"
          onError={() => console.error('Failed to load logo image')}
        />
      </div>

      {/* Main Footer Content */}
      <div className="py-2 px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">Quick Links</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">About</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Contact</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Careers</a></li>
            </ul>
          </div>

          {/* What We Provide */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">What We Provide</h3>
            <div className="space-y-3">
              <div>
                <p className="text-gray-300 font-medium text-sm mb-1 text-center md:text-left">For Schools</p>
                <ul className="space-y-1 text-center md:text-left">
                  <li><a href="/programs?tag=schools&id=ai-robotics" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">AI Integrated Robotics</a></li>
                  <li><a href="/programs?tag=schools&id=ai-electronics" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">AI Integrated Electronics</a></li>
                  <li><a href="/programs?tag=schools&id=nep-curriculum" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">NEP Aligned Curriculum</a></li>
                  <li><a href="/programs?tag=schools&id=teacher-empowerment" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Teacher Empowerment</a></li>
                </ul>
              </div>
              <div>
                <p className="text-gray-300 font-medium text-sm mb-1 text-center md:text-left">For Colleges</p>
                <ul className="space-y-1 text-center md:text-left">
                  <li><a href="/programs?tag=colleges&id=industry-4.0" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Industry 4.0 Readiness</a></li>
                  <li><a href="/programs?tag=colleges&id=ros2" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">ROS2 Certification</a></li>
                  <li><a href="/programs?tag=colleges&id=embedded-iot" className="text-gray-400 hover:text-white transition-colors text-xs sm:text-sm">Embedded System & IoT</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* AI Labs */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">AI Labs</h3>
            <ul className="space-y-2 text-center md:text-left">
              <li><a href="/labs/stem-robotics" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">STEM & Robotics Lab</a></li>
<li>
  <a href="/labs/composite-skill" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
    Composite Skill Lab
  </a>
</li>              <li><a href="/labs/atal" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">ATAL Tinkering Lab</a></li>
              <li><a href="/labs/ict" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">ICT Lab</a></li>
              <li><a href="/labs/bal-vatika" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">Bal Vatika Lab</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 text-center md:text-left">Contact Us</h3>
            <address className="not-italic text-gray-400 space-y-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+919363208701" className="hover:text-white text-sm sm:text-base">+91 9363208701</a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:info@creoleap.com" className="hover:text-white text-sm sm:text-base">info@creoleap.com</a>
              </div>
              <div className="flex items-start justify-center md:justify-start">
                <svg className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-sm sm:text-base">29/8/2A, First Floor, S.T.Hindu College Road, Beach Road, Nagercoil - 629002, Tamil Nadu, India</span>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Social Media, Legal Links and Copyright */}
      <div className="py-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Legal Links */}
      
          
          {/* Copyright and Social */}
          <div className="flex flex-col px-4 md:px-6  md:flex-row justify-between items-center">
               <div className="flex justify-center space-x-6">
            <a href="/PrivacyPolicy" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <span className="text-gray-600">|</span>
            <a href="/TermsAndCondition" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms & Conditions
            </a>
          </div>
            <div className="text-gray-400 text-center md:text-left mb-4 md:mb-0 text-sm sm:text-base">
              &copy; 2025 Creoleap Technologies. All rights reserved.
            </div>
           
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/creoleap/?viewAsMember=true" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#FF6B6B] transition-colors">
                <Icon icon="mdi:linkedin" width="16" height="16" />
              </a>
              <a href="https://www.instagram.com/creoleap_technologies?igsh=dG5jOG1iYTFmYXBz" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#FF6B6B] transition-colors">
                <Icon icon="mdi:instagram" width="16" height="16" />
              </a>
              <a href="https://www.facebook.com/share/1A4a8Az6fb/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-[#FF6B6B] transition-colors">
                <Icon icon="mdi:facebook" width="16" height="16" />
              </a>
              <a href="https://wa.me/9363208701" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-[#FF6B6B] transition-colors">
                <Icon icon="mdi:whatsapp" width="16" height="16" />
              </a>
              <a href="https://x.com/CreoleapTech" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-[#FF6B6B] transition-colors">
                <Icon icon="prime:twitter" width="12" height="12" />
              </a>
            </div>
          </div>
        </div>
            
      </div>
    </footer>
  );
};

export default Footer;