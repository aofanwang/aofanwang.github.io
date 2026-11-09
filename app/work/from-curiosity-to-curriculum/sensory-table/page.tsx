import { ArrowLeft } from 'lucide-react';
import SensoryOrbit from './sensory-orbit';
import DepthBrand from '../../../../components/depth-brand';
import CaseStudyReveal from '../../../../components/case-study-reveal';
import styles from './sensory.module.css';

export const metadata = { title: 'Sensory Table | Aofan Wang' };

const environments = [
  {
    title: 'Color & Texture',
    story: '/work/from-curiosity-to-curriculum/sensory-table/color-and-texture',
    image: '/sensory-table.png',
    alt: 'Colored rice with wooden cups, scoops, tongs and natural materials',
    width: 1431,
    height: 1099,
    highlights: ['Sensory exploration', 'Fine motor', 'Child-led choices'],
    description: 'A shared material with varied tools invites scooping, transferring, grasping, and arranging. Children can choose how they engage rather than follow one prescribed task.',
  },
  {
    title: 'Insects & Natural Materials',
    image: '/sensory-table-insects.png',
    alt: 'Insect models, leaves, stones and scooping tools in a sensory tray',
    width: 1448,
    height: 1086,
    highlights: ['Observation', 'Comparing & grouping', 'Inquiry'],
    description: 'Insect models and natural objects invite noticing details, comparing forms, and asking questions. Open-ended tools leave children free to collect, examine, and group objects.',
  },
  {
    title: 'Citrus & Water',
    image: '/sensory-table-citrus.png',
    alt: 'Citrus slices, leaves, bowls and tongs arranged in water',
    width: 1536,
    height: 1024,
    highlights: ['Everyday materials', 'Sensory comparison', 'Experimentation'],
    description: 'Citrus, leaves, water, and containers bring everyday materials into a new context, inviting sensory comparison and experiments with collecting, moving, and combining objects.',
  },
  {
    title: 'Sand & Construction',
    image: '/sensory-table-construction.png',
    alt: 'Toy construction vehicles, wooden blocks, ramps and scoops in sand',
    width: 1536,
    height: 1024,
    highlights: ['Construction', 'Problem-solving', 'Child-led challenges'],
    description: 'Sand, vehicles, blocks, and ramps invite transporting, building, and reshaping a landscape. Flexible materials leave space for children to create challenges and try different approaches.',
  },
  {
    title: 'Ocean Exploration',
    image: '/sensory-table-ocean.png',
    alt: 'Ocean animal models, shells, stones, containers and water tools',
    width: 1536,
    height: 1024,
    highlights: ['Sorting', 'Storytelling', 'Shared exploration'],
    description: 'Shells, animal models, and containers offer entry points for collecting, comparing, and imaginative play, allowing different kinds of exploration alongside one another.',
  },
  {
    title: 'Light & Color',
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
          <DepthBrand />
          <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
        </div>
        <nav aria-label="Main navigation">
          <a href="/">Home</a><a href="/about">About Me</a><a href="/projects">Projects</a><a href="/contact">Contact</a>
        </nav>
      </header>
      <main id="project-main" className={`portfolio-content wrap curriculum-page ${styles.page}`}>
        <a className="project-back" href="/projects"><ArrowLeft size={18} aria-hidden="true" />Back to Projects</a>
        <CaseStudyReveal><header className={styles.intro}>
            <span className={`${styles.eyebrow} type-label`}>LEARNING ENVIRONMENT DESIGN</span>
            <h1>Sensory Table</h1>
            <p className={`${styles.tagline} type-lead`}>Materials invite. Children decide.</p>
            <p>Exploring how materials, tools, and space create opportunities for curiosity, choice, and open-ended learning.</p>
        </header></CaseStudyReveal>
        <SensoryOrbit environments={environments} />
        <a className="project-back curriculum-return" href="/projects"><ArrowLeft size={18} aria-hidden="true" />Back to Projects</a>
      </main>
      <footer className="wrap"><span>© 2026 Aofan Wang</span><a href="/contact">Contact</a></footer>
    </>
  );
}
