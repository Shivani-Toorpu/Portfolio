import { Button, ButtonLink } from '@/components/Button';
import Card from '@/components/Card';
import SectionWrapper from '@/components/SectionWrapper';

const sections = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About Me' },
  { id: 'skills', title: 'Skills' },
  { id: 'projects', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export default function Home() {
  return (
    <main className="py-3">
      {sections.map(({ id, title }) => (
        <SectionWrapper key={id} id={id} className="min-h-[60vh]">
          <h2 className="text-2xl font-semibold text-ink">{title}</h2>
          <p className="mt-2 text-muted">
            Placeholder. This section is built in a later phase.
          </p>

          {/* Temporary preview of the design system. Removed in Phase 3. */}
          {id === 'home' && (
            <div className="mt-8 space-y-6">
              <p>
                Testing the <span className="hl">gray highlight</span> effect.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <ButtonLink href="https://github.com" variant="secondary">
                  External link
                </ButtonLink>
              </div>
              <Card className="max-w-sm bg-surface">
                <h3 className="font-semibold text-ink">Sample card</h3>
                <p className="mt-1 text-sm text-muted">Muted gray text.</p>
              </Card>
            </div>
          )}
        </SectionWrapper>
      ))}
    </main>
  );
}