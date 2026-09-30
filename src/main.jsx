// This is the app's true entry point — the first JS file that runs.
// index.html loads this file directly via <script type="module">.
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

// Find the <div id="root"> from index.html and mount the React app into it.
ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode is a dev-only helper that highlights potential bugs
  // (it renders components twice in development to catch side-effect
  // mistakes). It does nothing in a production build.
  <React.StrictMode>
    {/* BrowserRouter turns on client-side routing: it reads/writes the
        browser URL and re-renders whichever page matches, instead of
        letting the browser make a fresh server request. It has to wrap
        App so every component inside can use React Router's hooks/links. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
