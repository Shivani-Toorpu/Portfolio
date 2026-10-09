import type { ReactNode } from 'react';

type Props = {
  id: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  children,
  className = '',
}: Props) {
  return (
    <section id={id} className="scroll-mt-24 px-4 py-3 sm:px-6">
      <div
        className={`mx-auto max-w-6xl rounded-frame border border-line bg-white p-6 sm:p-10 ${className}`}
      >
        {children}
      </div>
    </section>
  );
}