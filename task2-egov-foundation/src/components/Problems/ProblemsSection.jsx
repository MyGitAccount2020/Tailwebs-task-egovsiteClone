import React, { useState } from 'react';
import './Problems.css';

const ProblemsSection = () => {
  const [activeTab, setActiveTab] = useState('publicHealth');

  const tabs = [
    { id: 'publicHealth', label: 'Public Health' },
    { id: 'publicFinance', label: 'Public Finance' },
    { id: 'localGovernance', label: 'Local Governance' },
    { id: 'waterSanitation', label: 'Water & Sanitation' }
  ];

  const content = {
    publicHealth: [
      {
        number: '210+',
        description: 'cities LIVE with 10BedICU across India',
        image: 'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/08/ICU-Equipment.G16.2k-1-3.png',
        custom: false
      },
      {
        number: '2 Bn',
        description: 'COVID-19 vaccination certificates issued',
        image: 'https://egov-website-content.s3.ap-south-1.amazonaws.com/wp-content/uploads/2025/10/covid-vaccine-1.png',
        custom: true
      }
    ],
    publicFinance: [
      {
        number: '5000+',
        description: 'rural local bodies managing revenue & expenditure',
        image: 'https://placehold.co/400x250/00B5CA/white?text=Revenue+Management',
        custom: false
      },
      {
        number: '4000+',
        description: 'empowered women Self Help Groups',
        image: 'https://placehold.co/400x250/00B5CA/white?text=Women+Empowerment',
        custom: false
      }
    ],
    localGovernance: [
      {
        number: '70%',
        description: 'improved quality of life in Punjab, India',
        image: 'https://placehold.co/400x250/00B5CA/white?text=Urban+Governance',
        custom: false
      },
      {
        number: '250%',
        description: 'increase in revenue mobilisation in Andhra Pradesh',
        image: 'https://placehold.co/400x250/00B5CA/white?text=Revenue+Mobilization',
        custom: false
      }
    ],
    waterSanitation: [
      {
        number: '148Mn',
        description: 'households with access to drinking water',
        image: 'https://placehold.co/400x250/00B5CA/white?text=Drinking+Water',
        custom: false
      },
      {
        number: 'DPI',
        description: 'for Sanitation: A reimagined approach',
        image: 'https://placehold.co/400x250/00B5CA/white?text=Sanitation',
        custom: false
      }
    ]
  };

  return (
    <section className="problems-section">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5">
            <h2 className="section-title">
              Big problems need <br />
              <strong>bold approaches</strong>
            </h2>
            <div className="nav nav-tabs-custom flex-column mt-4">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  className={`nav-link ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
          <div className="col-lg-7">
            <div className="row">
              {content[activeTab].map((item, index) => (
                <div className="col-md-6" key={index}>
                  {item.custom ? (
                    <div className="custom-grid-card">
                      <img src={item.image} className="w-100" alt="" />
                      <div className="card-content">
                        <div className="card-number">{item.number}</div>
                        <p>{item.description}</p>
                        <a href="#" className="btn-style-2 d-inline-block mt-2">Read More</a>
                      </div>
                    </div>
                  ) : (
                    <div className="grid-card">
                      <img src={item.image} className="w-100" alt="" />
                      <div className="card-content">
                        <div className="card-number">{item.number}</div>
                        <p>{item.description}</p>
                        <a href="#" className="btn-style-2 d-inline-block mt-2">Read More</a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;