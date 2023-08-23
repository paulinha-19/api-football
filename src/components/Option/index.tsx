import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
  Toolbar,
} from "@mui/material";
import { useQuery } from "react-query";
import { getCountries, getLeague, getTeams } from "../../utils/utilRequests";
import {
  IRootCountry,
  Country,
  IRootLeague,
  IResponseLeague,
  Season,
  IRootTeam,
  IResponseTeam,
} from "./interface";
import { useStates } from "../../context/States/useStates";
import AlertApp from "../Alert";

const Option = () => {
  const {
    selectedCountry,
    setSelectedCountry,
    selectedLeague,
    setSelectedLeague,
    selectedSeason,
    setSelectedSeason,
    selectedTeam,
    setSelectedTeam,
    selectedLeagueId,
    setSelectedLeagueId,
    setSelectedTeamId,
    selectedYearSeason,
    setSelectedYearSeason,
  } = useStates();
  const {
    isLoading: isLoadingCountry,
    isError: isErrorCountry,
    data: dataCountry,
    error: errorCountry,
  } = useQuery<IRootCountry>("countries", getCountries);
  const {
    isLoading: isLoadingLeague,
    isError: isErrorLeague,
    data: dataLeague,
    error: errorLeague,
  } = useQuery<IRootLeague>({
    queryKey: ["league", selectedCountry],
    queryFn: () => getLeague(selectedCountry),
    enabled: !!selectedCountry,
  });
  const {
    isLoading: isLoadingTeams,
    isError: isErrorTeams,
    data: dataTeams,
    error: errorTeams,
  } = useQuery<IRootTeam>({
    queryKey: ["teams", selectedCountry, selectedLeagueId, selectedYearSeason],
    queryFn: () => getTeams(selectedLeagueId, selectedYearSeason),
    enabled: !!selectedCountry && !!selectedLeague && !!selectedSeason,
  });

  const handleChangeCountry = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    setSelectedCountry(value);
    setSelectedLeague("");
    setSelectedSeason(null);
    setSelectedTeam("");
  };
  const handleChangeLeague = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    const nameSelectedLeague = dataLeague?.response.find(
      (item: IResponseLeague) => item.league.name === value
    );
    setSelectedLeague(value);
    setSelectedLeagueId(nameSelectedLeague?.league.id || null);
    setSelectedSeason(null);
    setSelectedTeam("");
  };
  const handleChangeSeason = (e: SelectChangeEvent<string>) => {
    const value = parseInt(e.target.value);
    setSelectedYearSeason(value);
    setSelectedSeason(value.toString());
    setSelectedTeam(null);
  };
  const handleChangeTeams = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    const nameSelectedTeam = dataTeams?.response?.find(
      (item: IResponseTeam) => item.team.name === value
    );
    setSelectedTeam(value);
    setSelectedTeamId(nameSelectedTeam?.team.id || null);
  };

  if (isErrorCountry || isErrorLeague || isErrorTeams) {
    return (
      <AlertApp severity="error" variant="filled">
        {String(
          (errorCountry as unknown as Error)?.message ||
            (errorLeague as unknown as Error)?.message ||
            (errorTeams as unknown as Error)?.message
        )}
      </AlertApp>
    );
  }
  if (
    (dataCountry?.errors.errors && dataCountry?.errors?.errors?.length > 0) ||
    (dataLeague?.errors.errors && dataLeague?.errors?.errors?.length > 0) ||
    (dataTeams?.errors.errors && dataTeams?.errors?.errors?.length > 0)
  ) {
    return (
      <AlertApp severity="error" variant="filled">
        {String(dataCountry?.errors.errors)}
      </AlertApp>
    );
  }
  return (
    <>
      <Toolbar />
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <FormControl sx={{ m: 5, minWidth: 220 }} size="small">
          {isLoadingCountry ? (
            <InputLabel id="label-country">Carregando os países</InputLabel>
          ) : (
            <InputLabel id="label-country">Selecione o país</InputLabel>
          )}
          <Select
            labelId="country"
            id="country"
            value={selectedCountry || ""}
            label="country"
            name="country"
            onChange={handleChangeCountry}
          >
            {dataCountry?.response?.map((item: Country, index: any) => (
              <MenuItem key={index} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 5, minWidth: 220 }} size="small">
          {isLoadingLeague ? (
            <InputLabel id="league-label">Carregando as ligas</InputLabel>
          ) : (
            <InputLabel id="league-label">Selecione a liga</InputLabel>
          )}
          <Select
            labelId="league"
            id="league"
            value={selectedLeague || ""}
            label="league"
            name="league"
            onChange={handleChangeLeague}
            disabled={!selectedCountry}
          >
            {dataLeague?.response?.map((league: IResponseLeague) => (
              <MenuItem key={league.league.id} value={league.league.name}>
                {league.league.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 5, minWidth: 220 }} size="small">
          <InputLabel id="season-label">Selecione a temporada</InputLabel>
          <Select
            labelId="season"
            id="season"
            value={selectedSeason || ""}
            label="season"
            name="season"
            onChange={handleChangeSeason}
            disabled={!selectedCountry || !selectedLeague}
          >
            {dataLeague?.response[0].seasons?.map(
              (season: Season, index: any) => (
                <MenuItem key={index} value={season.year}>
                  {season.year}
                </MenuItem>
              )
            )}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 5, minWidth: 220 }} size="small">
          {isLoadingTeams ? (
            <InputLabel id="label-team">Carregando os times</InputLabel>
          ) : (
            <InputLabel id="team-label">Selecione o time</InputLabel>
          )}
          <Select
            labelId="team"
            id="team"
            value={selectedTeam || ""}
            label="team"
            name="team"
            onChange={handleChangeTeams}
            disabled={!selectedCountry || !selectedLeague || !selectedSeason}
          >
            {dataTeams?.response?.map((team: IResponseTeam) => (
              <MenuItem key={team.team.id} value={team.team.name}>
                {team.team.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default Option;
