import { Compass, Heart, MapPinned, Sparkles } from 'lucide-react'

const features = [
  { icon: MapPinned, title: 'Handpicked places', text: 'Skip the endless scrolling. Discover memorable spots chosen to inspire your next escape.', color: 'bg-coral/10 text-coral' },
  { icon: Heart, title: 'Trips that feel like you', text: 'From slow beach days to mountain adventures, find ideas that fit your travel mood.', color: 'bg-sea/20 text-ink' },
  { icon: Compass, title: 'Local moments', text: 'Make room for neighborhood food, hidden corners, and experiences beyond the usual checklist.', color: 'bg-sunshine/40 text-ink' },
  { icon: Sparkles, title: 'Simple planning', text: 'Keep inspiration, suggested itineraries, and package ideas together in one easy place.', color: 'bg-violet-100 text-violet-700' },
]

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Why roam with us?</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">Less scrolling. <span className="text-coral">More exploring.</span></h2>
          <p className="mt-4 text-sm leading-7 text-ink/60">A few thoughtful details to make planning your next happy place feel easier.</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <article key={feature.title} className="group rounded-3xl border border-ink/10 bg-cream p-6 transition duration-300 hover:-translate-y-1 hover:border-coral/30 hover:shadow-soft">
                <span className={`grid h-12 w-12 place-items-center rounded-2xl ${feature.color}`}><Icon size={23} /></span>
                <h3 className="mt-5 text-lg font-extrabold text-ink">{feature.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">{feature.text}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
