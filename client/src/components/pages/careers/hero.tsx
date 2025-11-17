import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Icon } from '@iconify/react';
import { toast } from 'sonner';

export default function CareersPage() {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
    );
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 }
    );
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const fileInput = form.resume as HTMLInputElement;
    const file = fileInput.files?.[0];
    
    if (!file) {
      toast.error('Please upload your resume');
      return;
    }

    setIsSubmitting(true);

    try {
      // Convert file to base64
      const fileBase64 = await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
      });

      const formData = {
        name: (form.elements.namedItem('name') as HTMLInputElement).value,
        email: (form.elements.namedItem('email') as HTMLInputElement).value,
        phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
        role: (form.elements.namedItem('role') as HTMLInputElement).value,
        message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
        resume: {
          name: file.name,
          data: fileBase64,
        },
      };

      console.log('Submitting application...', { name: formData.name, email: formData.email });

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Response:', result);

      if (response.ok) {
        toast.success('Thank you for applying! We will review your application and get back to you soon.');
        form.reset();
      } else {
        throw new Error(result.error || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Blurred Background */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        {/* Blurred Background Image */}
        <div
          className="absolute inset-0 bg-[url('/images/career.jpg')] bg-cover md:bg-center bg-right"
          style={{ filter: 'blur(2px)' }}
        ></div>

        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Hero Content */}
        <section
          ref={heroRef}
          className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl h-full flex flex-col items-center justify-center text-center relative z-10"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Shape the Future with Us
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
            Join a team of innovators dedicated to transforming education through technology.
            We're looking for passionate individuals who want to empower young minds and
            redefine learning for the 21st century.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-3">
              <Icon icon="mdi:rocket" className="w-8 h-8 text-blue-400" />
              <span className="text-lg text-white">Innovation</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="mdi:heart" className="w-8 h-8 text-pink-400" />
              <span className="text-lg text-white">Passion</span>
            </div>
            <div className="flex items-center gap-3">
              <Icon icon="mdi:earth" className="w-8 h-8 text-green-400" />
              <span className="text-lg text-white">Impact</span>
            </div>
          </div>
        </section>
      </div>

      {/* Why Join Us Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl py-10 relative z-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-800">
          Why Join Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: 'mdi:lightbulb-on',
              title: 'Innovate Daily',
              description: 'Work on groundbreaking projects that push the boundaries of educational technology.',
              color: 'text-yellow-400'
            },
            {
              icon: 'mdi:account-group',
              title: 'Collaborative Culture',
              description: 'Join a diverse team of experts who value creativity, teamwork, and mutual growth.',
              color: 'text-purple-400'
            },
            {
              icon: 'mdi:star-four-points',
              title: 'Make an Impact',
              description: 'Your work will directly empower students and educators across the globe.',
              color: 'text-blue-400'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-xl border border-gray-200 hover:-translate-y-2 hover:border-blue-500 transition-all duration-300 bg-white"
            >
              <Icon icon={item.icon} className={`w-10 h-10 ${item.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-3 text-gray-800">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Application Form Section */}
      <section className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl pb-10 relative z-20">
        <div
          ref={formRef}
          className="p-8 rounded-xl border border-gray-200 shadow-2xl bg-white"
        >
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Apply Now</h2>
          <p className="text-gray-600 text-center mb-8">
            Ready to take the next step? Fill out the form below and let's create the future together.
          </p>
          {/* FIX 1: Remove arrow function wrapper, just use handleSubmit directly */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
                Full Name
              </label>
              {/* FIX 2: Add name attribute to all inputs */}
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-600 font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-600 font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                placeholder="+91 98765 43210"
              />
            </div>
            <div>
              <label htmlFor="role" className="block text-gray-600 font-medium mb-2">
                Role of Interest
              </label>
              <input
                type="text"
                id="role"
                name="role"
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                placeholder="E.g., Educator, Developer, Designer"
              />
            </div>
            <div>
              <label htmlFor="resume" className="block text-gray-600 font-medium mb-2">
                Upload Resume (PDF)
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                accept=".pdf"
                required
                className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800
                  file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm
                  file:text-white file:font-medium
                  file:bg-[linear-gradient(to_bottom_right,#080A25,#080e4a,#0a015a)]
                  hover:file:opacity-90 hover:file:cursor-pointer"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-600 font-medium mb-2">
                Why Do You Want to Join Us?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-800 placeholder-gray-400"
                placeholder="Tell us about your passion and how you can contribute..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] text-gray-100 py-3 px-6 rounded-lg font-medium transition-colors shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <Icon icon="mdi:loading" className="animate-spin" width={20} height={20} />
                  Submitting...
                </span>
              ) : (
                'Submit Application'
              )}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}