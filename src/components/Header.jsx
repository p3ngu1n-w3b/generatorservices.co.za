import { useState } from 'react';
import grgs from '../assets/logo/grgs.png'

function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'Why Us' },
    { href: '#gallery', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="bg-white/95 backdrop-blur shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-blue-900">
            <img src={grgs} alt="Garden Route Generator Services" className="w-40 md:w-52" />
          </a>
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-gray-700 hover:text-blue-600 transition-colors">
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/27822105077?text=Hi%20Garden%20Route%20Generator%20Services%2C%20I%20need%20help%20with%20a%20generator."
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-emerald-400 transition-colors"
            >
              WhatsApp Quote
            </a>
          </div>
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-200 text-gray-700"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
            </svg>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 border-t border-gray-200 pt-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-gray-700 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/27822105077?text=Hi%20Garden%20Route%20Generator%20Services%2C%20I%20need%20help%20with%20a%20generator."
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-emerald-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-emerald-400 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              WhatsApp Quote
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
