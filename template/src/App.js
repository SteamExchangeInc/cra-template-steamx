import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import { useSelector } from "react-redux";
import { useMemo } from "react";

import { BrowserRouter } from "react-router-dom";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main className="app">
          <h1>SteamX - Rails Network - dApp</h1>
        </main>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
