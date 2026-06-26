import heroBg from '../assets/generated/hero-bg.jpg';
import { WA_QUOTE } from '../config';

function Hero() {
  return (
    <section className="grain relative flex min-h-[100svh] items-center overflow-hidden bg-ink pt-28 pb-16">
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Silenced standby generator on a misty Garden Route hillside at blue hour"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
      </div>

      <div className="absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-volt/20 blur-[120px]" />

      <div className="container-wide relative z-10">
        <div className="max-w-3xl text-center md:text-left">
          <div className="reveal eyebrow" data-reveal-delay="0">
            <span className="h-2 w-2 animate-pulse rounded-full bg-volt" />
            Garden Route · Power Specialists
          </div>

          <h1 className="reveal display-title mt-6 text-center text-5xl font-bold text-white sm:text-6xl md:text-left md:text-7xl lg:text-8xl" data-reveal-delay="80">
            Take <span className="text-gradient-volt">charge</span>
            <br />
            of your power!
          </h1>

          <p
            className="reveal display-title mt-6 text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl"
            data-reveal-delay="120"
          >
            Stay Powered.
            <br className="sm:hidden" />{' '}
            <span className="text-gradient-volt">Stay Connected.</span>
          </p>

          <p className="reveal mx-auto mt-7 max-w-xl text-lg text-white/75 md:mx-0 md:text-xl" data-reveal-delay="160">
            Sales, repairs, maintenance and emergency support for residential,
            commercial and industrial generators across the Garden Route. Reliable
            power, handled by people who answer the phone.
          </p>

          <div className="reveal mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:items-start md:justify-start" data-reveal-delay="240">
            <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="btn-volt text-base">
              Get a free quote
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="#services" className="btn-ghost text-base">
              Explore services
            </a>
          </div>

          <div className="reveal mx-auto mt-14 grid max-w-lg grid-cols-3 gap-6 md:mx-0" data-reveal-delay="320">
            {[
              { k: 'Rapid', v: 'Emergency response' },
              { k: 'All', v: 'Major brands' },
              { k: '24/7', v: 'Breakdown support' },
            ].map((s) => (
              <div key={s.k}>
                <div className="display-title text-3xl font-bold text-volt md:text-4xl">{s.k}</div>
                <div className="mt-1 text-sm text-white/60">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 transition-colors hover:text-volt md:flex"
      >
        <span className="text-xs uppercase tracking-[0.3em]">Scroll</span>
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-white/30 p-1.5">
          <span className="h-2 w-1 animate-bounce rounded-full bg-volt" />
        </span>
      </a>
    </section>
  );
}

export default Hero;
