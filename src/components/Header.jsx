import React, { useState, useEffect } from "react";
import "./Header.css";
import "../styles/theme.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to Dark Mode

  useEffect(() => {
    // Apply dark mode class on initial load
    document.documentElement.classList.add("dark-mode");

    const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleColorSchemeChange = (e) => {
      setIsDarkMode(e.matches);
      if (e.matches) {
        document.documentElement.classList.add("dark-mode");
      } else {
        document.documentElement.classList.remove("dark-mode");
      }
    };

    darkModeMediaQuery.addListener(handleColorSchemeChange);

    return () => {
      darkModeMediaQuery.removeListener(handleColorSchemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark-mode");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <header className="header">
      <div className="header-container">
        <a href="" className="logo">
          <span className="logo-text">Rohit R.</span>
        </a>

        <div className="header-right">
          <nav className={`nav-menu ${isMobileMenuOpen ? "active" : ""}`}>
            <div className="nav-links">
              <a href="#about" onClick={closeMobileMenu}>
                About
              </a>
              <a href="#skills" onClick={closeMobileMenu}>
                Skills
              </a>
              <a href="#experience" onClick={closeMobileMenu}>
                Experience
              </a>
              <a href="#certificates" onClick={closeMobileMenu}>
                Certificates
              </a>
              <a href="#projects" onClick={closeMobileMenu}>
                Projects
              </a>
              <a href="#contact" onClick={closeMobileMenu}>
                Contact
              </a>
            </div>
          </nav>

          <button
            className={`theme-toggle ${isDarkMode ? "dark" : "light"}`}
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-toggle-icon">
              {isDarkMode ? "☀️" : "🌙"}
            </span>
          </button>

          <button
            className={`mobile-menu-btn ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="menu-icon"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
