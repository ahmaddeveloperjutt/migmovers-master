import React, { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Selection from './components/Selection';
import Features from './components/Features';
import Counter from './components/Counter';
import Package from './components/Package';
import Process from './components/Process';
import Testimonials from './components/Testimonial';
import ContactSection from './components/ContactSection';
import Map from './components/Map';

function App() {
  const testimonialsRef = useRef(null);
  const contactSectionRef = useRef(null);
  const selectionRef = useRef(null);

  const handleScrollToTestimonials = () => {
    testimonialsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContactSection = () => {
    contactSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToSelection = () => {
    selectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header
        onScrollToTestimonials={handleScrollToTestimonials}
        onScrollToContactSection={handleScrollToContactSection}
        onScrollToSelection={handleScrollToSelection}
      />
      <Hero />
      <div ref={selectionRef}>
        <Selection />
      </div>
      <Features />
      <Counter />
      <Package />
      <Process />
      <div ref={testimonialsRef}>
        <Testimonials />
      </div>
      <div ref={contactSectionRef}>
        <ContactSection />
      </div>
      <Map />
    </>
  );
}

export default App;
