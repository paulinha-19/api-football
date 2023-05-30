import { motion } from "framer-motion";
import { Box, Typography, Button, Toolbar } from "@mui/material";
import { getUserLocalStorage } from "../../components/utils/utilAuth";
import { Link } from "react-router-dom";

const Home = () => {
  const MotionBox = motion(Box);
  const user = getUserLocalStorage();
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        p: 5,
      }}
    >
      <MotionBox
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Toolbar />
        <Typography variant="h4" sx={{ color: "secondary.light" }}>
          {user} bem-vindo{"(a)"} à aplicação de jogadores de futebol!
        </Typography>
        <Typography>
          Explore informações sobre os melhores jogadores do mundo.
        </Typography>
        <Button
          variant="outlined"
          color="inherit"
          sx={{ mt: 5, borderColor: "secondary.light" }}
        >
          <Link to="/dados" style={{ textDecoration: "none", color: "#fff" }}>
            Começar
          </Link>
        </Button>
      </MotionBox>
    </Box>
  );
};

export default Home;
