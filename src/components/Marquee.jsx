function Marquee() {
  const items = [
    'Standby Generators',
    'Diesel & Petrol',
    'Load Testing',
    'Emergency Callouts',
    'Maintenance Plans',
    'Generator Sales',
    'All Major Brands',
    'On-Site Repairs',
    'Installations',
    'Garden Route',
  ];

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-ink-800 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink-800 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink-800 to-transparent" />
      <div className="flex w-max animate-marquee">
        {[0, 1].map((dup) => (
          <ul key={dup} className="flex items-center" aria-hidden={dup === 1}>
            {items.map((item, i) => (
              <li key={`${dup}-${i}`} className="flex items-center whitespace-nowrap px-8">
                <span className="text-lg font-medium text-white/70">{item}</span>
                <span className="ml-8 h-1.5 w-1.5 rounded-full bg-volt" />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
