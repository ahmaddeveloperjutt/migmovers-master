import React, { useEffect } from 'react';
import Swiper from 'swiper';


const Package = () => {
  useEffect(() => {
    // Initialize Swiper
    const swiper = new Swiper('#testiSlider3', {
      loop: true,
      slidesPerView: 1,
      spaceBetween: 30, // Space between slides
      breakpoints: {
        0: { slidesPerView: 1, spaceBetween: 10 },
        576: { slidesPerView: 1, spaceBetween: 20 },
        768: { slidesPerView: 2, spaceBetween: 20 },
        992: { slidesPerView: 2, spaceBetween: 30 },
        1200: { slidesPerView: 3, spaceBetween: 30 },
      },
      // Optional: add pagination, navigation, or other features if needed
    
    
    });
  }, []);

  return (
    <section
      className="bg-top-center space"
      style={{ backgroundImage: 'url(assets/img/bg/packges-bg.png)' }}
    >
      <div className="container">
        <div className="title-area text-center">
          <div className="shadow-title">Our Offers</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <span
                className="mask-icon"
                style={{ backgroundImage: 'url(assets/img/theme-img/title_shape_2.svg)' }}
              ></span>
              <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>
            What We Offer!
          </span>
          <h2 className="sec-title text-theme">
            Great Offers for you! <br /> <span className="text-theme"></span>
          </h2>
        </div>

        <div className="slider-area">
          <div className="swiper-container" id="testiSlider3">
            <div className="swiper-wrapper">
              {[
                {
                  title: 'STUDIO',
                  items: ['3-4 People', '1 Truck', 'Packing & Unpacking', 'Handyman Service', 'Drilling on wall'],
                  budget: 'AED 599',
                  standard: 'AED 899',
                },
                {
                  title: '1 BEDROOM APARTMENT',
                  items: ['4-5 People', '1 Truck', 'Packing & Unpacking', 'Handyman Service', 'Drilling on wall'],
                  budget: 'AED 799',
                  standard: 'AED 1199',
                },
                {
                  title: '2 BEDROOMS APARTMENT',
                  items: ['5-7 People', '1-2 Truck', 'Packing & Unpacking', 'Handyman Service', 'Drilling on wall'],
                  budget: 'AED 1399',
                  standard: 'AED 1699',
                },
                {
                  title: '3 BEDROOMS APARTMENT',
                  items: ['6-8 People', '2-3 Truck', 'Packing & Unpacking', 'Handyman Service', 'Drilling on wall'],
                  budget: 'AED 2099',
                  standard: 'AED 2499',
                },
                {
                  title: '2BHK VILLA',
                  items: ['6-8 People', '2-3 Truck', 'Packing & Unpacking', 'Handyman Service', 'Drilling on wall'],
                  budget: 'AED 1999',
                  standard: 'AED 2199',
                },
                {
                  title: '3BHK VILLA',
                  items: ['6-10 People', '3-4 Truck', 'Packing & Unpacking', 'Handyman Service', 'Drilling on wall'],
                  budget: 'AED 2599',
                  standard: 'AED 2899',
                },
                {
                  title: '4BHK VILLA',
                  items: ['8-12 People', '4-5 Truck', 'Packing & Unpacking', 'Handyman Service', 'Drilling on wall'],
                  budget: 'AED 3599',
                  standard: 'AED 3999',
                },
              ].map((offer, index) => (
                <div className="swiper-slide" key={index}>
                  <div className="card text-center mx-auto" style={{ maxWidth: '40rem', border: 'none' }}>
                    <div className="card-header bg-dark text-white py-4">
                      <h2 className="card-title text-white font-weight-bold">{offer.title}</h2>
                    </div>
                    <div className="card-body bg-warning text-dark py-4 rounded-list">
                      <ul className="list-unstyled mb-0">
                        {offer.items.map((item, itemIndex) => (
                          <li key={itemIndex}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div style={{ borderTop: '2px dashed #f7c32e', margin: '0 1rem' }}></div>
                    <div className="card-footer bg-warning py-4 border-top-0 rounded-footer">
                      <p className="h3 font-weight-bold mb-0">
                        {offer.budget} <span className="h6 font-weight-normal">/Budget</span>
                      </p>
                      <p className="h3 font-weight-bold mt-2">
                        {offer.standard} <span className="h6 font-weight-normal">/Standard</span>
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
 
          </div>
          <div className="slider-controls">
            <button data-slider-prev="#testiSlider3" className="slider-arrow style3 slider-prev">
              <i className="far fa-arrow-left"></i>
            </button>
            <button data-slider-next="#testiSlider3" className="slider-arrow style3 slider-next">
              <i className="far fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider-area {
          position: relative;
          padding-bottom: 3rem; /* Adjust this to control the space below the slider */
        }

        .swiper-container {
          /* This will ensure the container fills the parent with some padding around it */
          padding: 0 1rem;
        }

        .swiper-slide {
          /* Adds margin between slides */
          margin: 0 1rem; /* Adjust as needed */
        }

        .slider-controls {
          position: absolute;
          bottom: 1rem; /* Adjust this to control the space from the bottom */
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: space-between;
          width: calc(100% - 2rem); /* Adjust for padding */
          padding: 0 1rem; /* Add padding to create space from the sides */
          box-sizing: border-box;
        }

        .slider-arrow {
          background: rgba(0, 0, 0, 0.5); /* Optional: Style for the button background */
          color: #fff;
          border: none;
          padding: 1rem;
          border-radius: 50%;
          cursor: pointer;
        }

        .slider-arrow:hover {
          background: rgba(0, 0, 0, 0.7); /* Optional: Style for hover effect */
        }
      `}</style>
    </section>
  );
};

export default Package;
