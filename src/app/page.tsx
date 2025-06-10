import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative flex flex-col items-center justify-center min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#0a0a0a] via-[#0080ff] to-[#6366f1] animate-gradient-move">
        {/* Animated floating particles */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 10 + 5}s`,
              }}
            ></div>
          ))}
        </div>
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 py-24 gap-8">
          <Image src="/logo.png" alt="AlGentive Logo" width={120} height={120} className="logo-glow mb-4 animate-fade-in" priority />
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent drop-shadow-lg mb-4 animate-fade-in">
            Pioneering AI Technologies That Automate, Create &amp; Solve Tomorrow&apos;s Challenges
          </h1>
          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mb-6 animate-fade-in delay-200">
            AlGentive delivers cutting-edge AI solutions for automation, creation, and complex problem-solving—empowering your business to thrive in the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center animate-fade-in delay-300">
            <a href="#contact" className="px-8 py-4 rounded-full btn-gradient shadow-xl hover:scale-105 transition-all duration-200">
              Transform Your Business
            </a>
            <a href="#" className="px-8 py-4 rounded-full border-2 border-cyan-400 text-cyan-400 font-bold text-lg flex items-center gap-2 bg-transparent hover:bg-cyan-400 hover:text-black transition-all duration-200">
              <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><polygon points="5 3 19 12 5 21 5 3" /></svg>
              Watch Demo
            </a>
          </div>
        </div>
      </section>
      {/* SERVICES SECTION */}
      <section id="services" className="relative z-10 w-full max-w-6xl mx-auto py-20 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 card-title animate-fade-in">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* AUTOMATE Card */}
          <div className="glass glass-card p-8 rounded-2xl flex flex-col items-center text-center shadow-xl transition-transform duration-300 group animate-fade-in delay-100">
            <div className="text-5xl mb-4"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" fill="url(#auto-gradient)" /><path d="M13 20h14M20 13v14" stroke="#fff" strokeWidth="2.5" strokeLinecap="round"/><defs><linearGradient id="auto-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#00f5ff"/><stop offset="1" stopColor="#0080ff"/></linearGradient></defs></svg></div>
            <h3 className="text-xl font-bold mb-2 card-title">AUTOMATE</h3>
            <p className="text-white/80 mb-2">Intelligent automation systems for business, data, and marketing.</p>
            <Link href="/services#automate" className="text-cyan-400 font-semibold underline underline-offset-4 group-hover:text-cyan-300">Learn More</Link>
          </div>
          {/* CREATE Card */}
          <div className="glass glass-card p-8 rounded-2xl flex flex-col items-center text-center shadow-xl transition-transform duration-300 group animate-fade-in delay-200">
            <div className="text-5xl mb-4"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" fill="url(#create-gradient)" /><path d="M20 13a7 7 0 1 1 0 14a7 7 0 0 1 0-14z" fill="#fff"/><defs><linearGradient id="create-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#6366f1"/><stop offset="1" stopColor="#00f5ff"/></linearGradient></defs></svg></div>
            <h3 className="text-xl font-bold mb-2 card-title">CREATE</h3>
            <p className="text-white/80 mb-2">AI-powered content, design, and innovation for your brand.</p>
            <Link href="/services#create" className="text-purple-400 font-semibold underline underline-offset-4 group-hover:text-purple-300">Learn More</Link>
          </div>
          {/* SOLVE Card */}
          <div className="glass glass-card p-8 rounded-2xl flex flex-col items-center text-center shadow-xl transition-transform duration-300 group animate-fade-in delay-300">
            <div className="text-5xl mb-4"><svg width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" fill="url(#solve-gradient)" /><path d="M20 13c3.866 0 7 3.134 7 7s-3.134 7-7 7-7-3.134-7-7 3.134-7 7-7z" fill="#fff"/><defs><linearGradient id="solve-gradient" x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse"><stop stopColor="#0080ff"/><stop offset="1" stopColor="#6366f1"/></linearGradient></defs></svg></div>
            <h3 className="text-xl font-bold mb-2 card-title">SOLVE</h3>
            <p className="text-white/80 mb-2">Complex problem-solving algorithms and custom AI solutions.</p>
            <Link href="/services#solve" className="text-blue-400 font-semibold underline underline-offset-4 group-hover:text-blue-300">Learn More</Link>
          </div>
        </div>
        <div className="flex justify-center animate-fade-in delay-400">
          <Link href="/services" className="px-8 py-3 rounded-full btn-gradient shadow-lg hover:scale-105 transition-all duration-200">View All Services</Link>
        </div>
      </section>
      {/* ABOUT SECTION */}
      <section id="about" className="relative z-10 w-full max-w-4xl mx-auto py-20 px-4 animate-fade-in delay-500">
        <div className="glass glass-card p-10 rounded-2xl shadow-xl flex flex-col md:flex-row items-center gap-8">
          <Image src="/logo.png" alt="AlGentive Team" width={100} height={100} className="logo-glow mb-4 md:mb-0" />
          <div>
            <h2 className="text-3xl font-bold mb-4 card-title">About AlGentive</h2>
            <p className="text-white/90 mb-4">AlGentive pioneers AI technologies that automate, create, and solve tomorrow&apos;s challenges. We believe artificial intelligence should amplify human potential, not replace it.</p>
            <h3 className="text-xl font-bold mb-2 card-title">Our Mission</h3>
            <p className="text-white/80 mb-4">Democratize AI technology by making it accessible and transformative for businesses of all sizes.</p>
            <h3 className="text-xl font-bold mb-2 card-title">Our Values</h3>
            <ul className="text-white/70 list-disc pl-5 space-y-1">
              <li>🚀 <b>Innovation</b> - Constantly pushing AI boundaries</li>
              <li>🤝 <b>Collaboration</b> - Human-AI partnership focus</li>
              <li>🎯 <b>Impact</b> - Measurable, meaningful results</li>
              <li>🔍 <b>Transparency</b> - Ethical AI development</li>
              <li>📈 <b>Growth</b> - Continuous improvement commitment</li>
            </ul>
            <div className="mt-6">
              <Link href="https://www.linkedin.com/company/aigentivee/" target="_blank" rel="noopener noreferrer" className="inline-block text-cyan-400 hover:text-cyan-300 transition-colors" aria-label="AlGentive LinkedIn">
                <svg width="32" height="32" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION */}
      <section id="contact" className="relative z-10 w-full max-w-2xl mx-auto py-20 px-4 animate-fade-in delay-600">
        <div className="glass glass-card p-10 rounded-2xl shadow-xl flex flex-col items-center">
          <h2 className="text-3xl font-bold mb-4 card-title">Ready to Transform Your Business?</h2>
          <form className="w-full flex flex-col gap-4">
            <input type="text" placeholder="Name" className="px-4 py-3 rounded bg-[#27272a] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200" required />
            <input type="email" placeholder="Email" className="px-4 py-3 rounded bg-[#27272a] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200" required />
            <textarea placeholder="Message" rows={4} className="px-4 py-3 rounded bg-[#27272a] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200" required />
            <button type="submit" className="mt-2 px-8 py-3 rounded-full btn-gradient shadow-lg hover:scale-105 transition-all duration-200">Send Message</button>
          </form>
          <div className="mt-6 text-white/80 text-center">
            <div>Email: <a href="mailto:aigentive.co.in@gmail.com" className="underline text-cyan-400">aigentive.co.in@gmail.com</a></div>
            <div>Phone: <a href="tel:+1234567890" className="underline text-cyan-400">+1 234 567 890</a></div>
            <div>Location: New York, NY</div>
            <div className="flex gap-4 justify-center mt-4">
              <a href="https://www.linkedin.com/company/aigentivee/" className="text-cyan-400 hover:text-cyan-300" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
              <a href="#" className="text-cyan-400 hover:text-cyan-300" aria-label="Twitter"><svg width="24" height="24" fill="currentColor"><path d="M24 4.56c-.89.39-1.84.65-2.84.77 1.02-.61 1.8-1.57 2.17-2.72-.95.56-2.01.97-3.13 1.19-.9-.96-2.18-1.56-3.6-1.56-2.72 0-4.93 2.21-4.93 4.93 0 .39.04.77.12 1.13-4.1-.21-7.73-2.17-10.16-5.15-.43.74-.68 1.6-.68 2.52 0 1.74.89 3.28 2.25 4.18-.83-.03-1.61-.25-2.29-.63v.06c0 2.43 1.73 4.46 4.03 4.92-.42.12-.87.18-1.33.18-.32 0-.63-.03-.93-.09.63 1.97 2.45 3.4 4.6 3.44-1.68 1.32-3.8 2.1-6.1 2.1-.4 0-.79-.02-1.18-.07 2.18 1.4 4.77 2.22 7.55 2.22 9.06 0 14.02-7.51 14.02-14.02 0-.21 0-.42-.02-.63.96-.7 1.8-1.56 2.46-2.54z"/></svg></a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

