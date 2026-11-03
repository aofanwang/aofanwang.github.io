'use client';

import { useEffect, useState } from 'react';
import { Play } from 'lucide-react';
import Magnet from './react-bits/Magnet';
import PixelTransition from './react-bits/PixelTransition';
import styles from './truck-mission-preview.module.css';

function usePointerMotion() {
  const [motionEnabled, setMotionEnabled] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    const update = () => {
      setMotionEnabled(media.matches);
    };
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  return motionEnabled;
}

export default function TruckMissionPreview() {
  const motionEnabled = usePointerMotion();
  const [hovered, setHovered] = useState(false);

  return <div className={styles.preview} onPointerEnter={event => {
    if (event.pointerType !== 'touch') setHovered(true);
  }} onPointerLeave={() => setHovered(false)}>
    <PixelTransition
      key={motionEnabled ? 'motion' : 'static'}
      firstContent={<img src="/truck-mission-guidance.jpg" alt="Level 2: guide an excavator through an interactive digging task" width={1280} height={719} loading="lazy" />}
      secondContent={<img src="/truck-mission-autonomy.jpg" alt="Level 3: customize equipment and arrange your own playground" width={1280} height={719} loading="lazy" />}
      active={motionEnabled && hovered}
      gridSize={24}
      pixelColor="#faf6ee"
      animationStepDuration={0.16}
      pattern="wipe"
      pixelAnimation="fade"
      randomness={0.15}
      aspectRatio="16 / 9"
      className={styles.transition}
    />
  </div>;
}

export function TruckMissionPlayLink() {
  const motionEnabled = usePointerMotion();
  return <Magnet padding={28} magnetStrength={5} maxOffset={7} tilt={0} scale={1}
      spring={{ stiffness: 170, damping: 26 }} disabled={!motionEnabled}
      wrapperClassName={styles.magnet}>
      <a className={styles.sticker} href="https://aofanwang.github.io/truck-mission/" target="_blank" rel="noopener noreferrer" aria-label="Try Me! Play Truck Mission (opens in a new tab)">
        <Play size={16} aria-hidden="true" />Try Me!
      </a>
    </Magnet>;
}
