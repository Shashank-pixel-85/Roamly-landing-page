import { Search, Heart, Luggage, ArrowRight } from 'lucide-react'

const steps = [
  { number: '01', icon: Search, title: 'Pick your kind of trip', text: 'Beach nap, city wander, or mountain air? Start with what makes you happy.' },
  { number: '02', icon: Heart, title: 'Make it yours', text: 'Explore hand-picked packages and find the little details that feel just right.' },
  { number: '03', icon: Luggage, title: 'Go make memories', text: 'Pack your favorite things. Your next story is waiting out there.' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-black uppercase tracking-[0.18em] text-coral">Easy as one, two, wheee</p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-ink sm:text-5xl">Three steps to <span className="text-coral">out-of-office.</span></h2>
          <p className="mt-4 text-sm leading-7 text-ink/60">Less tab juggling. More looking forward to the good stuff.</p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            return <article key={step.number} className="relative rounded-[1.5rem] border border-ink/10 bg-cream p-7">
              <div className="flex items-center justify-between"><span className="text-sm font-black tracking-widest text-ink/35">{step.number}</span><span className="grid h-12 w-12 place-items-center rounded-2xl bg-sunshine text-ink"><Icon size={23} /></span></div>
              <div className="my-7 h-1 w-16 rounded-full bg-coral" />
              <h3 className="text-xl font-extrabold text-ink">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-ink/60">{step.text}</p>
              {index < 2 && <ArrowRight className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 rounded-full border border-ink/10 bg-white p-2 text-coral md:block" size={34} />}
            </article>
          })}
        </div>
      </div>
    </section>
  )
}