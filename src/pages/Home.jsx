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

  const trustedCompanies = [
    {
      name: "Alpha Design Private Ltd",
      logo: "alpha.jpg",
    },
    {
      name: "DHL Logistics",
      logo: "dhl.png",
    },
    {
      name: "Gandour India Food Processing Pvt. Ltd",
      logo: "gandour.png",
    },
    {
      name: "Doctor C",
      logo: "doctorc.png",
    },
    {
      name: "Mayuri Farms",
      logo: "mayuri.jpg",
    },
    {
      name: "Sneha Farms",
      logo: "sneha.jpg",
    },
    {
      name: "Indian Airforce Dundigal",
      logo: "airforce.png",
    },
    {
      name: "RTC Kalabhavan",
      logo: "rtc.jpg",
    },
  ];

  const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Bricolage+Grotesque:wght@700;800&display=swap');

  :root{
    --primary:#2563eb;
    --secondary:#60a5fa;
    --dark:#050816;
    --card:#ffffff;
    --light:#f8fafc;
    --text:#475569;
    --border:#e2e8f0;
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
    background:var(--light);
    font-family:'Inter',sans-serif;
  }

  img{
    max-width:100%;
    display:block;
  }

  .home{
    color:#0f172a;
    width:100%;
    overflow:hidden;
  }

  .container{
    width:100%;
    max-width:1500px;
    margin:auto;
    padding-inline:24px;
  }

  section{
    padding:110px 0;
  }

  /* NAVBAR */

  .navbar{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    z-index:1000;
    background:rgba(5,8,22,.88);
    backdrop-filter:blur(12px);
    border-bottom:1px solid rgba(255,255,255,.08);
  }

  .nav-container{
    max-width:1500px;
    margin:auto;
    height:82px;
    padding:0 24px;
    display:flex;
    align-items:center;
    justify-content:space-between;
  }

  .logo{
    font-family:'Bricolage Grotesque',sans-serif;
    font-size:1.4rem;
    font-weight:800;
    color:#fff;
    text-decoration:none;
    white-space:nowrap;
  }

  .logo span{
    color:var(--secondary);
  }

  .nav-links{
    display:flex;
    align-items:center;
    gap:26px;
    flex-wrap:wrap;
  }

  .nav-links a{
    text-decoration:none;
    color:rgba(255,255,255,.86);
    font-size:.95rem;
    font-weight:600;
    transition:.3s ease;
  }

  .nav-links a:hover{
    color:#fff;
  }

  .nav-contact-btn{
    background:var(--primary);
    padding:12px 22px;
    border-radius:14px;
  }

  .nav-contact-btn:hover{
    background:#1d4ed8;
  }

  /* ANIMATION */

  .fade-in{
    opacity:0;
    transform:translateY(40px);
    transition:all .8s ease;
  }

  .fade-in.visible{
    opacity:1;
    transform:translateY(0);
  }

  /* HERO */

  .hero{
    min-height:100vh;
    display:flex;
    align-items:center;
    background:#050816;
    background-image:
    linear-gradient(rgba(37,99,235,.15) 1px,transparent 1px),
    linear-gradient(90deg,rgba(37,99,235,.15) 1px,transparent 1px);
    background-size:50px 50px;
    color:#fff;
    position:relative;
    overflow:hidden;
    padding-top:130px;
  }

  .hero::after{
    content:"";
    position:absolute;
    inset:0;
    background:
    radial-gradient(circle at 20% 50%,
    rgba(37,99,235,.18) 0%,
    transparent 60%);
  }

  .hero-grid{
    display:grid;
    grid-template-columns:1.1fr .9fr;
    gap:70px;
    align-items:center;
    position:relative;
    z-index:2;
  }

  .tag{
    display:inline-flex;
    align-items:center;
    gap:10px;
    padding:12px 22px;
    border-radius:999px;
    background:rgba(255,255,255,.08);
    border:1px solid rgba(255,255,255,.12);
    margin-bottom:28px;
    font-size:.8rem;
    font-weight:700;
    letter-spacing:1px;
  }

  .hero h1{
    font-family:'Bricolage Grotesque',sans-serif;
    font-size:clamp(3rem,7vw,6rem);
    line-height:1;
    margin-bottom:28px;
  }

  .hero h1 span{
    color:var(--secondary);
  }

  .hero p{
    color:#cbd5e1;
    line-height:1.9;
    font-size:1.08rem;
    margin-bottom:38px;
    max-width:680px;
  }

  .hero-actions{
    display:flex;
    gap:18px;
    flex-wrap:wrap;
  }

  .primary-btn,
  .secondary-btn{
    text-decoration:none;
    padding:16px 30px;
    border-radius:16px;
    font-weight:700;
    transition:.35s ease;
  }

  .primary-btn{
    background:var(--primary);
    color:#fff;
  }

  .primary-btn:hover{
    background:#1d4ed8;
    transform:translateY(-4px);
  }

  .secondary-btn{
    border:1px solid rgba(255,255,255,.18);
    background:rgba(255,255,255,.05);
    color:#fff;
  }

  .secondary-btn:hover{
    transform:translateY(-4px);
  }

  .hero-card{
    background:rgba(255,255,255,.04);
    border:1px solid rgba(255,255,255,.08);
    border-radius:30px;
    padding:20px;
    overflow:hidden;
    backdrop-filter:blur(10px);
  }

  .hero-card img{
    width:100%;
    height:580px;
    object-fit:cover;
    border-radius:22px;
  }

  /* SECTION HEAD */

  .section-head{
    text-align:center;
    margin-bottom:70px;
  }

  .section-head h2{
    font-family:'Bricolage Grotesque',sans-serif;
    font-size:clamp(2.2rem,5vw,4rem);
    margin-bottom:18px;
  }

  .section-head p{
    max-width:850px;
    margin:auto;
    line-height:1.9;
    color:var(--text);
  }

  /* SERVICES */

  .service-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
    gap:28px;
    margin-bottom:70px;
  }

  .service-card{
    background:#fff;
    padding:36px;
    border-radius:28px;
    border:1px solid var(--border);
    transition:.35s ease;
  }

  .service-card:hover{
    transform:translateY(-8px);
    box-shadow:0 20px 40px rgba(37,99,235,.08);
  }

  .service-icon{
    font-size:2.4rem;
    margin-bottom:20px;
  }

  .service-card h3{
    font-size:1.35rem;
    margin-bottom:14px;
  }

  .service-card p{
    line-height:1.8;
    color:var(--text);
  }

  .services-list{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:18px;
  }

  .service-list-item{
    background:#fff;
    border:1px solid var(--border);
    padding:18px 20px;
    border-radius:18px;
    font-weight:600;
  }

  /* INSTALLATION */

  .gallery{
    background:#020617;
    color:#fff;
  }

  .installation-scroll-wrapper{
    width:100%;
    overflow:hidden;
  }

  .installation-scroll-track{
    display:flex;
    gap:24px;
    width:max-content;
    animation:scrollInstallations 45s linear infinite;
  }

  .installation-scroll-track:hover{
    animation-play-state:paused;
  }

  .installation-card{
    width:340px;
    min-width:340px;
    height:430px;
    border-radius:28px;
    overflow:hidden;
    position:relative;
    background:#111827;
  }

  .installation-card img{
    width:100%;
    height:100%;
    object-fit:cover;
    transition:.5s ease;
  }

  .installation-card:hover img{
    transform:scale(1.08);
  }

  .installation-overlay{
    position:absolute;
    inset:0;
    background:linear-gradient(to top,rgba(0,0,0,.88),transparent);
    display:flex;
    align-items:flex-end;
    padding:26px;
  }

  .installation-overlay h3{
    font-size:1rem;
    line-height:1.5;
  }

  @keyframes scrollInstallations{
    from{
      transform:translateX(0);
    }
    to{
      transform:translateX(-50%);
    }
  }

  /* PRICING */

  .pricing-grid{
    display:grid;
    grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
    gap:24px;
  }

  .price-card{
    background:#fff;
    border-radius:26px;
    border:1px solid var(--border);
    padding:32px 24px;
    text-align:center;
    transition:.35s ease;
  }

  .price-card:hover{
    transform:translateY(-8px);
  }

  .price{
    font-size:2.2rem;
    font-weight:800;
    color:var(--primary);
    margin:18px 0;
  }

   /* SOLAR */

  .solar-box{
    background:#ffffff;
    border-radius:34px;
    padding:60px 50px;
    text-align:center;
    border:1px solid #dbeafe;
    box-shadow:
    0 18px 45px rgba(37,99,235,.06);
    max-width:1000px;
    margin:auto;
  }

  .solar-title{
    font-size:clamp(2rem,4vw,3.2rem);
    margin-bottom:18px;
    line-height:1.1;
    font-family:'Bricolage Grotesque',sans-serif;
    color:#0f172a;
  }

  .solar-desc{
    max-width:760px;
    margin:0 auto;
    color:#475569;
    line-height:1.9;
    font-size:1.05rem;
  }

  .solar-price{
    margin-top:28px;
    color:#2563eb;
    font-size:clamp(2rem,5vw,3rem);
    font-weight:800;
    line-height:1;
  }

  .solar-sub{
    margin-top:10px;
    color:#64748b;
    font-size:.92rem;
    letter-spacing:.04em;
  }

  /* TABLET */

  @media(max-width:768px){

    .solar-box{
      padding:42px 24px;
      border-radius:26px;
    }

    .solar-title{
      font-size:2rem;
      margin-bottom:16px;
    }

    .solar-desc{
      font-size:.96rem;
      line-height:1.8;
    }

    .solar-price{
      margin-top:24px;
      font-size:2.2rem;
    }

  }

  /* MOBILE */

  @media(max-width:480px){

    .solar-box{
      padding:34px 18px;
      border-radius:22px;
    }

    .solar-title{
      font-size:1.65rem;
      line-height:1.2;
    }

    .solar-desc{
      font-size:.92rem;
      line-height:1.75;
    }

    .solar-price{
      font-size:1.9rem;
    }

    .solar-sub{
      font-size:.8rem;
    }

  }

/* ================= CONTACT ================= */

.contact{
  background:
  linear-gradient(
    180deg,
    #f8fbff 0%,
    #ffffff 100%
  );
}

.contact-wrapper{
  background:#fff;
  border:1px solid #dbeafe;
  border-radius:32px;
  overflow:hidden;
  display:grid;
  grid-template-columns:320px 1fr;
  box-shadow:
  0 15px 40px rgba(15,23,42,.06);
}

/* LEFT */

.contact-left{
  background:
  linear-gradient(
    180deg,
    #2563eb,
    #1d4ed8
  );
  padding:40px 28px;
  display:flex;
  align-items:center;
  justify-content:center;
}

.profile-box{
  text-align:center;
}

.profile-box img{
  width:130px;
  height:130px;
  border-radius:50%;
  object-fit:cover;
  border:5px solid rgba(255,255,255,.18);
  margin:auto auto 24px;
}

.contact-tag{
  display:inline-flex;
  padding:8px 14px;
  border-radius:999px;
  background:rgba(255,255,255,.12);
  color:#fff;
  font-size:.7rem;
  font-weight:700;
  letter-spacing:1px;
  margin-bottom:18px;
}

.profile-info h3{
  font-size:2rem;
  color:#fff;
  margin-bottom:10px;
  font-family:'Bricolage Grotesque',sans-serif;
}

.role{
  color:#dbeafe;
  font-size:.82rem;
  letter-spacing:1px;
  margin-bottom:18px;
  font-weight:700;
}

.profile-desc{
  color:rgba(255,255,255,.92);
  line-height:1.8;
  font-size:.95rem;
  max-width:250px;
  margin:auto;
}

/* RIGHT */

.contact-right{
  padding:48px;
}

.contact-heading{
  margin-bottom:34px;
}

.contact-heading span{
  color:#2563eb;
  font-size:.8rem;
  font-weight:800;
  letter-spacing:2px;
}

.contact-heading h2{
  font-size:clamp(2.2rem,4vw,3.5rem);
  line-height:1;
  margin:16px 0;
  font-family:'Bricolage Grotesque',sans-serif;
}

.contact-heading p{
  color:#64748b;
  line-height:1.8;
  max-width:650px;
}

/* GRID */

.contact-grid{
  display:grid;
  grid-template-columns:repeat(2,minmax(0,1fr));
  gap:18px;
}

.contact-card{
  background:#f8fbff;
  border:1px solid #dbeafe;
  border-radius:22px;
  padding:24px;
  display:flex;
  gap:18px;
  align-items:flex-start;
  transition:.35s ease;
  cursor:pointer;
}

.contact-card:hover{
  transform:translateY(-6px);
  background:#fff;
  border-color:#93c5fd;
  box-shadow:
  0 18px 40px rgba(37,99,235,.08);
}

.contact-icon{
  width:55px;
  height:55px;
  min-width:55px;
  border-radius:18px;
  background:#dbeafe;
  display:flex;
  align-items:center;
  justify-content:center;
  font-size:1.3rem;
}

.contact-card h4{
  font-size:1rem;
  margin-bottom:10px;
  color:#0f172a;
}

.contact-card p{
  color:#64748b;
  line-height:1.7;
  font-size:.92rem;
  margin-top:8px;
}

.contact-card a{
  color:#2563eb;
  text-decoration:none;
  font-weight:600;
  font-size:.95rem;
}

.contact-card a:hover{
  text-decoration:underline;
}

/* BUTTONS */

.contact-buttons{
  margin-top:28px;
  display:flex;
  gap:16px;
  flex-wrap:wrap;
}

.primary-contact-btn,
.secondary-contact-btn{
  padding:14px 24px;
  border-radius:14px;
  text-decoration:none;
  font-weight:700;
  transition:.3s ease;
}

.primary-contact-btn{
  background:#2563eb;
  color:#fff;
}

.primary-contact-btn:hover{
  background:#1d4ed8;
  transform:translateY(-3px);
}

.secondary-contact-btn{
  border:1px solid #cbd5e1;
  color:#0f172a;
  background:#fff;
}

.secondary-contact-btn:hover{
  transform:translateY(-3px);
  border-color:#93c5fd;
  box-shadow:
  0 10px 25px rgba(37,99,235,.08);
}

/* RESPONSIVE */

@media(max-width:1100px){

  .contact-wrapper{
    grid-template-columns:1fr;
  }

}

@media(max-width:768px){

  .contact-right{
    padding:36px 22px;
  }

  .contact-grid{
    grid-template-columns:1fr;
  }

  .contact-heading{
    text-align:center;
  }

  .contact-heading p{
    margin:auto;
  }

  .contact-buttons{
    flex-direction:column;
  }

  .primary-contact-btn,
  .secondary-contact-btn{
    width:100%;
    text-align:center;
  }

}

@media(max-width:480px){

  .profile-box img{
    width:110px;
    height:110px;
  }

  .profile-info h3{
    font-size:1.6rem;
  }

  .contact-heading h2{
    font-size:2rem;
  }

  .contact-card{
    padding:18px;
  }

}

  /* ========================================= */
/* ENTERPRISE RESPONSIVE REWRITE */
/* ========================================= */

@media screen and (max-width:1200px){

  .hero-grid{
    grid-template-columns:1fr;
    gap:50px;
    text-align:center;
  }

  .hero p{
    margin:auto;
  }

  .hero-actions{
    justify-content:center;
  }

  .hero-card{
    max-width:850px;
    margin:auto;
  }

  .contact-wrapper{
    grid-template-columns:1fr;
  }

}

/* ========================================= */
/* TABLET */
/* ========================================= */

@media screen and (max-width:992px){

  section{
    padding:85px 0;
  }

  .container{
    padding-inline:22px;
  }

  .hero{
    padding-top:170px;
  }

  .hero h1{
    font-size:3rem;
    line-height:1.1;
  }

  .hero-card img{
    height:450px;
  }

  .section-head{
    margin-bottom:55px;
  }

  .section-head h2{
    font-size:2.5rem;
    line-height:1.2;
  }

  .service-grid{
    gap:20px;
  }

  .pricing-grid{
    gap:20px;
  }

}

/* ========================================= */
/* MOBILE */
/* ========================================= */

@media screen and (max-width:768px){

  html,
  body{
    overflow-x:hidden;
  }

  section{
    padding:75px 0;
  }

  .container{
    padding-inline:18px;
  }

  /* NAVBAR */

  .navbar{
    width:100%;
  }

  .nav-container{
    flex-direction:column;
    height:auto;
    gap:14px;
    padding:18px 16px;
  }

  .logo{
    font-size:1.1rem;
    text-align:center;
  }

  .nav-links{
    justify-content:center;
    gap:12px;
  }

  .nav-links a{
    font-size:.82rem;
  }

  .nav-contact-btn{
    padding:10px 16px;
  }

  /* HERO */

  .hero{
    min-height:auto;
    padding-top:210px;
    padding-bottom:80px;
    text-align:center;
  }

  .hero-grid{
    gap:38px;
  }

  .tag{
    font-size:.7rem;
    padding:10px 14px;
    line-height:1.4;
  }

  .hero h1{
    font-size:2.3rem;
    line-height:1.15;
    margin-bottom:22px;
  }

  .hero p{
    font-size:.95rem;
    line-height:1.8;
    margin-bottom:28px;
  }

  .hero-actions{
    flex-direction:column;
    align-items:center;
    width:100%;
  }

  .primary-btn,
  .secondary-btn{
    width:100%;
    max-width:320px;
    text-align:center;
  }

  .hero-card{
    padding:14px;
    border-radius:24px;
  }

  .hero-card img{
    height:300px;
    border-radius:18px;
  }

  /* SECTION HEADINGS */

  .section-head{
    margin-bottom:42px;
    padding-inline:4px;
  }

  .section-head h2{
    font-size:2rem;
    line-height:1.25;
    word-break:break-word;
    overflow-wrap:break-word;
    margin-bottom:14px;
  }

  .section-head p{
    font-size:.92rem;
    line-height:1.8;
  }

  /* SERVICES */

  .service-grid{
    grid-template-columns:1fr;
    gap:18px;
    margin-bottom:36px;
  }

  .service-card{
    padding:24px;
    border-radius:22px;
  }

  .service-card h3{
    font-size:1.15rem;
  }

  .service-card p{
    font-size:.92rem;
  }

  .services-list{
    grid-template-columns:1fr;
    gap:14px;
  }

  .service-list-item{
    font-size:.9rem;
    line-height:1.5;
    padding:16px;
  }

  /* INSTALLATION */

  .installation-scroll-track{
    gap:16px;
  }

  .installation-card{
    width:240px;
    min-width:240px;
    height:300px;
    border-radius:22px;
  }

  .installation-overlay{
    padding:18px;
  }

  .installation-overlay h3{
    font-size:.88rem;
  }

  /* PRICING */

  .pricing-grid{
    grid-template-columns:1fr;
    gap:18px;
  }

  .price-card{
    padding:26px 20px;
    border-radius:22px;
  }

  .price{
    font-size:2rem;
  }

  /* SOLAR */

  .solar-box{
    margin-top:20px;
    padding:36px 20px;
    border-radius:24px;
  }

  .solar-title{
    font-size:1.8rem;
    line-height:1.2;
  }

  .solar-desc{
    font-size:.92rem;
    line-height:1.8;
  }

  .solar-price{
    font-size:2rem;
  }

  .solar-sub{
    font-size:.8rem;
    line-height:1.5;
  }










/* ========================================= */
/* TRUSTED COMPANIES */
/* ========================================= */

.clients-section{
  padding:120px 0;
  background:
  linear-gradient(
    180deg,
    #f8fbff 0%,
    #ffffff 100%
  );

  overflow:hidden;
  position:relative;
}

.clients-section::before{
  content:"";
  position:absolute;
  inset:0;

  background:
  radial-gradient(
    circle at top right,
    rgba(37,99,235,.06),
    transparent 35%
  );
}

.clients-scroll{
  position:relative;
  overflow:hidden;
  width:100%;
  margin-top:70px;
}

.clients-track{
  display:flex;
  gap:28px;
  width:max-content;

  animation:
  scrollClients 38s linear infinite;
}

.clients-track:hover{
  animation-play-state:paused;
}

@keyframes scrollClients{

  from{
    transform:translateX(0);
  }

  to{
    transform:translateX(-50%);
  }

}

/* CARD */

.client-card{
  width:320px;
  min-width:320px;

  background:#fff;

  border:1px solid #dbeafe;

  border-radius:32px;

  padding:42px 30px;

  text-align:center;

  transition:.4s ease;

  box-shadow:
  0 10px 35px rgba(15,23,42,.05);

  position:relative;

  overflow:hidden;
}

.client-card::before{
  content:"";
  position:absolute;
  inset:0;

  background:
  linear-gradient(
    135deg,
    rgba(37,99,235,.04),
    transparent 60%
  );

  opacity:0;

  transition:.4s ease;
}

.client-card:hover{
  transform:translateY(-10px);

  border-color:#93c5fd;

  box-shadow:
  0 25px 60px rgba(37,99,235,.12);
}

.client-card:hover::before{
  opacity:1;
}

/* LOGO */

.client-logo-box{
  width:130px;
  height:130px;

  margin:auto auto 28px;

  border-radius:28px;

  background:#f8fafc;

  border:1px solid #e2e8f0;

  display:flex;
  align-items:center;
  justify-content:center;

  padding:20px;

  transition:.35s ease;
}

.client-card:hover .client-logo-box{
  transform:scale(1.05);
}

.client-logo-box img{
  width:100%;
  height:100%;
  object-fit:contain;
}

/* TEXT */

.client-name{
  font-size:1.2rem;
  font-weight:800;
  line-height:1.6;
  color:#0f172a;
}

.client-sub{
  margin-top:12px;

  color:#64748b;

  font-size:.9rem;

  letter-spacing:.04em;
}

/* TABLET */

@media(max-width:768px){

  .clients-section{
    padding:90px 0;
  }

  .clients-track{
    gap:18px;
  }

  .client-card{
    width:240px;
    min-width:240px;

    padding:28px 20px;

    border-radius:24px;
  }

  .client-logo-box{
    width:90px;
    height:90px;

    border-radius:22px;
  }

  .client-name{
    font-size:1rem;
  }

}

/* MOBILE */

@media(max-width:480px){

  .client-card{
    width:210px;
    min-width:210px;
  }

}














  /* CONTACT */

  .contact-wrapper{
    border-radius:24px;
  }

  .contact-left{
    padding:36px 20px;
  }

  .profile-box img{
    width:100px;
    height:100px;
  }

  .profile-info h3{
    font-size:1.6rem;
  }

  .profile-desc{
    font-size:.9rem;
  }

  .contact-right{
    padding:30px 18px;
  }

  .contact-heading{
    text-align:center;
    margin-bottom:28px;
  }

  .contact-heading h2{
    font-size:2rem;
    line-height:1.2;
  }

  .contact-heading p{
    font-size:.92rem;
  }

  .contact-grid{
    grid-template-columns:1fr;
    gap:16px;
  }

  .contact-card{
    padding:18px;
    border-radius:18px;
  }

  .contact-card h4{
    font-size:.95rem;
  }

  .contact-card p{
    font-size:.86rem;
  }

  .contact-buttons{
    flex-direction:column;
  }

  .primary-contact-btn,
  .secondary-contact-btn{
    width:100%;
    text-align:center;
  }

}

/* ========================================= */
/* SMALL MOBILE */
/* ========================================= */

@media screen and (max-width:480px){

  .hero{
    padding-top:230px;
  }

  .hero h1{
    font-size:2rem;
  }

  .section-head h2{
    font-size:1.75rem;
    line-height:1.3;
  }

  .section-head p{
    font-size:.88rem;
  }

  .service-card,
  .price-card{
    padding:20px;
  }

  .installation-card{
    width:210px;
    min-width:210px;
    height:270px;
  }

  .solar-title{
    font-size:1.55rem;
  }

  .solar-price{
    font-size:1.8rem;
  }

  .contact-heading h2{
    font-size:1.7rem;
  }

}
  `;

  return (
    <div className="home">
      <style>{styles}</style>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="container">

          <div className="hero-grid">

            <div className="fade-in visible">

              <div className="tag">
                ⚡ ENTERPRISE SECURITY • SOLAR INFRASTRUCTURE
              </div>

              <h1>
                Enterprise Security & <span>Solar Infrastructure</span>
              </h1>

              <p>
                Certified CCTV surveillance, wireless security systems,
                solar-powered monitoring and enterprise infrastructure
                protection solutions across Hyderabad and Telangana.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="primary-btn">
                  Contact Us
                </a>

                <a href="#services" className="secondary-btn">
                  Explore Services
                </a>
              </div>

            </div>

            <div className="hero-card fade-in visible">
              <img
                src="/image 10.jpg"
                alt="Security Infrastructure"
              />
            </div>

          </div>

        </div>
      </section>

      {/* CORE SOLUTIONS SECTION */}
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
            {coreServices.map((service, index) => (
              <div className="service-card fade-in" key={index}>
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="services-list">
            {allServices.map((service, index) => (
              <div className="service-list-item fade-in" key={index}>
                ✓ {service}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ONSITE INSTALLATIONS SECTION */}
      <section className="gallery">

        <div className="container">

          <div className="section-head fade-in">

            <h2 style={{ color: "#fff" }}>
              Onsite Installations
            </h2>

            <p style={{ color: "#cbd5e1" }}>
              Real deployment projects including CCTV surveillance,
              solar-powered infrastructure, enterprise monitoring,
              and commercial security installations.
            </p>

          </div>

          <div className="installation-scroll-wrapper">

            <div className="installation-scroll-track">

              {[...onsiteImages, ...onsiteImages].map((image, index) => (

                <div
                  className="installation-card"
                  key={index}
                >
                  <img
                    src={image}
                    alt={`installation-${index}`}
                    loading="lazy"
                  />

                  <div className="installation-overlay">
                    <h3>
                      Enterprise CCTV & Solar Deployment
                    </h3>
                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

      {/* PRICING & PACKAGES SECTION */}
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
            {pricing.map((item, index) => (
              <div className="price-card fade-in" key={index}>
                <h3>{item.title}</h3>
                <div className="price">{item.price}</div>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>

      </section>

      <div className="solar-box fade-in">

        <h3 className="solar-title">
          Smart Solar Street Lights
        </h3>

        <p className="solar-desc">
          High-performance solar lighting systems with
          10 days battery backup, lithium-ion technology,
          waterproof infrastructure and 2 years warranty
          for residential and commercial deployments.
        </p>

        <div className="solar-price">
          ₹7,000+
        </div>

        <div className="solar-sub">
          Enterprise Solar Infrastructure Solutions
        </div>

      </div>











{/* TRUSTED COMPANIES */}

<section className="clients-section">

  <div className="container">

    <div className="section-head fade-in">

      <h2>
        Trusted By Leading Organizations
      </h2>

      <p>
        Delivering enterprise CCTV surveillance,
        solar infrastructure and security solutions
        for corporate, industrial, logistics,
        government and commercial sectors.
      </p>

    </div>

    <div className="clients-scroll">

      <div className="clients-track">

        {[...trustedCompanies, ...trustedCompanies].map((company, index) => (

          <div
            className="client-card"
            key={index}
          >

            <div className="client-logo-box">

              <img
                src={company.logo}
                alt={company.name}
                loading="lazy"
              />

            </div>

            <div className="client-name">
              {company.name}
            </div>

            <div className="client-sub">
              Enterprise Client
            </div>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>









      
      
      {/* CONTACT SECTION */}
<section className="contact" id="contact">

  <div className="container">

    <div className="contact-wrapper fade-in">

      {/* LEFT SIDE */}

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

            <span className="contact-tag">
              ENTERPRISE SECURITY EXPERT
            </span>

            <h3>Naveen</h3>

            <p className="role">
              Founder & Technical Lead
            </p>

            <p className="profile-desc">
              Providing enterprise CCTV surveillance,
              solar infrastructure, wireless monitoring
              and advanced security systems for homes,
              offices and commercial environments.
            </p>

          </div>

        </div>

      </div>

      {/* RIGHT SIDE */}

      <div className="contact-right">

        <div className="contact-heading">

          <span>CONTACT DETAILS</span>

          <h2>
            Get In Touch
          </h2>

          <p>
            Professional CCTV installation, solar security,
            wireless monitoring and enterprise surveillance
            services across Hyderabad & Telangana.
          </p>

        </div>

        <div className="contact-grid">

          <div className="contact-card">

            <div className="contact-icon">
              📞
            </div>

            <div>
              <h4>Phone Number</h4>

              <a href="tel:+919032840296">
                +91 90328 40296
              </a>

              <p>
                Available for installations, support
                and enterprise consultations.
              </p>
            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              📍
            </div>

            <div>
              <h4>Service Location</h4>

              <p>
                Hyderabad, Telangana, India
              </p>

              <p>
                Residential, commercial and industrial
                security deployment services.
              </p>
            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              🏢
            </div>

            <div>
              <h4>Service Branch</h4>

              <a
                href="https://google.com/maps/place/NAVEEN+CCTV+CAMERA%26SOLAR+CAMERA/@17.4545863,78.5321833,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb9b3f40bf435f:0x1dceaf19a10ff78e!8m2!3d17.4545812!4d78.5347582!16s%2Fg%2F11nxqg696w"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Service Branch →
              </a>

              <p>
                NAVEEN CCTV CAMERA & SOLAR CAMERA
              </p>
            </div>

          </div>

          <div className="contact-card">

            <div className="contact-icon">
              🗺️
            </div>

            <div>
              <h4>Main Branch</h4>

              <a
                href="https://www.google.com/maps?q=17.45783233642578,78.5448989868164&z=17&hl=en"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open Main Branch →
              </a>

              <p>
                Main office & technical support center.
              </p>
            </div>

          </div>

        </div>

        <div className="contact-buttons">

          <a
            href="tel:+919032840296"
            className="primary-contact-btn"
          >
            📞 Call Now
          </a>

          <a
            href="https://maps.google.com/maps?ll=17.457833,78.544889&z=16&t=m&hl=en-GB&gl=US&mapclient=embed&q=17%C2%B027%2728.2%22N%2078%C2%B032%2741.6%22E%2017.457833%2C%2078.544889@17.4578333,78.54488889999999"
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
