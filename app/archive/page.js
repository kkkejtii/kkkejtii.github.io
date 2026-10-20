'use client';

import { useState, useRef, useCallback } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import { projects, allCategories } from '../../lib/projects';

const ease = [0.25, 0.46, 0.45, 0.94];

/* ── Lightbox ─────────────────────────────────────────────────── */
function Lightbox({ item, onClose, onPrev, onNext }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease }}
      className="lightbox"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: 24, right: 32, zIndex: 10,
          background: 'none', border: 'none', cursor: 'pointer',
          fontFamily: 'var(--font-primary)', fontSize: 12, fontWeight: 400,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'rgba(248,247,244,0.45)',
          transition: 'color 0.2s ease',
          display: 'flex', alignItems: 'center', gap: 8,
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--off-white)'}
        onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.45)'}
      >
        Close
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Prev / Next */}
      {[
        { label: '←', fn: onPrev, pos: { left: 24 } },
        { label: '→', fn: onNext, pos: { right: 24 } },
      ].map(({ label, fn, pos }) => (
        <button
          key={label}
          onClick={e => { e.stopPropagation(); fn(); }}
          style={{
            position: 'absolute', top: '50%', transform: 'translateY(-50%)',
            ...pos, zIndex: 10,
            background: 'none', border: '1px solid rgba(248,247,244,0.12)',
            borderRadius: 'var(--r-sm)',
            color: 'rgba(248,247,244,0.5)', cursor: 'pointer',
            width: 44, height: 44, display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--font-primary)', fontSize: 18,
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(248,247,244,0.4)'; e.currentTarget.style.color = 'var(--off-white)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(248,247,244,0.12)'; e.currentTarget.style.color = 'rgba(248,247,244,0.5)'; }}
        >
          {label}
        </button>
      ))}

      {/* Image */}
      <motion.div
        key={item.slug}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease }}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: 'min(720px, 88vw)',
          maxHeight: '82vh',
          width: '100%',
          aspectRatio: item.aspect || '4/5',
          background: item.bg,
          borderRadius: 'var(--r-lg)',
          position: 'relative', overflow: 'hidden',
        }}
        className="grain relative"
      >
        {item.image && (
          <Image
            src={item.image}
            alt={item.title}
            fill
            style={{ objectFit: 'cover', objectPosition: item.imagePosition || 'center top', borderRadius: 'var(--r-lg)' }}
            sizes="720px"
          />
        )}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          padding: '40px 28px 28px',
          background: 'linear-gradient(to top, rgba(17,17,17,0.8), transparent)',
          borderRadius: '0 0 var(--r-lg) var(--r-lg)',
        }}>
          <p className="t-label" style={{ color: 'rgba(248,247,244,0.5)', marginBottom: 6 }}>
            {item.categories?.join(' · ')}
          </p>
          <p style={{
            fontFamily: 'var(--font-primary)', fontWeight: 200,
            fontSize: 24, letterSpacing: '-0.025em', color: 'var(--white)',
          }}>
            {item.title}
          </p>
        </div>
      </motion.div>

      {/* Bottom actions */}
      <div style={{
        position: 'absolute', bottom: 28, left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: 16, alignItems: 'center',
      }}>
        <Link
          href={`/archive/${item.slug}`}
          onClick={e => e.stopPropagation()}
          className="btn-ghost-inv"
          style={{ fontSize: 12 }}
        >
          View Full Project →
        </Link>
      </div>
    </motion.div>
  );
}

/* ── Masonry card ─────────────────────────────────────────────── */
function ArchiveCard({ project, index, onClick }) {
  const ref   = useRef(null);
  const v     = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      className="masonry-item"
      initial={{ opacity: 0, y: 24 }}
      animate={v ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease }}
    >
      <motion.button
        onClick={() => onClick(project)}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.3, ease }}
        style={{ width: '100%', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0 }}
      >
        {/* Image */}
        <div
          className="grain relative"
          style={{
            aspectRatio: project.aspect,
            background: project.bg,
            borderRadius: 'var(--r-lg)',
            overflow: 'hidden',
            border: '1px solid rgba(17,17,17,0.06)',
            position: 'relative',
          }}
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              style={{ objectFit: 'cover', objectPosition: project.imagePosition || 'center top' }}
              sizes="(max-width: 960px) 50vw, 33vw"
            />
          )}
          {/* Hover overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            style={{
              position: 'absolute', inset: 0,
              background: 'rgba(17,17,17,0.42)',
              borderRadius: 'var(--r-lg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 2,
            }}
          >
            <span
              className="t-label"
              style={{ color: 'var(--white)', letterSpacing: '0.2em' }}
            >
              Open
            </span>
          </motion.div>

          {/* Category badge */}
          <div style={{
            position: 'absolute', top: 14, left: 14, zIndex: 3,
            background: 'rgba(17,17,17,0.5)', backdropFilter: 'blur(8px)',
            borderRadius: 6, padding: '4px 10px',
          }}>
            <span className="t-label" style={{ color: 'rgba(248,247,244,0.65)', fontSize: 9 }}>
              {project.categories[0]}
            </span>
          </div>
        </div>

        {/* Caption */}
        <div style={{ padding: '12px 4px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
          <div>
            <p style={{
              fontFamily: 'var(--font-primary)', fontWeight: 300,
              fontSize: 15, letterSpacing: '-0.015em', color: 'var(--warm-black)',
              marginBottom: 3,
            }}>
              {project.title}
            </p>
            <p className="t-caption">{project.subtitle}</p>
          </div>
          <span className="t-label" style={{ flexShrink: 0, marginTop: 2 }}>{project.year}</span>
        </div>
      </motion.button>
    </motion.div>
  );
}

/* ── Page ─────────────────────────────────────────────────────── */
export default function ArchivePage() {
  const [filter,  setFilter]  = useState('All');
  const [lbItem,  setLbItem]  = useState(null);
  const [lbIdx,   setLbIdx]   = useState(0);

  const filtered = filter === 'All'
    ? projects
    : projects.filter(p => p.categories.includes(filter));

  const open = useCallback((project) => {
    const idx = filtered.findIndex(p => p.slug === project.slug);
    setLbIdx(idx); setLbItem(project);
  }, [filtered]);

  const close = () => setLbItem(null);
  const prev  = () => { const i = (lbIdx - 1 + filtered.length) % filtered.length; setLbIdx(i); setLbItem(filtered[i]); };
  const next  = () => { const i = (lbIdx + 1) % filtered.length;                    setLbIdx(i); setLbItem(filtered[i]); };

  return (
    <>
      <Nav />

      <main style={{ background: 'var(--off-white)', minHeight: '100vh' }}>

        {/* ── Header ──────────────────────────────────────────── */}
        <div style={{
          position: 'relative',
          overflow: 'hidden',
          paddingTop: 'calc(64px + clamp(56px, 8vw, 96px))',
          paddingBottom: 'clamp(56px, 8vw, 96px)',
          paddingLeft: 'var(--gutter)', paddingRight: 'var(--gutter)',
        }}>
          {/* Background photo */}
          <Image
            src="/archive.png"
            alt=""
            fill
            priority
            style={{ objectFit: 'cover', objectPosition: '50% 30%' }}
          />
          {/* Dark overlay */}
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, rgba(8,6,4,0.62) 0%, rgba(8,6,4,0.5) 60%, rgba(8,6,4,0.72) 100%)',
          }} />
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease }}
              className="t-label"
              style={{ color: 'rgba(248,247,244,0.3)', marginBottom: 24 }}
            >
              Visual Archive · {new Date().getFullYear()}
            </motion.p>

            <div style={{ overflow: 'hidden' }}>
              <motion.h1
                initial={{ y: '102%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1.0, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="t-display"
                style={{ fontSize: 'clamp(52px, 9vw, 128px)', color: 'var(--white)' }}
              >
                Archive
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              style={{
                fontFamily: 'var(--font-primary)', fontWeight: 300,
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                color: 'rgba(248,247,244,0.38)',
                maxWidth: 440, marginTop: 20,
                lineHeight: 1.65, letterSpacing: '-0.01em',
              }}
            >
              Campaigns, editorials, and creative collaborations —
              a curated visual library.
            </motion.p>
          </div>
        </div>

        {/* ── Sticky filter bar ────────────────────────────────── */}
        <div style={{
          position: 'sticky', top: 64, zIndex: 50,
          background: 'rgba(248,247,244,0.92)',
          backdropFilter: 'blur(20px) saturate(1.8)',
          borderBottom: '1px solid var(--border)',
          padding: '16px var(--gutter)',
        }}>
          <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
            <span className="t-label" style={{ marginRight: 8, color: 'var(--beige-dark)', flexShrink: 0 }}>
              Filter:
            </span>
            {allCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`pill ${filter === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Masonry gallery ──────────────────────────────────── */}
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', padding: 'clamp(32px, 5vw, 56px) var(--gutter) var(--section-v)' }}>

          <p className="t-caption" style={{ marginBottom: 28 }}>
            {filtered.length} {filtered.length === 1 ? 'project' : 'projects'}
          </p>

          <AnimatePresence mode="wait">
            <motion.div
              key={filter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="masonry"
            >
              {filtered.map((p, i) => (
                <ArchiveCard key={p.slug} project={p} index={i} onClick={open} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 0' }}>
              <p style={{ fontFamily: 'var(--font-primary)', fontWeight: 200, fontSize: 24, letterSpacing: '-0.025em', color: 'var(--mid-gray)' }}>
                No projects in this category.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lbItem && (
          <Lightbox item={lbItem} onClose={close} onPrev={prev} onNext={next} />
        )}
      </AnimatePresence>
    </>
  );
}
