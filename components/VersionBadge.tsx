import Link from "next/link";
import { GAME_VERSIONS, type GameVersion } from "@/lib/types";

export function VersionBadge({
  version,
  variant = "works",
  link = true,
}: {
  version: string;
  variant?: "works" | "not";
  /** Set false when rendered inside another link. */
  link?: boolean;
}) {
  const known = link && (GAME_VERSIONS as readonly string[]).includes(version);
  const cls =
    variant === "works"
      ? "border-stone-600 bg-stone-800 text-stone-200 hover:border-gold-700 hover:text-gold-300"
      : "border-q-broken/40 bg-q-broken/10 text-q-broken line-through decoration-q-broken/60 hover:border-q-broken";
  const inner = <span className="font-mono text-[0.78rem] leading-none">{version}</span>;
  const base = `inline-flex items-center rounded-sm border px-1.5 py-1 transition-colors ${cls}`;
  return known ? (
    <Link href={`/play/versions/${version}`} className={base}>
      {inner}
    </Link>
  ) : (
    <span className={base}>{inner}</span>
  );
}

/**
 * "Works with" / "Not compatible with" block, used on tools, mods and articles.
 * `compact` renders a plain badge row for use inside cards (which are links).
 */
export function VersionSupport({
  versions,
  incompatible,
  compact = false,
}: {
  versions: readonly GameVersion[];
  incompatible?: readonly GameVersion[];
  compact?: boolean;
}) {
  if (!versions.length && !incompatible?.length) {
    return compact ? null : <p className="text-sm text-stone-500">Supported versions not yet documented.</p>;
  }
  return (
    <div className={compact ? "flex flex-wrap items-center gap-1" : "grid gap-3"}>
      {versions.length > 0 && (
        <div className={compact ? "contents" : ""}>
          {!compact && <p className="mb-1.5 text-xs font-medium tracking-wide text-stone-400 uppercase">Works with</p>}
          <div className="flex flex-wrap gap-1">
            {versions.map((v) => (
              <VersionBadge key={v} version={v} link={!compact} />
            ))}
          </div>
        </div>
      )}
      {!compact && incompatible && incompatible.length > 0 && (
        <div>
          <p className="mb-1.5 text-xs font-medium tracking-wide text-stone-400 uppercase">Not compatible with</p>
          <div className="flex flex-wrap gap-1">
            {incompatible.map((v) => (
              <VersionBadge key={v} version={v} variant="not" />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
