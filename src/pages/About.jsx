const About = () => {
  return (
    <div style={{ background: '#030712', color: '#fff', minHeight: '100vh', paddingTop: '120px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 5%', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: 800, marginBottom: '40px' }}>MISSION <span style={{ color: '#0066ff' }}>PROTECTION</span></h1>
        <p style={{ fontSize: '1.2rem', color: '#aaa', lineHeight: '2', marginBottom: '50px' }}>
          Based in the heart of Secunderabad, Naveen CCTV & Solar has redefined security standards in Telangana. 
          With a record-breaking 5.0 rating across 810+ verified Google reviews, we don't just install cameras; 
          we engineer peace of mind using sustainable, high-performance technology.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '20px' }}>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px' }}>
            <h4 style={{ color: '#0066ff', margin: '0 0 10px 0' }}>810+</h4>
            <p style={{ fontSize: '0.8rem', margin: 0 }}>Reviews</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px' }}>
            <h4 style={{ color: '#0066ff', margin: '0 0 10px 0' }}>24/7</h4>
            <p style={{ fontSize: '0.8rem', margin: 0 }}>Support</p>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.05)', padding: '30px', borderRadius: '15px' }}>
            <h4 style={{ color: '#0066ff', margin: '0 0 10px 0' }}>5.0</h4>
            <p style={{ fontSize: '0.8rem', margin: 0 }}>Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;