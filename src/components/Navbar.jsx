import React, { useState } from 'react';

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const navStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Bricolage+Grotesque:wght@700;800&display=swap');

    :root{
      --bg-primary:rgba(255,255,255,.94);
      --bg-secondary:#05070a;
      --text-primary:#05070a;
      --accent:#2563eb;
      --border:rgba(0,0,0,.08);
      --shadow:0 10px 30px rgba(0,0,0,.08);
      --strip-text:#c7d2fe;
    }

    @media(prefers-color-scheme:dark){

      :root{
        --bg-primary:rgba(10,10,10,.92);
        --bg-secondary:#000000;
        --text-primary:#ffffff;
        --accent:#60a5fa;
        --border:rgba(255,255,255,.08);
        --shadow:0 10px 30px rgba(0,0,0,.45);
        --strip-text:#dbeafe;
      }

    }

    *{
      margin:0;
      padding:0;
      box-sizing:border-box;
    }

    html{
      scroll-behavior:smooth;
    }

    body{
      overflow-x:hidden;
      font-family:'Inter',sans-serif;
    }

    /* ================= TOP STRIP ================= */

    .badge-strip{
      position:fixed;
      top:0;
      left:0;
      right:0;

      z-index:10001;

      height:36px;

      display:flex;
      align-items:center;
      justify-content:center;

      padding:0 14px;

      background:var(--bg-secondary);

      border-bottom:
      1px solid rgba(255,255,255,.05);

      color:var(--strip-text);

      font-size:.72rem;
      font-weight:700;
      letter-spacing:.08em;

      text-align:center;
    }

    .badge-strip span{
      color:#ffffff;
      font-weight:800;
    }

    /* ================= NAVBAR ================= */

    nav{
      position:fixed;

      top:36px;
      left:0;
      right:0;

      z-index:10000;

      height:74px;

      display:flex;
      align-items:center;

      padding:0 5%;

      background:var(--bg-primary);

      backdrop-filter:blur(18px);
      -webkit-backdrop-filter:blur(18px);

      border-bottom:1px solid var(--border);

      box-shadow:var(--shadow);
    }

    .nav-inner{
      width:100%;
      max-width:1320px;

      margin:0 auto;

      display:flex;
      align-items:center;
      justify-content:space-between;

      gap:18px;
    }

    /* ================= LOGO ================= */

    .logo{
      display:flex;
      align-items:center;

      gap:12px;

      text-decoration:none;

      color:var(--text-primary)!important;

      font-family:'Bricolage Grotesque',sans-serif;
      font-size:1.15rem;
      font-weight:800;

      letter-spacing:-.03em;

      white-space:nowrap;

      transition:.25s ease;
    }

    .logo:hover{
      transform:translateY(-1px);
      opacity:.92;
    }

    .logo-dot{
      width:11px;
      height:11px;

      border-radius:50%;

      background:
      linear-gradient(
        135deg,
        #2563eb,
        #60a5fa
      );

      flex-shrink:0;

      box-shadow:
      0 0 0 4px rgba(37,99,235,.12),
      0 0 18px rgba(37,99,235,.45);
    }

    /* ================= DESKTOP LINKS ================= */

    .desktop-links{
      display:flex;
      align-items:center;

      gap:2rem;

      margin-left:auto;
    }

    .desktop-links a{
      position:relative;

      text-decoration:none;

      color:var(--text-primary)!important;

      font-size:.92rem;
      font-weight:700;

      transition:.25s ease;
    }

    .desktop-links a::after{
      content:'';

      position:absolute;

      left:0;
      bottom:-7px;

      width:0%;
      height:2px;

      border-radius:999px;

      background:var(--accent);

      transition:width .25s ease;
    }

    .desktop-links a:hover{
      color:var(--accent)!important;
    }

    .desktop-links a:hover::after{
      width:100%;
    }

    /* ================= CTA ================= */

    .nav-cta{
      display:inline-flex;
      align-items:center;
      justify-content:center;

      min-height:44px;

      padding:0 22px;

      border-radius:12px;

      background:
      linear-gradient(
        135deg,
        #05070a,
        #111827
      );

      color:#ffffff!important;

      text-decoration:none;

      font-family:'Bricolage Grotesque',sans-serif;

      font-size:.76rem;
      font-weight:800;

      letter-spacing:.08em;

      transition:.25s ease;

      box-shadow:
      0 10px 20px rgba(0,0,0,.16),
      inset 0 1px 0 rgba(255,255,255,.08);
    }

    .nav-cta:hover{
      transform:translateY(-2px);
    }

    /* ================= MOBILE TOGGLE ================= */

    .mobile-toggle{
      display:none;

      width:46px;
      height:46px;

      border:none;
      outline:none;

      cursor:pointer;

      border-radius:14px;

      background:
      rgba(37,99,235,.08);

      align-items:center;
      justify-content:center;
      flex-direction:column;

      gap:5px;

      transition:.3s ease;
    }

    .mobile-toggle:hover{
      background:
      rgba(37,99,235,.14);
    }

    .mobile-toggle span{
      width:20px;
      height:2px;

      border-radius:999px;

      background:var(--text-primary);

      transition:.3s ease;
    }

    .mobile-toggle.active span:nth-child(1){
      transform:
      rotate(45deg)
      translate(5px,5px);
    }

    .mobile-toggle.active span:nth-child(2){
      opacity:0;
    }

    .mobile-toggle.active span:nth-child(3){
      transform:
      rotate(-45deg)
      translate(5px,-5px);
    }

    /* ================= MOBILE MENU ================= */

    .mobile-menu{
      position:fixed;

      top:102px;
      left:14px;
      right:14px;

      z-index:9999;

      background:
      rgba(255,255,255,.97);

      backdrop-filter:blur(20px);

      border:
      1px solid rgba(0,0,0,.08);

      border-radius:24px;

      padding:20px;

      display:flex;
      flex-direction:column;

      gap:10px;

      opacity:0;
      visibility:hidden;

      transform:translateY(-10px);

      transition:.3s ease;

      box-shadow:
      0 20px 45px rgba(0,0,0,.12);
    }

    .mobile-menu.show{
      opacity:1;
      visibility:visible;

      transform:translateY(0);
    }

    .mobile-menu a{
      text-decoration:none;

      color:#111827;

      font-size:.95rem;
      font-weight:700;

      padding:14px 16px;

      border-radius:14px;

      transition:.25s ease;
    }

    .mobile-menu a:hover{
      background:
      rgba(37,99,235,.08);

      color:#2563eb;

      transform:translateX(4px);
    }

    .mobile-call{
      margin-top:10px!important;

      display:flex;
      align-items:center;
      justify-content:center;

      padding:15px;

      border-radius:16px;

      background:
      linear-gradient(
        135deg,
        #2563eb,
        #1d4ed8
      ) !important;

      color:#ffffff!important;

      font-family:'Bricolage Grotesque',sans-serif;

      letter-spacing:.05em;
    }

    /* ================= TABLET ================= */

    @media(max-width:1024px){

      .desktop-links{
        display:none !important;
      }

      .nav-cta{
        display:none;
      }

      .mobile-toggle{
        display:flex;
        margin-left:auto;
      }

      nav{
        padding:0 20px;
      }

    }

    /* ================= MOBILE ================= */

    @media(max-width:768px){

      .badge-strip{
        height:34px;

        font-size:.55rem;

        letter-spacing:.03em;

        padding:0 10px;

        line-height:1.3;
      }

      nav{
        top:34px;

        height:70px;

        padding:0 16px;
      }

      .nav-inner{
        gap:12px;
      }

      .logo{
        font-size:.82rem;

        max-width:75%;

        overflow:hidden;
        text-overflow:ellipsis;

        gap:10px;
      }

      .logo-dot{
        width:9px;
        height:9px;
      }

      .mobile-toggle{
        width:44px;
        height:44px;

        border-radius:12px;

        flex-shrink:0;
      }

      .mobile-menu{
        top:94px;

        left:12px;
        right:12px;
      }

    }

    /* ================= SMALL MOBILE ================= */

    @media(max-width:480px){

      .badge-strip{
        font-size:.48rem;

        padding:0 8px;
      }

      nav{
        padding:0 12px;
      }

      .logo{
        font-size:.72rem;

        max-width:72%;
      }

      .mobile-toggle{
        width:42px;
        height:42px;
      }

      .mobile-menu{
        top:92px;

        padding:18px;
      }

    }

    /* ================= ULTRA SMALL ================= */

    @media(max-width:360px){

      .logo{
        font-size:.64rem;
      }

      .badge-strip{
        font-size:.42rem;
      }

    }
  `;

  return (
    <>
      <style>{navStyles}</style>

      {/* TOP STRIP */}

      <div className="badge-strip">
        ⚡ Government-Certified Supplier &nbsp;|&nbsp;
        <span> GST · NSIC · UDYAM Registered </span>
      </div>

      {/* NAVBAR */}

      <nav>

        <div className="nav-inner">

          {/* LOGO */}

          <a href="/" className="logo">
            <div className="logo-dot" />
            NAVEEN SOLAR & CCTV
          </a>

          {/* DESKTOP LINKS */}

          <div className="desktop-links">

            <a href="/#services">
              Services
            </a>

            <a href="/#pricing">
              Pricing
            </a>

            <a href="/#solar">
              Solar
            </a>

            <a href="/#contact">
              Contact
            </a>

          </div>

          {/* DESKTOP CTA */}

          <a
            href="tel:+919032840296"
            className="nav-cta"
          >
            CALL NOW
          </a>

          {/* MOBILE TOGGLE */}

          <button
            className={`mobile-toggle ${mobileMenu ? 'active' : ''}`}
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            <span />
            <span />
            <span />
          </button>

        </div>

      </nav>

      {/* MOBILE MENU */}

      <div
        className={`mobile-menu ${mobileMenu ? 'show' : ''}`}
      >

        <a
          href="/"
          onClick={() => setMobileMenu(false)}
        >
          Home
        </a>

        <a
          href="/#services"
          onClick={() => setMobileMenu(false)}
        >
          Services
        </a>

        <a
          href="/#pricing"
          onClick={() => setMobileMenu(false)}
        >
          Pricing
        </a>

        <a
          href="/#solar"
          onClick={() => setMobileMenu(false)}
        >
          Solar Solutions
        </a>

        <a
          href="/#contact"
          onClick={() => setMobileMenu(false)}
        >
          Contact
        </a>

        <a
          href="tel:+919032840296"
          className="mobile-call"
        >
          📞 CALL NOW
        </a>

      </div>
    </>
  );
};

export default Navbar;