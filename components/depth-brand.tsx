'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './depth-brand.module.css';

const text = 'Aofan Wang';
const layers = Array.from({ length: 10 }, (_, index) => (10 - index) * 0.6);
const tilt = 2.5;

export default function DepthBrand() {
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const link = linkRef.current;
    if (!link) return;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reset = () => {
      link.removeAttribute('data-depth-active');
      link.style.removeProperty('--brand-rotate-x');
      link.style.removeProperty('--brand-rotate-y');
    };
    const move = (event: PointerEvent) => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType === 'touch') return;
      const rect = link.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      const x = Math.max(-1, Math.min(1, (event.clientX - rect.left) / rect.width * 2 - 1));
      const y = Math.max(-1, Math.min(1, (event.clientY - rect.top) / rect.height * 2 - 1));
      link.style.setProperty('--brand-rotate-x', `${(-y * tilt).toFixed(2)}deg`);
      link.style.setProperty('--brand-rotate-y', `${(x * tilt).toFixed(2)}deg`);
      link.setAttribute('data-depth-active', '');
    };

    link.addEventListener('pointerenter', move);
    link.addEventListener('pointermove', move);
    link.addEventListener('pointerleave', reset);
    link.addEventListener('pointercancel', reset);
    link.addEventListener('blur', reset);
    window.addEventListener('blur', reset);
    reducedMotion.addEventListener('change', reset);
    finePointer.addEventListener('change', reset);
    return () => {
      link.removeEventListener('pointerenter', move);
      link.removeEventListener('pointermove', move);
      link.removeEventListener('pointerleave', reset);
      link.removeEventListener('pointercancel', reset);
      link.removeEventListener('blur', reset);
      window.removeEventListener('blur', reset);
      reducedMotion.removeEventListener('change', reset);
      finePointer.removeEventListener('change', reset);
    };
  }, []);

  return <Link ref={linkRef} href="/" className={`brand ${styles.link}`}>
    <span className={styles.stage}>
      {layers.map(depth => <span key={depth} aria-hidden="true" className={styles.layer} style={{ transform: `translateZ(-${depth}px)` }}>{text}</span>)}
      <span className={styles.face}>{text}</span>
    </span>
  </Link>;
}
