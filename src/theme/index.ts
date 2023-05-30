import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#2A3543",
      dark: "#131A21",
      light: "#60676E",
      contrastText: "#fff",
    },
    secondary: {
      main: "#757FF4",
      dark: "#4049A8",
      light: "#C0C5F7",
      contrastText: "#000",
    },
    background: {
      default: "#131A21",
    },
    mode: "dark",
  },
});

theme = responsiveFontSizes(theme);

export default theme;
