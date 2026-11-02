import { ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, CircleCheck, Coins, Eye, MessageCircle, Network, PencilRuler, Sprout, Target, ZoomIn } from 'lucide-react';
import styles from './feelzoo.module.css';

export const metadata = {
  title: 'FeelZoo | Aofan Wang',
  description: 'A collaborative SEL concept connecting educational research, information architecture, and an individually designed Emotion Explorer activity.',
};

const deck = 'https://docs.google.com/presentation/d/15T5P7MP2VCK-EMD6V02DvGpxQdUkNWo3GkdgQGvXNZM';
const prototype = 'https://www.figma.com/proto/7pJ1sPiNjwSlDewFeX65yu/FeelZoo?node-id=39-378&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=39%3A378';
const siteMap = 'https://www.figma.com/design/7pJ1sPiNjwSlDewFeX65yu/FeelZoo?node-id=50-441';

const contributions = [
  { title: 'Interaction Design', text: 'Independently designed Emotion Explorer, including drag-and-drop matching, optional hints, and feedback states.', icon: PencilRuler },
  { title: 'Information Architecture', text: "Co-led the organization of the app's content, activities, and navigation structure.", icon: Network },
  { title: 'Learning Experience Design', text: 'Helped translate SEL learning goals into progressive activities focused on emotional understanding.', icon: Target },
  { title: 'Research-Informed Design', text: 'Explored SEL frameworks, learning theories, and existing products to inform design decisions.', icon: BookOpen },
];

const spotlight = [
  {
    title: 'Match & Recognize',
    image: '/feelzoo-emotion-matching.png',
    alt: 'Original Emotion Explorer frame with three illustrated expressions, empty matching targets, emotion words, and an I need a hint button',
    text: 'Children match emotion words with illustrated facial expressions, turning recognition into an active learning task.',
  },
  {
    title: 'Hints That Guide Thinking',
    image: '/feelzoo-emotion-hint.png',
    alt: 'Emotion Explorer explains that afraid expressions often have wide eyes and an open mouth, with an optional I need a hint control below',
    text: "Optional hints draw attention to facial features without immediately revealing the answer, encouraging another attempt.",
  },
  {
    title: 'Feedback That Supports Progress',
    image: '/feelzoo-emotion-complete.png',
    alt: 'Completed Emotion Explorer activity showing three green matches, confirmation that all three are correct, and a Continue button',
    text: 'Visible confirmation marks correct matches, while opportunities to revisit choices and continue are intended to support progress.',
  },
];

export default function FeelZooPage() {
  return (
    <>
      <a className="skip" href="#project-main">Skip to content</a>
      <header className="wrap header">
        <div className="identity">
          <a className="brand" href="/">Aofan Wang</a>
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About Me</a><a href="/#work">Projects</a><a href="/contact">Contact</a></nav>
      </header>
      <main id="project-main" className={`portfolio-content wrap curriculum-page ${styles.page}`}>
        <a className="project-back" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to Projects</a>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={`${styles.category} type-meta`}>Learning Experience Design · SEL / EdTech</p>
            <h1>FeelZoo</h1>
            <p className="type-lead">Discover. Understand. Grow.</p>
            <p>A gamified social-emotional learning app concept that helps elementary-school children explore emotions through interactive activities, reflection, and play.</p>
          </div>
          <div className={styles.heroScreens} aria-label="Four original FeelZoo app designs">
            {[
              { name: 'Mood Buddies', image: '/feelzoo-mood-buddies.png', width: 900, height: 1200 },
              { name: 'Emotion Explorer', image: '/feelzoo-emotion-matching.png', width: 1024, height: 1366 },
              { name: 'Sea-narios', image: '/feelzoo-sea-narios.png', width: 344, height: 460 },
              { name: 'Your Zoo', image: '/feelzoo-your-zoo.png', width: 752, height: 1006 },
            ].map(screen => <figure key={screen.name}><img src={screen.image} alt={`${screen.name} — original FeelZoo interface`} width={screen.width} height={screen.height} /><figcaption>{screen.name}</figcaption></figure>)}
          </div>
        </header>

        <section className={styles.projectInfo} aria-label="Project information">
          <div><h2 className="type-label">Overview</h2><p>A collaborative SEL concept connecting educational research, learning objectives, and interactive activities for elementary-school children.</p></div>
          <dl>
            <dt className="type-label">Role</dt><dd>Learning Experience Design · Educational Research · Interaction Design</dd>
            <dt className="type-label">Tools</dt><dd>Figma · Google Slides</dd>
            <dt className="type-label">Project Type</dt><dd>Collaborative academic project · Concept prototype</dd>
          </dl>
          <dl>
            <dt className="type-label">Team</dt><dd>Collin Cannaert · Jenny Lee · Li Liu · Aofan Wang</dd>
            <dt className="type-label">My Contribution</dt><dd>Learning research, information architecture, and Emotion Explorer interaction design.</dd>
          </dl>
          <div className={styles.heroLinks}>
            <a className={styles.primaryLink} href={prototype} target="_blank" rel="noopener noreferrer">Explore Figma Prototype<ArrowUpRight size={18} aria-hidden="true" /></a>
            <a className={styles.textLink} href={`${deck}/edit`} target="_blank" rel="noopener noreferrer">View Full Team Presentation<ArrowUpRight size={16} aria-hidden="true" /></a>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="feelzoo-problem">
          <h2 id="feelzoo-problem">The Problem</h2>
          <p>Social-emotional learning goes beyond recognizing emotions. Children also need opportunities to understand their feelings, consider others&apos; perspectives, and explore how to respond to everyday situations.</p>
          <p>Our team explored how interactive digital activities could support these skills while providing teachers with accessible SEL learning resources.</p>
          <div className={styles.problemGrid}>
            <article><h3>Emotional Awareness</h3><p>Recognizing and expressing feelings.</p></article>
            <article><h3>Real-Life Application</h3><p>Connecting emotions to everyday situations.</p></article>
            <article><h3>Teacher Support</h3><p>Making SEL activities easier to incorporate into classroom routines.</p></article>
          </div>
          <p className={`${styles.question} type-lead`}>How might we make emotional learning more interactive, reflective, and accessible for young learners?</p>
        </section>

        <section className={styles.section} aria-labelledby="feelzoo-role">
          <h2 id="feelzoo-role">My Design Contributions</h2>
          <p>Bringing together learning research, experience structure, and interaction design, I helped translate SEL learning goals into a structured digital experience.</p>
          <div className={styles.roleGrid}>{contributions.map(({ title, text, icon: Icon }) => (
            <article key={title}><Icon size={22} aria-hidden="true" /><div><h3>{title}</h3><p>{text}</p></div></article>
          ))}</div>
        </section>

        <section className={styles.section} aria-labelledby="feelzoo-research">
          <h2 id="feelzoo-research">Research &amp; Learning Design</h2>
          <div className={styles.researchGrid}>
            <article><h3>SEL &amp; Learning Research</h3><ul><li>CASEL&apos;s five core SEL competencies</li><li>Child development and learning theories</li><li>Scaffolding and active learning</li></ul></article>
            <article><h3>Competitive Exploration</h3><ul><li>ClassDojo</li><li>Smiling Mind</li><li>Sesame Workshop</li></ul><p className="type-meta">An exploratory review of opportunities for interactive learning and reflection, not a verified product comparison.</p></article>
          </div>

          <div className={styles.researchPart}>
            <h3>Learning Progression</h3>
            <ol className={styles.progression} aria-label="Recognize, Understand, Reflect and Respond">
              <li><Eye size={24} aria-hidden="true" /><h4>Recognize</h4><p>Identify and name emotions.</p><ArrowRight className={styles.arrow} size={20} aria-hidden="true" /></li>
              <li><MessageCircle size={24} aria-hidden="true" /><h4>Understand</h4><p>Connect emotions to feelings and situations.</p><ArrowRight className={styles.arrow} size={20} aria-hidden="true" /></li>
              <li><Sprout size={24} aria-hidden="true" /><h4>Reflect &amp; Respond</h4><p>Consider others&apos; perspectives and possible responses.</p></li>
            </ol>
          </div>

          <div className={styles.researchPart}>
            <div className={styles.subheadingRow}><h3>Information Architecture</h3><a className={styles.textLink} href={siteMap} target="_blank" rel="noopener noreferrer">Figma site map<ArrowUpRight size={16} aria-hidden="true" /></a></div>
            <div className={styles.architectureLayout}>
              <div className={styles.siteMap} role="group" aria-label="Simplified FeelZoo information architecture">
                <p className={`${styles.mapRoot} type-label`}>FeelZoo Home</p>
                <div className={styles.branches}>
                  <div><h4>Learning Activities</h4><ul><li>Mood Buddies</li><li>Emotion Explorer</li><li>Sea-narios</li><li>Balloon of Emotions</li></ul></div>
                  <div><h4>Your Zoo &amp; Rewards</h4><ul><li>Animal Island</li><li>Pet customization</li><li>Rewards</li></ul></div>
                  <div><h4>Progress</h4><ul><li>Activity completion</li><li>View progress</li></ul></div>
                </div>
              </div>
              <figure className={styles.dashboard}><img src="/feelzoo-activities.png" alt="Team dashboard concept showing activity completion, Your Zoo, and Animal Island" width={900} height={1200} loading="lazy" /><figcaption>Team dashboard concept</figcaption></figure>
            </div>
          </div>
        </section>

        <section className={styles.section} aria-labelledby="feelzoo-spotlight">
          <p className={`${styles.spotlightLabel} type-label`}>My individual interaction design</p>
          <h2 id="feelzoo-spotlight">Design Spotlight — Emotion Explorer</h2>
          <p className="type-lead">Learning through interaction, hints, and feedback.</p>
          <p>I designed Emotion Explorer to help children practice identifying emotional expressions through an interactive matching activity. The design includes drag-and-drop matching, optional hints, and feedback that encourages learners to reconsider their choices.</p>
          <div className={styles.spotlightGrid}>{spotlight.map((feature, index) => (
            <figure key={feature.title}>
              <a className={styles.screenLink} href={feature.image} target="_blank" rel="noopener noreferrer" aria-label={`View full-size ${feature.title} design`}>
                <div className={styles.screen}>
                  <img src={feature.image} alt={feature.alt} width={1024} height={1366} loading="lazy" />
                  {index === 1 && <><span className={`${styles.annotation} ${styles.hintFeedback}`} aria-hidden="true"><b>1</b></span><span className={`${styles.annotation} ${styles.hintControl}`} aria-hidden="true"><b>2</b></span></>}
                </div>
                <span className={`${styles.zoomLabel} type-meta`}><ZoomIn size={15} aria-hidden="true" />View full size</span>
              </a>
              <figcaption><h3>{feature.title}</h3><p className="type-body">{feature.text}</p>{index === 1 && <p className="type-meta">1 · Explanatory feedback &nbsp; 2 · Optional hint</p>}</figcaption>
            </figure>
          ))}</div>
        </section>

        <section className={styles.section} aria-labelledby="feelzoo-rewards">
          <h2 id="feelzoo-rewards">Engagement &amp; Reward Design</h2>
          <p className="type-lead">Making learning progress visible and rewarding.</p>
          <ol className={`${styles.progression} ${styles.rewardFlow}`} aria-label="Complete Activities, Earn Zoo Tokens, Grow Your Zoo">
            <li><CircleCheck size={24} aria-hidden="true" /><h3>Complete Activities</h3><p>Children progress through interactive SEL learning activities.</p><ArrowRight className={styles.arrow} size={20} aria-hidden="true" /></li>
            <li><Coins size={24} aria-hidden="true" /><h3>Earn Zoo Tokens</h3><p>Activity completion contributes to points and rewards, giving learners visible progress toward Zoo Tokens.</p><ArrowRight className={styles.arrow} size={20} aria-hidden="true" /></li>
            <li><Sprout size={24} aria-hidden="true" /><h3>Grow Your Zoo</h3><p>Children can unlock animals and personalize their virtual zoo, with a separate coin balance for pet accessories.</p></li>
          </ol>
          <div className={styles.rewardLayout}>
            <div>
              <p>The reward system was designed to make learning progress visible and encourage continued participation. By connecting activities to a customizable virtual zoo, we explored how playful rewards could support motivation and a sense of ownership.</p>
              <aside className={styles.rewardTradeoff} aria-labelledby="feelzoo-reward-tradeoff">
                <p id="feelzoo-reward-tradeoff" className="type-label">Design Trade-off: Engagement vs. Meaningful Learning</p>
                <p>While rewards may encourage participation, they can also distract from the intended SEL learning experience. Future testing would explore whether children remain engaged with emotional reflection rather than focusing only on earning rewards.</p>
              </aside>
            </div>
            <figure className={styles.rewardFigure}>
              <a className={styles.screenLink} href="/feelzoo-reward-progress.png" target="_blank" rel="noopener noreferrer" aria-label="View full-size original FeelZoo reward-progress screen"><img src="/feelzoo-reward-progress.png" alt="Original FeelZoo Figma prototype showing 300 of 500 points, 200 coins, one Zoo Token, and assignment completion progress" width={752} height={1006} loading="lazy" /><span className={`${styles.zoomLabel} type-meta`}><ZoomIn size={15} aria-hidden="true" />View full size</span></a>
              <figcaption>Original Figma prototype · Home (6:20). Sample balances illustrate the proposed system.</figcaption>
            </figure>
          </div>
        </section>

        <section className={`${styles.section} ${styles.reflection}`} aria-labelledby="feelzoo-reflection">
          <h2 id="feelzoo-reflection">Reflection &amp; Next Steps</h2>
          <p>Designing FeelZoo helped me connect educational research with interactive learning design, particularly through the use of scaffolding, feedback, and structured activities.</p>
          <p>One limitation is that facial expressions alone cannot fully explain emotions. The same expression may mean different things depending on the person and situation.</p>
          <h3 className={styles.futureHeading}>Future Exploration</h3>
          <ul className={styles.nextSteps}>
            <li><span>Contextual Learning:</span> Connect emotion recognition with realistic situations and multiple possible interpretations.</li>
            <li><span>Learner Testing:</span> Examine whether children understand the interactions, benefit from hints, and can apply learning beyond the matching activity.</li>
          </ul>
        </section>
        <a className="project-back curriculum-return" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to Projects</a>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/contact">Contact</a></footer>
    </>
  );
}
