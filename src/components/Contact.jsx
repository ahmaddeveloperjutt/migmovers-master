import React from 'react'

const Contact = () => {
  return (
  <>
<div className="space">
  <div className="container">
    <div className="row gy-4">
      <div className="col-xl-4 col-md-6">
        <div className="contact-info">
          <div className="contact-info_icon">
            <i className="fas fa-location-dot" />
          </div>
          <div className="media-body">
            <h4 className="box-title">Our Office Address</h4>
            <span className="contact-info_text">MIG Movers
              562V+QMJ - Al Quoz - Al Quoz 4 - Dubai - United Arab Emirates</span>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="contact-info">
          <div className="contact-info_icon">
            <i className="fas fa-phone" />
          </div>
          <div className="media-body">
            <h4 className="box-title">Call Us Anytime</h4>
            <span className="contact-info_text">
              <a href="tel:+971504428369">+971504428369</a>
            </span>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-md-6">
        <div className="contact-info">
          <div className="contact-info_icon">
            <i className="fas fa-envelope" />
          </div>
          <div className="media-body">
            <h4 className="box-title">Send An Email</h4>
            <span className="contact-info_text">
              <a href="migmovers69@gmail.com">migmovers69@gmail.com</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  </>
  )
}

export default Contact