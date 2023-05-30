import { IFixtures, ITeam } from "../../../../interfaces/responseRequests";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
  Typography,
  Toolbar,
} from "@mui/material";

interface ResultsTableProps {
  fixtures?: IFixtures;
  team?: ITeam;
}
const ResultsTable = ({ fixtures, team }: ResultsTableProps) => {
  return (
    <>
      <Toolbar />
      <Typography variant="h5" component="h5">
        Resultados
      </Typography>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {team?.logo && (
          <img
            src={team.logo}
            alt="Team Logo"
            style={{ width: 150, height: 150 }}
          />
        )}
        <Table sx={{ mt: 3 }}>
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>HOME</TableCell>
              <TableCell>AWAY</TableCell>
              <TableCell>ALL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>GAMES PLAYED</TableCell>
              <TableCell>{fixtures?.played?.home}</TableCell>
              <TableCell sx={{ backgroundColor: "primary.light" }}>
                {fixtures?.played?.away}
              </TableCell>
              <TableCell>{fixtures?.played?.total}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>WINS</TableCell>
              <TableCell sx={{ color: "#14dfe6" }}>
                {fixtures?.wins?.home}
              </TableCell>
              <TableCell sx={{ backgroundColor: "primary.light" }}>
                {fixtures?.wins?.away}
              </TableCell>
              <TableCell sx={{ color: "#14dfe6" }}>
                {fixtures?.wins?.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>DRAWS</TableCell>
              <TableCell sx={{ color: "#14dfe6" }}>
                {fixtures?.draws?.home}
              </TableCell>
              <TableCell sx={{ backgroundColor: "primary.light" }}>
                {fixtures?.draws?.away}
              </TableCell>
              <TableCell sx={{ color: "#14dfe6" }}>
                {fixtures?.draws?.total}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>LOSS</TableCell>
              <TableCell sx={{ color: "#14dfe6" }}>
                {fixtures?.loses?.home}
              </TableCell>
              <TableCell sx={{ backgroundColor: "primary.light" }}>
                {fixtures?.loses?.away}
              </TableCell>
              <TableCell sx={{ color: "#14dfe6" }}>
                {fixtures?.loses?.total}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Box>
    </>
  );
};

export default ResultsTable;
