import {Dispatch, SetStateAction} from "react";

export default function Home ({ setPage }: {setPage: Dispatch<SetStateAction<string>>}) {
  return (
      <section
          id="home"
          className="min-h-screen flex items-center justify-center px-4 pt-16 -mt-16 text-center"
      >
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
          {/* Left: Text Content */}
          <div className="md:w-1/2">
          <span className="text-blue-300 font-semibold text-lg">
            Hi, my name is
          </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mt-3 mb-5 text-white text-shadow-hero">
              Your Name Here
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-gray-200 mb-8 text-shadow-medium">
              I build dynamic apps with React & Next.js
            </h2>
            <div className="flex justify-center md:justify-start gap-4">
              <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage('projects');
                  }}
                  className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-semibold rounded-lg shadow-lg hover:bg-white/30 transition-all"
              >
                My Projects
              </a>
              <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage('contact');
                  }}
                  className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:from-blue-600 hover:to-purple-600 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="md:w-1/3 flex justify-center md:justify-end">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white/40 shadow-2xl bg-white/10 backdrop-blur-sm p-1">
              <img
                  src="https://placehold.co/300x300/3B82F6/E0F2FE?text=Your+Photo"
                  alt="Your Profile"
                  className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </section>
  );
};