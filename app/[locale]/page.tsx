import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Projects from '@/components/Projects';
import WhyMe from '@/components/WhyMe';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { routing } from '@/i18n/routing';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Projects />
      <WhyMe />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
