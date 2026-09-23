import { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "Frontend Developer",
    "React Developer",
    "Web Developer",
    "Student Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const typingSpeed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentRole.substring(0, displayText.length + 1));

        if (displayText === currentRole) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentRole.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="small-title">HELLO, I'M</p>

        <h1>
          Ryan <span>Paul Magallanes</span>
        </h1>

        <h2 className="typing-text">
          {displayText}
          <span className="typing-cursor">|</span>
        </h2>

        <p className="hero-description">
          I create modern, responsive, and user-friendly websites
          using modern web technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-button"> View My Work </a>

          <a href="#contact" className="secondary-button"> Contact Me </a>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="secondary-button">
            View Resume
          </a>
        </div>

        <div className="social-links">

          <a
            href="https://github.com/Ryanpaul-ai"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/ryan-paul-magallanes-2331a03b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://www.instagram.com/cabrasryan?stkn=bnUzZmV3MzFsbzdy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>

        </div>

      </div>

      <div className="profile-circle">
        <img src="/profile.jpg" alt="Profile" />
      </div>

    </section>
  );
}

export default Hero;