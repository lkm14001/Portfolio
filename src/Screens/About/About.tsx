import {
  AnimationProps,
  motion,
  MotionStyle,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";
import Layout from "../Layout/Layout";
import { Box, BoxProps, styled, SxProps, Theme, Typography } from "@mui/material";
import me from "../../assets/me.jpg";
import React from "react";
import Reveal from "../../components/Reveal/Reveal";
import { LeftBorderLine, RightBorderLine } from "../Home/Home";
import Marquee from 'react-fast-marquee'

interface IGradientText {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

const GradientText = ({ sx, children }: IGradientText) => {
  return (
    <Typography
      component="span"
      sx={[
        {
          background:
            "linear-gradient(90deg, rgba(247,119,15,1) 0%, rgba(232,66,15,1) 34%, rgba(246,0,232,1) 100%)",
          color: "transparent",
          backgroundClip: "text",
          fontFamily: "inherit",
          fontSize: "inherit",
          fontWeight: "bolder",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Typography>
  );
};

const CustomMarquee = styled(Marquee)<BoxProps>(({theme}) => ({}));

const About = () => {
  const BoxMotion = motion(Box);
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [600, 800], [0, 1]);
  const y = useTransform(scrollY, [600, 700], [100, 0]);

  return (
    <Layout
      sx={{
        // width: "100%",
        // height: "100vh",
        position: "relative",
      }}
      id="about"
      motionStyle={{ opacity, y }}
    >
      <BoxMotion
        style={{ opacity, y }}
        sx={(theme) => ({
          backgroundColor: "homePage.background",
          width: "100%",
          minHeight: "100vh",
          boxSizing: "border-box",
          zIndex: 10,
          display: "flex",
          alignItems: "center",
          gap: 2,
          px: 10,
          py: 5,
          flexDirection: "column",
        })}
      >
        <RightBorderLine />
        <LeftBorderLine />
        <Box component="div" sx={(theme) => ({})}>
          <GradientText
            sx={(theme) => ({
              // width: 750,
              fontSize: 150,
              fontFamily: "Bebasneue",
              fontWeight: "bolder",
              // transform: 'scaleX(2)'
            })}
          >
            {/* Code. Create. Conquer. Exploring Tomorrow’s Tech, and Riding Through Life with Code & Passion! */}
            Bonjour !
          </GradientText>
        </Box>
        <Box
          component="div"
          sx={(theme) => ({
            width: "100%",
            height: "100%",
            display: "flex",
            gap: 10,
            // flexDirection: 'column',
            alignItems: "center",
            justifyContent: "center",
          })}
        >
          <Box
            component="div"
            sx={(theme) => ({
              position: "relative",
              width: 320,
              height: 320,
              flexShrink: 0,
              background: "#262626",
              borderRadius: 50,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            })}
          >
            <Box
              component="img"
              sx={(theme) => ({
                width: 280,
                height: 280,
                // position: "absolute",
                // top: 35,
                // left: 35,
                border: "1px solid #4c4c4c",
                borderRadius: 50,
              })}
              src={me}
            />
            {/*  */}
          </Box>
          <Box
            component="div"
            sx={(theme) => ({
              // width: 650
            })}
          >
            <Typography
              sx={(theme) => ({
                color: "white",
                fontFamily: "Bebasneue",
                fontSize: 25,
                width: 800,
              })}
            >
              Hey There,&nbsp;&nbsp;
              <Reveal inline>
                <Typography
                  component="span"
                  sx={(theme) => ({
                    color: "homePage.navButtons",
                    fontFamily: "inherit",
                    fontSize: "inherit",
                    fontWeight: "bolder",
                    letterSpacing: 1
                  })}
                >
                  I'm Leela Krishna.
                </Typography>
              </Reveal>
              &nbsp;&nbsp;I'm a Full Stack Developer based in Vizag, India.
              Passionate about crafting dynamic and user-friendly web
              applications. Continouosly seeking the latest trends, I enjoy
              taking on new challenges and learning new technologies. Beyond
              coding, I’m always eager to explore new technologies, especially
              Web3 and blockchain development. In my free time, you’ll find me
              playing basketball with friends, binge-watching Netflix series, or
              going on bike rides to unwind. Let’s connect and build something
              amazing! 🚀
            </Typography>
          </Box>
          <Box component="div" sx={(theme) => ({

          })}>

          </Box>
        </Box>
        <Box component="div" sx={(theme) => ({

        })}>

        </Box>
      </BoxMotion>
    </Layout>
  );
};

export default About;
