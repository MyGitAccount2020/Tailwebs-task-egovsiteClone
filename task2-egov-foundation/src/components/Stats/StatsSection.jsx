import React from 'react';
import './Stats.css';

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="container">
        <div className="row top-stats-row">
          <div className="col-lg-8">
            <div className="stat-big-number">1,000,000,000+</div>
          </div>
          <div className="col-lg-4">
            <div className="stat-label">
              Citizens availing public services through eGov's Digital Public Goods (DPG)
            </div>
          </div>
        </div>

        <div className="row bottom-stats-row">
          <div className="col-lg-4 text-center">
            <div className="stat-number">1.1 Billion+</div>
            <div className="stat-label">Public services delivered</div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="stat-number">50+ partners</div>
            <div className="stat-label">From technology, governments and NGOs</div>
          </div>
          <div className="col-lg-4 text-center">
            <div className="stat-number">5 Sectors</div>
            <div className="stat-label">Local Governance, Water &amp; Sanitation, Public Finance, Public Health</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;