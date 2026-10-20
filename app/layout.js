import { Inter, Cormorant_Garamond, Pinyon_Script, Montserrat } from 'next/font/google';
import './globals.css';

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
  title: 'Katarzyna Kołodziej',
  description: 'Marketing Strategist · Content Creator · Creative Direction · Warszawa',
  keywords: 'marketing, content creation, personal branding, modeling, Warszawa, Poland',
  openGraph: {
    title: 'Katarzyna Kołodziej',
    description: 'Marketing Strategist · Content Creator · Creative Direction',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl" className={`${inter.variable} ${cormorant.variable} ${pinyonScript.variable} ${montserrat.variable}`}>
      <body>{children}</body>
    </html>
  );
}
