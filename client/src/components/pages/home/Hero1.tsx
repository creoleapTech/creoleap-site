import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Icon } from '@iconify/react';


const carouselData = [
    {
        title: "Empowering the Next Generation of",
        highlight: "Tech Leaders.",
        desc: "Transform your institution with state-of-the-art AI, IoT, and Robotics labs. NEP 2020 aligned curriculums with certified training.",
        buttonLink: "/about",
        image: "/images/session/6.jpeg"
    },
    {
        title: "Advanced Infrastructures for",
        highlight: "STEM Classrooms.",
        desc: "Bridge theoretical knowledge and practical application. We bring industry-standard automation hardware directly to student desks.",
        buttonLink: "/solutions",
        image: "/images/lab6.png"
    },
    {
        title: "Collaborative Environments in",
        highlight: "Applied Robotics.",
        desc: "Create dynamic spaces for programming, structural design, problem-solving, and algorithmic thinking.",
        buttonLink: "/solutions",
        image: "/images/lab2.png"
    },
    {
        title: "Preparing Students for",
        highlight: "Industry 4.0",
        desc: "Scale your campus technological labs up to industrial standards. Hi-Tech Automation with AI infused practical classes and Industry 4.0 Certification pathways.",
        buttonLink: "/solutions",
        image: "/images/3.jpeg"
    },
    {
        title: "Building Foundational Logic with",
        highlight: "Early Coding.",
        desc: "Systematically building crucial critical thinking skills, ensuring every student has the tools to succeed in a digital world.",
        buttonLink: "/about",
        image: "/images/schools/53.png"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % carouselData.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    const slide = carouselData[current];

    const nextSlide = () => setCurrent((prev) => (prev + 1) % carouselData.length);
    const prevSlide = () => setCurrent((prev) => (prev - 1 + carouselData.length) % carouselData.length);

    return (
        <div className="relative min-h-[75vh] md:min-h-[85vh] w-full flex items-center justify-center overflow-hidden  ">
            {/* 1. HERO CAROUSEL SETTING */}
            {/* Dynamic Background Image - Fully Visible */}
            <AnimatePresence mode="wait">
                <motion.img
                    key={current}
                    src={slide.image}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Gradient Overlay for Text Readability (Dark on left, transparent on right) */}
            <div className="absolute inset-0 bg-gradient-to-r from-topbar via-topbar/80 to-transparent hidden md:block z-0"></div>
            <div className="absolute inset-0 bg-topbar/30 md:hidden z-0"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-10 flex items-center pt-20 pb-24 md:py-0">
                <div className="max-w-3xl text-left">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium mb-4">
                                <Icon icon="mdi:rocket-launch" className="mr-2" />
                                Next Generation AI & STEM Education
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 drop-shadow-lg">
                                {slide.title}
                                <span>{'\u00A0'}</span>
                                <span className=" bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    {slide.highlight}
                                </span>
                            </h1>
                            <p className="text-lg md:text-xl text-gray-200 font-medium mb-8 leading-relaxed max-w-lg drop-shadow-md">
                                {slide.desc}
                            </p>
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
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            {/* Carousel Navigation Arrows */}
            <div className="absolute bottom-8 right-8 flex gap-3 z-20">
                <button onClick={prevSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-topbar/80 border border-white/20 text-white hover:bg-primary transition-colors backdrop-blur-md">
                    <ChevronLeft className="w-5 h-5" />
                </button>
                <button onClick={nextSlide} className="w-10 h-10 flex items-center justify-center rounded-full bg-topbar/80 border border-white/20 text-white hover:bg-primary transition-colors backdrop-blur-md">
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    )
}
