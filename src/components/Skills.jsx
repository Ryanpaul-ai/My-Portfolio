function Skills() {
  return (
    <section id="skills" className="section">

      <p className="section-label">
        MY SKILLS
      </p>

      <h2 className="section-title">
        What I Work With
      </h2>

      <div className="skills-grid">

        <div className="skill-card">
          <span>🌐</span>
          <h3>HTML</h3>
          <p>Building structured web pages.</p>
        </div>

        <div className="skill-card">
          <span>🎨</span>
          <h3>CSS</h3>
          <p>Creating beautiful responsive designs.</p>
        </div>

        <div className="skill-card">
          <span>⚡</span>
          <h3>JavaScript</h3>
          <p>Adding functionality and interaction.</p>
        </div>

        <div className="skill-card">
          <span>⚛️</span>
          <h3>React</h3>
          <p>Building modern user interfaces.</p>
        </div>

      </div>

    </section>
  );
}

export default Skills;