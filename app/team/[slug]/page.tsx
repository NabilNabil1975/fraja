import { FootballEngine } from "@/services/football/FootballEngine";
import { notFound } from "next/navigation";

export default async function TeamPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const team = FootballEngine.getTeam(slug);

  if (!team) notFound();

  const matches = FootballEngine.getTeamMatches(slug);
  const players = FootballEngine.getTeamPlayers(slug);

  return (
    <main className="min-h-screen bg-[#050505] p-8 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-green-400">{team.city}</p>
        <h1 className="text-6xl font-black">{team.name}</h1>
        <p className="mt-4 text-gray-400">Stadium: {team.stadium}</p>

        <h2 className="mt-12 text-3xl font-bold text-green-400">Players</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {players.map((player) => (
            <div key={player.id} className="rounded-2xl border border-green-400/20 bg-white/5 p-5">
              {player.name} — {player.position}
            </div>
          ))}
        </div>

        <h2 className="mt-12 text-3xl font-bold text-green-400">Matches</h2>
        <div className="mt-6 grid gap-4">
          {matches.map((match) => (
            <div key={match.id} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              {match.homeTeamSlug} vs {match.awayTeamSlug}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}