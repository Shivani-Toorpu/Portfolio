type Props = { text: string };

export default function Marquee({ text }: Props) {
  const items = Array.from({ length: 4 });

  return (
    <div
      className="marquee border-line overflow-hidden border-y py-2"
      role="note"
      aria-label={text}
    >
      <div className="marquee-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="marquee-group" aria-hidden="true">
            {items.map((_, i) => (
              <span
                key={i}
                className="text-muted px-6 text-xs font-medium tracking-wide uppercase"
              >
                {text} <span className="text-line px-4">/</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
