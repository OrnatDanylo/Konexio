import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Navbar.css";
import SvgText from "components/svg/LogoWithArrowDownSVG";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNavContainerOnTop, setIsNavContainerOnTop] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setIsNavContainerOnTop(location.pathname === "/");

    const handleScroll = () => {
      const stickyElement = document.querySelector(".sticky-top");
      if (stickyElement) {
        setIsNavContainerOnTop(
          window.scrollY === 0 && location.pathname === "/"
        );
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <div className="sticky-top">
      <div
        className={`nav-container ${
          isNavContainerOnTop && "nav-container-on-top"
        } ${location.pathname !== "/" && "nav-container-dark"}`}
      >
        <nav className="navbar">
          <div className="navbar-content">
            <div className="navbar-logo-container" onClick={handleLogoClick}>
              <SvgText
                className="navbar-logo"
                text="KONEXIO"
                fontSize="32"
                color="WHITE"
              />
              <div
                className={`navbar-logo-triangle  ${
                  location.pathname !== "/" && "nav-container-dark"
                }`}
              />
            </div>
            {location.pathname === "/" && (
              <div className="navbar-links">
                <li>
                  <Link to="/" className="nav-link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">
                    Contact
                  </Link>
                </li>
              </div>
            )}
          </div>
          <div className="user-info">
            {location.pathname === "/" && (
              <Link to="/auth" className="nav-link">
                LOG IN
              </Link>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
