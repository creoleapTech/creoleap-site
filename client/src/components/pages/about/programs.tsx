import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { Icon } from '@iconify/react';

export default function Programs() {
  const [activeTab, setActiveTab] = useState('schools');

  const programs = {
    schools: [
            { name: 'NEP Aligned Curriculum', description: 'Modern education framework for holistic learning.', icon: 'mdi:book-education' },
            { name: 'AI Integrated Robotics', description: 'Building and programming intelligent robots.', icon: 'mdi:robot-industrial' },
            { name: 'AI Integrated Electronics', description: 'Hands-on learning with AI-driven electronic systems.', icon: 'mdi:robot' },
      { name: 'Teacher Empowerment Program', description: 'Training educators to inspire the next generation.', icon: 'mdi:school' },
    ],
    colleges: [
      { name: 'Industry 4.0 Readiness Program', description: 'Preparing students for smart manufacturing.', icon: 'mdi:factory' },
      { name: 'ROS2 Certification', description: 'Advanced robotics operating system training.', icon: 'mdi:chip' },
      { name: 'Embedded System & IoT Certification', description: 'Mastering connected devices.', icon: 'mdi:internet' },
    ],
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 text-center mb-12">Our Programs</h2>
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-2 font-medium text-lg transition-colors ${
              activeTab === 'schools' ? 'bg-blue-950 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
            } rounded-l-md`}
            onClick={() => setActiveTab('schools')}
          >
            For Schools
          </button>
          <button
            className={`px-6 py-2 font-medium text-lg transition-colors ${
              activeTab === 'colleges' ? 'bg-blue-950 text-white' : 'bg-gray-200 text-gray-700 hover:bg-blue-100'
            } rounded-r-md`}
            onClick={() => setActiveTab('colleges')}
          >
            For Colleges
          </button>
        </div>
        <div className="relative">
          <div className={`transition-opacity duration-500 ${activeTab === 'schools' ? 'opacity-100' : 'opacity-0 absolute'}`}>
            <div className="grid grid-cols-1 gap-6">
              {programs.schools.map((program) => (
                <div
                  key={program.name}
                  className="group bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <Icon icon={program.icon} className="w-10 h-10 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{program.name}</h3>
                      <p className="text-gray-600 text-base sm:text-lg">{program.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={`transition-opacity duration-500 ${activeTab === 'colleges' ? 'opacity-100' : 'opacity-0 absolute'}`}>
            <div className="grid grid-cols-1 gap-6">
              {programs.colleges.map((program) => (
                <div
                  key={program.name}
                  className="group bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <Icon icon={program.icon} className="w-10 h-10 text-blue-500 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-gray-800">{program.name}</h3>
                      <p className="text-gray-600 text-base sm:text-lg">{program.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <Link
            to="/programs"
            className="text-blue-500 hover:text-blue-700 font-medium inline-flex items-center space-x-2"
            aria-label="Explore All Programs"
          >
            <span>Explore All Programs</span>
            <Icon icon="mdi:arrow-right" width="20" height="20" />
          </Link>
        </div>
      </div>
    </section>
  );
}