import React, { useRef, useState, useEffect } from 'react';
import image1 from "./assets/cube-1.png";
import image2 from "./assets/cube-2.png";
import image3 from "./assets/cube-3.jpg";
import image4 from "./assets/cube-4.png";
import image5 from "./assets/cube-5.png";


const NewspaperPage = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const introRef = useRef(null);
  const cubeRef = useRef(null);
  const workRef = useRef(null);
  const goalsRef = useRef(null);
  const skillsRef = useRef(null);
  const conclusionRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'introduction', ref: introRef },
        { id: 'cube', ref: cubeRef },
        { id: 'work', ref: workRef },
        { id: 'goals', ref: goalsRef },
        { id: 'skills', ref: skillsRef },
        { id: 'conclusion', ref: conclusionRef }
      ];

      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.ref.current) {
          const offsetTop = section.ref.current.offsetTop;
          if (scrollPosition >= offsetTop) {
            setActiveTab(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tabs = [
    { id: 'introduction', label: 'Introduction', ref: introRef },
    { id: 'cube', label: 'Cube Packaging', ref: cubeRef },
    { id: 'work', label: 'The Work', ref: workRef },
    { id: 'goals', label: 'Goals', ref: goalsRef },
    { id: 'skills', label: 'Skills', ref: skillsRef },
    { id: 'conclusion', label: 'Conclusion', ref: conclusionRef }
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
      marginBottom: '0.5rem',
      overflow: 'hidden'
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
      display: 'flex',
      flexWrap: 'wrap'
    },
    navButton: {
      flex: '1 1 auto',
      padding: '0.75rem 1rem',
      fontSize: '0.875rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.2s',
      backgroundColor: 'white',
      color: 'black'
    },
    main: {
      maxWidth: '80rem',
      margin: '0 auto',
      padding: '3rem 1.5rem'
    },
    section: {
      marginBottom: '4rem',
      scrollMarginTop: '4rem'
    },
    articleTitle: {
      fontSize: '2.25rem',
      fontWeight: 'bold',
      borderBottom: '2px solid black',
      paddingBottom: '0.5rem',
      marginBottom: '1.5rem'
    },
    subheading: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginTop: '2rem',
      marginBottom: '1rem',
      borderBottom: '1px solid black',
      paddingBottom: '0.25rem'
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
    goalBox: {
      border: '2px solid black',
      padding: '1.5rem',
      marginBottom: '2rem',
      backgroundColor: '#fafafa'
    },
    goalTitle: {
      fontSize: '1.125rem',
      fontWeight: 'bold',
      marginBottom: '0.5rem'
    },
    goalLabel: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      marginTop: '1rem',
      marginBottom: '0.5rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
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
    },
    goalTwoColumnContainer: {
      display: 'grid',
      gridTemplateColumns: '0.5fr 1.5fr',
      gap: '1.5rem',
      marginBottom: '2.5rem'
    },
    goalColumn: {
      border: '2px solid black',
      padding: '1.25rem',
      backgroundColor: '#fafafa'
    },
    goalColumnTitle: {
      fontSize: '0.875rem',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '0.05em',
      marginBottom: '1rem',
      borderBottom: '1px solid black',
      paddingBottom: '0.5rem'
    },
    goalList: {
      margin: 0,
      paddingLeft: '1.25rem',
      fontSize: '0.9rem',
      lineHeight: '1.6'
    },
    goalText: {
      margin: 0,
      fontSize: '0.9rem',
      lineHeight: '1.6',
      textAlign: 'justify'
    },
  };

  const carouselImages = [
    { src: image1, caption: 'Collage' },
    { src: image2, caption: 'Logo' },
    { src: image3, caption: 'Container in Fridge' },
    { src: image4, caption: 'Containers' },
    { src: image5, caption: 'Football Container' },
    // add more...
  ];

  return (
    <div style={styles.container}>
      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .carousel-scroll:hover {
            animation-play-state: paused;
          }
        `}
      </style>
      
      <header style={styles.header}>
        <div style={styles.headerDate}>FALL 2025 EDITION</div>
        <h1 style={styles.title}>One More Term</h1>
        <div style={styles.subtitleWrapper}>
          <p style={styles.subtitle}>An Amazing Fall Semester at Cube Packaging</p>
          <p style={styles.subtitle}>Esther Adeosun</p>
        </div>
      </header>

      <nav style={styles.nav}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => scrollToSection(tab.ref)}
            style={{
              ...styles.navButton,
              ...(activeTab === tab.id ? { backgroundColor: 'black', color: 'white' } : {})
            }}
            onMouseEnter={(e) => {
              if (activeTab !== tab.id) e.target.style.backgroundColor = '#f3f4f6';
            }}
            onMouseLeave={(e) => {
              if (activeTab !== tab.id) {
                e.target.style.backgroundColor = 'white';
                e.target.style.color = 'black';
              }
            }}
          >
            {tab.label}
          </button>
        ))}
      </nav>

      <main style={styles.main}>
        {/* Introduction */}
        <section ref={introRef} style={styles.section}>
          <article>
            <h2 style={styles.articleTitle}>Introduction</h2>
            
            {/* Auto-scrolling Carousel */}
            <div style={styles.carouselContainer}>
              <div style={styles.carouselTrack} className="carousel-scroll">
                {/* Duplicate the array twice for seamless loop */}
                {[...carouselImages, ...carouselImages].map((image, i) => (
                  <div key={i} style={styles.carouselItem}>
                    <div style={styles.carouselImage}>
                      <img 
                        src={image.src} 
                        alt={image.caption}
                        style={{width: '100%', height: '100%', objectFit: 'cover'}}
                      />
                    </div>
                    <p style={styles.carouselCaption}></p>
                  </div>
                ))}
              </div>
            </div>

            <div style={styles.columns}>
              <p style={styles.paragraph}>
                <span style={styles.dropCap}>T</span>
                his fall marked my first co-op term as a Project Management Intern at Cube Packaging, where I was tasked with migrating an entire product database from Dynamics 365 to Monday.com. Cube has recently expanded into the retail market and while Dynamics 365 handled numerical specs well with product dimensions, weights, specifications. It couldn't manage what Cube actually needed for their expansion: product lifecycles, launch phases, and retail collections. The company was entering a new market, and their infrastructure needed to evolve with them.
              </p>
              <p style={styles.paragraph}>
                While "Project Management Intern" might not sound like traditional software engineering, the work absolutely required that mindset. I approached each product as an object, breaking containers down into component specifications before rebuilding them within Monday.com's architecture. The work involved requirements gathering, data cleaning, establishing relationships between products and their attributes, and building export automations that integrated with Microsoft 365.
              </p>
              <p style={styles.paragraph}>
                This wasn't the developer position I'd initially pictured for my first co-op term. But it became an opportunity to demonstrate that thinking like a software engineer extends beyond writing code. It's about systematic problem-solving, data modeling, and building scalable solutions.
              </p>
              <p style={styles.paragraph}>
                Keep reading to take a look at how computer science principles proved essential in a non-traditional tech role. This report documents the skills gained and lessons learned during a transformative four months.
              </p>
            </div>
          </article>
        </section>

        {/* Cube Packaging */}
        <section ref={cubeRef} style={styles.section}>
          <article>
            <h2 style={styles.articleTitle}>Cube Packaging</h2>
            
            {/* Two-column layout: left has 2 text sections, right has video */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              marginBottom: '2rem'
            }}>
              {/* Left column with two sections */}
              <div>
                <h3 style={styles.subheading}>Nearly Two Decades of Innovation in Food Packaging</h3>
                <div style={{...styles.singleColumn, marginBottom: '2rem'}}>
                  <p style={styles.paragraph}>
                    <span style={styles.dropCap}>I</span>
                    f you've eaten takeout from Boston Pizza, grabbed a meal at East Side Mario's, or picked up lunch from Sunset Grill or Wahlburgers, you've likely held a Cube Packaging Solutions container. Founded in 2007, this Aurora, Ontario-based manufacturer has quietly become a cornerstone of North America's food packaging industry.
                  </p>
                  <p style={styles.paragraph}>
                    Operating from a 168,000 square-foot facility with approximately 80-90 employees, Cube serves an impressive roster of clients spanning foodservice and retail. Their customer base includes major grocery retailers, restaurant chains, catering businesses, food distributors, and meal prep companies across Canada and the United States.
                  </p>
                </div>

                <h3 style={styles.subheading}>What Makes Cube Different</h3>
                <div style={styles.singleColumn}>
                  <p style={styles.paragraph}>
                    Cube differentiates itself through sustainability, customization, and speed. Instead of disposable packaging, they produce durable, injection-molded containers that are microwave-safe, freezer-safe, dishwasher-safe, and leak-resistant, designed for reuse rather than single use.
                  </p>
                  <p style={styles.paragraph}>
                    Cube also offers extensive customization, including Pantone-matched colors, embossed logos, and in-mold labeling, allowing brands to create intentional, distinctive packaging. By manufacturing in North America, they provide significantly faster turnaround times than many overseas competitors.
                  </p>
                </div>
              </div>

              {/* Right column with video */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid black',
                padding: '1rem',
                backgroundColor: '#fafafa'
              }}>
                <iframe
                  src="https://rr5---sn-tt1e7nlz.googlevideo.com/videoplayback?expire=1767996328&ei=iF9habTOL46hir4P7fre6Qg&ip=2607:fea8:1ce4:de00:3035:bfea:acb4:73e0&id=00119177dc06d989&itag=18&source=picasa&begin=0&requiressl=yes&xpc=Eghoy-b0JXoBAQ==&met=1767989128,&mh=i9&mm=32&mn=sn-tt1e7nlz&ms=su&mv=m&mvi=5&pl=49&rms=su,su&sc=yes&susc=ph&app=fife&ic=945&pcm2=yes&mime=video/mp4&vprv=1&prv=1&rqh=1&dur=80.967&lmt=1557339322840791&mt=1767988865&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,susc,app,ic,pcm2,mime,vprv,prv,rqh,dur,lmt&sig=AJfQdSswRQIgBiuJhlPze1u5HPq--GbxkoKUQFPEayl6so5ppkNAvw0CIQDiJqcAAIJiMuoKhkERjh6BIJY10o0F7rAnDO4ROFNU_g==&lsparams=met,mh,mm,mn,ms,mv,mvi,pl,rms,sc&lsig=APaTxxMwRAIgRObL80htVKpXaD9rCVzCeq-c-0IZMo66IE1gz7wNjNACIGzALL61tXUvQ_csUrsq_uOZW-DRms0y7y5DoVBL54pc"
                  style={{
                    width: '100%',
                    height: '400px',
                    border: 'none'
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>

            <h3 style={styles.subheading}>The Retail Revolution</h3>
            <div style={styles.columns}>
              <p style={styles.paragraph}>
                While Cube built its reputation in foodservice packaging, the company has recently been expanding into retail markets. They are the licensed manufacturing partner for Glad's "Take-Aways" brand. Beyond Glad, their retail partnerships include Target, Costco, and Crayola, among others. This shift from business-to-business to business-to-consumer represents more than just new clients. It requires managing product lines as complete projects with phases, launches, and collections, exactly the kind of complexity that outgrew their existing database system.
              </p>
            </div>

            <h3 style={styles.subheading}>A Culture Worth Mentioning</h3>
            <div style={styles.columns}>
              <p style={styles.paragraph}>
                Beyond the impressive client list and sustainability initiatives, Cube maintains a genuinely tight-knit workplace culture. With team lunches, employee appreciation events, and a community-oriented atmosphere, the company earned an outstanding score on their annual audit and completed Fiscal Year 2025 incident-free. For a first co-op term, I couldn't have asked for a better environment to learn, grow, and take on meaningful technical challenges.
              </p>
            </div>
          </article>
        </section>

        {/* The Work */}
        <section ref={workRef} style={styles.section}>
          <article>
            <h2 style={styles.articleTitle}>The Work: Building a Database Where One Wasn't Meant to Exist</h2>
            
            <h3 style={styles.subheading}>Project Overview</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                <span style={styles.dropCap}>M</span>
                y role as Project Management Intern centered entirely on one project: migrating and restructuring Cube Packaging Solutions' product database from Dynamics 365 to Monday.com. This was the focus of my entire four-month term, and for good reason. The project touched every department in the organization and required building database functionality within software that wasn't designed to be a database.
              </p>
            </div>

            <h3 style={styles.subheading}>The Challenge: Making Project Management Software Think Like a Database</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                The most interesting and frustrating aspect of this role was the fundamental constraint I was working within. Monday.com is project management software. It's built to track tasks, manage workflows, and coordinate teams. It's not built to be a relational database managing hundreds of products with complex specifications, variants, and interdependencies. But that's exactly what Cube needed, and that's exactly what I had to build.
              </p>
              <p style={styles.paragraph}>
                This constraint shaped everything. Features that would be straightforward in a traditional database system required creative workarounds in Monday.com. Establishing relationships between products and their specifications meant designing custom automations and formula columns that mimicked foreign keys. Handling product variants and exceptions required thinking about inheritance and composition in ways the platform wasn't explicitly designed to support. Every technical decision involved asking "Can Monday.com even do this?" and then figuring out how to make it happen anyway.
              </p>
            </div>

            <h3 style={styles.subheading}>A Day in the Life</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                Most days began with a brief check-in with my supervisor to set priorities, which included resolving data issues, updating boards, or building new automations. The majority of my time was spent working independently: cleaning data, designing board structures, testing workflows, and documenting changes. Every few weeks, we met with different departments to review and gather feedback.
              </p>
            </div>

            <h3 style={styles.subheading}>Data Cleaning: The Foundation</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                Before building anything, I had to understand and clean the existing data. Product information was spread across multiple systems, spreadsheets, and formats, often with inconsistencies that couldn't be corrected at the source. Naming conventions varied, descriptions conflicted, and legacy product codes were locked in. My very first job was to audit the data, cross-reference sources, and determine which information was correct.
              </p>
            </div>

            <h3 style={styles.subheading}>Database Design</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                Once the data was understood, I designed the system by treating products as modular objects. Each product had base attributes, while variants inherited those properties and added custom elements like colors, logos, or packaging requirements. This approach made the system scalable and easier to maintain.
              </p>
            </div>

            <h3 style={styles.subheading}>Automation and Integration</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                Beyond structure, the database needed to support daily workflows. I built automations for reporting, document generation, notifications, and integrations with tools like Excel, SharePoint, and Outlook. These automations replaced several manual processes, allowing users to generate up-to-date documents and reports with minimal effort. The result was a system that wasn’t just a data repository, but an active tool that supported operations across departments.
              </p>
            </div>
          </article>
        </section>

        {/* Goals */}
        {/* Goals */}
        <section ref={goalsRef} style={styles.section}>
          <article>
            <h2 style={styles.articleTitle}>Goals</h2>
            
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                <span style={styles.dropCap}>W</span>
                alking into my first co-op term, I didn't entirely know what to expect. This wasn't a traditional software development role, and the corporate world felt like unfamiliar territory. But uncertainty doesn't mean directionless. I set out with clear intentions about what I wanted to learn and how I wanted to grow.
              </p>
            </div>

            <h3 style={styles.subheading}>Goal 1: Gain Hands-On Experience with Database Design and Data Migration in a Business Setting</h3>
            <div style={styles.goalTwoColumnContainer}>
              <div style={styles.goalColumn}>
                <h4 style={styles.goalColumnTitle}>Goal</h4>
                <p style={styles.goalText}>I wanted to apply database concepts from my coursework to a real business environment and understand how working with live organizational data differs from academic datasets. My plan was to learn Monday.com’s structure, and apply consistency and validation principles where possible. Success would mean contributing to the database migration while maintaining data integrity and building a system that supported daily operations.</p>
              </div>
              <div style={styles.goalColumn}>
                <h4 style={styles.goalColumnTitle}>Reflection</h4>
                <p style={styles.goalText}>

                Working with real business data was nothing like the carefully curated datasets from coursework. Legacy Dynamics 365 data had inconsistent naming conventions, black coded as "B" in some products, "BLK" in others. I spent two weeks scanning through data to understand what we were working with. Data integrity became central to everything I built.
                <br />I developed numerous input validation automations to catch errors before they became problems. The system would flag product codes that didn't follow the required format, alert users when required fields were missing, and catch duplicate codes or descriptions before they entered the database. These safeguards were necessary to prevent the kind of data chaos that had accumulated in the old system.
                <br />The biggest takeaway was understanding how databases support real business operations. In school, databases are often framed around query optimization and normalization. In practice, they’re about making people’s jobs easier. I also learned that datasets are rarely clean or perfect and they can’t be treated as such. Careful validation, error handling, and attention to detail are essential, but so is designing systems with humans in mind.

                </p>
              </div>
            </div>

            <h3 style={styles.subheading}>Goal 2: Learn Enterprise Business Tools and Automation Platforms</h3>
            <div style={styles.goalTwoColumnContainer}>
              <div style={styles.goalColumn}>
                <h4 style={styles.goalColumnTitle}>Goal</h4>
                <p style={styles.goalText}>I wanted to gain exposure to enterprise business tools and understand how companies use automation to support real workflows beyond traditional development environments. My plan was to learn Monday.com in depth, explore Microsoft 365 integrations, and identify opportunities to automate repetitive tasks. I defined success as feeling confident using these tools for complex workflows and building automations that meaningfully improved efficiency.</p>
              </div>
              
              <div style={styles.goalColumn}>
                <h4 style={styles.goalColumnTitle}>Reflection</h4>
                <p style={styles.goalText}>
                I went into this expecting to build "a few useful automations." I ended up creating over 30 complex workflow automations and 45 simpler ones. Complex automations involve connecting multiple boards and databases together, often with multi-conditional logic, overriding existing data, and more. 
                <br />The automation work had a tangible impact beyond just reducing clicks. When I started, there were several documents that departments relied on. Some were generated manually, requiring someone to pull data from the database and input it into templates. Others already had basic automation. I converted the manual processes to fully automated workflows and refactored the existing automations to be more efficient. The time savings were significant, particularly for my supervisor, who had been responsible for many of these manual tasks.
                <br />Beyond Monday.com, I gained exposure to Dynamics 365 Operations through the migration process. Understanding how D365 structured data helped me design a better system in Monday.com. I learned that enterprise tools each have their strengths and limitations. A good software isn't just about features. It's about whether the tool matches how people actually work. Monday.com succeeded at Cube because it was flexible enough to adapt to their processes. I learned that the best tools serve the workflow, not the other way around. I wouldn't have learned without seeing these systems in action across an entire organization.
                </p>
              </div>
            </div>

            <h3 style={styles.subheading}>Goal 3: Take Leadership & Ownership of Meaningful Work</h3>
            <div style={styles.goalTwoColumnContainer}>
              <div style={styles.goalColumn}>
                <h4 style={styles.goalColumnTitle}>Goal</h4>
                <p style={styles.goalText}>I wanted to take ownership of meaningful work rather than limiting my role to support or observational tasks. My plan was to proactively identify problems, volunteer to lead initiatives, and take responsibility for project outcomes. Success would mean working on something with real business impact and building a system that outlasted my co-op term.</p>
              </div>
              <div style={styles.goalColumn}>
                <h4 style={styles.goalColumnTitle}>Reflection</h4>
                <p style={styles.goalText}>
                This goal became very real in ways I didn't fully anticipate. The database migration truly became my project, and I knew it when my supervisor started asking me questions about the system's inner workings. If she didn't have all the details anymore, that meant the responsibility had shifted to me. I knew the database inside and out.
                <br />The adoption across departments confirmed the impact my work was having. About ten people came up to me spontaneously throughout the term to thank me for the work and mentioned how much easier the database was making their jobs. The feedback was consistent: having information centralized meant they didn't have to waste time searching across multiple systems anymore.
                <br />What solidified the ownership feeling was watching departments actually use what I'd built. During our casual check-ins in the days and weeks following training, teams reported that things were going well. But more meaningfully, they started treating me as the expert, asking questions directly, flagging issues. That shift from "the intern helping with a project" to "the person who owns this system" was gradual but unmistakable. I built something that will outlast my term, and that matters.
                </p>
              </div>
            </div>

            <h3 style={styles.subheading}>Goal 4: Communication and Documentation</h3>
            <div style={styles.goalTwoColumnContainer}>
              <div style={styles.goalColumn}>
                <h4 style={styles.goalColumnTitle}>Goal</h4>
                < p style={styles.goalText}>I wanted to become more confident communicating technical concepts and creating clear documentation for non-technical users. My plan was to consistently document system decisions, prepare for meetings and presentations, and practice explaining my ideas out loud. Success would mean being able to lead training sessions and produce documentation that others could follow independently.</p>
              </div>
              <div style={styles.goalColumn}>
                <h4 style={styles.goalColumnTitle}>Reflection</h4>
                <p style={styles.goalText}>
                Over the course of the term, I led three training sessions for the Purchasing, Sales, and Customer Service departments. Each session covered the essentials: how to filter, query, export and navigate the database. Teaching non-technical users how to interact with a system I'd built from scratch required me to think differently about how I explained things.. using clear, practical guidance.
                <br />Beyond formal training, I conducted five database update reviews and check-ins with department heads. These were casual but important. I'd demo what we'd built so far, and they'd respond with feedback. I took notes on what was feasible and had to learn when to say no. Some requests were limited by Monday.com's capabilities, others I had to decline after consulting with IT. Those conversations still went well because even with limitations, what I'd created was still significantly better than what existed before.
                <br />Documentation work was extensive. I documented six of these boards individually, treating each as its own mini-database while ensuring they worked together as a cohesive whole. The documentation included FAQs, user guides, instructions for exporting and filtering data, and visual Scribe tutorials showing step-by-step how to access and find information.
                <br />The confidence shift was gradual but noticeable. The first two or three presentations made me nervous. But by the third or fourth session, something clicked. I knew what I was talking about. I was the expert in the room. The  realization that I could confidently field questions, explain technical decisions, and guide people through a system I'd architected felt like proof that the goal had been achieved.
                </p>
              </div>
            </div>
          </article>
        </section>

        {/* Skills */}
        <section ref={skillsRef} style={styles.section}>
          <article>
            <h2 style={styles.articleTitle}>Skills</h2>
            
            <h3 style={styles.subheading}>From Goals to Practice</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                <span style={styles.dropCap}>B</span>
                y the end of this co-op term, my growth extended beyond the specific goals I set. The biggest shift was in how I approached problems—less in terms of isolated tasks, and more in terms of systems, people, and constraints.
              </p>
            </div>

            <h3 style={styles.subheading}>Systems & Technical Thinking</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                The most valuable technical skill I developed was systems thinking. Rather than focusing on individual features or datasets, I learned to consider how information moves through an organization and how changes in one area affect others. Designing the database required thinking in terms of entities, states, and dependencies. Even without writing traditional code, the work closely mirrored core software engineering concepts.
              </p>
            </div>

            <h3 style={styles.subheading}>Professional & Project Skills</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
              A key part of this role was designing processes that matched how people actually worked. I learned that a technically sound system only succeeds if it fits naturally into daily workflows and reduces friction rather than adding to it.
              Stakeholder communication became essential. I worked with teams that had different priorities and levels of technical familiarity, which required translating between business needs and technical decisions. Knowing when to explain, adjust, or push back was just as important as building the system itself.
              Clear documentation ensured the system could function without my involvement. Writing with future users in mind reinforced the importance of maintainability and long-term thinking in technical work.
              Managing the transition between systems also introduced me to real deployment considerations. Changes needed to be tested carefully and rolled out in phases to avoid disrupting operations, which gave me a strong appreciation for stability and risk management.

              </p>
            </div>

            <h3 style={styles.subheading}>Relevance to Software Engineering</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                The skills I developed are foundational to software engineering. Systems thinking, understanding data relationships, and anticipating edge cases apply directly to building scalable software. This experience also gave me confidence in owning complex technical projects. I navigated ambiguity, balanced competing requirements, and delivered a system people now rely on.
              </p>
            </div>
          </article>
        </section>

        {/* Conclusion */}
        <section ref={conclusionRef} style={styles.section}>
          <article>
            <h2 style={styles.articleTitle}>Conclusion</h2>
            
            <h3 style={styles.subheading}>What This Term Changed for Me</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                <span style={styles.dropCap}>L</span>
                ooking back, this co op term changed how I think about computing and about myself more than any single tool or platform I worked with. It showed me that computing is not defined by job titles or programming languages, but by how you think, adapt, and solve problems in unfamiliar spaces.
              </p>
              <p style={styles.paragraph}>
                One of the biggest shifts was realizing how transferable my technical skills really are. Concepts like data modeling, structured thinking, and problem decomposition applied directly to this role, even without traditional software development. It reinforced that tools can always be learned, but strong fundamentals are what make you adaptable.
              </p>
              <p style={styles.paragraph}>
              This term pushed me into discomfort in the best way. Working with messy data, platform limitations, and evolving requirements forced me to be patient, persistent, and creative. Over time, I learned to trust myself to figure things out, even when the solution was not obvious. That confidence reshaped the kind of work I want to pursue, work that is challenging, complex, and requires real ownership.
              </p>
              <p style={styles.paragraph}>
                I also gained a deeper appreciation for automation and data integrity. In practice, systems only work when they account for human error and imperfect data. Building automations became less about saving time and more about designing reliable systems that can last.
              </p>
              <p style={styles.paragraph}>
                Most importantly, this experience taught me how meaningful ownership can be. Being responsible for a system used across departments gave my work a sense of purpose I had not felt before. It showed me that impact comes from accountability, not titles, and that computing skills have value far beyond traditional tech roles.
              </p>
            </div>

            <h3 style={styles.subheading}>What I Want You to Remember</h3>
            <div style={styles.singleColumn}>
              <p style={styles.paragraph}>
                If someone asks you what this work term report was about, here's what I hope you'd say: A computing student took on a non-traditional role and proved that software engineering principles apply far beyond traditional coding. They migrated an entire company's product database, built 75+ automations, and took ownership of a project that touched every department. They showed that technical thinking is modular and transferable, that real-world work is messy and challenging in ways school doesn't prepare you for, and that meaningful work comes from ownership and perseverance.
              </p>
              <p style={styles.paragraph}>
                This wasn't the co-op term I expected. It was better. It challenged me, taught me skills I didn't know I needed, and fundamentally changed how I think about what's possible in a computing career. I came in uncertain about what a non-traditional role would teach me. I'm leaving certain that technical thinking is valuable everywhere, you just have to recognize where to apply it.
              </p>
            </div>
          </article>
        </section>
      </main>

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