import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import SectionWrapper from '@/components/SectionWrapper';
import Skills from '@/components/Skills';

const placeholders = [
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="py-3">
        <SectionWrapper id="home">
          <Hero />
        </SectionWrapper>

        <SectionWrapper id="about">
          <About />
        </SectionWrapper>

        <SectionWrapper id="skills">
          <Skills />
        </SectionWrapper>

        {placeholders.map(({ id, title }) => (
          <SectionWrapper key={id} id={id} className="min-h-[60vh]">
            <h2 className="text-ink text-2xl font-semibold">{title}</h2>
            <p className="text-muted mt-2">
              Placeholder. This section is built in a later phase.
            </p>
          </SectionWrapper>
        ))}
      </main>
    </>
  );
}
