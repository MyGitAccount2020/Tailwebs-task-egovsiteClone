import React from 'react';
import './Supporters.css';

const SupportersSection = () => {
  const supporters = [
    'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/Group-20708-1.png',
    'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-4.png',
    'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-3.png',
    'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-2.png',
    'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/06/sup-1.png'
  ];

  return (
    <section className="supporters-section">
      <div className="container">
        <div className="text-center mb-5">
          <p className="section-title-our-supporters1">
            Our <strong className="section-title-our-supporters2">Supporters</strong>
          </p>
        </div>
        <div className="row align-items-center justify-content-center">
          {supporters.map((logo, index) => (
            <div className="col-md-2 col-6 mb-4 text-center" key={index}>
              <img src={logo} className="supporter-logo" alt={`Supporter ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportersSection;