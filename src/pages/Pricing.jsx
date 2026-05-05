const Pricing = () => {
  return (
    <div style={{ background: '#030712', color: '#fff', minHeight: '100vh', paddingTop: '120px', paddingBottom: '100px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        <h1 style={{ fontSize: '3.5rem', textAlign: 'center', marginBottom: '60px' }}>Strategic Packages</h1>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
          <div style={{ padding: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '30px', border: '1px solid rgba(255,255,255,0.1)' }}>
            <h3>Residential Elite</h3>
            <p style={{ fontSize: '2rem', fontWeight: 800 }}>Custom Quote</p>
            <ul style={{ color: '#aaa', padding: '20px 0', listStyle: 'none' }}>
              <li>✓ 4K Ultra HD Coverage</li>
              <li>✓ AI Human Detection</li>
              <li>✓ Mobile App Integration</li>
            </ul>
          </div>
          
          <div style={{ padding: '40px', background: 'rgba(0,102,255,0.1)', borderRadius: '30px', border: '1px solid #0066ff' }}>
            <h3 style={{ color: '#0066ff' }}>Commercial Pro</h3>
            <p style={{ fontSize: '2rem', fontWeight: 800 }}>Varies by Scale</p>
            <ul style={{ color: '#ccc', padding: '20px 0', listStyle: 'none' }}>
              <li>✓ Solar + Hybrid Power</li>
              <li>✓ 24/7 Remote Monitoring</li>
              <li>✓ On-site Maintenance AMC</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;