import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import Footer from './Footer';
import type { ProgramData } from '../data/programsData';

interface FormData {
    name: string;
    email: string;
    phone: string;
    college: string;
    interest: string;
    message: string;
}

interface ProgramLandingProps {
    programData: ProgramData;
}

export default function ProgramLanding({ programData }: ProgramLandingProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        college: '',
        interest: programData.title, // Auto-select the program title
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // Auto-select interest when program changes
    useEffect(() => {
        setFormData(prev => ({ ...prev, interest: programData.title }));
    }, [programData.title]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/program-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    college: formData.college || undefined,
                    interest: formData.interest,
                    message: formData.message || undefined,
                }),
            });

            const data = await response.json();

            if (response.ok && data.success) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    college: '',
                    interest: programData.title,
                    message: '',
                });

                // Reset success message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            } else {
                setSubmitStatus('error');
                console.error('Failed to send email:', data.error);

                // Reset error message after 5 seconds
                setTimeout(() => setSubmitStatus('idle'), 5000);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('error');

            // Reset error message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 text-slate-900 overflow-hidden">
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl animate-pulse delay-1000" />
                <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-200/30 rounded-full blur-3xl animate-pulse delay-2000" />
            </div>

            <section className="relative py-10 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Content Side */}
                        <div className="order-2 lg:order-1 space-y-6">
                            <div className="mb-8 inline-block">
                                <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 border-2 border-blue-300 shadow-lg">
                                    <Icon icon="mdi:factory" className="text-2xl text-blue-600" />
                                    <span className="text-sm font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                        {programData.badge}
                                    </span>
                                </span>
                            </div>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                    {programData.subtitle}
                                </span>
                            </h2>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                {programData.description}
                            </p>

                            {programData.certifications && (
                                <div className="flex flex-wrap justify-start gap-4 mb-12">
                                    {programData.certifications.map((cert, index) => (
                                        <div key={index} className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg border-2 border-green-300">
                                            <Icon icon="mdi:certificate" className="text-2xl text-green-600" />
                                            <span className="font-semibold text-slate-700">{cert.title}</span>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-col sm:flex-row gap-4 justify-start items-center">
                                <a
                                    href="#contact"
                                    className="group relative px-8 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                                >
                                    <span className="relative z-10 flex items-center gap-2">
                                        Enroll Now
                                        <Icon icon="mdi:arrow-right" className="text-xl group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </a>

                                <a
                                    href="#course-highlights"
                                    className="px-8 py-2 border-2 border-blue-600 text-blue-600 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 hover:scale-105"
                                >
                                    Explore Course
                                </a>
                            </div>
                        </div>

                        {/* Image Side */}
                        <div className="order-1 lg:order-2 relative">
                            <div className="relative overflow-hidden">
                                <img
                                    src={programData.heroImage}
                                    alt={`${programData.title} Illustration`}
                                    className="w-5/6 h-full object-cover transform transition-transform duration-500"
                                />
                            </div>

                            {/* Floating decorative elements */}
                            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-2xl opacity-50 animate-pulse"></div>
                            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-2xl opacity-50 animate-pulse delay-1000"></div>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto">
                    {programData.stats.map((stat, index) => (
                        <div
                            key={index}
                            className="p-6 rounded-2xl bg-white shadow-lg border border-slate-200 hover:scale-105 transition-transform duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <Icon icon={stat.icon} className="text-4xl text-blue-600 mb-3 mx-auto" />
                            <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-1">
                                {stat.value}
                            </div>
                            <div className="text-sm text-slate-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Course Highlights */}
            <section id="course-highlights" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                                Course Highlights
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Everything you need to become an expert
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {programData.highlights.map((highlight, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-white shadow-lg border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:scale-105"
                            >
                                <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <Icon icon={highlight.icon} className="text-3xl text-white" />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-slate-800">{highlight.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{highlight.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What You'll Build Section */}
            <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                What You'll Build
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Real-world projects that demonstrate your expertise
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {programData.projects.map((project, index) => (
                            <div
                                key={index}
                                className="group p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-blue-50 border-2 border-slate-200 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                            >
                                <Icon icon={project.icon} className="text-5xl text-blue-600 mb-4" />
                                <h3 className="text-2xl font-bold mb-3 text-slate-800">{project.title}</h3>
                                <p className="text-slate-600 mb-4 leading-relaxed">{project.description}</p>
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-md border border-blue-200">
                                    <Icon icon="mdi:tag" className="text-blue-600" />
                                    <span className="text-sm font-semibold text-slate-700">{project.stream}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contact Form Section */}
            <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                                Start Your Journey
                            </span>
                        </h2>
                        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                            Fill out the form below and our team will get in touch with you within 24 hours
                        </p>
                    </div>

                    <div className="relative p-8 sm:p-12 rounded-3xl bg-white shadow-2xl border-2 border-slate-200">
                        {/* Decorative Elements */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-200/30 rounded-full blur-3xl" />

                        <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-2">
                                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="John Doe"
                                    />
                                </div>

                                {/* Email */}
                                <div className="space-y-2">
                                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                {/* Phone */}
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700">
                                        Phone Number *
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                {/* College */}
                                <div className="space-y-2">
                                    <label htmlFor="college" className="block text-sm font-semibold text-slate-700">
                                        College/University
                                    </label>
                                    <input
                                        type="text"
                                        id="college"
                                        name="college"
                                        value={formData.college}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                                        placeholder="Your College"
                                    />
                                </div>
                            </div>

                            {/* Interest - Auto-selected */}
                            <div className="space-y-2">
                                <label htmlFor="interest" className="block text-sm font-semibold text-slate-700">
                                    Program of Interest *
                                </label>
                                <input
                                    type="text"
                                    id="interest"
                                    name="interest"
                                    value={formData.interest}
                                    readOnly
                                    className="w-full px-4 py-3 rounded-xl bg-blue-50 border-2 border-blue-300 text-slate-800 font-semibold focus:outline-none cursor-not-allowed"
                                />
                                <p className="text-xs text-slate-500 mt-1">
                                    This field is auto-selected based on the program you're viewing
                                </p>
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label htmlFor="message" className="block text-sm font-semibold text-slate-700">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleInputChange}
                                    rows={5}
                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border-2 border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tell us about your goals and expectations..."
                                />
                            </div>

                            {/* Submit Button */}
                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full sm:w-auto group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                        {isSubmitting ? (
                                            <>
                                                <Icon icon="mdi:loading" className="text-xl animate-spin" />
                                                Submitting...
                                            </>
                                        ) : (
                                            <>
                                                Submit Application
                                                <Icon icon="mdi:send" className="text-xl group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </button>

                                {submitStatus === 'success' && (
                                    <div className="flex items-center gap-2 text-green-600 animate-fade-in">
                                        <Icon icon="mdi:check-circle" className="text-2xl" />
                                        <span className="font-semibold">Application submitted successfully!</span>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="flex items-center gap-2 text-red-600 animate-fade-in">
                                        <Icon icon="mdi:alert-circle" className="text-2xl" />
                                        <span className="font-semibold">Failed to submit. Please try again.</span>
                                    </div>
                                )}
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            <Footer />

            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(-10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .animate-fade-in {
                    animation: fade-in 0.5s ease-out;
                }
            `}</style>
        </div>
    );
}
