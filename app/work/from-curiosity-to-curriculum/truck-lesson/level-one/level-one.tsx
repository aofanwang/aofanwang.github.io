import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Eye, Hand, Image as ImageIcon, MousePointer2, PencilRuler, Play, Shuffle } from 'lucide-react';
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
    <main id="mission-main" className={styles.page}>
      <header className={styles.heading}>
        <a className="project-back" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to projects</a>
        <div className={styles.introLayout}>
          <div className={styles.introCopy}>
            <h1>Truck Mission</h1>
            <p className={`${styles.lead} type-lead`}>Choose a machine. Put it to work. Build a playground.</p>
            <p>An interactive, play-based learning experience designed to help children aged 5–6 explore construction vehicles through guided challenges, hands-on interaction, and creative problem-solving.</p>
            <a className={styles.playLink} href={gameUrl} target="_blank" rel="noopener noreferrer"><Play size={20} aria-hidden="true" />Play the Game<ArrowUpRight size={20} aria-hidden="true" /></a>
            <p className={`${styles.facts} type-meta`}>Ages 5–6 <span aria-hidden="true">/</span> Individual play <span aria-hidden="true">/</span> Three playable levels</p>
          </div>
          <div className={styles.introScreens} aria-label="Truck Mission game previews">
            <figure><img src="/truck-mission-welcome.png" alt="Truck Mission welcome screen with construction vehicles and a Start button" width={2050} height={1153} /><figcaption>Welcome screen</figcaption></figure>
            <figure><img src="/truck-mission-cover.png" alt="Level 1 asks children to choose a machine to dig a hole for a playground slide" width={2050} height={1153} /><figcaption>Level 1 · Choose a machine</figcaption></figure>
          </div>
        </div>
      </header>

      <section id="problem" className={`${styles.section} ${styles.problem}`} aria-labelledby="problem-title">
        <h2 id="problem-title">The Problem</h2>
        <p>Young children learn best through hands-on exploration, play, and meaningful interactions. However, traditional classroom activities do not always provide opportunities for children to independently explore concepts, make decisions, and receive immediate feedback.</p>
        <p>Many digital learning experiences for preschoolers also rely on passive watching, text-heavy instructions, or repetitive interactions that may not align with young children's developing attention spans, early literacy skills, and need for active engagement.</p>
        <p>This project explores how a play-based digital learning experience can support children's attention, independence, and problem-solving through intuitive visual guidance, interactive challenges, and progressively scaffolded learning activities.</p>
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
          <p>I structured the experience around progressively challenging tasks, moving from recognition to hands-on application and creative exploration. This scaffolding approach aims to build confidence while gradually increasing learner independence.</p>
        </div>
      </section>

      <section id="thinking" className={styles.section} aria-labelledby="thinking-title">
        <h2 id="thinking-title">Key Design Decisions</h2>
        <div className={styles.decisions}>
          <div className={styles.decision}>
            <div><h3 className={styles.decisionHeading}>Visual Guidance</h3><p>Preschoolers are still developing their reading skills and ability to sustain attention. I used highlighted targets, visual cues, and replayable audio instructions to draw attention to key actions and help children navigate the game with less reliance on text or adult guidance.</p></div>
            <figure className={styles.decisionFigure}>
              <div className={styles.annotatedScene}>
                <img src="/truck-mission-guidance.jpg" alt="Level 2 shows marked Dig here and Soil pile targets beside the excavator bucket, with replayable audio at the top right" width={1280} height={720} loading="lazy" />
                <span className={`${styles.callout} ${styles.audioCallout}`} aria-hidden="true"><b>1</b></span>
                <span className={`${styles.callout} ${styles.digCallout}`} aria-hidden="true"><b>2</b></span>
                <span className={`${styles.callout} ${styles.soilCallout}`} aria-hidden="true"><b>2</b></span>
              </div>
              <figcaption><span>1</span> Replayable audio <span>2</span> Marked targets</figcaption>
            </figure>
          </div>
          <div className={styles.decision}>
            <div><h3 className={styles.decisionHeading}>Scaffolding</h3><p>I structured the experience into three progressively challenging levels: Recognize → Apply → Create. This progression aims to build understanding before introducing more complex tasks, gradually supporting children's confidence and independence.</p></div>
            <figure className={styles.decisionFigure}>
              <div className={styles.annotatedScene}>
                <img src="/truck-mission-levels.jpg" alt="Three-level selection screen with a consistent visual layout for meeting machines, operating them, and designing a playground" width={1280} height={720} loading="lazy" />
                <span className={`${styles.callout} ${styles.levelsCallout}`} aria-hidden="true" />
              </div>
              <figcaption>Increasing challenge within a familiar interface</figcaption>
            </figure>
          </div>
          <div className={styles.decision}>
            <div><h3 className={styles.decisionHeading}>Learner Autonomy</h3><p>I incorporated meaningful choices by allowing children to select playground equipment, customize colors, and decide where to place objects. These open-ended interactions are intended to encourage exploration, creative thinking, and a sense of ownership over the learning experience.</p></div>
            <figure className={styles.decisionFigure}>
              <div className={styles.annotatedScene}>
                <img src="/truck-mission-autonomy.jpg" alt="Level 3 playground customization screen with slide and swing options and four color choices" width={1280} height={720} loading="lazy" />
                <span className={`${styles.callout} ${styles.equipmentCallout}`} aria-hidden="true"><b>1</b></span>
                <span className={`${styles.callout} ${styles.colorCallout}`} aria-hidden="true"><b>2</b></span>
              </div>
              <figcaption><span>1</span> Equipment choice <span>2</span> Color choice</figcaption>
            </figure>
          </div>
          <div className={`${styles.decision} ${styles.decisionCompact}`}>
            <div><h3 className={styles.decisionHeading}>Immediate Feedback &amp; Error Recovery</h3><p>I designed immediate, action-specific feedback and opportunities to retry, allowing children to learn from incorrect choices without interrupting the learning experience.</p></div>
            <div className={styles.feedbackPair}>
              <figure className={styles.decisionFigure}><img src="/truck-mission-success.png" alt="Correct feedback explains that the excavator uses its bucket to dig" width={2050} height={1153} loading="lazy" /><figcaption>Explain the correct choice</figcaption></figure>
              <figure className={styles.decisionFigure}><div className={styles.annotatedScene}><img src="/truck-mission-retry.png" alt="Incorrect-choice feedback explains the crane's function and provides a Try Again option" width={2050} height={1153} loading="lazy" /><span className={`${styles.callout} ${styles.retryCallout}`} aria-hidden="true" /></div><figcaption>Explain, then offer a retry</figcaption></figure>
            </div>
          </div>
          <div className={`${styles.decision} ${styles.decisionCompact}`}>
            <div><h3 className={styles.decisionHeading}>Visible Progress</h3><p>I incorporated visual completion indicators to help children track their progress, recognize completed tasks, and understand what remains to be done.</p></div>
            <figure className={`${styles.decisionFigure} ${styles.progressFigure}`}>
              <div className={styles.progressCrop}><img src="/truck-mission-completed.jpg" alt="Actual Level 3 completion indicator showing all three task boxes checked" width={1110} height={959} loading="lazy" /></div>
              <figcaption>Three completed tasks, visible at a glance</figcaption>
            </figure>
          </div>
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
        <div className={styles.iterationGroup}>
          <p className="type-label">Iteration Highlights</p>
          <div className={styles.iterationHighlights}>
            <article><ImageIcon size={24} aria-hidden="true" /><h3>Visual Clarity</h3><p>Improved asset quality to create clearer and more consistent game visuals.</p></article>
            <article><MousePointer2 size={24} aria-hidden="true" /><h3>Interaction Expansion</h3><p>Extended simple vehicle matching into interactive digging, carrying, lifting, and playground design challenges.</p></article>
            <article><Shuffle size={24} aria-hidden="true" /><h3>Challenge Design</h3><p>Randomized choices for new questions and full-level replays to reduce position memorization, keeping choices stable during retries.</p></article>
          </div>
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
