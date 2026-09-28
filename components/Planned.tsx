import Link from "next/link";

export interface PlannedItem {
  title: string;
  body?: string;
  /** Set once the page exists. */
  href?: string;
}

/** A numbered path or list of topics, some written and some still planned. */
export function TopicList({ items, numbered = false }: { items: PlannedItem[]; numbered?: boolean }) {
  return (
    <ol className="grid gap-2">
      {items.map((item, i) => {
        const inner = (
          <>
            {numbered && (
              <span className={`w-7 shrink-0 font-display text-2xl tabular-nums ${item.href ? "text-gold-500" : "text-stone-700"}`}>
                {i + 1}
              </span>
            )}
            <span className="min-w-0 flex-1">
              <span className={`block font-medium ${item.href ? "text-stone-100 group-hover:text-gold-300" : "text-stone-400"}`}>
                {item.title}
              </span>
              {item.body && <span className="mt-0.5 block text-sm text-stone-500">{item.body}</span>}
            </span>
            {!item.href && (
              <span className="shrink-0 rounded-sm border border-stone-700 px-1.5 py-0.5 text-[0.68rem] tracking-wide text-stone-500 uppercase">
                Planned
              </span>
            )}
          </>
        );
        const cls = "flex items-center gap-4 rounded-sm border px-4 py-3";
        return (
          <li key={item.title}>
            {item.href ? (
              <Link href={item.href} className={`group ${cls} panel transition-colors hover:border-gold-700`}>
                {inner}
              </Link>
            ) : (
              <div className={`${cls} border-dashed border-stone-700/80`}>{inner}</div>
            )}
          </li>
        );
      })}
    </ol>
  );
}
