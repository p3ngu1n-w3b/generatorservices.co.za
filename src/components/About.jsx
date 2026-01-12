function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Your Trusted Generator Experts
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Garden Route Generator Services is a one-man operation specializing in comprehensive 
                  generator solutions. With years of experience in the industry, we understand that 
                  reliable power is essential for your home or business.
                </p>
                <p>
                  Whether you need emergency repairs, routine maintenance, technical support, or are 
                  looking to purchase a new generator, we provide personalized, professional service 
                  tailored to your specific needs.
                </p>
                <p>
                  We work with generators of all sizes and makes, from small portable units to large 
                  industrial systems. Our commitment is to keep your generators running efficiently 
                  and reliably, minimizing downtime and maximizing performance.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-900">100%</div>
                  <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-900">24/7</div>
                  <div className="text-sm text-gray-600 mt-1">Support</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80" 
                alt="Generator maintenance" 
                className="rounded-lg shadow-xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
