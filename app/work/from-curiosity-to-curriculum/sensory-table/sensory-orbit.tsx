'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowUpRight, Pause, Play, X } from 'lucide-react';
import OrbitImages from '../../../../components/orbit-images/OrbitImages';
import styles from './sensory.module.css';

type Environment = {
  title: string; image: string; alt: string; width: number; height: number;
  highlights: string[]; description: string; story?: string; concept?: boolean;
};

export default function SensoryOrbit({ environments }: { environments: Environment[] }) {
  const [animated, setAnimated] = useState(false);
  const [paused, setPaused] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [selected, setSelected] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const images = useMemo(() => environments.map(item => ({ src: item.image, alt: item.title })), [environments]);
  const environment = selected === null ? null : environments[selected];

  useEffect(() => {
    const query = window.matchMedia('(min-width: 801px) and (prefers-reduced-motion: no-preference)');
    const update = () => { setAnimated(query.matches); setHovered(false); setFocused(false); };
    update();
    query.addEventListener('change', update);
    return () => query.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (selected === null || !dialogRef.current) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [selected]);

  const close = () => dialogRef.current?.close();
  const restore = () => {
    const index = selected;
    setSelected(null);
    if (index === null) return;
    const trigger = galleryRef.current?.querySelector<HTMLElement>(`[data-orbit-item="${index}"], [data-environment-index="${index}"]`);
    trigger?.focus({ preventScroll: true });
    setFocused(!!trigger?.matches(':focus-visible'));
  };

  return <>
    <div ref={galleryRef} className={styles.gallery} aria-label="Explore six sensory environment concepts"
      onPointerEnter={event => { if (event.pointerType !== 'touch') setHovered(true); }}
      onPointerLeave={() => setHovered(false)}
      onFocusCapture={event => setFocused(event.target.matches(':focus-visible'))}
      onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
      {animated ? <OrbitImages images={images} className={styles.orbit} shape="ellipse" radiusX={500} radiusY={210}
        showPath={true} pathColor="rgba(125, 112, 99, 0.38)" pathWidth={1.5} pathDash={5}
        height="100%" itemSize={205} duration={21} rotation={-5} depth={0} shadow={0} itemRadius={8}
        hoverScale={1} hoverSpeed={0} intro={false} draggable={false} clickToFront={false}
        paused={paused || hovered || focused || selected !== null} onItemClick={index => setSelected(index)}
      /> : <div className={styles.staticImages}>{environments.map((item, index) => <button type="button" data-environment-index={index} key={item.title} onClick={() => setSelected(index)} aria-label={item.title}>
        <img src={item.image} alt="" width={item.width} height={item.height} /><span className="type-meta">{item.title}</span>
      </button>)}</div>}
      {animated && <button type="button" className={styles.motionButton} onClick={() => setPaused(value => !value)} aria-label={paused ? 'Resume image motion' : 'Pause image motion'} title={paused ? 'Resume image motion' : 'Pause image motion'} aria-pressed={paused}>
        {paused ? <Play size={16} aria-hidden="true" /> : <Pause size={16} aria-hidden="true" />}
      </button>}
    </div>
    <p className={`${styles.disclosure} type-meta`}>AI-generated visualizations illustrating learning environment design concepts.</p>
    <dialog ref={dialogRef} className={styles.dialog} aria-labelledby="environment-title" aria-describedby="environment-description" onClose={restore}
      onKeyDown={event => {
        if (event.key !== 'Tab') return;
        const controls = event.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]');
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
      }}
      onClick={event => {
        if (event.target !== event.currentTarget) return;
        const rect = event.currentTarget.getBoundingClientRect();
        if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) close();
      }}>
      {environment && <>
        <div className={styles.dialogHeading}><h2 id="environment-title">{environment.title}</h2><button type="button" className={styles.closeButton} aria-label="Close environment details" title="Close" onClick={close} autoFocus><X size={22} aria-hidden="true" /></button></div>
        <div className={styles.dialogContent}>
          <img className={styles.detailImage} src={environment.image} alt={`AI-generated concept: ${environment.alt}`} width={environment.width} height={environment.height} />
          <div>
            <ul className={styles.highlights}>{environment.highlights.map(highlight => <li className="type-meta" key={highlight}>{highlight}</li>)}</ul>
            <p id="environment-description">{environment.description}</p>
            {environment.story && <a className={`${styles.story} type-action`} href={environment.story}>Read the Design Story<ArrowUpRight size={18} aria-hidden="true" /></a>}
            {environment.concept && <p className={`${styles.concept} type-meta`}>Concept exploration · Depends on suitable lighting conditions.</p>}
            <p className={`${styles.concept} type-meta`}>AI-generated concept visualization, not a photograph of an implemented activity or evidence of measured learning outcomes.</p>
          </div>
        </div>
      </>}
    </dialog>
  </>;
}
