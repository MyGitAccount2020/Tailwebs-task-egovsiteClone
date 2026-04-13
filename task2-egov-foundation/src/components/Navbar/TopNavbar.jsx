import React, { useState } from 'react';
import './Navbar.css';

const TopNavbar = () => {
  const [showLanguageDropdown, setShowLanguageDropdown] = useState(false);

  const languages = [
    { code: 'af', name: 'Afrikaans', flag: 'za' },
    { code: 'en', name: 'English', flag: 'gb', current: true },
    { code: 'fr', name: 'French', flag: 'fr' },
    { code: 'de', name: 'German', flag: 'de' },
    { code: 'pt', name: 'Portuguese', flag: 'pt' },
    { code: 'ru', name: 'Russian', flag: 'ru' },
    { code: 'es', name: 'Spanish', flag: 'es' },
    { code: 'hi', name: 'Hindi', flag: 'in' },
    { code: 'zh-CN', name: 'Chinese (Simplified)', flag: 'cn' },
    { code: 'ja', name: 'Japanese', flag: 'jp' },
    { code: 'ko', name: 'Korean', flag: 'kr' },
    { code: 'ar', name: 'Arabic', flag: 'sa' },
  ];

  return (
    <div className="elementor-element-c58f992">
      <div className="elementor-element-09f5fe9">
        <div className="elementor-widget-uael-nav-menu">
          <div className="elementor-widget-container">
            <nav className="uael-nav-menu__layout-horizontal">
              <ul className="uael-nav-menu-custom">
                <li className="menu-item menu-item-has-children">
                  <a href="/events" className="uael-menu-item">
                    Events
                    <span className="uael-menu-toggle">
                      <i className="fa fa-chevron-down"></i>
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li><a href="#" className="uael-menu-item">Upcoming Events</a></li>
                    <li><a href="#" className="uael-menu-item">Past Events</a></li>
                    <li><a href="#" className="uael-menu-item">Webinars</a></li>
                  </ul>
                </li>
                
                <li className="menu-item menu-item-has-children">
                  <a href="/contact-us" className="uael-menu-item">
                    Contact us
                    <span className="uael-menu-toggle">
                      <i className="fa fa-chevron-down"></i>
                    </span>
                  </a>
                  <ul className="sub-menu">
                    <li><a href="#" className="uael-menu-item">Email Us</a></li>
                    <li><a href="#" className="uael-menu-item">Call Us</a></li>
                    <li><a href="#" className="uael-menu-item">Office Locations</a></li>
                    <li><a href="#" className="uael-menu-item">Support</a></li>
                  </ul>
                </li>

                <li className="menu-item">
                  <div className="gt_switcher_wrapper">
                    <a href="#" className="gt_switcher-popup" onClick={(e) => {
                      e.preventDefault();
                      setShowLanguageDropdown(!showLanguageDropdown);
                    }}>
                      <img src="https://flagcdn.com/w20/gb.png" width="20" height="20" alt="en" />
                      <span className="lang_text">ENG</span>
                      <span className="caret-icon">
                        <i className="fa-solid fa-caret-down"></i>
                      </span>
                    </a>
                    {showLanguageDropdown && (
                      <div className="gt_white_content">
                        <div className="gt_languages">
                          {languages.map(lang => (
                            <a 
                              key={lang.code}
                              href="#" 
                              className={`glink nturl ${lang.current ? 'gt-current-lang' : ''}`}
                              onClick={(e) => e.preventDefault()}
                            >
                              <img 
                                width="20" 
                                height="20" 
                                alt={lang.code}
                                src={`https://flagcdn.com/w20/${lang.flag}.png`}
                              />
                              <span className="lang_text">{lang.name}</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;