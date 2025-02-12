import { useState } from "react";
import Carousel from "../../components/Carousel/Carousel";
import Layout from "../Layout/Layout";
import { Box } from "@mui/material";

const Work = () => {
  const projects = ['components will be created in next commit'];

  const [activeProject, setActiveProject] = useState<number>(0);

  const handleProjectChange = (itemNumber: number) => {
    setActiveProject(itemNumber);
  };

  return (
    <Layout
      sx={{
        // width: "100vw",
        // height: "100vh",
        position: "relative",
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
          p: 5,
        })}
      >
        <Carousel
          items={projects}
          onChange={handleProjectChange}
          selectedItem={activeProject}
          containerStyle={(theme) => ({
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 300,
            width: "100%",
            gap: 5,
            border: "1px solid white",
          })}
          itemStyle={(theme) => ({
            width: 300,
          })}
          selectedItemStyle={(theme) => ({
            border: '5px solid white',
          })}
          navigationColor="white"
          navigationSize="large"
          itemAlignment="row"
          itemGap={5}
          hoverStyle={(theme) => ({
            transform: 'scale(1.1)',
            transition: "all 0.3s ease"
          })}
        />
      </Box>
    </Layout>
  );
};

export default Work;
