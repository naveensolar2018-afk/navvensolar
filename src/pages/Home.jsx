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
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500;700&display=swap');
    
    :root {
      --primary: #1a56db;
      --navy: #0a0f1e;
      --slate: #475569;
      --light-slate: #64748b;
      --bg: #fdfdfd;
      --grid: rgba(10, 21, 30, 0.04);
    }

    .home-root { 
      font-family: 'DM Sans', sans-serif; 
      background: var(--bg); 
      color: var(--navy); 
      overflow-x: hidden;
    }
    
    /* 50px Blueprint Grid Background */
    .blueprint-bg {
      background-image: 
        linear-gradient(var(--grid) 1.5px, transparent 1.5px), 
        linear-gradient(90deg, var(--grid) 1.5px, transparent 1.5px);
      background-size: 50px 50px;
    }

    /* Hero Section Refinement */
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

    .hero-tag {
      background: rgba(26, 86, 219, 0.08);
      color: var(--primary);
      font-family: 'Syne', sans-serif;
      font-size: 0.75rem;
      font-weight: 800;
      padding: 8px 20px;
      border-radius: 100px;
      margin-bottom: 32px;
      display: inline-flex;
      align-items: center;
      letter-spacing: 1.5px;
      border: 1px solid rgba(26, 86, 219, 0.1);
    }

    .hero h1 {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: clamp(3rem, 6vw, 4.5rem);
      line-height: 1;
      margin-bottom: 32px;
      letter-spacing: -0.05em;
      text-shadow: 0 10px 20px rgba(10, 15, 30, 0.05);
    }

    .hero h1 em {
      font-style: normal;
      background: linear-gradient(135deg, var(--primary), #0d9488, #8b5cf6);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero-p { 
      color: var(--slate); 
      font-size: 1.25rem; 
      margin-bottom: 48px; 
      line-height: 1.6;
      max-width: 600px;
    }

    .btn-group { display: flex; gap: 24px; align-items: center; }

    .btn-primary { 
      background: var(--primary); 
      color: #fff; 
      padding: 18px 40px; 
      border-radius: 14px; 
      font-weight: 700; 
      text-decoration: none;
      box-shadow: 0 10px 25px rgba(26, 86, 219, 0.25);
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .btn-primary:hover {
      transform: translateY(-4px);
      box-shadow: 0 15px 35px rgba(26, 86, 219, 0.35);
    }

    .btn-secondary { 
      padding: 18px 32px; 
      color: var(--navy); 
      font-weight: 700; 
      text-decoration: none;
      border-radius: 14px;
      border: 1px solid rgba(10, 15, 30, 0.1);
      transition: all 0.3s;
    }

    .btn-secondary:hover { background: #fff; border-color: var(--navy); }

    /* Stats Banner - Authoritative Deep Tone */
    .stats-banner { 
      background: var(--navy); 
      padding: 100px 8%; 
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
      text-align: center;
      gap: 40px;
    }
    .stat-num { 
      font-family: 'Syne', sans-serif; 
      font-size: 3.5rem; 
      font-weight: 800; 
      color: #3b82f6; 
      margin-bottom: 8px;
    }
    .stat-label { 
      opacity: 0.6; 
      font-weight: 500; 
      font-size: 0.9rem; 
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    /* 3-Column, 2-Row Modern Service Grid */
    .services-section { padding: 140px 8%; background: #f8fafc; }
    .services-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 40px;
      max-width: 1400px;
      margin: 0 auto;
    }

    .service-card {
      background: #fff;
      border: 1px solid rgba(10, 15, 30, 0.05);
      border-radius: 32px;
      padding: 50px;
      transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
      position: relative;
    }

    .service-card:hover { 
      transform: translateY(-12px); 
      border-color: var(--primary); 
      box-shadow: 0 30px 60px rgba(0, 0, 0, 0.06); 
    }

    .icon-box { 
      font-size: 3rem; 
      margin-bottom: 30px; 
      background: #f1f5f9;
      width: 80px;
      height: 80px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 20px;
    }
    
    .sc-title { 
      font-family: 'Syne', sans-serif; 
      font-weight: 800; 
      font-size: 1.6rem; 
      margin-bottom: 20px; 
    }
    .sc-desc { color: var(--light-slate); line-height: 1.7; font-size: 1rem; }

    /* Credentials - Government Trust Strip */
    .cred-strip {
      display: flex;
      justify-content: center;
      gap: 60px;
      flex-wrap: wrap;
      padding: 100px 8%;
    }
    .cred-item {
      padding: 16px 32px;
      border: 1px solid #e2e8f0;
      border-radius: 12px;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 2px;
      color: var(--primary);
      background: #fff;
      box-shadow: 0 4px 12px rgba(0,0,0,0.03);
    }

    /* CTA Card - Production-Ready Engagement */
    .cta-card {
      background: linear-gradient(135deg, var(--navy) 0%, #1e293b 100%);
      padding: 120px 60px;
      border-radius: 60px;
      text-align: center;
      color: white;
      max-width: 1200px;
      margin: 100px auto;
      position: relative;
      overflow: hidden;
      box-shadow: 0 40px 100px rgba(10, 15, 30, 0.25);
    }

    .cta-card::before {
      content: "";
      position: absolute;
      top: -100px;
      right: -100px;
      width: 300px;
      height: 300px;
      background: radial-gradient(circle, rgba(26, 86, 219, 0.2) 0%, transparent 70%);
    }

    .cta-card h2 { font-family: 'Syne', sans-serif; font-size: clamp(2.5rem, 4vw, 3.5rem); margin-bottom: 24px; }
    .cta-p { opacity: 0.7; margin-bottom: 48px; font-size: 1.3rem; max-width: 700px; margin-left: auto; margin-right: auto; }

    .fade-in { opacity: 0; transform: translateY(40px); transition: 1s cubic-bezier(0.2, 0.8, 0.2, 1); }
    .fade-in.visible { opacity: 1; transform: translateY(0); }

    @media (max-width: 1100px) { .hero-inner { grid-template-columns: 1fr; text-align: center; } .hero-p { margin-left: auto; margin-right: auto; } .btn-group { justify-content: center; } .services-grid { grid-template-columns: repeat(2, 1fr); } }
    @media (max-width: 768px) { .services-grid { grid-template-columns: 1fr; } .stats-inner { grid-template-columns: repeat(2, 1fr); gap: 40px; } .hero h1 { font-size: 2.8rem; } }
  `;

  const featuredServices = [
    { icon: '☀️', title: 'Solar Surveillance', desc: 'Autonomous 4G solar monitoring engineered for remote industrial landscapes.' },
    { icon: '📹', title: 'HD CCTV Networks', desc: 'High-density IP security architecture customized for Hyderabad’s enterprise hubs.' },
    { icon: '🧠', title: 'AI Analytics', desc: 'Real-time facial recognition and boundary intelligence via advanced edge AI.' },
    { icon: '🔐', title: 'Access Management', desc: 'Biometric and electronic identity systems for government and high-security sites.' },
    { icon: '🏙️', title: 'Solar Illumination', desc: 'Made in India certified street lighting designed for industrial and civic infrastructure.' },
    { icon: '🏗️', title: 'Infrastructure Design', desc: 'Strategic end-to-end security architecture and command center deployment.' }
  ];

  return (
    <div className="home-root blueprint-bg">
      <style>{styles}</style>
      
      <section className="hero">
        <div className="hero-inner">
          <div className="fade-in visible">
            <div className="hero-tag">SECURE · SUSTAINABLE · EST. 2018</div>
            <h1>Enterprise Security & <em>Solar Infrastructure</em></h1>
            <p className="hero-p">
              Naveen CCTV & Solar delivers production-ready surveillance and renewable energy systems 
              for government and industrial stakeholders across Hyderabad.
            </p>
            <div className="btn-group">
              <a href="tel:09032840296" className="btn-primary">Deploy Now →</a>
              <a href="#services" className="btn-secondary">Technical Specs</a>
            </div>
          </div>
          <div className="fade-in visible" style={{ textAlign: 'right' }}>
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
            <div key={i} className="fade-in">
              <div className="stat-num">{s.num}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-section" id="services">
        <div style={{ textAlign: 'center', marginBottom: '80px' }} className="fade-in">
          <h2 style={{ fontFamily: 'Syne', fontSize: '3.5rem', fontWeight: 800 }}>Core Capabilities</h2>
          <p style={{ color: 'var(--light-slate)', fontSize: '1.2rem' }}>Engineered for industrial resilience and high-reliability environments.</p>
        </div>
        <div className="services-grid">
          {featuredServices.map((s, i) => (
            <div key={i} className="service-card fade-in">
              <div className="icon-box">{s.icon}</div>
              <h3 className="sc-title">{s.title}</h3>
              <p className="sc-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cred-strip fade-in">
        {['GST REGISTERED', 'NSIC CERTIFIED', 'UDYAM MSME', 'MADE IN INDIA'].map((c, i) => (
          <div key={i} className="cred-item">{c}</div>
        ))}
      </div>

      <section className="cta-card fade-in">
        <h2>Ready to Collaborate?</h2>
        <p className="cta-p">Partner with Hyderabad's certified security enterprise to turn your idea into a structured, production-ready solution.</p>
        <a href="tel:09032840296" className="btn-primary" style={{ background: '#fff', color: 'var(--navy)', fontSize: '1.1rem' }}>GET STARTED NOW</a>
      </section>
    </div>
  );
};

export default Home;