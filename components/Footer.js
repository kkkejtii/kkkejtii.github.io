'use client';

import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{
      background: 'var(--warm-black)',
      padding: '28px 0',
    }}>
      <div style={{
        maxWidth: 'var(--max-w)', margin: '0 auto',
        padding: '0 var(--gutter)',
        display: 'grid',
        gridTemplateColumns: '1fr auto 1fr',
        alignItems: 'center',
        gap: 16,
      }} className="footer-grid">
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-primary)', fontWeight: 300,
            fontSize: 14, letterSpacing: '-0.01em',
            color: 'rgba(248,247,244,0.5)',
            textDecoration: 'none',
            transition: 'color 0.25s ease',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--off-white)'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.5)'}
        >
          Katarzyna Kołodziej
        </Link>

        <p style={{
          fontFamily: 'var(--font-primary)', fontWeight: 300,
          fontSize: 12, letterSpacing: '0.04em',
          color: 'rgba(248,247,244,0.2)',
          textAlign: 'center',
        }}>
          © {year}
        </p>

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 24 }}>
          {[
            { l: 'Archive', h: '/archive' },
            { l: 'Instagram', h: 'https://www.instagram.com/kkkejtii/' },
            { l: 'LinkedIn', h: 'https://www.linkedin.com/in/katarzyna-kolodziej/' },
          ].map(({ l, h }) => (
            <a
              key={l}
              href={h}
              target={h.startsWith('http') ? '_blank' : undefined}
              rel={h.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                fontFamily: 'var(--font-primary)', fontWeight: 300,
                fontSize: 12, letterSpacing: '0.04em',
                color: 'rgba(248,247,244,0.28)',
                textDecoration: 'none',
                transition: 'color 0.25s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'rgba(248,247,244,0.65)'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(248,247,244,0.28)'}
            >
              {l}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid > *:nth-child(2) { display: none; }
          .footer-grid > *:nth-child(3) { display: none; }
        }
      `}</style>
    </footer>
  );
}
