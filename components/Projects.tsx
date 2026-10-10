'use client';

import Image from 'next/image';
import type { KeyboardEvent } from 'react';
import { useCallback, useEffect, useRef, useState } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import Card from '@/components/Card';
import { projects, type Project } from '@/data/projects';

const actionClass =
  'rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors duration-200';

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex h-full flex-col overflow-hidden !p-0">
      <div className="relative aspect-[16/10] bg-surface">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(min-width: 1024px) 28vw, (min-width: 768px) 40vw, 90vw"
          className="object-cover object-top"
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-ink">{project.title}</h3>
        <p className="mt-0.5 text-xs text-muted">{project.dates}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-body">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line bg-surface px-2.5 py-0.5 text-[11px] text-body"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="mt-5 flex gap-2">
          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={`${actionClass} border-ink bg-ink text-white hover:bg-body`}
            >
              Live Demo
            </a>
          ) : (
            <span
              role="link"
              aria-disabled="true"
              title="Not deployed yet"
              className={`${actionClass} cursor-not-allowed border-line bg-surface text-muted`}
            >
              Live Demo
            </span>
          )}
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`${actionClass} border-line bg-white text-ink hover:bg-surface`}
          >
            GitHub
          </a>
        </div>
      </div>
    </Card>
  );
}

function Arrow({
  direction,
  onClick,
  disabled,
}: {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
}) {
  const isPrev = direction === 'prev';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={isPrev ? 'Previous projects' : 'Next projects'}
      className={`absolute top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors duration-200 hover:bg-surface disabled:cursor-not-allowed disabled:opacity-40 md:flex ${
        isPrev ? 'left-0' : 'right-0'
      }`}
    >
      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d={isPrev ? 'M15 6l-6 6 6 6' : 'M9 6l6 6-6 6'} />
      </svg>
    </button>
  );
}

export default function Projects() {
  const autoplay = useRef(
    Autoplay({
      delay: 4500,
      playOnInit: false,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    })
  );
  const [viewportRef, api] = useEmblaCarousel(
    { align: 'start', containScroll: 'trimSnaps' },
    [autoplay.current]
  );

  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback(() => {
    if (!api) return;
    setSnaps(api.scrollSnapList());
    setSelected(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, [api]);

  useEffect(() => {
    if (!api) return;
    sync();
    api.on('select', sync).on('reInit', sync);

    // Autoplay only for visitors who have not asked for reduced motion
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduce) api.plugins().autoplay?.play();

    return () => {
      api.off('select', sync).off('reInit', sync);
    };
  }, [api, sync]);

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowLeft') api?.scrollPrev();
    if (e.key === 'ArrowRight') api?.scrollNext();
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Projects"
      onKeyDown={onKeyDown}
    >
      <h2 className="sr-only">Projects</h2>

      <div className="relative md:px-14">
        <Arrow
          direction="prev"
          onClick={() => api?.scrollPrev()}
          disabled={!canPrev}
        />

        <div className="overflow-hidden" ref={viewportRef}>
          <div className="-ml-4 flex">
            {projects.map((project, i) => (
              <div
                key={project.title}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${projects.length}`}
                className="min-w-0 shrink-0 grow-0 basis-full pl-4 md:basis-1/2 lg:basis-1/3"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        </div>

        <Arrow
          direction="next"
          onClick={() => api?.scrollNext()}
          disabled={!canNext}
        />
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {snaps.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => api?.scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === selected}
            className={`h-2 rounded-full transition-all duration-200 ${
              i === selected ? 'w-6 bg-ink' : 'w-2 bg-line hover:bg-muted'
            }`}
          />
        ))}
      </div>
    </div>
  );
}