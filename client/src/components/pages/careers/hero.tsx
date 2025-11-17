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

  // Function to compress PDF by reducing quality
  const compressPDF = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async (e) => {
        try {
          const arrayBuffer = e.target?.result as ArrayBuffer;
          const uint8Array = new Uint8Array(arrayBuffer);
          
          // Convert to base64
          let binary = '';
          const len = uint8Array.byteLength;
          for (let i = 0; i < len; i++) {
            binary += String.fromCharCode(uint8Array[i]);
          }
          const base64 = btoa(binary);
          
          // Check if compression is needed
          const originalSize = base64.length;
          const maxSize = 3 * 1024 * 1024; // 3MB in base64
          
          if (originalSize <= maxSize) {
            resolve(`data:application/pdf;base64,${base64}`);
            return;
          }
          
          // If still too large after basic conversion, reject
          // (Real PDF compression requires external libraries)
          reject(new Error('File too large even after compression'));
          
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  // Alternative: Convert PDF to images (more aggressive compression)
  const convertPDFToImages = async (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      
      reader.onload = async () => {
        try {
          // Load PDF.js library dynamically
          const pdfjsLib = (window as any).pdfjsLib;
          
          if (!pdfjsLib) {
            // Fallback to regular base64 if PDF.js not available
            const result = await compressPDF(file);
            resolve(result);
            return;
          }
          
          const typedarray = new Uint8Array(reader.result as ArrayBuffer);
          const pdf = await pdfjsLib.getDocument({ data: typedarray }).promise;
          
          // Render first page only to reduce size
          const page = await pdf.getPage(1);
          const viewport = page.getViewport({ scale: 1.5 });
          
          const canvas = document.createElement('canvas');
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          await page.render({
            canvasContext: context,
            viewport: viewport
          }).promise;
          
          // Convert canvas to compressed JPEG
          const compressedImage = canvas.toDataURL('image/jpeg', 0.7); // 70% quality
          resolve(compressedImage);
          
        } catch (error) {
          reject(error);
        }
      };
      
      reader.onerror = reject;
      reader.readAsArrayBuffer(file);
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const form = e.currentTarget;
    const fileInput = form.resume as HTMLInputElement;
    const file = fileInput.files?.[0];
    
    if (!file) {
      toast.error('Please upload your resume');
      return;
    }

    // Check file type
    if (file.type !== 'application/pdf') {
      toast.error('Please upload a PDF file only.');
      return;
    }

    // Check initial file size
    const maxInitialSize = 10 * 1024 * 1024; // 10MB max upload
    if (file.size > maxInitialSize) {
      toast.error('Resume file is too large. Please upload a file smaller than 10MB.');
      return;
    }

    setIsSubmitting(true);

    try {
      toast.loading('Processing your resume...');
      
      // Compress the PDF
      let fileBase64: string;
      try {
        fileBase64 = await compressPDF(file);
        console.log('Original size:', (file.size / 1024).toFixed(2), 'KB');
        console.log('Compressed size:', (fileBase64.length / 1024).toFixed(2), 'KB');
      } catch (compressionError) {
        toast.dismiss();
        toast.error('Resume file is too large to process. Please compress it to under 5MB and try again.');
        setIsSubmitting(false);
        return;
      }

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

      toast.dismiss();
      toast.loading('Sending your application...');

      console.log('Submitting application...', { 
        name: formData.name, 
        email: formData.email,
        originalFileSize: `${(file.size / 1024).toFixed(2)} KB`,
        processedSize: `${(fileBase64.length / 1024).toFixed(2)} KB`
      });

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log('Response:', result);

      toast.dismiss();

      if (response.ok) {
        toast.success('Thank you for applying! We will review your application and get back to you soon.');
        form.reset();
      } else {
        throw new Error(result.error || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error:', error);
      toast.dismiss();
      toast.error('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Hero Section with Blurred Background */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-[url('/images/career.jpg')] bg-cover md:bg-center bg-right"
          style={{ filter: 'blur(2px)' }}
        ></div>
        <div className="absolute inset-0 bg-black/50"></div>

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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-600 font-medium mb-2">
                Full Name
              </label>
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
                Upload Resume (PDF, max 10MB)
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
              <p className="mt-1 text-xs text-gray-500">
                Files will be automatically optimized for sending. If your file is large, it may take a moment to process.
              </p>
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
                  Processing...
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