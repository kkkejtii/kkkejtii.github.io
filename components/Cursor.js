'use client';

import { useEffect, useRef } from 'react';

export default function Cursor() {
  const dotRef  = useRef(null);
  const ringRef = useRef(null);
  const pos     = useRef({ x: -100, y: -100 });
  const ring    = useRef({ x: -100, y: -100 });
  const raf     = useRef(null);
  const hovered = useRef(false);

  useEffect(() => {
    // Hide native cursor site-wide
    document.documentElement.style.cursor = 'none';

    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const onEnter = () => {
      hovered.current = true;
      dotRef.current?.classList.add('cursor--hover');
      ringRef.current?.classList.add('cursor--hover');
    };
    const onLeave = () => {
      hovered.current = false;
      dotRef.current?.classList.remove('cursor--hover');
      ringRef.current?.classList.remove('cursor--hover');
    };

    const attachHover = () => {
      document.querySelectorAll('a, button, [role="button"], input, textarea, label').forEach(el => {
        el.style.cursor = 'none';
        el.addEventListener('mouseenter', onEnter);
        el.addEventListener('mouseleave', onLeave);
      });
    };

    // Lerp ring toward dot
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      ring.current.x = lerp(ring.current.x, pos.current.x, 0.12);
      ring.current.y = lerp(ring.current.y, pos.current.y, 0.12);
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    attachHover();
    raf.current = requestAnimationFrame(tick);

    // Re-attach on DOM changes (Next.js navigation)
    const observer = new MutationObserver(attachHover);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.documentElement.style.cursor = '';
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf.current);
      observer.disconnect();
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none)').matches) return null;

  return (
    <>
      {/* Dot — snaps instantly */}
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      {/* Ring — lerps behind */}
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
