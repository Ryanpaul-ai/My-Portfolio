function Education() {
  return (
    <section id="education" className="section">

      <p className="section-label"> MY JOURNEY </p>

      <h2 className="section-title"> Education & Learning </h2>

      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-year">2026 - Present</span>

            <h3>Web Development</h3>

            <p>
              Currently learning frontend development and
              building websites using HTML, CSS, JavaScript,
              and React.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-year">Learning</span>

            <h3>Frontend Development</h3>

            <p>
              Practicing responsive web design, React
              components, and creating user-friendly
              websites.
            </p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-dot"></div>

          <div className="timeline-content">
            <span className="timeline-year">Currently</span>

            <h3>Building Projects</h3>

            <p>
              Creating personal projects to improve my
              coding skills and gain more experience.
            </p>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Education;