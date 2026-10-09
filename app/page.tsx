import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import SectionWrapper from '@/components/SectionWrapper';

const placeholders = [
  { id: 'about', title: 'About Me' },
  { id: 'skills', title: 'Skills' },
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

        {placeholders.map(({ id, title }) => (
          <SectionWrapper key={id} id={id} className="min-h-[60vh]">
            <h2 className="text-2xl font-semibold text-ink">{title}</h2>
            <p className="mt-2 text-muted">
              Placeholder. This section is built in a later phase.
            </p>
          </SectionWrapper>
        ))}
      </main>
    </>
  );
}