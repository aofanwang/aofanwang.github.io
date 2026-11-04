import { ArrowUpRight } from 'lucide-react';
import ProjectGrid from '../components/project-grid';
import AnimatedContent from '../components/react-bits/AnimatedContent';
import EducationMarks from '../components/education-marks';
import ContactFooter from '../components/contact-footer';
import DepthBrand from '../components/depth-brand';
import './about/profile.css';
export default function Home(){return <><a className="skip" href="#main">Skip to content</a><header className="wrap header profile-site-header home-header"><div className="identity"><div className="identity-brand-row"><DepthBrand /><EducationMarks /></div><p className="identity-line">Educator · Learning designer · Researcher · Builder</p></div><nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About Me</a><a href="/projects">Projects</a><a href="/contact">Contact</a></nav></header><main id="main" className="portfolio-content">
<section id="about" className="wrap hero hero-compact" aria-labelledby="hero-heading"><div className="hero-photo portrait-refined"><img src="/aofan-portrait-soft.png" alt="Aofan Wang wearing a yellow shirt against a soft ivory background" width="1122" height="1402" fetchPriority="high" /></div><div className="hero-copy"><h1 id="hero-heading">I design how people learn.</h1><div className="intro"><p>I turn observations into learning experiences, research into design decisions, and ideas into digital possibilities.</p><p>Grounded in education and psychology. Exploring what’s next with instructional design and AI-assisted building.</p><a className="more-about-link" href="/about">More about me <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
<div id="work" />
<section id="learning-design" className="wrap case-studies" aria-labelledby="case-studies-title">
  <AnimatedContent distance={12} duration={0.45} threshold={0.05} initialOpacity={0.75} once>
    <div className="case-studies-heading"><span className="eyebrow">SELECTED PROJECTS</span><h2 id="case-studies-title">Curiosity, made tangible.</h2></div>
  </AnimatedContent>
  <AnimatedContent distance={12} duration={0.5} threshold={0.03} initialOpacity={0.85} once><ProjectGrid /></AnimatedContent>
</section>
<section id="approach" className="wrap approach" aria-labelledby="philosophy-title">
  <AnimatedContent distance={12} duration={0.45} threshold={0.05} initialOpacity={0.75} once>
  <header className="philosophy-heading">
    <span className="eyebrow">MY DESIGN PHILOSOPHY</span>
    <h2 id="philosophy-title">Learning happens through doing.</h2>
    <p>I believe meaningful learning connects real challenges, thoughtful design, and opportunities to practice, reflect, and grow.</p>
  </header>
  <div className="principles">{[
    ['01', 'Start with a Challenge', 'Begin with a meaningful problem learners need to understand or solve.'],
    ['02', 'Understand the Context', 'Research learner needs, identify barriers, and explore where technology or AI can genuinely help.'],
    ['03', 'Design for Practice', 'Create realistic scenarios, meaningful choices, and feedback that supports reflection and growth.'],
  ].map(([number, title, description]) => <article key={number}><span className="type-meta">{number}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
  </AnimatedContent>
</section>
</main><ContactFooter /></>}
