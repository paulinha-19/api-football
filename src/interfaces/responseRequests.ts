export interface Country {
  name: string;
  code: string;
  flag: string;
}

export interface League {
  id: number;
  name: string;
  type: string;
  logo: string;
}

export interface Season {
  year: number;
  start: string;
  end: string;
  current: boolean;
  coverage: Coverage;
}

export interface Fixtures {
  events: boolean;
  lineups: boolean;
  statistics_fixtures: boolean;
  statistics_players: boolean;
}

export interface Coverage {
  fixtures: Fixtures;
  standings: boolean;
  players: boolean;
  top_scorers: boolean;
  top_assists: boolean;
  top_cards: boolean;
  injuries: boolean;
  predictions: boolean;
  odds: boolean;
}

export interface LeagueData {
  league: League;
  country: Country;
  seasons: Season[];
}

export interface ResponseTeam {
  responseTeams: ResponseTeam[];
}

export interface TeamData {
  team: Team;
  venue: Venue;
}

export interface Team {
  id: number;
  name: string;
  code: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

export interface Venue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

//TeamStatistics
export interface IRootTeamStatistics {
  errors: Errors;
  results: number;
  paging: IPaging;
  response: IResponseTeamStatistics[];
}

interface IPaging {
  current: number;
  total: number;
}

interface Errors {
  requests: string;
}

export interface IResponseTeamStatistics {
  league: ILeague;
  team: ITeam;
  fixtures: IFixtures;
  goals: IGoals;
  lineups: ILineup[];
}

export interface ILeague {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface ITeam {
  id: number;
  name: string;
  logo: string;
}

export interface IFixtures {
  played: IPlayed;
  wins: IWins;
  draws: IDraws;
  loses: ILoses;
}

export interface IPlayed {
  home: number;
  away: number;
  total: number;
}

export interface IWins {
  home: number;
  away: number;
  total: number;
}

export interface IDraws {
  home: number;
  away: number;
  total: number;
}

export interface ILoses {
  home: number;
  away: number;
  total: number;
}

export interface IGoals {
  for: IFor;
  against: IAgainst;
}

export interface IFor {
  total: ITotal;
  average: IAverage;
  minute: IMinute;
}

export interface IAgainst {
  total: ITotal;
  average: IAverage;
  minute: IMinute;
}

export interface ITotal {}

export interface IAverage {}

export interface IMinute {
  "0-15": N015;
  "16-30": N1630;
  "31-45": N3145;
  "46-60": N4660;
  "61-75": N6175;
  "76-90": N7690;
  "91-105": N91105;
  "106-120": N106120;
}

export interface N015 {
  total: number;
  percentage: string;
}

export interface N1630 {
  total: number;
  percentage: string;
}

export interface N3145 {
  total: number;
  percentage: string;
}

export interface N4660 {
  total: number;
  percentage: string;
}

export interface N6175 {
  total: number;
  percentage: string;
}

export interface N7690 {
  total: number;
  percentage: string;
}

export interface N91105 {
  total: number;
  percentage: string;
}

export interface N106120 {
  total: any;
  percentage: any;
}

export interface ILineup {
  formation: string;
  played: number;
}
