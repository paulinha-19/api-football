import { createTheme, responsiveFontSizes } from '@mui/material';

let theme = createTheme({
    palette: {
      primary: {
        main: "#104175",
        dark: "#0A1929",
        light: "#284D75",
        contrastText: "#fff"
      },
      secondary: {
        main: "#979797",
        dark: "#4A4343",//
        light: "#E3E3E3",
        contrastText: "#000"
      },
      background: {
        paper: "#fff"
      }
    },
  });
  
  theme = responsiveFontSizes(theme);
  
  export default theme;
  