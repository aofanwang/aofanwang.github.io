import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'From Observation to Design | Aofan Wang',
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
          <a href="/about">About Me</a>
          <a href="/#work">Work</a>
          <a href="/#research">Research</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>
      <main id="project-main" className="wrap curriculum-page">
        <a className="project-back" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to selected work</a>
        <header className="curriculum-heading">
          <span className="eyebrow">LEARNING EXPERIENCE DESIGN</span>
          <h1>From Observation to Design</h1>
        </header>
        <section className="course-projects" aria-label="Course projects">
          <a className="course-project" href="/work/from-curiosity-to-curriculum/sensory-table">
            <h2>Sensory Table <ArrowUpRight size={22} aria-hidden="true" /></h2>
            <div className="course-project-photo"><img src="/sensory-table.png" alt="Illustrative sensory table with colored rice, scoops and natural materials" width="1431" height="1099" /></div>
          </a>
          <a className="course-project" href="/work/from-curiosity-to-curriculum/truck-lesson">
            <h2>Truck Lesson <ArrowUpRight size={22} aria-hidden="true" /></h2>
            <div className="course-project-photo"><img src="/construction.png" alt="Illustrative construction vehicles, blocks and a cardboard ramp" width="1536" height="1024" /></div>
          </a>
        </section>
        <section className="curriculum-process curriculum-approach" aria-label="Design approach">
          <div>
            <h2>Understand the learner and the context</h2>
            <p>I start by observing what learners do, what holds their attention, and where participation becomes difficult. In my early-childhood work, repeated actions, material choices, and interactions help me frame a design question grounded in experience.</p>
          </div>
          <div>
            <h2>Make deliberate design choices</h2>
            <p>I use that question to guide decisions about materials, tools, space, and the choices available to learners. I consider what each element makes possible, what barriers it might introduce, and how different learners could participate.</p>
          </div>
          <div>
            <h2>Test assumptions and refine</h2>
            <p>I distinguish what I observed from what I expect a design to support. For proposed changes, I identify what I would look for, such as easier access to tools or more sustained exploration, and use those observations to guide the next iteration.</p>
          </div>
        </section>
        <a className="project-back curriculum-return" href="/#work"><ArrowLeft size={18} aria-hidden="true" />Back to selected work</a>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><span>Learning design · Research · Creative technology</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
