import { useEffect, useState } from 'react';
import grgs from '../assets/logo/grgs.png';
import { WA_QUOTE } from '../config';

function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#why', label: 'Why us' },
    { href: '#gallery', label: 'Work' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/80 py-3 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <nav className="container-wide flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <span className="flex items-center rounded-xl bg-white/95 px-3 py-2 shadow-lg">
            <img src={grgs} alt="Garden Route Generator Services" className="h-8 w-auto md:h-9" />
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-white/80 transition-colors hover:text-white"
            >
              {item.label}
              <span className="absolute -bottom-1.5 left-0 h-0.5 w-0 bg-volt transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="btn-volt px-5 py-2.5 text-sm">
            Get a quote
          </a>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 p-2.5 text-white md:hidden"
          onClick={() => setOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
            />
          </svg>
        </button>
      </nav>

      <div
        className={`md:hidden ${
          open ? 'max-h-96 opacity-100' : 'pointer-events-none max-h-0 opacity-0'
        } overflow-hidden transition-all duration-400`}
      >
        <div className="container-wide mt-3 space-y-1 rounded-2xl border border-white/10 bg-ink-800/95 p-4 backdrop-blur-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-3 text-white/85 transition-colors hover:bg-white/5 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={WA_QUOTE}
            target="_blank"
            rel="noreferrer"
            className="btn-volt mt-2 w-full"
            onClick={() => setOpen(false)}
          >
            Get a quote
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
