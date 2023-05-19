import Layout from "./components/Layout";
import Rotas from "./routes";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout>
          <Rotas />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default App
