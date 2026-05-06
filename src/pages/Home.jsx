import React, { useEffect, useRef } from 'react';

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observerRef.current.observe(el));
    return () => observerRef.current?.disconnect();
  }, []);

  const styles = `
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,700;12..96,800&family=Inter:wght@400;500;600;700&display=swap');
    
    :root {
      --primary: #1a56db;
      --navy: #0a0f1e;
      --slate: #475569;
      --light-slate: #64748b;
      --bg: #fdfdfd;
      --grid: rgba(10, 21, 30, 0.04);
      --font-heading: 'Bricolage Grotesque', sans-serif;
      --font-body: 'Inter', sans-serif;
    }

    .home-root { 
      font-family: var(--font-body); 
      background: var(--bg); 
      color: var(--navy); 
      overflow-x: hidden;
      scroll-behavior: smooth;
    }
    
    .blueprint-bg {
      background-image: 
        linear-gradient(var(--grid) 1.5px, transparent 1.5px), 
        linear-gradient(90deg, var(--grid) 1.5px, transparent 1.5px);
      background-size: 50px 50px;
    }

    /* --- Hero --- */
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding: 160px 8% 100px;
      position: relative;
    }

    .hero-inner { 
      max-width: 1400px; 
      margin: 0 auto; 
      display: grid; 
      grid-template-columns: 1.2fr 0.8fr; 
      gap: 100px; 
      width: 100%; 
      align-items: center;
    }

    .hero h1 {
      font-family: var(--font-heading);
      font-weight: 800;
      font-size: clamp(3rem, 6vw, 4.5rem);
      line-height: 1;
      margin-bottom: 32px;
      letter-spacing: -0.03em;
    }

    .hero h1 em {
      font-style: normal;
      background: linear-gradient(135deg, var(--primary), #0d9488, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .btn-primary { 
      background: var(--primary); 
      color: #fff; 
      padding: 18px 40px; 
      border-radius: 14px; 
      font-weight: 700; 
      text-decoration: none;
      display: inline-block;
      transition: all 0.3s;
    }

    .btn-primary:hover { transform: translateY(-4px); }

    /* --- Refined Stats Banner --- */
    .stats-banner { 
      background: var(--navy); 
      padding: 120px 8%; 
      color: white;
      border-radius: 60px 60px 0 0;
      margin-top: -60px;
      position: relative;
      z-index: 2;
    }

    .stats-inner { 
      max-width: 1400px; 
      margin: 0 auto; 
      display: grid; 
      grid-template-columns: repeat(4, 1fr); 
      gap: 40px;
    }

    .stat-item { text-align: center; }

    .stat-num { 
      font-family: var(--font-heading); 
      font-size: 4rem; 
      font-weight: 800; 
      color: #3b82f6; 
      margin-bottom: 16px; /* Space between number and text */
      line-height: 1;
    }

    .stat-label { 
      opacity: 0.7; 
      font-weight: 600; 
      font-size: 0.9rem; 
      letter-spacing: 2px;
      text-transform: uppercase;
      display: block;
    }

    /* --- Contact & Profile Center --- */
    .contact-section {
      padding: 140px 8%;
      background: #fff;
    }

    .contact-wrapper {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
    }

    .profile-card {
      background: #f8fafc;
      padding: 60px 40px;
      border-radius: 48px;
      border: 1px solid #e2e8f0;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 60px;
    }

    .profile-img {
      width: 220px;
      height: 220px;
      border-radius: 50%;
      object-fit: cover;
      margin-bottom: 32px;
      border: 8px solid #fff;
      box-shadow: 0 30px 60px rgba(0,0,0,0.1);
    }

    .profile-name {
      font-family: var(--font-heading);
      font-size: 2.5rem;
      font-weight: 800;
      margin-bottom: 8px;
    }

    .profile-title {
      color: var(--primary);
      font-weight: 700;
      font-size: 1rem;
      letter-spacing: 2px;
      text-transform: uppercase;
      margin-bottom: 40px;
    }

    .contact-info-horizontal {
      display: flex;
      gap: 40px;
      justify-content: center;
      flex-wrap: wrap;
      list-style: none;
      padding: 0;
    }

    .contact-info-horizontal li {
      font-weight: 600;
      font-size: 1.1rem;
      color: var(--navy);
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .expert-desc h2 {
      font-family: var(--font-heading);
      font-size: 3rem;
      margin-bottom: 24px;
      letter-spacing: -1px;
    }

    .expert-desc p {
      font-size: 1.25rem;
      line-height: 1.8;
      color: var(--slate);
      max-width: 800px;
      margin: 0 auto;
    }

    /* --- Rest of Styles --- */
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 30px;
      max-width: 1400px;
      margin: 0 auto;
      padding: 0 8% 100px;
    }

    .service-card {
      background: #fff;
      border: 1px solid rgba(10, 15, 30, 0.05);
      border-radius: 24px;
      padding: 40px;
    }

    .cred-strip {
      display: flex;
      justify-content: center;
      gap: 40px;
      flex-wrap: wrap;
      padding: 80px 8%;
    }
    
    .cred-item {
      padding: 12px 24px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      font-weight: 700;
      font-size: 0.75rem;
      color: var(--primary);
    }

    .fade-in { opacity: 0; transform: translateY(40px); transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1); }
    .fade-in.visible { opacity: 1; transform: translateY(0); }

    @media (max-width: 1024px) {
      .stats-inner { grid-template-columns: repeat(2, 1fr); }
      .hero-inner { grid-template-columns: 1fr; text-align: center; }
      .contact-info-horizontal { flex-direction: column; gap: 20px; }
    }
    @media (max-width: 768px) {
      .stats-inner { grid-template-columns: 1fr; }
      .services-grid { grid-template-columns: 1fr; }
    }
  `;

  return (
    <div className="home-root blueprint-bg">
      <style>{styles}</style>
      
      <section className="hero">
        <div className="hero-inner">
          <div className="fade-in visible">
            <div style={{ background: 'rgba(26, 86, 219, 0.08)', color: 'var(--primary)', padding: '8px 20px', borderRadius: '100px', display: 'inline-block', marginBottom: '32px', fontWeight: 800, fontSize: '0.75rem', letterSpacing: '1.5px' }}>
                SECURE · SUSTAINABLE · EST. 2018
            </div>
            <h1>Enterprise Security & <em>Solar Infrastructure</em></h1>
            <p style={{ color: 'var(--slate)', fontSize: '1.25rem', marginBottom: '48px', lineHeight: '1.6', maxWidth: '600px' }}>
              Naveen CCTV & Solar delivers production-ready surveillance and renewable energy systems 
              for government and industrial stakeholders across Hyderabad.
            </p>
            <a href="#contact" className="btn-primary">Contact Us Now →</a>
          </div>
          <div className="fade-in visible" style={{ textAlign: 'center' }}>
            <img 
              src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=800" 
              alt="Security Infrastructure" 
              style={{ borderRadius: '48px', width: '100%', boxShadow: '0 40px 80px rgba(10, 15, 30, 0.12)' }} 
            />
          </div>
        </div>
      </section>

      <section className="stats-banner">
        <div className="stats-inner">
          {[
            { num: '500+', label: 'Projects Completed' },
            { num: '6yr', label: 'In Operation' },
            { num: '3×', label: 'Govt. Certified' },
            { num: '24/7', label: 'Active Support' }
          ].map((s, i) => (
            <div key={i} className="stat-item fade-in">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '120px 0', background: '#f8fafc' }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="fade-in">
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '3.5rem', fontWeight: 800 }}>Core Capabilities</h2>
        </div>
        <div className="services-grid">
          {[
            { icon: '☀️', title: 'Solar Surveillance', desc: 'Autonomous 4G solar monitoring engineered for remote industrial landscapes.' },
            { icon: '📹', title: 'HD CCTV Networks', desc: 'High-density IP security architecture customized for Hyderabad’s enterprise hubs.' },
            { icon: '🏗️', title: 'Infrastructure Design', desc: 'Strategic end-to-end security architecture and command center deployment.' }
          ].map((s, i) => (
            <div key={i} className="service-card fade-in">
              <div style={{ fontSize: '2.5rem', marginBottom: '20px' }}>{s.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 800, fontSize: '1.4rem', marginBottom: '15px' }}>{s.title}</h3>
              <p style={{ color: 'var(--light-slate)', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-wrapper">
          <div className="profile-card fade-in">
            <img 
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" 
              alt="Naveen - Founder" 
              className="profile-img"
            />
            <h3 className="profile-name">Naveen</h3>
            <span className="profile-title">Founder & Technical Lead</span>
            <ul className="contact-info-horizontal">
              <li>📞 +91 90328 40296</li>
              <li>📍 Hyderabad, Telangana</li>
              <li>💼 Project Consultation</li>
            </ul>
          </div>
          
          <div className="expert-desc fade-in">
            <h2>The Expert Behind <br/><em>Naveen CCTV & Solar</em></h2>
            <p>
              With over 6 years of dedicated experience in the security and renewable energy sector, 
              Naveen has pioneered integrated surveillance solutions across Telangana. Specializing 
              in "Made in India" solar technologies and high-density CCTV networks, he bridges the 
              gap between robust physical security and sustainable energy infrastructure.
            </p>
          </div>
        </div>
      </section>

      <div className="cred-strip fade-in">
        {['GST REGISTERED', 'NSIC CERTIFIED', 'UDYAM MSME', 'MADE IN INDIA'].map((c, i) => (
          <div key={i} className="cred-item">{c}</div>
        ))}
      </div>

      <footer style={{ background: 'var(--navy)', color: '#fff', padding: '60px 8%', textAlign: 'center' }}>
        <p style={{ opacity: 0.6 }}>© {new Date().getFullYear()} NAVEEN CCTV CAMERA & SOLAR CAMERA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;