import { Icon } from '@iconify/react';
import { Link } from '@tanstack/react-router';

const Hero = () => {
  return (
    <section className="min-h-screen  bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] flex items-center relative overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute z-20 inset-0 overflow-hidden">
        <div className="absolute w-80 h-80 bg-blue-400 rounded-full opacity-10 -top-40 -right-40"></div>
        <div className="absolute w-60 h-60 bg-purple-500 rounded-full opacity-10 -bottom-30 -left-20"></div>
        <div className="absolute w-40 h-40 bg-indigo-400 rounded-full opacity-10 top-1/2 left-1/3"></div>
      </div>
            <div className="absolute z-10 inset-0 overflow-hidden">
       
      </div> <div className="absolute w-80 h-80  bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] rounded-full  -top-40 -right-40"></div>


       <div className="absolute w-40 h-40  bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a] rounded-full  top-1/2 left-1/3"></div>
        {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content Column */}
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex  items-center px-4 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-600 text-sm font-semibold mb-6">
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
              </svg>
              About Our Journey
            </div>

            {/* Title */}
            <h1 className="text-4xl text-white sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Build{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Digital Dreams
              </span>{' '}
              Into Reality
            </h1>

            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-400 mb-8 leading-relaxed">
            At Creoleap Technologies, we are transforming education by integrating AI, Robotics, and STEM learning into a dynamic, NEP-aligned curriculum based on the CCC Method. Our mission is to empower students and educators with innovative tools, fostering a culture of inquiry-driven, hands-on learning that prepares young minds for the future.
            </p>
      <Link
                      to="/contact"
                      className="cta-button group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-3 hover:shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <span>Explore Programs</span>
                      <Icon 
                        icon="mdi:arrow-right" 
                        className="group-hover:translate-x-1 transition-transform duration-300" 
                        width="20" 
                      />
                    </Link>
            {/* Stats */}
            {/* <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 text-gray-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold ">100+</div>
                <div className="text-gray-300 text-sm sm:text-base">School Clients</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold ">20K+</div>
                <div className="text-gray-300 text-sm sm:text-base">Students Trained</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold ">150+</div>
                <div className="text-gray-300 text-sm sm:text-base">Teachers Trained</div>
              </div>
               <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold ">200+</div>
                <div className="text-gray-300 text-sm sm:text-base">Innovations</div>
              </div>
            </div> */}

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl flex items-center justify-center group">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                </svg>
                Watch Our Story
              </button>
              <button className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center group">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                </svg>
                Meet The Team
              </button>
            </div> */}
          </div>

          {/* Visual Column */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative z-10">
              <div className="w-full max-w-md mx-auto bg-gradient-to-br from-transparent to-transparent rounded-2xl shadow-2xl aspect-[4/3] flex items-center justify-center">
                <div className="text-center text-gray-600">
                  {/* <svg className="w-16 h-16 mx-auto mb-2 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg> */}
                  {/* <p className="text-sm">Team Photo</p> */}
                  <img src="/images/model1.jpeg" className='rounded-2xl' alt="" />
                </div>
              </div>
            </div>

            {/* Floating Card 1 */}
            {/* <div 
              className="absolute bg-white rounded-xl shadow-xl p-3 sm:p-4 flex items-center gap-3 z-20 bottom-4 sm:bottom-10 -left-4 sm:-left-10 animate-bounce sm:animate-float"
              style={{ animationDelay: '0s' }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-green-500 to-green-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Award Winning</h4>
                <p className="text-gray-600 text-xs sm:text-sm">Recognized for excellence</p>
              </div>
            </div> */}

            {/* Floating Card 2 */}
            {/* <div 
              className="absolute bg-white rounded-xl shadow-xl p-3 sm:p-4 flex items-center gap-3 z-20 top-4 sm:top-20 -right-4 sm:-right-10 animate-bounce sm:animate-float"
              style={{ animationDelay: '2000ms' }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-amber-500 to-amber-400">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Customer Focused</h4>
                <p className="text-gray-600 text-xs sm:text-sm">98% satisfaction rate</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;