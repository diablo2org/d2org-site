import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import styles from "./Directory.module.css";

export function DirectoryHeader({ title, description, guide }: {
  title: string;
  description: ReactNode;
  guide: { href: string; label: string; description: string };
}) {
  return <header className={styles.hero}>
    <div className={styles.width}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span>{title}</span></nav>
      <div className={styles.intro}>
        <div><h1>{title}</h1><p>{description}</p></div>
        <Link href={guide.href} className={styles.guide}><span>{guide.description}<strong>{guide.label}</strong></span><ArrowUpRight size={20} aria-hidden="true" /></Link>
      </div>
    </div>
  </header>;
}
