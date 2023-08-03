import React from 'react';
import logo from './logo.png';
import './header.css';
import { Link } from 'react-scroll';
import { useEffect, useState } from 'react';

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollOffset = window.scrollY;
      if (scrollOffset > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
       <nav
        className={`navbar navbar-expand-lg bg-body-tertiary ${isSticky ? 'sticky' : ''}`}
      >
        <div className="container-fluid">
          <img src={logo} alt="logo" height="50px" width="50px" />
          <Link className="navbar-brand" to="/">
            Flashfood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="home" spy={true} smooth={true} offset={50} duration={500}>
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="howitworks"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  HOW IT WORKS
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="location"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  LOCATIONS
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="about"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  ABOUT
                </Link>
                <ul className="dropdown-menu">
                  <li>
                    <Link className="dropdown-item" to="about" spy={true} smooth={true} offset={50} duration={500}>
                      OUR STORY
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="about" spy={true} smooth={true} offset={50} duration={500}>
                      FOOD WASTE
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="about" spy={true} smooth={true} offset={50} duration={500}>
                      THE TEAM
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="about" spy={true} smooth={true} offset={50} duration={500}>
                      PRESS ROOM
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="about" spy={true} smooth={true} offset={50} duration={500}>
                      IMPACT REPORT
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="partner"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  PARTNERS
                </Link>
               
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="support"
                  spy={true} smooth={true} offset={50} duration={500}
                >
                  SUPPORT
                </Link>
               
              </li>
            </ul>
            <form className="d-flex" role="search">
            <button className="btn-outline-success" type="button">
  <a
    href="https://play.google.com/store/apps/details?id=com.flashfoodapp.android&shortlink=da7a27fb&c=homepage_playstore&pid=website&source_caller=ui"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: 'none' }}
  >
    DOWNLOAD
  </a>
</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
