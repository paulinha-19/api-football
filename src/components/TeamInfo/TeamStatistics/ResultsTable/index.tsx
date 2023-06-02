import { IFixtures, ITeam } from "../interface";
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
    <Box sx={{ overflow: "auto" }}>
      <Toolbar />
      <Typography variant="h5" component="h5">
        Resultados
      </Typography>
      <Toolbar />
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        {team?.logo && (
          <img
            src={team.logo}
            alt="Team Logo"
            style={{ width: 100, height: 100 }}
          />
        )}
      </Box>
      <Box sx={{ width: "100%", display: "table", tableLayout: "fixed" }}>
        <Table sx={{ mt: 3 }}>
          <TableHead sx={{ backgroundColor: "primary.main" }}>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>CASA</TableCell>
              <TableCell>FORA</TableCell>
              <TableCell>TOTAL</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>JOGOS</TableCell>
              <TableCell>{fixtures?.played?.home}</TableCell>
              <TableCell sx={{ backgroundColor: "primary.light" }}>
                {fixtures?.played?.away}
              </TableCell>
              <TableCell>{fixtures?.played?.total}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>VITÓRIAS</TableCell>
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
              <TableCell>EMPATES</TableCell>
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
              <TableCell>DERROTAS</TableCell>
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
    </Box>
  );
};

export default ResultsTable;
