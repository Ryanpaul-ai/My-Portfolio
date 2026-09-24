function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-label">
        MY WORK
      </p>

      <h2 className="section-title">
        Projects
      </h2>

      <div className="projects-grid">

        {/* PROJECT 1 - CURRENT PORTFOLIO */}
        <div className="project-card">
          <div className="project-image project-one">
            💻
          </div>

          <div className="project-content">
            <h3>Personal Portfolio</h3>

            <p>
              A responsive personal portfolio website built
              with React to showcase my skills, education,
              and projects.
            </p>

            <div className="project-tech">
              <span>React</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-buttons">
              {/* Live Demo - ready for deployment */}
              <a
                href="#"
                className="project-link"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo →
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Ryanpaul-ai/My-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 2 - OLD PORTFOLIO */}
        <div className="project-card">
          <div className="project-image project-two">
            🚀
          </div>

          <div className="project-content">
            <h3>Portfolio Website</h3>

            <p>
              An earlier personal portfolio website created
              to showcase my profile, skills, projects,
              and contact information.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
            </div>

            <div className="project-buttons">
              {/* Live Demo */}
              <a
                href="https://portfolio-odcm0fypq-magallanesryanpaulc11p-7480s-projects.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                Live Demo →
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/Ryanpaul-ai/Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="project-github"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

        {/* PROJECT 3 */}
        <div className="project-card">
          <div className="project-image project-three">
            📱
          </div>

          <div className="project-content">
            <h3>Responsive Website</h3>

            <p>
              A clean and mobile-friendly website designed
              to work smoothly on different screen sizes.
            </p>

            <div className="project-tech">
              <span>HTML</span>
              <span>CSS</span>
              <span>Responsive</span>
            </div>

            <div className="project-buttons">
              {/* Live Demo - add later */}
              <a
                href="#"
                className="project-link"
                onClick={(e) => e.preventDefault()}
              >
                Live Demo →
              </a>

              {/* GitHub - add later */}
              <a
                href="#"
                className="project-github"
                onClick={(e) => e.preventDefault()}
              >
                GitHub
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Projects;