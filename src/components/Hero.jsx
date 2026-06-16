import hero from '../assets/gallery/hero.jpeg'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-blue-800 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-25">
        <img 
          src={hero} 
          alt="Generator powering a property" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <span className="inline-flex items-center bg-white/10 text-blue-100 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            Fast response across the Garden Route
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Keep Your Home Or Business Running During Power Outages
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Sales, repairs, maintenance, and emergency support for residential, commercial, and industrial generators.
            Get expert help quickly and protect your uptime.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/27822105077?text=Hi%20Garden%20Route%20Generator%20Services%2C%20I%20need%20a%20quote%20for%20my%20generator%20requirements."
              target="_blank"
              rel="noreferrer"
              className="bg-emerald-500 text-white px-8 py-3 rounded-lg hover:bg-emerald-400 transition-colors font-semibold shadow-lg"
            >
              Get A Quote On WhatsApp
            </a>
            <a
              href="#services"
              className="bg-white/10 text-white border-2 border-white/30 px-8 py-3 rounded-lg hover:bg-white/20 transition-colors font-semibold"
            >
              Explore Services
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 text-sm">
            <div className="bg-white/10 rounded-lg px-4 py-3 text-blue-100">Emergency callouts available</div>
            <div className="bg-white/10 rounded-lg px-4 py-3 text-blue-100">All generator makes supported</div>
            <div className="bg-white/10 rounded-lg px-4 py-3 text-blue-100">Transparent quoting process</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
