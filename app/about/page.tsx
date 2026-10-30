import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import EducationMarks from '../../components/education-marks';
import './profile.css';

export const metadata = {
  title: 'About Me | Aofan Wang',
  description: 'Aofan Wang: an educator and researcher bringing an understanding of learners into learning experience design.',
};

export default function AboutPage() {
  return (
    <>
      <a className="skip" href="#about-main">Skip to content</a>
      <header className="wrap header profile-site-header">
        <div className="identity">
          <div className="identity-brand-row"><a href="/" className="brand">Aofan Wang</a><EducationMarks /></div>
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation">
          <a href="/about" aria-current="page">About Me</a><a href="/#work">Work</a><a href="/#research">Research</a><a href="/#contact">Contact</a>
        </nav>
      </header>
      <main id="about-main" className="wrap profile-page">
        <a className="project-back" href="/"><ArrowLeft size={18} aria-hidden="true" />Back to home</a>
        <section className="profile-intro" aria-labelledby="profile-title">
          <figure className="profile-portrait">
            <img src="/about/michigan-graduation-portrait.jpg" alt="Aofan Wang in graduation attire outside the University of Michigan School of Education" width={1200} height={1800} fetchPriority="high" />
            <figcaption>University of Michigan, graduation</figcaption>
          </figure>
          <div className="profile-story">
            <span className="eyebrow">MORE ABOUT ME</span>
            <h1 id="profile-title">Hi, I’m Aofan.</h1>
            <p className="profile-lead">An educator’s perspective.<br />A designer’s curiosity.</p>
            <p>I’m a Bay Area educator and researcher exploring how thoughtful design can make learning more meaningful.</p>
            <p>My work starts with real people: what draws them in, where they get stuck, and what helps them participate. Classroom practice and research shape how I approach curriculum, digital experiences, and interactive prototypes.</p>
            <p>With a background in education and psychology, I’m interested in the connection between how people learn and how we design for them.</p>
            <div className="profile-links"><a href="/#work" className="text-link">Explore my work <ArrowUpRight size={18} aria-hidden="true" /></a><a className="text-link" href="/Aofan-Wang-Resume.pdf" target="_blank" rel="noreferrer">View my résumé <ArrowUpRight size={18} aria-hidden="true" /></a></div>
          </div>
        </section>

        <section className="profile-intentions" aria-label="My purpose and goal">
          <div><span className="eyebrow">PURPOSE</span><h2>Make room for learning.</h2><p>I want to create experiences that invite people to explore, participate, and build confidence. For me, meaningful design begins with understanding the learner, not simply adding more content.</p></div>
          <div><span className="eyebrow">GOAL</span><h2>Turn insight into experience.</h2><p>I’m developing my practice in learning experience and instructional design, bringing together classroom insight, research, and creative technology to turn ideas into something people can use.</p></div>
        </section>

        <section className="profile-section" aria-labelledby="experience-title">
          <div className="profile-section-heading"><span className="eyebrow">EXPERIENCE</span><h2 id="experience-title">Learning from practice.</h2></div>
          <div className="profile-timeline">
            <article><p className="profile-date">Sep 2026–Present</p><div><h3>Preschool Teacher</h3><p className="profile-organization">Stepping Stones</p><p>Working with preschool learners, bringing daily observation into learning experiences and classroom communication.</p></div></article>
            <article><p className="profile-date">Jul 2025–Jul 2026</p><div><h3>Teacher</h3><p className="profile-organization">Stanford Madera Grove Children’s Center · ICRI</p><p>Designed and adapted play-based experiences through observation of children’s interests, participation, and developmental needs.</p></div></article>
            <article><p className="profile-date">2024–2026</p><div><h3>Research Assistant</h3><p className="profile-organization">University of Michigan · Drake Lab &amp; GRIP Lab</p><p>Contributed to literature reviews, analysis of teacher feedback, and mixed-methods research on educational experiences and contexts.</p></div></article>
          </div>
        </section>

        <section id="education" className="profile-section" aria-labelledby="education-title">
          <div className="profile-section-heading"><span className="eyebrow">EDUCATION</span><h2 id="education-title">A foundation in people.</h2></div>
          <div className="profile-education">
            <article><img src="/education/umich-block-m.png" alt="" width={56} height={44} loading="lazy" /><div><h3>University of Michigan</h3><p>MA in Educational Studies</p><p>Designing for Innovation: Learning, Instruction, and Technologies</p><span>2024–2025</span></div></article>
            <article><img src="/education/uw-block-w.png" alt="" width={52} height={44} loading="lazy" /><div><h3>University of Washington</h3><p>BA in Early Childhood &amp; Family Studies<br />BA in Psychology</p><span>2020–2023</span></div></article>
          </div>
        </section>

        <section className="profile-moments" aria-labelledby="moments-title">
          <div className="profile-section-heading"><span className="eyebrow">ALONG THE WAY</span><h2 id="moments-title">A few moments from Michigan.</h2></div>
          <div className="profile-photo-pair">
            <figure><img src="/about/graduation-with-friends.jpg" alt="A group celebrating graduation at the University of Michigan" width={1282} height={854} loading="lazy" /><figcaption>Graduation day</figcaption></figure>
            <figure><img src="/about/graduation-celebration.jpg" alt="A group in graduation attire celebrating together indoors" width={1600} height={1200} loading="lazy" /><figcaption>Celebrating together</figcaption></figure>
          </div>
          <figure className="profile-campus-photo"><img src="/about/michigan-stadium.jpg" alt="Aofan Wang standing on the field in front of maize-and-blue stadium seating" width={1320} height={956} loading="lazy" /><figcaption>A moment at Michigan</figcaption></figure>
        </section>
        <div className="profile-closing"><p>Let’s make learning meaningful.</p><a className="text-link" href="mailto:aofanw@umich.edu">Get in touch <ArrowUpRight size={18} aria-hidden="true" /></a></div>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
