function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-lg text-blue-100">
              Ready to discuss your generator needs? Contact us for expert advice, quotes, or to schedule a service.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-600">Contact us directly for immediate assistance</p>
                    <p className="text-blue-600 font-medium mt-1">Available 24/7 for emergencies</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-blue-600 font-medium">info@generatorservices.co.za</p>
                    <p className="text-gray-600 text-sm mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Service Area</h4>
                    <p className="text-gray-600">Garden Route and surrounding areas</p>
                    <p className="text-gray-600 text-sm mt-1">Mobile service available</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Experienced professional with years in the industry</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">All makes and models supported</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Fast response times for emergencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Competitive pricing and transparent quotes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span className="text-gray-700">Personalized service tailored to your needs</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>Emergency Service:</strong> Available 24/7 for urgent generator issues. 
                  Don't let power failures disrupt your business or home.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
