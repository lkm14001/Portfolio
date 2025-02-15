import { Box } from "@mui/material";
import Home from "../Home/Home";
import About from "../About/About";
import Work from "../Work/Work";

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
      <Work />
    </Box>
  );
};

export default Main;
