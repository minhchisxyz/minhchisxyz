'use client'

import {useState} from "react";
import Hero from "@/app/ui/portfolio/hero";
import Skills from "@/app/ui/portfolio/skills";
import Projects from "@/app/ui/portfolio/projects";
import Navbar from "@/app/ui/portfolio/navigation";
import Footer from "@/app/ui/portfolio/footer";
import {useOnInView} from "react-intersection-observer";

export default function Main() {
  // Define background gradients for each section
  const sectionBackgrounds = {
    default: 'from-purple-900 via-gray-900 to-blue-900',
    home: 'from-blue-800 via-purple-900 to-pink-800', // Deep blues and purples
    skills: 'from-green-800 via-teal-900 to-blue-900', // Greens and blues
    projects: 'from-red-800 via-orange-900 to-yellow-800', // Warm reds and oranges
    contact: 'from-gray-800 via-indigo-900 to-gray-800', // Cool grays and indigos
  };

  // define options for intersection observer
  const options = {
    threshold: 0.2,
  }
  const name = 'Minh Chi Diep'
  const [page, setPage] = useState('home');
  const [bg, setBg] = useState(sectionBackgrounds.default);
  const homeRef = useOnInView(
      (inView) => {
        if (inView) {
          setBg(sectionBackgrounds.home)
          setPage('home')
        }
      }, options
  )
  const skillsRef = useOnInView(
      (inView) => {
        if (inView) {
          setBg(sectionBackgrounds.skills)
          setPage('skills')
        }
      }, options
  )
  const projectsRef = useOnInView(
      (inView) => {
        if (inView) {
          setBg(sectionBackgrounds.projects)
          setPage('projects')
        }
      }, options
  )

  return (
      <div className={`relative min-h-screen w-full transition-colors duration-1000 ease-in-out bg-gradient-to-br ${bg}`}>

        {/* Animated Background Blobs - Colors adjusted to better blend with dynamic backgrounds */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute -top-20 -left-1/4 w-96 h-96 md:w-1/2 md:h-1/2 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-blob-1 mix-blend-screen"></div>
          <div className="absolute top-1/2 -right-1/4 w-96 h-96 md:w-1/2 md:h-1/2 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-blob-2 mix-blend-screen"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 md:w-1/2 md:h-1/2 bg-pink-400 rounded-full filter blur-3xl opacity-20 animate-blob-3 mix-blend-screen"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar setPageAction={setPage} page={page} name={name}/>
          <main>
            {/* We now pass refs to each section */}
            <section id="home" ref={homeRef} className="min-h-screen flex items-center justify-center px-4 pt-16 -mt-16 text-center">
              <Hero setPage={setPage} name={ name } />
            </section>
            <section id="skills" ref={skillsRef} className="py-24">
              <Skills />
            </section>
            <section id="projects" ref={projectsRef} className="py-24">
              <Projects />
            </section>
            {/*<section id="contact" ref={sectionRefs.contact} className="py-24">
              <Contact />
            </section>*/}
          </main>
          <Footer name={ name } />
        </div>
      </div>
  )
}