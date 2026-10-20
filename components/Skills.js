'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const skillCategories = [
  {
    id: 'marketing',
    label: 'Marketing',
    color: 'var(--accent)',
    colorDim: 'rgba(200,169,110,0.1)',
    icon: '◆',
    skills: [
      { name: 'Content Marketing',      level: 92 },
      { name: 'Social Media Strategy',  level: 88 },
      { name: 'Email Marketing',        level: 80 },
      { name: 'Brand Strategy',         level: 85 },
      { name: 'Visual Merchandising',   level: 95 },
      { name: 'Campaign Management',    level: 82 },
    ],
  },
  {
    id: 'seo',
    label: 'SEO',
    color: '#3B82F6',
    colorDim: 'rgba(59,130,246,0.1)',
    icon: '◈',
    skills: [
      { name: 'On-page SEO',             level: 85 },
      { name: 'Keyword Research',        level: 88 },
      { name: 'Technical SEO',           level: 72 },
      { name: 'Link Building',           level: 70 },
      { name: 'Google Search Console',   level: 82 },
      { name: 'Copywriting SEO',         level: 86 },
    ],
  },
  {
    id: 'analityka',
    label: 'Analityka',
    color: '#22C55E',
    colorDim: 'rgba(34,197,94,0.1)',
    icon: '◉',
    skills: [
      { name: 'Google Analytics 4',      level: 83 },
      { name: 'Meta Ads Manager',        level: 80 },
      { name: 'Looker Studio',           level: 75 },
      { name: 'Excel / Google Sheets',   level: 88 },
      { name: 'Conversion Tracking',     level: 78 },
      { name: 'A/B Testing',             level: 72 },
    ],
  },
  {
    id: 'ai',
    label: 'AI',
    color: 'var(--purple)',
    colorDim: 'rgba(139,92,246,0.1)',
    icon: '◇',
    skills: [
      { name: 'ChatGPT / Claude',        level: 93 },
      { name: 'Midjourney',              level: 85 },
      { name: 'Canva AI',                level: 90 },
      { name: 'Notion AI',               level: 88 },
      { name: 'Perplexity AI',           level: 80 },
      { name: 'AI Prompt Engineering',   level: 87 },
    ],
  },
  {
    id: 'wordpress',
    label: 'WordPress',
    color: '#F59E0B',
    colorDim: 'rgba(245,158,11,0.1)',
    icon: '▲',
    skills: [
      { name: 'Gutenberg Editor',        level: 90 },
      { name: 'Elementor',               level: 82 },
      { name: 'WooCommerce',             level: 68 },
      { name: 'Yoast SEO',               level: 88 },
      { name: 'Performance Optimization',level: 72 },
      { name: 'Theme Customization',     level: 80 },
    ],
  },
  {
    id: 'automatyzacje',
    label: 'Automatyzacje',
    color: '#EC4899',
    colorDim: 'rgba(236,72,153,0.1)',
    icon: '◑',
    skills: [
      { name: 'Zapier',                  level: 82 },
      { name: 'Make (Integromat)',        level: 78 },
      { name: 'Notion Workflows',        level: 85 },
      { name: 'Airtable',                level: 75 },
      { name: 'Mailchimp Automations',   level: 80 },
      { name: 'RSS + Content pipelines', level: 72 },
    ],
  },
];

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref} style={{ marginBottom: 16 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>{name}</span>
        <span style={{ fontSize: 11, color: color, fontWeight: 600 }}>{level}%</span>
      </div>
      <div className="skill-bar">
        <motion.div
          className="skill-bar-fill"
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: level / 100 } : {}}
          transition={{ duration: 1.2, delay, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ background: `linear-gradient(90deg, ${color}, ${color}88)` }}
        />
      </div>
    </div>
  );
}

function FadeUp({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState('marketing');
  const active = skillCategories.find(c => c.id === activeTab);

  return (
    <section id="umiejetnosci" className="section-pad" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>

        {/* Header */}
        <FadeUp>
          <div style={{ marginBottom: 60 }}>
            <span className="section-label">Umiejętności</span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: 20, maxWidth: 600 }}>
              Zestaw narzędzi{' '}
              <span className="gradient-text">nowoczesnego marketera</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 520, marginTop: 16, fontSize: 17, lineHeight: 1.7 }}>
              Łączę kompetencje kreatywne z analitycznymi — od kampanii po dane,
              od WordPress po AI.
            </p>
          </div>
        </FadeUp>

        {/* Tab navigation */}
        <FadeUp delay={0.1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 48 }}>
            {skillCategories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  background: activeTab === cat.id ? cat.colorDim : 'var(--surface)',
                  border: `1px solid ${activeTab === cat.id ? cat.color + '44' : 'var(--border)'}`,
                  borderRadius: 100, padding: '8px 16px',
                  fontFamily: 'var(--font-inter)', fontSize: 13, fontWeight: 600,
                  color: activeTab === cat.id ? cat.color : 'var(--text-muted)',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                <span>{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Tab content */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}
             className="skills-grid">
          {/* Skills bars */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 20, padding: '32px 28px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
                <span style={{ fontSize: 24, color: active.color }}>{active.icon}</span>
                <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 20, fontWeight: 700, color: 'var(--text)' }}>
                  {active.label}
                </h3>
              </div>
              {active.skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={active.color}
                  delay={i * 0.08}
                />
              ))}
            </div>
          </motion.div>

          {/* Right: radar summary + mindset */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {/* Category overview */}
            <FadeUp delay={0.2}>
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 20, padding: '28px',
              }}>
                <h4 style={{ fontFamily: 'var(--font-syne)', fontSize: 15, fontWeight: 700, color: 'var(--text)', marginBottom: 20 }}>
                  Przegląd kompetencji
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {skillCategories.map(cat => {
                    const avg = Math.round(cat.skills.reduce((s, k) => s + k.level, 0) / cat.skills.length);
                    return (
                      <div key={cat.id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <span style={{ fontSize: 12, color: cat.color, width: 14, textAlign: 'center' }}>{cat.icon}</span>
                        <span style={{ fontSize: 13, color: 'var(--text-muted)', width: 110, flexShrink: 0 }}>{cat.label}</span>
                        <div style={{ flex: 1, height: 4, background: 'var(--border)', borderRadius: 2, overflow: 'hidden' }}>
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${avg}%` }}
                            transition={{ duration: 1.2, delay: 0.3 }}
                            style={{ height: '100%', background: cat.color, borderRadius: 2 }}
                          />
                        </div>
                        <span style={{ fontSize: 12, color: cat.color, fontWeight: 600, width: 32, textAlign: 'right' }}>{avg}%</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeUp>

            {/* Mindset */}
            <FadeUp delay={0.3}>
              <div style={{
                background: 'linear-gradient(135deg, rgba(200,169,110,0.08), rgba(139,92,246,0.08))',
                border: '1px solid var(--border)',
                borderRadius: 20, padding: '28px',
              }}>
                <p style={{ fontFamily: 'var(--font-syne)', fontSize: 16, fontWeight: 600, color: 'var(--text)', lineHeight: 1.55, fontStyle: 'italic' }}>
                  "You can&rsquo;t use up creativity. The more you use, the more you have."
                </p>
                <p style={{ marginTop: 16, fontSize: 12, color: 'var(--text-dim)', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  — Oscar Wilde
                </p>
                <div style={{ marginTop: 24, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                  {['Kreatywna', 'Analityczna', 'Data-driven', 'Strategiczna'].map(tag => (
                    <span key={tag} className="tag" style={{ color: 'var(--accent)', borderColor: 'var(--accent-dim)' }}>{tag}</span>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
