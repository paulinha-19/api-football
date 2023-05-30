import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Box,
  SelectChangeEvent,
  Toolbar,
  Alert
} from "@mui/material";
import { useQuery } from "react-query";
import { getCountries, getLeague, getTeams } from "../utils/utilRequests";
import {
  Country,
  LeagueData,
  Season,
  TeamData,
} from "../../interfaces/responseRequests";
import { useStates } from "../../context/States/useStates";

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
  } = useQuery("countries", getCountries);
  const {
    isLoading: isLoadingLeague,
    isError: isErrorLeague,
    data: dataLeague,
    error: errorLeague,
  } = useQuery({
    queryKey: ["league", selectedCountry],
    queryFn: () => getLeague(selectedCountry),
    enabled: !!selectedCountry,
  });
  const {
    isLoading: isLoadingTeams,
    isError: isErrorTeams,
    data: dataTeams,
    error: errorTeams,
  } = useQuery({
    queryKey: ["teams", selectedCountry, selectedLeagueId, selectedYearSeason],
    queryFn: () => getTeams(selectedLeagueId, selectedYearSeason),
    enabled: !!selectedCountry && !!selectedLeague && !!selectedSeason,
  });

  const handleChangeCountry = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    setSelectedCountry(value);
    setSelectedLeague("");
    console.log("VALUE PAIS SELECIONADO", value);
  };
  const handleChangeLeague = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    const nameSelectedLeague = dataLeague?.find(
      (item: LeagueData) => item.league.name === value
    );
    setSelectedLeague(value);
    setSelectedLeagueId(nameSelectedLeague?.league.id || null);
    console.log("VALUE LIGA", value);
  };
  const handleChangeSeason = (e: SelectChangeEvent<string>) => {
    const value = parseInt(e.target.value);
    setSelectedYearSeason(value);
    setSelectedSeason(value.toString());
    console.log("VALUE SEASON SELECIONADA", value);
  };
  const handleChangeTeams = (e: SelectChangeEvent<string>) => {
    const { value } = e.target;
    const nameSelectedTeam = dataTeams?.find(
      (item: TeamData) => item.team.name === value
    );
    setSelectedTeam(value);
    setSelectedTeamId(nameSelectedTeam?.team.id || null);
    console.log("ID SELECIONADo", nameSelectedTeam?.team.id || null);
  };

  if (isErrorCountry || isErrorLeague || isErrorTeams) {
    return <Alert>{String(errorCountry || errorLeague || errorTeams)}</Alert>;
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
            {dataCountry?.map((item: Country, index: any) => (
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
            {dataLeague?.map((league: LeagueData) => (
              <MenuItem key={league.league.id} value={league.league.name}>
                {league.league.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 5, minWidth: 220 }} size="small">
          <InputLabel id="season-label">Selecione a season</InputLabel>
          <Select
            labelId="season"
            id="season"
            value={selectedSeason || ""}
            label="season"
            name="season"
            onChange={handleChangeSeason}
            disabled={!selectedCountry || !selectedLeague}
          >
            {dataLeague?.[0].seasons?.map((season: Season, index: any) => (
              <MenuItem key={index} value={season.year}>
                {season.year}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ m: 5, minWidth: 220 }} size="small">
          <InputLabel id="team-label">Selecione o time</InputLabel>
          <Select
            labelId="team"
            id="team"
            value={selectedTeam || ""}
            label="team"
            name="team"
            onChange={handleChangeTeams}
            disabled={!selectedCountry || !selectedLeague || !selectedSeason}
          >
            {dataTeams?.map((team: TeamData) => (
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
