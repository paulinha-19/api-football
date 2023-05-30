import { createContext, useState } from "react";
import { IStates, IStatesProvider } from "./interfaces";

export const StatesContext = createContext<IStates>({} as IStates);

const StatesProvider = ({ children }: IStatesProvider) => {
    const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
    const [selectedLeague, setSelectedLeague] = useState<string | null>(null);
    const [selectedSeason, setSelectedSeason] = useState<string | null>(null);
    const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
    const [selectedLeagueId, setSelectedLeagueId] = useState<number | null>(null);
    const [selectedTeamId, setSelectedTeamId] = useState<number | null>(null);
    const [selectedYearSeason, setSelectedYearSeason] = useState<number | null>(null);
    const [isSelectionComplete, setIsSelectionComplete] = useState<boolean>(false);
    return (
        <StatesContext.Provider
            value={{
                selectedCountry,
                selectedLeague,
                selectedSeason,
                selectedTeam,
                selectedLeagueId,
                selectedTeamId,
                selectedYearSeason,
                setSelectedCountry,
                setSelectedLeague,
                setSelectedSeason,
                setSelectedTeam,
                setSelectedLeagueId,
                setSelectedTeamId,
                setSelectedYearSeason,
                isSelectionComplete,
                setIsSelectionComplete,
            }}
        >
            {children}
        </StatesContext.Provider>
    )
}

export default StatesProvider