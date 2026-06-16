import { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    serviceType: 'Emergency repair',
    urgency: 'Urgent',
    location: '',
    budget: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const text = encodeURIComponent(
      `Generator enquiry from ${formData.name}
Phone: ${formData.phone}
Service: ${formData.serviceType}
Urgency: ${formData.urgency}
Location: ${formData.location}
Budget: ${formData.budget || 'Not specified'}
Details: ${formData.message || 'No extra details'}`
    );
    window.open(`https://wa.me/27822105077?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-950 to-blue-900">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get Expert Help Today
            </h2>
            <p className="text-lg text-blue-100">
              Share your requirements in under 2 minutes and get a fast response on WhatsApp.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Direct Contact</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <a href="tel:+27822105077" className="text-blue-700 font-semibold hover:underline">082 210 5077</a>
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
                    <a href="mailto:info@generatorservices.co.za" className="text-blue-700 font-semibold hover:underline">info@generatorservices.co.za</a>
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
              <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <a
                  href="https://wa.me/27822105077?text=Hi%20Garden%20Route%20Generator%20Services%2C%20I%20need%20help%20with%20a%20generator."
                  target="_blank"
                  rel="noreferrer"
                  className="text-center bg-emerald-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors"
                >
                  WhatsApp Now
                </a>
                <a
                  href="tel:+27822105077"
                  className="text-center bg-blue-900 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                >
                  Call Now
                </a>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Enquiry</h3>
              <form className="space-y-3" onSubmit={handleSubmit}>
                <input required name="name" value={formData.name} onChange={handleChange} placeholder="Full name" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                <input required name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <select name="serviceType" value={formData.serviceType} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>Emergency repair</option>
                    <option>Maintenance plan</option>
                    <option>New generator quote</option>
                    <option>Site assessment</option>
                  </select>
                  <select name="urgency" value={formData.urgency} onChange={handleChange} className="w-full border border-gray-300 rounded-lg px-3 py-2">
                    <option>Urgent</option>
                    <option>This week</option>
                    <option>This month</option>
                  </select>
                </div>
                <input required name="location" value={formData.location} onChange={handleChange} placeholder="Your location / area" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                <input name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget range (optional)" className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your generator needs" rows={4} className="w-full border border-gray-300 rounded-lg px-3 py-2" />
                <button type="submit" className="w-full bg-emerald-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-emerald-400 transition-colors">
                  Send Enquiry On WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
