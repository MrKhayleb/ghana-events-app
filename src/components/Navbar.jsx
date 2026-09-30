// NavLink is React Router's version of <a>. It navigates without a full
// page reload, AND it knows whether its own "to" matches the current URL
// (so we can style the active page differently).
import { NavLink } from 'react-router-dom'

// Kept as data instead of four hand-written <NavLink> elements, so adding
// a fifth page later is a one-line change here rather than editing JSX.
const links = [
  // `end: true` means "/" should only be active on the EXACT homepage,
  // not on every route (since every path technically starts with "/").
  { to: '/', label: 'Home', end: true },
  { to: '/events', label: 'Events' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar__inner">
        <NavLink to="/" className="navbar__brand">
          Ghana Events
        </NavLink>

        <nav className="navbar__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.end}
              // NavLink's className can be a function: React Router calls it
              // with { isActive } so we can conditionally add the
              // "active" styling class for whichever link matches the URL.
              className={({ isActive }) =>
                isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Navbar
