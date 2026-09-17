import React from 'react';
import { Link } from 'react-router-dom';

const terms = [
  {
    id: 'term-01',
    number: '01',
    dateLabel: 'FALL 2025',
    name: 'Cube Packaging',
    blurb: 'Project management',
    color: '#440195',
    href: '/term-01',
  },
  {
    id: 'term-02',
    number: '02',
    dateLabel: 'SUMMER 2026',
    name: 'MEAC',
    blurb: 'Web application development',
    color: '#195FA5',
    href: '/term-02',
  },
];

const styles = {
  page: {
    fontFamily: "Arial, sans-serif",
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    borderTop: '6px solid #1a1a1a',
  },
  container: {
    maxWidth: '760px',
    margin: '0 auto',
    padding: '0 40px',
  },
  header: {
    padding: '48px 0 36px',
    borderBottom: '1px solid #e2e2e2',
  },
  eyebrow: {
    fontFamily: "'Courier New', monospace",
    fontSize: '11px',
    color: '#6a6a6a',
    letterSpacing: '0.08em',
    margin: '0 0 14px',
  },
  name: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '42px',
    color: '#1a1a1a',
    margin: '0 0 8px',
    fontWeight: 700,
    letterSpacing: '-0.02em',
  },
  subtitle: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '15px',
    color: '#6a6a6a',
    margin: 0,
    maxWidth: '420px',
    lineHeight: 1.5,
  },
  list: {
    padding: '8px 0 48px',
  },
  row: {
    display: 'flex',
    alignItems: 'center',
    gap: '18px',
    padding: '22px 12px',
    borderRadius: '8px',
    textDecoration: 'none',
    borderBottom: '1px solid #ececec',
    transition: 'background 0.15s ease',
  },
  badge: {
    width: '26px',
    height: '26px',
    borderRadius: '50%',
    color: '#ffffff',
    fontFamily: "'Courier New', monospace",
    fontSize: '12px',
    fontWeight: 700,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  rowMain: {
    flex: 1,
  },
  rowLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: '10px',
    fontWeight: 700,
    margin: '0 0 4px',
    letterSpacing: '0.05em',
  },
  rowName: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    color: '#1a1a1a',
    margin: 0,
    fontWeight: 600,
  },
  rowBlurb: {
    fontFamily: 'Arial, sans-serif',
    fontSize: '13px',
    color: '#6a6a6a',
    margin: 0,
    maxWidth: '220px',
    textAlign: 'right',
  },
  arrow: {
    fontSize: '18px',
    transition: 'color 0.15s ease, transform 0.15s ease',
  },
  moreToCome: {
    fontSize: '12px',
    color: '#8a8a8a',
    margin: '24px 0 0',
    textAlign: 'center',
  },
};

const TermRow = ({ term }) => (
  <Link
    to={term.href}
    className="term-row"
    style={styles.row}
  >
    <div style={{ ...styles.badge, background: term.color }}>{term.number}</div>
    <div style={styles.rowMain}>
      <p style={{ ...styles.rowLabel, color: term.color }}>
        {term.dateLabel}
      </p>
      <p style={styles.rowName}>{term.name}</p>
    </div>
    <p style={styles.rowBlurb}>{term.blurb}</p>
    <span className="term-row-arrow" style={{ ...styles.arrow, color: term.color }}>
      &rarr;
    </span>
  </Link>
);

const LandingPage = () => {
  return (
    <div style={styles.page}>
      <style>
        {`
          .term-row:hover {
            background: #F7F7F5;
          }
          .term-row:hover .term-row-arrow {
            transform: translateX(3px);
          }
        `}
      </style>
      <div style={styles.container}>
        <header style={styles.header}>
          <p style={styles.eyebrow}>CO-OP WORK TERM REPORTS</p>
          <h1 style={styles.name}>Esther Adeosun</h1>
          <p style={styles.subtitle}>
            A running record of what I've built, what I've learned, and
            where it took me, one work term at a time.
          </p>
        </header>

        <div style={styles.list}>
          {terms.map((term) => (
            <TermRow key={term.id} term={term} />
          ))}
          <p style={styles.moreToCome}>+ more to come...</p>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;