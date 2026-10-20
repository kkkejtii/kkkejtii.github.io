'use client';

import AnimatedSection from '../../components/AnimatedSection';
import Link from 'next/link';

const projects = [
  {
    num: '01',
    title: 'Kampania Sezonowa — Retail',
    category: 'Visual Merchandising',
    desc: 'Kompleksowa kampania wizualna dla punktu sprzedaży detalicznej. Projekt obejmował planowanie layoutu, dobór ekspozytorów i implementację materiałów POS.',
    tags: ['Retail', 'POS', 'Strategia'],
    gradient: 'linear-gradient(135deg, #e8dfc8 0%, #c8a96e 100%)',
  },
  {
    num: '02',
    title: 'Digital Campaign — Social Media',
    category: 'Digital Marketing',
    desc: 'Strategia i realizacja kampanii w mediach społecznościowych. Analiza grupy docelowej, tworzenie treści i optymalizacja wyników w oparciu o dane.',
    tags: ['Instagram', 'Content', 'Analytics'],
    gradient: 'linear-gradient(135deg, #d4c5a9 0%, #b8976a 100%)',
  },
  {
    num: '03',
    title: 'Brand Consistency Project',
    category: 'Brand Strategy',
    desc: 'Audyt i wdrożenie spójnego wizerunku marki we wszystkich kanałach komunikacji — od materiałów drukowanych po kanały online.',
    tags: ['Branding', 'Strategy', 'Omnichannel'],
    gradient: 'linear-gradient(135deg, #ede3d0 0%, #c9a870 100%)',
  },
  {
    num: '04',
    title: 'Content Marketing Strategy',
    category: 'Content Creation',
    desc: 'Opracowanie strategii contentowej i przygotowanie materiałów na bloga, newsletter i social media dla marki z branży lifestyle.',
    tags: ['Content', 'SEO', 'Copywriting'],
    gradient: 'linear-gradient(135deg, #e0d4bc 0%, #c8a55a 100%)',
  },
];

export default function MojeProjekty() {
  return (
    <>
      {/* PAGE HEADER */}
      <section style={{
        padding: 'clamp(7rem, 15vw, 12rem) 2rem clamp(4rem, 8vw, 6rem)',
        background: 'var(--cream)',
        borderBottom: '1px solid var(--light-gray)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <AnimatedSection>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.25em',
              textTransform: 'uppercase',
              color: 'var(--accent)',
              marginBottom: '1.5rem',
            }}>Portfolio</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              marginBottom: '3rem',
            }}>
              Moje<br />
              <em>projekty</em>
            </h1>
          </AnimatedSection>

          {/* Quote */}
          <AnimatedSection delay={0.2}>
            <div style={{
              maxWidth: '680px',
              borderLeft: '2px solid var(--accent)',
              paddingLeft: '2rem',
              marginBottom: '2rem',
            }}>
              <blockquote style={{
                fontFamily: 'var(--font-cormorant)',
                fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
                fontStyle: 'italic',
                color: 'var(--black)',
                lineHeight: 1.45,
                margin: '0 0 1rem 0',
              }}>
                "To live is the rarest thing in the world. Most people exist, that is all."
              </blockquote>
              <p style={{
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.75rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'var(--gray)',
              }}>— Oscar Wilde</p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.25}>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '1rem',
              color: 'var(--gray)',
              lineHeight: 1.75,
              maxWidth: '580px',
              marginBottom: '1rem',
            }}>
              Właśnie dlatego tworzę kampanie, które żyją — angażują, inspirują i przynoszą wymierne rezultaty.
            </p>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.95rem',
              color: 'var(--gray)',
              lineHeight: 1.75,
              maxWidth: '580px',
            }}>
              Od visual merchandisingu po digital marketing — każdy projekt to połączenie strategii, kreacji i danych.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* PROJECTS GRID */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2rem',
        background: 'var(--cream)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 520px), 1fr))',
            gap: '2px',
          }}>
            {projects.map((project, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <ProjectCard project={project} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: 'clamp(4rem, 8vw, 7rem) 2rem',
        background: 'var(--black)',
        textAlign: 'center',
      }}>
        <AnimatedSection>
          <p style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 300,
            color: 'var(--cream)',
            marginBottom: '2rem',
            fontStyle: 'italic',
          }}>
            Masz projekt, który chcesz zrealizować?
          </p>
          <a
            href="mailto:katarzyna.teresa.kolodziej@gmail.com"
            style={{
              display: 'inline-block',
              background: 'var(--accent)',
              color: 'var(--black)',
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.8rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              padding: '1rem 2.5rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.85'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
          >
            Napisz do mnie
          </a>
        </AnimatedSection>
      </section>
    </>
  );
}

function ProjectCard({ project }) {
  return (
    <div
      style={{
        background: 'white',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'transform 0.3s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {/* Visual placeholder */}
      <div style={{
        width: '100%',
        aspectRatio: '16/9',
        background: project.gradient,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '5rem',
          fontWeight: 300,
          color: 'rgba(255,255,255,0.3)',
          lineHeight: 1,
        }}>{project.num}</span>
      </div>

      {/* Content */}
      <div style={{ padding: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem', flexWrap: 'wrap', gap: '0.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-dm-sans)',
            fontSize: '0.7rem',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            color: 'var(--accent)',
          }}>{project.category}</span>
          <span style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: '0.85rem',
            color: 'var(--gray)',
          }}>{project.num}</span>
        </div>

        <h3 style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '1.6rem',
          fontWeight: 500,
          lineHeight: 1.2,
          marginBottom: '1rem',
          color: 'var(--black)',
        }}>{project.title}</h3>

        <p style={{
          fontFamily: 'var(--font-dm-sans)',
          fontSize: '0.88rem',
          color: 'var(--gray)',
          lineHeight: 1.7,
          marginBottom: '1.5rem',
        }}>{project.desc}</p>

        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontFamily: 'var(--font-dm-sans)',
              fontSize: '0.7rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              padding: '0.3rem 0.75rem',
              border: '1px solid var(--light-gray)',
              color: 'var(--gray)',
            }}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
