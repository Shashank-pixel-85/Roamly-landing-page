import { useState } from 'react'
import { Check, ArrowRight, X } from 'lucide-react'

const packages = [
  { name: 'Daydream', description: 'For a little weekend reset.', monthly: 0, yearly: 0, features: ['Curated destination ideas', 'Weekend trip inspiration', 'Personal travel checklist'], button: 'Explore for free' },
  { name: 'Getaway', description: 'For your next big little adventure.', monthly: 2499, yearly: 1999, features: ['Sample 2–3 day itinerary', 'Stay and activity suggestions', 'Local food recommendations', 'Flexible planning guide'], button: 'Choose Getaway', popular: true },
  { name: 'Big Adventure', description: 'For trips worth dreaming about.', monthly: 5999, yearly: 4999, features: ['Sample 5–7 day itinerary', 'Personalized trip outline', 'Premium experience ideas', 'Priority planning support'], button: 'Plan my adventure' },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(true)
  const [message, setMessage] = useState('')

  return (
    <section id="pricing" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center"><p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Plans for every kind of wanderer</p><h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">Big memories, <span className="text-coral">your budget.</span></h2><p className="mt-4 text-sm leading-7 text-ink/60">Pick the planning style that suits you. These are illustrative demo packages, not live bookings.</p></div>
        <div className="mt-8 flex items-center justify-center gap-3 text-sm"><span className={!annual ? 'font-extrabold text-ink' : 'text-ink/45'}>Flexible</span><button className={`relative h-6 w-11 rounded-full p-1 transition ${annual ? 'bg-coral' : 'bg-ink/20'}`} onClick={() => setAnnual(!annual)} aria-label="Toggle package prices"><span className={`block h-4 w-4 rounded-full bg-white transition ${annual ? 'translate-x-5' : ''}`} /></button><span className={annual ? 'font-extrabold text-ink' : 'text-ink/45'}>Early bird</span><span className="rounded-full bg-sunshine/50 px-2 py-1 text-[10px] font-black text-ink">SAVE 20%</span></div>
        <div className="mt-10 grid items-stretch gap-5 md:grid-cols-3">
          {packages.map((item) => {
            const price = annual ? item.yearly : item.monthly
            return <article key={item.name} className={`relative flex flex-col rounded-[1.5rem] border p-6 sm:p-7 ${item.popular ? 'border-coral bg-[#fff7f1] shadow-xl shadow-coral/10' : 'border-ink/10 bg-white'}`}>
              {item.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-coral px-4 py-1.5 text-[10px] font-black uppercase tracking-wider text-white">Most loved</span>}
              <h3 className="text-xl font-black text-ink">{item.name}</h3><p className="mt-2 min-h-10 text-sm leading-6 text-ink/55">{item.description}</p>
              <div className="mt-5 flex items-baseline gap-2"><strong className="text-4xl font-black tracking-tight text-ink">{price === 0 ? 'Free' : `₹${price.toLocaleString('en-IN')}`}</strong>{price > 0 && <span className="text-xs text-ink/50">/ sample package</span>}</div>
              <button className={`mt-6 inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-extrabold transition hover:-translate-y-0.5 ${item.popular ? 'bg-coral text-white hover:bg-ink' : 'border border-ink/15 bg-white text-ink hover:bg-ink hover:text-white'}`} onClick={() => setMessage(`${item.name} selected. This is a demo — no booking or payment was made.`)}>{item.button}<ArrowRight size={16}/></button>
              <div className="my-6 h-px bg-ink/10" /><p className="text-[10px] font-black uppercase tracking-widest text-ink/40">What you'll get</p>
              <ul className="mt-4 space-y-3">{item.features.map((feature) => <li key={feature} className="flex items-start gap-2 text-sm text-ink/70"><Check size={16} className="mt-0.5 shrink-0 text-sea"/>{feature}</li>)}</ul>
            </article>
          })}
        </div>
        {message && <div role="status" className="mx-auto mt-6 flex max-w-xl items-center justify-between gap-4 rounded-2xl border border-sea/40 bg-sea/10 p-4 text-sm text-ink"><span>{message}</span><button onClick={() => setMessage('')} aria-label="Dismiss message"><X size={17}/></button></div>}
      </div>
    </section>
  )
}