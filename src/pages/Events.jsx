import { useState } from 'react'
import events from '../data/events.js'

function Events() {
  // useState holds which filter button is currently selected. Changing it
  // (via setActiveCategory) triggers React to re-render this component
  // with the new value — that's how clicking a filter button updates
  // the list on screen.
  const [activeCategory, setActiveCategory] = useState('All')

  // Build the filter button list from the data itself instead of typing
  // it out by hand: new Set() drops duplicate categories, and spreading
  // it into an array with 'All' in front gives us the final list.
  const categories = ['All', ...new Set(events.map((e) => e.category))]

  const sorted = [...events].sort((a, b) => new Date(a.date) - new Date(b.date))

  // If "All" is selected, show everything; otherwise only events whose
  // category matches the button the user clicked.
  const filtered =
    activeCategory === 'All'
      ? sorted
      : sorted.filter((event) => event.category === activeCategory)

  return (
    <section className="section">
      <h1 className="page-title">Events</h1>
      <p className="page-subtitle">
        Everything on the calendar, earliest first. Filter by type below.
      </p>

      <div className="filters">
        {categories.map((category) => (
          <button
            key={category}
            className={
              category === activeCategory
                ? 'filters__button filters__button--active'
                : 'filters__button'
            }
            // Clicking a button updates state, which re-runs the component
            // and recomputes `filtered` above with the new category.
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <ul className="event-list">
        {filtered.map((event) => (
          <li key={event.id} className="event-list__row">
            <div className="event-list__date">
              <span>{event.displayDate}</span>
            </div>
            <div className="event-list__body">
              <p className="event-list__name">{event.name}</p>
              <p className="event-list__location">{event.location}</p>
              <p className="event-list__description">{event.description}</p>
            </div>
            <div className="event-list__category">{event.category}</div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Events
