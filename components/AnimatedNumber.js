'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

function easeOutQuart(t) {
  return 1 - Math.pow(1 - t, 4);
}

export function useCountUp(target, duration = 1800, prefix = '', suffix = '') {
  const [display, setDisplay] = useState(prefix + '0' + suffix);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;

    const startTime = performance.now();
    const tick = (now) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      const value = Math.round(easeOutQuart(elapsed) * target);
      setDisplay(prefix + value + suffix);
      if (elapsed < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration, prefix, suffix]);

  return { display, ref };
}

export default function AnimatedNumber({ value, prefix = '', suffix = '', duration = 1800, style = {}, className = '' }) {
  const { display, ref } = useCountUp(value, duration, prefix, suffix);
  return (
    <span ref={ref} style={style} className={className}>
      {display}
    </span>
  );
}
