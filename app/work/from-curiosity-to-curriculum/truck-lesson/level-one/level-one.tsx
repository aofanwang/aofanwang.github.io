'use client';

import { useState } from 'react';
import { ArrowLeft, ArrowUpRight, Check, Lightbulb, MessageCircle } from 'lucide-react';

const screens = [
  { name: 'The choice', image: '/truck-mission-screen-3.png', alt: 'Canva prototype: choose an excavator, dump truck or crane to dig a hole for playground slides' },
  { name: 'Success feedback', image: '/truck-mission-screen-4.png', alt: 'Canva prototype: an excavator digging with feedback explaining its bucket' },
  { name: 'Try again', image: '/truck-mission-screen-5.png', alt: 'Canva prototype: dump truck feedback explains carrying rather than digging, with a try again button' },
];

const thoughts = [
  {
    title: 'A reason to choose', label: 'The mission', icon: Lightbulb, tone: 'yellow', screen: 0, status: 'In the prototype',
    decision: 'A playground task gives the machine choice a concrete purpose: we need a hole for the slides.',
    tension: 'The setting can make the task meaningful, but children may choose a favorite character instead of considering the job.',
    test: 'Look for whether children connect their choice to digging, through words, gestures, or actions.',
  },
  {
    title: 'More than “correct”', label: 'The feedback', icon: MessageCircle, tone: 'green', screen: 2, status: 'In the prototype',
    decision: 'The success screen connects the excavator’s bucket to digging. The retry screen explains why the dump truck is not the right choice for this task.',
    tension: 'An explanation is available, but written feedback may not help a child who cannot yet read it independently.',
    test: 'Observe whether children reconsider after feedback or simply cycle through the remaining answers.',
  },
];

export default function LevelOne() {
  const [selected, setSelected] = useState(0);
  const thought = thoughts[selected];
  const screen = screens[thought.screen];

  return (
    <>
      <a className="skip" href="#mission-main">Skip to content</a>
      <header className="wrap header">
        <div className="identity">
          <a className="brand" href="/">Aofan Wang</a>
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation"><a href="/about">About Me</a><a href="/#work">Work</a><a href="/#research">Research</a><a href="/#contact">Contact</a></nav>
      </header>
      <main id="mission-main" className="wrap mission-page mission-simple">
        <a className="project-back" href="/work/from-curiosity-to-curriculum/truck-lesson"><ArrowLeft size={18} aria-hidden="true" />Truck Lesson</a>
        <header className="mission-heading">
          <span className="eyebrow">DIGITAL LEARNING / LEVEL 01</span>
          <h1>Truck Mission</h1>
          <p>How might children choose a machine, understand feedback, and continue without adult help?</p>
          <div className="mission-meta"><span>Primary audience: ages 5–6</span><span>Designed for independent play</span><span className="mission-status">Prototype · Not learner-tested</span></div>
        </header>
        <section className="mission-workbench" aria-labelledby="mission-challenge">
          <div className="mission-section-heading"><h2 id="mission-challenge">Behind the choices</h2><a className="mission-canva" href="https://www.canva.com/d/MA8OFJhvKcPcvTT" target="_blank" rel="noreferrer">Original Canva design<ArrowUpRight size={16} aria-hidden="true" /></a></div>
          <div className="mission-bubbles" role="group" aria-label="Design thoughts">
            {thoughts.map((item, index) => { const Icon = item.icon; const open = selected === index; return (
              <button type="button" key={item.title} className={`mission-bubble ${item.tone}`} aria-pressed={open} aria-controls="mission-design-detail" onClick={() => setSelected(index)}>
                <span className="mission-bubble-label"><Icon size={18} aria-hidden="true" />{item.label}</span><strong>{item.title}</strong><span className="mission-bubble-state" aria-hidden="true">{open ? <Check size={16} /> : <span>+</span>}</span>
              </button>
            ); })}
          </div>
          <div id="mission-design-detail" className="mission-design-detail">
            <figure className="mission-screen">
              <img key={screen.image} src={screen.image} alt={screen.alt} width={596} height={335} />
              <figcaption>Level 1 · {screen.name} · Current Canva prototype</figcaption>
            </figure>
              <article key={thought.title} className={`mission-thought ${thought.tone}`} aria-label={thought.title}>
                <dl><div><dt>The decision</dt><dd>{thought.decision}</dd></div><div><dt>The trade-off</dt><dd>{thought.tension}</dd></div><div><dt>What I would test</dt><dd>{thought.test}</dd></div></dl>
              </article>
          </div>
        </section>
        <section className="mission-next" aria-labelledby="next-question">
          <span className="eyebrow">PROPOSED · NOT YET TESTED</span><h2 id="next-question">Next iteration</h2>
          <div className="mission-next-ideas">
            <div><h3>Support independent retries</h3><p>For children aged 5–6, add replayable spoken instructions, spoken feedback, and a visual clue to reduce reliance on reading. Test whether children can reconsider without step-by-step adult explanation, while keeping room for their own thinking.</p></div>
            <div><h3>Make progress meaningful</h3><p>Explore a playground that takes shape as tasks are completed. Test whether children understand the progress, rather than simply enjoy the animation.</p></div>
          </div>
          <p className="mission-disclosure">Existing Canva screens with draft design rationale. No learner outcomes are claimed. Audio behavior and prototype navigation have not been verified here.</p>
        </section>
        <a className="project-back curriculum-return" href="/work/from-curiosity-to-curriculum"><ArrowLeft size={18} aria-hidden="true" />From Observation to Design</a>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
