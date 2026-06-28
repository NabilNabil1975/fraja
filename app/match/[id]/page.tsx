import { FootballEngine } from "@/services/football/FootballEngine";
import { notFound } from "next/navigation";

export default async function MatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const match = FootballEngine.getMatch(id);

  if (!match) notFound();

  const home = FootballEngine.getTeam(match.homeTeamSlug);
  const away = FootballEngine.getTeam(match.awayTeamSlug);
  const league = FootballEngine.getLeague(match.leagueSlug);

  return (
    <main className="min-h-screen bg-[#050505] p-8 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-green-400">{league?.name}</p>
        <h1 className="text-5xl font-black">
          {home?.name} vs {away?.name}
        </h1>

        <div className="mt-10 rounded-3xl border border-green-400/20 bg-white/5 p-8 text-center">
          <p className="text-gray-400">{match.round}</p>
          <p className="mt-4 text-6xl font-black text-green-400">
            {match.homeScore ?? 0} - {match.awayScore ?? 0}
          </p>
          <p className="mt-4 text-gray-400">{match.status}</p>
          <p className="mt-2 text-gray-500">{match.venue}</p>
        </div>
      </section>
    </main>
  );
}