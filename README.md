# Ghana Events App

A multi-page React app (Home, Events, About, Contact) built with Vite and React Router.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Ghana Events App"
git branch -M main
git remote add origin https://github.com/MrKhayleb/ghana-events-app.git
git push -u origin main
```

(Create the empty `ghana-events-app` repo on GitHub first, then run the above.)

## Structure

- `src/pages/` — Home, Events, About, Contact
- `src/components/` — Navbar, Footer
- `src/data/events.js` — event data used by Home and Events
- `src/App.jsx` — routes
