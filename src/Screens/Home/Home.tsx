import { Box, Button, styled, Typography } from "@mui/material";
import Layout from "../Layout/Layout";
import Profile from "../../components/Profile/Profile";
import { profiles } from "../../utils/constants";
import me from "../../assets/Images/me.jpg";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "../../components/Reveal/Reveal";

import CV from "../../assets/Resume/Leela_Krishna Mohan_Resume.pdf";

export const RightBorderLine = styled(Box)`
  position: absolute;
  right: 2rem;
  top: 0;
  width: 2px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: #f7770f;
    animation: rightBorderGrow 1s ease-out forwards;
  }

  &::after {
    content: "Leela Krishna Mohan";
    position: absolute;
    bottom: 70vh;
    left: 0;
    width: max-content;
    transform-origin: 0 50%;
    transform: rotate(-90deg) translateX(-100%);
    font-size: 1.5rem;
    font-weight: bold;
    background: #f7770f;
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0;
    animation: rightFadeIn 0.5s ease-out forwards;
    animation-delay: 1s;
    letter-spacing: 2px;
    white-space: nowrap;
  }

  @keyframes rightBorderGrow {
    0% {
      height: 0;
    }
    100% {
      height: 40vh;
    }
  }

  @keyframes rightFadeIn {
    0% {
      opacity: 0;
      transform: rotate(-90deg) translateX(-100%) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: rotate(-90deg) translateX(-100%) scale(1);
    }
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

export const LeftBorderLine = styled(Box)`
  position: absolute;
  left: 2rem;
  top: 0;
  width: 2px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 0;
    background: #f7770f;
    animation: borderGrow 1s ease-out forwards;
  }

  &::after {
    content: "Leela Krishna Mohan";
    position: absolute;
    top: 40vh;
    left: 0;
    width: max-content;
    transform-origin: 0 50%;
    transform: rotate(-90deg) translateX(-100%);
    font-size: 1.5rem;
    font-weight: bold;
    background: #f7770f;
    -webkit-background-clip: text;
    color: transparent;
    opacity: 0;
    animation: fadeIn 0.5s ease-out forwards;
    animation-delay: 1s;
    letter-spacing: 2px;
    white-space: nowrap;
  }

  @keyframes borderGrow {
    0% {
      height: 0;
    }
    100% {
      height: 40vh;
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: rotate(-90deg) translateX(-100%) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: rotate(-90deg) translateX(-100%) scale(1);
    }
  }
  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const Home = () => {
  const BoxMotion = motion.create(Box);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 200], [1, 10], { clamp: false });
  const backgroundOpacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <Layout
      sx={(theme) => ({
        width: "100%",
        height: "100vh",
        // paddingTop: "10vh",
        // boxSizing: "border-box",
        position: "relative",
      })}
      motionStyle={{ opacity: backgroundOpacity }}
      id="home"
    >
      <BoxMotion
        // style={{ opacity: backgroundOpacity }}
        // component="div"
        sx={{
          backgroundColor: "homePage.background",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          // gap: 1,
          alignItems: "center",
          boxSizing: "border-box",
          inset: 0,
          position: "fixed",
          zIndex: 2,
        }}
      >
        <LeftBorderLine />
        <RightBorderLine />
        <Box
          component="div"
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 5,
            alignItems: "center",
          })}
        >
          <Profile profilePicture={me} profiles={profiles} />
          <BoxMotion
            sx={(theme) => ({
              zIndex: 10,
            })}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            style={{ scale }}
          >
            <Typography
              sx={(theme) => ({
                color: "white",
                fontWeight: "bolder",
                fontSize: 55,
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                zIndex: 100,
                position: "relative",
                transform: "scale(1.5)",
                [theme.breakpoints.down("sm")]: {
                  fontSize: 38,
                },
                [theme.breakpoints.down("sipad")]: {
                  fontSize: 35,
                },
                [theme.breakpoints.down("xs")]: {
                  fontSize: 28,
                  // transform: "scale(1.3)",
                },
                [theme.breakpoints.down("xxs")]: {
                  fontSize: 22,
                },
              })}
            >
              <Typography
                component={"span"}
                sx={(theme) => ({
                  color: "homePage.navButtons",
                  fontSize: "inherit",
                  fontWeight: "bolder",
                })}
              >
                &lt;
              </Typography>
              <Typography
                component={"span"}
                sx={(theme) => ({
                  color: "inherit",
                  fontSize: "inherit",
                  fontWeight: "bold",
                  fontFamily: "BebasNeue",
                  letterSpacing: 1.5,
                })}
              >
                FULL STACK Developer
              </Typography>
              <Typography
                component={"span"}
                sx={(theme) => ({
                  color: "homePage.navButtons",
                  fontSize: "inherit",
                  fontWeight: "bolder",
                })}
              >
                /&gt;
              </Typography>
            </Typography>
          </BoxMotion>
          <Box
            component="div"
            sx={(theme) => ({
              [theme.breakpoints.down("sipad")]: {
                display: "none",
              },
            })}
          >
            <Typography
              sx={(theme) => ({
                color: "white",
                fontFamily: "BebasNeue",
                fontSize: 28,
              })}
            >
              Need a Web Solution? I’m Your Go-To
              <Typography
                component="span"
                sx={(theme) => ({
                  color: "homePage.navButtons",
                  fontWeight: "bolder",
                  fontSize: "inherit",
                  fontFamily: "inherit",
                })}
              >
                &nbsp;Full-Stack Developer
              </Typography>{" "}
              for the Job!
            </Typography>
          </Box>
          <Box
            sx={(theme) => ({
              [theme.breakpoints.up("sipad")]: {
                display: "none",
              },
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "start",
              [theme.breakpoints.down("sipad")]: {
                paddingX: 8,
              },
              [theme.breakpoints.down("sm")]: {
                paddingX: 6,
              },
              // [theme.breakpoints.down('sipad')]: {
              //   paddingX: 10
              // }
            })}
          >
            <Typography
              sx={(theme) => ({
                color: "white",
                fontWeight: "bolder",
                fontFamily: "BebasNeue",
                letterSpacing: 2,
              })}
            >
              Hey,
              <Reveal>
                <Typography
                  component={"span"}
                  variant="h5"
                  sx={(theme) => ({
                    color: "homePage.navButtons",
                    fontWeight: "bolder",
                    fontFamily: "BebasNeue",
                    letterSpacing: 2,
                  })}
                >
                  I'm LEELA KRISHNA
                </Typography>
              </Reveal>
            </Typography>
            <Typography
              sx={(theme) => ({
                color: "grey",
                fontFamily: "BebasNeue",
                letterSpacing: 2,
              })}
            >
              Software Engineer. A self-taught developer with an interest in the
              world of web.
            </Typography>
          </Box>
            <Button
              disableRipple
              variant="outlined"
              sx={(theme) => ({
                fontSize: "1rem",
                borderRadius: 48,
                borderColor: "homePage.border",
                borderWidth: 3,
                paddingX: 4,
                paddingY: 1.5,
                color: "white",
                fontWeight: "bolder",
                textTransform: "capitalize",
                transition: "all 0.3s ease",
                [theme.breakpoints.down("xs")]: {
                  fontSize: "0.8rem",
                },
                "&:hover": {
                  backgroundColor: "homePage.navButtons",
                  transform: "scale(1.2)",
                },
              })}
              onClick={() => {
                window.open(CV,"_blank");
              }}
            >
              Download my CV
            </Button>
        </Box>
      </BoxMotion>
    </Layout>
  );
};

export default Home;
