import { useState } from 'react';
import energy from '../assets/generated/energy-texture.jpg';
import {
  wa,
  WA_DEFAULT,
  PHONE_TEL,
  PHONE_DISPLAY,
  EMAIL,
} from '../config';

const initialForm = {
  name: '',
  phone: '',
  serviceType: 'Emergency repair',
  urgency: 'Urgent',
  location: '',
  budget: '',
  message: '',
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = `Generator enquiry from ${formData.name}
Phone: ${formData.phone}
Service: ${formData.serviceType}
Urgency: ${formData.urgency}
Location: ${formData.location}
Budget: ${formData.budget || 'Not specified'}
Details: ${formData.message || 'No extra details'}`;
    window.open(wa(message), '_blank', 'noopener,noreferrer');
  };

  const inputClass =
    'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 outline-none transition-colors focus:border-volt/60 focus:bg-white/10';

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden bg-ink py-24 md:py-32">
      <div className="absolute inset-0 opacity-30">
        <img src={energy} alt="" aria-hidden className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="reveal eyebrow">Let's talk power</span>
            <h2 className="reveal display-title mt-5 text-4xl font-bold text-white md:text-6xl" data-reveal-delay="80">
              Get expert help <span className="text-gradient-volt">today</span>
            </h2>
            <p className="reveal mt-6 max-w-md text-lg text-white/70" data-reveal-delay="140">
              Send your details and get a fast, no-obligation response on WhatsApp.
              Prefer to talk? Call or message us directly.
            </p>

            <div className="reveal mt-10 space-y-4" data-reveal-delay="200">
              <a
                href={`tel:${PHONE_TEL}`}
                className="card-glass flex items-center gap-4 p-5 transition-colors hover:border-volt/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-volt/15 text-volt">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <div className="text-sm text-white/50">Call / WhatsApp</div>
                  <div className="break-words text-base font-semibold text-white sm:text-lg">{PHONE_DISPLAY}</div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="card-glass flex items-center gap-4 p-5 transition-colors hover:border-volt/40"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-volt/15 text-volt">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <div className="text-sm text-white/50">Email</div>
                  <div className="break-all text-base font-semibold text-white sm:text-lg">{EMAIL}</div>
                </div>
              </a>

              <div className="card-glass flex items-center gap-4 p-5">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-volt/15 text-volt">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div className="min-w-0">
                  <div className="text-sm text-white/50">Service area</div>
                  <div className="break-words text-base font-semibold text-white sm:text-lg">Garden Route &amp; surrounds</div>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal" data-reveal="right">
            <form onSubmit={handleSubmit} className="card-glass space-y-3 p-6 md:p-8">
              <h3 className="display-title text-2xl font-bold text-white">Quick enquiry</h3>
              <input required name="name" value={formData.name} onChange={handleChange} placeholder="Full name" className={inputClass} />
              <input required name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" className={inputClass} />
              <div className="grid gap-3 sm:grid-cols-2">
                <select name="serviceType" value={formData.serviceType} onChange={handleChange} className={`${inputClass} appearance-none`}>
                  <option className="bg-ink">Emergency repair</option>
                  <option className="bg-ink">Maintenance plan</option>
                  <option className="bg-ink">New generator quote</option>
                  <option className="bg-ink">Site assessment</option>
                </select>
                <select name="urgency" value={formData.urgency} onChange={handleChange} className={`${inputClass} appearance-none`}>
                  <option className="bg-ink">Urgent</option>
                  <option className="bg-ink">This week</option>
                  <option className="bg-ink">This month</option>
                </select>
              </div>
              <input required name="location" value={formData.location} onChange={handleChange} placeholder="Your location / area" className={inputClass} />
              <input name="budget" value={formData.budget} onChange={handleChange} placeholder="Budget range (optional)" className={inputClass} />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your generator needs" rows={4} className={inputClass} />
              <button type="submit" className="btn-volt w-full text-base">
                Send enquiry on WhatsApp
              </button>
              <a href={WA_DEFAULT} target="_blank" rel="noreferrer" className="block text-center text-sm text-white/55 transition-colors hover:text-volt">
                or start a blank WhatsApp chat
              </a>
              <p className="pt-1 text-center text-xs leading-relaxed text-white/40">
                By submitting this form you consent to Garden Route Generator
                Services processing your personal information to respond to your
                enquiry, in accordance with the Protection of Personal Information
                Act (POPIA). We never share your details with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
