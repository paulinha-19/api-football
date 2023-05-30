import FormationUsed from "./FormationUsed";
import ResultsTable from "./ResultsTable";
import Graphic from "./Graphic";
import { Box, Skeleton, Alert, Container } from "@mui/material";
import { useQuery } from "react-query";
import { getTeamStatistics } from "../../utils/utilRequests";
import { useStates } from "../../../context/States/useStates";
import { IResponseTeamStatistics } from "../../../interfaces/responseRequests";
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
  if (isLoading) {
    return <Skeleton animation="wave" />;
  }

  if (isError) {
    return (
      <Alert severity="error" variant="filled">
        Error: {String(error)}
      </Alert>
    );
  }
  return (
    <Box>
      {dataStatistics && (
        <Container maxWidth='md'>
          <FormationUsed lineups={dataStatistics?.lineups} />
          <ResultsTable
            fixtures={dataStatistics?.fixtures}
            team={dataStatistics.team}
          />
          <Graphic minutes={dataStatistics.goals.for.minute}/>
        </Container>
      )}
    </Box>
  );
};

export default TeamStatistics;
