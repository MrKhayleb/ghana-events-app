// Simple, static — no props, no state. Rendered once inside App.jsx and
// stays on screen no matter which route is active.
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__brand">Ghana Events</p>
        <p className="footer__note">
          A directory of festivals, culture, and gatherings across Ghana.
        </p>
      </div>
    </footer>
  )
}

export default Footer
