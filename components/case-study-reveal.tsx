import type { ReactNode } from 'react';
import AnimatedContent from './react-bits/AnimatedContent';

export default function CaseStudyReveal({ children, delay = 0, className, stagger = 0 }: { children: ReactNode; delay?: number; className?: string; stagger?: number }) {
  return <AnimatedContent className={className} distance={20} duration={0.7} ease="power2.out" threshold={0.06} initialOpacity={0} delay={delay} stagger={stagger} once>{children}</AnimatedContent>;
}
