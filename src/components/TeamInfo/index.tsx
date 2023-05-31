import PlayerList from "./PlayerList/index";
import { Box, Typography, Grid } from "@mui/material";
import { useStates } from "../../context/States/useStates";
import TeamStatistics from "./TeamStatistics";

const TeamInfo = () => {
  const { selectedCountry, selectedLeague, selectedSeason, selectedTeam } =
    useStates();
  const isSelectionComplete =
    selectedCountry !== null &&
    selectedLeague !== null &&
    selectedSeason !== null &&
    selectedTeam !== null;
  return (
    <Box>
      {isSelectionComplete ? (
        <Grid container>
          <Grid item xs={12} md={6}>
            <PlayerList />
          </Grid>
          <Grid item xs={12} md={6}>
            <TeamStatistics />
          </Grid>
        </Grid>
      ) : (
        <Typography
          variant="overline"
          display="flex"
          justifyContent="center"
          align="center"
        >
          Selecione os 4 selects para exibir as informações
        </Typography>
      )}
    </Box>
  );
};

export default TeamInfo;
