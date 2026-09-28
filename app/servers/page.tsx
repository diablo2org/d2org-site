import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ServerDirectory } from "@/components/ServerDirectory";
import { servers } from "@/data/servers";
import styles from "./servers.module.css";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Private servers",
  description:
    "Compare legacy Diablo II private servers by play style, ladder, custom content, launcher and more.",
  path: "/servers",
});

export default function ServersPage() {
  return (
    <div className={styles.surface}>
      <header className={styles.hero}>
        <div className={styles.width}>
          <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <Link href="/">Home</Link><span aria-hidden="true">/</span><span>Servers</span>
          </nav>
          <div className={styles.intro}>
            <div>
              <h1>Private servers</h1>
              <p>Same Sanctuary. Different ways to play. Explore community-run Diablo II realms, from the original experience to a complete overhaul.</p>
            </div>
            <Link href="/guides/private-servers-explained" className={styles.guideLink}>
              <span>New to private servers?<strong>Start with the essentials</strong></span>
              <ArrowUpRight size={21} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </header>
      <div className={styles.width}>
        <ServerDirectory servers={servers} />
      </div>
    </div>
  );
}
