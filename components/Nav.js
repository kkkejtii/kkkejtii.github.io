'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { SITE_EMAIL } from '../lib/site';

const navLinks = [
  { label: 'About',   href: '/#about' },
  { label: 'Archive', href: '/archive' },
  { label: 'Contact', href: '/#contact' },
];

const ease = [0.25, 0.46, 0.45, 0.94];

export default function Nav({ inverted = false }) {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 48);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = (href) => {
    setMenuOpen(false);
    if (!href.includes('#')) { window.location.href = href; return; }
    const id = href.split('#')[1];
    if (pathname !== '/') { window.location.href = href; return; }
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 50);
  };

  const isInv = inverted && !scrolled;

  const navBg = scrolled
    ? 'rgba(248,247,244,0.88)'
    : 'transparent';

  return (
    <>
      {/* Scroll progress — hairline */}
      <motion.div
        className="scroll-bar"
        style={{ scaleX: scrollYProgress }}
      />

      <motion.header
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
          height: 64,
          background: navBg,
          backdropFilter: scrolled ? 'blur(20px) saturate(1.8)' : 'none',
          borderBottom: scrolled
            ? '1px solid rgba(17,17,17,0.08)'
            : '1px solid transparent',
          transition: `background ${0.4}s ease, border-color ${0.4}s ease, backdrop-filter ${0.4}s ease`,
        }}
      >
        <div style={{
          maxWidth: 'var(--max-w)', margin: '0 auto',
          padding: '0 var(--gutter)',
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
        }}>

          {/* ── Left: wordmark ── */}
          <Link
            href="/"
            style={{
              fontFamily: 'var(--font-primary)',
              fontWeight: 300,
              fontSize: 15,
              letterSpacing: '-0.01em',
              color: isInv ? 'rgba(248,247,244,0.85)' : 'var(--warm-black)',
              transition: 'color 0.4s ease',
              textDecoration: 'none',
            }}
          >
            Katarzyna Kołodziej
          </Link>

          {/* ── Center: nav links (desktop) ── */}
          <nav style={{ gap: 36 }} className="hidden md:flex">
            {navLinks.map(link => (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className={`nav-item ${isInv ? 'nav-item-inv' : ''}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* ── Right: CTA + hamburger ── */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 16 }}>
            <button
              onClick={() => go('/#contact')}
              className="btn-primary hidden md:inline-flex"
              style={{ padding: '9px 18px', fontSize: 12, letterSpacing: '0.03em' }}
            >
              Work With Me
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(v => !v)}
              aria-label="Menu"
              className="flex md:hidden"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, flexDirection: 'column', gap: 5 }}
            >
              {[0, 1, 2].map(i => (
                <motion.span
                  key={i}
                  animate={
                    menuOpen
                      ? i === 0 ? { rotate: 45, y: 7 }
                      : i === 1 ? { opacity: 0, scaleX: 0 }
                      : { rotate: -45, y: -7 }
                      : { rotate: 0, y: 0, opacity: 1, scaleX: 1 }
                  }
                  transition={{ duration: 0.28, ease }}
                  style={{
                    display: 'block',
                    width: 22, height: 1.5,
                    borderRadius: 1,
                    background: isInv ? 'rgba(248,247,244,0.8)' : 'var(--warm-black)',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ clipPath: 'inset(0 0 100% 0)' }}
            animate={{ clipPath: 'inset(0 0 0% 0)' }}
            exit={{ clipPath: 'inset(0 0 100% 0)' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: 'fixed', inset: 0, zIndex: 190,
              background: 'var(--warm-black)',
              display: 'flex', flexDirection: 'column',
              alignItems: 'flex-start', justifyContent: 'center',
              padding: 'var(--gutter)',
              gap: 0,
            }}
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: i * 0.07 + 0.2, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => go(link.href)}
                style={{
                  background: 'none', border: 'none', cursor: 'none',
                  fontFamily: 'var(--font-primary)', fontWeight: 200,
                  fontSize: 'clamp(40px, 12vw, 72px)',
                  letterSpacing: '-0.03em', color: 'var(--off-white)',
                  lineHeight: 1.15, padding: '6px 0',
                  opacity: 0.9,
                }}
              >
                {link.label}
              </motion.button>
            ))}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.4 }}
              style={{ position: 'absolute', bottom: 40, left: 'var(--gutter)' }}
            >
              <p className="t-label" style={{ color: 'rgba(246,243,238,0.25)' }}>
                {SITE_EMAIL}
              </p>
            </motion.div>

            {/* Decorative rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: 'absolute', top: 80, left: 'var(--gutter)', right: 'var(--gutter)',
                height: 1, background: 'rgba(246,243,238,0.08)', transformOrigin: 'left',
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
