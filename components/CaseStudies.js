'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import AnimatedNumber from './AnimatedNumber';

const cases = [
  {
    id: 1,
    category: 'Social Media',
    tag: 'Kampania organiczna',
    title: 'Wzrost zasięgu organicznego dla marki modowej',
    desc: 'Kompleksowa strategia content marketingowa dla butiku fashion. Opracowanie kalendarza treści, identyfikacja trendów i budowanie społeczności od podstaw na Instagramie i TikToku.',
    color: '#C8A96E',
    colorDim: 'rgba(200,169,110,0.08)',
    goal: 'Zwiększenie świadomości marki wśród docelowej grupy 18-35 lat.',
    actions: ['Analiza grupy docelowej i konkurencji', 'Opracowanie content pillars i harmonogramu', 'Tworzenie Reels i TikToków z trenującymi formatami', 'A/B testowanie hashtagów i CTA'],
    metrics: [
      { value: 340, suffix: '%', label: 'Wzrost zasięgu' },
      { value: 180, suffix: '%', label: 'Wzrost engagement' },
      { value: 67, suffix: '%', label: 'Nowi followers' },
    ],
    result: 'W ciągu 3 miesięcy konto z poniżej 1k obserwujących osiągnęło ponad 8k. Jeden Reel organicznie trafił do Explore z zasięgiem 240k.',
  },
  {
    id: 2,
    category: 'Content Marketing',
    tag: 'SEO & Blog',
    title: 'Strategia contentowa dla marki B2B',
    desc: 'Opracowanie i realizacja strategii content marketingowej — blog, newsletter i webinary. Optymalizacja pod SEO i budowanie autorytetu branżowego.',
    color: '#8B5CF6',
    colorDim: 'rgba(139,92,246,0.08)',
    goal: 'Generowanie leadów przez content i wzrost pozycji w Google.',
    actions: ['Audyt SEO i analiza słów kluczowych', 'Tworzenie 15 długich artykułów (2000+ słów)', 'Uruchomienie newslettera dwutygodniowego', 'Link building z branżowymi portalami'],
    metrics: [
      { value: 215, suffix: '%', label: 'Organic traffic' },
      { value: 2400, suffix: '', label: 'Subskrybentów' },
      { value: 85, suffix: '%', label: 'Wzrost CTR' },
    ],
    result: '3 artykuły znalazły się w Top 3 Google na docelowe frazy. Newsletter osiągnął open rate 38% (branżowa średnia: 21%).',
  },
  {
    id: 3,
    category: 'Visual Merchandising',
    tag: 'Retail Experience',
    title: 'Redesign przestrzeni sprzedażowej sieci sklepów',
    desc: 'Projekt i wdrożenie nowej koncepcji visual merchandisingu dla 12 lokalizacji. Spójność wizualna, psychologia zakupów i optymalizacja layoutu sklepu.',
    color: '#3B82F6',
    colorDim: 'rgba(59,130,246,0.08)',
    goal: 'Poprawa doświadczenia zakupowego i wzrost sprzedaży impulsowej.',
    actions: ['Analiza heat map i ścieżek klientów', 'Projekt nowych ekspozycji kolekcji', 'Szkolenie personelu z VM standardów', 'Wdrożenie sezonowych display windows'],
    metrics: [
      { value: 28, suffix: '%', label: 'Wzrost konwersji' },
      { value: 40, suffix: '%', label: 'Czas w sklepie' },
      { value: 19, suffix: '%', label: 'Avg. basket value' },
    ],
    result: 'W pierwszym kwartale po wdrożeniu sprzedaż impulsowa wzrosła o 28%. Projekt zdobył wewnętrzną nagrodę za best retail experience.',
  },
  {
    id: 4,
    category: 'Analytics & SEO',
    tag: 'Data-Driven',
    title: 'Optymalizacja SEO i analityka e-commerce',
    desc: 'Kompleksowy audyt i optymalizacja sklepu internetowego — technical SEO, UX, analityka GA4 i śledzenie konwersji. Wdrożenie dashboardu raportowego.',
    color: '#22C55E',
    colorDim: 'rgba(34,197,94,0.08)',
    goal: 'Zwiększenie widoczności w Google i poprawę wskaźników e-commerce.',
    actions: ['Audyt techniczny i Core Web Vitals', 'Optymalizacja meta tagów i struktury URL', 'Konfiguracja GA4 + BigQuery', 'Wdrożenie custom dashboard w Looker Studio'],
    metrics: [
      { value: 312, suffix: '%', label: 'Organic traffic' },
      { value: 92, suffix: '%', label: 'Session duration' },
      { value: 45, suffix: '%', label: 'Bounce rate ↓' },
    ],
    result: '8 fraz w Top 5 Google w ciągu 4 miesięcy. Dashboard raportowy zredukował czas przygotowania raportów z 4h do 20 minut tygodniowo.',
  },
];

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function CaseCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{ y: -6 }}
      className="case-card"
      style={{
        background: 'var(--surface)',
        transition: 'box-shadow 0.3s ease',
        boxShadow: hovered
          ? `0 30px 80px rgba(0,0,0,0.4), 0 0 0 1px ${project.color}33`
          : '0 4px 24px rgba(0,0,0,0.2)',
        cursor: 'pointer',
      }}
      onClick={() => setExpanded(v => !v)}
    >
      {/* Top accent line */}
      <div style={{ height: 2, background: `linear-gradient(90deg, ${project.color}, transparent)`, borderRadius: '20px 20px 0 0' }} />

      <div style={{ padding: '32px 32px 28px' }}>
        {/* Tags */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
          <span className="tag" style={{ color: project.color, borderColor: `${project.color}33`, background: project.colorDim }}>
            {project.category}
          </span>
          <span className="tag">{project.tag}</span>
        </div>

        {/* Title */}
        <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 22, fontWeight: 700, color: 'var(--text)', marginBottom: 12, lineHeight: 1.3 }}>
          {project.title}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: 28 }}>
          {project.desc}
        </p>

        {/* KPI metrics */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, padding: '20px 0', borderTop: '1px solid var(--border)' }}>
          {project.metrics.map((m, i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-syne)', fontSize: 26, fontWeight: 800, lineHeight: 1 }}>
                <AnimatedNumber
                  value={m.value}
                  suffix={m.suffix}
                  style={{ color: project.color }}
                />
              </div>
              <div style={{ fontSize: 11, color: 'var(--text-dim)', marginTop: 6, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                {m.label}
              </div>
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
          <span style={{ fontSize: 13, color: 'var(--text-muted)' }}>
            {expanded ? 'Zwiń szczegóły' : 'Zobacz szczegóły'}
          </span>
          <motion.div
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ color: 'var(--text-dim)' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </div>

        {/* Expanded details */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ overflow: 'hidden' }}
            >
              <div style={{ paddingTop: 28, borderTop: '1px solid var(--border)', marginTop: 16 }}>
                {/* Goal */}
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontSize: 11, color: project.color, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                    Cel projektu
                  </span>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.65 }}>{project.goal}</p>
                </div>
                {/* Actions */}
                <div style={{ marginBottom: 20 }}>
                  <span style={{ fontSize: 11, color: project.color, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 10 }}>
                    Działania
                  </span>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {project.actions.map((a, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--text-muted)' }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: project.color, flexShrink: 0, marginTop: 6 }} />
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Result */}
                <div style={{ background: project.colorDim, border: `1px solid ${project.color}22`, borderRadius: 12, padding: '16px 20px' }}>
                  <span style={{ fontSize: 11, color: project.color, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: 8 }}>
                    Wynik
                  </span>
                  <p style={{ fontSize: 14, color: 'var(--text)', lineHeight: 1.65 }}>{project.result}</p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="projekty" className="section-pad" style={{ background: 'var(--surface)', position: 'relative', zIndex: 1 }}>
      {/* Subtle grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5 }} className="grid-pattern" />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <FadeUp>
          <div style={{ marginBottom: 64 }}>
            <span className="section-label">Case Studies</span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: 20, maxWidth: 600 }}>
              Kampanie, które{' '}
              <span className="gradient-text-purple">żyją i sprzedają</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 540, marginTop: 16, fontSize: 17, lineHeight: 1.7 }}>
              Każdy projekt to połączenie strategii, kreacji i danych. Kliknij kartę,
              aby zobaczyć pełny opis działań i wyniki.
            </p>
          </div>
        </FadeUp>

        {/* Cards grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}
             className="cases-grid">
          {cases.map((project, i) => (
            <CaseCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cases-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
