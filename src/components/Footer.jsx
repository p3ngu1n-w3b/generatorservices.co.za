import grgs from '../assets/logo/grgs.png';
import { WA_QUOTE, PHONE_TEL, PHONE_DISPLAY, EMAIL } from '../config';

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-800 pt-16">
      <div className="container-wide">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <span className="inline-flex rounded-xl bg-white/95 px-3 py-2">
              <img src={grgs} alt="Garden Route Generator Services" className="h-9 w-auto" />
            </span>
            <p className="mt-5 max-w-sm text-white/55">
              Reliable backup power for homes, businesses and commercial sites
              across the Garden Route. Practical solutions, fast response.
            </p>
            <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="btn-volt mt-6 px-5 py-2.5 text-sm">
              WhatsApp for a quote
            </a>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">Explore</h3>
            <ul className="mt-5 space-y-3 text-white/70">
              <li><a href="#services" className="transition-colors hover:text-volt">Services</a></li>
              <li><a href="#why" className="transition-colors hover:text-volt">Why us</a></li>
              <li><a href="#gallery" className="transition-colors hover:text-volt">Our work</a></li>
              <li><a href="#contact" className="transition-colors hover:text-volt">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/40">Contact</h3>
            <ul className="mt-5 space-y-3 text-white/70">
              <li><a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-volt">{PHONE_DISPLAY}</a></li>
              <li><a href={`mailto:${EMAIL}`} className="transition-colors hover:text-volt">{EMAIL}</a></li>
              <li>Garden Route, Western Cape</li>
              <li>24/7 for emergencies</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 text-sm text-white/45 md:flex-row">
          <p>© {new Date().getFullYear()} Garden Route Generator Services. All rights reserved.</p>
          <p>Power you can count on.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
