import technician from '../assets/generated/technician.jpg';
import Counter from './Counter';

const stats = [
  { end: 15, suffix: '+', label: 'Years hands-on experience' },
  { end: 500, suffix: '+', label: 'Generators serviced' },
  { end: 24, suffix: '/7', label: 'Emergency availability' },
  { end: 100, suffix: '%', label: 'Workmanship focused' },
];

const steps = [
  { no: '01', title: 'Assess', text: 'We diagnose your needs and load profile.' },
  { no: '02', title: 'Recommend', text: 'The right solution for your budget and site.' },
  { no: '03', title: 'Install / Repair', text: 'Done properly, the first time.' },
  { no: '04', title: 'Maintain', text: 'Ongoing support so it never lets you down.' },
];

function About() {
  return (
    <section id="why" className="relative scroll-mt-24 overflow-hidden bg-ink-800 py-24 md:py-32">
      <div className="absolute inset-0 spotlight" />
      <div className="container-wide relative">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div className="reveal relative" data-reveal="left">
            <div className="overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src={technician}
                alt="Technician servicing an industrial generator"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl border border-volt/30 bg-ink/90 px-6 py-5 shadow-volt backdrop-blur sm:block">
              <div className="display-title text-3xl font-bold text-volt">
                <Counter end={15} suffix="+" />
              </div>
              <div className="text-sm text-white/70">years on the tools</div>
            </div>
          </div>

          <div>
            <span className="reveal eyebrow">Why Garden Route</span>
            <h2 className="reveal display-title mt-5 text-4xl font-bold text-white md:text-5xl" data-reveal-delay="80">
              People who actually <span className="text-gradient-volt">answer</span>.
            </h2>
            <p className="reveal mt-6 text-lg text-white/70" data-reveal-delay="140">
              We help homeowners, businesses and commercial operators across the
              Garden Route keep the lights on. No call centres, no runaround, just
              practical generator expertise and fast, clear communication from the
              first message to final handover.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-x-6 gap-y-8">
              {stats.map((s, i) => (
                <div key={s.label} className="reveal" data-reveal-delay={i * 80}>
                  <div className="display-title text-4xl font-bold text-white md:text-5xl">
                    <Counter end={s.end} suffix={s.suffix} />
                  </div>
                  <div className="mt-1 text-sm text-white/55">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="reveal display-title text-center text-2xl font-bold text-white md:text-3xl">
            How we work
          </h3>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div
                key={step.no}
                className="reveal card-glass p-7 transition-colors hover:border-volt/40"
                data-reveal-delay={i * 90}
              >
                <div className="display-title text-sm font-bold text-volt">{step.no}</div>
                <div className="mt-3 text-xl font-semibold text-white">{step.title}</div>
                <p className="mt-2 text-sm text-white/60">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
