const leagues = [
  "Botola Pro Morocco",
  "Egypt Premier League",
  "Roshn Saudi League",
  "Premier League",
  "La Liga",
  "Serie A",
  "Bundesliga",
  "Ligue 1",
  "CAF Champions League",
  "MLS",
  "Brasileirão",
  "J League",
];

export default function TopLeagues() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <h2 className="mb-8 text-4xl font-black text-green-400">Top Leagues</h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {leagues.map((league) => (
          <div
            key={league}
            className="rounded-2xl border border-green-400/20 bg-white/5 p-5 hover:border-green-400"
          >
            <h3 className="font-bold">{league}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}