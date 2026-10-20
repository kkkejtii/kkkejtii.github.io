'use client';

import AnimatedSection from '../../components/AnimatedSection';
import Link from 'next/link';

const services = [
  'Tworzenie i realizacja kompleksowych kampanii marketingowych, które łączą kreatywność z analizą danych',
  'Content creation — przygotowywanie angażujących treści na strony internetowe, blogi, social media i newslettery',
  'Zarządzanie i optymalizacja komunikacji marki w kanałach online i offline',
  'Visual merchandising i kreowanie spójnego wizerunku marki w punktach sprzedaży',
  'Modelowanie i styling — praca z wizerunkiem, wsparcie przy sesjach zdjęciowych i kampaniach reklamowych',
  'Analiza efektywności kampanii i rekomendacje poprawy na podstawie danych i insightów rynkowych',
];

export default function OMnie() {
  return (
    <>
      {/* PAGE HEADER */}
      <section style={{
        padding: 'clamp(7rem, 15vw, 12rem) 2rem clamp(4rem, 8vw, 6rem)',
        background: 'var(--cream)',
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
            }}>O mnie</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <h1 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              lineHeight: 1.0,
              marginBottom: '3rem',
            }}>
              Cześć,<br />
              <em>jestem Kasia.</em>
            </h1>
          </AnimatedSection>
        </div>
      </section>

      {/* INTRO */}
      <section style={{
        padding: '0 2rem clamp(5rem, 10vw, 8rem)',
        background: 'var(--cream)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '5rem',
            alignItems: 'start',
          }}>
            {/* Photo placeholder */}
            <AnimatedSection direction="right">
              <div style={{ position: 'sticky', top: '100px' }}>
                <div style={{
                  width: '100%',
                  maxWidth: '420px',
                  aspectRatio: '3/4',
                  background: 'linear-gradient(160deg, #f0e8d5 0%, #d4bc8a 40%, #c8a96e 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Decorative */}
                  <div style={{
                    position: 'absolute',
                    top: '2rem',
                    right: '-1rem',
                    width: '80px',
                    height: '80px',
                    border: '1px solid rgba(255,255,255,0.4)',
                    borderRadius: '50%',
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '3rem',
                    left: '2rem',
                    right: '2rem',
                  }}>
                    <div style={{
                      background: 'rgba(250,249,246,0.9)',
                      padding: '1.25rem',
                      backdropFilter: 'blur(8px)',
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '0.75rem',
                        letterSpacing: '0.15em',
                        textTransform: 'uppercase',
                        color: 'var(--accent)',
                        marginBottom: '0.4rem',
                      }}>Katarzyna Kołodziej</p>
                      <p style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.8rem',
                        color: 'var(--gray)',
                      }}>Marketing & Kreacja — Warszawa</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1px',
                  marginTop: '1px',
                  background: 'var(--light-gray)',
                }}>
                  {[
                    { num: 'Digital', label: 'Marketing' },
                    { num: 'Visual', label: 'Merchandising' },
                    { num: 'Data', label: 'Analytics' },
                    { num: 'Warsaw', label: 'Based' },
                  ].map((stat, i) => (
                    <div key={i} style={{
                      background: 'var(--cream)',
                      padding: '1.25rem',
                    }}>
                      <p style={{
                        fontFamily: 'var(--font-cormorant)',
                        fontSize: '1.1rem',
                        fontWeight: 600,
                        color: 'var(--black)',
                      }}>{stat.num}</p>
                      <p style={{
                        fontFamily: 'var(--font-dm-sans)',
                        fontSize: '0.7rem',
                        color: 'var(--gray)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                      }}>{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Text content */}
            <AnimatedSection direction="left" delay={0.15}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.05rem',
                  color: 'var(--gray)',
                  lineHeight: 1.8,
                  marginBottom: '1.5rem',
                }}>
                  Witam Cię na mojej stronie. To miejsce, gdzie dzielę się moją pasją do marketingu,
                  łącząc kreatywność z analizą danych, by tworzyć skuteczne kampanie i wartościowe projekty.
                </p>
                <p style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1.05rem',
                  color: 'var(--gray)',
                  lineHeight: 1.8,
                  marginBottom: '3rem',
                }}>
                  Moja historia zaczęła się w świecie sprzedaży detalicznej, gdzie nauczyłam się, jak ważna
                  jest spójność marki i strategia oparta na faktach. Teraz skupiam się na łączeniu tego,
                  co najlepsze – świata kreatywnego i analitycznego – aby pomagać markom rozwijać się
                  w nowoczesnym, cyfrowym środowisku.
                </p>

                {/* Quote */}
                <div style={{
                  borderLeft: '2px solid var(--accent)',
                  paddingLeft: '2rem',
                  marginBottom: '3rem',
                }}>
                  <blockquote style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                    fontStyle: 'italic',
                    color: 'var(--black)',
                    lineHeight: 1.4,
                    margin: '0 0 1rem 0',
                  }}>
                    "Marketing nie dotyczy już rzeczy, które robisz, ale historii, które opowiadasz."
                  </blockquote>
                  <p style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: '0.75rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'var(--gray)',
                  }}>— Seth Godin</p>
                </div>

                <p style={{
                  fontFamily: 'var(--font-dm-sans)',
                  fontSize: '1rem',
                  color: 'var(--black)',
                  lineHeight: 1.75,
                  fontWeight: 400,
                }}>
                  Jeśli szukasz kogoś, kto nie tylko stworzy ładną kampanię, ale też udowodni, że działa
                  — to świetnie trafiłeś!
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
        background: 'var(--black)',
        color: 'var(--cream)',
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
            }}>Usługi</p>
            <h2 style={{
              fontFamily: 'var(--font-cormorant)',
              fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              marginBottom: '4rem',
            }}>
              Mogę Ci pomóc w:
            </h2>
          </AnimatedSection>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {services.map((service, i) => (
              <AnimatedSection key={i} delay={i * 0.07}>
                <div style={{
                  display: 'flex',
                  gap: '2rem',
                  alignItems: 'flex-start',
                  padding: '1.75rem 0',
                  borderBottom: '1px solid #1a1a1a',
                  transition: 'background 0.2s',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.paddingLeft = '0.5rem'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.paddingLeft = '0'; }}
                >
                  <span style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1rem',
                    color: 'var(--accent)',
                    flexShrink: 0,
                    width: '2rem',
                    paddingTop: '3px',
                  }}>0{i + 1}</span>
                  <p style={{
                    fontFamily: 'var(--font-dm-sans)',
                    fontSize: 'clamp(0.9rem, 1.5vw, 1.05rem)',
                    color: '#bbb',
                    lineHeight: 1.65,
                    transition: 'color 0.2s',
                  }}>{service}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / CONTACT STRIP */}
      <section style={{
        padding: 'clamp(5rem, 10vw, 8rem) 2rem',
        background: 'var(--cream)',
        textAlign: 'center',
      }}>
        <AnimatedSection>
          <h2 style={{
            fontFamily: 'var(--font-cormorant)',
            fontSize: 'clamp(2rem, 5vw, 4rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            marginBottom: '2.5rem',
          }}>
            Porozmawiajmy o Twoim projekcie.
          </h2>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a
              href="mailto:katarzyna.teresa.kolodziej@gmail.com"
              style={{
                display: 'inline-block',
                background: 'var(--black)',
                color: 'var(--cream)',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '1rem 2.5rem',
                textDecoration: 'none',
                transition: 'background 0.3s',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--accent)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--black)'}
            >
              Napisz do mnie
            </a>
            <Link
              href="/moje-projekty"
              style={{
                display: 'inline-block',
                color: 'var(--black)',
                fontFamily: 'var(--font-dm-sans)',
                fontSize: '0.8rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                padding: '1rem 0',
                textDecoration: 'none',
                borderBottom: '1px solid var(--black)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--black)'; e.currentTarget.style.borderColor = 'var(--black)'; }}
            >
              Zobacz projekty →
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
