'use client'

import {Dispatch, ReactNode, SetStateAction, useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

function NavLink (
    { children, pageName, page, handleClick} : {
      children: ReactNode,
      pageName: string,
      page: string,
      handleClick: (page: string) => void,
    }
) {
  return (
      <button
          onClick={() => handleClick(pageName)}
          className={
              `block md:inline-block px-3 py-2 rounded-md text-base font-medium transition-colors hover:cursor-pointer 
              ${page === pageName.toLowerCase() ? 'text-white font-semibold' : 'text-gray-300 hover:text-white'}`
          }
      >
        {children}
      </button>
  );
}

export default function Navbar (
    { setPageAction, page, name }: {
      setPageAction: Dispatch<SetStateAction<string>>,
      page: string,
      name: string
    }
) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navItems = [
      'Home',
      'Skills',
      'Projects',
      //'Contact'
  ];
  const handleClick = (page: string) => {
    const element = document.getElementById(page.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setPageAction(page.toLowerCase());
    setIsMobileMenuOpen(false);
  }

  return (
      <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
            <span
                className="text-white font-bold text-2xl cursor-pointer text-shadow-medium"
                onClick={() => handleClick('home')}
            >
              { name }
            </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                    <NavLink key={item} pageName={item} page={page} handleClick={handleClick}>
                      {item}
                    </NavLink>
                ))}
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
                  aria-controls="mobile-menu"
                  aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6"/>}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
            className={
                `md:hidden border-t border-white/20 backdrop-blur-lg bg-white/10 
                ${isMobileMenuOpen ? 'block' : 'hidden'}`
        }
            id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
                <NavLink key={item} pageName={item} page={page} handleClick={handleClick}>
                  {item}
                </NavLink>
            ))}
          </div>
        </div>
      </nav>
  );
};