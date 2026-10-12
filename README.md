# Roamly — Travel Discovery Landing Page

Roamly is a fictional travel discovery brand landing page built for a frontend assignment using React, Vite, and Tailwind CSS. The code is organized into small, readable components to make it beginner-friendly.

## Sections included

1. **Navbar** — logo, navigation links, CTA, and responsive mobile menu
2. **Hero** — full-width travel background image, headline, CTA buttons, and visual trip-finder panel
3. **About** — introduction to Roamly and its values
4. **Features** — four cards covering handpicked places, travel styles, local moments, and simple planning
5. **Destinations** — destination cards with working category filters, search, and details modal
6. **How It Works** — three steps with icons
7. **Testimonials** — sample review cards
8. **Pricing** — three sample package levels, a price toggle, and CTA feedback
9. **Footer** — navigation, contact link, social links, and newsletter form validation

The brief asks for eight sections; this implementation includes all eight core section types and an additional dedicated Features section so that requirement is unambiguous. The destination grid remains as a separate discovery section.

## Tech stack

- React 18
- Vite
- Tailwind CSS 3
- Lucide React icons

## Run locally

Install Node.js 18 or newer, extract this ZIP, open the project folder in VS Code, and run:

```bash
npm install
npm run dev
```

Open the local URL printed in the terminal, usually `http://localhost:5173`.

## Verify the production build

```bash
npm run build
```

Vite writes the production-ready site to the `dist` folder.

## Project structure

- `src/main.jsx` — starts the React app
- `src/App.jsx` — arranges all page sections
- `src/components/` — one JSX file per section
- `src/index.css` — Tailwind directives and global styles
- `tailwind.config.js` — theme colors and fonts
- `postcss.config.js` — Tailwind/PostCSS setup
- `vite.config.js` — Vite and React configuration

## Interactions to test

- Mobile navigation opens and closes
- Destination search and category filters update the cards
- Destination cards open a trip-details modal
- Pricing toggle changes the sample prices
- Package CTA buttons show feedback
- Newsletter form validates the email and displays a demo message
- Navigation and hero CTA buttons scroll to their sections

## Deployment checklist

1. Run `npm install` and `npm run build` locally.
2. Create a GitHub repository and push this project.
3. Import the repository into Vercel or Netlify.
4. Build command: `npm run build`; output directory: `dist`.
5. Test the deployed link on desktop and mobile before sending it to the reviewer.

## Honest demo note

Roamly is fictional. Destination packages, prices, ratings, and testimonials are illustrative sample content, not verified travel offers or genuine customer reviews. The page does not book trips, charge payments, or send newsletter emails. Photos and the Google Font load from external services and require an internet connection.
