import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      background:
        'linear-gradient(180deg,#04060b 0%,#0b1220 50%,#04060b 100%)',
      color: '#fff',
      padding: '70px 5% 30px',
      fontFamily: "'Inter', sans-serif",
      borderTop: '1px solid rgba(255,255,255,.06)',
      overflow: 'hidden',
    },

    container: {
      maxWidth: '1400px',
      margin: '0 auto',
    },

    topGrid: {
      display: 'grid',
      gridTemplateColumns: '1.15fr .85fr 1fr',
      gap: '28px',
      marginBottom: '50px',
    },

    leftColumn: {
      display: 'flex',
      flexDirection: 'column',
    },

    logo: {
      fontSize: '34px',
      fontWeight: '800',
      letterSpacing: '-0.04em',
      marginBottom: '18px',
      lineHeight: '1.1',
    },

    blue: {
      color: '#3b82f6',
    },

    description: {
      color: '#94a3b8',
      fontSize: '14px',
      lineHeight: '1.9',
      marginBottom: '30px',
      maxWidth: '520px',
    },

    branchCard: {
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: '24px',
      padding: '24px',
      display: 'flex',
      flexDirection: 'column',
      gap: '22px',
      boxShadow: '0 12px 30px rgba(0,0,0,.2)',
    },

    branchBlock: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },

    divider: {
      borderTop: '1px solid rgba(255,255,255,.08)',
      paddingTop: '22px',
    },

    sectionLabel: {
      color: '#60a5fa',
      fontSize: '12px',
      fontWeight: '800',
      letterSpacing: '.08em',
    },

    address: {
      color: '#dbe4f0',
      lineHeight: '1.8',
      fontSize: '14px',
    },

    phone: {
      color: '#60a5fa',
      textDecoration: 'none',
      fontWeight: '700',
      width: 'fit-content',
      fontSize: '14px',
    },

    mapLink: {
      color: '#60a5fa',
      textDecoration: 'none',
      fontWeight: '700',
      fontSize: '14px',
      width: 'fit-content',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      transition: '.3s ease',
    },

    centerColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },

    card: {
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: '22px',
      padding: '24px',
      boxShadow: '0 12px 30px rgba(0,0,0,.18)',
    },

    cardTitle: {
      color: '#60a5fa',
      fontSize: '13px',
      fontWeight: '800',
      letterSpacing: '.08em',
      marginBottom: '18px',
    },

    list: {
      listStyle: 'none',
      padding: 0,
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: '14px',
    },

    link: {
      color: '#dbe4f0',
      textDecoration: 'none',
      fontSize: '14px',
      fontWeight: '500',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'all .3s ease',
    },

    pdfLink: {
      color: '#fff',
      textDecoration: 'none',
      background: 'linear-gradient(135deg,#2563eb,#1d4ed8)',
      padding: '14px 16px',
      borderRadius: '14px',
      fontSize: '13px',
      fontWeight: '700',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      boxShadow: '0 10px 24px rgba(37,99,235,.25)',
      transition: '.3s ease',
    },

    mapsColumn: {
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
    },

    mapCard: {
      background: 'rgba(255,255,255,.04)',
      border: '1px solid rgba(255,255,255,.08)',
      borderRadius: '22px',
      overflow: 'hidden',
      boxShadow: '0 12px 30px rgba(0,0,0,.2)',
    },

    mapHeader: {
      padding: '16px 18px',
      borderBottom: '1px solid rgba(255,255,255,.06)',
      color: '#60a5fa',
      fontSize: '12px',
      fontWeight: '800',
      letterSpacing: '.08em',
      background: 'rgba(255,255,255,.02)',
    },

    iframe: {
      width: '100%',
      height: '240px',
      border: 0,
    },

    coverageGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: '24px',
      borderTop: '1px solid rgba(255,255,255,.08)',
      paddingTop: '38px',
    },

    coverageCard: {
      background: 'rgba(255,255,255,.03)',
      border: '1px solid rgba(255,255,255,.06)',
      borderRadius: '22px',
      padding: '24px',
      transition: '.3s ease',
    },

    coverageTitle: {
      color: '#60a5fa',
      fontSize: '13px',
      fontWeight: '800',
      letterSpacing: '.08em',
      marginBottom: '18px',
    },

    coverageItem: {
      marginBottom: '16px',
    },

    coverageName: {
      display: 'block',
      color: '#fff',
      fontSize: '15px',
      fontWeight: '700',
      marginBottom: '5px',
    },

    coverageDesc: {
      color: '#94a3b8',
      fontSize: '13px',
      lineHeight: '1.7',
    },

    bottomBar: {
      marginTop: '48px',
      paddingTop: '24px',
      borderTop: '1px solid rgba(255,255,255,.06)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '18px',
      color: '#64748b',
      fontSize: '12px',
    },

    bottomLeft: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
    },

    poweredBy: {
      color: '#94a3b8',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '6px',
      flexWrap: 'wrap',
    },

    poweredLink: {
      color: '#60a5fa',
      textDecoration: 'none',
      transition: '.3s ease',
      fontWeight: '600',
    },

    bottomLinks: {
      display: 'flex',
      gap: '18px',
      flexWrap: 'wrap',
    },

    bottomLink: {
      color: '#94a3b8',
      textDecoration: 'none',
      fontSize: '12px',
    },
  };

  return (
    <>
      <style>
        {`
          *{
            box-sizing:border-box;
          }

          html{
            scroll-behavior:smooth;
          }

          .footer-hover:hover{
            transform:translateY(-5px);
            border-color:rgba(96,165,250,.35) !important;
            box-shadow:0 18px 40px rgba(37,99,235,.12) !important;
          }

          .footer-link:hover{
            color:#60a5fa !important;
            transform:translateX(6px);
          }

          .footer-map-link:hover{
            transform:translateX(6px);
          }

          .footer-doc:hover{
            transform:translateY(-3px);
          }

          .footer-powered-link:hover{
            color:#93c5fd !important;
          }

          @media(max-width:1150px){

            .footer-top-grid{
              grid-template-columns:1fr !important;
            }

            .footer-coverage-grid{
              grid-template-columns:1fr !important;
            }

          }

          @media(max-width:768px){

            .footer-main{
              padding:58px 20px 28px !important;
            }

            .footer-logo{
              font-size:26px !important;
            }

            .footer-bottom{
              flex-direction:column !important;
              align-items:flex-start !important;
            }

            .footer-card{
              padding:20px !important;
            }

          }

          @media(max-width:480px){

            .footer-main{
              padding:48px 16px 24px !important;
            }

            .footer-logo{
              font-size:22px !important;
            }

          }
        `}
      </style>

      <footer style={styles.footer} className="footer-main">

        <div style={styles.container}>

          {/* TOP GRID */}

          <div style={styles.topGrid} className="footer-top-grid">

            {/* LEFT */}

            <div style={styles.leftColumn}>

              <div style={styles.logo} className="footer-logo">
                NAVEEN <span style={styles.blue}>SOLAR & CCTV</span>
              </div>

              <p style={styles.description}>
                Enterprise-grade CCTV surveillance, solar-powered
                camera systems, wireless monitoring and advanced
                security infrastructure services across Hyderabad
                and nearby operational regions.
              </p>

              <div
                style={styles.branchCard}
                className="footer-hover"
              >

                <div style={styles.branchBlock}>

                  <div style={styles.sectionLabel}>
                    MAIN BRANCH & SERVICE CENTER
                  </div>

                  <div style={styles.address}>
                    Plot No. 7-93/1,
                    <br />
                    Hyderabad, Telangana,
                    <br />
                    India
                  </div>

                  <a
                    href="tel:+919032840296"
                    style={styles.phone}
                  >
                    📞 +91 90328 40296
                  </a>

                  <a
                    href="https://maps.google.com/maps?ll=17.457833,78.544889&z=16&t=m&hl=en-GB&gl=US&mapclient=embed&q=17%C2%B027%2728.2%22N%2078%C2%B032%2741.6%22E%2017.457833%2C%2078.544889@17.4578333,78.54488889999999"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.mapLink}
                    className="footer-map-link"
                  >
                    📍 Open Main Branch
                  </a>

                </div>

                <div
                  style={{
                    ...styles.branchBlock,
                    ...styles.divider,
                  }}
                >

                  <div style={styles.sectionLabel}>
                    SERVICE BRANCH
                  </div>

                  <div style={styles.address}>
                    NAVEEN CCTV CAMERA & SOLAR CAMERA,
                    <br />
                    Malkajgiri,
                    <br />
                    Secunderabad, Telangana
                  </div>

                  <a
                    href="https://maps.app.goo.gl/RDYhHgnVpkSpJqxf9?g_st=ac"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={styles.mapLink}
                    className="footer-map-link"
                  >
                    📍 Open Service Branch
                  </a>

                </div>

              </div>

            </div>

            {/* CENTER */}

            <div style={styles.centerColumn}>

              <div
                style={styles.card}
                className="footer-card footer-hover"
              >

                <div style={styles.cardTitle}>
                  QUICK LINKS
                </div>

                <ul style={styles.list}>

                  <li>
                    <a
                      href="/"
                      style={styles.link}
                      className="footer-link"
                    >
                      → Home
                    </a>
                  </li>

                  <li>
                    <a
                      href="/#services"
                      style={styles.link}
                      className="footer-link"
                    >
                      → Services
                    </a>
                  </li>

                  <li>
                    <a
                      href="/#pricing"
                      style={styles.link}
                      className="footer-link"
                    >
                      → Pricing
                    </a>
                  </li>

                  <li>
                    <a
                      href="/#solar"
                      style={styles.link}
                      className="footer-link"
                    >
                      → Solar Solutions
                    </a>
                  </li>

                  <li>
                    <a
                      href="/#contact"
                      style={styles.link}
                      className="footer-link"
                    >
                      → Contact
                    </a>
                  </li>

                </ul>

              </div>

              <div
                style={styles.card}
                className="footer-card footer-hover"
              >

                <div style={styles.cardTitle}>
                  BUSINESS DOCUMENTS
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px',
                  }}
                >

                  <a
                    href="/GST.pdf"
                    download
                    style={styles.pdfLink}
                    className="footer-doc"
                  >
                    GST Registration
                    <span>↓</span>
                  </a>

                  <a
                    href="/nsic.pdf"
                    download
                    style={styles.pdfLink}
                    className="footer-doc"
                  >
                    NSIC Certificate
                    <span>↓</span>
                  </a>

                  <a
                    href="/Udyam.pdf"
                    download
                    style={styles.pdfLink}
                    className="footer-doc"
                  >
                    UDYAM Certificate
                    <span>↓</span>
                  </a>

                </div>

              </div>

            </div>
            {/* MAPS */}
            
            <div style={styles.mapsColumn}>
            
              {/* MAIN BRANCH */}
            
              <a
                href="https://www.google.com/maps/search/?api=1&query=17.4578333,78.5448889"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    ...styles.mapCard,
                    cursor: "pointer",
                  }}
                  className="footer-hover"
                >
            
                  <div style={styles.mapHeader}>
                    📍 MAIN BRANCH LOCATION
                  </div>
            
                  <iframe
                    title="Main Branch"
                    src="https://www.google.com/maps?q=17.4578333,78.5448889&z=16&output=embed"
                    style={styles.iframe}
                    loading="lazy"
                    allowFullScreen
                  />
            
                </div>
              </a>
            
              {/* SERVICE BRANCH */}
            
              <a
                href="https://www.google.com/maps/search/?api=1&query=17.4545812,78.5347582"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <div
                  style={{
                    ...styles.mapCard,
                    cursor: "pointer",
                  }}
                  className="footer-hover"
                >
            
                  <div style={styles.mapHeader}>
                    📍 SERVICE BRANCH LOCATION
                  </div>
            
                  <iframe
                    title="Service Branch"
                    src="https://www.google.com/maps?q=17.4545812,78.5347582&z=16&output=embed"
                    style={styles.iframe}
                    loading="lazy"
                    allowFullScreen
                  />
            
                </div>
              </a>
            
            </div>

          {/* COVERAGE */}

          <div
            style={styles.coverageGrid}
            className="footer-coverage-grid"
          >

            <div
              style={styles.coverageCard}
              className="footer-hover"
            >

              <div style={styles.coverageTitle}>
                SERVICE COVERAGE
              </div>

              <div style={styles.coverageItem}>
                <span style={styles.coverageName}>
                  Hyderabad & Nearby Areas
                </span>

                <span style={styles.coverageDesc}>
                  CCTV deployment, wireless monitoring,
                  solar surveillance and commercial security systems.
                </span>
              </div>

              <div style={styles.coverageItem}>
                <span style={styles.coverageName}>
                  50 KM Operational Radius
                </span>

                <span style={styles.coverageDesc}>
                  Installation, maintenance,
                  inspections and AMC support services.
                </span>
              </div>

            </div>

            <div
              style={styles.coverageCard}
              className="footer-hover"
            >

              <div style={styles.coverageTitle}>
                SUPPORT & SERVICES
              </div>

              <div style={styles.coverageItem}>
                <span style={styles.coverageName}>
                  24/7 Technical Support
                </span>

                <span style={styles.coverageDesc}>
                  Emergency troubleshooting,
                  remote guidance and support response.
                </span>
              </div>

              <div style={styles.coverageItem}>
                <span style={styles.coverageName}>
                  On-Site Consultation
                </span>

                <span style={styles.coverageDesc}>
                  Security planning, inspection
                  and infrastructure consultation.
                </span>
              </div>

            </div>

            <div
              style={styles.coverageCard}
              className="footer-hover"
            >

              <div style={styles.coverageTitle}>
                BUSINESS STATUS
              </div>

              <div style={styles.coverageItem}>
                <span style={styles.coverageName}>
                  GST • NSIC • UDYAM
                </span>

                <span style={styles.coverageDesc}>
                  Registered enterprise security
                  and surveillance service provider.
                </span>
              </div>

              <div style={styles.coverageItem}>
                <span style={styles.coverageName}>
                  Residential & Commercial
                </span>

                <span style={styles.coverageDesc}>
                  Security solutions for homes,
                  offices, warehouses and industries.
                </span>
              </div>

            </div>

          </div>

          {/* BOTTOM */}

          <div
            style={styles.bottomBar}
            className="footer-bottom"
          >

            <div style={styles.bottomLeft}>

              <div>
                © {new Date().getFullYear()} NAVEEN CCTV & SOLAR.
                All Rights Reserved.
              </div>

              <div style={styles.poweredBy}>
                Powered by
                <a
                  href="https://noreatrix.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={styles.poweredLink}
                  className="footer-powered-link"
                >
                  Noreatrix Technologies
                </a>
              </div>

            </div>

            <div style={styles.bottomLinks}>

              <a
                href="#"
                style={styles.bottomLink}
              >
                Privacy Policy
              </a>

              <a
                href="#"
                style={styles.bottomLink}
              >
                Terms & Conditions
              </a>

              <a
                href="/#services"
                style={styles.bottomLink}
              >
                Service Coverage
              </a>

            </div>

          </div>

        </div>

      </footer>
    </>
  );
};

export default Footer;
