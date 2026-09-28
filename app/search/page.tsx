import type { Metadata } from "next";
import { Suspense } from "react";
import { PageHeader } from "@/components/PageHeader";
import { SearchClient } from "@/components/SearchClient";
import { buildSearchDocs } from "@/lib/search";

export const metadata: Metadata = {
  title: "Search",
  description: "Search guides, mods, servers, tools, versions and history.",
  robots: { index: false },
};

export default function SearchPage() {
  const docs = buildSearchDocs();
  return (
    <>
      <PageHeader title="Search" crumbs={[{ href: "/", label: "Home" }]} />
      <div className="mx-auto max-w-3xl px-4 pt-8 sm:px-6">
        <Suspense>
          <SearchClient docs={docs} />
        </Suspense>
      </div>
    </>
  );
}
