import React from "react";
import Layout from "../Layout/Layout";
import { Box, Link, TextField, Typography } from "@mui/material";
import { LeftBorderLine, RightBorderLine } from "../Home/Home";
import GradientText from "../../components/GradientText/GradientText";
import AnimatedText from "../../components/AnimatedText/AnimatedText";

import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <Layout
      sx={{
        // width: "100%",
        // height: "100vh",
        position: "relative",
      }}
      id="contact"
    >
      <Box
        component={"div"}
        sx={(theme) => ({
          width: "100%",
          minHeight: "100vh",
          boxSizing: "border-box",
          background: "homePage.background",
          pt: 5,
          pl: 5,
          pr: 5,
          pb: 2,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          zIndex: 100,
          //   justifyContent: "space-between",
          gap: 5,
        })}
      >
        <RightBorderLine />
        <LeftBorderLine />
        <GradientText
          sx={(theme) => ({
            fontSize: 150,
            fontFamily: "Bebasneue",
            fontWeight: "bolder",
            transition: "all 0.3s ease",
            [theme.breakpoints.down("ipad")]: {
              fontSize: 80,
            },
            [theme.breakpoints.down("xs")]: {
              fontSize: 50,
            },
            [theme.breakpoints.down("xxs")]: {
              fontSize: 40,
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
              [theme.breakpoints.down("ipad")]: {
                fontSize: 80,
              },
              [theme.breakpoints.down("xs")]: {
                fontSize: 50,
              },
              [theme.breakpoints.down("xxs")]: {
                fontSize: 40,
              },
            })}
            text="Let's Connect !"
          />
        </GradientText>
        <Box
          component={"div"}
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            gap: 2,
            justifyContent: "center",
            alignItems: "center",
            mt: -10,
            transition: "all 0.3s ease",
            [theme.breakpoints.down("ipad")]: {
              mt: "auto",
            },
          })}
        >
          <TextField
            variant="standard"
            label="Name"
            sx={(theme) => ({
              "& .MuiInput-root": {
                width: 400,
                minHeight: 50,
                color: "white",
                fontFamily: "Sriracha",
                // textTransform: 'lowercase',
                letterSpacing: 2,
                // Border before focus
                "&:before": {
                  borderColor: "white",
                  borderWidth: "3px",
                  [theme.breakpoints.down("xs")]: {
                    width: 300,
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: 270,
                  },
                },
                // Border on focus
                "&:after": {
                  borderColor: "gray",
                  borderWidth: "3px",
                  [theme.breakpoints.down("xs")]: {
                    width: 300,
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: 270,
                  },
                },
                [theme.breakpoints.down("xs")]: {
                  width: 300,
                },
                [theme.breakpoints.down("xxs")]: {
                  width: 270,
                },
              },
              // Label
              "& .MuiInputLabel-standard": {
                color: "white",
                fontWeight: "bold",
                fontFamily: "Sriracha",
                letterSpacing: 2,
                fontSize: 30,
                "&.Mui-focused": {
                  color: "gray",
                },
              },
            })}
          />
          <TextField
            variant="standard"
            label="Email"
            sx={(theme) => ({
              "& .MuiInput-root": {
                width: 400,
                minHeight: 50,
                color: "white",
                fontFamily: "Sriracha",
                // textTransform: 'lowercase',
                letterSpacing: 2,
                // Border before focus
                "&:before": {
                  borderColor: "white",
                  borderWidth: "3px",
                  [theme.breakpoints.down("xs")]: {
                    width: 300,
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: 270,
                  },
                },
                // Border on focus
                "&:after": {
                  borderColor: "gray",
                  borderWidth: "3px",
                  [theme.breakpoints.down("xs")]: {
                    width: 300,
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: 270,
                  },
                },
                [theme.breakpoints.down("xs")]: {
                  width: 300,
                },
                [theme.breakpoints.down("xxs")]: {
                  width: 270,
                },
              },
              // Label
              "& .MuiInputLabel-standard": {
                color: "white",
                fontWeight: "bold",
                fontFamily: "Sriracha",
                letterSpacing: 2,
                fontSize: 30,
                "&.Mui-focused": {
                  color: "gray",
                },
              },
            })}
          />
          <TextField
            variant="standard"
            label="Subject"
            sx={(theme) => ({
              "& .MuiInput-root": {
                width: 400,
                minHeight: 50,
                color: "white",
                fontFamily: "Sriracha",
                // textTransform: 'lowercase',
                letterSpacing: 2,
                // Border before focus
                "&:before": {
                  borderColor: "white",
                  borderWidth: "3px",
                  [theme.breakpoints.down("xs")]: {
                    width: 300,
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: 270,
                  },
                },
                // Border on focus
                "&:after": {
                  borderColor: "gray",
                  borderWidth: "3px",
                  [theme.breakpoints.down("xs")]: {
                    width: 300,
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: 270,
                  },
                },
                [theme.breakpoints.down("xs")]: {
                  width: 300,
                },
                [theme.breakpoints.down("xxs")]: {
                  width: 270,
                },
              },
              // Label
              "& .MuiInputLabel-standard": {
                color: "white",
                fontWeight: "bold",
                fontFamily: "Sriracha",
                letterSpacing: 2,
                fontSize: 30,
                "&.Mui-focused": {
                  color: "gray",
                },
              },
            })}
          />
          <TextField
            variant="standard"
            label="Message"
            multiline
            rows={6}
            sx={(theme) => ({
              "& .MuiInput-root": {
                width: 400,
                minHeight: 50,
                color: "white",
                fontFamily: "Sriracha",
                transition: "all 0.3s ease",
                // textTransform: 'lowercase',
                letterSpacing: 2,
                // Border before focus
                "&:before": {
                  borderColor: "white",
                  [theme.breakpoints.down("xs")]: {
                    width: 300,
                  },
                  [theme.breakpoints.down("xxs")]: {
                    width: 270,
                  },
                  borderWidth: "3px",
                },
                // Border on focus
                "&:after": {
                  borderColor: "gray",
                  borderWidth: "3px",
                  [theme.breakpoints.down("xs")]: {
                    width: 300,
                  },
                },
                [theme.breakpoints.down("xs")]: {
                  width: 300,
                },
                [theme.breakpoints.down("xxs")]: {
                  width: 270,
                },
              },
              // Label
              "& .MuiInputLabel-standard": {
                color: "white",
                fontWeight: "bold",
                fontFamily: "Sriracha",
                letterSpacing: 2,
                fontSize: 30,
                "&.Mui-focused": {
                  color: "gray",
                },
              },
            })}
          />
        </Box>
        <Box
          component="div"
          sx={(theme) => ({
            display: "flex",
            gap: 2,
            alignItems: "center",
            mt: "auto",
          })}
        >
          <Link
            sx={(theme) => ({
              display: "flex",
              gap: 1,
              alignItems: "center",
              textDecoration: "none",
              "& svg": {
                width: 20,
                height: 20,
              },
            })}
            href="https://www.linkedin.com/in/leela-krishna-mohan"
            target="_blank"
          >
            <FaLinkedin color="white" size={30} />
            <Typography
              sx={(theme) => ({
                color: "white",
                fontSize: 18,
                fontFamily: "Bebasneue",
                letterSpacing: 2,
              })}
            >
              Linkedin
            </Typography>
          </Link>
          <Link
            sx={(theme) => ({
              display: "flex",
              gap: 1,
              alignItems: "center",
              textDecoration: "none",
              "& svg": {
                width: 20,
                height: 20,
              },
            })}
            href="https://www.github.com/lkm14001"
            target="_blank"
          >
            <IoLogoGithub color="white" size={30} />
            <Typography
              sx={(theme) => ({
                color: "white",
                fontSize: 18,
                fontFamily: "Bebasneue",
                letterSpacing: 2,
              })}
            >
              Github
            </Typography>
          </Link>
          <Link
            sx={(theme) => ({
              display: "flex",
              gap: 1,
              alignItems: "center",
              textDecoration: "none",
              "& svg": {
                width: 20,
                height: 20,
              },
            })}
            href="https://wa.me/916303443159"
            target="_blank"
          >
            <FaWhatsapp color="white" size={30} />
            <Typography
              sx={(theme) => ({
                color: "white",
                fontSize: 18,
                fontFamily: "Bebasneue",
                letterSpacing: 2,
              })}
            >
              Whatsapp
            </Typography>
          </Link>
        </Box>
        <Box
          component={"div"}
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "auto",
          })}
        >
          <Typography
            sx={(theme) => ({
              fontFamily: "Bebasneue",
              fontSize: 15,
              color: "white",
              letterSpacing: 2,
              transition: "all 0.3s ease",
              [theme.breakpoints.down("xxs")]: {
                fontSize: 12,
              },
            })}
          >
            Designed and Developed by &nbsp;
            <GradientText
              sx={(theme) => ({
                fontFamily: "inherit",
                fontSize: "inherit",
                // color: 'inherit',
                letterSpacing: "inherit",
              })}
            >
              Leela Krishna.
            </GradientText>
          </Typography>
          <Typography
            sx={(theme) => ({
              fontFamily: "Bebasneue",
              fontSize: 15,
              color: "white",
              letterSpacing: 2,
              transition: "all 0.3s ease",
              [theme.breakpoints.down("xxs")]: {
                fontSize: 12,
              },
            })}
          >
            Built with{" "}
            <GradientText
              sx={(theme) => ({
                fontFamily: "Bebasneue",
                fontSize: 15,
                color: "white",
                letterSpacing: 2,
                transition: "all 0.3s ease",
                [theme.breakpoints.down("xxs")]: {
                  fontSize: 12,
                },
              })}
            >
              React.js & Material UI.
            </GradientText>{" "}
            Hosted on{" "}
            <GradientText
              sx={(theme) => ({
                fontFamily: "Bebasneue",
                fontSize: 15,
                color: "white",
                letterSpacing: 2,
                transition: "all 0.3s ease",
                [theme.breakpoints.down("xxs")]: {
                  fontSize: 12,
                },
              })}
            >
              Vercel
            </GradientText>
            .
          </Typography>
        </Box>
      </Box>
    </Layout>
  );
};

export default Contact;
