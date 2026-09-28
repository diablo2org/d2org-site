import { editUrl, site } from "@/lib/site";
import type { Verification as V } from "@/lib/types";

function formatMonth(ym: string) {
  const [y, m] = ym.split("-").map(Number);
  if (!m) return String(y);
  return new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString("en-GB", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/**
 * Shows when an entry was last checked, and flags seed data nobody has
 * verified yet so readers know to treat it with care.
 */
export function VerificationNote({ lastVerified, sources, file }: V & { file?: string }) {
  const edit = file ? editUrl(file) : undefined;
  return (
    <div className="grid gap-3 text-sm">
      {lastVerified ? (
        <p className="text-stone-400">
          Last verified: <span className="text-stone-200">{formatMonth(lastVerified)}</span>
        </p>
      ) : (
        <p className="rounded-sm border border-q-rare/25 bg-q-rare/5 px-3 py-2 text-[0.82rem] leading-relaxed text-q-rare/90">
          <strong className="font-semibold">Not yet verified.</strong>{" "}
          <span className="text-stone-300">
            This entry is initial seed data and hasn&apos;t been checked against its sources. Spotted a mistake?{" "}
            <a href={site.discordUrl} className="text-gold-300 underline decoration-gold-700 hover:text-ember-400">
              Tell us on Discord
            </a>
            .
          </span>
        </p>
      )}
      {sources && sources.length > 0 && (
        <div>
          <p className="mb-1 text-xs font-semibold tracking-[0.14em] text-stone-400 uppercase">Sources</p>
          <ul className="grid gap-1">
            {sources.map((s) => (
              <li key={s.url}>
                <a href={s.url} className="text-gold-300 hover:text-ember-400" rel="noopener">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {edit && (
        <a href={edit} className="text-stone-400 hover:text-gold-300" rel="noopener">
          Edit this page on GitHub →
        </a>
      )}
    </div>
  );
}
