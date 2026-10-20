'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.16, 1, 0.3, 1];

function Fade({ children, delay = 0, y = 20 }) {
  const ref     = useRef(null);
  const visible = useInView(ref, { once: true, margin: '-72px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease }}
    >{children}</motion.div>
  );
}

function ClipIn({ children, delay = 0 }) {
  const ref     = useRef(null);
  const visible = useInView(ref, { once: true, margin: '-48px' });
  return (
    <motion.div ref={ref}
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      animate={visible ? { clipPath: 'inset(0% 0 0 0)' } : {}}
      transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ overflow: 'hidden', height: '100%' }}
    >{children}</motion.div>
  );
}

const expertise = [
  { no: '01', area: 'Digital Marketing',    detail: 'Strategy, campaigns, analytics' },
  { no: '02', area: 'Content Creation',     detail: 'Photo, video, copy, social' },
  { no: '03', area: 'Personal Branding',    detail: 'Identity, positioning, growth' },
  { no: '04', area: 'Visual Merchandising', detail: 'Retail experience, displays' },
  { no: '05', area: 'Creative Direction',   detail: 'Editorials, campaigns, art direction' },
  { no: '06', area: 'Modeling & Lifestyle', detail: 'Fashion, beauty, UGC content' },
];

export default function About() {
  return (
    <section id="about" style={{ background: 'var(--off-white)' }}>

      {/* ── Section I: Intro ─────────────────────────────────────── */}
      <div className="container" style={{ paddingTop: 'var(--section-v)', paddingBottom: 'clamp(64px, 8vw, 112px)' }}>

        <Fade>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 'clamp(52px, 8vw, 96px)' }}>
            <span className="t-label">About</span>
            <hr className="hr" style={{ flex: 1 }} />
          </div>
        </Fade>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '5fr 4fr',
          gap: 'clamp(40px, 7vw, 96px)',
          alignItems: 'end',
        }} className="about-intro-grid">

          <Fade delay={0.08}>
            <h2 className="t-heading" style={{ fontSize: 'clamp(32px, 5vw, 64px)' }}>
              Marketing strategist<br />
              who understands<br />
              both creativity<br />
              <em className="t-accent" style={{ color: 'var(--charcoal)' }}>and numbers.</em>
            </h2>
          </Fade>

          <div>
            <Fade delay={0.16}>
              <p className="t-body" style={{ marginBottom: 24 }}>
                Nie zawsze planowałam karierę w marketingu. Zaczęło się od sprzedaży
                detalicznej — i właśnie to doświadczenie stało się moją największą przewagą.
              </p>
            </Fade>
            <Fade delay={0.22}>
              <p className="t-body" style={{ marginBottom: 36 }}>
                W świecie retail odkryłam, że marketing to nie tylko piękne obrazki, ale strategia
                oparta na danych, psychologii i precyzji. Dziś łączę oba te światy.
              </p>
            </Fade>
            <Fade delay={0.28}>
              <button
                className="btn-secondary"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Let's collaborate
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                  <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </Fade>
          </div>
        </div>
      </div>

      {/* ── Section II: Portrait + Expertise ─────────────────────── */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        minHeight: 'clamp(560px, 80vh, 900px)',
      }} className="about-split-grid">

        {/* ── Video column — wideo z plaży ── */}
        <div style={{
          position: 'relative',
          minHeight: 'clamp(560px, 80vh, 900px)',
          overflow: 'hidden',
          background: '#0D0D0D',
        }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            style={{
              position: 'absolute', inset: 0,
              width: '100%', height: '100%',
              objectFit: 'cover',
              objectPosition: 'center center',
            }}
          >
            <source src="/video.mp4" type="video/mp4" />
          </video>
          {/* Bottom fade */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(8,8,8,0.55) 0%, rgba(8,8,8,0.1) 35%, transparent 60%)',
            zIndex: 1,
          }} />
        </div>

        {/* ── Expertise column ── */}
        <div style={{
          background: 'var(--white)',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          padding: 'clamp(40px, 7vw, 96px)',
        }}>
          <Fade delay={0.2}>
            <span className="t-label" style={{ marginBottom: 40, display: 'block' }}>
              Areas of Expertise
            </span>
          </Fade>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {expertise.map((item, i) => (
              <Fade key={item.no} delay={0.24 + i * 0.06}>
                <div style={{
                  display: 'grid', gridTemplateColumns: '32px 1fr auto',
                  alignItems: 'center', gap: 16,
                  padding: '18px 0',
                  borderBottom: i < expertise.length - 1 ? '1px solid var(--border)' : 'none',
                }}>
                  <span className="t-label" style={{ color: 'var(--beige-dark)', fontWeight: 300 }}>
                    {item.no}
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-primary)', fontWeight: 400,
                    fontSize: 15, color: 'var(--warm-black)', letterSpacing: '-0.01em',
                  }}>
                    {item.area}
                  </span>
                  <span className="t-caption" style={{ textAlign: 'right' }}>
                    {item.detail}
                  </span>
                </div>
              </Fade>
            ))}
          </div>

          {/* Cormorant pull quote */}
          <Fade delay={0.4}>
            <div style={{
              marginTop: 48, paddingTop: 32,
              borderTop: '1px solid var(--border)',
            }}>
              <p className="t-accent" style={{
                fontSize: 'clamp(18px, 2.2vw, 24px)',
                color: 'var(--charcoal)', lineHeight: 1.45,
              }}>
                "Marketing nie dotyczy już rzeczy,<br />
                które robisz, ale historii, które opowiadasz."
              </p>
              <p className="t-caption" style={{ marginTop: 12, color: 'var(--gold)' }}>
                — Seth Godin
              </p>
            </div>
          </Fade>
        </div>
      </div>

      <style>{`
        @media (max-width: 800px) {
          .about-intro-grid { grid-template-columns: 1fr !important; }
          .about-split-grid  { grid-template-columns: 1fr !important; }
          .about-split-grid > div:first-child { min-height: 420px !important; }
        }
      `}</style>
    </section>
  );
}
