import FormationUsed from "./FormationUsed";
import ResultsTable from "./ResultsTable";
import Graphic from "./Graphic";
import { Box, Skeleton, Container } from "@mui/material";
import { useQuery } from "react-query";
import { getTeamStatistics } from "../../utils/utilRequests";
import { useStates } from "../../../context/States/useStates";
import { IResponseTeamStatistics } from "./interface";
import AlertApp from "../../Alert";
const TeamStatistics = () => {
  const { selectedYearSeason, selectedTeamId, selectedLeagueId } = useStates();
  const {
    isLoading,
    isError,
    data: dataStatistics,
    error,
  } = useQuery<IResponseTeamStatistics>({
    queryKey: [
      "team-statistics",
      selectedYearSeason,
      selectedTeamId,
      selectedLeagueId,
    ],
    queryFn: () =>
      getTeamStatistics(selectedYearSeason, selectedTeamId, selectedLeagueId),
  });

  if (isError) {
    return (
      <AlertApp severity="error" variant="filled">
        {String((error as unknown as Error)?.message)}
      </AlertApp>
    );
  }
  if (isLoading) {
    return <Skeleton animation="wave" />;
  }

  return (
    <Box>
      {dataStatistics && (
        <Container maxWidth="md">
          <FormationUsed lineups={dataStatistics?.lineups} />
          <ResultsTable
            fixtures={dataStatistics?.fixtures}
            team={dataStatistics.team}
          />
          <Graphic minutes={dataStatistics.goals.for.minute} />
        </Container>
      )}
    </Box>
  );
};

export default TeamStatistics;
