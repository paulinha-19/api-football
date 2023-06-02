import { Box, Typography, Toolbar, Avatar } from "@mui/material";
import {
  getUserLocalStorage,
  getSubscriptionLocalStorage,
} from "../../components/utils/utilAuth";

const Perfil = () => {
  const user = getUserLocalStorage();
  const subscription = getSubscriptionLocalStorage();
  const formattedEnd = subscription ? formatDate(subscription?.end) : "";

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}`;
    return `${formattedDate} ${formattedTime}`;
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <Toolbar />
      <Toolbar />
      <Avatar sx={{ mb: 2, width: 56, height: 56 }}>
        {user ? user.charAt(0).toUpperCase() : ""}
      </Avatar>
      <Typography variant="h4" gutterBottom>
        {user}
      </Typography>
      <Typography variant="overline" gutterBottom>
        Plano: {subscription?.plan}
      </Typography>
      <Typography
        variant="overline"
        gutterBottom
        sx={{
          backgroundColor:
            subscription?.active === true ? "secondary.dark" : "red",
          display: "inline-block",
          padding: "4px",
          borderRadius: "4px",
        }}
      >
        Ativo: {String(subscription?.active)}
      </Typography>
      <Typography variant="overline" gutterBottom>
        Fim: {formattedEnd}
      </Typography>
    </Box>
  );
};

export default Perfil;
