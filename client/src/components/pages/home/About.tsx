

const About = () => {
  return (
<div className=' bg-gradient-to-t from-gray-50 to-indigo-50 '>
   <section className='lg:py-10 py-5 lg:w-3/4 w-5/6 mx-auto px-auto flex flex-col justify-center items-center'>
  <h1 className=' text-gray-600 lg:py-5 py-2 lg:text-2xl text-lg   text-center leading-normal'>
    At Creoleap Technologies, we are transforming education by integrating AI, Robotics, and STEM learning into a dynamic, NEP-aligned curriculum based on the CCC Method. Our mission is to empower students and educators with innovative tools, fostering a culture of inquiry-driven, hands-on learning that prepares young minds for the future.
  </h1>
 <article>
   <div className=" py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex lg:flex-row flex-col items-center justify-center   lg:gap-5 gap-2">
       
             {/* Image and Values Section */}
        <div className=" flex lg:w-1/2 w-full flex-col items-center">
 <div className="w-full rounded-4xl border-b-4 border-transparent shadow-lg overflow-hidden [transform:perspective(1000px)_rotateY(10deg)_rotateX(-5deg)] [transform-style:preserve-3d]">
  <video
    className="w-full h-auto"
    preload="metadata"
    autoPlay
    muted
    loop
    playsInline
    poster="your-poster-image-url.jpg"
  >
    <source src="/videos/child.webm" type="video/webm" />
    Your browser does not support the video tag.
  </video>
</div>


         <div className="mt-8 grid grid-cols-3 gap-6 px-4">
      {/* Curiosity Card */}
      <div
        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center py-6 px-4 transition-all duration-500 hover:translate-y-[-10px] border-b-4 border-[#FF4500] transform hover:shadow-xl"
        style={{
          transform: "perspective(1000px) rotateY(-0.14deg) rotateX(-2.32deg)",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-[#ffefe9] flex items-center justify-center mb-4 transition-transform duration-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#FF4500]"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45c-.19.47-.58.84-1.06 1l-.79.25a1.69 1.69 0 0 1-1.86-.55L14.44 18c-.89-.15-1.73-.53-2.44-1.1c-.5.15-1 .23-1.5.23c-.88 0-1.76-.27-2.5-.79c-.53.16-1.07.23-1.62.22c-.79.01-1.57-.15-2.3-.45a4.1 4.1 0 0 1-2.43-3.61c-.08-.72.04-1.45.35-2.11c-.29-.75-.32-1.57-.07-2.33C2.3 7.11 3 6.32 3.87 5.82c.58-1.69 2.21-2.82 4-2.7c1.6-1.5 4.05-1.66 5.83-.37c.42-.11.86-.17 1.3-.17c1.36-.03 2.65.57 3.5 1.64c2.04.53 3.5 2.35 3.58 4.47c.05 1.11-.25 2.2-.86 3.13c.07.36.11.72.11 1.09m-5-1.41c.57.07 1.02.5 1.02 1.07a1 1 0 0 1-1 1h-.63c-.32.9-.88 1.69-1.62 2.29c.25.09.51.14.77.21c5.13-.07 4.53-3.2 4.53-3.25a2.59 2.59 0 0 0-2.69-2.49a1 1 0 0 1-1-1a1 1 0 0 1 1-1c1.23.03 2.41.49 3.33 1.3c.05-.29.08-.59.08-.89c-.06-1.24-.62-2.32-2.87-2.53c-1.25-2.96-4.4-1.32-4.4-.4c-.03.23.21.72.25.75a1 1 0 0 1 1 1c0 .55-.45 1-1 1c-.53-.02-1.03-.22-1.43-.56c-.48.31-1.03.5-1.6.56c-.57.05-1.04-.35-1.07-.9a.97.97 0 0 1 .88-1.1c.16-.02.94-.14.94-.77c0-.66.25-1.29.68-1.79c-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2C4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25c.5.19.78.75.59 1.29c-.19.52-.77.78-1.29.59c-.73-.32-1.55-.34-2.3-.06c-.32.27-.32.83-.32 1.27c0 .74.37 1.43 1 1.83c.53.27 1.12.41 1.71.4q-.225-.39-.39-.81a1.038 1.038 0 0 1 1.96-.68c.4 1.14 1.42 1.92 2.62 2.05c1.37-.07 2.59-.88 3.19-2.13c.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3l-.71.16l1 1.25zm-4.65-8.61a1 1 0 0 0-.91-1.03c-.71-.04-1.4.2-1.93.67c-.57.58-.87 1.38-.84 2.19a1 1 0 0 0 1 1c.57 0 1-.45 1-1c0-.27.07-.54.23-.76c.12-.1.27-.15.43-.15c.55.03 1.02-.38 1.02-.92c0-.54-.45-1-1-1c-.53-.02-1.03-.22-1.43-.56c-.48.31-1.03.5-1.6.56c-.57.05-1.04-.35-1.07-.9a.97.97 0 0 1 .88-1.1c.16-.02.94-.14.94-.77c0-.66.25-1.29.68-1.79c-.92-.25-1.91.08-2.91 1.29C6.75 5 6 5.25 5.45 7.2C4.5 7.67 4 8 3.78 9c1.08-.22 2.19-.13 3.22.25c.5.19.78.75.59 1.29c-.19.52-.77.78-1.29.59c-.73-.32-1.55-.34-2.3-.06c-.32.27-.32.83-.32 1.27c0 .74.37 1.43 1 1.83c.53.27 1.12.41 1.71.4q-.225-.39-.39-.81a1.038 1.038 0 0 1 1.96-.68c.4 1.14 1.42 1.92 2.62 2.05c1.37-.07 2.59-.88 3.19-2.13c.23-1.38 1.34-1.5 2.56-1.5m2 7.47l-.62-1.3l-.71.16l1 1.25zm-4.65-8.61a1 1 0 0 0-.91-1.03c-.71-.04-1.4.2-1.93.67c-.57.58-.87 1.38-.84 2.19a1 1 0 0 0 1 1c.57 0 1-.45 1-1c0-.27.07-.54.23-.76c.12-.1.27-.15.43-.15c.55.03 1.02-.38 1.02-.92" />
          </svg>
        </div>
        <p className="text-center font-ubuntu font-bold text-[#0a015a]">
          Curiosity
        </p>
        <div className="w-10 h-1 bg-[#FF4500] mt-3 rounded-full" />
      </div>

      {/* Creativity Card */}
      <div
        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center py-6 px-4 transition-all duration-500 hover:translate-y-[-10px] border-b-4 border-[#008080] transform hover:shadow-xl"
        style={{
          transform: "perspective(1000px) rotateY(-0.14deg) rotateX(-2.32deg)",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-[#e6f7f7] flex items-center justify-center mb-4 transition-transform duration-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#008080]"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20 11h3v2h-3zM1 11h3v2H1zM13 1v3h-2V1zM4.92 3.5l2.13 2.14l-1.42 1.41L3.5 4.93zm12.03 2.13l2.12-2.13l1.43 1.43l-2.13 2.12zM12 6a6 6 0 0 1 6 6c0 2.22-1.21 4.16-3 5.2V19a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1.8c-1.79-1.04-3-2.98-3-5.2a6 6 0 0 1 6-6m2 15v1a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-1zm-3-3h2v-2.13c1.73-.44 3-2.01 3-3.87a4 4 0 0 0-4-4a4 4 0 0 0-4 4c0 1.86 1.27 3.43 3 3.87z" />
          </svg>
        </div>
        <p className="text-center font-ubuntu font-bold text-[#0a015a]">
          Creativity
        </p>
        <div className="w-10 h-1 bg-[#008080] mt-3 rounded-full" />
      </div>

      {/* Critical Thinking Card */}
      <div
        className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg flex flex-col items-center py-6 px-4 transition-all duration-500 hover:translate-y-[-10px] border-b-4 border-[#483D8B] transform hover:shadow-xl"
        style={{
          transform: "perspective(1000px) rotateY(-0.14deg) rotateX(-2.32deg)",
        }}
      >
        <div className="w-16 h-16 rounded-full bg-[#eeecf7] flex items-center justify-center mb-4 transition-transform duration-500 hover:scale-110">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-[#483D8B]"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M13 3c3.88 0 7 3.14 7 7c0 2.8-1.63 5.19-4 6.31V21H9v-3H8c-1.11 0-2-.89-2-2v-3H4.5c-.42 0-.66-.5-.42-.81L6 9.66A7.003 7.003 0 0 1 13 3m0-2C8.42 1 4.61 4.43 4.06 8.91L2.5 11c-.58.72-.68 1.72-.26 2.59c.36.72 1 1.21 1.76 1.36V16c0 1.86 1.28 3.43 3 3.87V23h11v-5.53c2.5-1.64 4-4.41 4-7.47c0-4.96-4.04-9-9-9m3.1 8.42V9c0-.15 0-.24-.06-.38l.89-.66c.07-.04.07-.18.07-.28l-.82-1.36c-.05-.09-.18-.14-.28-.09l-.99.42c-.18-.19-.41-.33-.65-.42L14.1 5.2c-.03-.14-.1-.2-.22-.2h-1.59c-.1 0-.19.06-.19.2l-.14 1.03c-.23.09-.46.23-.66.42l-1.03-.42c-.09-.05-.17 0-.23.09l-.8 1.36c-.05.14-.05.24.05.28l.84.66c0 .14-.03.28-.03.38c0 .14.03.28.03.42l-.84.65c-.1.05-.1.14-.05.24l.8 1.4c.06.1.14.1.23.1l.99-.43c.24.19.42.29.7.38l.14 1.08c0 .09.09.16.19.16h1.59c.12 0 .19-.07.22-.16l.16-1.08c.24-.09.47-.19.65-.37l.99.42c.1 0 .23 0 .28-.1l.82-1.4c0-.1 0-.19-.07-.24zm-3 1.03c-.78 0-1.42-.66-1.42-1.45s.61-1.41 1.42-1.41c.78 0 1.44.61 1.44 1.41s-.66 1.45-1.44 1.45" />
          </svg>
        </div>
        <p className="text-center font-ubuntu font-bold text-[#0a015a]">
          Critical Thinking
        </p>
        <div className="w-10 h-1 bg-[#483D8B] mt-3 rounded-full" />
      </div>
    </div>
        </div>
       
        <div className="flex flex-col items-center lg:w-1/2 w-full lg:gap-2 gap-2">
           <div className="bg-white/80 backdrop-blur-sm shadow-purple-100 rounded-xl shadow-xl p-4">
            <div className="flex items-center mb-2">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
               <svg xmlns="http://www.w3.org/2000/svg" className='text-purple-600' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M9.68 13.69L12 11.93l2.31 1.76l-.88-2.85L15.75 9h-2.84L12 6.19L11.09 9H8.25l2.31 1.84zM20 10c0-4.42-3.58-8-8-8s-8 3.58-8 8c0 2.03.76 3.87 2 5.28V23l6-2l6 2v-7.72A7.96 7.96 0 0 0 20 10m-8-6c3.31 0 6 2.69 6 6s-2.69 6-6 6s-6-2.69-6-6s2.69-6 6-6m0 15l-4 1.02v-3.1c1.18.68 2.54 1.08 4 1.08s2.82-.4 4-1.08v3.1z"/></svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Curiosity-Driven Learning</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
We encourage students to ask questions, explore concepts, and develop a deeper understanding of technology through guided discovery and experiential learning.
            </p>
          </div>
          {/* Vision Section */}
          <div className="bg-white/80 backdrop-blur-sm  rounded-xl shadow-xl shadow-purple-100 p-4 ">
            <div className="flex items-center mb-2">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
               <svg xmlns="http://www.w3.org/2000/svg" width="24" className='text-purple-600' height="24" viewBox="0 0 24 24"><path fill="currentColor" d="m19 9l1.25-2.75L23 5l-2.75-1.25L19 1l-1.25 2.75L15 5l2.75 1.25zm-7.5.5L9 4L6.5 9.5L1 12l5.5 2.5L9 20l2.5-5.5L17 12zM19 15l-1.25 2.75L15 19l2.75 1.25L19 23l1.25-2.75L23 19l-2.75-1.25z"/></svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Creative Problem-Solving</h2>
            </div>
            <p className="text-gray-600 leading-relaxed ">
             Through hands-on activities and collaborative projects, we nurture innovation and out-of-the-box thinking that prepares students for real-world challenges.
            </p>
          </div>

          {/* Mission Section */}
             <div className="bg-white/80 backdrop-blur-sm shadow-purple-100 rounded-xl shadow-xl p-4">
            <div className="flex items-center mb-2">
              <div className="bg-purple-100 p-3 rounded-full mr-4">
             <svg xmlns="http://www.w3.org/2000/svg" className='text-purple-600' width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M3.975 21v-3h3.1l-2.55-8.35q-.675-.375-1.112-1.1T2.975 7q0-1.25.875-2.125T5.975 4q.975 0 1.738.563T8.775 6h3.2V5q0-.425.288-.712T12.975 4q.225 0 .438.1t.362.3l1.7-1.6q.225-.225.538-.288t.612.088l3.9 1.8q.3.15.413.438t-.013.562q-.15.3-.437.388t-.563-.038l-3.6-1.65l-2.35 2.2v1.4l2.35 2.15l3.6-1.65q.275-.125.575-.025t.425.375q.15.3.025.575t-.425.425l-3.9 1.85q-.3.15-.612.087t-.538-.287l-1.7-1.6q-.15.15-.362.275t-.438.125q-.425 0-.712-.287T11.975 9V8h-3.2q-.075.2-.162.375t-.238.375l5 9.25h3.6v3zm2-13q.425 0 .713-.288T6.975 7t-.287-.712T5.975 6t-.712.288T4.975 7t.288.713t.712.287"/></svg>
              </div>
              <h2 className="text-xl font-bold text-gray-800">Building Future-Ready Hubs</h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
Our innovation hubs serve as incubation centers for young minds to explore, create, and bring ideas to life through state-of-the-art technology and expert guidance.            </p>
          </div>
       
        </div>

  
      </div>
    </div>
 </article>
 </section>
</div>
  );
};

export default About;
