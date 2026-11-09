import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PortfolioProjectHeader from '../../../components/portfolio-project-header';
import ContactFooter from '../../../components/contact-footer';
import CaseStudyReveal from '../../../components/case-study-reveal';
import styles from '../teacher-decision-lab/teacher-decision-lab.module.css';

export const metadata = { title: 'Teacher Research Archive | Aofan Wang' };

export default function TeacherResearchArchive() {
  return <>
    <a className="skip" href="#research-main">Skip to content</a>
    <PortfolioProjectHeader />
    <main id="research-main" className={`portfolio-content wrap ${styles.page}`}>
      <header className={styles.hero}>
        <Link className="project-back" href="/projects"><ArrowLeft size={18} aria-hidden="true" />Back to Projects</Link>
        <p className={`${styles.eyebrow} type-label`}>EDUCATIONAL RESEARCH · LEARNING INSIGHTS</p>
        <h1>Teacher Research</h1>
        <CaseStudyReveal><p>Exploring instructional practices and teacher decision-making through educational research, data analysis, and synthesis.</p></CaseStudyReveal>
      </header>
      <section className={styles.section} aria-labelledby="research-contribution">
        <CaseStudyReveal>
        <h2 id="research-contribution">Research Contribution</h2>
        <p>I combined cross-national survey and timing data with qualitative analysis. A custom AI agent supported comparison of linguistic shifts, themes, and version differences.</p>
        <p>My contribution included organizing data, refining coding frameworks with the research team, and connecting teacher behavior with instructional design decisions.</p>
        <p className="type-meta">This historical research project is separate from the Teacher Decision Lab concept.</p>
        </CaseStudyReveal>
      </section>
    </main>
    <ContactFooter />
  </>;
}
