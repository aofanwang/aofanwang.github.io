import { ArrowUpRight, ArrowRight, BookOpen, Code2 } from 'lucide-react';
import MoreWork from '../components/more-work';
import EducationMarks from '../components/education-marks';
import './about/profile.css';
export default function Home(){return <><a className="skip" href="#main">Skip to content</a><header className="wrap header profile-site-header"><div className="identity"><div className="identity-brand-row"><a href="#" className="brand">Aofan Wang</a><EducationMarks /></div><p className="identity-line">Educator · Learning designer · Researcher · Builder</p></div><nav aria-label="Main navigation"><a href="/about">About Me</a><a href="#work">Work</a><a href="#research">Research</a><a href="#contact">Contact</a></nav></header><main id="main">
<section id="about" className="wrap hero hero-compact" aria-labelledby="hero-heading"><div className="hero-photo portrait-refined"><img src="/aofan-portrait-soft.png" alt="Aofan Wang wearing a yellow shirt against a soft ivory background" width="1122" height="1402" fetchPriority="high" /></div><div className="hero-copy"><h1 id="hero-heading">I design how people learn.</h1><div className="intro"><p>I turn observations into learning experiences, research into design decisions, and ideas into digital possibilities.</p><p>Grounded in education and psychology. Exploring what’s next with instructional design and AI-assisted building.</p><a className="more-about-link" href="/about">More about me <ArrowUpRight size={18} aria-hidden="true" /></a></div></div></section>
<div id="work" />
<section id="learning-design" className="wrap case-studies" aria-labelledby="case-studies-title">
  <div className="case-studies-heading"><span className="eyebrow">01 / SELECTED WORK</span><h2 id="case-studies-title">Curiosity, made tangible.</h2></div>
  <div className="case-study-list">
    <article className="case-study" id="truck-mission">
      <div className="case-study-image truck-feature-image"><img src="/truck-mission-cover.png" alt="Truck Mission game screen: choose an excavator, dump truck or crane to dig a hole for playground slides" width="2050" height="1153" loading="lazy" /></div>
      <div className="case-study-copy">
        <span className="case-study-category">INTERACTIVE LEARNING DESIGN</span>
        <h3>Truck Mission</h3>
        <p>A construction-themed learning game for children aged 5–6, connecting machine functions with purposeful tasks.</p>
        <div className="case-study-tags"><span>Learning game</span><span>Interaction design</span></div>
        <a className="project-link" href="/work/from-curiosity-to-curriculum/truck-lesson/level-one">View case study <ArrowRight size={18} aria-hidden="true" /></a>
      </div>
    </article>
    <article className="case-study" id="feelzoo">
      <div className="case-study-image"><img src="/feelzoo-cover.png" alt="FeelZoo concept cover with a friendly smiling character" width="800" height="600" loading="lazy" /></div>
      <div className="case-study-copy">
        <span className="case-study-category">DIGITAL LEARNING DESIGN</span>
        <h3>FeelZoo · social emotional learning</h3>
        <p>A playful learning concept helping children notice, name, and navigate big feelings.</p>
        <div className="case-study-tags"><span>Social-emotional learning</span><span>Prototyping</span></div>
        <a className="project-link" href="/work/feelzoo">View case study <ArrowRight size={18} aria-hidden="true" /></a>
      </div>
    </article>
  </div>
  <MoreWork>
    <div className="more-work-grid">
      <article className="additional-project">
        <a className="additional-project-image" href="/work/from-curiosity-to-curriculum/sensory-table" aria-label="Explore Sensory Table"><img src="/sensory-table.png" alt="Sensory-table visualization with colored rice, bowls and scooping tools" width="1431" height="1099" loading="lazy" /></a>
        <span className="case-study-category">LEARNING ENVIRONMENT DESIGN</span>
        <h3>Sensory Table</h3>
        <p>Exploring how materials, tools, and spatial choices invite children to investigate and play.</p>
        <a className="project-link" href="/work/from-curiosity-to-curriculum/sensory-table">Explore the project <ArrowRight size={18} aria-hidden="true" /></a>
      </article>
      <article className="additional-project" id="research">
        <div className="additional-project-image"><img src="/teacher-research-cover.png" alt="Illustrative research notebook and annotated papers" width="800" height="600" loading="lazy" /></div>
        <span className="case-study-category">RESEARCH & LEARNER INSIGHTS</span>
        <h3>Teacher research</h3>
        <p>Turning teacher feedback and instructional revisions into learning design insights.</p>
        <details className="research-detail"><summary>Explore the project <ArrowRight size={18} aria-hidden="true" /></summary><div className="detail"><p>I combined cross-national survey and timing data with qualitative analysis. A custom AI agent supported comparison of linguistic shifts, themes, and version differences.</p><p>My contribution included organizing data, refining coding frameworks with the research team, and connecting teacher behavior with instructional design decisions.</p></div></details>
      </article>
    </div>
  </MoreWork>
</section>
<section id="approach" className="wrap approach"><div className="section-head"><div><span className="eyebrow">02 / HOW I WORK</span><h2>Start with people.<br/>Keep learning.</h2></div><p>Classroom instincts.<br/>Research discipline. Design intent.</p></div><div className="principles">{[['01','Observe before designing','Pay attention to what people do, what they need, and where they get stuck.'],['02','Make learning intentional','Connect learner needs to clear goals, meaningful activities, and accessible experiences.'],['03','Build to learn','Make ideas tangible, gather evidence, and use what it reveals to guide the next version.']].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></section>
<section id="lab" className="wrap exploring" aria-labelledby="exploring-title"><h2 id="exploring-title">Currently exploring</h2><div className="exploring-projects"><article><h3><Code2 size={18} aria-hidden="true"/>AI Curriculum Planner</h3><p>Early ideas for turning classroom observations into curriculum planning support.</p></article><article><h3><BookOpen size={18} aria-hidden="true"/>New Teacher Onboarding</h3><p>A planned scenario-based experience for toddler behavior guidance.</p></article></div></section><section className="wrap closing" id="contact"><span className="eyebrow">LET’S MAKE LEARNING MEANINGFUL</span><a href="mailto:aofanw@umich.edu">Have a learning<br/>challenge in mind? <ArrowUpRight/></a><p>aofanw@umich.edu</p></section></main><footer className="wrap"><span>© 2026 Aofan Wang</span><span>Learning design · Research · Creative technology</span><a href="#">Back to top ↑</a></footer></>}
