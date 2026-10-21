// app/archive/page.js jest komponentem klienckim ('use client'), a takie komponenty
// nie mogą eksportować metadanych. Dlatego tytuł i opis strony archiwum siedzą tutaj —
// bez tego pliku archiwum dziedziczyło opis strony głównej, co Google widział
// jako dwie strony o identycznej treści.
//
// Tytuł musi być obiektem, a nie zwykłym tekstem: zwykły tekst skasowałby szablon
// odziedziczony z app/layout.js i strony pojedynczych projektów straciłyby nazwisko
// w tytule ("Fashion Film" zamiast "Fashion Film — Katarzyna Kołodziej").
import { SITE_NAME } from '../../lib/site';

export const metadata = {
  title: {
    // Bez nazwiska — dokleja je szablon z app/layout.js.
    default: 'Archiwum projektów',
    template: `%s — ${SITE_NAME}`,
  },
  description:
    'Wybrane projekty Katarzyny Kołodziej — marketing, content creation, social media, ' +
    'modeling, współprace z markami i fotografia.',
};

export default function ArchiveLayout({ children }) {
  return children;
}
