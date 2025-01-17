import React, { useEffect, useState } from "react";
import ProfileIcon from "../../Images/ProfileIcon.webp";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('Header');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <nav className={`navbar navbar-expand-lg bg-body-tertiary ${scrolled ? "scrolled" : ""}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="Header">
          <img
            src={ProfileIcon}
            alt="Profile Logo"
            style={{ height: "40px", marginRight: "10px", borderRadius:"20px"}}
          />
          My Portfolio
        </a>
  
      

        {/* Navigation Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Header' ? 'active' : ''}`}
                href="#Header"
                onClick={() => onUpdateActiveLink('Header')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Skills' ? 'active' : ''}`}
                href="#Skills"
                onClick={() => onUpdateActiveLink('Skills')}
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'Projects' ? 'active' : ''}`}
                href="#Projects"
                onClick={() => onUpdateActiveLink('Projects')}
              >
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Social">
                Social
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
