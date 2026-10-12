const reviews = [
  { name: 'Maya R.', location: 'Bengaluru, India', initials: 'MR', color: 'bg-coral/20 text-coral', quote: 'For once, planning the holiday was almost as fun as the holiday itself. The Bali suggestions were exactly our vibe.' },
  { name: 'Arjun & Neha', location: 'Pune, India', initials: 'AN', color: 'bg-sea/30 text-ink', quote: 'We found a little homestay we would never have discovered on our own. Saving Roamly for our next long weekend.' },
  { name: 'Sofia K.', location: 'Mumbai, India', initials: 'SK', color: 'bg-sunshine text-ink', quote: 'Clear package details, lovely ideas, and no overwhelming list of a thousand options. A breath of fresh air.' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div><p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Notes from the road</p><h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">Good trips. <span className="text-coral">Good stories.</span></h2><p className="mt-4 text-sm text-ink/60">A little love from our travel-loving community.</p></div>
          <div className="rounded-2xl border border-ink/10 bg-white px-5 py-4"><div className="text-sm tracking-widest text-sunshine">★★★★★ <strong className="ml-2 tracking-normal text-ink">4.9/5</strong></div><p className="mt-1 text-xs text-ink/50">Illustrative demo rating</p></div>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {reviews.map((review) => <article key={review.name} className="flex flex-col rounded-[1.5rem] border border-ink/10 bg-white p-6 shadow-sm"><div className="text-4xl font-black leading-none text-coral">“</div><div className="mt-4 text-sm tracking-widest text-sunshine">★★★★★</div><blockquote className="mt-3 flex-1 text-sm leading-7 text-ink/70">{review.quote}</blockquote><div className="mt-6 flex items-center gap-3 border-t border-ink/10 pt-5"><span className={`grid h-11 w-11 place-items-center rounded-full text-xs font-black ${review.color}`}>{review.initials}</span><div><p className="font-extrabold text-ink">{review.name}</p><p className="mt-1 text-xs text-ink/45">{review.location}</p></div><span className="ml-auto text-xs font-bold text-sea">✓ Traveler</span></div></article>)}
        </div>
      </div>
    </section>
  )
}