import Link from "next/link";
import { getRelated, KIND_LABELS } from "@/lib/relationships";
import type { Ref } from "@/lib/types";

export function RelatedLinks({ refKey, title = "Related" }: { refKey: Ref; title?: string }) {
  const related = getRelated(refKey);
  if (!related.length) return null;
  return (
    <aside aria-labelledby="related-heading">
      <h2 id="related-heading" className="mb-3 text-xs font-semibold tracking-[0.14em] text-stone-400 uppercase">
        {title}
      </h2>
      <ul className="grid gap-1">
        {related.map((n) => (
          <li key={n.ref}>
            <Link
              href={n.href}
              className="group -mx-2 flex items-baseline justify-between gap-3 rounded-sm px-2 py-1.5 hover:bg-stone-800/70"
            >
              <span className="text-sm text-stone-200 group-hover:text-gold-300">{n.title}</span>
              <span className="shrink-0 text-[0.7rem] tracking-wide text-stone-500 uppercase">{KIND_LABELS[n.kind]}</span>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
