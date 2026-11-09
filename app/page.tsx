import { ArrowUpRight } from 'lucide-react';
import ProjectGrid from '../components/project-grid';
import AnimatedContent from '../components/react-bits/AnimatedContent';
import EducationMarks from '../components/education-marks';
import ContactFooter from '../components/contact-footer';
import DepthBrand from '../components/depth-brand';
import './about/profile.css';
export default function Home(){return <><a className="skip" href="#main">Skip to content</a><header className="wrap header profile-site-header home-header"><div className="identity"><div className="identity-brand-row"><DepthBrand /><EducationMarks /></div><p className="identity-line">LEARNING DESIGNER · EDTECH · INTERACTION DESIGN</p></div><nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About Me</a><a href="/projects">Projects</a><a href="/contact">Contact</a></nav></header><main id="main" className="portfolio-content">
<section id="about" className="wrap hero hero-compact" aria-labelledby="hero-heading"><div className="hero-photo portrait-refined"><img src="/aofan-portrait-soft.png" alt="Aofan Wang wearing a yellow shirt against a soft ivory background" width="1122" height="1402" fetchPriority="high" /></div><div className="hero-copy"><h1 id="hero-heading"><span>Anything can be taught.</span>{' '}<span>But how should it be learned?</span></h1><div className="intro"><p>I turn learning challenges into meaningful experiences through thoughtful scaffolding, interaction design, feedback, and AI-assisted prototyping.</p><a className="more-about-link" href="/projects">Explore My Work <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
<div id="work" />
<section id="learning-design" className="wrap case-studies" aria-labelledby="case-studies-title">
  <AnimatedContent distance={20} duration={0.7} ease="power2.out" threshold={0.06} initialOpacity={0} once>
    <div className="case-studies-heading"><span className="eyebrow">SELECTED PROJECTS</span><h2 id="case-studies-title">Curiosity, made tangible.</h2></div>
  </AnimatedContent>
  <ProjectGrid animate />
</section>
<section id="approach" className="wrap approach" aria-labelledby="philosophy-title">
  <header className="philosophy-heading">
    <AnimatedContent distance={20} duration={0.7} ease="power2.out" threshold={0.06} initialOpacity={0} once>
    <span className="eyebrow">MY DESIGN PHILOSOPHY</span>
    <h2 id="philosophy-title">Learning happens through doing.</h2>
    </AnimatedContent>
    <AnimatedContent distance={20} duration={0.7} ease="power2.out" threshold={0.06} delay={0.06} initialOpacity={0} once>
    <p>I believe meaningful learning connects real challenges, thoughtful design, and opportunities to practice, reflect, and grow.</p>
    </AnimatedContent>
  </header>
  <div className="principles">{[
    ['01', 'Start with a Challenge', 'Begin with a meaningful problem learners need to understand or solve.'],
    ['02', 'Understand the Context', 'Research learner needs, identify barriers, and explore where technology or AI can genuinely help.'],
    ['03', 'Design for Practice', 'Create realistic scenarios, meaningful choices, and feedback that supports reflection and growth.'],
  ].map(([number, title, description], index) => <AnimatedContent key={number} distance={20} duration={0.7} ease="power2.out" threshold={0.06} delay={index * 0.08} initialOpacity={0} once><article><span className="type-meta">{number}</span><h3>{title}</h3><p>{description}</p></article></AnimatedContent>)}</div>
</section>
</main><ContactFooter /></>}
