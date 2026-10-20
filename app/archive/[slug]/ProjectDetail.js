'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../../components/Nav';
import Footer from '../../../components/Footer';

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

export default function ProjectDetail({ project }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imageY     = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <>
      <Nav inverted={true} />

      <main style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

        {/* ── Hero ───────────────────────────────────────────── */}
        <div
          ref={heroRef}
          style={{
            position: 'relative',
            height: '85vh', minHeight: 560,
            overflow: 'hidden',
            background: 'var(--warm-black)',
          }}
        >
          {/* Parallax bg */}
          <motion.div
            style={{ position: 'absolute', inset: '-12%', y: imageY }}
            className="grain"
          >
            {project.image ? (
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  priority
                  style={{
                    objectFit: 'cover',
                    objectPosition: project.imagePosition || 'center 15%',
                  }}
                  sizes="100vw"
                />
              </div>
            ) : (
              <div style={{ width: '100%', height: '100%', background: project.bg }} />
            )}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to bottom, rgba(13,13,13,0.35) 0%, rgba(13,13,13,0.88) 100%)',
            }} />
          </motion.div>

          {/* Text */}
          <motion.div style={{
            position: 'absolute', inset: 0, zIndex: 10,
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
            padding: 'var(--gutter)', paddingBottom: 'clamp(48px, 7vw, 72px)',
            opacity: heroOpacity,
          }}>
            <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', width: '100%' }}>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6, ease }}
                style={{ marginBottom: 32 }}
              >
                <Link
                  href="/archive"
                  style={{
                    fontFamily: 'var(--font-primary)', fontSize: 12,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(248,247,244,0.45)', textDecoration: 'none',
                    transition: 'color 0.25s ease',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--off-white)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.45)'}
                >
                  ← Archive
                </Link>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4, ease }}
                className="t-label"
                style={{ color: 'rgba(248,247,244,0.4)', marginBottom: 20 }}
              >
                {project.categories.join(' · ')} · {project.year}
              </motion.p>

              <div style={{ overflow: 'hidden' }}>
                <motion.h1
                  initial={{ y: '102%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="t-display"
                  style={{ fontSize: 'clamp(40px, 7vw, 100px)', color: 'var(--white)' }}
                >
                  {project.title}
                </motion.h1>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.75 }}
                style={{
                  fontFamily: 'var(--font-primary)', fontWeight: 300,
                  fontSize: 'clamp(14px, 1.8vw, 18px)',
                  color: 'rgba(248,247,244,0.5)',
                  marginTop: 14,
                }}
              >
                {project.brand} · {project.subtitle}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* ── Overview + Results ─────────────────────────────── */}
        <div style={{
          background: 'var(--white)',
          padding: 'clamp(56px, 8vw, 100px) var(--gutter)',
          borderBottom: '1px solid var(--border)',
        }}>
          <div style={{
            maxWidth: 'var(--max-w)', margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(40px, 8vw, 100px)',
          }} className="detail-cols">

            {/* Overview */}
            <div>
              <Fade>
                <span className="t-label" style={{ marginBottom: 24, display: 'block', color: 'var(--beige-dark)' }}>
                  Overview
                </span>
              </Fade>
              <Fade delay={0.1}>
                <p style={{
                  fontFamily: 'var(--font-primary)', fontWeight: 300,
                  fontSize: 'clamp(15px, 1.6vw, 18px)',
                  color: 'var(--charcoal)',
                  lineHeight: 1.75, letterSpacing: '-0.01em',
                }}>
                  {project.summary}
                </p>
              </Fade>
            </div>

            {/* Results */}
            <div>
              <Fade delay={0.12}>
                <span className="t-label" style={{ marginBottom: 24, display: 'block', color: 'var(--beige-dark)' }}>
                  Results
                </span>
              </Fade>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {project.results.map((r, i) => (
                  <Fade key={i} delay={0.18 + i * 0.07}>
                    <div style={{
                      padding: '24px 0',
                      borderTop: '1px solid var(--border)',
                      borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                      paddingRight: i % 2 === 0 ? 24 : 0,
                      paddingLeft: i % 2 === 1 ? 24 : 0,
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-primary)', fontWeight: 200,
                        fontSize: 'clamp(28px, 4vw, 44px)',
                        letterSpacing: '-0.04em', color: 'var(--warm-black)',
                        lineHeight: 1, marginBottom: 6,
                      }}>
                        {r.metric}
                      </p>
                      <p className="t-caption">{r.label}</p>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Story ──────────────────────────────────────────── */}
        <div style={{ padding: 'clamp(56px, 8vw, 100px) var(--gutter)' }}>
          <div style={{ maxWidth: 680, margin: '0 auto' }}>

            <Fade>
              <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 48 }}>
                <div style={{ height: 1, width: 40, background: 'var(--beige)' }} />
                <span className="t-label" style={{ color: 'var(--beige-dark)' }}>The Story</span>
              </div>
            </Fade>

            <Fade delay={0.1}>
              <p style={{
                fontFamily: 'var(--font-primary)', fontWeight: 300,
                fontSize: 'clamp(15px, 1.6vw, 18px)',
                color: 'var(--charcoal)', lineHeight: 1.8,
                letterSpacing: '-0.01em', marginBottom: 40,
              }}>
                {project.story}
              </p>
            </Fade>

            <Fade delay={0.18}>
              <div style={{
                background: 'var(--white)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--r-lg)',
                padding: 'clamp(28px, 4vw, 44px)',
              }}>
                <span className="t-label" style={{ display: 'block', marginBottom: 16, color: 'var(--beige-dark)' }}>
                  Strategy
                </span>
                <p style={{
                  fontFamily: 'var(--font-primary)', fontWeight: 300,
                  fontSize: 'clamp(15px, 1.5vw, 17px)',
                  color: 'var(--charcoal)', lineHeight: 1.75,
                  letterSpacing: '-0.005em',
                }}>
                  {project.strategy}
                </p>
              </div>
            </Fade>
          </div>
        </div>

        {/* ── Gallery ────────────────────────────────────────── */}
        {project.gallery && (
          <div style={{
            background: 'var(--white)',
            padding: 'clamp(48px, 6vw, 80px) var(--gutter)',
            borderTop: '1px solid var(--border)',
          }}>
            <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
              <Fade>
                <span className="t-label" style={{ display: 'block', marginBottom: 32, color: 'var(--beige-dark)' }}>
                  Gallery
                </span>
              </Fade>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: 12,
              }}>
                {project.gallery.map((img, i) => (
                  <Fade key={i} delay={i * 0.08}>
                    <div
                      className="grain relative"
                      style={{
                        aspectRatio: img.aspect,
                        background: img.bg,
                        borderRadius: 'var(--r-lg)',
                        overflow: 'hidden',
                        border: '1px solid rgba(17,17,17,0.06)',
                      }}
                    >
                      <div style={{
                        position: 'absolute', inset: 0,
                        background: 'radial-gradient(ellipse at 35% 20%, rgba(255,255,255,0.06) 0%, transparent 55%)',
                      }} />
                      <span className="t-label" style={{
                        position: 'absolute', bottom: 14, right: 16,
                        color: 'rgba(248,247,244,0.3)',
                      }}>
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </Fade>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ── CTA ────────────────────────────────────────────── */}
        <div
          className="grain"
          style={{
            background: 'var(--warm-black)',
            padding: 'clamp(72px, 10vw, 120px) var(--gutter)',
            textAlign: 'center',
          }}
        >
          <Fade>
            <p className="t-label" style={{ color: 'rgba(248,247,244,0.3)', marginBottom: 24 }}>
              Continue Exploring
            </p>
          </Fade>
          <Fade delay={0.1}>
            <Link
              href="/archive"
              className="btn-primary"
              style={{
                background: 'var(--off-white)', color: 'var(--warm-black)',
                borderColor: 'var(--off-white)', display: 'inline-flex',
              }}
            >
              Return to Archive
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </Fade>
        </div>
      </main>

      <Footer />

      <style>{`
        @media (max-width: 720px) {
          .detail-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
