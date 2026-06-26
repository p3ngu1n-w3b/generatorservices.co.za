import poweredHome from '../assets/generated/powered-home.jpg';
import { WA_QUOTE, PHONE_TEL, PHONE_DISPLAY } from '../config';

function Showcase() {
  return (
    <section className="relative grain overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img
          src={poweredHome}
          alt="A home fully powered during a load-shedding blackout"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/55" />
      </div>

      <div className="container-wide relative z-10 py-24 md:py-36">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="reveal eyebrow">When the grid goes down</span>
          <h2 className="reveal display-title mt-6 text-4xl font-bold text-white md:text-6xl" data-reveal-delay="80">
            Take charge of <span className="text-gradient-volt">your power!</span>
          </h2>
          <p className="reveal mt-6 max-w-xl text-lg text-white/75" data-reveal-delay="140">
            Load shedding, surges and outages don't have to mean lost food, lost
            productivity or lost sleep. We design and maintain backup power that
            kicks in automatically, so life simply carries on.
          </p>
          <div className="reveal mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center" data-reveal-delay="200">
            <a href={WA_QUOTE} target="_blank" rel="noreferrer" className="btn-volt text-base">
              Get backup power
            </a>
            <a href={`tel:${PHONE_TEL}`} className="text-white/80 transition-colors hover:text-volt">
              or call <span className="font-semibold text-white">{PHONE_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
