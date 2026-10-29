import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'About Me | Aofan Wang',
  description: 'Aofan Wang: an educator and researcher bringing an understanding of learners into learning experience design.',
};

export default function AboutPage() {
  return (
    <>
      <a className="skip" href="#about-main">Skip to content</a>
      <header className="wrap header">
        <div className="identity">
          <a href="/" className="brand">Aofan Wang</a>
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation">
          <a href="/about" aria-current="page">About Me</a><a href="/#work">Work</a><a href="/#research">Research</a><a href="/#contact">Contact</a>
        </nav>
      </header>
      <main id="about-main" className="wrap curriculum-page">
        <a className="project-back" href="/"><ArrowLeft size={18} aria-hidden="true" />Back to home</a>
        <header className="curriculum-heading"><h1>About Me</h1></header>
        <section className="about about-profile"><div className="monogram" aria-hidden="true">aw<span>Always learning.</span></div><div><span className="eyebrow">MY BACKGROUND</span><h2>An educator’s perspective.<br/>A designer’s way of thinking.</h2><p>I’m Aofan Wang, a Bay Area educator and researcher working at the intersection of learning, human behavior, and design.</p><p>My background brings together a master’s in Educational Studies at the University of Michigan, degrees in Early Childhood & Family Studies and Psychology at the University of Washington, and hands-on experience designing responsive learning environments at Stanford Madera Grove Children’s Center.</p><p>I bring that understanding of real learners into curriculum, digital learning experiences, and emerging instructional design work.</p><a className="text-link" href="/Aofan-Wang-Resume.pdf" target="_blank" rel="noreferrer">View my résumé <ArrowUpRight size={18}/></a></div></section>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
