import React from 'react';
import { Link } from 'react-router-dom';

// Border color pulled from the landing page's sky gradient, so each
// term report reads as part of the same site rather than a separate page.
const FRAME_COLOR = '#000000';

const styles = {
  frame: {
    border: `14px solid ${FRAME_COLOR}`,
    minHeight: '100vh',
    boxSizing: 'border-box',
    position: 'relative',
  },
  backButton: {
    position: 'fixed',
    top: '28px',
    left: '28px',
    zIndex: 100,
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    background: '#fff',
    border: `1.5px solid ${FRAME_COLOR}`,
    borderRadius: '999px',
    padding: '8px 16px 8px 12px',
    fontFamily: "'Helvetica Neue', Arial, sans-serif",
    fontSize: '13px',
    fontWeight: 500,
    color: '#1a1a1a',
    textDecoration: 'none',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
  },
};

const TermFrame = ({ children }) => (
  <div style={styles.frame}>
    <style>
      {`
        .back-to-journey:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 16px rgba(0,0,0,0.14);
        }
      `}
    </style>
    <Link to="/" className="back-to-journey" style={styles.backButton}>
      <i className="ti ti-arrow-left" style={{ fontSize: '15px' }} aria-hidden="true" />
      Back to Home
    </Link>
    {children}
  </div>
);

export default TermFrame;