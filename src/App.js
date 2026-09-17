import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import CubeReport from './CubeReport'; // your Cube Packaging report, term 01
import MeacReport from './MeacReport'; // your MEAC report, term 02
import TermFrame from './TermFrame';
import ScrollToTop from './ScrollToTop';

// Placeholder until the MEAC report component exists.
const ComingSoon = ({ label }) => (
  <div style={{ padding: '80px 24px', textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
    <p style={{ fontSize: '16px', color: '#666' }}>{label} report coming soon.</p>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/term-01" element={<TermFrame><CubeReport /></TermFrame>} />
        <Route path="/term-02" element={<TermFrame><MeacReport /></TermFrame>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
