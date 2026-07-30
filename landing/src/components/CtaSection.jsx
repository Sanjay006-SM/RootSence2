import React from 'react';
import ParallaxLayer from './ParallaxLayer';

export function CtaSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-32 bg-black text-white relative z-10 overflow-hidden">
      {/* Background Subtle Parallax Graphic Accent */}
      <ParallaxLayer speed={0.5} className="absolute inset-0 pointer-events-none opacity-20 z-0">
        <svg viewBox="0 0 1000 1000" className="w-full h-full text-white" aria-hidden="true">
          <circle cx="500" cy="500" r="400" stroke="currentColor" strokeWidth="1" fill="none" strokeDasharray="8 12" />
          <circle cx="500" cy="500" r="250" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.6" />
        </svg>
      </ParallaxLayer>

      <div className="max-w-4xl text-center space-y-8 relative z-10">
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          Ready to<br />Transform<br />Incident Response?
        </h2>

        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
          Start with the interactive sandbox. No setup required.
        </p>

        <div className="pt-8">
          <a
            href="dashboard.html"
            className="inline-block px-10 py-5 bg-white text-black font-semibold rounded-lg hover:bg-gray-100 transition text-lg shadow-xl"
          >
            Launch Live Demo
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-16 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <p className="font-semibold text-black mb-2">RootSense</p>
            <p className="text-sm text-gray-600">AI-powered incident triage.</p>
          </div>
          <div>
            <p className="font-semibold text-black mb-4">Product</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="dashboard.html" className="hover:text-black transition">Demo</a></li>
              <li><a href="#how-it-works" className="hover:text-black transition">Docs</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-black mb-4">Resources</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="https://github.com/Sanjay006-SM/RootSence2.git" target="_blank" rel="noreferrer" className="hover:text-black transition">GitHub</a></li>
              <li><a href="/docs" target="_blank" rel="noreferrer" className="hover:text-black transition">Support</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-black mb-4">Legal</p>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-black transition">Privacy</a></li>
              <li><a href="#" className="hover:text-black transition">Terms</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 flex justify-between items-center">
          <p className="text-sm text-gray-600">&copy; 2026 RootSense</p>
          <div className="flex gap-4">
            <a href="https://github.com/Sanjay006-SM/RootSence2.git" target="_blank" rel="noreferrer" className="text-gray-600 hover:text-black transition">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
