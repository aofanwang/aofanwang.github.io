import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import styles from './case-study.module.css';

const decisions = [
  ['Why three choices?', 'A small, consistent set keeps the comparison focused on machine functions.'],
  ['Why explanatory feedback?', 'Explaining what a machine does gives children a reason to reconsider, instead of simply marking an answer wrong.'],
  ['Why replayable audio?', 'Spoken prompts aim to reduce reliance on reading and adult help. This design assumption still needs learner testing.'],
];

export default function LevelOne() {
  return <>
    <a className="skip" href="#mission-main">Skip to content</a>
    <header className="wrap header"><div className="identity"><a className="brand" href="/">Aofan Wang</a><p className="identity-line">Educator · Learning designer · Researcher · Builder</p></div><nav aria-label="Main navigation"><a href="/about">About Me</a><a href="/#work">Work</a><a href="/#research">Research</a><a href="/#contact">Contact</a></nav></header>
    <main id="mission-main" className={styles.page}>
      <a className="project-back" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to selected work</a>
      <header className={styles.heading}>
        <span className={styles.eyebrow}>INTERACTIVE LEARNING DESIGN</span>
        <h1>Truck Mission</h1>
        <p className={styles.lead}>The right machine for the job.</p>
        <p>Designed for children aged 5–6 to connect construction vehicles with their functions through individual play. The learning goal: match digging, carrying, and lifting with the right machine.</p>
        <dl className={styles.facts}><div><dt>Audience</dt><dd>Children aged 5–6</dd></div><div><dt>Tools</dt><dd>Canva · HTML / CSS / JavaScript</dd></div><div><dt>Status</dt><dd>Level 1 prototype · Not learner-tested</dd></div></dl>
      </header>
      <figure className={styles.cover}><img src="/truck-mission-cover.png" alt="Truck Mission asks children which machine can dig a hole, with excavator, dump truck and crane choices" width={2050} height={1153} fetchPriority="high" /><figcaption>Level 1 · Original Canva design</figcaption></figure>
      <section className={styles.section} aria-labelledby="role-title"><div className={styles.sectionLabel}><span>01</span><h2 id="role-title">My Role</h2></div><div className={styles.sectionBody}><p>I designed the learning tasks and feedback in Canva, then used AI-assisted development to create a standalone web game. My focus was connecting learning goals with choices, explanations, and opportunities to retry.</p></div></section>
      <section className={styles.section} aria-labelledby="features-title"><div className={styles.sectionLabel}><span>02</span><h2 id="features-title">Key Product Features</h2></div><div className={styles.sectionBody}><div className={styles.goals} aria-label="Level 1 learning tasks"><div><strong>Dig</strong><span>Excavator</span></div><div><strong>Carry</strong><span>Dump truck</span></div><div><strong>Lift</strong><span>Crane</span></div></div><p className={styles.featureSummary}>Three tasks, choice-specific feedback, retries, task progression, and replayable browser narration.</p><dl className={styles.levels} aria-label="Level development status"><div><dt>Level 1</dt><dd>Playable prototype · Basic machine functions</dd></div><div><dt>Level 2</dt><dd>Planned · Scope not yet defined</dd></div><div><dt>Level 3</dt><dd>Planned · Scope not yet defined</dd></div></dl></div></section>
      <div className={styles.screens}><figure><img src="/truck-mission-success.png" alt="Correct-choice feedback explains that the excavator uses its bucket to dig" width={2050} height={1153} loading="lazy" /><figcaption>Explain why the choice fits.</figcaption></figure><figure><img src="/truck-mission-retry.png" alt="Crane feedback explains that a crane lifts rather than digs, with a Try Again button" width={2050} height={1153} loading="lazy" /><figcaption>Explain the mismatch and invite a retry.</figcaption></figure></div>
      <section className={styles.section} aria-labelledby="thinking-title"><div className={styles.sectionLabel}><span>03</span><h2 id="thinking-title">Product Thinking</h2></div><div className={styles.sectionBody}><dl className={styles.decisions}>{decisions.map(([title, text]) => <div key={title}><dt>{title}</dt><dd>{text}</dd></div>)}</dl></div></section>
      <section className={styles.section} aria-labelledby="implementation-title"><div className={styles.sectionLabel}><span>04</span><h2 id="implementation-title">Technical Implementation</h2></div><div className={styles.sectionBody}><p>Canva prototype to standalone HTML, CSS, and JavaScript game, built with AI assistance. Original PDF exports preserve the artwork; JavaScript connects choices, feedback, and navigation. Audio uses browser speech synthesis.</p><dl className={styles.iterations}><div><dt>What changed</dt><dd>Restored the illustrated layout, replaced blurry previews with original exports, and aligned clickable areas to the visible buttons.</dd></div></dl><div className={styles.implementationLinks}><a href="https://www.canva.com/d/MA8OFJhvKcPcvTT" target="_blank" rel="noreferrer">View Canva prototype<ArrowUpRight size={16} aria-hidden="true" /></a><span className={styles.localStatus}>Web game: local prototype · Public link pending</span></div></div></section>
      <section className={styles.section} aria-labelledby="feedback-title"><div className={styles.sectionLabel}><span>05</span><h2 id="feedback-title">Feedback & Next Steps</h2></div><div className={styles.sectionBody}><div className={styles.evaluation}><div><h3>Checked</h3><p>Nine answer-to-feedback mappings and source-image button coordinates passed code checks.</p></div><div><h3>Not yet tested</h3><p>No learner feedback collected. Independent play, learning outcomes, and cross-device audio remain unverified.</p></div></div><p className={styles.nextTest}><strong>Next:</strong> Complete a browser walkthrough, then observe first choices, retries, and adult help during a short play session.</p></div></section>
      <a className={`project-back ${styles.return}`} href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to selected work</a>
    </main>
    <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/#contact">Contact</a></footer>
  </>;
}
