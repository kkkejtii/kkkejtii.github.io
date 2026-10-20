'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const tools = [
  { name: 'Google Analytics',  category: 'analityka',  emoji: '📊', color: '#F59E0B' },
  { name: 'Meta Ads',          category: 'reklama',    emoji: '🎯', color: '#3B82F6' },
  { name: 'Canva',             category: 'kreacja',    emoji: '🎨', color: '#EC4899' },
  { name: 'Notion',            category: 'workflow',   emoji: '🧠', color: '#6B7280' },
  { name: 'Figma',             category: 'design',     emoji: '✏️', color: '#8B5CF6' },
  { name: 'ChatGPT',           category: 'AI',         emoji: '🤖', color: '#22C55E' },
  { name: 'Midjourney',        category: 'AI',         emoji: '🖼️', color: '#7C3AED' },
  { name: 'WordPress',         category: 'CMS',        emoji: '🌐', color: '#2563EB' },
  { name: 'Mailchimp',         category: 'email',      emoji: '📧', color: '#F59E0B' },
  { name: 'Google Ads',        category: 'reklama',    emoji: '💰', color: '#EF4444' },
  { name: 'Ahrefs',            category: 'SEO',        emoji: '🔍', color: '#F97316' },
  { name: 'Zapier',            category: 'automatyzacje', emoji: '⚡', color: '#EF4444' },
  { name: 'Make',              category: 'automatyzacje', emoji: '🔄', color: '#8B5CF6' },
  { name: 'Looker Studio',     category: 'analityka',  emoji: '📈', color: '#22C55E' },
  { name: 'TikTok Ads',        category: 'reklama',    emoji: '📱', color: '#EC4899' },
  { name: 'Semrush',           category: 'SEO',        emoji: '🎪', color: '#F59E0B' },
  { name: 'Hootsuite',         category: 'social',     emoji: '🦉', color: '#1D4ED8' },
  { name: 'Klaviyo',           category: 'email',      emoji: '📮', color: '#10B981' },
  { name: 'CapCut',            category: 'video',      emoji: '🎬', color: '#6B7280' },
  { name: 'Claude AI',         category: 'AI',         emoji: '🧬', color: '#C8A96E' },
  { name: 'Perplexity',        category: 'AI',         emoji: '🔮', color: '#8B5CF6' },
  { name: 'Airtable',          category: 'workflow',   emoji: '🗂️', color: '#F59E0B' },
  { name: 'Stripe',            category: 'e-commerce', emoji: '💳', color: '#6366F1' },
  { name: 'Hotjar',            category: 'analityka',  emoji: '🌡️', color: '#EF4444' },
];

const categories = ['wszystkie', 'AI', 'analityka', 'reklama', 'SEO', 'kreacja', 'email', 'automatyzacje', 'social', 'CMS'];

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

export default function Tools() {
  const [activeFilter, setActiveFilter] = useState('wszystkie');

  const filtered = activeFilter === 'wszystkie'
    ? tools
    : tools.filter(t => t.category === activeFilter);

  return (
    <section id="narzedzia" className="section-pad" style={{ background: 'var(--surface)', position: 'relative', zIndex: 1 }}>
      <div style={{ position: 'absolute', inset: 0, opacity: 0.4 }} className="grid-pattern" />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <FadeUp>
          <div style={{ marginBottom: 56 }}>
            <span className="section-label">Narzędzia</span>
            <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', marginTop: 20, maxWidth: 600 }}>
              Stack, który{' '}
              <span className="gradient-text">napędza wyniki</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 520, marginTop: 16, fontSize: 17, lineHeight: 1.7 }}>
              Narzędzia to tylko środki do celu — ważne, jak się je łączy i czyta dane,
              które generują.
            </p>
          </div>
        </FadeUp>

        {/* Filter tabs */}
        <FadeUp delay={0.1}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 40 }}>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                style={{
                  background: activeFilter === cat ? 'var(--accent)' : 'var(--surface-2)',
                  border: `1px solid ${activeFilter === cat ? 'var(--accent)' : 'var(--border)'}`,
                  borderRadius: 100, padding: '7px 14px',
                  fontFamily: 'var(--font-inter)', fontSize: 12, fontWeight: 600,
                  color: activeFilter === cat ? '#07070A' : 'var(--text-muted)',
                  cursor: 'pointer', transition: 'all 0.2s ease',
                  letterSpacing: '0.02em', textTransform: 'capitalize',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeUp>

        {/* Tools grid */}
        <motion.div
          layout
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))',
            gap: 12,
          }}
        >
          {filtered.map((tool, i) => (
            <motion.div
              key={tool.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.03 }}
              whileHover={{ scale: 1.04, y: -4 }}
              className="tool-card"
              style={{ padding: '20px 16px', textAlign: 'center' }}
            >
              <div style={{ fontSize: 28, marginBottom: 10 }}>{tool.emoji}</div>
              <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', letterSpacing: '0.01em', lineHeight: 1.3 }}>
                {tool.name}
              </div>
              <div style={{ marginTop: 8 }}>
                <span style={{
                  fontSize: 9, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600,
                  color: tool.color, background: tool.color + '15',
                  padding: '2px 7px', borderRadius: 100,
                }}>
                  {tool.category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom count */}
        <FadeUp delay={0.3}>
          <p style={{ textAlign: 'center', marginTop: 40, fontSize: 13, color: 'var(--text-dim)' }}>
            {filtered.length} z {tools.length} narzędzi w aktywnym użyciu
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
