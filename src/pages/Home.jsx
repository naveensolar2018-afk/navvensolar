import React, { useEffect, useRef } from "react";

const Home = () => {
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-in").forEach((el) => {
      observerRef.current.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const coreServices = [
    {
      icon: "🎥",
      title: "CCTV & Surveillance",
      desc: "Professional HD/IP CCTV installation, DVR/NVR setup, hidden cameras and enterprise monitoring systems.",
    },
    {
      icon: "☀️",
      title: "Solar Security",
      desc: "Solar-powered surveillance infrastructure with lithium battery backup and remote monitoring.",
    },
    {
      icon: "🛡️",
      title: "Access Control",
      desc: "Enterprise biometric access systems, alarms, motion sensors and security automation.",
    },
    {
      icon: "🏢",
      title: "Commercial Security",
      desc: "Security architecture for offices, warehouses, apartments and industrial facilities.",
    },
  ];

  const allServices = [
    "Access Control Systems",
    "Burglar Alarm Systems",
    "Commercial Security Systems",
    "Electronic Security Systems",
    "Fire Alarm Systems",
    "Intercom Installation",
    "24/7 Monitoring Service",
    "Motion Sensors",
    "Residential Security Systems",
    "Security Doors & Bars",
    "Silent Alarm Systems",
    "Video Surveillance Systems",
    "Wireless Security Systems",
    "Hidden Security Cameras",
    "Cloud / Remote Access Security",
    "Computer Security Services",
    "Data Recovery Solutions",
    "Threat Prevention Systems",
    "Security Architecture Planning",
    "Commercial Computer Security",
    "Residential Computer Security",
    "CCTV Camera Repair & Maintenance",
    "Hikvision / Ezviz / CP Plus Cameras",
  ];

  const onsiteImages = [
    "/image.webp",
    "/image 1.webp",
    "/image 2.jpg",
    "/image 3.webp",
    "/image 4.webp",
    "/image 5.webp",
    "/image 6.webp",
    "/image 7.webp",
    "/image 8.webp",
    "/image 9.webp",
    "/image 10.jpg",
    "/image 11.jpg",
    "/image 12.jpg",
    "/image 13.jpg",
    "/image 14.jpg",
    "/image 15.jpg",
  ];

  const pricing = [
    {
      title: "Wireless Security Systems",
      price: "₹2,999+",
      desc: "Basic wireless surveillance package for homes & offices.",
    },
    {
      title: "CCTV Camera Setup",
      price: "₹2,500+",
      desc: "HD CCTV installation with DVR/NVR support.",
    },
    {
      title: "Advanced Wireless Systems",
      price: "₹3,999+",
      desc: "Premium wireless monitoring with remote mobile access.",
    },
    {
      title: "Solar Security Systems",
      price: "₹9,999+",
      desc: "Solar-powered security systems with battery backup.",
    },
    {
      title: "Solar Street Lights",
      price: "₹7,000+",
      desc: "Smart solar street lights with lithium battery backup.",
    },
  ];

  const styles = `
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Bricolage+Grotesque:wght@700;800&display=swap');

  /*
  ══════════════════════════════════════════════════════════════
    COLOUR THEORY — 60 / 30 / 10 RULE PER BREAKPOINT
  ══════════════════════════════════════════════════════════════
  DESKTOP  >1024px  — BLUE
    60% deep navy  #050816   → backgrounds, surfaces
    30% white      #ffffff   → ALL headings incl. h1, body on dark
    10% blue-600   #2563eb   → CTAs, prices, accents  (never text on dark)
    Accent text uses #93c5fd (blue-300) — light enough on dark bg
    Contrast h1 (#fff) on bg (#050816) ≈ 21:1  ✓ WCAG AAA

  TABLET  ≤1024px  — TEAL
    60% deep teal  #021a16
    30% white      #ffffff
    10% teal-600   #0d9488
    Analogous cool shift from blue → harmonious, not jarring

  MOBILE-L ≤768px  — AMBER
    60% deep amber-brown  #180e00
    30% white             #ffffff
    10% amber-500         #d97706
    Warm-temperature flip from cool blue/teal → strong visual signal
    White on #180e00 ≈ 19:1  ✓

  MOBILE-S ≤480px  — EMERALD
    60% deep forest  #021208
    30% white        #ffffff
    10% emerald-600  #059669
    Analogous to teal but shifted warmer → palette arc completes
  ══════════════════════════════════════════════════════════════
  */

  /* ── Desktop: Blue ───────────────────────── */
  :root {
    --primary:         #2563eb;
    --primary-dark:    #1d4ed8;
    --accent-light:    #93c5fd;   /* blue-300 — used for h1 accent word */
    --hero-bg:         #050816;
    --hero-grid:       rgba(37,99,235,.12);
    --hero-radial:     rgba(37,99,235,.18);
    --gallery-bg:      #02040f;
    --card:            #ffffff;
    --light:           #f8fafc;
    --text:            #475569;
    --border:          #e2e8f0;
    --price-color:     #2563eb;
    --heading-color:   #0f172a;
    --contact-bg:      linear-gradient(155deg,#eef5ff 0%,#ffffff 100%);
    --contact-left:    linear-gradient(170deg,#1e3a8a 0%,#1d4ed8 50%,#2563eb 100%);
    --contact-border:  #bfdbfe;
    --card-bg:         #f0f7ff;
    --icon-bg:         #dbeafe;
    --solar-border:    #bfdbfe;
    --solar-shadow:    rgba(37,99,235,.07);
    --tag-bg:          rgba(255,255,255,.07);
    --tag-border:      rgba(255,255,255,.13);
    --btn-border:      rgba(255,255,255,.20);
    --btn-bg:          rgba(255,255,255,.06);
  }

  /* ── Tablet: Teal ────────────────────────── */
  @media (max-width:1024px) {
    :root {
      --primary:        #0d9488;
      --primary-dark:   #0f766e;
      --accent-light:   #5eead4;
      --hero-bg:        #021a16;
      --hero-grid:      rgba(13,148,136,.13);
      --hero-radial:    rgba(13,148,136,.20);
      --gallery-bg:     #010e0b;
      --price-color:    #0d9488;
      --contact-bg:     linear-gradient(155deg,#ecfdf5 0%,#ffffff 100%);
      --contact-left:   linear-gradient(170deg,#134e4a 0%,#0f766e 50%,#0d9488 100%);
      --contact-border: #99f6e4;
      --card-bg:        #f0fdf9;
      --icon-bg:        #ccfbf1;
      --solar-border:   #99f6e4;
      --solar-shadow:   rgba(13,148,136,.07);
    }
  }

  /* ── Mobile-L: Amber ─────────────────────── */
  @media (max-width:768px) {
    :root {
      --primary:        #d97706;
      --primary-dark:   #b45309;
      --accent-light:   #fcd34d;
      --hero-bg:        #180e00;
      --hero-grid:      rgba(217,119,6,.14);
      --hero-radial:    rgba(217,119,6,.22);
      --gallery-bg:     #0f0800;
      --price-color:    #d97706;
      --contact-bg:     linear-gradient(155deg,#fffbeb 0%,#ffffff 100%);
      --contact-left:   linear-gradient(170deg,#78350f 0%,#92400e 50%,#b45309 100%);
      --contact-border: #fde68a;
      --card-bg:        #fffbeb;
      --icon-bg:        #fef3c7;
      --solar-border:   #fde68a;
      --solar-shadow:   rgba(217,119,6,.07);
    }
  }

  /* ── Mobile-S: Emerald ───────────────────── */
  @media (max-width:480px) {
    :root {
      --primary:        #059669;
      --primary-dark:   #047857;
      --accent-light:   #6ee7b7;
      --hero-bg:        #021208;
      --hero-grid:      rgba(5,150,105,.13);
      --hero-radial:    rgba(5,150,105,.20);
      --gallery-bg:     #010a04;
      --price-color:    #059669;
      --contact-bg:     linear-gradient(155deg,#ecfdf5 0%,#ffffff 100%);
      --contact-left:   linear-gradient(170deg,#064e3b 0%,#065f46 50%,#059669 100%);
      --contact-border: #a7f3d0;
      --card-bg:        #f0fdf9;
      --icon-bg:        #d1fae5;
      --solar-border:   #a7f3d0;
      --solar-shadow:   rgba(5,150,105,.07);
    }
  }

  /* ── Reset ───────────────────────────────── */
  *, *::before, *::after { margin:0; padding:0; box-sizing:border-box; }
  html { scroll-behavior:smooth; }
  body { overflow-x:hidden; background:var(--light); font-family:'DM Sans',sans-serif; }
  img  { max-width:100%; display:block; }

  .home { color:var(--heading-color); width:100%; overflow:hidden; }

  .container { width:100%; max-width:1500px; margin:auto; padding-inline:24px; }

  section { padding:110px 0; }

  /* ── Fade-in ─────────────────────────────── */
  .fade-in { opacity:0; transform:translateY(36px); transition:opacity .8s ease,transform .8s ease; }
  .fade-in.visible { opacity:1; transform:translateY(0); }

  /* ══════════════════════════════════════════
     HERO
  ══════════════════════════════════════════ */
  .hero {
    min-height:100vh;
    display:flex;
    align-items:center;
    background-color:var(--hero-bg);
    background-image:
      linear-gradient(var(--hero-grid) 1px,transparent 1px),
      linear-gradient(90deg,var(--hero-grid) 1px,transparent 1px);
    background-size:52px 52px;
    color:#fff;
    position:relative;
    overflow:hidden;
    padding-top:80px;
  }

  .hero::before {
    content:"";
    position:absolute;
    inset:0;
    background:radial-gradient(ellipse 75% 55% at 14% 54%,var(--hero-radial),transparent);
    pointer-events:none;
    z-index:0;
  }

  .hero-grid {
    display:grid;
    grid-template-columns:1.15fr .85fr;
    gap:72px;
    align-items:center;
    position:relative;
    z-index:2;
  }

  .tag {
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:10px 20px;
    border-radius:999px;
    background:var(--tag-bg);
    border:1px solid var(--tag-border);
    margin-bottom:28px;
    font-size:.74rem;
    font-weight:700;
    letter-spacing:1.2px;
    text-transform:uppercase;
  }

  /*
    h1 — ALWAYS pure white #ffffff on every breakpoint.
    "Solar Infrastructure" uses --accent-light (a LIGHT tint of
    the theme colour) so it is visually distinct but never competes
    with — or dominates — the white body text.
    White on all dark hero backgrounds ≥ 18:1 contrast.
  */
  .hero h1 {
    font-family:'Bricolage Grotesque',sans-serif;
    font-size:clamp(2.8rem,6.2vw,5.5rem);
    line-height:1.03;
    margin-bottom:26px;
    color:#ffffff;
    letter-spacing:-.025em;
  }

  .hero h1 .hl {
    color:var(--accent-light);   /* light tint — readable, not dominant */
  }

  .hero-p {
    color:rgba(255,255,255,.70);
    line-height:1.9;
    font-size:1.05rem;
    margin-bottom:36px;
    max-width:620px;
  }

  .hero-actions { display:flex; gap:16px; flex-wrap:wrap; }

  .primary-btn, .secondary-btn {
    text-decoration:none;
    padding:15px 28px;
    border-radius:14px;
    font-weight:700;
    font-size:.94rem;
    transition:transform .3s ease,box-shadow .3s ease,background .3s ease;
  }
  .primary-btn {
    background:var(--primary);
    color:#fff;
    box-shadow:0 6px 22px rgba(0,0,0,.22);
  }
  .primary-btn:hover { background:var(--primary-dark); transform:translateY(-4px); box-shadow:0 14px 30px rgba(0,0,0,.26); }
  .secondary-btn {
    border:1px solid var(--btn-border);
    background:var(--btn-bg);
    color:#fff;
    backdrop-filter:blur(6px);
  }
  .secondary-btn:hover { transform:translateY(-4px); }

  .hero-card {
    background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.08);
    border-radius:28px;
    padding:18px;
    overflow:hidden;
    backdrop-filter:blur(10px);
  }
  .hero-card img {
    width:100%;
    height:550px;
    object-fit:cover;
    border-radius:20px;
  }

  /* ══════════════════════════════════════════
     SECTION HEAD
  ══════════════════════════════════════════ */
  .section-head { text-align:center; margin-bottom:66px; }
  .section-head h2 {
    font-family:'Bricolage Grotesque',sans-serif;
    font-size:clamp(2rem,4.2vw,3.8rem);
    margin-bottom:16px;
    letter-spacing:-.02em;
  }
  .section-head p { max-width:800px; margin:auto; line-height:1.9; color:var(--text); }

  /* ══════════════════════════════════════════
     SERVICES
  ══════════════════════════════════════════ */
  .service-grid {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(255px,1fr));
    gap:24px;
    margin-bottom:66px;
  }
  .service-card {
    background:var(--card);
    padding:32px;
    border-radius:24px;
    border:1px solid var(--border);
    transition:transform .32s ease,box-shadow .32s ease,border-color .28s ease;
  }
  .service-card:hover {
    transform:translateY(-8px);
    box-shadow:0 20px 42px rgba(0,0,0,.07);
    border-color:var(--accent-light);
  }
  .service-icon { font-size:2.2rem; margin-bottom:16px; }
  .service-card h3 { font-size:1.25rem; margin-bottom:12px; }
  .service-card p  { line-height:1.8; color:var(--text); font-size:.95rem; }

  .services-list {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(225px,1fr));
    gap:14px;
  }
  .service-list-item {
    background:var(--card);
    border:1px solid var(--border);
    padding:15px 18px;
    border-radius:15px;
    font-weight:600;
    font-size:.91rem;
    transition:border-color .28s,box-shadow .28s;
  }
  .service-list-item:hover {
    border-color:var(--primary);
    box-shadow:0 6px 16px rgba(0,0,0,.06);
  }

  /* ══════════════════════════════════════════
     GALLERY
  ══════════════════════════════════════════ */
  .gallery { background:var(--gallery-bg); color:#fff; }

  .installation-scroll-wrapper { width:100%; overflow:hidden; }

  .installation-scroll-track {
    display:flex;
    gap:22px;
    width:max-content;
    animation:scrollTrack 48s linear infinite;
  }
  .installation-scroll-track:hover { animation-play-state:paused; }

  .installation-card {
    width:340px; min-width:340px; height:430px;
    border-radius:24px;
    overflow:hidden;
    position:relative;
    background:#111827;
  }
  .installation-card img {
    width:100%; height:100%;
    object-fit:cover;
    transition:transform .5s ease;
  }
  .installation-card:hover img { transform:scale(1.07); }

  .installation-overlay {
    position:absolute; inset:0;
    background:linear-gradient(to top,rgba(0,0,0,.82),transparent);
    display:flex; align-items:flex-end; padding:22px;
  }
  .installation-overlay h3 { font-size:.94rem; line-height:1.5; }

  @keyframes scrollTrack {
    from { transform:translateX(0); }
    to   { transform:translateX(-50%); }
  }

  /* ══════════════════════════════════════════
     PRICING
  ══════════════════════════════════════════ */
  .pricing-grid {
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(225px,1fr));
    gap:20px;
  }
  .price-card {
    background:var(--card);
    border-radius:22px;
    border:1px solid var(--border);
    padding:28px 20px;
    text-align:center;
    transition:transform .32s ease,box-shadow .32s ease,border-color .28s;
  }
  .price-card:hover {
    transform:translateY(-8px);
    box-shadow:0 20px 40px rgba(0,0,0,.07);
    border-color:var(--primary);
  }
  .price-card h3 { font-size:1rem; font-weight:700; color:var(--heading-color); }
  .price {
    font-size:2rem;
    font-weight:800;
    color:var(--price-color);
    margin:14px 0;
  }
  .price-card p { color:var(--text); line-height:1.7; font-size:.88rem; }

  /* ══════════════════════════════════════════
     SOLAR BOX
  ══════════════════════════════════════════ */
  .solar-section { padding:0 0 110px; }

  .solar-box {
    background:var(--card);
    border-radius:30px;
    padding:56px 48px;
    text-align:center;
    border:1px solid var(--solar-border);
    box-shadow:0 16px 42px var(--solar-shadow);
    max-width:960px;
    margin:auto;
  }
  .solar-title {
    font-family:'Bricolage Grotesque',sans-serif;
    font-size:clamp(1.8rem,3.6vw,2.9rem);
    margin-bottom:14px;
    line-height:1.1;
    color:var(--heading-color);
  }
  .solar-desc {
    max-width:720px;
    margin:0 auto;
    color:var(--text);
    line-height:1.9;
    font-size:.98rem;
  }
  .solar-price {
    margin-top:24px;
    color:var(--primary);
    font-size:clamp(1.8rem,4.2vw,2.8rem);
    font-weight:800;
  }
  .solar-sub {
    margin-top:8px;
    color:#94a3b8;
    font-size:.86rem;
    letter-spacing:.05em;
    text-transform:uppercase;
  }

  /* ══════════════════════════════════════════
     CONTACT
  ══════════════════════════════════════════ */
  .contact { background:var(--contact-bg); }

  .contact-wrapper {
    background:var(--card);
    border:1px solid var(--contact-border);
    border-radius:28px;
    overflow:hidden;
    display:grid;
    grid-template-columns:295px 1fr;
    box-shadow:0 14px 40px rgba(15,23,42,.07);
  }

  .contact-left {
    background:var(--contact-left);
    padding:46px 26px;
    display:flex;
    align-items:center;
    justify-content:center;
  }

  .profile-box { text-align:center; }

  .profile-box img {
    width:118px; height:118px;
    border-radius:50%;
    object-fit:cover;
    border:4px solid rgba(255,255,255,.20);
    margin:0 auto 20px;
  }

  .contact-tag {
    display:inline-flex;
    padding:6px 13px;
    border-radius:999px;
    background:rgba(255,255,255,.13);
    color:#fff;
    font-size:.67rem;
    font-weight:700;
    letter-spacing:1px;
    margin-bottom:14px;
  }

  .profile-info h3 {
    font-family:'Bricolage Grotesque',sans-serif;
    font-size:1.85rem;
    color:#fff;
    margin-bottom:7px;
  }
  .role {
    color:rgba(255,255,255,.76);
    font-size:.78rem;
    letter-spacing:.9px;
    margin-bottom:14px;
    font-weight:700;
    text-transform:uppercase;
  }
  .profile-desc {
    color:rgba(255,255,255,.88);
    line-height:1.8;
    font-size:.9rem;
    max-width:230px;
    margin:auto;
  }

  .contact-right { padding:44px; }

  .contact-heading { margin-bottom:30px; }
  .contact-label {
    color:var(--primary);
    font-size:.74rem;
    font-weight:800;
    letter-spacing:2px;
    text-transform:uppercase;
    display:block;
  }
  .contact-heading h2 {
    font-family:'Bricolage Grotesque',sans-serif;
    font-size:clamp(1.9rem,3.6vw,3.1rem);
    line-height:1.05;
    margin:12px 0;
    color:var(--heading-color);
  }
  .contact-heading > p { color:#64748b; line-height:1.8; max-width:580px; }

  .contact-grid {
    display:grid;
    grid-template-columns:repeat(2,minmax(0,1fr));
    gap:14px;
  }

  .contact-card {
    background:var(--card-bg);
    border:1px solid var(--contact-border);
    border-radius:18px;
    padding:20px;
    display:flex;
    gap:14px;
    align-items:flex-start;
    transition:transform .3s ease,border-color .3s ease,box-shadow .3s ease;
    cursor:pointer;
  }
  .contact-card:hover {
    transform:translateY(-5px);
    border-color:var(--primary);
    box-shadow:0 14px 34px rgba(0,0,0,.08);
  }

  .contact-icon {
    width:50px; height:50px; min-width:50px;
    border-radius:14px;
    background:var(--icon-bg);
    display:flex;
    align-items:center;
    justify-content:center;
    font-size:1.2rem;
  }

  .contact-card h4 { font-size:.92rem; margin-bottom:7px; color:var(--heading-color); }
  .contact-card p  { color:#64748b; line-height:1.7; font-size:.86rem; margin-top:5px; }
  .contact-card a  { color:var(--primary); text-decoration:none; font-weight:600; font-size:.9rem; }
  .contact-card a:hover { text-decoration:underline; }

  .contact-buttons {
    margin-top:24px;
    display:flex;
    gap:12px;
    flex-wrap:wrap;
  }

  .primary-contact-btn, .secondary-contact-btn {
    padding:13px 22px;
    border-radius:12px;
    text-decoration:none;
    font-weight:700;
    font-size:.91rem;
    transition:transform .28s ease,box-shadow .28s ease,background .28s ease;
  }
  .primary-contact-btn { background:var(--primary); color:#fff; }
  .primary-contact-btn:hover { background:var(--primary-dark); transform:translateY(-3px); }
  .secondary-contact-btn { border:1px solid var(--border); color:var(--heading-color); background:var(--card); }
  .secondary-contact-btn:hover { transform:translateY(-3px); border-color:var(--primary); box-shadow:0 8px 20px rgba(0,0,0,.07); }

  /* ══════════════════════════════════════════
     RESPONSIVE
  ══════════════════════════════════════════ */

  @media (max-width:1200px) {
    .hero-grid { grid-template-columns:1fr; text-align:center; }
    .hero-actions { justify-content:center; }
    .hero-p { margin-inline:auto; }
    .hero-card { max-width:800px; margin:auto; }
    .contact-wrapper { grid-template-columns:1fr; }
    .contact-left { padding:54px 28px; }
  }

  @media (max-width:1024px) {
    section { padding:88px 0; }
    .hero-card img { height:450px; }
    .contact-right { padding:44px 26px; }
  }

  @media (max-width:768px) {
    .hero { padding-top:68px; text-align:center; }
    .hero h1 { font-size:2.7rem; }
    .hero-card img { height:340px; }
    .hero-actions { flex-direction:column; align-items:center; }
    .primary-btn, .secondary-btn { width:100%; max-width:300px; text-align:center; }
    .installation-card { width:265px; min-width:265px; height:340px; }
    .contact-right { padding:30px 18px; }
    .contact-grid  { grid-template-columns:1fr; }
    .contact-heading { text-align:center; }
    .contact-heading > p { margin:auto; }
    .contact-buttons { flex-direction:column; }
    .primary-contact-btn, .secondary-contact-btn { width:100%; text-align:center; }
    .solar-box { padding:38px 20px; border-radius:22px; }
  }

  @media (max-width:640px) {
    .container { padding-inline:16px; }
    section { padding:76px 0; }
    .hero h1 { font-size:2.3rem; }
    .hero-card img { height:270px; }
    .service-card, .price-card, .contact-card { padding:20px; }
    .contact-heading h2 { font-size:1.9rem; }
  }

  @media (max-width:480px) {
    .hero h1 { font-size:2rem; letter-spacing:-.01em; }
    .tag { font-size:.69rem; padding:9px 14px; }
    .installation-card { width:225px; min-width:225px; height:295px; }
    .profile-box img { width:100px; height:100px; }
    .profile-info h3 { font-size:1.5rem; }
    .contact-right { padding:26px 14px; }
    .solar-box { padding:28px 14px; border-radius:18px; }
    .solar-desc { font-size:.88rem; }
    .solar-price { font-size:1.8rem; }
    .solar-sub { font-size:.76rem; }
  }
  `;

  return (
    <div className="home">
      <style>{styles}</style>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">

            <div className="fade-in visible">
              <div className="tag">⚡ Enterprise Security · Solar Infrastructure</div>

              {/* WHITE h1 — accent word uses a light tint (--accent-light) of
                  the current theme so it never dominates the heading */}
              <h1>
                Enterprise Security &{" "}
                <span className="hl">Solar Infrastructure</span>
              </h1>

              <p className="hero-p">
                Certified CCTV surveillance, wireless security systems,
                solar-powered monitoring and enterprise infrastructure
                protection solutions across Hyderabad and Telangana.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-btn">Contact Us</a>
                <a href="#services" className="secondary-btn">Explore Services</a>
              </div>
            </div>

            <div className="hero-card fade-in visible">
              <img src="/image 10.jpg" alt="Security Infrastructure" />
            </div>

          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <section id="services">
        <div className="container">
          <div className="section-head fade-in">
            <h2>Core Solutions & Services</h2>
            <p>
              Enterprise-grade surveillance, solar energy and integrated
              security systems for residential, commercial and industrial
              environments.
            </p>
          </div>

          <div className="service-grid">
            {coreServices.map((s, i) => (
              <div className="service-card fade-in" key={i}>
                <div className="service-icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="services-list">
            {allServices.map((s, i) => (
              <div className="service-list-item fade-in" key={i}>✓ {s}</div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ───────────────────────────────────────────────── */}
      <section className="gallery">
        <div className="container">
          <div className="section-head fade-in">
            <h2 style={{ color:"#fff" }}>Onsite Installations</h2>
            <p style={{ color:"rgba(255,255,255,.62)" }}>
              Real deployment projects — CCTV surveillance, solar-powered
              infrastructure, enterprise monitoring and commercial security.
            </p>
          </div>

          <div className="installation-scroll-wrapper">
            <div className="installation-scroll-track">
              {[...onsiteImages, ...onsiteImages].map((img, i) => (
                <div className="installation-card" key={i}>
                  <img src={img} alt={`installation-${i}`} loading="lazy" />
                  <div className="installation-overlay">
                    <h3>Enterprise CCTV & Solar Deployment</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────── */}
      <section id="pricing">
        <div className="container">
          <div className="section-head fade-in">
            <h2>Pricing & Packages</h2>
            <p>
              Affordable enterprise-grade security systems engineered for
              reliability and long-term performance.
            </p>
          </div>

          <div className="pricing-grid">
            {pricing.map((item, i) => (
              <div className="price-card fade-in" key={i}>
                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLAR BOX ─────────────────────────────────────────────── */}
      <div className="solar-section">
        <div className="container">
          <div className="solar-box fade-in">
            <h3 className="solar-title">Smart Solar Street Lights</h3>
            <p className="solar-desc">
              High-performance solar lighting systems with 10 days battery
              backup, lithium-ion technology, waterproof infrastructure and
              2 years warranty for residential and commercial deployments.
            </p>
            <div className="solar-price">₹7,000+</div>
            <div className="solar-sub">Enterprise Solar Infrastructure Solutions</div>
          </div>
        </div>
      </div>

      {/* ── CONTACT ───────────────────────────────────────────────── */}
      <section className="contact" id="contact">
        <div className="container">
          <div className="contact-wrapper fade-in">

            <div className="contact-left">
              <div className="profile-box">
                <img
                  src="/Profile.jpeg"
                  alt="Naveen"
                  onError={(e) => {
                    e.target.src =
                      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=500";
                  }}
                />
                <div className="profile-info">
                  <span className="contact-tag">Enterprise Security Expert</span>
                  <h3>Naveen</h3>
                  <p className="role">Founder & Technical Lead</p>
                  <p className="profile-desc">
                    Providing enterprise CCTV surveillance, solar
                    infrastructure, wireless monitoring and advanced security
                    systems for homes, offices and commercial environments.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-right">
              <div className="contact-heading">
                <span className="contact-label">Contact Details</span>
                <h2>Get In Touch</h2>
                <p>
                  Professional CCTV installation, solar security, wireless
                  monitoring and enterprise surveillance services across
                  Hyderabad & Telangana.
                </p>
              </div>

              <div className="contact-grid">
                <div className="contact-card">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Phone Number</h4>
                    <a href="tel:+919032840296">+91 90328 40296</a>
                    <p>Available for installations, support and enterprise consultations.</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Service Location</h4>
                    <p>Hyderabad, Telangana, India</p>
                    <p>Residential, commercial and industrial security deployment.</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">🏢</div>
                  <div>
                    <h4>Service Branch</h4>
                    <a
                      href="https://google.com/maps/place/NAVEEN+CCTV+CAMERA%26SOLAR+CAMERA/@17.4545863,78.5321833,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9b3f40bf435f:0x1dceaf19a10ff78e!8m2!3d17.4545812!4d78.5347582!16s%2Fg%2F11nxqg696w"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Service Branch →
                    </a>
                    <p>NAVEEN CCTV CAMERA & SOLAR CAMERA</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="contact-icon">🗺️</div>
                  <div>
                    <h4>Main Branch</h4>
                    <a
                      href="https://www.google.com/maps?q=17.45783233642578,78.5448989868164&z=17&hl=en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open Main Branch →
                    </a>
                    <p>Main office & technical support center.</p>
                  </div>
                </div>
              </div>

              <div className="contact-buttons">
                <a href="tel:+919032840296" className="primary-contact-btn">
                  📞 Call Now
                </a>
                <a
                  href="https://google.com/maps/place/NAVEEN+CCTV+CAMERA%26SOLAR+CAMERA/@17.4545863,78.5321833,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9b3f40bf435f:0x1dceaf19a10ff78e!8m2!3d17.4545812!4d78.5347582!16s%2Fg%2F11nxqg696w"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-contact-btn"
                >
                  📍 Visit Branch
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;