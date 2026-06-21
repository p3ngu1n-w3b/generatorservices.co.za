import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Services from './components/Services';
import About from './components/About';
import Showcase from './components/Showcase';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import useScrollReveal from './hooks/useScrollReveal';
import { WA_DEFAULT } from './config';

function App() {
  const [isContactReached, setIsContactReached] = useState(false);

  useScrollReveal();

  useEffect(() => {
    const updateFloatingChat = () => {
      const contact = document.getElementById('contact');

      if (!contact) {
        return;
      }

      const contactTop = contact.getBoundingClientRect().top + window.scrollY;
      setIsContactReached(window.scrollY + window.innerHeight * 0.85 >= contactTop);
    };

    let frame = null;
    const scheduleUpdate = () => {
      if (frame !== null) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = null;
        updateFloatingChat();
      });
    };

    updateFloatingChat();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);

    return () => {
      if (frame !== null) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
    };
  }, []);

  return (
    <div id="top" className="min-h-screen bg-ink">
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <About />
        <Showcase />
        <Gallery />
        <Contact />
      </main>
      <Footer />

      <a
        href={WA_DEFAULT}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={`group fixed bottom-6 right-6 z-40 flex items-center gap-3 rounded-full bg-volt px-5 py-4 font-semibold text-ink shadow-volt transition-all duration-300 hover:bg-volt-bright hover:-translate-y-1 ${
          isContactReached
            ? 'max-sm:pointer-events-none max-sm:translate-y-24 max-sm:opacity-0'
            : ''
        }`}
      >
        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.738-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
        </svg>
        <span className="hidden sm:inline">WhatsApp us</span>
      </a>
    </div>
  );
}

export default App;
