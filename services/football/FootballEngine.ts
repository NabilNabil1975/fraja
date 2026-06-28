import { leagues, matches, players, teams } from "@/data/football";

export const FootballEngine = {
  getLeague(slug: string) {
    return leagues.find((league) => league.slug === slug);
  },

  getTeam(slug: string) {
    return teams.find((team) => team.slug === slug);
  },

  getPlayer(slug: string) {
    return players.find((player) => player.slug === slug);
  },

  getMatch(id: string) {
    return matches.find((match) => match.id === id);
  },

  getLeagueTeams(leagueSlug: string) {
    return teams.filter((team) => team.leagueSlug === leagueSlug);
  },

  getLeagueMatches(leagueSlug: string) {
    return matches.filter((match) => match.leagueSlug === leagueSlug);
  },

  getTeamMatches(teamSlug: string) {
    return matches.filter(
      (match) =>
        match.homeTeamSlug === teamSlug || match.awayTeamSlug === teamSlug
    );
  },

  getTeamPlayers(teamSlug: string) {
    return players.filter((player) => player.teamSlug === teamSlug);
  },
};