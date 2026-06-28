const players = ["Hakimi", "Mbappé", "Yamal", "Bellingham", "Vinicius", "Haaland", "Salah", "Osimhen"];

export default function TrendingPlayers() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-8 text-4xl font-black text-green-400">Trending Players</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {players.map((player) => (
          <div key={player} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="mb-4 h-24 w-24 rounded-full bg-green-400/20" />
            <h3 className="text-xl font-bold">{player}</h3>
            <p className="text-sm text-gray-400">Forward / Defender</p>
          </div>
        ))}
      </div>
    </section>
  );
}