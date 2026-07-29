import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Dashboard', href: 'dashboard.html' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-10 px-5 sm:px-8 py-4 sm:py-5 flex flex-row justify-between items-center bg-transparent">
        {/* Logo */}
        <a href="#" className="flex flex-row items-center gap-3 group">
          <span className="text-[21px] sm:text-[26px] tracking-tight text-black font-medium select-none">
            RootSense&reg;
          </span>
          <span className="text-[25px] sm:text-[30px] text-black select-none tracking-[-0.02em] font-medium leading-none mb-1">
            &#10033;
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex flex-row items-center text-[23px] text-black">
          {NAV_LINKS.map((link, i) => (
            <span key={link.label} className="flex items-center">
              {i > 0 && <span className="opacity-40">,&nbsp;</span>}
              <a href={link.href} className="hover:opacity-60 transition-opacity">
                {link.label}
              </a>
            </span>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="dashboard.html"
          className="hidden md:inline text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity"
        >
          Launch demo
        </a>

        {/* Mobile Hamburger */}
        <button
          type="button"
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]"
          onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMobileMenuOpen}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden fixed inset-0 z-[9] bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl text-black font-medium hover:opacity-60 transition-opacity"
              >
                {link.label}
              </a>
            ))}
            <a
              href="dashboard.html"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xl text-black underline underline-offset-4 hover:opacity-60 transition-opacity mt-4"
            >
              Launch demo
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
