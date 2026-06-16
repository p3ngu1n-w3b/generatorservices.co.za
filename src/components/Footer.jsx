function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Garden Route Generator Services</h3>
            <p className="text-gray-400 text-sm">
              Reliable backup power support for homes, businesses, and commercial sites.
              We deliver practical generator solutions with fast response times.
            </p>
            <a
              href="https://wa.me/27822105077?text=Hi%20Garden%20Route%20Generator%20Services%2C%20please%20assist%20with%20a%20generator%20quote."
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-4 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-md font-semibold transition-colors"
            >
              WhatsApp For A Quote
            </a>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition-colors">Why Us</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="tel:+27822105077" className="hover:text-blue-300 transition-colors">Phone: 082 210 5077</a></li>
              <li><a href="mailto:info@generatorservices.co.za" className="hover:text-blue-300 transition-colors">Email: info@generatorservices.co.za</a></li>
              <li>Service Area: Garden Route</li>
              <li>Available 24/7 for emergencies</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-center">
          <div className="mb-4 md:mb-0 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Garden Route Generator Services.
            </p>
            <p className="text-gray-400 text-sm">
              All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
