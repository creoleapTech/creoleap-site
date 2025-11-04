import { Icon } from "@iconify/react"
import { useRef, useState } from "react"

interface GalleryItem {
  id: string
  title: string
  category: string
  image: string
  description?: string
}

export default function Hero() {

  const heroRef = useRef(null);

  const trainingItems: GalleryItem[] = [
    { 
      id: "9", 
      title: "ATL Orientation", 
      category: "ATL", 
      image: "/images/session/1.jpeg"     },
    { 
      id: "10", 
      title: "AI Training", 
      category: "AI & Robotics", 
      image: "/images/session/1.jpeg"     },
          { 
      id: "10", 
      title: "AI Training", 
      category: "AI & Robotics", 
      image: "/images/session/2.jpeg"     },
          { 
      id: "10", 
      title: "AI Training", 
      category: "AI & Robotics", 
      image: "/images/session/4.jpeg"     },
          { 
      id: "10", 
      title: "AI Training", 
      category: "AI & Robotics", 
      image: "/images/session/5.jpeg"     },
    { 
      id: "11", 
      title: "3D Printer Experiment", 
      category: "STEAM", 
      image: "/images/session/6.jpeg"     },
    { 
      id: "12", 
      title: "Student Learning", 
      category: "AI & Robotics", 
      image: "/images/session/4.jpeg"     },
    { 
      id: "13", 
      title: "IoT Training", 
      category: "IoT", 
      image: "/images/session/5.jpeg"     },
    { 
      id: "15", 
      title: "Vigyan Jyoti Program", 
      category: "Vigyan Jyoti", 
      image: "/images/session/6.jpeg"     },
    { 
      id: "16", 
      title: "Completion Certificate", 
      category: "ATL", 
      image: "/images/session/7.jpeg"     },
  ]

  const [selectedTraining, setSelectedTraining] = useState<string | null>(null)
  const trainingCategories = Array.from(new Set(trainingItems.map((item) => item.category)))

  const filteredTraining = selectedTraining
    ? trainingItems.filter((item) => item.category === selectedTraining)
    : trainingItems

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20">
       <div className="relative h-[70vh] w-full overflow-hidden">
          {/* Blurred Background Image */}
          <div
            className="absolute inset-0 bg-[url('/images/3.jpeg')] bg-cover md:bg-center bg-right"
            style={{ filter: 'blur(1px)' }}
          ></div>
  
          {/* Overlay for Readability */}
          <div className="absolute inset-0 bg-black/50"></div>
  
          {/* Hero Content */}
          <section
            ref={heroRef}
            className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 max-w-6xl h-full flex flex-col items-center justify-center text-center relative z-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Discover the impact of our innovations
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-3xl mx-auto mb-10">
             From concept to creation, our works tell the story of innovation in motion.
Explore how we’ve shaped ideas into digital realities that inspire and educate.
            </p>
            
          </section>
        </div>
      {/* Enhanced Labs Gallery Section */}
      <section className="py-20 md:py-32 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
              Innovation Gallery
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our hands-on workshops, training sessions, and transformative educational experiences
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-teal-500 mx-auto mt-6 rounded-full"></div>
          </div>

          {/* Enhanced Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-16">
            <button
              onClick={() => setSelectedTraining(null)}
              className={`group px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                selectedTraining === null 
                  ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg" 
                  : "bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200"
              }`}
            >
              <span>All</span>
              <span className={`px-2 py-1 rounded-full text-xs ${
                selectedTraining === null ? "bg-white/20" : "bg-gray-100"
              }`}>
                {trainingItems.length}
              </span>
            </button>
            {trainingCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedTraining(category)}
                className={`group px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  selectedTraining === category 
                    ? "bg-gradient-to-r from-blue-500 to-teal-500 text-white shadow-lg" 
                    : "bg-white text-gray-700 hover:bg-gray-50 shadow-md border border-gray-200"
                }`}
              >
                <span>{category}</span>
                <span className={`px-2 py-1 rounded-full text-xs ${
                  selectedTraining === category ? "bg-white/20" : "bg-gray-100"
                }`}>
                  {trainingItems.filter(item => item.category === category).length}
                </span>
              </button>
            ))}
          </div>

          {/* Enhanced Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {filteredTraining.map((item) => (
              <div
                key={item.id}
                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 aspect-square cursor-pointer transform hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl"
              >
                <div className="relative w-full h-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Content Overlay */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="inline-block px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded-full mb-3">
                        {item.category}
                      </span>
                      <h3 className="text-white font-bold text-lg mb-2 leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm line-clamp-2">
                        {item.description || "Hands-on learning experience with cutting-edge technology"}
                      </p>
                    </div>
                  </div>

                  {/* Quick Info Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-gray-800">{item.category}</span>
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/50 rounded-3xl transition-all duration-300"></div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredTraining.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No projects found</h3>
              <p className="text-gray-600">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

    </div>
  )
}