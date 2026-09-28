import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-28 text-center sm:px-6">
      <p className="font-mono text-sm text-gold-500">404</p>
      <h1 className="mt-3 font-display text-5xl font-semibold text-stone-100">Not even Deckard Cain knows this one.</h1>
      <p className="mt-4 text-stone-400">The page you&apos;re looking for doesn&apos;t exist, or hasn&apos;t been written yet.</p>
      <div className="mt-8 flex justify-center gap-4 text-sm">
        <Link href="/" className="text-gold-300 hover:text-ember-400">Home</Link>
        <Link href="/search" className="text-gold-300 hover:text-ember-400">Search</Link>
      </div>
    </div>
  );
}
