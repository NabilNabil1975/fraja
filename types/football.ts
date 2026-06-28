export type MatchStatus = "scheduled" | "live" | "finished";

export interface League {
  id: string;
  slug: string;
  name: string;
  country: string;
  tier: number;
  season: string;
  description: string;
  featuredTeamSlugs: string[];
}

export interface Team {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  city: string;
  stadium: string;
  leagueSlug: string;
  logo?: string;
}

export interface Player {
  id: string;
  slug: string;
  name: string;
  teamSlug: string;
  position: string;
  nationality: string;
  rating: number;
  bio: string;
}

export interface Match {
  id: string;
  leagueSlug: string;
  homeTeamSlug: string;
  awayTeamSlug: string;
  venue: string;
  round: string;
  kickOff: string;
  status: MatchStatus;
  homeScore?: number;
  awayScore?: number;
}