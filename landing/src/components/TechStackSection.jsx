const TECH_STACK = [
  { icon: '🐍', title: 'Python 3.13', subtitle: 'FastAPI Backend' },
  { icon: '🦙', title: 'Ollama', subtitle: 'Mistral 7B' },
  { icon: '📊', title: 'scikit-learn', subtitle: 'TF-IDF' },
  { icon: '⚡', title: 'FastAPI', subtitle: 'REST API' },
  { icon: '🎨', title: 'Tailwind CSS', subtitle: 'UI Framework' },
  { icon: '✨', title: 'GSAP', subtitle: 'Animations' },
];

export default function TechStackSection() {
  return (
    <section id="tech-stack" className="min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-32 bg-white relative z-10">
      <div className="max-w-5xl w-full space-y-16">
        <p className="text-sm font-mono text-gray-500 uppercase tracking-widest">Built With</p>
        <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-black leading-tight">
          Modern Technology Stack
        </h2>

        {/* Minimal tech grid */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-16">
          {TECH_STACK.map((item) => (
            <div key={item.title}>
              <p className="text-3xl font-bold mb-3">{item.icon}</p>
              <h4 className="font-semibold text-black mb-2 text-lg">{item.title}</h4>
              <p className="text-gray-600 text-sm font-light">{item.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
