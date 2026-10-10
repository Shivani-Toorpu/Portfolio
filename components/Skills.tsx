import Card from '@/components/Card';
import { coursework, practices, skillGroups } from '@/data/skills';

function ChipList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-ink text-sm font-semibold tracking-wide uppercase">
        {title}
      </h3>
      <ul className="mt-3 flex flex-wrap gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="border-line text-body hover:bg-surface hover:text-ink rounded-full border px-3 py-1 text-xs transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Skills() {
  return (
    <div>
      <h2 className="sr-only">Skills</h2>

      <div className="grid gap-4 md:grid-cols-2">
        {skillGroups.map(({ title, skills }) => (
          <Card key={title}>
            <h3 className="text-ink text-sm font-semibold tracking-wide uppercase">
              {title}
            </h3>
            <ul className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4">
              {skills.map(({ name, icon: Icon }) => (
                <li
                  key={name}
                  className="group hover:border-line hover:bg-surface flex flex-col items-center gap-2 rounded-xl border border-transparent px-1 py-3 text-center transition duration-200 hover:-translate-y-1 hover:scale-105 motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <Icon
                    aria-hidden="true"
                    className="text-muted group-hover:text-ink h-7 w-7 transition-colors duration-200"
                  />
                  <span className="text-body text-xs leading-tight">
                    {name}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>

      <Card className="bg-surface mt-4 grid gap-6 md:grid-cols-2">
        <ChipList title="Engineering practices" items={practices} />
        <ChipList title="Coursework" items={coursework} />
      </Card>
    </div>
  );
}
