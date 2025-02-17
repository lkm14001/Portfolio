import { motion, useScroll, useTransform } from "motion/react";
import Layout from "../Layout/Layout";
import {
  Box,
  BoxProps,
  styled,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import me from "../../assets/Images/me.jpg";
import React from "react";
import Reveal from "../../components/Reveal/Reveal";
import { LeftBorderLine, RightBorderLine } from "../Home/Home";
import Marquee from "react-fast-marquee";
import {
  ApolloGraphQLIcon,
  BootstrapIcon,
  CSSIcon,
  ExpressJsIcon,
  GraphQLIcon,
  HTMLIcon,
  JSIcon,
  MongoDBIcon,
  MuiIcon,
  NodeJsIcon,
  PostmanIcon,
  ReactIcon,
  ReduxIcon,
  TSIcon,
} from "../../components/AboutScreenComponents/SVG/SVGs";
import AnimatedText from "../../components/AnimatedText/AnimatedText";
import GradientText from "../../components/GradientText/GradientText";

const CustomMarquee = styled(Marquee)<BoxProps>(({ theme }) => ({}));

const About = () => {
  const BoxMotion = motion.create(Box);
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
          gap: 5,
          px: 10,
          py: 5,
          flexDirection: "column",
          [theme.breakpoints.down("sm")]: {
            px: 5,
          },
        })}
      >
        <RightBorderLine />
        <LeftBorderLine />
        <Box
          component="div"
          sx={(theme) => ({
            // mb: -5,
            [theme.breakpoints.down("sm")]: {
              mb: -5,
            },
          })}
        >
          <GradientText
            sx={(theme) => ({
              fontSize: 150,
              fontFamily: "Bebasneue",
              fontWeight: "bolder",
              transition: "all 0.3s ease",
              [theme.breakpoints.down("sipad")]: {
                fontSize: 100,
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: 80,
              },
              [theme.breakpoints.down("xxs")]: {
                fontSize: 70,
              },
            })}
          >
            <AnimatedText
              component="span"
              sx={(theme) => ({
                // width: 750,
                fontSize: 150,
                fontFamily: "Bebasneue",
                fontWeight: "bolder",
                transition: "all 0.3s ease",
                [theme.breakpoints.down("sipad")]: {
                  fontSize: 100,
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 80,
                },
                [theme.breakpoints.down("xxs")]: {
                  fontSize: 70,
                },
              })}
              text="Bonjour !"
            />
          </GradientText>
        </Box>
        <Box
          component="div"
          sx={(theme) => ({
            width: "100%",
            height: "100%",
            display: "flex",
            gap: 10,
            // mt: -10,
            alignItems: "center",
            justifyContent: "center",
            boxSizing: "border-box",
            [theme.breakpoints.down("lg")]: {
              gap: 5,
            },
            [theme.breakpoints.down("md")]: {
              gap: 3,
            },
            [theme.breakpoints.down("sipad")]: {
              flexDirection: "column",
            },
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
              transition: "all 0.3s ease",
              [theme.breakpoints.down("lg")]: {
                width: 290,
                height: 290,
              },
              [theme.breakpoints.down("md")]: {
                width: 260,
                height: 260,
              },
              [theme.breakpoints.down("sm")]: {
                width: 230,
                height: 230,
              },
            })}
          >
            <Box
              component="img"
              sx={(theme) => ({
                width: 280,
                height: 280,
                border: "1px solid #4c4c4c",
                borderRadius: 50,
                transition: "all 0.3s ease",
                [theme.breakpoints.down("lg")]: {
                  width: 250,
                  height: 250,
                },
                [theme.breakpoints.down("md")]: {
                  width: 220,
                  height: 220,
                },
                [theme.breakpoints.down("sm")]: {
                  width: 210,
                  height: 210,
                },
              })}
              src={me}
            />
            {/*  */}
          </Box>
          <Box
            component="div"
            sx={(theme) => ({
              width: 800,
              [theme.breakpoints.between("lg", "md")]: {
                width: 720,
                fontSize: 20,
              },
              [theme.breakpoints.down("sipad")]: {
                width: "100%",
              },
            })}
          >
            <Typography
              sx={(theme) => ({
                color: "white",
                fontWeight: "bold",
                fontFamily: "Sriracha",
                fontSize: 25,
                transition: "all 0.3s ease",
                // letterSpacing: 1,
                [theme.breakpoints.down("md")]: {
                  fontSize: 20,
                },
                [theme.breakpoints.down("ipad")]: {
                  fontSize: 18,
                },
                [theme.breakpoints.down("sm")]: {
                  fontSize: 15,
                },
                [theme.breakpoints.down("xxs")]: {
                  textAlign: "justify",
                },
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
                    letterSpacing: 2,
                  })}
                >
                  I'm Leela Krishna.
                </Typography>
              </Reveal>
              &nbsp;&nbsp; I'm a Full Stack Developer ( MERN ) based in Vizag,
              India. Continouosly seeking the latest trends, I enjoy taking on
              new challenges and learning new technologies. Beyond coding, I’m
              always eager to explore new technologies, especially Web3 and
              blockchain development. In my free time, you’ll find me playing
              basketball with friends, binge-watching Netflix series, or going
              on bike rides. Let’s
              <GradientText
                sx={{ fontFamily: "inherit", fontWeight: "bolder" }}
              >
                &nbsp;connect and build something amazing!
              </GradientText>
            </Typography>
          </Box>
        </Box>
        <Box
          component="div"
          sx={(theme) => ({
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            gap: 3,
            mt: 3,
            [theme.breakpoints.down("sm")]: {
              mt: -2,
            },
          })}
        >
          <GradientText
            sx={(theme) => ({
              fontFamily: "Sriracha",
              fontSize: 25,
              [theme.breakpoints.down("md")]: {
                fontSize: 20,
              },
              [theme.breakpoints.down("ipad")]: {
                fontSize: 18,
              },
              [theme.breakpoints.down("sm")]: {
                fontSize: 15,
              },
            })}
          >
            ⚡ Where Innovation Meets Code – My Tech Stack 👇
          </GradientText>
          <CustomMarquee
            pauseOnHover
            sx={(theme) => ({
              width: "70%",
              transition: "all 0.3s ease",
              [theme.breakpoints.down("xl")]: {
                width: "80%",
              },
              [theme.breakpoints.down("lg")]: {
                width: "90%",
              },
              [theme.breakpoints.down("ipad")]: {
                width: "100%",
              },
            })}
          >
            <Box
              component="div"
              sx={(theme) => ({
                display: "flex",
                alignItems: "center",
                gap: 5,
                "& > svg": {
                  [theme.breakpoints.down("sipad")]: {
                    width: 100,
                    height: 100,
                  },
                  [theme.breakpoints.down("sm")]: {
                    width: 80,
                    height: 80,
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: 70,
                    height: 70,
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: 60,
                    height: 60,
                  },
                },
              })}
            >
              <HTMLIcon size={150} />
              <CSSIcon size={150} />
              <JSIcon size={120} />
              <TSIcon size={120} />
              <BootstrapIcon size={150} />
              <MuiIcon size={150} />
              <ReactIcon size={150} color="#1584a9" />
              <ReduxIcon size={150} />
              <NodeJsIcon size={150} />
              <ExpressJsIcon size={150} color="white" />
              <MongoDBIcon size={150} />
              <GraphQLIcon size={150} />
              <ApolloGraphQLIcon size={150} color="white" />
              <PostmanIcon size={130} />
            </Box>
          </CustomMarquee>
        </Box>
      </BoxMotion>
    </Layout>
  );
};

export default About;
