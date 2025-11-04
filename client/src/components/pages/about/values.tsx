import { Icon } from '@iconify/react';

export default function Values() {
  const values = [
    {
      icon: 'mdi:lightbulb-on',
      title: 'Innovation',
      description: 'Pushing the boundaries of educational technology.',
    },
    {
      icon: 'mdi:school',
      title: 'Education',
      description: 'Empowering learners with hands-on experiences.',
    },
    {
      icon: 'mdi:heart',
      title: 'Integrity',
      description: 'Delivering solutions with honesty and trust.',
    },
    {
      icon: 'mdi:rocket',
      title: 'Impact',
      description: 'Transforming lives through STEM education.',
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-center mb-12">
          Our Values
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="relative p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              style={{
                clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                background: 'linear-gradient(135deg, #ffffff, #f0f9ff)',
                border: '1px solid rgba(0, 0, 0, 0.05)',
              }}
            >
              {/* 3D Tilt Effect on Hover */}
              <div className="absolute inset-0 bg-white/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-blue-50 group-hover:bg-blue-100 transition-colors duration-300">
                  <Icon
                    icon={value.icon}
                    className="w-8 h-8 text-blue-500 group-hover:text-blue-600 transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
