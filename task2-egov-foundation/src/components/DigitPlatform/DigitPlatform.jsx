import React from 'react';
import './DigitPlatform.css';

const DigitPlatform = () => {
  return (
    <section className="digit-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img 
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/10/digit-n.png"
              alt="DIGIT" 
              className="digit-logo"
            />
            <h2 className="section-title text-white">
              Our open source <br />
              <strong>technology-for-good platform</strong>
            </h2>
            <p className="mt-3 text-white-50">
              DIGIT, short for Digital Infrastructure for Governance, Inclusion and Transformation is eGov's
              open-source platform with reusable building blocks and shared data registries that can be used
              to build solutions in multiple sectors.
            </p>
            <div className="mt-4">
              <a href="#" className="btn-style-5">Explore the platform</a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
            <img 
              src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/22154549/DIGIT-Image-Only.png"
              alt="DIGIT Platform" 
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DigitPlatform;