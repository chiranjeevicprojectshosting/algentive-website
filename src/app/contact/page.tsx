import Link from "next/link";

export default function Contact() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0080ff] to-[#6366f1] py-16 px-4 flex flex-col items-center justify-center">
      <div className="max-w-2xl w-full glass p-10 rounded-2xl shadow-xl flex flex-col items-center animate-fade-in">
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">Ready to Transform Your Business?</h2>
        <form className="w-full flex flex-col gap-4">
          <input type="text" placeholder="Name" className="px-4 py-3 rounded bg-[#27272a] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          <input type="email" placeholder="Email" className="px-4 py-3 rounded bg-[#27272a] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          <textarea placeholder="Message" rows={4} className="px-4 py-3 rounded bg-[#27272a] text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400" required />
          <button type="submit" className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-purple-400 transition-all duration-200">Send Message</button>
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
        <Link href="/" className="mt-8 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold shadow-lg hover:scale-105 hover:from-cyan-300 hover:to-purple-400 transition-all duration-200">Back to Home</Link>
      </div>
    </main>
  );
} 