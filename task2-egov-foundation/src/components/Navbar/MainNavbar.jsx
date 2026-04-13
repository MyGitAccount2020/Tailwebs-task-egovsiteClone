import React, { useState } from 'react';
import './Navbar.css';

const MainNavbar = () => {
  const [showProductsMegaMenu, setShowProductsMegaMenu] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
    setShowProductsMegaMenu(false);
  };

  return (
    <div className="second-navbar">
      <div className="container-custom">
        <div className="nav-wrapper">
          <div className="logo">
            <a href="/">
              <img 
                width="120px" 
                height="40px" 
                style={{ marginTop: '10px' }}
                src="https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/25123706/eGov-Foundation.png"
                alt="eGov-Foundation"
              />
            </a>
          </div>
          
          <div>
            <ul className="main-nav-links">
              {/* About Us Dropdown */}
              <li 
                onMouseEnter={() => handleDropdownEnter('about')}
                onMouseLeave={handleDropdownLeave}
              >
                <a href="#">About Us <i className="fas fa-chevron-down dropdown-arrow"></i></a>
                {activeDropdown === 'about' && (
                  <ul className="regular-dropdown">
                    <li><a href="#">Who We Are</a></li>
                    <li><a href="#">Our Impact</a></li>
                    <li><a href="#">Our Approach</a></li>
                    <li><a href="#">Our People</a></li>
                    <li><a href="#">Awards & Recognition</a></li>
                    <li><a href="#">Work with us</a></li>
                    <li><a href="#">Contact Us</a></li>
                  </ul>
                )}
              </li>

              {/* Areas of Work Dropdown */}
              <li 
                onMouseEnter={() => handleDropdownEnter('areas')}
                onMouseLeave={handleDropdownLeave}
              >
                <a href="#">Areas of work <i className="fas fa-chevron-down dropdown-arrow"></i></a>
                {activeDropdown === 'areas' && (
                  <ul className="regular-dropdown">
                    <li><a href="#">Local Governance</a></li>
                    <li><a href="#">Water & Sanitation</a></li>
                    <li><a href="#">Public Health</a></li>
                    <li><a href="#">Public Finance</a></li>
                    <li><a href="#">Justice Delivery</a></li>
                    <li><a href="#">Other Sectors</a></li>
                  </ul>
                )}
              </li>

              {/* Products & Solutions - Mega Menu */}
              <li 
                onMouseEnter={() => setShowProductsMegaMenu(true)}
                onMouseLeave={() => setShowProductsMegaMenu(false)}
              >
                <a href="#">Products & Solutions <i className="fas fa-chevron-down dropdown-arrow"></i></a>
                {showProductsMegaMenu && (
                  <div className="mega-menu">
                    <div className="mega-menu-container">
                      <div className="mega-col blue-bg">
                        <h4>Areas of work</h4>
                        <ul>
                          <li><a href="#">Local Governance</a></li>
                          <li><a href="#">Public Health</a></li>
                          <li><a href="#">Public Finance</a></li>
                          <li><a href="#">Water & Sanitation</a></li>
                          <li><a href="#">Justice Delivery</a></li>
                          <li><a href="#">Other Sectors</a></li>
                        </ul>
                      </div>
                      <div className="mega-col white-bg">
                        <h4>Citizen & Commercial Services</h4>
                        <ul>
                          <li><a href="#">Citizen Complaint Resolution System</a></li>
                          <li><a href="#">Residential Construction Permit System</a></li>
                          <li><a href="#">Water & Sewerage Connections</a></li>
                          <li><a href="#">Local Business License Issuing System</a></li>
                          <li><a href="#">Birth & Death Certificate Issuance</a></li>
                          <li><a href="#">Fire Safety Certification (NOC)</a></li>
                          <li><a href="#">Dashboards & Analytics</a></li>
                          <li><a href="#">Works Management</a></li>
                        </ul>
                      </div>
                      <div className="mega-col white-bg">
                        <h4>Revenue Mobilisation</h4>
                        <ul>
                          <li><a href="#">Property Tax System</a></li>
                          <li><a href="#">mCollect (demand based revenue collection)</a></li>
                          <li><a href="#">Water Supply O&amp;M System</a></li>
                          <li><a href="#">Residential Construction Permit System</a></li>
                          <li><a href="#">Local Business License Issuing System</a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </li>

              {/* Other dropdowns similar structure */}
              <li 
                onMouseEnter={() => handleDropdownEnter('platform')}
                onMouseLeave={handleDropdownLeave}
              >
                <a href="#">Our Platform <i className="fas fa-chevron-down dropdown-arrow"></i></a>
                {activeDropdown === 'platform' && (
                  <ul className="regular-dropdown">
                    <li><a href="#">DIGIT</a></li>
                  </ul>
                )}
              </li>

              <li 
                onMouseEnter={() => handleDropdownEnter('ecosystem')}
                onMouseLeave={handleDropdownLeave}
              >
                <a href="#">Ecosystem <i className="fas fa-chevron-down dropdown-arrow"></i></a>
                {activeDropdown === 'ecosystem' && (
                  <ul className="regular-dropdown">
                    <li><a href="#">Partnerships</a></li>
                    <li><a href="#">Academy</a></li>
                    <li><a href="#">COE</a></li>
                    <li><a href="#">Community</a></li>
                  </ul>
                )}
              </li>

              <li 
                onMouseEnter={() => handleDropdownEnter('resources')}
                onMouseLeave={handleDropdownLeave}
              >
                <a href="#">Resources <i className="fas fa-chevron-down dropdown-arrow"></i></a>
                {activeDropdown === 'resources' && (
                  <ul className="regular-dropdown">
                    <li><a href="#">Articles</a></li>
                    <li><a href="#">Whitepapers</a></li>
                    <li><a href="#">Strategy papers</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">News & Media</a></li>
                    <li><a href="#">Videos</a></li>
                    <li><a href="#">Newsletters</a></li>
                  </ul>
                )}
              </li>
              
              <li>
                <div>
                  <i className="fas fa-search search-icon"></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;