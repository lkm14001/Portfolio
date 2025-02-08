import {
  AnimationProps,
  motion,
  MotionStyle,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import Layout from "../Layout/Layout";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import me from "../../assets/me.jpg";
import { TbBikeFilled } from "react-icons/tb";
import React, { useRef } from "react";

interface IGradientText {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

interface IGradientBoxMotion extends IGradientText {
  motionStyle?: MotionStyle;
  id?: string;
  animation?: AnimationProps;
}

const GradientText = ({ sx, children }: IGradientText) => {
  return (
    <Typography
      component="span"
      sx={(theme) => ({
        background:
          "linear-gradient(90deg, rgba(247,119,15,1) 0%, rgba(232,66,15,1) 34%, rgba(246,0,232,1) 100%)",
        color: "transparent",
        backgroundClip: "text",
        fontFamily: "inherit",
        fontSize: "inherit",
        fontWeight: "bolder",
        "-webkit-background-clip": "text",
        "-webkit-text-fill-color": "transparent",
        sx,
      })}
    >
      {children}
    </Typography>
  );
};

const GradientBoxMotion = ({
  sx,
  motionStyle,
  children,
  id,
}: IGradientBoxMotion) => {
  const BoxMotion = motion(Box);

  const gridCellVariant = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

  return (
    <BoxMotion
      id={id}
      sx={[
        {
          background:
            "linear-gradient(338deg, rgba(0,0,0,0.3) 0%, rgba(21,20,24,0.3) 15%, rgba(37,37,42,0.3) 37%, rgba(37,37,40,0.3) 57%, rgba(37,39,41,0.3) 87%, rgba(37,42,45,0.3) 100%)",
          borderRadius: 3,
          backdropFilter: "blur(5px)",
          "-webkit-backdrop-filter": "blur(5px)",
          borderWidth: 2,
          borderColor: "#191919",
          borderStyle: "solid",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      style={motionStyle}
      variants={gridCellVariant}
      initial="hidden"
      animate={"visible"}
    >
      {children}
    </BoxMotion>
  );
};

const About = () => {
  const BoxMotion = motion(Box);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [600, 800], [0, 1]);
  const y = useTransform(scrollY, [600, 700], [100, 0]);
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: false,
    amount: 0.2,
    margin: "-100px",
  });

  const gridVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  return (
    <Layout
      sx={
        {
          // paddingTop: '10vh',
          // position: "relative",
        }
      }
      id="about"
      motionStyle={{ opacity, y }}
    >
      <BoxMotion
        ref={ref}
        style={{ opacity, y }}
        sx={(theme) => ({
          backgroundColor: "homePage.background",
          width: "100%",
          minHeight: "100vh",
          boxSizing: "border-box",
          zIndex: 10,
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          // gridTemplateRows: "repeat(3, 1fr)",
          gap: 2,
          p: 15,
        })}
        variants={gridVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <GradientBoxMotion
          id="grid-cell-1"
          sx={(theme) => ({
            // gridColumn: "span 2"
          })}
        >
          <Typography>Hello</Typography>
        </GradientBoxMotion>
        <GradientBoxMotion
          id="grid-cell-2"
          sx={(theme) => ({
            gridColumn: "span 3",
          })}
        >
          <Typography>Hello</Typography>
        </GradientBoxMotion>
        <GradientBoxMotion
          id="grid-cell-3"
          sx={(theme) => ({
            gridRow: "span 3",
          })}
        >
          <Typography>Hello</Typography>
        </GradientBoxMotion>
        <GradientBoxMotion
          id="grid-cell-4"
          sx={(theme) => ({
            gridColumn: "span 2",
          })}
        >
          <Typography>Hello</Typography>
        </GradientBoxMotion>
        <GradientBoxMotion
          id="grid-cell-5"
          sx={(theme) => ({
            gridColumn: "span 2",
          })}
        >
          <Typography>Hello</Typography>
        </GradientBoxMotion>
        <GradientBoxMotion
          id="grid-cell-6"
          sx={(theme) => ({
            gridColumn: "span 3",
          })}
        >
          <Typography>Hello</Typography>
        </GradientBoxMotion>
        <GradientBoxMotion
          id="grid-cell-7"
          sx={(theme) => ({
            // gridColumn: "span 2",
          })}
        >
          <Typography>Hello</Typography>
        </GradientBoxMotion>
      </BoxMotion>
    </Layout>
  );
};

export default About;
