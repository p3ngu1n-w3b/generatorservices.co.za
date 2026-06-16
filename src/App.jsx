import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Gallery />
        <Contact />
      </main>
      <a
        href="https://wa.me/27822105077?text=Hi%20Garden%20Route%20Generator%20Services%2C%20I%20need%20help%20with%20a%20generator."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-40 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-3 rounded-full shadow-xl transition-transform hover:-translate-y-1"
      >
        WhatsApp Us
      </a>
      <Footer />
    </div>
  );
}

export default App;
