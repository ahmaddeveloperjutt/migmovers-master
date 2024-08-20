import React from 'react'

const Features = () => {
  return (
<>
<div className="why-sec-v2" data-bg-src="assets/img/bg/why_bg_2.jpg">
  <div className="container space">
    <div className="row align-items-center flex-row-reverse">
      <div className="col-xl-6 mb-30 mb-xl-0">
        <div className="img-box5">
          <img className="tilt-active" src="assets/img/normal/business.png" alt="Why" />
          <div className="year-counter">
            <h3 className="year-counter_number"><span className="counter-number">3</span>k+</h3>
            <p className="year-counter_text">Clients Active</p>
          </div>
        </div>
      </div>
      <div className="col-xl-6">
        <div className="title-area mb-35">
          <div className="shadow-title color3">Choose US</div>
          <span className="sub-title">
            <div className="icon-masking me-2">
              <span className="mask-icon" data-mask-src="assets/img/theme-img/title_shape_2.svg" />
              <img src="assets/img/theme-img/title_shape_2.svg" alt="shape" />
            </div>WHY CHOOSE US
          </span>
          <h2 className="sec-title">More Than 24+ Years Experience We Provide <span className="text-theme">Moving
              Services</span></h2>
        </div>
        <p className="mt-n2 mb-30">Collaboratively envisioneer user friendly supply chains and cross unit
          imperative. Authoritativel fabricate competitive resource and holistic. Holisticly restore
          real time resources whereas standardized networks.</p>
        <div className="feature-circle-wrap">
          <div className="feature-circle">
            <div className="progressbar" data-path-color="#684DF4">
              <div className="circle" data-percent={97}>
                <div className="circle-num" />
              </div>
            </div>
            <div className="media-body">
              <h3 className="feature-circle_title">Satisfied CLients</h3>
              <p className="feature-circle_text">Clients rate is repetative because of satisfaction.
              </p>
            </div>
          </div>
          <div className="feature-circle">
            <div className="progressbar" data-path-color="#684DF4">
              <div className="circle" data-percent={95}>
                <div className="circle-num" />
              </div>
            </div>
            <div className="media-body">
              <h3 className="feature-circle_title">Quality Services</h3>
              <p className="feature-circle_text">Effectively moving your goods with zero loss.</p>
            </div>
          </div>
        </div>
        <a href="about.html" className="th-btn">LEARN MORE<i className="fa-regular fa-arrow-right ms-2" /></a>
      </div>
    </div>
  </div>
</div>



</>
  )
}

export default Features