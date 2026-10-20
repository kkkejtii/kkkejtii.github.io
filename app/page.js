import Nav from '../components/Nav';
import Hero from '../components/Hero';
import About from '../components/About';
import SelectedWork from '../components/SelectedWork';
import Services from '../components/Services';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';
import Cursor from '../components/Cursor';

export default function HomePage() {
  return (
    <>
      <Cursor />
      <Nav inverted={true} />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Services />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
