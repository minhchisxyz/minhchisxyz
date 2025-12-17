'use client'

import { ReactNode, useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";

function NavLink (
    { children, pageName, page, handleClick} : {
      children: ReactNode,
      pageName: string,
      page: string,
      handleClick: (page: string) => void,
    }
) {
  const glass = `bg-white/15 backdrop-blur-md border-none rounded-3xl`
  const hover = 'hover:shadow-[4px_4px_8px_#111111,-2px_-2px_6px_#ffffff] hover:cursor-pointer hover:rounded-3xl'
  const active = `text-white inset-shadow-[-4px_4px_8px_#000000,2px_-2px_6px_#ffffff] ${glass}`
  return (
      <button
          onClick={() => handleClick(pageName)}
          className={
              `block md:inline-block px-4 py-2 text-base font-medium transition-colors ${hover} 
              ${page === pageName.toLowerCase() ? active : 'text-gray-300 hover:text-white'}`
          }
      >
        {children}
      </button>
  );
}

function NavLinks({ page, handleClick }: {
  page: string,
  handleClick: (page: string) => void }
) {
  const navItems = [
    'Home',
    'Skills',
    'Projects',
    //'Contact'
  ];
  return (
      <>
        {navItems.map((item) => (
            <NavLink key={item} pageName={item} page={page} handleClick={handleClick}>
              {item}
            </NavLink>
        ))}
      </>
  )
}

export default function Navbar (
    { setPageAndBackgroundAction, page, name }: {
      setPageAndBackgroundAction: (page: string) => void,
      page: string,
      name: string
    }
) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleClick = (page: string) => {
    const element = document.getElementById(page.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
    setPageAndBackgroundAction(page.toLowerCase());
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
                <NavLinks page={page} handleClick={handleClick} />
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
            <NavLinks page={page} handleClick={handleClick} />
          </div>
        </div>
      </nav>
  );
};