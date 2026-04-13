import React, { useState } from 'react';
import './LatestSection.css';

const LatestSection = () => {
  const [activeTab, setActiveTab] = useState('whatsnew');

  const tabs = [
    { id: 'whatsnew', label: "What's New" },
    { id: 'articles', label: 'Articles' },
    { id: 'whitepapers', label: 'Whitepapers' },
    { id: 'casestudies', label: 'Case Studies' },
    { id: 'newsmedia', label: 'News & Media' }
  ];

  const content = {
    whatsnew: [
      {
        title: 'State-led Urban Digital Transformation',
        date: '13 Mar 2026',
        authors: 'T Krishnakumar +2 More',
        updateDate: '07 Apr 2026',
        tags: ['Local Governance'],
        image: 'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/04/07105155/solvernetwork-thumb.webp',
        bgColor: '#e6f3fb'
      },
      {
        title: 'State-led Urban Digital Transformation',
        date: '13 Mar 2026',
        authors: 'Mathews P Joseph +2 More',
        updateDate: '07 Apr 2026',
        tags: ['Odisha', 'Kerala', 'Local Governance', 'Andhra Pradesh', 'Punjab'],
        image: 'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2026/03/13060122/State-led-Thumb.jpg',
        bgColor: '#e6f3fb'
      },
      {
        title: 'State-led Urban Digital Transformation',
        date: '13 Mar 2026',
        authors: 'eGov Foundation +2 More',
        updateDate: '20 Jan 2026',
        tags: [],
        image: 'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/12/24103813/DOT-September-Thumb.jpg',
        bgColor: '#e6f3fb'
      }
    ],
    articles: [
      {
        title: 'From Goa to the Globe: How Pravimal Abhishek led the GIDC',
        date: '25 Jul 2025',
        tag: 'Article',
        image: 'https://placehold.co/400x250/00B5CA/white?text=Article'
      },
      {
        title: "Tech for Billions, Talent for None: Fixing GovTech's Biggest Gap",
        date: '10 Mar 2025',
        tag: 'Article',
        image: 'https://placehold.co/400x250/00B5CA/white?text=Article'
      },
      {
        title: 'From Systems to Ecosystems: A Shared Journey to Build Digital Public Goods',
        date: '10 Jan 2025',
        tag: 'Article',
        image: 'https://placehold.co/400x250/00B5CA/white?text=Article'
      }
    ]
  };

  return (
    <section className="latest-section">
      <div className="container">
        <div className="latest-heading-wrapper">
          <h2 className="latest-heading-light">
            Latest at <strong className="latest-heading-bold">eGov</strong>
          </h2>
        </div>

        <ul className="nav nav-pills mb-5 gap-2">
          {tabs.map(tab => (
            <li className="nav-item" key={tab.id}>
              <button
                className={`nav-link btn-style-2 ${activeTab === tab.id ? 'active' : ''}`}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: activeTab === tab.id ? 'var(--primary-blue)' : 'transparent',
                  color: activeTab === tab.id ? 'white' : 'black',
                  border: 'none',
                  borderRadius: '20px'
                }}
              >
                {tab.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="row">
          {content[activeTab] && content[activeTab].map((item, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="resource-card" style={{ backgroundColor: item.bgColor || '#e6f3fb' }}>
                <img src={item.image} alt={item.title} />
                <div className="resource-body">
                  {item.tag && <span className="resource-tag">{item.tag}</span>}
                  <h5>{item.title}</h5>
                  <p className="text-muted small mt-2">{item.date}</p>
                  {item.authors && (
                    <div className="d-flex align-items-start flex-wrap">
                      <ul className="d-flex align-items-center list-unstyled mb-0">
                        <li className="d-flex align-items-center me-3">
                          <div className="dot-style-2"></div>
                          <span className="text-style-6 blue-2 ms-2 fs-10-sm">{item.authors}</span>
                        </li>
                        <li className="d-flex align-items-center me-3">
                          <div className="dot-style-2"></div>
                          <span className="text-style-6 blue-2 ms-2 fs-10-sm">{item.updateDate}</span>
                        </li>
                      </ul>
                    </div>
                  )}
                  {item.tags && item.tags.map((tag, idx) => (
                    <span key={idx} className="resource-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <a href="#" className="btn-style-1">See all</a>
        </div>
      </div>
    </section>
  );
};

export default LatestSection;