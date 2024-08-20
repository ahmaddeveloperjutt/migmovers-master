// Testimonials.jsx
import React, { forwardRef } from 'react';

const Testimonials = forwardRef((props, ref) => {
  const sectionStyle = {
    backgroundImage: `url('assets/img/bg/testimonial_bg.png')`,
    backgroundPosition: 'top center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <section className="bg-top-center space" style={sectionStyle} ref={ref}>
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title color2">TESTIMONIALS</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg"></span>
              <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            CUSTOMER FEEDBACK
          </span>
          <h2 className="sec-title text-white">
            What Happy Clients Says <br /> <span className="text-theme"> About Us?</span>
          </h2>
        </div>

        <div className="slider-area">
          <div
            className="swiper th-slider has-shadow"
            id="testiSlider3"
            data-slider-options='{"loop":true,"breakpoints":{"0":{"slidesPerView":1},"576":{"slidesPerView":"1"},"768":{"slidesPerView":"2"},"992":{"slidesPerView":"2"},"1200":{"slidesPerView":"3"}}}'
          >
            <div className="swiper-wrapper">
              {[
                {
                  imgSrc: "assets/img/testimonial/testi_3_1.jpg",
                  name: "David Farnandes",
                  designation: "CEO at Anaton",
                },
                {
                  imgSrc: "assets/img/testimonial/testi_3_2.jpg",
                  name: "Jackline Techie",
                  designation: "CEO at Kormola",
                },
                {
                  imgSrc: "assets/img/testimonial/testi_3_3.jpg",
                  name: "Abraham Khalil",
                  designation: "CEO at Anatora",
                },
                {
                  imgSrc: "assets/img/testimonial/testi_3_4.jpg",
                  name: "Md Sumon Mia",
                  designation: "CEO at Rimasu",
                },
              ].map((testimonial, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="testi-grid">
                    <div className="testi-grid_img">
                      <img src={testimonial.imgSrc} alt="Avatar" />
                      <div className="testi-grid_quote">
                        <img src="assets/img/icon/quote_left_3.svg" alt="quote" />
                      </div>
                    </div>
                    <div className="testi-grid_review">
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                      <i className="fa-solid fa-star-sharp"></i>
                    </div>
                    <div className="testi-grid_content">
                      <p className="testi-grid_text">
                        Objectively visualize error-free technology for B2B alignment. Monotonectally harness
                        an expanded array of models via effective collaboration. Globally synergize resource
                        sucking value via cutting-edge.
                      </p>
                      <h3 className="box-title">{testimonial.name}</h3>
                      <p className="testi-grid_desig">{testimonial.designation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button data-slider-prev="#testiSlider3" className="slider-arrow style3 slider-prev">
            <i className="far fa-arrow-left"></i>
          </button>
          <button data-slider-next="#testiSlider3" className="slider-arrow style3 slider-next">
            <i className="far fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </section>
  );
});

export default Testimonials;
