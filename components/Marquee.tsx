type Props = { text: string };

export default function Marquee({ text }: Props) {
  const items = Array.from({ length: 4 });

  return (
    <div
      className="marquee overflow-hidden border-y border-line py-2"
      role="note"
      aria-label={text}
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-group" aria-hidden="true">
            {items.map((_, i) => (
              <span
                key={i}
                className="px-6 text-xs font-medium tracking-wide text-muted uppercase"
              >
                {text} <span className="px-4 text-line">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}