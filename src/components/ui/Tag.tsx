export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-border bg-surface px-2 py-1 font-mono text-[11px] leading-none text-text-soft">
      {children}
    </span>
  );
}

export function TagList({ items, label }: { items: readonly string[]; label?: string }) {
  return (
    <ul className="flex flex-wrap gap-1.5" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
