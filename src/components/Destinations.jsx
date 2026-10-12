import { useState } from 'react'
import { ArrowUpRight, MapPin, Search, SlidersHorizontal } from 'lucide-react'

const destinations = [
  { name: 'Bali, Indonesia', category: 'Beach', price: '₹32,999', days: '5 days', image: 'photo-1537996194471-e657df975ab4', tag: 'Best seller', color: 'bg-coral' },
  { name: 'Swiss Alps, Switzerland', category: 'Mountains', price: '₹58,499', days: '7 days', image: 'photo-1531366936337-7c912a4589a7', tag: 'Fresh air fix', color: 'bg-sea' },
  { name: 'Kyoto, Japan', category: 'Culture', price: '₹44,999', days: '6 days', image: 'photo-1493976040374-85c8e12f0c0e', tag: 'Culture trip', color: 'bg-sunshine' },
  { name: 'Amalfi Coast, Italy', category: 'Beach', price: '₹49,999', days: '6 days', image: 'photo-1533105079780-92b9be482077', tag: 'Just dreamy', color: 'bg-sea' },
  { name: 'Jaipur, India', category: 'Culture', price: '₹12,499', days: '3 days', image: 'photo-1599661046827-dacff0c0f09a', tag: 'Local favorite', color: 'bg-coral' },
  { name: 'Queenstown, New Zealand', category: 'Adventure', price: '₹64,999', days: '8 days', image: 'photo-1469474968028-56623f02e42e', tag: 'Big adventure', color: 'bg-sunshine' },
]

const categories = ['All', 'Beach', 'Mountains', 'Culture', 'Adventure']

export default function Destinations() {
  const [category, setCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [selectedTrip, setSelectedTrip] = useState(null)

  const visibleDestinations = destinations.filter((destination) => {
    const matchesCategory = category === 'All' || destination.category === category
    const matchesSearch = destination.name.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <section id="destinations" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Postcards we love</p>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">Somewhere <span className="text-coral">good</span> awaits.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-ink/60">A few places to get your daydreams going. Pick a vibe and see where it takes you.</p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <label className="flex items-center gap-2 rounded-full border border-ink/10 bg-white px-4 py-3">
              <Search size={17} className="text-ink/40" />
              <span className="sr-only">Search destinations</span>
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search places..." className="w-36 bg-transparent text-sm outline-none placeholder:text-ink/40 sm:w-44" />
            </label>
            <span className="inline-flex items-center gap-2 self-start rounded-full bg-white px-4 py-3 text-xs font-bold text-ink/50"><SlidersHorizontal size={15} /> Find your vibe</span>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`rounded-full px-5 py-2.5 text-sm font-bold transition ${category === item ? 'bg-ink text-white' : 'border border-ink/10 bg-white text-ink/65 hover:border-ink/30'}`}>{item}</button>)}
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleDestinations.map((destination) => (
            <article key={destination.name} className="group overflow-hidden rounded-[1.5rem] border border-ink/5 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-soft">
              <div className="relative overflow-hidden">
                <img className="h-56 w-full object-cover transition duration-500 group-hover:scale-105" src={`https://images.unsplash.com/${destination.image}?w=800&auto=format&fit=crop&q=80`} alt={destination.name} loading="lazy" />
                <span className={`absolute left-4 top-4 rounded-full ${destination.color} px-3 py-1.5 text-xs font-extrabold text-ink`}>{destination.tag}</span>
                <button onClick={() => setSelectedTrip(destination)} aria-label={`View ${destination.name}`} className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-ink shadow transition hover:bg-coral hover:text-white"><ArrowUpRight size={18} /></button>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-ink/45"><MapPin size={13} /> {destination.category} escape · {destination.days}</div>
                <h3 className="mt-2 text-xl font-extrabold text-ink">{destination.name}</h3>
                <div className="mt-4 flex items-center justify-between border-t border-ink/10 pt-4"><p className="text-xs text-ink/50">Packages from <strong className="text-lg text-ink">{destination.price}</strong></p><button onClick={() => setSelectedTrip(destination)} className="text-sm font-extrabold text-coral hover:text-ink">View trip →</button></div>
              </div>
            </article>
          ))}
        </div>

        {visibleDestinations.length === 0 && <p className="mt-10 rounded-2xl bg-white p-8 text-center text-ink/60">No destinations found. Try another search or category.</p>}

        {selectedTrip && (
          <div className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/60 p-4" role="dialog" aria-modal="true" aria-labelledby="trip-modal-title" onClick={() => setSelectedTrip(null)}>
            <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-soft sm:p-8" onClick={(event) => event.stopPropagation()}>
              <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-black uppercase tracking-widest text-coral">Your next getaway</p><h3 id="trip-modal-title" className="mt-2 text-2xl font-black text-ink">{selectedTrip.name}</h3></div><button onClick={() => setSelectedTrip(null)} className="rounded-full bg-ink/5 px-3 py-2 text-sm font-bold text-ink">Close</button></div>
              <img className="mt-5 h-44 w-full rounded-2xl object-cover" src={`https://images.unsplash.com/${selectedTrip.image}?w=700&auto=format&fit=crop&q=80`} alt={selectedTrip.name} />
              <p className="mt-4 text-sm leading-6 text-ink/65">A sample {selectedTrip.days.toLowerCase()} {selectedTrip.category.toLowerCase()} package, with ideas for stays, local experiences, and free time to explore at your own pace.</p>
              <div className="mt-5 flex items-center justify-between rounded-2xl bg-cream p-4"><span className="text-sm text-ink/60">Package starts at</span><strong className="text-xl text-ink">{selectedTrip.price}</strong></div>
              <p className="mt-4 text-xs text-ink/45">Demo only — this page does not make real bookings or accept payments.</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}