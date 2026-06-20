import repair from '../assets/gallery/repair.jpeg';
import maintenance from '../assets/gallery/maintenance.jpeg';
import support from '../assets/gallery/support.jpeg';
import sales from '../assets/gallery/sales.jpeg';
import { wa } from '../config';

const services = [
  {
    no: '01',
    title: 'Repairs & Breakdowns',
    description:
      'Fast fault diagnosis and on-site repairs for any make or model. We get your power back before downtime costs you.',
    points: ['Emergency callouts', 'Fault finding', 'Parts sourcing'],
    image: repair,
    waText: 'Hi, I have a generator that needs repair. Please assist.',
  },
  {
    no: '02',
    title: 'Maintenance Plans',
    description:
      'Preventative servicing that keeps your generator reliable year-round, so it starts the moment the grid drops.',
    points: ['Scheduled servicing', 'Load testing', 'Battery & fluids'],
    image: maintenance,
    waText: 'Hi, I am interested in a generator maintenance plan.',
  },
  {
    no: '03',
    title: 'Technical Support',
    description:
      'Expert guidance, remote troubleshooting and on-site assistance whenever you need a hand, day or night.',
    points: ['Remote help', 'On-site support', 'Operator training'],
    image: support,
    waText: 'Hi, I need technical support for my generator.',
  },
  {
    no: '04',
    title: 'Sales & Installs',
    description:
      'The right generator for your load profile and budget, delivered, installed and commissioned the right way.',
    points: ['New & pre-owned', 'Sizing by kVA', 'Delivery & setup'],
    image: sales,
    waText: 'Hi, I would like a quote on a new generator.',
  },
];

function Services() {
  return (
    <section id="services" className="relative scroll-mt-24 bg-ink py-24 md:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="reveal eyebrow">What we do</span>
            <h2 className="reveal display-title mt-5 text-4xl font-bold text-white md:text-6xl" data-reveal-delay="80">
              Power solutions, <span className="text-gradient-volt">end to end</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-white/60" data-reveal-delay="120">
            From a single emergency repair to a fully installed standby system, we
            cover the entire lifecycle of your generator.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s, i) => (
            <article
              key={s.no}
              className="reveal group relative overflow-hidden rounded-3xl border border-white/10 bg-ink-800"
              data-reveal="scale"
              data-reveal-delay={i * 90}
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={s.image}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800 via-ink-800/40 to-transparent" />
                <span className="display-title absolute right-5 top-4 text-5xl font-bold text-white/15">
                  {s.no}
                </span>
              </div>

              <div className="p-7">
                <h3 className="display-title text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-white/65">{s.description}</p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {s.points.map((p) => (
                    <span
                      key={p}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/70"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <a
                  href={wa(s.waText)}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-volt transition-all hover:gap-3"
                >
                  Request this service
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>

              <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-transparent transition-all duration-500 group-hover:ring-volt/40" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
