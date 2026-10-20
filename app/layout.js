import { Inter, Cormorant_Garamond, Pinyon_Script, Montserrat } from 'next/font/google';
import './globals.css';
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from '../lib/site';

// Primary: Inter — Apple-quality geometric sans
const inter = Inter({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500'],
  variable: '--font-inter',
  display: 'swap',
});

// Script: Pinyon Script — "Katarzyna" w hero
const pinyonScript = Pinyon_Script({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-script',
  display: 'swap',
});

// Sans: Montserrat — "Kołodziej" w hero
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['200', '300', '400'],
  variable: '--font-montserrat',
  display: 'swap',
});

// Accent: Cormorant Garamond — used ONLY for pull quotes and special editorial moments
const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Marketing Strategist & Content Creator`,
    template: `%s — ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: ['marketing', 'content creation', 'personal branding', 'creative direction', 'Warszawa'],
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: '/' },
  openGraph: {
    title: `${SITE_NAME} — Marketing Strategist & Content Creator`,
    description: SITE_DESCRIPTION,
    url: '/',
    siteName: SITE_NAME,
    locale: 'pl_PL',
    type: 'website',
    images: [{ url: '/og.jpg', width: 1200, height: 630, alt: SITE_NAME }],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} — Marketing Strategist & Content Creator`,
    description: SITE_DESCRIPTION,
    images: ['/og.jpg'],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${inter.variable} ${cormorant.variable} ${pinyonScript.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
