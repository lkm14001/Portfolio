import Layout from "../Layout/Layout";
import { Box, Link, Typography } from "@mui/material";
import { projects } from "../../utils/constants";

import { FaLink } from "react-icons/fa";
import { ImGithub } from "react-icons/im";

import AnimatedText from "../../components/AnimatedText/AnimatedText";
import GradientText from "../../components/GradientText/GradientText";
import { motion } from "motion/react";

const Work = () => {
  const ProjectDescription = ({
    description,
    skills,
    websiteLink,
    githubLink,
  }: {
    description: string;
    skills: string[];
    websiteLink?: string;
    githubLink?: string;
  }) => (
    <Box
      component="div"
      sx={(theme) => ({
        display: "flex",
        flexDirection: "column",
        gap: 1,
        alignItems: "start",
      })}
    >
      <Typography
        sx={(theme) => ({
          fontFamily: "Bebasneue",
          fontSize: 22,
          transition: "all 0.3s ease",
          [theme.breakpoints.down("md")]: {
            fontSize: 20,
          },
          [theme.breakpoints.down("ipad")]: {
            fontSize: 16,
          },
        })}
      >
        {description}
      </Typography>
      <GradientText
        sx={(theme) => ({
          fontSize: 22,
          fontFamily: "Bebasneue",
          fontWeight: "bolder",
          transition: "all 0.3s ease",
          [theme.breakpoints.down("md")]: {
            fontSize: 20,
          },
          [theme.breakpoints.down("ipad")]: {
            fontSize: 16,
          },
        })}
      >
        Skills: &nbsp;&nbsp;
        <Box
          component="div"
          sx={(theme) => ({
            display: "inline-flex",
            gap: 1,
            alignItems: "center",
            flexWrap: "wrap",
          })}
        >
          {skills.map((skill, index) => (
            <Typography
              sx={(theme) => ({
                fontSize: "inherit",
                color: "white",
                fontFamily: "inherit",
              })}
              key={index}
            >
              {skill}
            </Typography>
          ))}
        </Box>
      </GradientText>
      <Box
        component="div"
        sx={(theme) => ({
          display: "flex",
          gap: 2,
          alignItems: "center",
        })}
      >
        {websiteLink && (
          <GradientText
            sx={(theme) => ({
              fontSize: 22,
              fontFamily: "Bebasneue",
              fontWeight: "bolder",
              transition: "all 0.3s ease",
              color: "white",
              [theme.breakpoints.down("md")]: {
                fontSize: 20,
              },
              [theme.breakpoints.down("ipad")]: {
                fontSize: 16,
              },
            })}
          >
            <Link
              href={websiteLink}
              target="_blank"
              sx={(theme) => ({
                textDecoration: "none",
                display: "flex",
                gap: 1,
                alignItems: "center",
              })}
            >
              <Typography
                sx={(theme) => ({
                  fontSize: "inherit",
                  fontFamily: "inherit",
                  color: "inherit",
                })}
              >
                Webiste Link
              </Typography>
              <FaLink color="white" size={20} />
            </Link>
          </GradientText>
        )}
        {githubLink && (
          <GradientText
            sx={(theme) => ({
              fontSize: 22,
              fontFamily: "Bebasneue",
              fontWeight: "bolder",
              transition: "all 0.3s ease",
              color: "white",
              [theme.breakpoints.down("md")]: {
                fontSize: 20,
              },
              [theme.breakpoints.down("ipad")]: {
                fontSize: 16,
              },
            })}
          >
            <Link
              href={githubLink}
              target="_blank"
              sx={(theme) => ({
                textDecoration: "none",
                display: "flex",
                gap: 1,
                alignItems: "center",
              })}
            >
              <ImGithub color="white" size={20} />
              <Typography
                sx={(theme) => ({
                  fontSize: "inherit",
                  fontFamily: "inherit",
                  color: "inherit",
                })}
              >
                Github Link
              </Typography>
              <FaLink color="white" size={20} />
            </Link>
          </GradientText>
        )}
      </Box>
    </Box>
  );

  const ProjectImage = ({ image }: { image: string }) => (
    <>
      <Box
        component="img"
        src={image}
        sx={(theme) => ({
          width: "100%",
          height: 350,
        })}
      />
    </>
  );

  const MotionBox = motion.create(Box<"div">);

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
          minHeight: "100vh",
          boxSizing: "border-box",
          backgroundColor: "homePage.background",
          zIndex: 10,
          p: 5,
          display: "flex",
          flexDirection: "column",
          color: "white",
          [theme.breakpoints.down("xs")]: {
            p: 3,
          },
        })}
      >
        <Box
          component="div"
          sx={(theme) => ({
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
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
              [theme.breakpoints.down("xs")]: {
                fontSize: 60,
              },
            })}
          >
            <AnimatedText
              component="span"
              sx={(theme) => ({
                // width: 750,
                fontSize: 120,
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
                [theme.breakpoints.down("xs")]: {
                  fontSize: 50,
                },
              })}
              text="Featured Works"
            />
          </GradientText>
        </Box>
        {projects.map((project) => (
          <>
            <Box
              component="div"
              sx={(theme) => ({
                display: "flex",
                gap: 5,
                alignItems: "center",
                justifyContent: "center",
                [theme.breakpoints.down("sm")]: {
                  flexDirection: "column",
                },
                overflowX: "hidden",
              })}
              key={project.id}
            >
              <Box
                component="div"
                sx={(theme) => ({
                  width: project.id % 2 === 0 ? "50%" : 450,
                  height: "100%",
                  [theme.breakpoints.down("xl")]: {
                    width: project.id % 2 === 0 ? "60%" : 450,
                  },
                  [theme.breakpoints.down("lg")]: {
                    width: project.id % 2 === 0 ? "75%" : 350,
                  },
                  [theme.breakpoints.down("md")]: {
                    width: project.id % 2 === 0 ? "80%" : 350,
                  },
                  [theme.breakpoints.down("sm")]: {
                    order: project.id % 2 === 0 && 1,
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: project.id % 2 === 0 ? "95%" : 300,
                  },
                })}
              >
                {project.id % 2 === 0 ? (
                  <MotionBox
                    initial={{ x: project.id % 2 === 0 ? -300 : 100 }}
                    whileInView={{
                      x: 0,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    viewport={{
                      once: true,
                    }}
                    component="div"
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      alignItems: "start",
                      justifyContent: "center",
                    })}
                  >
                    <GradientText
                      sx={(theme) => ({
                        fontSize: 25,
                        fontFamily: "Bebasneue",
                        letterSpacing: 1,
                      })}
                    >
                      {project.title}
                    </GradientText>
                    <ProjectDescription
                      description={project.description}
                      skills={project.skills}
                      websiteLink={project.websiteLink}
                      githubLink={project.githubLink}
                    />
                  </MotionBox>
                ) : (
                  <MotionBox
                    initial={{ x: project.id % 2 !== 0 ? -200 : 100 }}
                    whileInView={{
                      x: 0,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    viewport={{
                      once: true,
                    }}
                    component="div"
                    sx={(theme) => ({})}
                  >
                    <ProjectImage image={project.image} />
                  </MotionBox>
                )}
              </Box>
              <Box
                component="div"
                sx={(theme) => ({
                  width: project.id % 2 !== 0 ? "50%" : 450,
                  height: "100%",
                  [theme.breakpoints.down("xl")]: {
                    width: project.id % 2 !== 0 ? "60%" : 450,
                  },
                  [theme.breakpoints.down("lg")]: {
                    width: project.id % 2 !== 0 ? "75%" : 350,
                  },
                  [theme.breakpoints.down("xs")]: {
                    width: project.id % 2 !== 0 ? "95%" : 300,
                  },
                })}
              >
                {project.id % 2 !== 0 ? (
                  <MotionBox
                    initial={{ x: project.id % 2 === 0 ? -300 : 100 }}
                    whileInView={{
                      x: 0,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    viewport={{
                      once: true,
                    }}
                    component="div"
                    sx={(theme) => ({
                      display: "flex",
                      flexDirection: "column",
                      gap: 2,
                      alignItems: "start",
                      justifyContent: "center",
                      [theme.breakpoints.down("sm")]: {
                        // order: 2,
                      },
                    })}
                  >
                    <GradientText
                      sx={(theme) => ({
                        fontSize: 25,
                        fontFamily: "Bebasneue",
                        letterSpacing: 1,
                      })}
                    >
                      {project.title}
                    </GradientText>
                    <ProjectDescription
                      description={project.description}
                      skills={project.skills}
                      websiteLink={project.websiteLink}
                      githubLink={project.githubLink}
                    />
                  </MotionBox>
                ) : (
                  <MotionBox
                    initial={{ x: project.id % 2 !== 0 ? -200 : 100 }}
                    whileInView={{
                      x: 0,
                      transition: {
                        duration: 0.3,
                      },
                    }}
                    viewport={{
                      once: true,
                    }}
                    sx={(theme) => ({
                      [theme.breakpoints.down("sm")]: {
                        order: 1,
                      },
                    })}
                  >
                    <ProjectImage image={project.image} />
                  </MotionBox>
                )}
              </Box>
            </Box>
          </>
        ))}
      </Box>
    </Layout>
  );
};

export default Work;
