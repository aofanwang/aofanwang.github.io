'use client';

import { useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, BookOpen, GitBranch, ScanSearch, RefreshCw, NotebookPen } from 'lucide-react';
import { decisionStages } from './teacher-decision-stages';
import styles from './teacher-decision-flow.module.css';

const icons = [BookOpen, GitBranch, ScanSearch, RefreshCw, NotebookPen];

export default function TeacherDecisionFlow() {
  const [active, setActive] = useState(0);
  const buttons = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = decisionStages[active];

  return <div className={styles.flow}>
    <ol className={styles.nodes} aria-label="Proposed learning experience stages">
      {decisionStages.map((item, index) => {
        const Icon = icons[index];
        return <li key={item.title}>
          <button type="button" ref={element => { buttons.current[index] = element; }}
            className={styles.node} aria-pressed={active === index} aria-controls="learning-flow-details"
            onClick={() => setActive(index)} onKeyDown={event => {
              let next: number;
              if (event.key === 'ArrowRight' || event.key === 'ArrowDown') next = Math.min(index + 1, decisionStages.length - 1);
              else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') next = Math.max(index - 1, 0);
              else if (event.key === 'Home') next = 0;
              else if (event.key === 'End') next = decisionStages.length - 1;
              else return;
              event.preventDefault();
              setActive(next);
              buttons.current[next]?.focus();
            }}>
            <span className={`${styles.number} type-meta`}>{String(index + 1).padStart(2, '0')}</span>
            <Icon size={22} aria-hidden="true" />
            <span>{item.title}</span>
          </button>
          {index < decisionStages.length - 1 && <ArrowRight className={styles.connector} size={18} aria-hidden="true" />}
        </li>;
      })}
    </ol>
    <div id="learning-flow-details" className={styles.panel} aria-live="polite" aria-atomic="true">
      <div key={active} className={styles.detail}>
        <p className={`${styles.stepLabel} type-meta`}>PROPOSED STAGE {String(active + 1).padStart(2, '0')} / 05</p>
        <h3>{stage.title}</h3>
        <div className={styles.explanation}>
          <div><p className={`${styles.label} type-label`}>What the learner does</p><p>{stage.action}</p></div>
          <div><p className={`${styles.label} type-label`}>Why I designed it this way</p><p>{stage.rationale}</p></div>
        </div>
      </div>
    </div>
    <div className={styles.controls}>
      <button type="button" aria-label="Previous stage" title="Previous stage" disabled={active === 0} onClick={() => setActive(current => Math.max(0, current - 1))}><ArrowLeft size={20} aria-hidden="true" /></button>
      <span className="type-meta">{active + 1} of {decisionStages.length}</span>
      <button type="button" aria-label="Next stage" title="Next stage" disabled={active === decisionStages.length - 1} onClick={() => setActive(current => Math.min(decisionStages.length - 1, current + 1))}><ArrowRight size={20} aria-hidden="true" /></button>
    </div>
  </div>;
}
