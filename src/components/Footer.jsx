import { useState } from 'react'
import { Compass, ArrowRight, Instagram, Youtube, Mail } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  function handleSubscribe(event) {
    event.preventDefault()
    if (!email.includes('@') || !email.includes('.')) {
      setMessage('Please enter a valid email address.')
      return
    }
    setMessage('Thanks for joining the Roamly list! This demo does not send emails.')
  }

  return (
    <footer id="contact" className="bg-ink pb-6 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1fr_1.5fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-2 text-2xl font-black"><span className="grid h-10 w-10 place-items-center rounded-xl bg-coral"><Compass size={22}/></span>Roamly<span className="text-sunshine">.</span></a>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">Find your happy place. Collect the moments. Come home with stories.</p>
            <div className="mt-6 flex gap-3"><a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:bg-coral hover:text-white"><Instagram size={17}/></a><a href="https://www.youtube.com/" target="_blank" rel="noreferrer" aria-label="YouTube" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:bg-coral hover:text-white"><Youtube size={17}/></a><a href="mailto:hello@roamly.example" aria-label="Email Roamly" className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/70 transition hover:bg-coral hover:text-white"><Mail size={17}/></a></div>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="flex flex-col items-start gap-3"><b className="mb-1 text-sm">Explore</b><a className="text-sm text-white/55 hover:text-white" href="#destinations">Destinations</a><a className="text-sm text-white/55 hover:text-white" href="#how-it-works">How it works</a><a className="text-sm text-white/55 hover:text-white" href="#pricing">Packages</a></div>
            <div className="flex flex-col items-start gap-3"><b className="mb-1 text-sm">Roamly</b><a className="text-sm text-white/55 hover:text-white" href="#about">Our story</a><a className="text-sm text-white/55 hover:text-white" href="#testimonials">Traveler stories</a><a className="text-sm text-white/55 hover:text-white" href="mailto:hello@roamly.example">Contact</a></div>
            <div><b className="text-sm">Postcards, please!</b><p className="mt-3 text-sm leading-6 text-white/55">Get occasional travel ideas for your next escape.</p><form onSubmit={handleSubscribe} className="mt-4 flex overflow-hidden rounded-full bg-white/10 p-1"><label className="sr-only" htmlFor="newsletter">Email address</label><input id="newsletter" type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="you@email.com" className="min-w-0 flex-1 bg-transparent px-3 text-sm text-white outline-none placeholder:text-white/40"/><button aria-label="Subscribe" className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-sunshine text-ink transition hover:bg-coral hover:text-white"><ArrowRight size={16}/></button></form>{message && <p role="status" className="mt-2 text-xs text-sunshine">{message}</p>}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between gap-3 pt-5 text-xs text-white/40 sm:flex-row"><span>© {new Date().getFullYear()} Roamly Travel. Made for curious people.</span><span>Demo landing page · Destinations, prices, and reviews are illustrative.</span></div>
      </div>
    </footer>
  )
}