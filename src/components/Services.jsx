import repair from '../assets/gallery/repair.jpeg'
import maintenance from '../assets/gallery/maintenance.jpeg'
import support from '../assets/gallery/support.jpeg'
import sales from '../assets/gallery/sales.jpeg'

function Services() {
  const services = [
    {
      title: "Residential Backup Solutions",
      description: "Protect your home from load shedding with correctly sized backup systems and dependable maintenance.",
      details: [
        "Generator sizing guidance for homes",
        "Installation-ready recommendations",
        "Routine servicing and annual checks",
        "Quick fault diagnosis and repairs"
      ],
      image: repair,
      color: "blue"
    },
    {
      title: "Business Continuity Packages",
      description: "Keep your store, office, clinic, or workshop productive with priority support and planned servicing.",
      details: [
        "Preventative monthly and quarterly plans",
        "Load testing and compliance checks",
        "Battery, fuel, and cooling inspections",
        "Priority response for downtime incidents"
      ],
      image: maintenance,
      color: "green"
    },
    {
      title: "Industrial And Site Support",
      description: "Reduce risk for larger loads with on-site troubleshooting, repairs, and reliability-focused support.",
      details: [
        "On-site diagnostics and repairs",
        "Parts sourcing and replacements",
        "Performance optimization checks",
        "Operator guidance and handover"
      ],
      image: support,
      color: "orange"
    },
    {
      title: "Generator Sales And Upgrades",
      description: "Choose the right generator for your load profile with practical guidance from quote to commissioning.",
      details: [
        "New and pre-owned options",
        "Sizing by kVA and usage profile",
        "Delivery and setup coordination",
        "Support plans after installation"
      ],
      image: sales,
      color: "purple"
    },
  ];

  const colorClasses = {
    blue: "bg-blue-50 border-blue-200 hover:border-blue-400",
    green: "bg-green-50 border-green-200 hover:border-green-400",
    orange: "bg-orange-50 border-orange-200 hover:border-orange-400",
    purple: "bg-purple-50 border-purple-200 hover:border-purple-400"
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Power Solutions Built Around Your Needs
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Whether you need home backup confidence or commercial uptime protection, we tailor each solution for your site,
            budget, and urgency.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-6 border-2 rounded-lg hover:shadow-xl transition-all ${colorClasses[service.color]}`}
            >
              <div className="mb-4">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>
              <ul className="space-y-2">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start text-gray-600">
                    <span className="text-blue-600 mr-2">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/27822105077?text=Hi%2C%20I%20am%20interested%20in%20your%20generator%20services.%20Please%20assist."
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-5 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors font-medium"
              >
                Request This Service
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
