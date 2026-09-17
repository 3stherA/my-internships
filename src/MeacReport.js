import React, { useRef, useState, useEffect } from 'react';

import appIconImage from './assets/meac-logo.png';
import termOverviewImage from './assets/term-overview-screenshot.PNG';
import meacBuildingImage from './assets/meac-building.png';
import workplaceImage from './assets/workplace.jpg';
import timekeepScreenshotImage from './assets/timekeep-screenshot.PNG';
import foodBankScreenshotImage from './assets/foodbank-screenshot.PNG';
import uiBeforeImage from './assets/ui-before.png';
import uiAfterImage from './assets/ui-after.PNG';
import mondayScreenshotImage from './assets/monday-screenshot.png';
import skillsPhotoImage from './assets/team-or-workspace-photo.PNG';

const appIconImg = appIconImage;
const termOverviewImg = termOverviewImage;
const meacBuildingImg = meacBuildingImage;
const workplaceImg = workplaceImage;
const timekeepScreenshotImg = timekeepScreenshotImage;
const foodBankScreenshotImg = foodBankScreenshotImage;
const uiBeforeImg = uiBeforeImage;
const uiAfterImg = uiAfterImage;
const mondayScreenshotImg = mondayScreenshotImage;
const skillsPhotoImg = skillsPhotoImage;

const APP_ICON_BG = '#FFFFFF';

const styles = {
  page: {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    fontFamily: "Arial, sans-serif",
  },
  nav: {
    position: 'sticky',
    top: 0,
    zIndex: 10,
    display: 'flex',
    flexWrap: 'wrap',
    background: '#ffffff',
    borderBottom: '1px solid #e2e2e2',
  },
  navButton: {
    flex: '1 1 auto',
    padding: '14px 10px',
    fontSize: '12px',
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    border: 'none',
    cursor: 'pointer',
    background: 'transparent',
    color: '#6a6a6a',
    transition: 'color 0.2s ease',
  },
  navButtonActive: {
    color: '#195FA5',
    background: 'rgba(25,95,165,0.08)',
    boxShadow: 'inset 0 -3px 0 0 #195FA5',
  },
  hero: {
    padding: '48px 28px 36px',
    borderBottom: '1px solid #e2e2e2',
    borderTop: '6px solid #195FA5',
    background: 'linear-gradient(180deg, #F5F9FD 0%, #ffffff 130px)',
  },
  heroTop: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '22px',
  },
  appIcon: {
    width: '64px',
    height: '64px',
    borderRadius: '16px',
    background: APP_ICON_BG,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  heroName: {
    fontSize: '19px',
    color: '#1a1a1a',
    margin: 0,
    fontWeight: 500,
  },
  heroSub: {
    fontSize: '12px',
    color: '#6a6a6a',
    margin: '2px 0 0',
  },
  shippedBadge: {
    marginLeft: 'auto',
    background: '#195FA5',
    color: '#ffffff',
    fontSize: '12px',
    fontWeight: 500,
    padding: '7px 18px',
    borderRadius: '8px',
  },
  tagline: {
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
    fontSize: '22px',
    color: '#1a1a1a',
    margin: 0,
    maxWidth: '560px',
    lineHeight: 1.4,
  },
  main: {
    maxWidth: '960px',
    margin: '0 auto',
    padding: '0 28px',
  },
  section: {
    padding: '56px 0',
    borderBottom: '1px solid #ececec',
    scrollMarginTop: '60px',
  },
  sectionNumberBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '22px',
    height: '22px',
    borderRadius: '50%',
    background: '#195FA5',
    color: '#ffffff',
    fontFamily: "'Courier New', monospace",
    fontSize: '11px',
    fontWeight: 700,
    marginRight: '8px',
  },
  sectionLastNoBorder: {
    borderBottom: 'none',
  },
  sectionRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '48px',
  },
  sectionRowReverse: {
    flexDirection: 'row-reverse',
  },
  sectionText: {
    flex: 1,
  },
  sectionLabel: {
    fontFamily: "'Courier New', monospace",
    fontSize: '11px',
    color: '#195FA5',
    margin: '0 0 10px',
    letterSpacing: '0.05em',
    display: 'flex',
    alignItems: 'center',
  },
  sectionHeading: {
    fontSize: '26px',
    color: '#1a1a1a',
    margin: '0 0 16px',
    fontWeight: 500,
  },
  sectionParagraph: {
    fontSize: '14px',
    color: '#4a4a4a',
    lineHeight: 1.7,
    margin: '0 0 12px',
  },
  phoneWrap: {
    flex: '0 0 220px',
  },
  phone: {
    width: '220px',
    height: '500px',
    background: '#F5F9FD',
    borderRadius: '28px',
    border: '3px solid #195FA5',
    padding: '8px',
  },
  phoneScreen: {
    width: '100%',
    height: '100%',
    borderRadius: '20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '16px',
  },
  phoneScreenLabel: {
    color: '#195FA5',
    fontFamily: "'Courier New', monospace",
    fontSize: '11px',
    margin: 0,
  },
  goalCard: {
    border: '1px solid #e2e2e2',
    borderLeft: '4px solid #195FA5',
    borderRadius: '10px',
    padding: '22px 24px',
    marginTop: '18px',
    background: '#F5F9FD',
  },
  goalCardPartial: {
    borderLeft: '4px solid #C99A00',
    background: '#FFFBF0',
  },
  goalTwoColumnContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    marginTop: '14px',
  },
  goalColumn: {
    border: '1px solid #d8d8d8',
    borderRadius: '8px',
    padding: '16px 18px',
    background: '#ffffff',
  },
  goalColumnTitle: {
    fontSize: '11px',
    fontFamily: "'Courier New', monospace",
    fontWeight: 700,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    color: '#195FA5',
    margin: '0 0 10px',
    borderBottom: '1px solid #e2e2e2',
    paddingBottom: '8px',
  },
  goalHeadRow: {
    display: 'flex',
    alignItems: 'baseline',
    gap: '10px',
    marginBottom: '10px',
  },
  goalTitle: {
    fontSize: '15px',
    color: '#1a1a1a',
    margin: 0,
    fontWeight: 600,
  },
  goalStatus: {
    fontSize: '11px',
    fontFamily: "'Courier New', monospace",
    padding: '2px 10px',
    borderRadius: '999px',
  },
  goalStatusMet: {
    color: '#ffffff',
    background: '#195FA5',
  },
  goalStatusPartial: {
    color: '#4a3a00',
    background: '#F7DE4A',
  },
  goalText: {
    fontSize: '14px',
    color: '#4a4a4a',
    lineHeight: 1.7,
    margin: 0,
  },
  conclusionHeading: {
    fontSize: '22px',
    color: '#1a1a1a',
    margin: '0 0 16px',
    fontWeight: 500,
  },
  conclusionQuote: {
    fontFamily: 'Georgia, serif',
    fontStyle: 'italic',
    fontSize: '18px',
    color: '#1a1a1a',
    lineHeight: 1.6,
    margin: '0 0 16px',
    borderLeft: '3px solid #195FA5',
    paddingLeft: '20px',
  },
  footer: {
    textAlign: 'center',
    padding: '32px 0 48px',
    fontSize: '11px',
    color: '#8a8a8a',
    borderTop: '2px solid #195FA5',
  },
  imageStub: {
    border: '1.5px dashed #9FC2E0',
    borderRadius: '10px',
    background: '#F5F9FD',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#195FA5',
    fontFamily: "'Courier New', monospace",
    fontSize: '11px',
    textAlign: 'center',
    padding: '16px',
    gap: '4px',
  },
  imageStubFilled: {
    border: 'none',
    background: 'transparent',
    display: 'block',
    padding: 0,
  },
  imageStubImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    display: 'block',
  },
  appNameAccent: {
    color: '#195FA5',
    fontWeight: 600,
  },
  clickableImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '10px',
    display: 'block',
    cursor: 'zoom-in',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(20,20,22,0.85)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '32px',
    cursor: 'zoom-out',
  },
  modalImage: {
    maxWidth: '90vw',
    maxHeight: '90vh',
    objectFit: 'contain',
    borderRadius: '8px',
    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
  },
  modalClose: {
    position: 'fixed',
    top: '24px',
    right: '28px',
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    background: '#ffffff',
    color: '#1a1a1a',
    border: 'none',
    fontSize: '18px',
    cursor: 'pointer',
    zIndex: 1001,
  },
};

const ImageModalContext = React.createContext(() => {});

const ImageStub = ({ src, alt, filename, height = '220px', width = '100%' }) => {
  const openModal = React.useContext(ImageModalContext);
  return (
    <div style={{ width, height }}>
      {src ? (
        <img
          src={src}
          alt={alt}
          style={styles.clickableImage}
          onClick={() => openModal(src, alt)}
        />
      ) : (
        <div style={{ ...styles.imageStub, width: '100%', height: '100%' }}>
          <i className="ti ti-photo" style={{ fontSize: '22px' }} aria-hidden="true" />
          <span>{filename}</span>
        </div>
      )}
    </div>
  );
};

const Phone = ({ label, image, filename }) => {
  const openModal = React.useContext(ImageModalContext);
  return (
    <div style={styles.phoneWrap}>
      <div style={styles.phone}>
        {image ? (
          <img
            src={image}
            alt={label}
            style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px', cursor: 'zoom-in' }}
            onClick={() => openModal(image, label)}
          />
        ) : (
          <div style={{ ...styles.imageStub, width: '100%', height: '100%', borderRadius: '20px' }}>
            <i className="ti ti-photo" style={{ fontSize: '22px' }} aria-hidden="true" />
            <span>{filename || label}</span>
          </div>
        )}
      </div>
    </div>
  );
};

const GoalCard = ({ number, title, status, goal, children }) => (
  <div style={{ ...styles.goalCard, ...(status === 'partial' ? styles.goalCardPartial : {}) }}>
    <div style={styles.goalHeadRow}>
      <p style={styles.goalTitle}>Goal {number}: {title}</p>
      <span
        style={{
          ...styles.goalStatus,
          ...(status === 'met' ? styles.goalStatusMet : styles.goalStatusPartial),
        }}
      >
        {status === 'met' ? 'met' : 'partially met'}
      </span>
    </div>
    <div style={styles.goalTwoColumnContainer}>
      <div style={styles.goalColumn}>
        <p style={styles.goalColumnTitle}>Goal</p>
        <div style={styles.goalText}>{goal}</div>
      </div>
      <div style={styles.goalColumn}>
        <p style={styles.goalColumnTitle}>Reflection</p>
        <div style={styles.goalText}>{children}</div>
      </div>
    </div>
  </div>
);

const sections = [
  { id: 'introduction', label: 'Introduction' },
  { id: 'meac', label: 'MEAC' },
  { id: 'work', label: 'The Apps' },
  { id: 'skills', label: 'The Job' },
  { id: 'goals', label: 'Goals' },
  { id: 'conclusion', label: 'Conclusion' },
];

const MeacReport = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [modalImage, setModalImage] = useState(null);
  const openModal = (src, alt) => setModalImage({ src, alt });
  const closeModal = () => setModalImage(null);
  const refs = {
    introduction: useRef(null),
    meac: useRef(null),
    work: useRef(null),
    goals: useRef(null),
    skills: useRef(null),
    conclusion: useRef(null),
  };

  const scrollTo = (id) => {
    refs[id].current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = refs[sections[i].id].current;
        if (el && scrollPosition >= el.offsetTop) {
          setActiveTab(sections[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ImageModalContext.Provider value={openModal}>
    <div style={styles.page}>
      <header style={styles.hero}>
        <div style={styles.heroTop}>
          <div style={styles.appIcon}>
            {appIconImg ? (
              <img src={appIconImg} alt="MeacTimekeep app icon" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }} />
            ) : (
              <i className="ti ti-clock" style={{ fontSize: '30px', color: '#ffffff' }} aria-hidden="true" />
            )}
          </div>
          <div>
            <p style={styles.heroName}>MEAC: Returning Web Application Developer</p>
            <p style={styles.heroSub}>Esther Adeosun, June to August 2026</p>
          </div>
          <div style={styles.shippedBadge}>Shipped</div>
        </div>
        <p style={styles.tagline}>
          A second term back with MEAC.
        </p>
      </header>

      <nav style={styles.nav}>
        {sections.map((s) => (
          <button
            key={s.id}
            onClick={() => scrollTo(s.id)}
            style={{
              ...styles.navButton,
              ...(activeTab === s.id ? styles.navButtonActive : {}),
            }}
          >
            {s.label}
          </button>
        ))}
      </nav>

      <main style={styles.main}>
        {/* Introduction */}
        <section ref={refs.introduction} style={styles.section}>
          <div style={styles.sectionRow}>
            <div style={styles.sectionText}>
              <p style={styles.sectionLabel}><span style={styles.sectionNumberBadge}>01</span>introduction</p>
              <h2 style={styles.sectionHeading}>Coming back for a second term</h2>
              <p style={styles.sectionParagraph}>
                In spring of 2026, I received an email from Meadowvale East
                Apostolic Church, or MEAC, asking if I'd come back for another
                term. During my first term there the summer before, I'd built
                them a food bank management app and a staff timekeeping app
                entirely from scratch. I sat down and interviewed staff, and we
                figured out what they actually needed as I built it.
              </p>
              <p style={styles.sectionParagraph}>
                This time was different. After a year of actually using the
                apps, MEAC was looking for improvements. At first, I was
                reluctant to take on a second term, but I knew I had to see this
                project through to completion. This term would be the less
                glamorous work of making my apps reliable. That meant testing
                every workflow and chasing down bugs, not to get the apps ready
                for real staff to depend on, since they'd already been depending
                on them for a year, but to make them more reliable, more sturdy,
                for the people already using them every day.
              </p>
              <p style={styles.sectionParagraph}>
                So from June to August 2026, that's what I did, and what I
                didn't anticipate was how much that background work would
                matter. Partway through the term, MEAC told me something I
                hadn't seen coming. They liked <span style={styles.appNameAccent}>MeacTimekeep</span> enough to want it
                running at a second organization, Grace Place Church Food Bank.
                What started as a refinement project turned into a rebuild. I
                took an app built for one organization and re-architected it to
                serve many. I invite you to keep reading to see how a summer
                that started with bug lists and QA checklists turned into a
                pivotal learning experience.
              </p>
            </div>
            <Phone label="term overview" filename="term-overview-screenshot.png" image={termOverviewImg} />
          </div>
        </section>

        {/* MEAC / Employer */}
        <section ref={refs.meac} style={styles.section}>
          <div style={{ ...styles.sectionRow, ...styles.sectionRowReverse }}>
            <div style={styles.sectionText}>
              <p style={styles.sectionLabel}><span style={styles.sectionNumberBadge}>02</span>the employer</p>
              <h2 style={styles.sectionHeading}>Meadowvale East Apostolic Church</h2>
              <p style={styles.sectionParagraph}>
                Meadowvale East Apostolic Church was founded in 1994. They
                occupy a 26,000 square foot property in Scarborough with an
                average weekly attendance of about 200 people. But honestly,
                the part of MEAC I know best isn't the sanctuary, it's the food
                bank and the summer camp. The food bank alone serves close to
                150 families in the community, about 80 of whom I personally
                got to onboard onto the app.
              </p>
              <p style={styles.sectionParagraph}>
                The whole organization runs lean. There are about 5 admin
                staff, 8 food bank staff, and in the summer, another 10 camp
                staff, and pretty much all of them end up relying on the tools
                I built. That's honestly what made this a unique place to write
                software. I wasn't sitting at a desk making up user stories and
                hoping they held up in the real world. I was getting them
                straight from the people who'd actually use the feature next,
                then watching to see if it actually worked for them.
              </p>
              <ImageStub filename="meac-building.jpg" alt="MEAC property in Scarborough" src={meacBuildingImg} height="180px" />
            </div>
            <Phone label="workplace" filename="workplace.jpg" image={workplaceImg} />
          </div>
        </section>

        <section ref={refs.work} style={styles.section}>
          <p style={styles.sectionLabel}><span style={styles.sectionNumberBadge}>03</span>the apps</p>
          <h2 style={styles.sectionHeading}>The Apps I Came Back To</h2>

          <div style={{ ...styles.sectionRow, marginTop: '32px' }}>
            <div style={styles.sectionText}>
              <p style={styles.sectionParagraph}>
                This term revolved around two apps, <span style={styles.appNameAccent}>MeacTimekeep</span> and <span style={styles.appNameAccent}>MeacFoodBank</span>, both ones I'd built the year before and both due for
                a second look after a year of real use.
              </p>
              <p style={styles.sectionParagraph}>
                <span style={styles.appNameAccent}>MeacTimekeep</span> exists so staff can clock in, clock out, and request
                changes to their timesheet without the manual back-and-forth that
                used to mean texting a supervisor directly. Depending on how a
                supervisor sets it up, clock-in can be restricted to a specific
                location, and the whole system can export to Excel when someone
                needs the data outside the app itself. <span style={styles.appNameAccent}>MeacFoodBank</span> runs the
                branch day to day. Staff post announcements, update inventory, and
                adjust the calendar. What makes it more than a standalone tool is
                the pipeline underneath it. The app writes directly to a Firebase
                database, and that same database feeds the public food bank
                website, so an inventory update made on a staff member's phone is
                reflected on the website almost immediately.
              </p>
            </div>
            <Phone label="food bank app" filename="foodbank-screenshot.PNG" image={foodBankScreenshotImg} />
          </div>
        </section>

        {/* The Job This Time Around */}
        <section ref={refs.skills} style={styles.section}>
          <p style={styles.sectionLabel}><span style={styles.sectionNumberBadge}>04</span>the job this time around</p>
          <h2 style={styles.sectionHeading}>What the job actually asked for</h2>

          <div style={{ ...styles.sectionRow, marginTop: '32px' }}>
            <div style={styles.sectionText}>
              <p style={styles.sectionParagraph}>
                Most of this term didn't look like feature work at all. It
                looked like sitting with a checklist and going through every
                workflow in both apps, testing account management,
                authentication, and security functionality, checking
                compatibility across devices and operating systems, and
                hunting down every lag, bug, and broken interaction before
                either app could go back in front of staff. That's less
                visible than shipping something new, but it was the actual
                job, and it took most of the term to get right.
              </p>
              <p style={styles.sectionParagraph}>
                The bigger undertaking was rebuilding <span style={styles.appNameAccent}>MeacTimekeep</span> to
                support more than one organization. Before this, the app
                assumed every record belonged to a single church, so I had to
                restructure the data model to scope everything, users,
                timesheets, settings, by organization instead. That meant
                adding an organization layer into both the authentication and
                permissions system, so a supervisor at one organization
                couldn't see or affect data belonging to another. The hardest
                part wasn't designing that structure on paper, it was
                migrating MEAC's existing data into it without breaking
                anything staff were actively using day to day. I couldn't
                just wipe and rebuild. MEAC needed the app to keep working the
                whole time I was restructuring what was underneath it.
              </p>
              <p style={styles.sectionParagraph}>
                On top of the testing and the rebuild, there was still the
                smaller, staff-driven work. A staff member mentioned, almost
                in passing, that statutory holidays weren't accounted for
                anywhere in the timekeeping logic. Someone else pointed out
                that food bank inventory items had no photos, just names on a
                list, so I added them. That one took about thirty minutes,
                and it was such an obvious improvement that I couldn't
                believe it hadn't occurred to me first.
              </p>
              <p style={styles.sectionParagraph}>
                The bigger change on that front came from watching how staff
                actually corrected mistakes on their timesheets. They'd text
                their supervisor and wait. I replaced that with a request
                button built directly into the app, paired with a
                notification that reached the supervisor the moment it was
                sent. It was a small feature on paper, but it replaced an
                entire manual workaround that had quietly existed since term
                one.
              </p>
              <p style={styles.sectionParagraph}>
                None of these smaller fixes were things I'd planned to build.
                They came from people who'd used the app long enough to know
                exactly what was missing, and that made this term's feedback
                loop feel less like guesswork and more like a genuine
                conversation with the people the software was for. Coming
                back to software that staff had lived with for a full year
                meant the requests I got weren't hypothetical. They were
                specific, lived-in observations, and building for people I
                could talk to directly, rather than an abstracted end user,
                shaped almost every decision I made.
              </p>
              <p style={styles.sectionParagraph}>
                The job demanded a mix of technical and interpersonal skills in
                roughly equal measure. That meant React Native, Expo, Firebase,
                and TypeScript on the technical side, and time management,
                organization, and interpersonal communication on the other. None
                of the technical skills came from a classroom. I learned that
                stack on the job and on my own time. What school did give me was
                the underlying management and organizational instinct, the
                ability to plan, prioritize, and communicate, that made picking up
                new technology on my own actually possible.
              </p>
            </div>
            <Phone label="clock in/out" filename="timekeep-screenshot.PNG" image={timekeepScreenshotImg} />
          </div>
        </section>

        {/* Goals */}
        <section ref={refs.goals} style={styles.section}>
          <p style={styles.sectionLabel}><span style={styles.sectionNumberBadge}>05</span>goals</p>
          <h2 style={styles.sectionHeading}>Goals I set myself this term</h2>
          <p style={styles.sectionParagraph}>
            Walking into this term, I wasn't guessing at what to expect the way I
            had been a year earlier. I already knew the codebase, I already knew
            the people I'd be building for, and that familiarity let me set goals
            that were sharper and more specific than the ones I'd started with in
            my first term. These weren't goals about learning to code or learning
            to work in a professional environment. Those lessons were already
            behind me. They were goals about doing the work better. Reasoning
            through design instead of guessing at it, anticipating problems
            instead of reacting to them, communicating with more confidence,
            managing my time more realistically, and leaving behind documentation
            that would actually hold up. Some of these I met fully. Others I
            didn't, and I think what I learned from falling short matters just as
            much as what I got right.
          </p>

          <GoalCard
            number={1}
            title="Visual Literacy"
            status="met"
            goal={
              <>
                I wanted to develop a genuine, well-reasoned understanding of why
                I make the design choices I make, instead of relying on intuition
                or just copying patterns I'd seen on other websites. Having taken
                a UX/UI course, I wanted to actually apply those principles in a
                real setting this term, since a big part of my work was front end.
                My plan was to build mockups and wireframes before implementing
                anything, check them against accessibility guidelines, look at
                other church and nonprofit sites for reference, and get feedback
                from staff and leadership before finalizing a design. I'd know
                I'd succeeded if I could clearly explain the reasoning behind my
                major decisions, and if staff told me the site felt more
                intentional and user friendly than it did before.
              </>
            }
          >
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ flex: 1 }}>
                I was very intentional about achieving this goal, so much so that
                I made the decision to change the UI of the app
                significantly. Having a UX/UI course under my belt, I
                noticed places where I'd fallen short in my previous design,
                and I prioritized fixing those. The most noticeable change
                was picking one central color, so the app looked uniform
                instead of a bunch of separate choices. I also opened the
                door for continuous design feedback from staff, which shaped
                my updates as I went. I conducted tests with food bank and
                timekeeping staff, giving them tasks to complete on the app
                and noting where they hesitated, went looking for something
                that wasn't there, or where an action just wasn't clear
                enough. That helped me make evidence-based design choices
                instead of guesses. I can confidently say every feature and
                design choice on both apps has a real reason behind it. They
                were tested. When I officially launched the new and improved
                app, staff gave feedback that they knew exactly where to go
                and that it was easy to navigate.
                </div>
                <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                <div style={{ width: '90px' }}>
                    <ImageStub filename="ui-before.png" alt="UI before redesign" src={uiBeforeImg} height="180px" width="90px" />
                    <p style={{ ...styles.phoneScreenLabel, color: '#8a8a8a', marginTop: '6px', textAlign: 'center' }}>before</p>
                </div>
                <div style={{ width: '90px' }}>
                    <ImageStub filename="ui-after.png" alt="UI after redesign" src={uiAfterImg} height="180px" width="90px" />
                    <p style={{ ...styles.phoneScreenLabel, color: '#8a8a8a', marginTop: '6px', textAlign: 'center' }}>after</p>
                </div>
                </div>
            </div>
            </GoalCard>

          <GoalCard
            number={2}
            title="Problem Solving"
            status="partial"
            goal={
              <>
                Since I was redesigning both the app and the website this term, I
                knew I'd be doing a lot of troubleshooting. My goal wasn't just to
                be effective at solving problems as they came up, since I already
                do that reasonably well. I wanted to shift toward anticipating
                problems before they happened, especially around cross
                compatibility between features, so I was preventing issues
                instead of reacting to them. My plan was to think through
                compatibility issues and edge cases upfront, before I started
                building, and to keep a running log of problems and how I fixed
                them so I could start spotting patterns.
              </>
            }
          >
            This one wasn't as successful as I'd hoped. I ran into a lot of
            issues, especially when it came to styling between different
            operating systems. Something would look fine on iOS and then
            look off on Android, and vice versa. It was quite hard to
            anticipate these kinds of problems before they happened, so I
            spent a lot of time debugging and looking for workarounds. One
            thing that did help was leaning on error logs and console logs.
            I filled my code with them, so when there was an issue, I knew
            exactly what it was right away. But that was more of a reactive
            skill, not the anticipatory one I was actually going for. This
            approach helped reduce the time I spent debugging, but not to
            the extent I had hoped.
          </GoalCard>

          <GoalCard
            number={3}
            title="Oral Communication"
            status="met"
            goal={
              <>
                Since I was rolling out the redesigned app and website to
                third-party users this term, I needed to be able to clearly and
                confidently explain what the app does, how to use it, and answer
                questions on the spot. My goal was to become more articulate in
                those conversations, and I knew that meant knowing my product
                inside and out, being confident in the design decisions I'd
                made, and having already thought through the kinds of problems
                or questions that might come up. My plan was to make sure I
                understood the app's functionality and reasoning thoroughly
                before rollout, and to practice explaining it in plain language
                for people without a technical background.
              </>
            }
          >
            Throughout the refinement of the app, I was communicating with
            third-party users, and being intentional with my design choices
            really gave me confidence when it came to explaining features
            and navigation routes. I knew the app and had refined it from
            the inside out, so I could speak to it. When it came time to do
            presentations in front of summer staff and food bank attendees,
            there weren't many questions, and everyone found it very easy
            to follow. Things went smoothly the whole way through, which is
            probably the clearest evidence that I met this goal.
          </GoalCard>

          <GoalCard
            number={4}
            title="Time Management"
            status="met"
            goal={
              <>
                I'm generally strong at laying out my tasks and organizing my
                workload, but I struggle specifically with estimating how long
                web development tasks will actually take. Certain parts of
                development are hard to gauge in advance, and when tasks took
                longer than expected, I'd fall behind on my timeline. My goal
                this term was to get better at setting realistic timelines so I
                could stay on track. My plan was to break larger tasks into
                smaller, more predictable pieces, build in buffer time, and
                track how long tasks actually took compared to my estimates so
                I could calibrate future timelines using real data instead of
                guesswork.
              </>
            }
          >
            I used Monday.com for this, a project management tool I learned
            in my previous term at Cube Packaging Solutions. It helped a
            lot. I mapped out different phases of my development and was
            able to measure my success by anticipating task length, adding
            an estimated-time column and a time-elapsed column, so I'd
            start the timer when I started working on something and end it
            when I stopped. Most of them were pretty accurate, and I was
            able to predict timelines for future tasks and keep my
            supervisor in the loop. I also made sure to give myself buffer
            time for troubleshooting, and overall I stayed well aligned with
            my timeline.
            <ImageStub filename="monday-screenshot.png" alt="Monday.com estimated-time and time-elapsed columns" src={mondayScreenshotImg} height="200px" />
          </GoalCard>

          <GoalCard
            number={5}
            title="Written Communication"
            status="partial"
            goal={
              <>
                Since I'd be expected to leave behind comprehensive
                documentation of the application at the end of my term, I wanted
                to develop my ability to write clear, well structured technical
                documentation that would let someone unfamiliar with the project
                actually understand and maintain it. My plan was to document as
                I went instead of leaving it all until the end, keeping notes on
                architecture, setup instructions, and key decisions throughout,
                and to have someone unfamiliar with the project review the final
                documentation for clarity before I left.
              </>
            }
          >
            This goal was only partially successful. Some of the things I
            documented well were my wireframes and mockups, along with the
            new design choices and features I added. Some things I didn't
            document too well were changes to the database. Coming back to
            my own code a year later, I learned that documentation is
            incredibly important, because even though my code from last
            year was documented, it could have been better. This year, I
            tried to apply that lesson in what I left behind.
          </GoalCard>
        </section>

        {/* Conclusion */}
        <section ref={refs.conclusion} style={{ ...styles.section, ...styles.sectionLastNoBorder }}>
          <p style={styles.sectionLabel}><span style={styles.sectionNumberBadge}>06</span>conclusion</p>

          <h3 style={styles.conclusionHeading}>What This Term Changed for Me</h3>
          <p style={styles.sectionParagraph}>
            Looking back, this term left a significant impression on me. I
            learned what happens after you ship software. Building <span style={styles.appNameAccent}>MeacFoodBank</span> and <span style={styles.appNameAccent}>MeacTimekeep</span> from nothing was its own kind
            of challenge, but software is never one and done. It's
            continuous iteration. I got to experience the satisfaction of
            watching people depend on something I built, and that gap
            between building something and watching it get fully absorbed
            into how people work has been incredibly impactful to me.
          </p>
          <p style={styles.sectionParagraph}>
            The goals I fell short of taught me as much as the ones I met.
            Anticipating problems before they happened turned out to be
            harder than reacting to them well, and that's a distinction
            I'll carry into every project going forward. Documentation,
            too, remained a work in progress, a lesson my own code taught
            me directly.
          </p>
          <p style={styles.sectionParagraph}>
            What stayed constant across both terms was the value of being
            close to the people I was building for. I got to research as
            much as I got to code, and seeing the interaction between users
            and what I'd created was by far the most rewarding part of this
            term.
          </p>
          <p style={styles.sectionParagraph}>
            If there's one thing that ties this term together, it's this.
            My work wasn't finished when I shipped it. It was finished when
            someone else started depending on it.
          </p>

          <h3 style={{ ...styles.conclusionHeading, marginTop: '32px' }}>What I Want You to Remember</h3>
          <p style={styles.conclusionQuote}>
            If someone asked what this report was about, here's what I'd
            want them to say. Building an app is one thing, but real
            fulfillment comes from seeing it fully integrated and actually
            serving the people it was built for. This term wasn't about
            proving I could build software from scratch, I'd already done
            that. It was about learning that the best feedback doesn't come
            from a checklist, but from the people who use what you made.
          </p>
        </section>
      </main>

      <footer style={styles.footer}>
        <p>Published {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
      </footer>

      {modalImage && (
        <div style={styles.modalOverlay} onClick={closeModal}>
          <button style={styles.modalClose} onClick={closeModal} aria-label="Close image">
            &times;
          </button>
          <img src={modalImage.src} alt={modalImage.alt} style={styles.modalImage} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
    </ImageModalContext.Provider>
  );
};

export default MeacReport;