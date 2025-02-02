import { Box } from "@mui/material";
import Home from "../Home/Home";
import About from "../About/About";

const Main = () => {
  return (
    <Box
      component="div"
      sx={{
        boxSizing: "border-box",
        backgroundColor: 'homePage.background',
        // opacity: 0.95
      }}
      className="main-class"
    >
      <Home />
      <About />
    </Box>
  );
};

export default Main;
