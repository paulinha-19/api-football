import { Typography, Box, Toolbar } from "@mui/material";
import { ILineup } from "../../../../interfaces/responseRequests";

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
  return (
    <Box>
      <Toolbar />
      <Typography variant="h5">Formação mais utilizada</Typography>
      <Typography>{mostUsedFormation.formation}</Typography>
      <Typography>
        Quantidade de vezes utilizada: {mostUsedFormation?.played}
      </Typography>
    </Box>
  );
};

export default FormationUsed;
