'use client';

import { useEffect, useState } from 'react';
import { navLinks } from '@/data/navLinks';

export default function Navbar() {
  const [active, setActive] = useState<string>('home');
  const [open, setOpen] = useState(false);

  // Scroll-spy: highlight the link of the section near the top of the viewport
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((section) => observer.observe(section));

    // The last section may be too short to cross the trigger line,
    // so force "contact" when the page is scrolled to the bottom.
    const onScroll = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 4;
      if (atBottom) setActive(navLinks[navLinks.length - 1].id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  // Close the mobile menu with Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const linkClass = (id: string) =>
    `block rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wide transition-colors duration-200 ${
      active === id
        ? 'bg-highlight text-ink'
        : 'text-muted hover:bg-surface hover:text-ink'
    }`;

  return (
    <header className="border-line sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        {/* Placeholder logo: swap for your real logo image later */}
        <a
          href="#home"
          aria-label="Back to top"
          className="bg-ink flex h-10 w-10 items-center justify-center rounded-full text-sm font-semibold text-white"
        >
          ST
        </a>

        {/* Desktop nav */}
        <nav
          aria-label="Main"
          className="border-line hidden rounded-full border bg-white p-1 md:block"
        >
          <ul className="flex items-center gap-1">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={linkClass(id)}
                  aria-current={active === id ? 'location' : undefined}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="border-line rounded-lg border p-2 md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="border-line border-t md:hidden"
        >
          <ul className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-3 sm:px-6">
            {navLinks.map(({ id, label }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={linkClass(id)}
                  aria-current={active === id ? 'location' : undefined}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
