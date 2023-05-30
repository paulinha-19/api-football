export interface IStates {
  selectedCountry: string | null;
  setSelectedCountry: (country: string | null) => void;
  selectedLeague: string | null;
  setSelectedLeague: (country: string | null) => void;
  selectedSeason: string | null;
  setSelectedSeason: (season: string | null) => void;
  selectedTeam: string | null;
  setSelectedTeam: (team: string | null) => void;
  selectedLeagueId: number | null;
  setSelectedLeagueId: (idLeague: number | null) => void;
  selectedTeamId: number | null;
  setSelectedTeamId: (idTeam: number | null) => void;
  selectedYearSeason: number | null;
  setSelectedYearSeason: (season: number | null) => void;
  isSelectionComplete: boolean;
  setIsSelectionComplete: (value: React.SetStateAction<boolean>) => void;
}

export interface IStatesProvider {
  children: JSX.Element;
}
