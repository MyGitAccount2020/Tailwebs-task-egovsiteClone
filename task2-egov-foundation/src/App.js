import React, { useEffect } from 'react';
import './App.css';
import TopNavbar from './components/Navbar/TopNavbar';
import MainNavbar from './components/Navbar/MainNavbar';
import HeroSection from './components/Hero/HeroSection';
import StatsSection from './components/Stats/StatsSection';
import ProblemsSection from './components/Problems/ProblemsSection';
import DigitPlatform from './components/DigitPlatform/DigitPlatform';
import LatestSection from './components/LatestSection/LatestSection';
import SupportersSection from './components/Supporters/SupportersSection';
import Footer from './components/Footer/Footer';

function App() {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-up');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.hero-title, .stat-number, .section-title, .resource-card').forEach(el => {
      observer.observe(el);
    });

    // Add scroll class to body
    const handleScroll = () => {
      if (window.scrollY > 50) {
        document.body.classList.add('scrolled');
      } else {
        document.body.classList.remove('scrolled');
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <TopNavbar />
      <MainNavbar />
      <HeroSection />
      <StatsSection />
      <ProblemsSection />
      <DigitPlatform />
      <LatestSection />
      <SupportersSection />
      <Footer />
    </div>
  );
}

export default App;