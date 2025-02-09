import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Box } from "@mui/material";

interface RevealProps {
  children: JSX.Element;
  inline? : boolean;
}

const Reveal: React.FC<RevealProps> = ({ children, inline }) => {
  const MotionBox = motion(Box<"div">);

  const ref = useRef(null);
  const isInView = useInView(ref);
  const textAnimation = useAnimation();
  const slideAnimation = useAnimation();

  useEffect(() => {
    textAnimation.start("visible");
    slideAnimation.start("visible");
  }, [isInView]);


  return (
    <>
      <Box
        component="div"
        ref={ref}
        sx={(theme) => ({
          position: "relative",
          overflow: "hidden",
          width:'fit-content',
          ...(inline ? { display: "inline" } : {}),
        })}
      >
        <MotionBox
          sx={(theme) => ({
            ...(inline ? { display: "inline" } : {}),
          })}
          variants={{
            hidden: { opacity: 0, y: 75 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={textAnimation}
          transition={{ delay: 0.25, duration: 0.8 }}
        >
          {children}
        </MotionBox>
        <MotionBox
          component={"div"}
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" },
          }}
          initial="hidden"
          animate={slideAnimation}
          transition={{ duration: 0.8, ease: "easeIn" }}
          sx={(theme) => ({
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            backgroundColor: "homePage.navButtons",
            zIndex: 100,
          })}
        />
      </Box>
    </>
  );
};

export default Reveal;