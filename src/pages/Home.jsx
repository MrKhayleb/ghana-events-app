// Link is React Router's version of <a> for plain navigation (no
// active-state styling needed, so it's simpler than NavLink).
import { Link } from 'react-router-dom'
import events from '../data/events.js'

function Home() {
  // [...events] copies the array before sorting, so we never mutate the
  // original data from events.js (sort() would otherwise reorder it
  // in place, which would also mess up the Events page).
  const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date))

  // Earliest upcoming event becomes the hero...
  const next = sorted[0]
  // ...and the next three after that go in the "Also coming up" list.
  const upcoming = sorted.slice(1, 4)

  return (
    <>
      <section className="hero">
        <div className="hero__inner">
          <p className="hero__kicker">Next up</p>
          <h1 className="hero__title">{next.name}</h1>
          <p className="hero__meta">
            {next.displayDate} · {next.location}
          </p>
          <p className="hero__desc">{next.description}</p>
          <Link to="/events" className="button button--coral">
            See all events
          </Link>
        </div>
      </section>

      <section className="section">
        <h2 className="section__title">Also coming up</h2>
        <ul className="preview-list">
          {upcoming.map((event) => (
            // `key` must be unique per item so React can track which
            // <li> is which across re-renders — event.id fits perfectly.
            <li key={event.id} className="preview-list__row">
              <span className="preview-list__date">{event.displayDate}</span>
              <div className="preview-list__body">
                <p className="preview-list__name">{event.name}</p>
                <p className="preview-list__location">{event.location}</p>
              </div>
              <span className="preview-list__category">{event.category}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="section section--intro">
        <h2 className="section__title">What this is</h2>
        <p className="intro__text">
          Ghana Events tracks the festivals, durbars, tech meetups, and concerts
          happening around the country — from centuries-old traditional
          celebrations to the newest additions to the calendar.
        </p>
      </section>
    </>
  )
}

export default Home
