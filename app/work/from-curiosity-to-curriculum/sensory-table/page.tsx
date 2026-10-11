import { ArrowLeft } from 'lucide-react';

export const metadata = { title: 'Sensory Table | Aofan Wang' };

export default function CourseProject() {
  return (
    <>
      <a className="skip" href="#project-main">Skip to content</a>
      <header className="wrap header">
        <div className="identity">
          <a className="brand" href="/">Aofan Wang</a>
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation">
          <a href="/#about">About Me</a><a href="/#work">Work</a><a href="/#research">Research</a><a href="/#contact">Contact</a>
        </nav>
      </header>
      <main id="project-main" className="wrap curriculum-page">
        <a className="project-back" href="/work/from-curiosity-to-curriculum"><ArrowLeft size={18} aria-hidden="true" />From curiosity to curriculum</a>
        <header className="curriculum-heading">
          <span className="eyebrow">LEARNING EXPERIENCE DESIGN</span>
          <h1>Sensory Table</h1>
        </header>
        <figure className="curriculum-figure">
          <img src="/sensory-table.png" alt="Illustrative sensory table with colored rice, scoops and natural materials" width="1431" height="1099" style={{ aspectRatio: 'auto' }} />
          <figcaption>Illustrative image</figcaption>
        </figure>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
