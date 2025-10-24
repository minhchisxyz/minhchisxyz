'use client'

import {Dispatch, ReactNode, SetStateAction, useState} from "react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import clsx from "clsx";

function NavLink (
    { children, pageName, page, setPageAction, setIsMobileMenuOpenAction } : {
      children: ReactNode,
      pageName: string,
      page: string,
      setPageAction: Dispatch<SetStateAction<string>>,
      setIsMobileMenuOpenAction: Dispatch<SetStateAction<boolean>>
    }
) {
  return (
      <Link
          href={`#${pageName.toLowerCase()}`}
          onClick={(e) => {
            e.preventDefault();
            setPageAction(pageName.toLowerCase());
            setIsMobileMenuOpenAction(false);
          }}
          className={clsx(
              `block md:inline-block px-3 py-2 rounded-md text-base font-medium transition-colors`,
              {
                'text-white font-semibold': page === pageName.toLowerCase(),
                'text-gray-300 hover:text-white': page !== pageName.toLowerCase()
              }
          )}
      >
        {children}
      </Link>
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
  const navItems = ['Home', 'Skills', 'Projects', 'Contact'];

  return (
      <nav className="sticky top-0 z-50 w-full backdrop-blur-lg bg-white/10 border-b border-white/20 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
            <span
                className="text-white font-bold text-2xl cursor-pointer text-shadow-medium"
                onClick={() => setPageAction('home')}
            >
              { name }
            </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                    <NavLink key={item} pageName={item} page={page} setPageAction={setPageAction} setIsMobileMenuOpenAction={setIsMobileMenuOpen}>
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
                {isMobileMenuOpen ? <XMarkIcon /> : <Bars3Icon />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <div
            className={clsx(
                `md:hidden border-t border-white/20 backdrop-blur-lg bg-white/10`,
                {'block': isMobileMenuOpen, 'hidden': !isMobileMenuOpen}
            )}
            id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
                <NavLink key={item} pageName={item} page={page} setPageAction={setPageAction} setIsMobileMenuOpenAction={setIsMobileMenuOpen}>
                  {item}
                </NavLink>
            ))}
          </div>
        </div>
      </nav>
  );
};