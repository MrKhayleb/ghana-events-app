// App is the shell every page lives inside: Navbar and Footer are always
// visible, and <Routes> swaps out just the middle (app__main) depending on
// the current URL. This is the "multi-page app" part of the assignment,
// done the SPA way — no real page reloads.
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Events from './pages/Events.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />

      <main className="app__main">
        {/* <Routes> looks at the current URL and renders whichever <Route>
            path matches. Only ONE of these four components is on screen
            at a time. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </div>
  )
}

export default App
