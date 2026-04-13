import React from 'react';
import './Hero.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="hero-title">
              20 years of digital transformation in<br />public service delivery
              <span className="scroll-underline visible-line">It's possible.</span>
            </h1>
            <p className="mt-4 mb-4 text-muted hero-description">
              Catalysts. Ecosystem enablers. Problem Solvers. At eGov, we're driven by the power of open
              digital infrastructure and ecosystems to enable governments deliver accessible, inclusive and
              transparent services to every citizen.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="https://egov.org.in/about-us/our-approach/" className="btn-style-1">Our Approach</a>
              <a href="https://egov.org.in/about-us/our-impact/" className="btn-style-2">Our Impact</a>
            </div>
          </div>
          <div className="col-lg-5"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;