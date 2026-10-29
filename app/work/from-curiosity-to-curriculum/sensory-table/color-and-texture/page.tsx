import { ArrowLeft } from 'lucide-react';

export const metadata = { title: 'Color & Texture | Aofan Wang' };

export default function ColorAndTexture() {
  return (
    <>
      <a className="skip" href="#project-main">Skip to content</a>
      <header className="wrap header">
        <div className="identity">
          <a className="brand" href="/">Aofan Wang</a>
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation">
          <a href="/about">About Me</a><a href="/#work">Work</a><a href="/#research">Research</a><a href="/#contact">Contact</a>
        </nav>
      </header>
      <main id="project-main" className="wrap curriculum-page">
        <a className="project-back" href="/work/from-curiosity-to-curriculum/sensory-table"><ArrowLeft size={18} aria-hidden="true" />Sensory Table</a>
        <header className="curriculum-heading">
          <span className="eyebrow">DESIGN STORY</span>
          <h1>Color &amp; Texture</h1>
        </header>
        <section className="sensory-intro" aria-labelledby="story-intent">
          <h2 id="story-intent">From repeated scooping to a sensory-table design</h2>
          <p>A design exploration inspired by children&apos;s repeated scooping, interest in one another&apos;s play, and competition for a shared spoon.</p>
        </section>
        <div className="curriculum-process">
          <section>
            <h2>What I noticed</h2>
            <p>During a sand activity, children repeatedly scooped sand into bowls. They also watched how other children played and scooped. At times, children competed for the same spoon, making access to a preferred tool a source of conflict.</p>
            <p>These observations drew my attention to more than the materials themselves: repetition, watching peers, and access to tools were all shaping the experience.</p>
          </section>
          <section>
            <h2>How it informed the design</h2>
            <p>The colored-rice visualization explores how I could build on that interest. Bowls, scoops, and tongs offer different ways to transfer and arrange materials while keeping filling and emptying at the center of the experience.</p>
            <p>Watching peers also mattered. I would arrange the materials so children could see one another&apos;s actions and have space to try what interested them.</p>
          </section>
          <section>
            <h2>What I would change and test</h2>
            <p>I would begin by providing several similar spoons, rather than assuming different tools would be equally appealing. I would then observe whether easier access reduced conflict and allowed children to sustain their exploration.</p>
            <p>I would also look for whether children tried an action after watching a peer, and whether scooping remained their main interest or developed into pouring, comparing, or combining materials.</p>
          </section>
        </div>
        <figure className="curriculum-figure">
          <img src="/sensory-table.png" alt="Colored-rice sensory-table visualization with bowls, scoops and tongs, inspired by a sand activity" width={1431} height={1099} style={{ aspectRatio: 'auto' }} />
          <figcaption>AI-generated design visualization inspired by observations during a sand activity. The proposed adaptations have not yet been evaluated.</figcaption>
        </figure>
        <a className="project-back curriculum-return" href="/work/from-curiosity-to-curriculum/sensory-table"><ArrowLeft size={18} aria-hidden="true" />Back to Sensory Table</a>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
