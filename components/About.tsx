import Image from 'next/image';
import type { ReactNode } from 'react';
import Card from '@/components/Card';
import { about } from '@/data/about';

type LinkItem = { label: string; href: string };

function CardTitle({ children }: { children: ReactNode }) {
  return (
    <h3 className="text-ink text-sm font-semibold tracking-wide uppercase">
      {children}
    </h3>
  );
}

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="bg-surface relative h-11 w-11 shrink-0 overflow-hidden rounded-lg">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="44px"
        className="object-contain p-1"
      />
    </div>
  );
}

function LinkButtons({ links }: { links: readonly LinkItem[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {links.map(({ label, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="border-line text-ink hover:bg-surface focus-visible:outline-ink rounded-lg border bg-white px-3 py-1.5 text-xs font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          {label}
        </a>
      ))}
    </div>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="text-body mt-3 space-y-1.5 text-sm">
      {items.map((item) => (
        <li key={item} className="flex gap-2">
          <span aria-hidden="true" className="text-muted">
            –
          </span>
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  const { experience, education, publication, passtime, quote } = about;

  return (
    <div>
      <h2 className="sr-only">About Me</h2>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Column 1: Experience + Publication */}
        <div className="flex flex-col gap-4">
          <Card>
            <CardTitle>Experience</CardTitle>
            <div className="mt-4 flex gap-3">
              <Logo src={experience.logo} alt={`${experience.company} logo`} />
              <div className="text-sm">
                <p className="text-ink font-semibold">{experience.role}</p>
                <p className="text-body">
                  {experience.company} · {experience.type}
                </p>
                <p className="text-muted">{experience.dates}</p>
                <p className="text-muted">{experience.location}</p>
              </div>
            </div>
            <LinkButtons links={experience.links} />
          </Card>

          <Card className="flex-1">
            <CardTitle>Publication</CardTitle>
            <p className="text-ink mt-4 text-sm font-semibold">
              {publication.title}
            </p>
            <p className="text-muted mt-2 text-xs">{publication.venue}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {publication.badges.map((badge) => (
                <span
                  key={badge}
                  className="bg-highlight text-ink rounded-full px-2.5 py-0.5 text-[11px] font-medium"
                >
                  {badge}
                </span>
              ))}
            </div>
            <LinkButtons links={publication.links} />
          </Card>
        </div>

        {/* Column 2: Education + extra cards */}
        <div className="flex flex-col gap-4">
          <Card>
            <CardTitle>Education</CardTitle>
            <div className="mt-4 flex gap-3">
              <Logo src={education.logo} alt={`${education.college} logo`} />
              <div className="text-sm">
                <p className="text-ink font-semibold">{education.college}</p>
                <p className="text-body">{education.degree}</p>
                <p className="text-muted">{education.dates}</p>
              </div>
            </div>
            <LinkButtons links={education.links} />
          </Card>

          <div className="grid flex-1 grid-cols-2 gap-4">
            <div className="flex flex-col gap-4">
              <Card className="flex-1 !p-4">
                <CardTitle>Languages</CardTitle>
                <BulletList items={about.languages} />
              </Card>
              <Card className="flex-1 !p-4">
                <CardTitle>Location</CardTitle>
                <p className="text-body mt-3 text-sm">{about.location}</p>
              </Card>
            </div>
            <Card className="!p-4">
              <CardTitle>Currently learning</CardTitle>
              <BulletList items={about.learning} />
            </Card>
          </div>
        </div>

        {/* Column 3: Pass-time + Certifications + Quote */}
        <div className="flex flex-col gap-4">
          <Card>
            <CardTitle>Pass-time</CardTitle>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {passtime.map(({ kind, title, src }) => (
                <figure key={title}>
                  <div className="bg-surface relative aspect-[2/3] overflow-hidden rounded-lg">
                    <Image
                      src={src}
                      alt={`${kind}: ${title}`}
                      title={title}
                      fill
                      sizes="(min-width: 1024px) 10vw, 30vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-muted mt-1.5 text-[11px] leading-tight">
                    {title}
                  </figcaption>
                </figure>
              ))}
            </div>
          </Card>

          <Card className="flex-1">
            <CardTitle>Certifications</CardTitle>
            <BulletList items={about.certifications} />
          </Card>

          <Card className="bg-surface">
            <blockquote className="text-body text-sm italic">
              &ldquo;{quote.text}&rdquo;
              <footer className="text-muted mt-2 text-xs not-italic">
                — {quote.author}
              </footer>
            </blockquote>
          </Card>
        </div>
      </div>
    </div>
  );
}
