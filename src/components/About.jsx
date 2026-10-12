import { Heart, Leaf, Compass, Check } from 'lucide-react'

const reasons = [
  'Thoughtfully picked places, not endless scrolling',
  'Small-group experiences with local flavor',
  'Flexible options for every kind of traveler',
]

export default function About() {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:px-8">
        <div className="relative grid grid-cols-2 gap-4">
          <img className="mt-10 h-64 w-full rounded-[2rem] object-cover shadow-soft sm:h-80" src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=700&auto=format&fit=crop&q=80" alt="Colorful seaside village" />
          <img className="h-64 w-full rounded-[2rem] object-cover shadow-soft sm:h-80" src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=700&auto=format&fit=crop&q=80" alt="Mountain range" />
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-sunshine px-5 py-3 text-sm font-extrabold text-ink shadow-soft">
            <Heart size={17} fill="currentColor" /> Travel your way
          </div>
        </div>

        <div>
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">A little about roamly</p>
          <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight text-ink sm:text-5xl">Less planning stress.<br /><span className="text-coral">More out-there joy.</span></h2>
          <p className="mt-6 text-base leading-8 text-ink/65">
            We believe the best trips are the ones that feel like you. Roamly brings inspiring places, helpful details, and easy-to-follow packages together so planning feels like part of the adventure.
          </p>
          <div className="mt-7 space-y-4">
            {reasons.map((reason) => <div key={reason} className="flex items-start gap-3 text-sm font-semibold text-ink/75"><span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sea/20 text-sea"><Check size={13} /></span>{reason}</div>)}
          </div>
          <div className="mt-8 grid grid-cols-3 gap-3 border-t border-ink/10 pt-6">
            <div><Compass className="mb-2 text-coral" size={22} /><p className="text-2xl font-black text-ink">45+</p><p className="mt-1 text-xs text-ink/50">Destinations</p></div>
            <div><Heart className="mb-2 text-coral" size={22} /><p className="text-2xl font-black text-ink">8k+</p><p className="mt-1 text-xs text-ink/50">Happy travelers</p></div>
            <div><Leaf className="mb-2 text-coral" size={22} /><p className="text-2xl font-black text-ink">Local</p><p className="mt-1 text-xs text-ink/50">Expert guides</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}