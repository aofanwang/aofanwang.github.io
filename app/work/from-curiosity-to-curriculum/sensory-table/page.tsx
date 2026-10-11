import { ArrowLeft } from 'lucide-react';

export const metadata = { title: 'Sensory Table | Aofan Wang' };

const environments = [
  {
    title: 'Color & texture',
    image: '/sensory-table.png',
    alt: 'Colored rice with wooden cups, scoops, tongs and natural materials',
    width: 1431,
    height: 1099,
    highlights: ['Sensory exploration', 'Fine motor', 'Child-led choices'],
    description: 'A shared material paired with different tools invites scooping, transferring, grasping, and arranging. The design leaves room for children to choose how they engage rather than follow one prescribed task.',
  },
  {
    title: 'Insects & natural materials',
    image: '/sensory-table-insects.png',
    alt: 'Insect models, leaves, stones and scooping tools in a sensory tray',
    width: 1448,
    height: 1086,
    highlights: ['Observation', 'Comparing & grouping', 'Inquiry'],
    description: 'Insect models and natural objects create opportunities to notice details, compare forms, and ask questions. Open-ended tools allow children to decide what to collect, examine, or group together.',
  },
  {
    title: 'Citrus & water',
    image: '/sensory-table-citrus.png',
    alt: 'Citrus slices, leaves, bowls and tongs arranged in water',
    width: 1536,
    height: 1024,
    highlights: ['Everyday materials', 'Sensory comparison', 'Experimentation'],
    description: 'Citrus, leaves, water, and containers bring everyday materials into a new context. The arrangement invites sensory comparison and experimentation with collecting, moving, and combining objects.',
  },
  {
    title: 'Sand & construction',
    image: '/sensory-table-construction.png',
    alt: 'Toy construction vehicles, wooden blocks, ramps and scoops in sand',
    width: 1536,
    height: 1024,
    highlights: ['Construction', 'Problem-solving', 'Child-led challenges'],
    description: 'Sand, vehicles, blocks, and ramps offer a setting for transporting, building, and changing a landscape. Flexible materials leave space for children to create a challenge and try different approaches.',
  },
  {
    title: 'Ocean exploration',
    image: '/sensory-table-ocean.png',
    alt: 'Ocean animal models, shells, stones, containers and water tools',
    width: 1536,
    height: 1024,
    highlights: ['Sorting', 'Storytelling', 'Shared exploration'],
    description: 'Shells, animal models, and containers offer entry points for collecting, comparing, and imaginative play. The shared ocean setting allows different kinds of exploration to happen alongside one another.',
  },
  {
    title: 'Light & color',
    image: '/sensory-table-light.png',
    alt: 'Sunlight passing through colored transparent objects beside mirrors and fabrics',
    width: 1536,
    height: 1024,
    highlights: ['Light & shadow', 'Reflection', 'Color exploration'],
    description: 'Transparent colors, reflective surfaces, and movable materials invite exploration of light, shadow, and reflection. This concept depends on suitable light: its direction and intensity would shape the placement and timing of the experience.',
    concept: true,
  },
];

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
        <section className="sensory-intro" aria-labelledby="sensory-intent">
          <h2 id="sensory-intent">Designing invitations to explore</h2>
          <p>I approach a sensory table as a learning environment: a deliberate combination of materials, tools, and space that invites children to explore in different ways. My focus is on offering meaningful choices, making possibilities visible, and leaving room for learners to shape the experience.</p>
          <p>Across these six visualizations, I explore how changes in materials and arrangement can open up different forms of participation. The notes below describe the design intent, rather than measured learning outcomes.</p>
          <p className="sensory-image-note">AI-generated visualizations. Light &amp; Color is a concept exploration that depends on suitable lighting conditions.</p>
        </section>
        <section className="sensory-gallery" aria-label="Sensory environment designs">
          {environments.map((environment) => (
            <figure className="sensory-example" key={environment.title}>
              <div className="sensory-example-image">
                <img src={environment.image} alt={environment.alt} width={environment.width} height={environment.height} loading="lazy" />
              </div>
              <figcaption>
                <h3>{environment.title}</h3>
                <ul className="sensory-highlights">
                  {environment.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
                <p>{environment.description}</p>
                {environment.concept && <span className="sensory-concept">Concept exploration</span>}
              </figcaption>
            </figure>
          ))}
        </section>
        <a className="project-back curriculum-return" href="/work/from-curiosity-to-curriculum"><ArrowLeft size={18} aria-hidden="true" />Back to course projects</a>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/#contact">Contact</a></footer>
    </>
  );
}
