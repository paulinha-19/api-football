import { Typography, Box, Toolbar } from "@mui/material";
import { ILineup } from "../interface";
import { useStates } from "../../../../context/States/useStates";

interface FormationUsedProps {
  lineups?: ILineup[];
}

const FormationUsed = ({ lineups }: FormationUsedProps) => {
  if (!lineups || lineups.length === 0) {
    return null;
  }
  const mostUsedFormation = lineups.reduce((prev: ILineup, current: ILineup) =>
    prev.played > current.played ? prev : current
  );
  const { selectedSeason } = useStates();
  return (
    <Box>
      <Toolbar />
      <Typography variant="h5">
        Formação mais utilizada em {selectedSeason}
      </Typography>
      <Typography
        sx={{
          backgroundColor: "primary.light",
          display: "inline-block",
          px: 1,
        }}
      >
        {mostUsedFormation.formation}
      </Typography>
      <Typography>
        Quantidade de vezes utilizada: {mostUsedFormation?.played}
      </Typography>
    </Box>
  );
};

export default FormationUsed;
