import Link from "next/link";

export default function AIPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 py-16 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-green-400">FRAJA AI</p>
        <h1 className="mt-3 text-5xl font-black">Captain Hakimi AI</h1>
        <p className="mt-4 max-w-2xl text-gray-400">
          Your multilingual football assistant for live matches, tactics,
          players, transfers, and predictions.
        </p>

        <div className="mt-10 rounded-3xl border border-green-400/20 bg-white/5 p-8">
          <h2 className="text-2xl font-bold text-green-400">
            Ask Captain Hakimi
          </h2>
          <p className="mt-3 text-gray-300">
            Start a football conversation, ask about Botola standings, compare
            players, or get match analysis.
          </p>

          <Link
            href="/ai/chat"
            className="mt-6 inline-block rounded-xl bg-green-400 px-6 py-3 font-bold text-black"
          >
            Open AI Chat
          </Link>
        </div>
      </section>
    </main>
  );
}