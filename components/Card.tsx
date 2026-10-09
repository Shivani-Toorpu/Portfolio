import type { ComponentProps } from 'react';

export default function Card({
  className = '',
  children,
  ...props
}: ComponentProps<'div'>) {
  return (
    <div
      className={`rounded-card border-line border bg-white p-6 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
