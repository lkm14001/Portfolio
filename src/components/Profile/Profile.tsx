import { Box, IconButton, SvgIconTypeMap, Typography } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { motion } from "motion/react";
import React from "react";
import AboutInfoTooltip from "./AboutInfoTooltip";
import Reveal from "../Reveal/Reveal";

interface SocialLinks {
  id: number;
  name: string;
  url: string;
  icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}

interface ProfileProps {
  profilePicture: string;
  profiles: SocialLinks[];
}

const Profile = ({ profilePicture, profiles }: ProfileProps) => {
  const BoxLink = motion(Box<"a">);

  return (
    <Box
      component="div"
      sx={(theme) => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 5,
        transition: "all 0.3s ease",
        [theme.breakpoints.down('sipad')]: {
          flexDirection: 'column',
        }
      })}
    >
      <Box
        component="div"
        sx={(theme) => ({
          position: "relative",
          width: "300px",
          height: "300px",
          borderRadius: "50%",
          border: "2px solid",
          borderColor: "homePage.border",
          padding: 3,
          boxSizing: "border-box",
          display: "flex",
          justifyContent: "flex-start",
          gap: 5,
          transition: "all 0.3s ease",
          [theme.breakpoints.down("xxs")]: {
            width: "240px",
            height: "240px",
          },
        })}
      >
        <Box
          component="img"
          src={profilePicture}
          sx={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid",
            borderColor: "homePage.border",
          }}
        />
        <Box component="div" sx={{}}>
          {profiles.map((profile, index: number) => {
            const left = index !== 2 ? (index !== 0 ? 93 : 75) : 75;
            return (
              <BoxLink
                component="a"
                target="_blank"
                sx={{
                  position: "absolute",
                  top: `${index * 40}%`,
                  left: `${left}%`,
                  // background: 'white',
                  borderRadius: "50%",
                }}
                href={profile.url}
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  scale: { type: "spring", visualDuration: 0.3, bounce: 0.7 },
                  // type: 'spring',
                  // duration: 0.8,
                  // delay: 0.5,
                  // ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <IconButton
                  sx={{
                    backgroundColor: "homePage.background",
                    "&:hover": {
                      transform: "scale(1.2)",
                      transition: "all 0.3s ease",
                    },
                  }}
                  disableRipple
                >
                  {React.createElement(profile.icon, {
                    sx: { fontSize: 40, color: "white" },
                  })}
                </IconButton>
              </BoxLink>
            );
          })}
        </Box>
      </Box>
      <Box
        component="div"
        sx={(theme) => ({
          [theme.breakpoints.down("sipad")]: {
            display: "none",
          },
          color: "white",
          width: "50%",
          display: "flex",
          flexDirection: "column",
        })}
      >
        <Typography
          component="span"
          sx={(theme) => ({
            fontSize: "2rem",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            [theme.breakpoints.down("md")]: {
              fontSize: "1.7rem",
            },
            [theme.breakpoints.down("ipad")]: {
              fontSize: "1.3rem",
            },
          })}
        >
          Hey, I'm
        </Typography>
        <Reveal>
          <Typography
            component="h1"
            sx={(theme) => ({
              fontSize: "5rem",
              fontWeight: "bolder",
              fontFamily: "BebasNeue",
              color: "homePage.navButtons",
              transition: "all 0.3s ease",
              [theme.breakpoints.down("md")]: {
                fontSize: "4rem",
              },
              [theme.breakpoints.down("ipad")]: {
                fontSize: "3.5rem",
              },
              [theme.breakpoints.down('sipad')]: {
                fontSize: '1.5rem'
              }
            })}
          >
            Leela Krishna Mohan
          </Typography>
        </Reveal>
        <Typography
          component="span"
          sx={(theme) => ({
            fontSize: "2rem",
            fontWeight: "bold",
            transition: "all 0.3s ease",
            [theme.breakpoints.down("md")]: {
              fontSize: "1.7rem",
            },
            [theme.breakpoints.down("ipad")]: {
              fontSize: "1.3rem",
            },
          })}
        >
          Software Engineer.{" "}
          <Typography
            component="span"
            sx={(theme) => ({
              fontSize: "inherit",
              fontWeight: "inherit",
              color: "grey",
              transition: "all 0.3s ease",
              [theme.breakpoints.down("md")]: {
                fontSize: "1.7rem",
              },
              [theme.breakpoints.down("ipad")]: {
                fontSize: "1.3rem",
              },
            })}
          >
            A self-taught developer with an interest in the world of web.
          </Typography>
        </Typography>
      </Box>
      {/* <Box
        component="div"
        sx={(theme) => ({
          [theme.breakpoints.down('sipad')]: {
            display: "none"
          }
        })}
      >
        <AboutInfoTooltip />
      </Box> */}
    </Box>
  );
};

export default Profile;
