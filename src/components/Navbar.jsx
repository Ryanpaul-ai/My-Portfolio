import { useEffect, useState } from "react";

function Navbar({ darkMode, setDarkMode, menuOpen, setMenuOpen }) {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");

      let currentSection = "home";
      const scrollPosition = window.scrollY + 180;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;

        if (scrollPosition >= sectionTop) {
          currentSection = section.getAttribute("id");
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">MyPortfolio</div>

      <button
        className="menu-button"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "open" : ""}`}>
        <a
          href="#home"
          className={activeSection === "home" ? "active" : ""}
          onClick={() => handleNavClick("home")}
        >
          Home
        </a>

        <a
          href="#about"
          className={activeSection === "about" ? "active" : ""}
          onClick={() => handleNavClick("about")}
        >
          About
        </a>

        <a
          href="#skills"
          className={activeSection === "skills" ? "active" : ""}
          onClick={() => handleNavClick("skills")}
        >
          Skills
        </a>

        <a
          href="#education"
          className={activeSection === "education" ? "active" : ""}
          onClick={() => handleNavClick("education")}
        >
          Education
        </a>

        <a
          href="#projects"
          className={activeSection === "projects" ? "active" : ""}
          onClick={() => handleNavClick("projects")}
        >
          Projects
        </a>

        <a
          href="#contact"
          className={activeSection === "contact" ? "active" : ""}
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </a>

        <button
          className={`theme-toggle ${darkMode ? "dark" : "light"}`}
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          <span className="theme-toggle-track">
            <span className="theme-toggle-icon">
              {darkMode ? (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="4" />
                  <line x1="12" y1="20" x2="12" y2="22" />
                  <line x1="4.93" y1="4.93" x2="6.34" y2="6.34" />
                  <line x1="17.66" y1="17.66" x2="19.07" y2="19.07" />
                  <line x1="2" y1="12" x2="4" y2="12" />
                  <line x1="20" y1="12" x2="22" y2="12" />
                  <line x1="4.93" y1="19.07" x2="6.34" y2="17.66" />
                  <line x1="17.66" y1="6.34" x2="19.07" y2="4.93" />
                </svg>
              )}
            </span>
          </span>

          <span className="theme-toggle-label">
            {darkMode ? "DARK MODE" : "LIGHT MODE"}
          </span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;