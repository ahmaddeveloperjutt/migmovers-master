import React from 'react'

const Hero = () => {
  return (
  <>
 <div className="th-hero-wrapper hero-4" id="hero">
  <div className="body-particle" id="body-particle" />
  <div className="hero-img tilt-active">
    <img src="assets/img/hero/hero.jpeg" alt="Hero Image" />
  </div>
  <div className="container">
    <div className="hero-style4">
      <div className="ripple-shape">
        <span className="ripple-1" /><span className="ripple-2" /><span className="ripple-3" /><span className="ripple-4" /><span className="ripple-5" /><span className="ripple-6" />
      </div>
      <span className="hero-subtitle">Best Moving &amp; Packeges Services</span>
      <h1 className="hero-title">Making The Moving</h1>
      <h1 className="hero-title">Tension Free For You</h1>
      <p className="hero-text">Streamline your move and packaging needs with our advanced methods and strong
        partnerships. We coordinate every step of the process to ensure efficient and personalized
        service for a smooth experience.</p>
      <div className="btn-group">
        <a href="about.html" className="th-btn">ABOUT US<i className="fa-regular fa-arrow-right ms-2" /></a>
      </div>
    </div>
  </div>
  <div className="triangle-1" />
  <div className="triangle-2" />
  <div className="hero-shape2">
    <img src="assets/img/hero/hero_shape_2_2.png" alt="shape" />
  </div>
  <div className="hero-shape3">
    <img src="assets/img/hero/hero_shape_2_3.png" alt="shape" />
  </div>
</div>

  </>
  )
}

export default Hero