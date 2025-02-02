import { Box } from "@mui/material";
import { motion } from "motion/react";
import logo from "../../assets/logo.png";

const Loading = () => {
  return (
    <Box
      component="div"
      sx={(theme) => ({
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'homePage.background'
      })}
    >
      <motion.img
        initial={{ scale: 0 }}
        animate={{ scale: [0.8, 1.2, 0.8] }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          // repeatDelay: 1,
        }}
        style={{
          width: 300,
          height: 270,
          filter: 'invert(1)'
        }}
        src={logo}

      />
    </Box>
  );
};

export default Loading;
