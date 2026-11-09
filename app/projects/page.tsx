import EducationMarks from '../../components/education-marks';
import ContactFooter from '../../components/contact-footer';
import ProjectGrid from '../../components/project-grid';
import CaseStudyReveal from '../../components/case-study-reveal';
import '../about/profile.css';
import styles from './projects.module.css';

export const metadata = {
  title: 'Projects | Aofan Wang',
  description: 'Selected learning design, interaction design, and educational research projects by Aofan Wang.',
};

export default function ProjectsPage() {
  return <>
    <a className="skip" href="#projects-main">Skip to content</a>
    <header className="wrap header profile-site-header">
      <div className="identity">
        <div className="identity-brand-row"><a href="/" className="brand">Aofan Wang</a><EducationMarks /></div>
        <p className="identity-line">Educator · Learning designer · Researcher · Builder</p>
      </div>
      <nav aria-label="Main navigation"><a href="/">Home</a><a href="/about">About Me</a><a href="/projects" aria-current="page">Projects</a><a href="/contact">Contact</a></nav>
    </header>
    <main id="projects-main" className={`portfolio-content wrap ${styles.page}`}>
      <header className={styles.heading}><CaseStudyReveal><span className="eyebrow">SELECTED WORK</span><h1>Projects</h1></CaseStudyReveal></header>
      <ProjectGrid headingLevel={2} animate />
    </main>
    <ContactFooter />
  </>;
}
