export interface Errors {
  errors: any[];
}

export interface IPaging {
  current: number;
  total: number;
}

export interface IRootCountry {
  get: string;
  errors: Errors;
  results: number;
  paging: IPaging;
  response: Country[];
}
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

export interface IResponseLeague {
  league: League;
  country: Country;
  seasons: Season[];
}

export interface IRootLeague {
  get: string;
  errors: Errors;
  results: number;
  paging: IPaging;
  response: IResponseLeague[];
}

export interface IRootTeam{
  get: string;
  errors: Errors;
  results: number;
  paging: IPaging;
  response: IResponseTeam[];
}

export interface IResponseTeam {
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