import {
  ArrowRight,
  CalendarDays,
  MapPin,
  Search,
  Sparkles,
  Users,
} from 'lucide-react'

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[680px] items-center overflow-hidden bg-transparent pb-24 pt-28 sm:min-h-[740px] sm:pb-28 sm:pt-32"
    >
      {/* Full-width travel background image. No gradient overlays. */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=2000&auto=format&fit=crop&q=90')",
        }}
        role="img"
        aria-label="A turquoise mountain lake surrounded by green mountains"
      />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute right-[10%] top-24 -z-10 h-36 w-36 rounded-full border border-white/25 sm:h-52 sm:w-52" />
      <div className="pointer-events-none absolute right-[14%] top-32 -z-10 h-24 w-24 rounded-full border border-sunshine/60 sm:h-36 sm:w-36" />

      <div className="mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="max-w-3xl">
          {/* Small introduction label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-xs font-extrabold uppercase tracking-[0.16em] text-white backdrop-blur-sm">
            <Sparkles size={15} className="text-sunshine" />
            Little trips, big memories
          </div>

          {/* Main heading */}
          <h1 className="max-w-3xl text-5xl font-black leading-[1.02] tracking-[-0.055em] text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.35)] sm:text-6xl md:text-7xl lg:text-8xl">
            The world is your{' '}
            <span className="text-sunshine drop-shadow-[0_2px_5px_rgba(0,0,0,0.2)]">
              playground.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-8 text-white drop-shadow-[0_2px_5px_rgba(0,0,0,0.55)] sm:text-lg">
            Find hidden gems, chase golden sunsets, and turn your someday
            plans into stories you’ll tell forever.
          </p>

          {/* Call-to-action buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#destinations"
              className="inline-flex items-center gap-2 rounded-full bg-coral px-6 py-4 text-sm font-extrabold text-white shadow-lg shadow-black/20 transition hover:-translate-y-1 hover:bg-white hover:text-ink"
            >
              Find your escape <ArrowRight size={17} />
            </a>

            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/15 px-6 py-4 text-sm font-extrabold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:bg-white/25"
            >
              How it works
            </a>
          </div>

          {/* Social proof */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            <span className="tracking-widest text-sunshine">★★★★★</span>
            <span>
              <strong className="text-white">4.9/5</strong> loved by curious
              travelers
            </span>
            <span className="hidden h-1 w-1 rounded-full bg-white/70 sm:block" />
            <span>✈ 45+ places to daydream about</span>
          </div>
        </div>

        {/* Visual demo search bar */}
        <div className="mt-12 max-w-5xl rounded-[1.5rem] border border-white/70 bg-white p-3 shadow-2xl shadow-black/20 sm:mt-16 sm:p-2 lg:rounded-full">
          <div className="grid gap-2 sm:grid-cols-2 sm:items-center sm:gap-1 lg:grid-cols-[1.15fr_auto_1fr_auto_1fr_auto] lg:gap-0">
            <a
              href="#destinations"
              className="flex items-center gap-3 rounded-full px-4 py-3 transition hover:bg-cream"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sea/20 text-ink">
                <MapPin size={19} />
              </span>
              <span>
                <span className="block text-xs font-extrabold text-ink">
                  Where to?
                </span>
                <span className="mt-1 block text-xs text-ink/50">
                  Pick a happy place
                </span>
              </span>
            </a>

            <div className="hidden h-10 w-px bg-ink/10 lg:block" />

            <a
              href="#destinations"
              className="flex items-center gap-3 rounded-full px-4 py-3 transition hover:bg-cream"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-sunshine/40 text-ink">
                <CalendarDays size={18} />
              </span>
              <span>
                <span className="block text-xs font-extrabold text-ink">
                  When?
                </span>
                <span className="mt-1 block text-xs text-ink/50">
                  Whenever you're ready
                </span>
              </span>
            </a>

            <div className="hidden h-10 w-px bg-ink/10 lg:block" />

            <a
              href="#pricing"
              className="flex items-center gap-3 rounded-full px-4 py-3 transition hover:bg-cream"
            >
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-coral/10 text-coral">
                <Users size={18} />
              </span>
              <span>
                <span className="block text-xs font-extrabold text-ink">
                  Who's going?
                </span>
                <span className="mt-1 block text-xs text-ink/50">
                  Your favorite people
                </span>
              </span>
            </a>

            <a
              href="#destinations"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-ink px-6 text-sm font-extrabold text-white transition hover:bg-coral"
            >
              <Search size={16} /> Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}