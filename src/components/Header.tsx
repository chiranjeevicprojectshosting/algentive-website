import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 glass header-shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-3">
          <Image src="/logo.png" alt="AlGentive Logo" width={48} height={48} priority className="logo-glow" />
          <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent tracking-wide hidden sm:inline-block">
            AlGentive
          </span>
        </Link>
        <nav className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/90 hover:text-cyan-300 transition-colors font-medium px-2 py-1 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <a href="#contact" className="hidden md:inline-block px-5 py-2 rounded-full btn-gradient shadow-lg hover:scale-105 transition-all duration-200 animate-pulse">
          Get Started
        </a>
        {/* Mobile Hamburger */}
        <button className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 bg-black/40">
          <span className="sr-only">Open menu</span>
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white"><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
        </button>
      </div>
    </header>
  );
} 