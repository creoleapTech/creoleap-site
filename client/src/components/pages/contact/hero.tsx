// import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

export default function ContactPage() {
  // const [activeSupport, setActiveSupport] = useState(0);
  // const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   setIsVisible(true);
  //   const interval = setInterval(() => {
  //     setActiveSupport((prev) => (prev + 1) % supportOptions.length);
  //   }, 3000);
  //   return () => clearInterval(interval);
  // }, []);

  // const contactInfo = [
  //   {
  //     icon: "mdi:map-marker",
  //     title: "Corporate Office",
  //     details: ["Creoleap Technologies Private Limited", "29/8/2A, First Floor", "S.T.Hindu College Road, Beach Road","Nagercoil - 629002"],
  //     color: "from-blue-500 to-cyan-500",
  //     gradient: "bg-gradient-to-br from-blue-500 to-cyan-500",
  //     action: "Get Directions →"
  //   },
  //   {
  //     icon: "mdi:phone",
  //     title: "Call Our Team",
  //     details: ["+91 9363208701", "+91 9876543210"],
  //     color: "from-purple-500 to-pink-500",
  //     gradient: "bg-gradient-to-br from-purple-500 to-pink-500",
  //     action: "Call Now →"
  //   },
  //   {
  //     icon: "mdi:email",
  //     title: "Send Us Email",
  //     details: ["hello@creoleap.com", "support@creoleap.com"],
  //     color: "from-green-500 to-emerald-500",
  //     gradient: "bg-gradient-to-br from-green-500 to-emerald-500",
  //     action: "Send Email →"
  //   },
  //   {
  //     icon: "mdi:clock-outline",
  //     title: "Office Hours",
  //     details: ["Mon - Fri: 9AM - 6PM", "Sat: 10AM - 4PM"],
  //     color: "from-orange-500 to-red-500",
  //     gradient: "bg-gradient-to-br from-orange-500 to-red-500",
  //     action: "View Calendar →"
  //   }
  // ];


  // const supportOptions = [
  //   {
  //     icon: "mdi:robot-outline",
  //     title: "AI Assistant",
  //     description: "Get instant answers with our smart AI assistant",
  //     action: "Chat with AI",
  //     color: "from-purple-500 to-blue-500",
  //     stat: "24/7 Available"
  //   },
  //   {
  //     icon: "mdi:video-outline",
  //     title: "Video Call",
  //     description: "Face-to-face consultation with our experts",
  //     action: "Schedule Call",
  //     color: "from-green-500 to-teal-500",
  //     stat: "15 min Response"
  //   },
  //   {
  //     icon: "mdi:file-document-outline",
  //     title: "Documentation",
  //     description: "Comprehensive guides and API references",
  //     action: "Browse Docs",
  //     color: "from-orange-500 to-red-500",
  //     stat: "500+ Articles"
  //   },
  //   {
  //     icon: "mdi:account-group-outline",
  //     title: "Community",
  //     description: "Connect with other educators and developers",
  //     action: "Join Community",
  //     color: "from-pink-500 to-purple-500",
  //     stat: "10K+ Members"
  //   }
  // ];



  return (
    <div className=" bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30">
      <div className="relative overflow-hidden  bg-gradient-to-br from-[#080A25] via-[#080e4a] to-[#0a015a]">
        <div className="absolute inset-0">
          {/* Gradient Mesh */}
          <div className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                radial-gradient(at 40% 20%, hsla(28,100%,74%,0.3) 0px, transparent 50%),
                radial-gradient(at 80% 0%, hsla(189,100%,56%,0.3) 0px, transparent 50%),
                radial-gradient(at 0% 50%, hsla(355,100%,93%,0.2) 0px, transparent 50%),
                radial-gradient(at 80% 50%, hsla(340,100%,76%,0.2) 0px, transparent 50%),
                radial-gradient(at 0% 100%, hsla(22,100%,77%,0.2) 0px, transparent 50%),
                radial-gradient(at 80% 100%, hsla(242,100%,70%,0.2) 0px, transparent 50%),
                radial-gradient(at 0% 0%, hsla(343,100%,76%,0.2) 0px, transparent 50%)
              `
            }}
          ></div>
          
          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-white/10 animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${Math.random() * 4 + 2}px`,
                  height: `${Math.random() * 4 + 2}px`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${Math.random() * 10 + 10}s`
                }}
              />
            ))}
          </div>
        </div>
        <div className="relative z-10 container mx-auto px-4 py-10 pb-20">
          <div className="max-w-6xl mx-auto">
         
            {/* Main Heading */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6 leading-tight">
                Let's Build
                <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Something Amazing
                </span>
              </h1>
              <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
                Your vision, our expertise. Let's collaborate to transform education through cutting-edge technology and innovative solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <button className="group relative px-8 py-4 bg-white text-slate-900 font-bold rounded-2xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative flex items-center gap-3">
                  <Icon icon="mdi:calendar-star" className="text-xl group-hover:rotate-12 transition-transform duration-300" />
                  Schedule Discovery Call
                  <Icon icon="mdi:arrow-right" className="text-xl group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="group px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 backdrop-blur-md transition-all duration-500 transform hover:scale-105 flex items-center justify-center gap-3">
                <Icon icon="mdi:message-processing" className="text-xl group-hover:animate-bounce" />
                Start Live Chat
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
              </button>
            </div> */}

          </div>
        </div>
      </div>

      {/* Contact Cards Section */}
  <div className="relative -mt-20 pb-10 px-4">
  <div className="container mx-auto max-w-7xl">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Contact Info Cards */}
      <div className="grid grid-cols-1  gap-6">
 <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden border border-gray-100">
      {/* Gradient Accent */}
      <div className="h-2 bg-gradient-to-r from-blue-500 to-cyan-500"></div>

      {/* --- LOCATION --- */}
      <div
        onClick={() =>
          window.open(
            'https://www.google.com/maps/place/Creoleap+Technologies+Private+Limited/@8.1658602,77.4301661,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f10ff0bcc081:0x8bf7dbed8fce5893!8m2!3d8.1658602!4d77.4327464!16s%2Fg%2F11x7xz8f3c?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D',
            '_blank'
          )
        }
        className="relative z-10 px-6 pt-4 pb-3 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 rounded-2xl mx-2"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-md">
            <Icon icon="mdi:map-marker-radius" className="text-2xl text-white" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-1">Corporate Office</h3>
            <p className="text-slate-600 text-md md:text-lg">
              Creoleap Technologies Private Limited, 29/8/2A, First Floor, S.T.Hindu College Road,
              Beach Road, Nagercoil-629002.
            </p>
          </div>
        </div>
      </div>

      {/* --- PHONE --- */}
      <div
        onClick={() => (window.location.href = 'tel:+919363208701')}
        className="relative z-10 px-6 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-300 rounded-2xl mx-2"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 shadow-md">
            <Icon icon="mdi:phone" className="text-2xl text-white" />
          </div>
          <div className="flex-1">
            <p className="text-slate-600 text-md md:text-lg hover:text-slate-900 font-medium">
              +91 9363208701
            </p>
          </div>
        </div>
      </div>

      {/* --- EMAIL --- */}
      <div
        onClick={() => (window.location.href = 'mailto:info@creoleap.com')}
        className="relative z-10 px-6 py-3 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 transition-all duration-300 rounded-2xl mx-2 mb-4"
      >
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 hover:scale-110 shadow-md">
            <Icon icon="mdi:email" className="text-2xl text-white" />
          </div>
          <div className="flex-1">
            <p className="text-slate-600 text-md md:text-lg hover:text-slate-900 font-medium">
              info@creoleap.com
            </p>
          </div>
        </div>
      </div>
    </div>
      </div>

      {/* Map Box */}
      <div className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
        {/* Gradient Accent */}
        <div className="h-2 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        
        <div className="relative z-10 p-6">

          {/* Interactive Map Image */}
          <a 
            href="https://www.google.com/maps/place/Creoleap+Technologies+Private+Limited/@8.1658602,77.4301661,17z/data=!3m1!4b1!4m6!3m5!1s0x3b04f10ff0bcc081:0x8bf7dbed8fce5893!8m2!3d8.1658602!4d77.4327464!16s%2Fg%2F11x7xz8f3c?entry=ttu&g_ep=EgoyMDI1MTAyNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="block relative rounded-2xl overflow-hidden shadow-lg group/map"
          >
            {/* Map Image */}
            <div className="relative overflow-hidden">
              {/* Map Preview */}
             
           <img src="/images/map.png" alt="" className='!object-cover' />
              
              {/* Location Marker */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                    <Icon icon="mdi:map-marker" className="text-white text-lg" />
                  </div>
                  <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>


              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover/map:bg-black/10 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 transform scale-0 group-hover/map:scale-100 transition-transform duration-300">
                  <Icon icon="mdi:arrow-top-right" className="text-2xl text-slate-800" />
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </div>

  </div>
</div>
    </div>
  );
}