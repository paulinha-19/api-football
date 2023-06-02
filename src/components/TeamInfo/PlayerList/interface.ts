import { Errors, IPaging } from "../../Option/interface";

export interface IRootPlayer {
  get: string;
  errors: Errors;
  results: number;
  paging: IPaging;
  response: IResponsePlayer[];
}

export interface IResponsePlayer {
  player: Player;
  statistics: Statistic[];
}

export interface Player {
  id: number;
  name: string;
  firstname: string;
  lastname: string;
  age: number;
  birth: Birth;
  nationality: string;
  height: string;
  weight: string;
  injured: boolean;
  photo: string;
}

export interface Birth {
  date: Date;
  place: string;
  country: string;
}

export interface Statistic {
  team: Team;
  league: League;
  games: Games;
  substitutes: Substitutes;
  shots: Shots;
  goals: Goals;
  passes: Passes;
  tackles: Tackles;
  duels: Duels;
  dribbles: Dribbles;
  fouls: Fouls;
  cards: Cards;
  penalty: Penalty;
}

export interface Cards {
  yellow: number;
  yellowred: number;
  red: number;
}

export interface Dribbles {
  attempts: null;
  success: null;
  past: null;
}

export interface Duels {
  total: null;
  won: null;
}

export interface Fouls {
  drawn: null;
  committed: null;
}

export interface Games {
  appearences: number;
  lineups: number;
  minutes: number;
  number: null;
  position: string;
  rating: null;
  captain: boolean;
}

export interface Goals {
  total: number;
  conceded: null;
  assists: null;
  saves: null;
}

export interface League {
  id: number;
  name: string;
  country: string;
  logo: string;
  flag: string;
  season: number;
}

export interface Passes {
  total: null;
  key: null;
  accuracy: null;
}

export interface Penalty {
  won: null;
  commited: null;
  scored: null;
  missed: null;
  saved: null;
}

export interface Shots {
  total: null;
  on: null;
}

export interface Substitutes {
  in: number;
  out: number;
  bench: number;
}

export interface Tackles {
  total: null;
  blocks: null;
  interceptions: null;
}

export interface Team {
  id: number;
  name: string;
  logo: string;
}
