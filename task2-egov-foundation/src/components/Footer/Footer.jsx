import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mb-4">
              <img 
                src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/25123706/eGov-Foundation.png"
                alt="eGov Foundation" 
                className="footer-logo"
              />
              <p className="footer-description">
                Catalysing digital transformation in public service delivery at speed & scale.
              </p>
              <div className="social-icons">
                <a href="https://www.facebook.com/egovfoundation" aria-label="Facebook">
                  <svg aria-hidden="true" viewBox="0 0 320 512" width="16" height="16">
                    <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z" fill="currentColor"></path>
                  </svg>
                </a>
                <a href="https://x.com/egovfoundation" aria-label="Twitter">
                  <svg aria-hidden="true" viewBox="0 0 512 512" width="16" height="16">
                    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" fill="currentColor"></path>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/egovfoundation/" aria-label="LinkedIn">
                  <svg aria-hidden="true" viewBox="0 0 448 512" width="16" height="16">
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" fill="currentColor"></path>
                  </svg>
                </a>
                <a href="https://www.youtube.com/channel/UCJKHU1dQRrj2zdf6h2yHo_g" aria-label="YouTube">
                  <svg aria-hidden="true" viewBox="0 0 576 512" width="16" height="16">
                    <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305z" fill="currentColor"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <h5>Useful Links</h5>
              <div className="useful-links-grid">
                <ul className="footer-links">
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Our Impact</a></li>
                  <li><a href="#">DIGIT Sandbox</a></li>
                </ul>
                <ul className="footer-links">
                  <li><a href="#">Our People</a></li>
                  <li><a href="#">Financials</a></li>
                  <li><a href="#">Contact Us</a></li>
                </ul>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mb-4">
              <h5>Subscribe Now</h5>
              <p className="newsletter-text">
                Receive regular updates of our monthly newsletter DOT – in your inbox.
              </p>
              <div className="newsletter-wrapper">
                <form className="newsletter-form" onSubmit={handleSubmit}>
                  <div className="input-group">
                    <input 
                      type="email" 
                      className="newsletter-input" 
                      placeholder="Enter Your Email" 
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit" className="newsletter-button"></button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="copyright-text">©2024. eGov. All Rights Reserved.</div>
          <div className="footer-legal-links">
            <a href="#">Privacy Policy</a>
            <span className="separator-dot"></span>
            <a href="#">Terms and Conditions</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;