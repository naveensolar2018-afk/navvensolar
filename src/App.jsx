import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Pricing from './pages/Pricing';
import About from './pages/About';

function App() {
  const globalStyles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background-color: #030712; /* Matches your expert theme */
      margin: 0;
      padding: 0;
      width: 100%;
      overflow-x: hidden;
    }
    #root {
      width: 100%;
    }
  `;

  return (
    <Router>
      <style>{globalStyles}</style>
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh',
        width: '100%' 
      }}>
        <Navbar />
        {/* main container handles the full-width flow for all pages */}
        <main style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;