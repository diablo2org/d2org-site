import type { ReactNode } from "react";

export type Fact = [label: string, value: ReactNode | undefined | null | false];

/** Definition list for structured entry data. Rows with no value are skipped. */
export function FactList({ facts, title }: { facts: Fact[]; title?: string }) {
  const shown = facts.filter(([, v]) => v !== undefined && v !== null && v !== false && v !== "");
  if (!shown.length) return null;
  return (
    <div>
      {title && <h2 className="mb-2 text-xs font-semibold tracking-[0.14em] text-stone-400 uppercase">{title}</h2>}
      <dl className="divide-y divide-stone-800 text-sm">
        {shown.map(([label, value]) => (
          <div key={label} className="grid grid-cols-[9rem_1fr] gap-3 py-2">
            <dt className="text-stone-400">{label}</dt>
            <dd className="min-w-0 text-stone-200 [overflow-wrap:anywhere]">{value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function yesNo(v: boolean | undefined) {
  if (v === undefined) return undefined;
  return v ? "Yes" : "No";
}

export function ExternalLink({ href, children }: { href: string; children?: ReactNode }) {
  return (
    <a href={href} rel="noopener" className="text-gold-300 hover:text-ember-400">
      {children ?? href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
    </a>
  );
}

const OS_LABELS: Record<string, string> = { windows: "Windows", linux: "Linux", macos: "macOS", "steam-deck": "Steam Deck" };

export function osList(os: readonly string[] | undefined) {
  return os?.map((o) => OS_LABELS[o] ?? o).join(", ");
}
