import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import PortfolioProjectHeader from '../../../components/portfolio-project-header';
import ContactFooter from '../../../components/contact-footer';
import TeacherDecisionFlow from '../../../components/teacher-decision-flow';
import styles from './teacher-decision-lab.module.css';

export const metadata = {
  title: 'Teacher Decision Lab | Aofan Wang',
  description: 'A scenario-based learning design concept for novice teachers to practice professional judgment through decisions, contextual feedback, and reflection.',
};

export default function TeacherDecisionLabPage() {
  return <>
    <a className="skip" href="#decision-lab-main">Skip to content</a>
    <PortfolioProjectHeader />
    <main id="decision-lab-main" className={`portfolio-content wrap ${styles.page}`}>
      <header className={styles.hero}>
        <Link className="project-back" href="/projects"><ArrowLeft size={18} aria-hidden="true" />Back to Projects</Link>
        <p className={`${styles.eyebrow} type-label`}>LEARNING EXPERIENCE DESIGN · ADULT LEARNING</p>
        <h1>Teacher Decision Lab</h1>
        <p className={`${styles.tagline} type-lead`}>Practice the decisions behind teaching.</p>
        <p>A scenario-based learning concept designed to help novice teachers practice classroom decision-making, consider different approaches, and reflect on their professional judgment.</p>
        <span className={`${styles.status} type-meta`}>Concept in Development</span>
      </header>
      <section className={styles.section} aria-labelledby="decision-problem">
        <p className={`${styles.eyebrow} type-label`}>THE PROBLEM · DESIGN HYPOTHESIS</p>
        <h2 id="decision-problem">Knowing the theory is not the same as knowing what to do.</h2>
        <p>New teachers may know general classroom management strategies but feel uncertain about how to respond when real situations become complicated. Because children, classrooms, and teaching styles differ, a single script may not fit every situation.</p>
        <p className={styles.question}>How might we help novice teachers practice professional judgment through realistic classroom decisions, contextual feedback, and reflection?</p>
        <h3>Learning Objective</h3>
        <p>Given a realistic classroom scenario, learners will compare possible responses, explain their reasoning, and reconsider their approach when new contextual information becomes available.</p>
      </section>
      <section className={styles.section} aria-labelledby="decision-flow">
        <h2 id="decision-flow">Interactive Learning Experience Flow</h2>
        <p className={`${styles.flowNote} type-meta`}>Proposed learning design · Five connected stages</p>
        <TeacherDecisionFlow />
      </section>
      <section className={styles.section} aria-labelledby="decision-philosophy">
        <p className={`${styles.eyebrow} type-label`}>DESIGN PHILOSOPHY &amp; NEXT STEPS</p>
        <h2 id="decision-philosophy">Teach the reasoning, not just the response.</h2>
        <p>Different classroom situations may call for different strategies. Rather than memorizing one perfect response, teachers should have opportunities to examine context, consider consequences, and reflect on their decisions.</p>
        <p className={`${styles.boundary} type-meta`}>Safety, child well-being, and professional responsibilities remain essential boundaries. Not every possible response is equally appropriate.</p>
        <h3>What&apos;s Next</h3>
        <p>The next stage is to design a small interactive classroom scenario and examine the instructional content with relevant educators. The concept has not yet been developed into a complete product or tested with learners.</p>
      </section>
    </main>
    <ContactFooter />
  </>;
}
