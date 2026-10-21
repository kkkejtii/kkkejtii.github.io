'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { SITE_EMAIL } from '../lib/site';

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

const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/kkkejtii/',           handle: '@kkkejtii' },
  { label: 'LinkedIn',  href: 'https://www.linkedin.com/in/katarzyna-kolodziej/', handle: 'katarzyna-kolodziej' },
  { label: 'TikTok',    href: 'https://www.tiktok.com/@kkkejtii',               handle: '@kkkejtii' },
];

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = `Zapytanie ze strony — ${form.name}`;
    const body = `${form.message}\n\n—\n${form.name}\n${form.email}`;
    window.location.href =
      `mailto:${SITE_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const F = (k) => (e) => setForm(s => ({ ...s, [k]: e.target.value }));

  return (
    <section id="contact" style={{ background: 'var(--off-white)' }}>
      <div className="container" style={{ paddingTop: 'var(--section-v)', paddingBottom: 'var(--section-v)' }}>

        {/* Display headline */}
        <Fade y={32}>
          <div style={{ marginBottom: 'clamp(56px, 8vw, 96px)' }}>
            <span className="t-label" style={{ marginBottom: 24, display: 'block' }}>
              Get in Touch
            </span>
            <h2 className="t-heading" style={{ fontSize: 'clamp(36px, 7vw, 96px)' }}>
              Let's build<br />
              <em className="t-accent" style={{ fontWeight: 300 }}>something</em><br />
              remarkable.
            </h2>
          </div>
        </Fade>

        <hr className="hr" style={{ marginBottom: 'clamp(40px, 6vw, 72px)' }} />

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 'clamp(40px, 8vw, 112px)',
        }} className="contact-grid">

          {/* ── Form ── */}
          <div>
            <Fade delay={0.1}>
              <p className="t-label" style={{ marginBottom: 32, display: 'block' }}>
                Send a Message
              </p>
            </Fade>

            {sent ? (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                style={{ paddingTop: 24 }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-primary)', fontWeight: 200,
                  fontSize: 'clamp(24px, 4vw, 40px)',
                  letterSpacing: '-0.03em', color: 'var(--warm-black)',
                  marginBottom: 12,
                }}>
                  Almost there.
                </h3>
                <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 300, fontSize: 15, color: 'var(--mid-gray)', lineHeight: 1.6 }}>
                  Otworzyłam Twój program pocztowy z gotową wiadomością — wyślij ją,
                  a odezwę się w ciągu 24 godzin.
                  <br />
                  Jeśli nic się nie otworzyło, napisz bezpośrednio na{' '}
                  <a href={`mailto:${SITE_EMAIL}`} style={{ color: 'var(--warm-black)', textDecoration: 'underline' }}>
                    {SITE_EMAIL}
                  </a>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {[
                  { key: 'name',    label: 'Name',    type: 'text',    ph: 'Your name' },
                  { key: 'email',   label: 'Email',   type: 'email',   ph: 'your@email.com' },
                ].map(({ key, label, type, ph }, i) => (
                  <Fade key={key} delay={0.14 + i * 0.07}>
                    <div style={{ marginBottom: 0 }}>
                      <label className="t-label" style={{ display: 'block', marginBottom: 12, marginTop: 28, color: 'var(--beige-dark)' }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        className="input-light"
                        placeholder={ph}
                        value={form[key]}
                        onChange={F(key)}
                        required
                        style={{
                          width: '100%', background: 'transparent',
                          border: 'none', borderBottom: '1px solid var(--beige)',
                          padding: '14px 0', fontFamily: 'var(--font-primary)',
                          fontSize: 15, fontWeight: 300, color: 'var(--warm-black)',
                          outline: 'none', transition: 'border-color 0.25s ease',
                          letterSpacing: '-0.005em',
                        }}
                        onFocus={e => e.target.style.borderBottomColor = 'var(--warm-black)'}
                        onBlur={e => e.target.style.borderBottomColor = 'var(--beige)'}
                      />
                    </div>
                  </Fade>
                ))}
                <Fade delay={0.28}>
                  <div>
                    <label className="t-label" style={{ display: 'block', marginBottom: 12, marginTop: 28, color: 'var(--beige-dark)' }}>
                      Message
                    </label>
                    <textarea
                      className="input-light"
                      placeholder="Tell me about your project..."
                      rows={4}
                      value={form.message}
                      onChange={F('message')}
                      required
                      style={{
                        width: '100%', background: 'transparent',
                        border: 'none', borderBottom: '1px solid var(--beige)',
                        padding: '14px 0', fontFamily: 'var(--font-primary)',
                        fontSize: 15, fontWeight: 300, color: 'var(--warm-black)',
                        outline: 'none', resize: 'none',
                        transition: 'border-color 0.25s ease',
                        letterSpacing: '-0.005em',
                      }}
                      onFocus={e => e.target.style.borderBottomColor = 'var(--warm-black)'}
                      onBlur={e => e.target.style.borderBottomColor = 'var(--beige)'}
                    />
                  </div>
                </Fade>
                <Fade delay={0.36}>
                  <button
                    type="submit"
                    className="btn-primary"
                    style={{ marginTop: 36, alignSelf: 'flex-start' }}
                  >
                    Send Message
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </Fade>
              </form>
            )}
          </div>

          {/* ── Info ── */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>

            {/* Direct email */}
            <Fade delay={0.12}>
              <div>
                <p className="t-label" style={{ marginBottom: 16 }}>Direct</p>
                <a
                  href={`mailto:${SITE_EMAIL}`}
                  style={{
                    fontFamily: 'var(--font-primary)', fontWeight: 200,
                    fontSize: 'clamp(14px, 2vw, 19px)',
                    color: 'var(--warm-black)', letterSpacing: '-0.02em',
                    textDecoration: 'none', borderBottom: '1px solid var(--beige)',
                    paddingBottom: 4, transition: 'border-color 0.25s ease',
                    display: 'inline-block',
                  }}
                  onMouseEnter={e => e.currentTarget.style.borderBottomColor = 'var(--warm-black)'}
                  onMouseLeave={e => e.currentTarget.style.borderBottomColor = 'var(--beige)'}
                >
                  {SITE_EMAIL}
                </a>
              </div>
            </Fade>

            {/* Location */}
            <Fade delay={0.18}>
              <div>
                <p className="t-label" style={{ marginBottom: 12 }}>Location</p>
                <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 300, fontSize: 17, color: 'var(--charcoal)', letterSpacing: '-0.01em' }}>
                  Warszawa, Poland
                </p>
                <p className="t-caption" style={{ marginTop: 6 }}>Available for remote collaborations worldwide</p>
              </div>
            </Fade>

            {/* Socials */}
            <Fade delay={0.24}>
              <div>
                <p className="t-label" style={{ marginBottom: 20 }}>Social</p>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  {socials.map((s, i) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        padding: '14px 0',
                        borderBottom: i < socials.length - 1 ? '1px solid var(--border)' : 'none',
                        textDecoration: 'none',
                        transition: 'opacity 0.25s ease',
                      }}
                      onMouseEnter={e => e.currentTarget.style.opacity = '0.55'}
                      onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                    >
                      <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 300, fontSize: 15, color: 'var(--warm-black)', letterSpacing: '-0.01em' }}>
                        {s.label}
                      </span>
                      <span className="t-caption">{s.handle}</span>
                    </a>
                  ))}
                </div>
              </div>
            </Fade>

            {/* Availability badge */}
            <Fade delay={0.3}>
              <div style={{
                display: 'flex', alignItems: 'center', gap: 10,
                padding: '14px 18px',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-md)',
                background: 'var(--white)',
                width: 'fit-content',
              }}>
                <div style={{
                  width: 7, height: 7, borderRadius: '50%',
                  background: '#2D9B5A',
                  boxShadow: '0 0 0 3px rgba(45,155,90,0.15)',
                }} />
                <span style={{ fontFamily: 'var(--font-primary)', fontWeight: 400, fontSize: 13, color: 'var(--charcoal)', letterSpacing: '0.01em' }}>
                  Available for new projects
                </span>
              </div>
            </Fade>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .contact-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
