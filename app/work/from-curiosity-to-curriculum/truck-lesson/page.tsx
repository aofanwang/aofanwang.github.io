import { ArrowLeft } from 'lucide-react';

export const metadata = { title: 'Truck Lesson | Aofan Wang' };

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
          <h1>Truck Lesson</h1>
        </header>
        <section className="curriculum-process" aria-label="Design approach">
          <div>
            <h2>Start with a real interest</h2>
            <p>Children repeatedly watched trucks and excavators outside the playground. Their gestures, sounds, and sustained attention guided the learning goals.</p>
          </div>
          <div>
            <h2>Turn observation into experience</h2>
            <p>Cardboard ramps introduced speed and distance. Scooping and transporting supported motor planning. Tire-track painting extended the inquiry into pattern and cause and effect.</p>
          </div>
          <div>
            <h2>Observe, then adapt</h2>
            <p>Documentation focused on emerging vocabulary, repeated experimentation, peer interaction, and transfer across activities. These observations informed what to deepen or change next.</p>
          </div>
        </section>
        <figure className="curriculum-figure">
          <img src="/construction.png" alt="Illustrative construction vehicles, blocks and a cardboard ramp" width="1536" height="1024" />
          <figcaption>Illustrative image</figcaption>
        </figure>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
