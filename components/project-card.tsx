import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import styles from './project-card.module.css';

type ProjectCardProps = {
  id: string;
  title: string;
  category: string;
  description: string;
  cta: string;
  href?: string;
  action?: ReactNode;
  image?: { src: string; alt: string; width: number; height: number };
  visual?: ReactNode;
  imageNote?: string;
  children?: ReactNode;
};

export default function ProjectCard({ id, title, category, description, cta, href, action, image, visual, imageNote, children }: ProjectCardProps) {
  const content = <>
    <div className={styles.image}>
      {image && <img src={image.src} alt={image.alt} width={image.width} height={image.height} loading="lazy" />}
      {visual}
      {imageNote && <span className={`${styles.imageNote} type-meta`}>{imageNote}</span>}
    </div>
    <div className={styles.copy}>
      <span className={`${styles.category} type-label`}>{category}</span>
      <h3 id={`${id}-title`} className={styles.title}>{title}</h3>
      <p>{description}</p>
      {href ? <span className={styles.cta}>{cta}<ArrowRight size={18} aria-hidden="true" /></span> :
        <details className={`research-detail ${styles.disclosure}`}><summary className={styles.cta}>{cta}<ArrowRight size={18} aria-hidden="true" /></summary><div className="detail">{children}</div></details>}
    </div>
  </>;
  if (href && action) return <article id={id} className={`${styles.card} ${styles.linkedCard}`} aria-labelledby={`${id}-title`}>
    <a className={styles.mainLink} href={href} aria-labelledby={`${id}-title`}>{content}</a>
    <div className={styles.action}>{action}</div>
  </article>;
  return href ? <a id={id} className={styles.card} href={href} aria-labelledby={`${id}-title`}>{content}</a> :
    <article id={id} className={styles.card} aria-labelledby={`${id}-title`}>{content}</article>;
}
