import React from 'react';

const Navbar = () => {
  const navStyles = `
    .badge-strip {
      background: #0a0f1e;
      color: #a5b4fc;
      font-family: 'Syne', sans-serif;
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 0.12em;
      text-align: center;
      padding: 9px;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 101;
    }
    .badge-strip span { color: #fff; }

    nav {
      position: fixed;
      top: 36px;
      left: 0;
      right: 0;
      z-index: 100;
      background: rgba(247,248,252,0.88);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(10,15,30,0.08);
      padding: 0 5%;
    }
    .nav-inner {
      max-width: 1280px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 68px;
    }
    .logo {
      font-family: 'Syne', sans-serif;
      font-weight: 800;
      font-size: 1.1rem;
      color: #0a0f1e;
      letter-spacing: -0.02em;
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
    }
    .logo-dot {
      width: 10px;
      height: 10px;
      background: #1a56db;
      border-radius: 50%;
    }
    .nav-links {
      display: flex;
      align-items: center;
      gap: 2rem;
    }
    .nav-links a {
      font-size: 0.875rem;
      font-weight: 500;
      color: #3d4860;
      text-decoration: none;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: #0a0f1e; }
    .nav-cta {
      background: #0a0f1e;
      color: #fff;
      font-family: 'Syne', sans-serif;
      font-weight: 700;
      font-size: 0.8rem;
      letter-spacing: 0.05em;
      padding: 10px 22px;
      border-radius: 8px;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    @media (max-width: 768px) {
      .nav-links { display: none; }
    }
  `;

  return (
    <>
      <style>{navStyles}</style>
      <div className="badge-strip">
        ⚡ Government-Certified Supplier &nbsp;|&nbsp; <span>GST · NSIC · UDYAM Registered</span>
      </div>
      <nav>
        <div className="nav-inner">
          <a href="/" className="logo">
            <div className="logo-dot" />
            Naveen CCTV & Solar
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#credentials">Credentials</a>
            <a href="#why">Why Us</a>
            <a href="#contact">Contact</a>
          </div>
          <a href="tel:09032840296" className="nav-cta">CALL NOW →</a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;