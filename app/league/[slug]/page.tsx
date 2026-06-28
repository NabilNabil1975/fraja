import { FootballEngine } from "@/services/football/FootballEngine";
import { notFound } from "next/navigation";

export default async function LeaguePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const league = FootballEngine.getLeague(slug);

  if (!league) notFound();

  const teams = FootballEngine.getLeagueTeams(slug);
  const matches = FootballEngine.getLeagueMatches(slug);

  return (
    <main className="min-h-screen bg-[#050505] p-8 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-green-400">{league.country}</p>
        <h1 className="text-6xl font-black">{league.name}</h1>
        <p className="mt-4 max-w-3xl text-gray-400">{league.description}</p>

        <h2 className="mt-12 text-3xl font-bold text-green-400">Teams</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {teams.map((team) => (
            <div key={team.id} className="rounded-2xl border border-green-400/20 bg-white/5 p-5">
              {team.name}
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-3xl font-bold text-green-400">Matches</h2>
        <div className="mt-6 grid gap-4">
          {matches.map((match) => (
            <div key={match.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              {match.homeTeamSlug} vs {match.awayTeamSlug} — {match.status}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}