function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 py-20 md:py-32 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1920&q=80" 
          alt="Generator" 
          className="w-full h-full object-cover"
        />
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Generator Services You Can Trust
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Expert repairs, maintenance, support, and sales for generators of any size or make. 
            Serving the Garden Route with reliable, professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white text-blue-900 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-semibold shadow-lg"
            >
              Get in Touch
            </a>
            <a
              href="#services"
              className="bg-blue-600 text-white border-2 border-blue-500 px-8 py-3 rounded-lg hover:bg-blue-500 transition-colors font-semibold"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
