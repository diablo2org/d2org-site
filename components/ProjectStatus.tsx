import type { ProjectStatus as Status } from "@/lib/types";

const STYLES: Record<Status, { label: string; dot: string; text: string; title: string }> = {
  active: { label: "Active", dot: "bg-q-set", text: "text-q-set", title: "Under active development" },
  maintained: { label: "Maintained", dot: "bg-q-magic", text: "text-q-magic", title: "Receives fixes, but little new development" },
  inactive: { label: "Inactive", dot: "bg-q-unique", text: "text-q-unique", title: "No recent development, but still usable" },
  archived: { label: "Archived", dot: "bg-stone-500", text: "text-stone-400", title: "No longer developed, kept for reference" },
  unknown: { label: "Status unknown", dot: "bg-stone-600", text: "text-stone-500", title: "Status not yet verified" },
};

export function ProjectStatus({ status, className = "" }: { status: Status; className?: string }) {
  const s = STYLES[status];
  return (
    <span title={s.title} className={`inline-flex items-center gap-1.5 text-xs font-medium ${s.text} ${className}`}>
      <span className={`size-1.5 rounded-full ${s.dot}`} aria-hidden />
      {s.label}
    </span>
  );
}
