function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">Garden Route Generator Services</h3>
            <p className="text-gray-400 text-sm">
              Your trusted partner for all generator needs. Expert repairs, maintenance, 
              support, and sales across the Garden Route.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-blue-400 transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>Email: info@generatorservices.co.za</li>
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center space-y-2">
          <p className="text-sm text-gray-400">
            This website was built by 
            <a href="https://www.linkedin.com/in/jaco-roux/" target="_blank">
              <span className="font-medium text-gray-200 ml-1">Jaco Roux</span>
            </a>.
          </p>

          <p className="text-sm text-gray-400">
            For any website requirements:&nbsp;
            <a
              href="tel:0658095070"
              className="hover:text-white transition"
            >
              065&nbsp;809&nbsp;5070
            </a>
            &nbsp;|&nbsp;
            <a
              href="mailto:jaco.roux9@gmail.com"
              className="hover:text-white transition"
            >
              jaco.roux9@gmail.com
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
