import { useState, useEffect, useRef } from 'react';
import { toast } from "sonner";
import { Icon } from '@iconify/react';
import type { FormEvent } from 'react';

const Contact = () => {
  // 1. Explicitly type the state
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // 2. Properly typed refs
  const containerRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<(HTMLDivElement | null)[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // 3. Correct form event type
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (selectedServices.length === 0) {
      toast.error("Please select at least one service.");
      return;
    }

    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const mobile = formData.get('mobile') as string;
    const message = formData.get('message') as string;

    if (!name || !email || !mobile) {
      toast.error("Please fill out all required fields.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name,
      email,
      mobile,
      interestedServices: selectedServices.join(", "),
      message: message || 'N/A',
    };

    try {
      const response = await fetch('http://localhost:3001/api/info-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success('Your message has been sent successfully!');
        form.reset();
        setSelectedServices([]);
      } else {
        toast.error(data.error || 'Failed to send email.');
      }
    } catch (error) {
      console.error(error);
      toast.error('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
      document.head.appendChild(script);

      await new Promise<void>((resolve, reject) => {
        script.onload = () => resolve();
        script.onerror = () => reject(new Error('GSAP failed'));
      });

      initAnimations();
    };

    loadGSAP();

    return () => {
      document.querySelectorAll('script[src*="gsap"]').forEach(s => s.remove());
    };
  }, []);

  const initAnimations = () => {
    if (!window.gsap || !containerRef.current) return;

    const { gsap } = window;
    const rect = containerRef.current.getBoundingClientRect();

    particlesRef.current.forEach((particle) => {
      if (!particle) return;

      gsap.set(particle, {
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        scale: Math.random() * 0.4 + 0.3,
        opacity: 0.4,
      });

      gsap.to(particle, {
        y: -rect.height,
        x: `+=${Math.random() * 50 - 25}`,
        rotation: Math.random() * 360,
        scale: Math.random() * 0.6 + 0.4,
        opacity: Math.random() * 0.4 + 0.3,
        duration: Math.random() * 8 + 4,
        repeat: -1,
        ease: "none",
        delay: Math.random() * 5,
      });
    });
  };

  const services = [
    "Robotics Labs",
    "STEM Lab",
    "ATAL Tinkering Lab",
    "Electronic Labs",
    "Workshops"
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-[#080A25] to-[#0a015a] p-4 sm:p-6 md:p-8 lg:p-12 text-white relative overflow-hidden">
      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 100 }, (_, i) => (
          <div
            key={`particle-${i}`}
            ref={(el) => {
              particlesRef.current[i] = el;
            }}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full opacity-40"
            style={{ boxShadow: '0 0 6px rgba(6, 182, 212, 0.6)' }}
          />
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto relative z-10">
        {/* Left: Image */}
        <div className="flex justify-center items-center">
          <img
            src="/images/chat.png"
            alt="Contact illustration"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
            }}
          />
        </div>

        {/* Right: Form */}
        <div className="space-y-6">
          <form className="space-y-4 sm:space-y-6 pr-0 md:pr-8" onSubmit={handleSubmit}>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Book a Quick Consultation with Us
            </h2>

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">
                Name / Company Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                disabled={isSubmitting}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
                placeholder="Enter your name or company name"
              />
            </div>

            <div>
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-300">
                Mobile Number*
              </label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                disabled={isSubmitting}
                inputMode="numeric"
                pattern="\d{10}"
                maxLength={10}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
                placeholder="Enter 10-digit mobile number"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email Id*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                disabled={isSubmitting}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
                placeholder="Enter your email address"
              />
            </div>

            {/* Dropdown */}
            <div ref={dropdownRef}>
              <label className="block text-sm font-medium text-gray-300">
                Interested Services*
              </label>
              <div className="relative">
                <div
                  className="w-full mt-1 px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white flex items-center justify-between cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <span className={selectedServices.length === 0 ? 'text-gray-400' : ''}>
                    {selectedServices.length > 0 ? selectedServices.join(", ") : "Select services"}
                  </span>
                  <Icon icon={isDropdownOpen ? "mdi:chevron-up" : "mdi:chevron-down"} className="w-5 h-5" />
                </div>

                {isDropdownOpen && (
                  <div className="absolute z-20 w-full mt-1 bg-[#1A023E] border border-gray-600 rounded-md shadow-lg max-h-60 overflow-y-auto">
                    {services.map((service) => (
                      <div
                        key={service}
                        className="px-4 py-3 hover:bg-[#2A045A] cursor-pointer flex items-center"
                        onClick={() => handleServiceSelect(service)}
                      >
                        <input
                          type="checkbox"
                          checked={selectedServices.includes(service)}
                          onChange={() => {}}
                          className="mr-3 w-4 h-4"
                        />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {selectedServices.length > 0 && (
                <p className="mt-1 text-xs text-gray-400">
                  {selectedServices.length} service{selectedServices.length > 1 ? 's' : ''} selected
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">
                Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={4} 
                disabled={isSubmitting}
                className="mt-1 block w-full px-3 py-2 border border-gray-600 rounded-md bg-[#1A023E] text-white focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50"
                placeholder="Tell us about your requirements (optional)"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-3 rounded-md hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-white disabled:opacity-50 transition-all"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Icon icon="mdi:loading" className="animate-spin" width={20} height={20} />
                  Sending...
                </span>
              ) : (
                "Send message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;