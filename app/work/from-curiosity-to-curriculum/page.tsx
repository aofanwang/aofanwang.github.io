import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'From curiosity to curriculum | Aofan Wang',
  description: 'Observation-led learning design through sensory tables and a truck lesson.',
};

export default function CurriculumProject() {
  return (
    <>
      <a className="skip" href="#project-main">Skip to content</a>
      <header className="wrap header">
        <div className="identity">
          <a href="/" className="brand">Aofan Wang</a>
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation">
          <a href="/#about">About Me</a>
          <a href="/#work">Work</a>
          <a href="/#research">Research</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>
      <main id="project-main" className="wrap curriculum-page">
        <a className="project-back" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to selected work</a>
        <header className="curriculum-heading">
          <span className="eyebrow">LEARNING EXPERIENCE DESIGN</span>
          <h1>From curiosity to curriculum</h1>
        </header>
        <section className="curriculum-process" aria-label="Design approach">
          <div>
            <h2>Start with a real interest</h2>
            <p>I begin with what draws children in: the materials they return to, the questions they explore, and the actions they repeat. These observations help identify meaningful learning goals.</p>
          </div>
          <div>
            <h2>Turn observation into experience</h2>
            <p>I translate those interests into hands-on experiences, choosing materials and activities that invite exploration, support emerging skills, and leave room for children to shape their own learning.</p>
          </div>
          <div>
            <h2>Observe, then adapt</h2>
            <p>I document how children use materials, communicate, experiment, and interact with one another. What I notice guides the next iteration: adjusting the setup, extending a challenge, or introducing a new possibility.</p>
          </div>
        </section>
        <section className="course-projects" aria-label="Course projects">
          <a className="course-project" href="/work/from-curiosity-to-curriculum/sensory-table">
            <h2>Sensory Table <ArrowUpRight size={22} aria-hidden="true" /></h2>
            <div className="course-project-photo"><img src="/sensory-table.png" alt="Illustrative sensory table with colored rice, scoops and natural materials" width="1431" height="1099" loading="lazy" /></div>
          </a>
          <a className="course-project" href="/work/from-curiosity-to-curriculum/truck-lesson">
            <h2>Truck Lesson <ArrowUpRight size={22} aria-hidden="true" /></h2>
            <div className="course-project-photo"><img src="/construction.png" alt="Illustrative construction vehicles, blocks and a cardboard ramp" width="1536" height="1024" loading="lazy" /></div>
          </a>
        </section>
        <a className="project-back curriculum-return" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to selected work</a>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><span>Learning design · Research · Creative technology</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
