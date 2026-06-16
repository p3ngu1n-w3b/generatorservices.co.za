import about from '../assets/gallery/about.jpeg'

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Clients Trust Our Team
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Garden Route Generator Services helps homeowners, SMEs, and commercial operators keep power available when it matters most.
                  We combine practical generator expertise with fast, clear communication from first contact to final handover.
                </p>
                <p>
                  Every project starts with a quick needs check so we can recommend the right option for your load profile, budget, and timeline.
                  That means fewer surprises, better uptime, and a setup you can rely on.
                </p>
                <p>
                  From urgent breakdown response to planned maintenance and generator sales, we support all major makes and a wide range of sizes.
                  Our focus is simple: keep your operations and family powered with confidence.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-900">Rapid</div>
                  <div className="text-sm text-gray-600 mt-1">Emergency Response</div>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-900">All</div>
                  <div className="text-sm text-gray-600 mt-1">Major Brands Supported</div>
                </div>
              </div>
              <div className="mt-6 bg-gray-100 rounded-lg p-4">
                <p className="text-sm text-gray-700">
                  <strong>Our process:</strong> Assess your need -> recommend the right solution -> install or repair -> support with ongoing maintenance.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={about}
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
