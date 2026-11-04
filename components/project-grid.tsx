import ProjectCard from './project-card';
import { ArrowUpRight } from 'lucide-react';
import TruckMissionPreview, { TruckMissionPlayLink } from './truck-mission-preview';
import projectStyles from './project-card.module.css';

export default function ProjectGrid({ headingLevel = 3 }: { headingLevel?: 2 | 3 }) {
  return (
  <><div className={projectStyles.grid}>
    <ProjectCard headingLevel={headingLevel} id="truck-mission" title="Truck Mission" category="LEARNING EXPERIENCE DESIGN · INTERACTIVE GAME" description="An interactive construction game where children recognize machine functions, apply their knowledge through challenges, and design a playground of their own." cta="View Design Process" href="/work/from-curiosity-to-curriculum/truck-lesson/level-one" visual={<TruckMissionPreview />} action={<TruckMissionPlayLink />} />
    <ProjectCard headingLevel={headingLevel} id="feelzoo" title="FeelZoo" category="SEL · EDTECH · TEAM PROJECT" description="A playful SEL app concept that helps children explore emotions through interactive activities, reflection, and a customizable virtual zoo." cta="View Project" href="/work/feelzoo" visual={<div className={projectStyles.appScreens}><img src="/feelzoo-mood-buddies.png" alt="Original FeelZoo Mood Buddies interface" width={900} height={1200} loading="lazy" /><img src="/feelzoo-emotion-matching.png" alt="Original Emotion Explorer matching activity" width={1024} height={1366} loading="lazy" /><img src="/feelzoo-sea-narios.png" alt="Original Sea-narios story and reflection activity" width={344} height={460} loading="lazy" /><img src="/feelzoo-your-zoo.png" alt="Original Your Zoo pet customization interface" width={752} height={1006} loading="lazy" /></div>} />
      <ProjectCard headingLevel={headingLevel} id="sensory-table" title="Sensory Table" category="LEARNING ENVIRONMENT DESIGN" description="Exploring how materials, tools, and spatial choices support hands-on investigation and open-ended learning." cta="Explore Project" href="/work/from-curiosity-to-curriculum/sensory-table" image={{src:'/sensory-table.png',alt:'Sensory-table visualization with colored rice, bowls and scooping tools',width:1431,height:1099}} />
      <ProjectCard headingLevel={headingLevel} id="teacher-decision-lab" title="Teacher Decision Lab" category="SCENARIO-BASED LEARNING · TEACHER DEVELOPMENT" status="CONCEPT IN DEVELOPMENT" description="An interactive learning concept that helps novice teachers develop professional judgment through realistic classroom scenarios, contextual feedback, and reflection." cta="Explore Concept" href="/projects/teacher-decision-lab" image={{src:'/teacher-research-cover.png',alt:'Illustrative concept cover with handwritten planning notes, an open notebook, a pencil, and annotated papers; not actual project research records',width:800,height:600}} />
    </div>
    <a id="research" className={`${projectStyles.archive} type-meta`} href="/projects/teacher-research">Teacher Research archive<ArrowUpRight size={16} aria-hidden="true" /></a></>
  );
}
