function Services() {
  const services = [
    {
      title: "Repairs",
      description: "Expert diagnosis and repair services for all generator makes and models, ensuring your equipment runs at peak performance.",
      details: [
        "Emergency repair services",
        "Fault diagnosis and troubleshooting",
        "Parts replacement and sourcing",
        "All makes and models supported"
      ],
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
      color: "blue"
    },
    {
      title: "Maintenance",
      description: "Regular maintenance programs to keep your generators reliable and extend their lifespan, preventing costly breakdowns.",
      details: [
        "Scheduled maintenance programs",
        "Oil and filter changes",
        "Battery testing and replacement",
        "Load testing and calibration"
      ],
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=600&q=80",
      color: "green"
    },
    {
      title: "Support",
      description: "Comprehensive technical support and troubleshooting assistance whenever you need it, ensuring minimal downtime.",
      details: [
        "24/7 technical support",
        "Remote troubleshooting",
        "On-site assistance",
        "Training and guidance"
      ],
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
      color: "orange"
    },
    {
      title: "Sales",
      description: "Quality generators of all sizes available for purchase, with expert guidance to find the perfect solution for your needs.",
      details: [
        "New and used generators",
        "All sizes and capacities",
        "Expert consultation",
        "Installation services"
      ],
      image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
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
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive generator solutions tailored to your needs. From emergency repairs to 
            new installations, we've got you covered.
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
