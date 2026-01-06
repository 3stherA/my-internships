import React, { useState } from 'react';

const NewspaperPage = () => {
  const [activeTab, setActiveTab] = useState('introduction');

  const tabs = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'cube', label: 'Cube Packaging' },
    { id: 'learnings', label: 'Key Learnings' },
    { id: 'reflections', label: 'Final Thoughts' }
  ];

  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: 'white',
      color: 'black',
      fontFamily: 'Times New Roman, serif'
    },
    carouselContainer: {
      overflow: 'hidden',
      marginBottom: '2rem',
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
      padding: '1rem 0',
      backgroundColor: '#fafafa'
    },
    carouselTrack: {
      display: 'flex',
      gap: '1.5rem',
      animation: 'scroll 30s linear infinite'
    },
    carouselItem: {
      minWidth: '250px',
      flexShrink: 0
    },
    carouselImage: {
      width: '250px',
      height: '200px',
      backgroundColor: '#e5e5e5',
      border: '2px solid black',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '0.5rem'
    },
    placeholderText: {
      fontSize: '0.875rem',
      color: '#666',
      fontFamily: 'Times New Roman, serif'
    },
    carouselCaption: {
      fontSize: '0.75rem',
      textAlign: 'center',
      fontStyle: 'italic',
      margin: 0
    },
    header: {
      borderBottom: '4px solid black',
      padding: '2rem 1.5rem',
      textAlign: 'center'
    },
    headerDate: {
      fontSize: '0.75rem',
      letterSpacing: '0.15em',
      marginBottom: '0.25rem'
    },
    title: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      letterSpacing: '-0.025em',
      marginBottom: '0.5rem',
      lineHeight: '1'
    },
    subtitleWrapper: {
      borderTop: '2px solid black',
      borderBottom: '2px solid black',
      padding: '0.25rem 2rem',
      display: 'inline-block'
    },
    subtitle: {
      fontSize: '0.875rem',
      fontStyle: 'italic'
    },
    nav: {
      borderBottom: '2px solid black',
      backgroundColor: 'white',
      position: 'sticky',
      top: 0,
      zIndex: 10,
      display: 'flex'
    },
    navButton: {
      flex: 1,
      padding: '0.75rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s'
    },
    navButtonActive: {
      backgroundColor: 'black',
      color: 'white'
    },
    navButtonInactive: {
      backgroundColor: 'white',
      color: 'black'
    },
    main: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '3rem 1.5rem'
    },
    articleTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      borderBottom: '2px solid black',
      paddingBottom: '0.5rem',
      marginBottom: '1.5rem'
    },
    columns: {
      columnCount: 2,
      columnGap: '2rem',
      textAlign: 'justify',
      lineHeight: '1.625'
    },
    paragraph: {
      marginBottom: '1rem'
    },
    dropCap: {
      fontSize: '4rem',
      float: 'left',
      marginRight: '0.5rem',
      lineHeight: '1',
      fontWeight: 'bold'
    },
    singleColumn: {
      textAlign: 'justify',
      lineHeight: '1.625'
    },
    placeholder: {
      fontStyle: 'italic',
      textAlign: 'center',
      padding: '1rem 0'
    },
    footer: {
      borderTop: '4px solid black',
      marginTop: '3rem',
      padding: '1.5rem',
      textAlign: 'center',
      fontSize: '0.75rem'
    },
    footerParagraph: {
      marginBottom: '0.25rem'
    }
  };

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .carousel-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      {/* Newspaper Header */}
      <header style={styles.header}>
        <div style={styles.headerDate}>FALL 2024 EDITION</div>
        <h1 style={styles.title}>One More Term</h1>
        <div style={styles.subtitleWrapper}>
          <p style={styles.subtitle}>An Amazing Fall Semester at Cube Packaging</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav style={styles.nav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              ...styles.navButton,
              ...(activeTab === tab.id ? styles.navButtonActive : styles.navButtonInactive)
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) {
                e.target.style.backgroundColor = '#f3f4f6';
              }
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.target.style.backgroundColor = 'white';
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      {/* Content Area */}
      <main style={styles.main}>
        {activeTab === 'introduction' && (
          <article>
            <h2 style={styles.articleTitle}>Introduction</h2>
            
            {/* Auto-scrolling Carousel */}
            <div style={styles.carouselContainer}>
              <div style={styles.carouselTrack} className="carousel-scroll">
                {[...Array(12)].map((_, i) => (
                  <div key={i} style={styles.carouselItem}>
                    <div style={styles.carouselImage}>
                      <div style={styles.placeholderText}>Image {(i % 6) + 1}</div>
                    </div>
                    <p style={styles.carouselCaption}>Internship Moment {(i % 6) + 1}</p>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.columns}>
              <p style={styles.paragraph}>
                <span style={styles.dropCap}>T</span>
                his fall semester marked an incredible journey at Cube Packaging, where theory met practice and classroom knowledge transformed into real-world impact. Over the course of several months, I had the opportunity to immerse myself in the dynamic world of packaging solutions, working alongside industry professionals and contributing to meaningful projects.
              </p>
              <p style={styles.paragraph}>
                The internship provided an invaluable bridge between academic learning and professional application. Each day brought new challenges, learning opportunities, and chances to grow both technically and personally. From the moment I walked through the doors, I was welcomed into a culture of innovation and excellence.
              </p>
              <p style={styles.paragraph}>
                What follows is a reflection on this transformative experience—the projects undertaken, the skills developed, the relationships forged, and the lessons learned that will shape my professional journey for years to come.
              </p>
            </div>
          </article>
        )}

        {activeTab === 'cube' && (
          <article>
            <h2 style={styles.articleTitle}>Cube Packaging</h2>
            <div style={styles.columns}>
              <p style={styles.paragraph}>
                <span style={styles.dropCap}>C</span>
                ube Packaging stands at the forefront of innovative packaging solutions, combining cutting-edge technology with sustainable practices. The company's commitment to excellence and client satisfaction creates an environment where interns can truly make an impact.
              </p>
              <p style={styles.paragraph}>
                During my time at Cube, I worked on various projects that challenged me to apply my academic knowledge in practical scenarios. The team's collaborative approach and willingness to mentor made every day a learning experience.
              </p>
              <p style={styles.paragraph}>
                The company's focus on innovation and sustainability aligned perfectly with my personal values, making this internship not just a professional opportunity but a chance to contribute to meaningful work in an industry that's constantly evolving.
              </p>
            </div>
          </article>
        )}

        {activeTab === 'learnings' && (
          <article>
            <h2 style={styles.articleTitle}>Key Learnings</h2>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                <span style={styles.dropCap}>T</span>
                hroughout this internship, I gained invaluable insights and developed skills that will serve as the foundation for my future career. This section will detail the technical competencies acquired, the professional skills honed, and the personal growth experienced during this transformative period.
              </p>
              <p style={{...styles.paragraph, ...styles.placeholder}}>
                [Content to be added - Your key learnings and takeaways]
              </p>
            </div>
          </article>
        )}

        {activeTab === 'reflections' && (
          <article>
            <h2 style={styles.articleTitle}>Final Thoughts</h2>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                <span style={styles.dropCap}>A</span>
                s this chapter closes and I reflect on my time at Cube Packaging, I'm filled with gratitude for the experiences, challenges, and growth opportunities that this fall semester provided. This section captures my final reflections and thoughts on how this internship has shaped my professional trajectory.
              </p>
              <p style={{...styles.paragraph, ...styles.placeholder}}>
                [Content to be added - Your final reflections and future outlook]
              </p>
            </div>
          </article>
        )}
      </main>

      {/* Newspaper Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerParagraph}>
          Published {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>
        <p style={{fontStyle: 'italic'}}>A Reflection on Professional Growth and Development</p>
      </footer>
    </div>
  );
};

export default NewspaperPage;