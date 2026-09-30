// Static content page — no state, no props. Compare this to Events.jsx,
// which needs useState because it's interactive.
function About() {
  return (
    <section className="section section--narrow">
      <h1 className="page-title">About</h1>
      <p className="about__lead">
        Ghana Events started as a simple question: where does someone go to
        find out what's actually happening this month — not just the big
        festivals everyone already knows, but the durbars, the meetups, the
        things word-of-mouth usually carries?
      </p>

      <blockquote className="pull-quote">
        "The calendar of a place is one of the best ways to understand it."
      </blockquote>

      <p className="about__text">
        This directory pulls together traditional festivals like Homowo,
        Kundum, and Fetu Afahye alongside newer additions to the national
        calendar — street art takeovers, developer conferences, and festival
        stages that now draw visitors from across the continent.
      </p>
      <p className="about__text">
        It's built as a learning project: a small, multi-page React
        application using React Router for navigation, set up with Vite, and
        tracked in Git from the first commit.
      </p>
    </section>
  )
}

export default About
