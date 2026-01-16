import grgs from '../assets/logo/grgs.png'

function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-blue-900">
            <img src={grgs} alt="Garden Route Generator Services" className="w-1/2" />
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </a>
            <a href="#gallery" className="text-gray-700 hover:text-blue-600 transition-colors">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
