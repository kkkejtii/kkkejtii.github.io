'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const ease = [0.25, 0.46, 0.45, 0.94];

function Fade({ children, delay = 0, y = 20 }) {
  const ref = useRef(null);
  const v   = useInView(ref, { once: true, margin: '-64px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={v ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease }}
    >{children}</motion.div>
  );
}

const services = [
  {
    no: '01',
    title: 'Marketing Strategy',
    desc: 'Kampanie digital, content strategy, brand positioning, analytics i optymalizacja. Każda decyzja poparta danymi.',
    tags: ['Campaigns', 'Analytics', 'SEO', 'Email'],
  },
  {
    no: '02',
    title: 'Content Creation',
    desc: 'Zdjęcia, video, Reels, copywriting, social media. Tworzę treści, które angażują i konwertują.',
    tags: ['Photo', 'Video', 'Copy', 'Social'],
  },
  {
    no: '03',
    title: 'Personal Branding',
    desc: 'Budowanie marki osobistej od podstaw — identyfikacja wizualna, pozycjonowanie, strategia komunikacji.',
    tags: ['Identity', 'Strategy', 'Growth'],
  },
  {
    no: '04',
    title: 'Creative Direction',
    desc: 'Art direction sesji zdjęciowych i kampanii. Połączenie estetyki z efektywnością komunikacji marki.',
    tags: ['Editorials', 'Campaigns', 'Styling'],
  },
];

export default function Services() {
  return (
    <section style={{ background: 'var(--warm-black)', color: 'var(--off-white)' }}>
      <div className="container" style={{ paddingTop: 'var(--section-v)', paddingBottom: 'var(--section-v)' }}>

        {/* Header */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(32px, 6vw, 80px)',
          marginBottom: 'clamp(56px, 8vw, 96px)',
          alignItems: 'end',
        }} className="svc-header-grid">
          <Fade>
            <div>
              <span className="t-label" style={{ color: 'rgba(248,247,244,0.35)', marginBottom: 20, display: 'block' }}>
                Services
              </span>
              <h2 className="t-heading" style={{
                fontSize: 'clamp(28px, 4.5vw, 56px)',
                color: 'var(--off-white)',
              }}>
                What I Offer
              </h2>
            </div>
          </Fade>
          <Fade delay={0.12}>
            <p style={{
              fontFamily: 'var(--font-primary)', fontWeight: 300,
              fontSize: 'clamp(14px, 1.5vw, 17px)',
              color: 'rgba(248,247,244,0.45)',
              lineHeight: 1.7, letterSpacing: '-0.005em',
            }}>
              Specjalizuję się w tworzeniu kampanii łączących estetykę z wynikami.
              Pracuję z markami fashion, lifestyle i beauty — od strategii po realizację.
            </p>
          </Fade>
        </div>

        {/* Services rows */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((svc, i) => (
            <Fade key={svc.no} delay={i * 0.09}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '64px 1fr auto',
                gap: 'clamp(20px, 4vw, 48px)',
                alignItems: 'start',
                padding: 'clamp(28px, 4vw, 40px) 0',
                borderBottom: '1px solid rgba(248,247,244,0.08)',
              }} className="svc-row">
                {/* No. */}
                <span className="t-label" style={{ color: 'rgba(248,247,244,0.2)', paddingTop: 3 }}>
                  {svc.no}
                </span>

                {/* Content */}
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-primary)', fontWeight: 300,
                    fontSize: 'clamp(20px, 2.5vw, 28px)',
                    letterSpacing: '-0.025em', color: 'var(--off-white)',
                    marginBottom: 14,
                  }}>
                    {svc.title}
                  </h3>
                  <p style={{
                    fontFamily: 'var(--font-primary)', fontWeight: 300,
                    fontSize: 15, lineHeight: 1.7,
                    color: 'rgba(248,247,244,0.45)',
                    maxWidth: 480,
                  }}>
                    {svc.desc}
                  </p>
                </div>

                {/* Tags */}
                <div style={{
                  display: 'flex', flexDirection: 'column', gap: 6,
                  alignItems: 'flex-end', paddingTop: 4,
                }} className="svc-tags">
                  {svc.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-primary)', fontSize: 11,
                      letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: 'rgba(248,247,244,0.25)', fontWeight: 400,
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Fade>
          ))}
        </div>

        {/* CTA */}
        <Fade delay={0.18}>
          <div style={{ marginTop: 'clamp(48px, 6vw, 72px)', display: 'flex', gap: 12 }}>
            <button
              className="btn-primary"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'var(--off-white)', color: 'var(--warm-black)', borderColor: 'var(--off-white)' }}
            >
              Start a Project
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </Fade>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .svc-header-grid { grid-template-columns: 1fr !important; }
          .svc-row { grid-template-columns: 40px 1fr !important; }
          .svc-tags { display: none !important; }
        }
      `}</style>
    </section>
  );
}
