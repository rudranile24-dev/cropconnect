# CropConnect — Frontend

Field-to-phone IoT platform for modern farming. Real sensors measure soil, water
and climate; a multilanguage app and web dashboard turn that data into decisions
farmers can act on instantly.

## Tech stack
- React 18 + Create React App (`react-scripts`)
- Tailwind CSS 3 + `tailwindcss-animate`
- Radix UI primitives (`@radix-ui/react-label`, `react-slot`, `react-tabs`)
- `lucide-react` icons, `sonner` toasts
- `axios` for API calls, `react-router-dom` for routing

## Run locally

```bash
# 1. Install dependencies
yarn install        # or: npm install

# 2. (Optional) Configure backend URL
echo "REACT_APP_BACKEND_URL=http://localhost:8001" > .env

# 3. Start dev server
yarn start          # opens http://localhost:3000
```

## Build for production

```bash
yarn build          # output in ./build
```

## Project layout

```
src/
├── App.js                 # mounts <LandingPage />
├── App.css                # base wrapper styles
├── index.js               # CRA entry, renders <App />
├── index.css              # global tokens, fonts, tailwind layers
├── lib/
│   └── utils.js           # cn() classname helper
├── components/
│   ├── ui/                # shadcn-style primitives
│   │   ├── button.jsx
│   │   ├── input.jsx
│   │   ├── label.jsx
│   │   ├── tabs.jsx
│   │   └── textarea.jsx
│   └── landing/           # marketing page sections
│       ├── Header.jsx
│       ├── Hero.jsx
│       ├── LiveSensorCard.jsx
│       ├── ImpactStats.jsx
│       ├── PrototypeSection.jsx
│       ├── FeaturesSection.jsx
│       ├── MobileAppSection.jsx
│       ├── HowItWorks.jsx
│       ├── BenefitsSection.jsx
│       ├── GoalsSection.jsx
│       ├── EcosystemSection.jsx
│       ├── ContactSection.jsx
│       └── Footer.jsx
└── pages/
    └── LandingPage.jsx    # composes all sections in order
```

## Notes
- The contact form (`ContactSection.jsx`) `POST`s to `${REACT_APP_BACKEND_URL}/api/contact`.
  A backend route accepting `{ name, email, phone, organization, message }` is
  required for end-to-end functionality. The frontend renders fine without it.
- Live sensor card (`LiveSensorCard.jsx`) animates demo telemetry locally; no
  backend needed for the visual prototype.
- Fonts are pulled from Google Fonts (Fraunces / DM Sans / JetBrains Mono).
