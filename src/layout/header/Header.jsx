import { useState, useEffect, useRef } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    };
    const handleClickOutside = (e) => {
      if (menuOpen && !e.target.closest(".hea-nav-links") && !e.target.closest(".hea-menu-toggle")) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const contactus = () => {
    window.location.href = "mailto:academy.zoolearn@gmail.com";
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Taxonomy Tree", path: "/taxonomy-tree" },
    { name: "ZooHub", path: "/zoohub" },
    { name: "About", path: "/about" },
    //{ name: "Living World", path: "/livingworld" },
  ];

  return (
    <>
      <header className="hea-header">
        <div className="hea-header-container">

          {/* --- LOGO SECTION --- */}
          <NavLink
            to="/"
            className="hea-logo-section"
            onClick={() => {
              closeMenu();
              window.scrollTo(0, 0);
            }}
          >
            <div className="hea-logo-wrapper">
              <img
                src="https://res.cloudinary.com/duibfmcw1/image/upload/v1765947727/logopng_2_webaac.png"
                alt="ZooLearn Logo"
                className="hea-logo"
              />
            </div>
            <div className="hea-brand-container">
              <span className="hea-brand">ZooLearn</span>
              <span className="hea-brand-tagline">Explore Zoology</span>
            </div>
          </NavLink>

          {/* Mobile Menu Toggle */}
          <button
            className={`hea-menu-toggle ${menuOpen ? "hea-active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className="hea-bar hea-bar-1"></span>
            <span className="hea-bar hea-bar-2"></span>
            <span className="hea-bar hea-bar-3"></span>
          </button>

          {/* Navigation */}
          <nav className={`hea-nav-links ${menuOpen ? "hea-active" : ""}`}>
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => (isActive ? "hea-active" : "")}
                onClick={closeMenu}
                end={item.path === "/"}
              >
                {item.name}
              </NavLink>
            ))}

            {/* --- MOBILE SUPPORT BUTTONS --- */}
            {menuOpen && (
              <div className="hea-auth-buttons hea-mobile">
                <div className="hea-support-wrapper">
                  <button
                    className="hea-support-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSupportOpen(!supportOpen);
                    }}
                  >
                    💛 Support Us
                  </button>

                  <div className={`hea-support-dropdown ${supportOpen ? 'active' : ''}`}>
                    <div className="hea-qr-container">
                      <img
                        src="https://res.cloudinary.com/dmdo1gixv/image/upload/v1769677280/WhatsApp_Image_2026-01-29_at_14.13.13_qq2t9c.jpg"
                        alt="Donate QR Code"
                        className="hea-qr-image"
                      />
                      <p className="hea-qr-text">
                        <strong>Help Us Grow!</strong>
                        Scan to donate.
                        <br />
                        <span style={{ fontSize: "0.85em", display: "block", marginTop: "4px", fontStyle: "italic" }}>
                          Please provide your details while donating us.
                        </span>
                      </p>
                    </div>
                    <a
                      href="mailto:academy.zoolearn@gmail.com"
                      className="hea-support-link"
                    >
                      ✉️ Contact Support
                    </a>
                  </div>
                </div>
              </div>
            )}
          </nav>

          {/* --- DESKTOP SUPPORT US --- */}
          <div className="hea-auth-buttons hea-desktop">
            <div className="hea-support-wrapper">
              <button
                className="hea-support-btn"
                onClick={() => setSupportOpen(!supportOpen)}
              >
                💛 Support Us
              </button>

              <div className={`hea-support-dropdown ${supportOpen ? 'active' : ''}`}>
                <div className="hea-qr-container">
                  <img
                    src="https://res.cloudinary.com/dmdo1gixv/image/upload/v1769677280/WhatsApp_Image_2026-01-29_at_14.13.13_qq2t9c.jpg"
                    alt="Donate QR Code"
                    className="hea-qr-image"
                  />
                  <p className="hea-qr-text">
                    <strong>Help Us Grow!</strong>
                    Scan to donate & support our mission.
                    <br />
                    <span style={{ fontSize: "0.85em", display: "block", marginTop: "4px", fontStyle: "italic" }}>
                      Please provide your details while donating us.
                    </span>
                  </p>
                </div>
                <a
                  href="mailto:academy.zoolearn@gmail.com"
                  className="hea-support-link"
                >
                  ✉️ Contact Support
                </a>
              </div>
            </div>
          </div>
        </div>

        {(menuOpen || supportOpen) && (
          <div
            className={`hea-menu-overlay ${supportOpen ? "hea-overlay-high" : ""}`}
            onClick={() => {
              closeMenu();
              setSupportOpen(false);
            }}
          ></div>
        )}
      </header>
    </>
  );
}