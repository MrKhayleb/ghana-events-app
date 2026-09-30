import { useState } from 'react'

function Contact() {
  // `form` holds all three field values in one object, so we don't need
  // a separate useState per input. `submitted` just tracks whether to show
  // the form or the "thanks" message.
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  // One handler reused by all three inputs (name/email/message share the
  // same onChange below). event.target.name matches each input's `name`
  // attribute, so this updates only the field the user is actually typing
  // in, while keeping the other two untouched via the ...prev spread.
  function handleChange(event) {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(event) {
    // Stops the browser's default behavior of reloading the page on
    // form submit — React handles the submission instead.
    event.preventDefault()
    setSubmitted(true)
    // Note: this only updates local UI state. There's no backend here yet,
    // so nothing is actually sent anywhere — that would be a fetch() call
    // to a server in a real version of this form.
  }

  return (
    <section className="section section--narrow">
      <h1 className="page-title">Contact</h1>
      <p className="page-subtitle">
        Know about an event that should be listed? Send it over.
      </p>

      {/* Conditional rendering: show the success message once submitted
          is true, otherwise show the form. Only one of the two exists
          in the DOM at a time. */}
      {submitted ? (
        <p className="form-success">
          Thanks, {form.name || 'friend'} — that's been noted.
        </p>
      ) : (
        <form className="form" onSubmit={handleSubmit}>
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            className="form__input"
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label className="form__label" htmlFor="email">
            Email
          </label>
          <input
            className="form__input"
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label className="form__label" htmlFor="message">
            Event details
          </label>
          <textarea
            className="form__input form__input--area"
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit" className="button button--coral">
            Send
          </button>
        </form>
      )}
    </section>
  )
}

export default Contact
