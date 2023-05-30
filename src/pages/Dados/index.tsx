import { Box } from "@mui/material";
import Option from "../../components/Option";
import TeamInfo from "../../components/TeamInfo";
import StatesProvider from "../../context/States";
const Dados = () => {
  return (
    <StatesProvider>
      <Box>
        <Option />
        <TeamInfo />
      </Box>
    </StatesProvider>
  );
};

export default Dados;
