'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const socials = [
  {
    name: 'LinkedIn',
    handle: '/in/katarzyna-kolodziej',
    href: 'https://www.linkedin.com/in/katarzyna-kolodziej/',
    color: '#0A66C2',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@kkkejtii',
    href: 'https://www.instagram.com/kkkejtii/',
    color: '#E1306C',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
  },
  {
    name: 'TikTok',
    handle: '@kkkejtii',
    href: 'https://www.tiktok.com/@kkkejtii',
    color: '#FF0050',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.28 8.28 0 004.84 1.54V6.78a4.85 4.85 0 01-1.07-.09z"/>
      </svg>
    ),
  },
  {
    name: 'Email',
    handle: 'katarzyna.teres.kolodziej@gmail.com',
    href: 'mailto:katarzyna.teres.kolodziej@gmail.com',
    color: 'var(--accent)',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 01-2.06 0L2 7"/>
      </svg>
    ),
  },
];

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

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate async (replace with real endpoint or Formspree/Resend)
    await new Promise(r => setTimeout(r, 1200));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="kontakt" className="section-pad" style={{ background: 'var(--bg)', position: 'relative', zIndex: 1 }}>
      {/* Background accent */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 300,
        background: 'radial-gradient(ellipse, rgba(200,169,110,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <FadeUp>
          <div style={{ textAlign: 'center', marginBottom: 80 }}>
            <span className="section-label" style={{ justifyContent: 'center' }}>Kontakt</span>
            <h2 style={{ fontSize: 'clamp(36px, 5vw, 64px)', marginTop: 20 }}>
              Zacznijmy{' '}
              <span className="gradient-text">razem coś tworzyć</span>
            </h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: 480, margin: '16px auto 0', fontSize: 17, lineHeight: 1.7 }}>
              Szukasz kogoś, kto nie tylko stworzy ładną kampanię, ale też udowodni,
              że działa? Dobrze trafiłeś.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}
             className="contact-grid">

          {/* Form */}
          <FadeUp delay={0.1}>
            <div style={{
              background: 'var(--surface)', border: '1px solid var(--border)',
              borderRadius: 24, padding: '40px 36px',
            }}>
              <h3 style={{ fontFamily: 'var(--font-syne)', fontSize: 20, fontWeight: 700, color: 'var(--text)', marginBottom: 8 }}>
                Wyślij wiadomość
              </h3>
              <p style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 28 }}>
                Odpowiem w ciągu 24 godzin.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    textAlign: 'center', padding: '48px 24px',
                    background: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.2)',
                    borderRadius: 16,
                  }}
                >
                  <div style={{ fontSize: 40, marginBottom: 16 }}>✓</div>
                  <p style={{ fontFamily: 'var(--font-syne)', fontSize: 18, fontWeight: 700, color: '#22C55E', marginBottom: 8 }}>
                    Wiadomość wysłana!
                  </p>
                  <p style={{ fontSize: 14, color: 'var(--text-muted)' }}>
                    Odezwę się najszybciej jak to możliwe.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      Imię
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Jak mam się do Ciebie zwracać?"
                      value={formState.name}
                      onChange={e => setFormState(s => ({ ...s, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="twoj@email.pl"
                      value={formState.email}
                      onChange={e => setFormState(s => ({ ...s, email: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: 12, color: 'var(--text-muted)', fontWeight: 600, marginBottom: 8, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                      Wiadomość
                    </label>
                    <textarea
                      className="form-input"
                      placeholder="Powiedz mi o projekcie, w którym mogę pomóc..."
                      rows={5}
                      value={formState.message}
                      onChange={e => setFormState(s => ({ ...s, message: e.target.value }))}
                      required
                      style={{ resize: 'vertical', minHeight: 120 }}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="btn-primary"
                    style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1 }}
                  >
                    {loading ? (
                      <>
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          style={{ display: 'inline-block', width: 14, height: 14, border: '2px solid #07070A', borderTopColor: 'transparent', borderRadius: '50%' }}
                        />
                        Wysyłanie...
                      </>
                    ) : (
                      <>
                        Wyślij wiadomość
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </FadeUp>

          {/* Right: socials + info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {/* Location */}
            <FadeUp delay={0.15}>
              <div style={{
                background: 'var(--surface)', border: '1px solid var(--border)',
                borderRadius: 20, padding: '28px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 12px rgba(34,197,94,0.6)' }} />
                  <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 500 }}>Aktualnie dostępna</span>
                </div>
                <p style={{ fontFamily: 'var(--font-syne)', fontSize: 24, fontWeight: 700, color: 'var(--text)', marginBottom: 4 }}>
                  Warszawa
                </p>
                <p style={{ fontSize: 13, color: 'var(--text-muted)' }}>Polska · Remote friendly</p>
              </div>
            </FadeUp>

            {/* Social links */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {socials.map((s, i) => (
                <FadeUp key={s.name} delay={0.2 + i * 0.07}>
                  <motion.a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 4, borderColor: s.color + '44' }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: 16,
                      background: 'var(--surface)', border: '1px solid var(--border)',
                      borderRadius: 16, padding: '18px 20px',
                      textDecoration: 'none', transition: 'all 0.2s ease',
                    }}
                  >
                    <div style={{
                      width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                      background: s.color + '15', border: `1px solid ${s.color}22`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: s.color,
                    }}>
                      {s.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--text)' }}>{s.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {s.handle}
                      </div>
                    </div>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ color: 'var(--text-dim)', flexShrink: 0 }}>
                      <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.a>
                </FadeUp>
              ))}
            </div>

            {/* Quote */}
            <FadeUp delay={0.5}>
              <div style={{
                padding: '24px 28px', borderRadius: 20,
                background: 'linear-gradient(135deg, rgba(200,169,110,0.06), rgba(139,92,246,0.06))',
                border: '1px solid var(--border)',
              }}>
                <p style={{ fontFamily: 'var(--font-syne)', fontSize: 15, fontStyle: 'italic', color: 'var(--text)', lineHeight: 1.6 }}>
                  "Jeśli szukasz kogoś, kto nie tylko stworzy ładną kampanię, ale też udowodni, że działa — to dobrze trafiłeś."
                </p>
                <p style={{ fontSize: 12, color: 'var(--accent)', marginTop: 12, fontWeight: 600 }}>
                  — Katarzyna Kołodziej
                </p>
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
