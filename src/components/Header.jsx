import React from 'react';

const Header = ({ onScrollToTestimonials, onScrollToContactSection, onScrollToSelection }) => {
  return (
    <>
      <header className="th-header header-layout2">
        <div className="header-top">
          <div className="container">
            <div className="row justify-content-center justify-content-lg-between align-items-center gy-2">
              <div className="col-auto d-none d-lg-block">
                <div className="header-links">
                  <ul>
                    <li>
                      <i className="fas fa-map-location" />
                      Office No. 202 Al Quoz Industrial Area 3 Dubai, U.A.E
                    </li>
                    <li>
                      <i className="fas fa-phone" />
                      <a href="tel:+971504428369">+971504428369</a>
                    </li>
                    <li>
                      <i className="fas fa-envelope" />
                      <a href="mailto:migmovers69@gmail.com">migmovers69@gmail.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-social">
                  <span className="social-title">Follow Us On : </span>
                  <a href="https://www.facebook.com/"><i className="fab fa-facebook-f" /></a>
                  <a href="https://www.twitter.com/"><i className="fab fa-twitter" /></a>
                  <a href="https://www.instagram.com/"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          {/* Main Menu Area */}
          <div className="menu-area">
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <div className="header-logo">
                    <a className="icon-masking" href="index.html">
                      <span data-mask-src="assets/img/logo.png" className="mask-icon" />
                      <img src="assets/img/logo.png" alt="Webteck" />
                    </a>
                  </div>
                </div>
                <div className="col-auto">
                  <nav className="main-menu d-none d-lg-inline-block">
                    <ul>
                      <li className="mega-menu-wrap">
                        <a href="#">Home</a>
                      </li>
                      <li>
                        <a href="#about" onClick={(e) => {
                          e.preventDefault(); // Prevent default anchor behavior
                          onScrollToTestimonials(); // Call the scroll function
                        }}>About Us</a>
                      </li>
                      <li>
                        <a
                          href="#service"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            onScrollToSelection(); // Call the scroll function
                          }}
                        >
                          Services
                        </a>
                      </li>
                      <li>
                        <a
                          href="#contact"
                          onClick={(e) => {
                            e.preventDefault(); // Prevent default anchor behavior
                            onScrollToContactSection(); // Call the scroll function
                          }}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="col-auto d-none d-lg-block">
                  <div className="header-button">
                    <button
                      type="button"
                      className="th-menu-toggle d-inline-block d-lg-none"
                    >
                      <i className="far fa-bars" />
                    </button>
                    <a
                      href="#contact"
                      onClick={(e) => {
                        e.preventDefault(); // Prevent default anchor behavior
                        onScrollToContactSection(); // Call the scroll function
                      }}
                      className="th-btn shadow-none"
                    >
                      Get free Quote<i className="fas fa-arrow-right ms-2" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
