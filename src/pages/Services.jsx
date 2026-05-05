import React from 'react';

const Services = () => {
  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;600;700;800&display=swap');

    .services-container {
      font-family: 'Plus Jakarta Sans', sans-serif;
      background-color: #ffffff;
      background-image: 
        linear-gradient(#f1f5f9 1px, transparent 1px),
        linear-gradient(90deg, #f1f5f9 1px, transparent 1px);
      background-size: 40px 40px;
      min-height: 100vh;
      width: 100%;
      padding: 140px 5% 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .header-box {
      text-align: center;
      max-width: 800px;
      margin-bottom: 80px;
    }

    .service-badge {
      display: inline-block;
      padding: 8px 20px;
      border: 1px solid #e2e8f0;
      border-radius: 100px;
      font-size: 0.75rem;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: #2563eb;
      background: white;
      margin-bottom: 20px;
    }

    .grid-container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 30px;
      width: 100%;
      max-width: 1300px;
    }

    .expert-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      border: 1px solid #f1f5f9;
      border-radius: 24px;
      padding: 40px;
      transition: all 0.3s ease;
      box-shadow: 0 10px 30px rgba(0,0,0,0.02);
    }

    .expert-card:hover {
      transform: translateY(-10px);
      border-color: #3b82f6;
      box-shadow: 0 20px 40px rgba(59, 130, 246, 0.08);
    }

    .category-title {
      font-size: 1.4rem;
      font-weight: 800;
      color: #0f172a;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .service-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .service-item {
      font-size: 0.95rem;
      color: #64748b;
      padding: 8px 0;
      border-bottom: 1px solid #f8fafc;
      display: flex;
      justify-content: space-between;
    }

    .service-item:last-child { border-bottom: none; }

    .tag-india {
      font-size: 0.65rem;
      background: #fff7ed;
      color: #c2410c;
      padding: 2px 8px;
      border-radius: 4px;
      font-weight: 700;
    }
  `;

  return (
    <div className="services-container">
      <style>{styles}</style>
      
      <div className="header-box">
        <span className="service-badge">PRODUCTION-READY SOLUTIONS</span>
        <h1 style={{fontSize: '3.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '20px'}}>
          Specialized <span style={{color: '#2563eb'}}>Infrastructure</span>
        </h1>
        <p style={{color: '#64748b', fontSize: '1.1rem', lineHeight: '1.8'}}>
          Comprehensive security architecture and technical support for Hyderabad's 
          commercial and residential sectors since 2018.
        </p>
      </div>

      <div className="grid-container">
        {/* Surveillance & Video Systems */}
        <div className="expert-card">
          <div className="category-title">📹 Video Systems</div>
          <ul className="service-list">
            <li className="service-item">CCTV & DVR/NVR Systems</li>
            <li className="service-item">Wireless & Wire-less Security</li>
            <li className="service-item">Cloud & Remote Access</li>
            <li className="service-item">CCTV Maintenance & Repair</li>
            <li className="service-item">Motion Sensors & Video Analytics</li>
          </ul>
        </div>

        {/* Solar Security Solutions */}
        <div className="expert-card">
          <div className="category-title">☀️ Solar Innovations</div>
          <ul className="service-list">
            <li className="service-item">Solar Security Systems</li>
            <li className="service-item">Autonomous Solar Cameras</li>
            <li className="service-item">Solar Street Lights <span className="tag-india">MADE IN INDIA</span></li>
            <li className="service-item">Solar Lighting Solutions</li>
          </ul>
        </div>

        {/* Access & Alarm Systems */}
        <div className="expert-card">
          <div className="category-title">🔐 Access & Intrusion</div>
          <ul className="service-list">
            <li className="service-item">Access Control Systems</li>
            <li className="service-item">Burglar & Silent Alarms</li>
            <li className="service-item">Fire Alarm Systems</li>
            <li className="service-item">Intercoms & Monitoring</li>
            <li className="service-item">Electronic Security Gates</li>
          </ul>
        </div>

        {/* Physical Security */}
        <div className="expert-card">
          <div className="category-title">🚪 Physical Protection</div>
          <ul className="service-list">
            <li className="service-item">Security Doors & Bars</li>
            <li className="service-item">Residential Security Systems</li>
            <li className="service-item">Commercial Security Scaling</li>
            <li className="service-item">24/7 Monitoring Services</li>
          </ul>
        </div>

        {/* Tech & Data Security */}
        <div className="expert-card">
          <div className="category-title">💻 Digital Security</div>
          <ul className="service-list">
            <li className="service-item">Commercial & Residential Computer Security</li>
            <li className="service-item">Advanced Threat Prevention</li>
            <li className="service-item">Security Architecture Design</li>
            <li className="service-item">Enterprise Data Recovery</li>
          </ul>
        </div>

        {/* Global CTA Card */}
        <div className="expert-card" style={{background: '#0f172a', color: 'white', display: 'flex', flexDirection: 'column', justifyContent: 'center', textAlign: 'center'}}>
          <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>Need a Custom Survey?</h3>
          <p style={{color: '#94a3b8', fontSize: '0.9rem', marginBottom: '25px'}}>
            Professional site analysis for specialized security architecture in Hyderabad.
          </p>
          <a href="tel:09032840296" style={{
            background: '#2563eb', 
            color: 'white', 
            padding: '14px', 
            borderRadius: '12px', 
            textDecoration: 'none', 
            fontWeight: 700
          }}>Contact Expert Now</a>
        </div>
      </div>
    </div>
  );
};

export default Services;