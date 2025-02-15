import { Route, Routes } from "react-router-dom";
import Home from "./Screens/Home/Home";
import About from "./Screens/About/About";
import Main from "./Screens/Main/MainScreen";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "./utils/theme";
import MainLayout from "./Screens/Main/MainLayout";
import { useState } from "react";
import Loading from "./Screens/Loading/Loading";
import Work from "./Screens/Work/Work";

const App = () => {
  const theme = getDesignTokens();
  const [loading, setLoading] = useState(true);
  setTimeout(() => {
    setLoading(false);
  }, 3000);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {loading ? (
        <Loading />
      ) : (
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" index element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/my-work" element={<Work />} />
          </Route>
        </Routes>
      )}
    </ThemeProvider>
  );
};

export default App;
