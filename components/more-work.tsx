'use client';

import { useEffect, useRef, type ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

export default function MoreWork({ children }: { children: ReactNode }) {
  const section = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    const reveal = () => {
      if (window.location.hash !== '#research' || !section.current) return;
      section.current.open = true;
      requestAnimationFrame(() => document.getElementById('research')?.scrollIntoView({ block: 'start' }));
    };
    const handleClick = (event: MouseEvent) => {
      const anchor = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!anchor) return;
      const url = new URL(anchor.getAttribute('href')!, window.location.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname && url.hash === '#research') {
        if (section.current) section.current.open = true;
        requestAnimationFrame(reveal);
      }
    };
    reveal();
    window.addEventListener('hashchange', reveal);
    document.addEventListener('click', handleClick);
    return () => {
      window.removeEventListener('hashchange', reveal);
      document.removeEventListener('click', handleClick);
    };
  }, []);
  return <details ref={section} className="more-work" id="more-work"><summary><h2>Explore more work</h2><ChevronDown size={22} aria-hidden="true" /></summary>{children}</details>;
}
