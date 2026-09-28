"use client";

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

export interface ProjectTab {
  id: string;
  label: string;
  count: number;
  content: ReactNode;
  /** "Browse all" link shown under the panel. */
  footer?: ReactNode;
}

/** Accessible tabs: arrow keys, Home and End move between tabs. */
export function ProjectTabs({ tabs }: { tabs: ProjectTab[] }) {
  const [active, setActive] = useState(tabs[0]?.id);
  const base = useId();
  const refs = useRef<(HTMLButtonElement | null)[]>([]);

  function onKeyDown(e: KeyboardEvent, i: number) {
    const last = tabs.length - 1;
    const next =
      e.key === "ArrowRight" ? (i === last ? 0 : i + 1)
      : e.key === "ArrowLeft" ? (i === 0 ? last : i - 1)
      : e.key === "Home" ? 0
      : e.key === "End" ? last
      : null;
    if (next === null) return;
    e.preventDefault();
    setActive(tabs[next].id);
    refs.current[next]?.focus();
  }

  return (
    <div className="project-tabs">
      <div role="tablist" aria-label="Popular projects" className="project-tablist">
        {tabs.map((t, i) => {
          const selected = t.id === active;
          return (
            <button
              key={t.id}
              ref={(el) => { refs.current[i] = el; }}
              type="button"
              role="tab"
              id={`${base}-tab-${t.id}`}
              aria-selected={selected}
              aria-controls={`${base}-panel-${t.id}`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(t.id)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className="project-tab"
            >
              {t.label}
              <span className="project-tab-count">{t.count}</span>
            </button>
          );
        })}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`${base}-panel-${t.id}`}
          aria-labelledby={`${base}-tab-${t.id}`}
          hidden={t.id !== active}
          tabIndex={0}
          className="project-tabpanel"
        >
          {t.content}
          {t.footer && <div className="mt-6">{t.footer}</div>}
        </div>
      ))}
    </div>
  );
}
