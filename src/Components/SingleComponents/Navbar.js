import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslations } from "../Contexts/LanguageContext";

function Navbar() {
  const { translations, changeLanguage } = useTranslations();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  useEffect(() => {
    const closeBtn = document.querySelector(".meanmenu-close");
    if (closeBtn && window.innerWidth <= 991) {
      closeBtn.style.display = isMobileMenuOpen ? "block" : "none";
    }
  }, [isMobileMenuOpen]);
  return (
    <div className="navbar-area fixed-top">
      <div className="mobile-nav">
        <Link to="/" className="logo">
          <img src="assets/img/logo.png" alt="Logo" />
        </Link>
        <button
          style={{ position: "relative", top: "10px" }}
          className={`meanmenu-reveal ${isMobileMenuOpen ? "open" : ""}`}
          onClick={toggleMobileMenu}
        >
          <i className={`fas ${isMobileMenuOpen ? "fa-times" : "fa-bars"}`}></i>
        </button>
      </div>

      <div className={`main-nav ${isMobileMenuOpen ? "show" : ""}`}>
        <div className="container">
          <nav className="navbar navbar-expand-md navbar-light">
            <Link className="navbar-brand" to="/">
              <img src="assets/img/logo.png" alt="Logo" />
            </Link>
            <div
              className={`collapse navbar-collapse mean-menu ${
                isMobileMenuOpen ? "show" : ""
              }`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav">
                <li onClick={toggleMobileMenu} className="nav-item">
                  <Link to="/" className="nav-link">
                    {translations.home}
                  </Link>
                </li>
                <li onClick={toggleMobileMenu} className="nav-item">
                  <Link to="/about" className="nav-link">
                    {translations.about}
                  </Link>
                </li>
                <li onClick={toggleMobileMenu} className="nav-item">
                  <Link to="/blogs" className="nav-link">
                    {translations.blogs}
                  </Link>
                </li>
                <li onClick={toggleMobileMenu} className="nav-item">
                  <Link to="/contact" className="nav-link">
                    {translations.contact}
                  </Link>
                </li>
                <li onClick={toggleMobileMenu} className="nav-item">
                  <Link to="/faq" className="nav-link">
                    {translations.faq}
                  </Link>
                </li>
              </ul>
              <div className="side-nav">
                <Link to="/appointment" className="appointment-link">
                  {translations.getAppointment}
                </Link>
              </div>
              <button
                style={{ display: "none" }}
                className="meanmenu-close"
                onClick={toggleMobileMenu}
              >
                X
              </button>
            </div>
            <div className="language-switcher">
              <button
                onClick={() => changeLanguage("en")}
                className="language-button"
              >
                English
              </button>
              <button
                onClick={() => changeLanguage("tr")}
                className="language-button"
              >
                Türkçe
              </button>
              <button
                onClick={() => changeLanguage("ar")}
                className="language-button"
              >
                عربى
              </button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
