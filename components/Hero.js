'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const ease = [0.25, 0.46, 0.45, 0.94];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const textY       = useTransform(scrollYProgress, [0, 1],    ['0%', '22%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.45], [1, 0]);
  const sectionOp   = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section
      ref={ref}
      id="hero"
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: 800,
        overflow: 'hidden',
        background: '#0A0A0A',
      }}
    >
      <motion.div style={{ position: 'absolute', inset: 0, opacity: sectionOp }}>

        {/* Warstwa 1 — pełne tło (zdjęcie poziome) */}
        <Image
          src="/landing-page.webp"
          alt=""
          fill
          priority
          style={{
            objectFit: 'cover',
            objectPosition: '50% 50%',
          }}
        />

        {/* Przyciemnienie całości */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'rgba(10,8,4,0.38)',
        }} />

        {/* Vignette dół */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to top, rgba(10,8,4,0.85) 0%, rgba(10,8,4,0.3) 30%, transparent 55%)',
        }} />

        {/* Vignette góra */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to bottom, rgba(10,8,4,0.5) 0%, transparent 22%)',
        }} />

        {/* Vignette lewy bok — tekst czytelniejszy */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 2,
          background: 'linear-gradient(to right, rgba(10,8,4,0.6) 0%, rgba(10,8,4,0.2) 40%, transparent 65%)',
        }} />
      </motion.div>

      {/* Tekst */}
      <motion.div
        style={{
          position: 'absolute', inset: 0, zIndex: 20,
          display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
          padding: 'var(--gutter)',
          paddingBottom: 'clamp(52px, 7vw, 88px)',
          y: textY, opacity: textOpacity,
        }}
      >
        <div style={{ maxWidth: '50%', paddingRight: 'clamp(24px, 4vw, 64px)' }} className="hero-text-col">

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="t-label"
            style={{ color: 'rgba(230,222,210,0.4)', marginBottom: 28 }}
          >
            Marketing · Content Creation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-script)',
              fontWeight: 400,
              fontSize: 'clamp(58px, 9vw, 136px)',
              letterSpacing: '0.01em',
              lineHeight: 1.15,
              color: '#F5EFE4',
              marginBottom: 0,
            }}
          >
            Katarzyna
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.56, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-montserrat)',
              fontWeight: 200,
              fontSize: 'clamp(22px, 3.2vw, 48px)',
              letterSpacing: '0.28em',
              lineHeight: 1.1,
              color: 'rgba(230,222,210,0.55)',
              textTransform: 'uppercase',
              marginBottom: 'clamp(28px, 4vw, 48px)',
            }}
          >
            Kołodziej
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.88, ease }}
          >
            <p style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 300,
              fontSize: 'clamp(13px, 1.3vw, 16px)',
              color: 'rgba(230,222,210,0.48)',
              lineHeight: 1.7,
              letterSpacing: '-0.005em',
              marginBottom: 28,
              maxWidth: 300,
            }}>
              Łączę kreatywność z analityką,<br />
              by tworzyć kampanie, które działają.
            </p>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                className="btn-primary"
                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                style={{ background: '#F5EFE4', color: '#1C1408', borderColor: '#F5EFE4' }}
              >
                See My Work
              </button>
              <button
                className="btn-ghost-inv"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get in Touch
              </button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Est. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.7 }}
        style={{ position: 'absolute', top: 84, right: 'var(--gutter)', zIndex: 20 }}
      >
        <p className="t-label" style={{ color: 'rgba(230,222,210,0.18)' }}>Est. 2021</p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        style={{ position: 'absolute', bottom: 28, left: 'var(--gutter)', zIndex: 20 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
          style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, rgba(230,222,210,0.3), transparent)' }}
        />
      </motion.div>

      <style>{`
        @media (max-width: 720px) {
          .hero-text-col { max-width: 100% !important; padding-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}
