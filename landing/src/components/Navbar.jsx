import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = [
  { label: '7 Agents', href: '#how-it-works' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'Tech Stack', href: '#tech-stack' },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-12 py-4 flex flex-row justify-between items-center bg-white/80 backdrop-blur-md border-b border-neutral-100">
        {/* Logo matching Target Screenshot */}
        <a href="index.html" class="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-black text-white flex items-center justify-center font-bold text-sm group-hover:bg-neutral-800 transition">
            R
          </div>
          <span className="font-bold text-black text-lg">RootSense</span>
        </a>

        {/* Desktop Nav Links & CTA matching Target Screenshot */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex items-center gap-8 text-sm font-medium text-neutral-600">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="dashboard.html"
            className="px-5 py-2.5 bg-black text-white font-semibold rounded-xl hover:bg-neutral-800 transition text-sm shadow-md"
          >
            Console Demo &rarr;
          </a>
        </div>

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

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-x-0 top-[65px] z-40 bg-white border-b border-neutral-200 p-6 flex flex-col gap-4 shadow-xl"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-base text-neutral-800 font-medium hover:text-black transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="dashboard.html"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 px-5 py-3 bg-black text-white font-semibold rounded-xl text-center text-sm"
            >
              Console Demo &rarr;
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
