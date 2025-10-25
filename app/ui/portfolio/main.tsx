'use client'

import {useEffect, useRef, useState} from "react";
import Hero from "@/app/ui/portfolio/hero";
import Skills from "@/app/ui/portfolio/skills";
import Projects from "@/app/ui/portfolio/projects";
import Contact from "@/app/ui/portfolio/contact";
import Navbar from "@/app/ui/portfolio/navigation";
import Footer from "@/app/ui/portfolio/footer";

export default function Main() {
  const name = 'Minh Chi Diep'
  const [page, setPage] = useState('home');
  const [currentBg, setCurrentBg] = useState('from-purple-900 via-gray-900 to-blue-900'); // Initial background
  const sectionRefs = {
    home: useRef<HTMLElement | null>(null),
    skills: useRef<HTMLElement | null>(null),
    projects: useRef<HTMLElement | null>(null),
    contact: useRef<HTMLElement | null>(null),
  };

  // Define background gradients for each section
  const sectionBackgrounds = {
    home: 'from-blue-800 via-purple-900 to-pink-800', // Deep blues and purples
    skills: 'from-green-800 via-teal-900 to-blue-900', // Greens and blues
    projects: 'from-red-800 via-orange-900 to-yellow-800', // Warm reds and oranges
    contact: 'from-gray-800 via-indigo-900 to-gray-800', // Cool grays and indigos
  };

  // Effect to handle navigation and scrolling
  useEffect(() => {
    const element = document.getElementById(page);
    if (element) {
      const yOffset = -64; // Navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      if (window.history.pushState) {
        window.history.pushState(null, "", `#${page}`);
      } else {
        window.location.hash = page;
      }
    }
  }, [page]);

  // Effect to handle initial page load from hash
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'skills', 'projects', 'contact'].includes(hash)) {
      setPage(hash);
    } else {
      setPage('home');
    }
  }, []);

  // Effect to handle background change on scroll
  useEffect(() => {
    setCurrentBg(sectionBackgrounds[page as keyof typeof sectionBackgrounds]); // Update background immediately on page state change

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px', // When the middle of the section is in view
      threshold: 0,
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setCurrentBg(sectionBackgrounds[sectionId as keyof typeof sectionBackgrounds]);
          // Optionally update the URL hash and active nav link if you want
          // setPage(sectionId); // This would also trigger the main page effect
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(sectionRefs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [page, sectionBackgrounds]); // Re-run if page or backgrounds change
  return (
      <div className={`relative min-h-screen w-full overflow-x-hidden transition-colors duration-1000 ease-in-out bg-gradient-to-br ${currentBg}`}>

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
            <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center justify-center px-4 pt-16 -mt-16 text-center">
              <Hero setPage={setPage} name={ name } />
            </section>
            <section id="skills" ref={sectionRefs.skills} className="py-24">
              <Skills />
            </section>
            <section id="projects" ref={sectionRefs.projects} className="py-24">
              <Projects />
            </section>
            <section id="contact" ref={sectionRefs.contact} className="py-24">
              <Contact />
            </section>
          </main>
          <Footer name={ name } />
        </div>
      </div>
  )
}