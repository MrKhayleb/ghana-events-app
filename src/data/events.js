// The app's "database" for now — a plain JS array. Home.jsx and Events.jsx
// both import this same array, so there's one source of truth: change an
// event here and it updates everywhere it's shown. Later, this could be
// swapped for data fetched from an API without touching the page components
// much, since they just expect an array of event objects.
const events = [
  {
    id: 'chale-wote-2026',
    name: 'Chale Wote Street Art Festival',
    date: '2026-08-15',
    displayDate: 'Aug 15–16',
    location: 'Jamestown, Accra',
    category: 'Arts & Culture',
    description:
      'Accra\'s biggest street art takeover — murals, live painting, performance art, and music filling the old Jamestown lanes for a full weekend.',
  },
  {
    id: 'homowo-ga-2026',
    name: 'Homowo Festival',
    date: '2026-08-22',
    displayDate: 'Aug 22',
    location: 'Ga Traditional Area, Accra',
    category: 'Traditional & Heritage',
    description:
      'The Ga people mark the end of a historic famine with the ceremonial sprinkling of kpokpoi, durbar processions, and drumming through the streets.',
  },
  {
    id: 'devfest-accra-2026',
    name: 'DevFest Accra',
    date: '2026-11-07',
    displayDate: 'Nov 7',
    location: 'Kempinski Hotel, Accra',
    category: 'Tech & Business',
    description:
      'Google Developer Groups Accra bring together engineers, designers, and students for a day of talks on web, mobile, and AI.',
  },
  {
    id: 'afronation-2026',
    name: 'Afro Nation Ghana',
    date: '2026-12-27',
    displayDate: 'Dec 27–28',
    location: 'Black Star Square, Accra',
    category: 'Music',
    description:
      'The Detty December headline act — Afrobeats, amapiano, and highlife on one of the continent\'s biggest festival stages.',
  },
  {
    id: 'kundum-2026',
    name: 'Kundum Festival',
    date: '2026-10-10',
    displayDate: 'Oct 10',
    location: 'Axim, Western Region',
    category: 'Traditional & Heritage',
    description:
      'A month of thanksgiving for the Nzema and Ahanta people, marked by the distinctive Kundum dance said to have been taught by forest spirits.',
  },
  {
    id: 'fetu-afahye-2026',
    name: 'Fetu Afahye',
    date: '2026-09-05',
    displayDate: 'Sep 5',
    location: 'Cape Coast, Central Region',
    category: 'Traditional & Heritage',
    description:
      'The Oguaa people celebrate a successful fishing season with a grand durbar of chiefs, drumming, and a procession along the coast.',
  },
]

// Exported as a default export so importing files can name it anything,
// though by convention everyone just imports it as `events`.
export default events
