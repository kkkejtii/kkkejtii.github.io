'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

const ease    = [0.16, 1, 0.3, 1];   // strong ease-out for entrances
const easeUI  = [0.25, 0.46, 0.45, 0.94]; // subtle for hover

function Fade({ children, delay = 0, y = 20 }) {
  const ref = useRef(null);
  const v   = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y }}
      animate={v ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease }}
    >{children}</motion.div>
  );
}

const projects = [
  {
    slug:     'summer-campaign',
    no:       '001',
    category: 'Social Media · Marketing',
    title:    'Summer Campaign',
    year:     '2024',
    result:   'Organic reach ×3.4',
    size:     'large',   // 2 rows
    bg:       'linear-gradient(145deg, #C8B89A 0%, #9A7D60 45%, #3D2E20 100%)',
  },
  {
    slug:     'editorial-series',
    no:       '002',
    category: 'Content Creation · Modeling',
    title:    'Editorial Series',
    year:     '2023',
    result:   '+220% growth',
    size:     'normal',
    bg:       'linear-gradient(155deg, #D4C8B8 0%, #A89278 50%, #5A4434 100%)',
  },
  {
    slug:     'brand-identity-project',
    no:       '003',
    category: 'Brand Collaborations',
    title:    'Brand Identity',
    year:     '2024',
    result:   'Visual system',
    size:     'normal',
    bg:       'linear-gradient(160deg, #E0D8CC 0%, #B8A890 50%, #6A5843 100%)',
  },
  {
    slug:     'digital-strategy',
    no:       '004',
    category: 'Marketing · Analytics',
    title:    'Digital Strategy',
    year:     '2024',
    result:   '+312% traffic',
    size:     'wide',   // 2 cols
    bg:       'linear-gradient(140deg, #BEC4B0 0%, #8E9A80 50%, #4A5238 100%)',
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const v   = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={v ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      style={{
        gridColumn: project.size === 'wide' ? 'span 2' : 'span 1',
        gridRow:    project.size === 'large' ? 'span 2' : 'span 1',
      }}
      className="work-card-col"
    >
      <Link href={`/archive/${project.slug}`} style={{ display: 'block', textDecoration: 'none' }}>
        <motion.div
          className="card-premium work-card"
          style={{ cursor: 'none' }}
        >
          {/* Image area */}
          <div style={{
            position: 'relative',
            aspectRatio: project.size === 'large' ? '3/4'
                       : project.size === 'wide'  ? '21/9'
                       : '4/3',
            overflow: 'hidden',
            background: project.bg,
            borderRadius: 'var(--r-lg) var(--r-lg) 0 0',
          }}
            className="grain relative work-card-img-wrap"
          >
            {/* Parallax wash — scales with image */}
            <motion.div
              style={{
                position: 'absolute', inset: '-10%',
                background: `radial-gradient(ellipse at 40% 25%, rgba(255,255,255,0.07) 0%, transparent 55%)`,
                y: imgY,
              }}
              className="work-card-img"
            />

            {/* Hover: reveal overlay — clip-path wipe from bottom */}
            <div className="work-card-overlay" style={{
              position: 'absolute', inset: 0,
              background: 'rgba(13,13,13,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              zIndex: 2,
            }}>
              <span
                className="t-label work-card-label"
                style={{ color: 'var(--white)', letterSpacing: '0.2em', borderBottom: '1px solid rgba(255,255,255,0.4)', paddingBottom: 6 }}
              >
                View Project
              </span>
            </div>

            {/* No. tag */}
            <span
              className="t-label"
              style={{
                position: 'absolute', top: 20, left: 20, zIndex: 3,
                color: 'rgba(255,255,255,0.4)',
              }}
            >
              {project.no}
            </span>
          </div>

          {/* Caption */}
          <div style={{
            padding: '20px 24px 24px',
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            gap: 12,
          }}>
            <div>
              <p className="t-label" style={{ color: 'var(--gold)', marginBottom: 6 }}>
                {project.category}
              </p>
              <p style={{
                fontFamily: 'var(--font-primary)',
                fontWeight: 300,
                fontSize: 'clamp(16px, 2vw, 20px)',
                letterSpacing: '-0.02em',
                color: 'var(--warm-black)',
                lineHeight: 1.2,
              }}>
                {project.title}
              </p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p className="t-caption" style={{ marginBottom: 2 }}>{project.result}</p>
              <p className="t-label" style={{ color: 'var(--beige-dark)' }}>{project.year}</p>
            </div>
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
}

export default function SelectedWork() {
  return (
    <section id="work" style={{ background: 'var(--white)', paddingTop: 'var(--section-v)', paddingBottom: 'var(--section-v)' }}>
      <div className="container">

        {/* Header */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          marginBottom: 'clamp(40px, 6vw, 64px)',
          flexWrap: 'wrap', gap: 24,
        }}>
          <div>
            <Fade>
              <span className="t-label" style={{ marginBottom: 16, display: 'block' }}>
                Selected Work
              </span>
            </Fade>
            <Fade delay={0.1}>
              <h2 className="t-heading" style={{ fontSize: 'clamp(28px, 4vw, 52px)' }}>
                Campaigns &<br />Creative Projects
              </h2>
            </Fade>
          </div>
          <Fade delay={0.18}>
            <Link href="/archive" className="btn-secondary">
              Full Archive →
            </Link>
          </Fade>
        </div>

        {/* Project grid — asymmetric */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: 16,
          alignItems: 'start',
        }} className="work-grid">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} />
          ))}
        </div>

        {/* Archive teaser */}
        <Fade delay={0.2}>
          <div style={{
            marginTop: 'clamp(48px, 7vw, 80px)',
            paddingTop: 32,
            borderTop: '1px solid var(--border)',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: 16,
          }}>
            <p style={{
              fontFamily: 'var(--font-primary)', fontWeight: 300,
              fontSize: 15, color: 'var(--mid-gray)', letterSpacing: '-0.01em',
            }}>
              8 projects in the archive
            </p>
            <Link href="/archive" className="link-underline">
              View all work
            </Link>
          </div>
        </Fade>
      </div>

      <style>{`
        @media (max-width: 720px) {
          .work-grid { grid-template-columns: 1fr !important; }
          .work-card-col { grid-column: span 1 !important; grid-row: span 1 !important; }
        }

        /* Card: image zoom, overlay wipe */
        .work-card { transition: box-shadow 0.4s var(--ease-apple); }
        .work-card:hover { box-shadow: 0 12px 48px rgba(13,13,13,0.1); }

        .work-card-img-wrap .work-card-img {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
          transform: scale(1);
        }
        .work-card:hover .work-card-img { transform: scale(1.06); }

        /* Overlay: hidden by default, clip-path wipe on hover */
        .work-card-overlay {
          clip-path: inset(100% 0 0 0);
          transition: clip-path 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .work-card:hover .work-card-overlay {
          clip-path: inset(0% 0 0 0);
        }

        /* Label: slight rise on appear */
        .work-card-label {
          transform: translateY(6px);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1) 0.08s,
                      opacity 0.4s ease 0.08s;
        }
        .work-card:hover .work-card-label {
          transform: translateY(0);
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
