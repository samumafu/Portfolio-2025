import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Experience />
      <Skills />
      <Contact />
    </>
  );
}