import { Box } from "@mui/material";
import Home from "../Home/Home";
import About from "../About/About";
import Work from "../Work/Work";
import Contact from "../Contact/Contact";

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
      <Contact />
    </Box>
  );
};

export default Main;
