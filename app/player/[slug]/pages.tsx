import { FootballEngine } from "@/services/football/FootballEngine";
import { notFound } from "next/navigation";

export default async function PlayerPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const player = FootballEngine.getPlayer(slug);

  if (!player) notFound();

  const team = FootballEngine.getTeam(player.teamSlug);

  return (
    <main className="min-h-screen bg-[#050505] p-8 text-white">
      <section className="mx-auto max-w-7xl">
        <p className="text-green-400">{player.nationality}</p>
        <h1 className="text-6xl font-black">{player.name}</h1>
        <p className="mt-4 text-gray-400">{player.position}</p>

        <div className="mt-8 rounded-3xl border border-green-400/20 bg-white/5 p-8">
          <p className="text-xl">{player.bio}</p>
          <p className="mt-6 text-green-400">Rating: {player.rating}</p>
          <p className="mt-2 text-gray-400">Team: {team?.name ?? "Unknown"}</p>
        </div>
      </section>
    </main>
  );
}