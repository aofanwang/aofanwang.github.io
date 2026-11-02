import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Eye, Hand, PencilRuler, Play } from 'lucide-react';
import EducationMarks from '../../../../../components/education-marks';
import ContactFooter from '../../../../../components/contact-footer';
import '../../../../about/profile.css';
import styles from './case-study.module.css';

const gameUrl = 'https://aofanwang.github.io/truck-mission/';
const technologies = ['Canva', 'HTML', 'CSS', 'JavaScript', 'AI-Assisted Development', 'GitHub Pages'];

export default function LevelOne() {
  return <>
    <a className="skip" href="#mission-main">Skip to content</a>
    <header className="wrap header profile-site-header">
      <div className="identity">
        <div className="identity-brand-row"><a className="brand" href="/">Aofan Wang</a><EducationMarks /></div>
        <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
      </div>
      <nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About Me</a><a href="/#work">Projects</a><a href="/contact">Contact</a></nav>
    </header>
    <main id="mission-main" className={`portfolio-content ${styles.page}`}>
      <header className={styles.heading}>
        <a className="project-back" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to projects</a>
        <div className={styles.introLayout}>
          <div className={styles.introCopy}>
            <p className={`${styles.category} type-meta`}>LEARNING EXPERIENCE DESIGN · EDUCATIONAL GAME</p>
            <h1>Truck Mission</h1>
            <p className={`${styles.lead} type-lead`}>Choose. Build. Create.</p>
            <p>A construction-themed learning game for children aged 5–6 that helps them recognize machine functions, apply their understanding through interactive tasks, and build a playground of their own.</p>
          </div>
          <div className={styles.introScreens} aria-label="Truck Mission game previews">
            <figure><img src="/truck-mission-levels.jpg" alt="Choose your mission screen with three playable levels" width={1280} height={719} /><figcaption>Choose a mission</figcaption></figure>
            <figure><img src="/truck-mission-cover.png" alt="Level 1 asks children to choose a machine to dig a hole for a playground slide" width={2050} height={1153} /><figcaption>Level 1 · Choose a machine</figcaption></figure>
            <figure><img src="/truck-mission-guidance.jpg" alt="Level 2 excavator task with marked digging and soil pile targets" width={1280} height={719} /><figcaption>Level 2 · Put it to work</figcaption></figure>
            <figure><img src="/truck-mission-autonomy.jpg" alt="Level 3 playground design with equipment choices and color customization" width={1280} height={719} /><figcaption>Level 3 · Create a playground</figcaption></figure>
          </div>
        </div>
      </header>

      <section className={styles.projectInfo} aria-label="Project information">
        <div><h2 className="type-label">Overview</h2><p>Truck Mission is an interactive learning game that introduces young children to construction vehicles through progressive tasks. The experience moves from recognizing machine functions to applying that understanding in construction challenges and finally creating a playground design.</p></div>
        <dl>
          <dt className="type-label">Role</dt><dd>Learning Experience Design · UI/UX Design · AI-Assisted Development</dd>
          <dt className="type-label">Tools</dt><dd>Canva · HTML · CSS · JavaScript · AI-assisted coding</dd>
          <dt className="type-label">Project Type</dt><dd>Independent project · Playable web prototype</dd>
        </dl>
        <dl>
          <dt className="type-label">Team</dt><dd>Aofan Wang</dd>
          <dt className="type-label">My Contribution</dt><dd>Designed the learning progression, interaction flow, visual interface, and feedback system, then used AI-assisted development tools to turn the concept into a playable web game.</dd>
        </dl>
        <div className={styles.projectActions}>
          <a className={styles.playLink} href={gameUrl} target="_blank" rel="noopener noreferrer"><Play size={20} aria-hidden="true" />Play the Game<ArrowUpRight size={20} aria-hidden="true" /></a>
          <a className={styles.textLink} href="https://www.canva.com/d/MA8OFJhvKcPcvTT" target="_blank" rel="noopener noreferrer">View Canva Prototype<ArrowUpRight size={18} aria-hidden="true" /></a>
          <p className={`${styles.facts} type-meta`}>Ages 5–6 <span aria-hidden="true">/</span> Individual play <span aria-hidden="true">/</span> Three playable levels</p>
        </div>
      </section>

      <section id="problem" className={`${styles.section} ${styles.problem}`} aria-labelledby="problem-title">
        <h2 id="problem-title">From Curiosity to Problem-Solving</h2>
        <p>Inspired by my classroom experience, I wanted to explore how children's interest in construction vehicles could become an opportunity for deeper learning.</p>
        <p>While recognizing and naming vehicles can build foundational knowledge, children also need opportunities to apply what they know in meaningful situations.</p>
        <p className={`${styles.designQuestion} type-lead`}>How might we help children move beyond recognition to make decisions, solve problems, and create something of their own?</p>
      </section>

      <section id="role" className={styles.section} aria-labelledby="role-title">
        <h2 id="role-title">My Role</h2>
        <p className={`${styles.roleSummary} type-label`}>Learning Experience Designer | UI/UX Designer | AI-Assisted Developer</p>
        <p>I led the end-to-end design of this interactive learning game, from defining learning objectives and structuring progressive challenges to designing child-friendly interfaces, visual cues, and feedback systems.</p>
        <p>I created the initial visual prototype in Canva and used AI-assisted development tools to turn my designs into a playable web-based learning experience.</p>
      </section>

      <section id="features" className={styles.section} aria-labelledby="features-title">
        <h2 id="features-title">Learning Experience Design</h2>
        <ol className={styles.progression} aria-label="Learning progression: Recognize, Apply, Create">
          <li>
            <Eye className={styles.progressionIcon} size={28} aria-hidden="true" />
            <h3><span>Level 1</span>Recognize</h3>
            <p>Identify construction vehicles and their functions.</p>
            <ArrowRight className={styles.progressionArrow} size={24} aria-hidden="true" />
          </li>
          <li>
            <Hand className={styles.progressionIcon} size={28} aria-hidden="true" />
            <h3><span>Level 2</span>Apply</h3>
            <p>Practice through interactive construction tasks.</p>
            <ArrowRight className={styles.progressionArrow} size={24} aria-hidden="true" />
          </li>
          <li>
            <PencilRuler className={styles.progressionIcon} size={28} aria-hidden="true" />
            <h3><span>Level 3</span>Create</h3>
            <p>Apply learned concepts to design a playground.</p>
          </li>
        </ol>
        <div className={styles.rationale}>
          <h3>Design Rationale</h3>
          <p>I scaffolded the tasks by gradually increasing their complexity, so children can build understanding before taking on more independent challenges.</p>
          <p className={styles.tradeoff}><span className={styles.tradeoffLabel}>Trade-off:</span> A fixed progression provides guidance but may feel repetitive for children who already know the basics.</p>
        </div>
      </section>

      <section id="thinking" className={styles.section} aria-labelledby="thinking-title">
        <h2 id="thinking-title">Key Design Decisions</h2>
        <div className={styles.decisions}>
          <article className={styles.decision}>
            <div>
              <h3 className={styles.decisionHeading}>Feedback That Encourages Thinking</h3>
              <p>Children need help understanding why a choice may not work, rather than simply being told it is wrong. I designed action-specific feedback, such as explaining that a crane lifts rather than digs, with retry opportunities so children can reconsider without being shown the correct vehicle.</p>
              <p className={styles.tradeoff}><span className={styles.tradeoffLabel}>Trade-off:</span> Children who struggle after repeated attempts may need additional hints.</p>
            </div>
            <figure className={styles.decisionFigure}>
              <div className={styles.annotatedScene}>
                <img src="/truck-mission-retry.png" alt="Incorrect-choice feedback explains the crane's lifting function and provides a Try Again option" width={2050} height={1153} loading="lazy" />
                <span className={`${styles.callout} ${styles.retryCallout}`} aria-hidden="true" />
              </div>
              <figcaption>Explain the choice, then offer a retry</figcaption>
            </figure>
          </article>
          <article className={styles.decision}>
            <div>
              <h3 className={styles.decisionHeading}>Visual Guidance for Young Learners</h3>
              <p>Developing reading skills can make text-heavy instructions difficult to follow. I used highlighted targets, visual cues, and replayable audio to make key actions easier to find and help children navigate with less reliance on reading or adult guidance.</p>
            </div>
            <figure className={styles.decisionFigure}>
              <div className={styles.annotatedScene}>
                <img src="/truck-mission-guidance.jpg" alt="Level 2 shows highlighted digging and soil-pile targets with a replayable audio button" width={1280} height={720} loading="lazy" />
                <span className={`${styles.callout} ${styles.audioCallout}`} aria-hidden="true"><b>1</b></span>
                <span className={`${styles.callout} ${styles.digCallout}`} aria-hidden="true"><b>2</b></span>
                <span className={`${styles.callout} ${styles.soilCallout}`} aria-hidden="true"><b>2</b></span>
              </div>
              <figcaption><span>1</span> Replayable audio <span>2</span> Marked targets</figcaption>
            </figure>
          </article>
          <article className={styles.decision}>
            <div>
              <h3 className={styles.decisionHeading}>Meaningful Choice &amp; Learner Autonomy</h3>
              <p>Children need room to make their own decisions, not only follow a predetermined answer. I designed equipment selection, color customization, and object placement so children can explore alternatives and take ownership of their playground design.</p>
            </div>
            <figure className={styles.decisionFigure}>
              <div className={styles.annotatedScene}>
                <img src="/truck-mission-autonomy.jpg" alt="Playground customization interface with equipment selection and color choices" width={1280} height={720} loading="lazy" />
                <span className={`${styles.callout} ${styles.equipmentCallout}`} aria-hidden="true"><b>1</b></span>
                <span className={`${styles.callout} ${styles.colorCallout}`} aria-hidden="true"><b>2</b></span>
              </div>
              <figcaption><span>1</span> Equipment choice <span>2</span> Color choice</figcaption>
            </figure>
          </article>
        </div>
      </section>

      <section id="development" className={styles.section} aria-labelledby="development-title">
        <h2 id="development-title">Development &amp; Iteration</h2>
        <p className="type-lead">From Canva prototype to a playable web game.</p>
        <ol className={`${styles.progression} ${styles.processSteps}`} aria-label="Development process: Design, Build, Play">
          <li><PencilRuler className={styles.progressionIcon} size={24} aria-hidden="true" /><h3>Design</h3><p>Created the initial visual prototype and learning interactions in Canva.</p><ArrowRight className={styles.progressionArrow} size={24} aria-hidden="true" /></li>
          <li><Code2 className={styles.progressionIcon} size={24} aria-hidden="true" /><h3>Build</h3><p>Used AI-assisted development and front-end technologies to create the interactive experience.</p><ArrowRight className={styles.progressionArrow} size={24} aria-hidden="true" /></li>
          <li><Play className={styles.progressionIcon} size={24} aria-hidden="true" /><h3>Play</h3><p>Produced a playable browser-based game with three learning levels.</p></li>
        </ol>
        <div className={styles.toolGroup}>
          <p className="type-label">Tools &amp; Technologies</p>
          <ul className={styles.technologyTags} aria-label="Project tools and technologies">{technologies.map(tool => <li key={tool}>{tool}</li>)}</ul>
        </div>
        <a className={`${styles.textLink} ${styles.developmentLink}`} href="https://www.canva.com/d/MA8OFJhvKcPcvTT" target="_blank" rel="noopener noreferrer">View Canva prototype<ArrowUpRight size={18} aria-hidden="true" /></a>
      </section>

      <section id="evaluation" className={`${styles.section} ${styles.reflection}`} aria-labelledby="reflection-title">
        <h2 id="reflection-title">Reflection &amp; Next Steps</h2>
        <p>This project helped me explore how learning design principles can be translated into an interactive digital experience for young children.</p>
        <p>While the prototype has been reviewed for functionality, it has not yet been tested with children. My next step is to observe how children navigate the game, respond to feedback, and complete tasks independently, using these observations to guide future improvements.</p>
        <a className={styles.textLink} href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to Projects</a>
      </section>
    </main>
    <ContactFooter />
  </>;
}
