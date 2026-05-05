import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#0a0e1a',
      color: '#ffffff',
      padding: '60px 5% 40px',
      fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
    },
    topSection: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '40px',
      marginBottom: '50px',
    },
    brandColumn: { flex: '1 1 300px' },
    logo: { fontSize: '24px', fontWeight: 'bold', marginBottom: '15px', color: '#fff' },
    description: { color: '#a0a0a0', fontSize: '14px', lineHeight: '1.6', marginBottom: '20px' },
    linkColumn: { flex: '1 1 150px' },
    columnTitle: { fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '20px', color: '#fff' },
    list: { listStyle: 'none', padding: 0, margin: 0 },
    listItem: { marginBottom: '12px' },
    link: { color: '#a0a0a0', textDecoration: 'none', fontSize: '14px' },
    mapColumn: { flex: '1 1 400px' },
    mapContainer: { borderRadius: '12px', overflow: 'hidden', border: '1px solid #1e2533', height: '200px' },
    bottomSection: { borderTop: '1px solid #1e2533', paddingTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '30px' },
    hubColumn: { flex: '1 1 250px' },
    hubTitle: { color: '#0066ff', fontSize: '13px', fontWeight: 'bold', marginBottom: '20px', display: 'flex', alignItems: 'center' },
    hubItem: { marginBottom: '15px' },
    hubName: { fontSize: '14px', fontWeight: '600', display: 'block', color: '#fff' },
    hubDesc: { fontSize: '12px', color: '#606060' }
  };

  return (
    <footer style={styles.footer}>
      {/* Top Section */}
      <div style={styles.topSection}>
        <div style={styles.brandColumn}>
          <div style={styles.logo}>NAVEEN <span style={{color: '#0066ff'}}>CCTV & SOLAR</span></div>
          <p style={styles.description}>
            5-Star Rated Security Installation Service providing advanced surveillance 
            solutions, wireless solar cameras, and 24/7 monitoring support across Telangana.
          </p>
          <div style={{ background: '#111827', padding: '15px', borderRadius: '8px', border: '1px solid #1e2533', display: 'inline-flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ background: '#1e2533', padding: '8px 12px', borderRadius: '4px', fontWeight: 'bold', color: '#0066ff' }}>5.0 ★</div>
            <div>
              <div style={{ fontSize: '10px', color: '#0066ff', fontWeight: 'bold' }}>GOOGLE VERIFIED</div>
              <div style={{ fontSize: '12px', fontWeight: 'bold' }}>810+ REVIEWS</div>
            </div>
          </div>
        </div>

        <div style={styles.linkColumn}>
          <div style={styles.columnTitle}>Company</div>
          <ul style={styles.list}>
            <li style={styles.listItem}><Link to="/about" style={styles.link}>About Us</Link></li>
            <li style={styles.listItem}><Link to="/" style={styles.link}>Contact</Link></li>
            <li style={styles.listItem}><Link to="/pricing" style={styles.link}>Pricing</Link></li>
            <li style={styles.listItem}><Link to="/services" style={styles.link}>Services</Link></li>
          </ul>
        </div>

        <div style={styles.mapColumn}>
          <div style={styles.columnTitle}>Service Headquarters</div>
          <div style={styles.mapContainer}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.241584984534!2d78.5283437!3d17.4481561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9bca2b73369d%3A0x6b107e38f71f65f3!2sNaveen%20CCTV%20Camera%20%26%20Solar%20Camera!5e0!3m2!1sen!2sin!4v1714900000000!5m2!1sen!2sin" 
              width="100%" height="100%" style={{border: 0}} allowFullScreen="" loading="lazy">
            </iframe>
          </div>
          <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#a0a0a0' }}>
            <span>Malkajgiri, Secunderabad, Telangana 500047</span>
            <a href="tel:09032840296" style={{color: '#0066ff', textDecoration: 'none', fontWeight: 'bold'}}>090328 40296</a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: 'center', fontSize: '10px', color: '#303030', letterSpacing: '2px', marginBottom: '30px' }}>
        LOCAL SERVICE DELIVERY NETWORK
      </div>

      {/* Bottom Service Hubs Section */}
      <div style={styles.bottomSection}>
        <div style={styles.hubColumn}>
          <div style={styles.hubTitle}>▼ HYDERABAD HUBS</div>
          <div style={styles.hubItem}>
            <span style={styles.hubName}>Malkajgiri</span>
            <span style={styles.hubDesc}>Primary Service & Demo Center</span>
          </div>
          <div style={styles.hubItem}>
            <span style={styles.hubName}>Secunderabad</span>
            <span style={styles.hubDesc}>Industrial & Commercial Security</span>
          </div>
        </div>

        <div style={styles.hubColumn}>
          <div style={styles.hubTitle}>▼ TELANGANA REACH</div>
          <div style={styles.hubItem}>
            <span style={styles.hubName}>Warangal</span>
            <span style={styles.hubDesc}>Residential Solar Surveillance</span>
          </div>
          <div style={styles.hubItem}>
            <span style={styles.hubName}>Nizamabad</span>
            <span style={styles.hubDesc}>Remote Farm Monitoring Solutions</span>
          </div>
        </div>

        <div style={styles.hubColumn}>
          <div style={styles.hubTitle}>▼ AVAILABILITY</div>
          <div style={styles.hubItem}>
            <span style={styles.hubName}>Open 24 Hours</span>
            <span style={styles.hubDesc}>Emergency Support & Site Visits</span>
          </div>
          <div style={styles.hubItem}>
            <span style={styles.hubName}>Pan-Telangana</span>
            <span style={styles.hubDesc}>Security Consultancy & AMC</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;