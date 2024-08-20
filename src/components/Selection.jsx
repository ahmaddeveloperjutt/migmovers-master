// Selection.jsx
import React, { useEffect, forwardRef } from 'react';


const Selection = forwardRef((props, ref) => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('#serviceSlider1', {
      breakpoints: {
        0: { slidesPerView: 1 },
        576: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      },
    });
  }, []);

  return (
    <section
      className="bg-top-center z-index-common space-top"
      id="service-sec"
      style={{ backgroundImage: 'url(assets/img/bg/service-bg.png)' }}
      ref={ref}
    >
      <div className="container">
        <div className="row justify-content-lg-between justify-content-center align-items-center">
          <div className="col-lg-6 col-sm-9 pe-xl-5">
            <div className="title-area text-center text-lg-start">
              <div className="shadow-title color2">SERVICES</div>
              <span className="sub-title">
                <div className="icon-masking me-2">
                  <span className="mask-icon" style={{ backgroundImage: 'url(assets/img/theme-img/title_shape_2.svg)' }}></span>
                  <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
                </div>
                WHAT WE DO
              </span>
              <h2 className="sec-title text-white">
                We Provide Exclusive Service For <span className="text-theme">Your Business</span>
              </h2>
            </div>
          </div>
          <div className="col-auto">
            <div className="sec-btn">
              <a href="service.html" className="th-btn style3">
                VIEW ALL SERVICES<i className="fa-regular fa-arrow-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="slider-area">
          <div className="swiper th-slider has-shadow" id="serviceSlider1">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="service-grid">
                  <div className="service-grid_icon">
                    <img src="assets/img/icon/service_card_2.svg" alt="Icon" />
                  </div>
                  <div className="service-grid_content">
                    <h3 className="box-title">
                      <a href="service-details.html">Packing and Unpacking Services</a>
                    </h3>
                    <p className="service-grid_text">
                      Comprehensive packing and unpacking assistance to ensure your belongings are safely and efficiently transported.
                    </p>
                    <a href="service-details.html" className="th-btn">
                      Read More<i className="fas fa-arrow-right ms-2"></i>
                    </a>
                    <div className="bg-shape">
                      <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-grid">
                  <div className="service-grid_icon">
                    <img src="assets/img/icon/service_card_3.svg" alt="Icon" />
                  </div>
                  <div className="service-grid_content">
                    <h3 className="box-title">
                      <a href="service-details.html">Storage Solutions</a>
                    </h3>
                    <p className="service-grid_text">
                      Safe and accessible short-term and long-term storage options for your belongings during the moving process.
                    </p>
                    <a href="#" className="th-btn">
                      Read More<i className="fas fa-arrow-right ms-2"></i>
                    </a>
                    <div className="bg-shape">
                      <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-grid">
                  <div className="service-grid_icon">
                    <img src="assets/img/icon/service_card_4.svg" alt="Icon" />
                  </div>
                  <div className="service-grid_content">
                    <h3 className="box-title">
                      <a href="service-details.html">Furniture Assembly and Disassembly</a>
                    </h3>
                    <p className="service-grid_text">
                      Expert assistance with assembling and disassembling furniture to ensure safe transportation and easy setup at your new location.
                    </p>
                    <a href="service-details.html" className="th-btn">
                      Read More<i className="fas fa-arrow-right ms-2"></i>
                    </a>
                    <div className="bg-shape">
                      <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="service-grid">
                  <div className="service-grid_icon">
                    <img src="assets/img/icon/service_card_5.svg" alt="Icon" />
                  </div>
                  <div className="service-grid_content">
                    <h3 className="box-title">
                      <a href="service-details.html">Commercial Moving Services</a>
                    </h3>
                    <p className="service-grid_text">
                      Tailored moving solutions for businesses, including office relocations, equipment moving, and setup at the new location.
                    </p>
                    <a href="service-details.html" className="th-btn">
                      Read More<i className="fas fa-arrow-right ms-2"></i>
                    </a>
                    <div className="bg-shape">
                      <img src="assets/img/bg/service_grid_bg.png" alt="bg" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default Selection;
