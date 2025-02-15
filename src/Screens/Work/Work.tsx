import Layout from "../Layout/Layout";
import { Box } from "@mui/material";

const Work = () => {

  return (
    <Layout
      sx={{
        position: "relative",
        boxSizing: "border-box",
      }}
      id="mywork"
    >
      <Box
        component="div"
        sx={(theme) => ({
          // width: "100%",
          height: "100vh",
          boxSizing: "border-box",
          backgroundColor: "homePage.background",
          zIndex: 10,
          // p: 1,
        })}
      >
        
      </Box>
    </Layout>
  );
};

export default Work;
