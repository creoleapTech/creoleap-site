import { useState, useEffect, useRef } from 'react';
import { toast } from "sonner";
import { Icon } from '@iconify/react';
import type { FormEvent } from 'react';

// Declare gsap on window object
declare global {
  interface Window {
    gsap: any;
  }
}

const Contact = () => {
  // State declarations
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  });

  // Refs
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Form submission handler
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation checks
    if (selectedServices.length === 0) {
      toast.error("Please select at least one service.");
      return;
    }

    if (!formData.name.trim() || !formData.email.trim() || !formData.mobile.trim()) {
      toast.error("Please fill out all required fields.");
      return;
    }

    // Mobile number validation
    const mobileRegex = /^\d{10}$/;
    if (!mobileRegex.test(formData.mobile)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobile: formData.mobile.trim(),
      interestedServices: selectedServices.join(", "),
      message: formData.message.trim() || 'N/A',
    };

    try {
      console.log('Sending payload:', payload); // Debug log

      const response = await fetch('https://creoleap.com/api/info-email', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      console.log('Response status:', response.status); // Debug log

      const responseText = await response.text();
      console.log('Response text:', responseText); // Debug log

      let data;
      try {
        data = responseText ? JSON.parse(responseText) : {};
      } catch (parseError) {
        console.error('JSON parse error:', parseError);
        throw new Error('Invalid response from server');
      }

      if (response.ok) {
        toast.success('Your message has been sent successfully!');
        
        // Clear form completely
        setFormData({
          name: '',
          mobile: '',
          email: '',
          message: ''
        });
        setSelectedServices([]);
        
        // Reset form element
        if (formRef.current) {
          formRef.current.reset();
        }
        
        console.log('Form cleared successfully'); // Debug log
      } else {
        const errorMessage = data.error || data.message || `Server error: ${response.status}`;
        console.error('Server error:', errorMessage);
        toast.error(errorMessage);
      }
    } catch (error) {
      console.error('Network error:', error);
      const errorMessage = error instanceof Error ? error.message : 'Network error. Please check your connection and try again.';
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  // Handle mobile input (only numbers)
  const handleMobileChange = (value: string) => {
    const numbersOnly = value.replace(/\D/g, '');
    const truncated = numbersOnly.slice(0, 10);
    setFormData(prev => ({
      ...prev,
      mobile: truncated
    }));
  };

  const handleServiceSelect = (service: string) => {
    setSelectedServices(prev =>
      prev.includes(service)
        ? prev.filter(s => s !== service)
        : [...prev, service]
    );
  };

  const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Load GSAP + animate particles
  useEffect(() => {
    const loadGSAP = async () => {
      // Check if GSAP is already loaded
      if (window.gsap) {
        initAnimations();
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      script.integrity = 'sha512-16agsHRyvW1JSnNI+5tFE+kTZ1EhQE/+6pO+UiPNEmo6YJpZBNiGSyvQmmK0CLTg3uGXEA5vDbXzE8MqjgYzNg==';
      script.crossOrigin = 'anonymous';
      script.referrerPolicy = 'no-referrer';
      
      document.head.appendChild(script);

      script.onload = () => {
        console.log('GSAP loaded successfully');
        initAnimations();
      };

      script.onerror = () => {
        console.error('Failed to load GSAP');
        // toast.error('Failed to load animations');
      };
    };

    loadGSAP();

    return () => {
      // Cleanup: remove GSAP script if needed
      const gsapScript = document.querySelector('script[src*="gsap"]');
      if (gsapScript) {
        gsapScript.remove();
      }
    };
  }, []);

  const initAnimations = () => {
    if (!window.gsap || !containerRef.current) {
      console.log('GSAP not available or container not ready');
      return;
    }

    const { gsap } = window;
    const rect = containerRef.current.getBoundingClientRect();

    particlesRef.current.forEach((particle, _index) => {
      if (!particle) return;

      // Initial setup
      gsap.set(particle, {
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        scale: Math.random() * 0.4 + 0.3,
        opacity: Math.random() * 0.4 + 0.2,
      });

      // Animation
      gsap.to(particle, {
        y: -rect.height,
        x: `+=${Math.random() * 100 - 50}`,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.6 + 0.4,
        opacity: Math.random() * 0.3 + 0.1,
        duration: Math.random() * 10 + 5,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 3,
      });
    });

    console.log('Particle animations initialized');
  };

  const services = [
    "Robotics Labs",
    "STEM Lab",
    "ATAL Tinkering Lab",
    "Electronic Labs",
    "Workshops"
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-[#080A25] to-[#0a015a] p-4 sm:p-6 md:p-8 lg:p-12 text-white relative overflow-hidden min-h-screen">
      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 50 }, (_, i) => (
          <div
            key={`particle-${i}`}
            ref={(el) => {
              particlesRef.current[i] = el;
            }}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full opacity-40"
            style={{ 
              boxShadow: '0 0 6px rgba(6, 182, 212, 0.6)',
            }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
        {/* Left: Image */}
        <div className="flex justify-center items-center order-2 md:order-1">
          <img
            src="/images/chat.png"
            alt="Contact illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              console.error('Failed to load contact image');
            }}
            onLoad={() => console.log('Contact image loaded successfully')}
          />
        </div>

        {/* Right: Form */}
        <div className="space-y-6 order-1 md:order-2">
          <form 
            ref={formRef}
            className="space-y-4 sm:space-y-6 pr-0 md:pr-8" 
            onSubmit={handleSubmit}
            noValidate
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Book a Quick Consultation with Us
            </h2>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                Name / Company Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                disabled={isSubmitting}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent disabled:opacity-50 transition-colors"
                placeholder="Enter your name or company name"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-1">
                Mobile Number*
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={(e) => handleMobileChange(e.target.value)}
                disabled={isSubmitting}
                inputMode="numeric"
                pattern="\d{10}"
                maxLength={10}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent disabled:opacity-50 transition-colors"
                placeholder="Enter 10-digit mobile number"
              />
              {formData.mobile && formData.mobile.length !== 10 && (
                <p className="mt-1 text-xs text-red-400">Mobile number must be 10 digits</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Id*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                disabled={isSubmitting}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent disabled:opacity-50 transition-colors"
                placeholder="Enter your email address"
              />
            </div>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <label className="block text-sm font-medium text-gray-300 mb-1">
                Interested Services*
              </label>
              <div className="relative">
                <div
                  className="w-full mt-1 px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white flex items-center justify-between cursor-pointer hover:border-gray-400 transition-colors"
                  onClick={toggleDropdown}
                >
                  <span className={selectedServices.length === 0 ? 'text-gray-400' : 'text-white'}>
                    {selectedServices.length > 0 ? selectedServices.join(", ") : "Select services"}
                  </span>
                  <Icon 
                    icon={isDropdownOpen ? "mdi:chevron-up" : "mdi:chevron-down"} 
                    className="w-5 h-5 text-gray-400" 
                  />
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-20 w-full mt-1 bg-[#1A023E] border border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {services.map((service) => (
                      <div
                        key={service}
                        className="px-4 py-3 hover:bg-[#2A045A] cursor-pointer flex items-center transition-colors"
                        onClick={() => handleServiceSelect(service)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service)}
                          onChange={() => {}} // Read-only, handled by click
                          className="mr-3 w-4 h-4 text-cyan-400 bg-[#1A023E] border-gray-600 rounded focus:ring-cyan-400"
                        />
                        <span className="text-white">{service}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {selectedServices.length > 0 && (
                <p className="mt-1 text-xs text-cyan-400">
                  {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected
                </p>
              )}
              {selectedServices.length === 0 && (
                <p className="mt-1 text-xs text-gray-400">
                  Please select at least one service
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={(e) => handleInputChange('message', e.target.value)}
                disabled={isSubmitting}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent disabled:opacity-50 transition-colors resize-vertical"
                placeholder="Tell us about your requirements (optional)"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting || selectedServices.length === 0}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Icon icon="mdi:loading" className="animate-spin" width={20} height={20} />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;