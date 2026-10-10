import { Fragment } from 'react';
import Image from 'next/image';
import { ButtonLink } from '@/components/Button';
import Marquee from '@/components/Marquee';
import { hero } from '@/data/hero';

function Highlighted({ text }: { text: string }) {
  const parts = text.split(/(\[\[.*?\]\])/g);
  return (
    <>
      {parts.map((part, i) => (
        <Fragment key={i}>
          {part.startsWith('[[') ? (
            <span className="hl">{part.slice(2, -2)}</span>
          ) : (
            part
          )}
        </Fragment>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <div>
      <Marquee text={hero.marquee} />

      <div className="mt-8 grid items-center gap-10 md:grid-cols-[1.2fr_1fr]">
        <div>
          <h1 className="text-ink text-3xl font-bold tracking-tight sm:text-4xl">
            Hello! I&apos;m {hero.name}, a <span className="hl">developer</span>{' '}
            based in {hero.location}.
          </h1>

          <div className="text-body mt-6 space-y-4 leading-relaxed">
            {hero.bio.map((paragraph) => (
              <p key={paragraph}>
                <Highlighted text={paragraph} />
              </p>
            ))}
            <p>
              {hero.closing}{' '}
              <a href="#contact" className="hl font-medium underline">
                Hire me?
              </a>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href={hero.links.linkedin}>View LinkedIn</ButtonLink>
            <ButtonLink href={hero.links.github} variant="secondary">
              View GitHub
            </ButtonLink>
            <ButtonLink
              href={hero.links.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </ButtonLink>
          </div>
        </div>

        <div className="rounded-card bg-surface relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden md:max-w-none">
          <Image
            src={hero.photo}
            alt={hero.photoAlt}
            fill
            priority
            sizes="(min-width: 768px) 40vw, 90vw"
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
