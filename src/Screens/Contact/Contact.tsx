import { memo } from "react";
import Layout from "../Layout/Layout";
import { Box, Button, Link, TextField, Typography } from "@mui/material";
import { LeftBorderLine, RightBorderLine } from "../Home/Home";
import GradientText from "../../components/GradientText/GradientText";
import AnimatedText from "../../components/AnimatedText/AnimatedText";

import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa";

import toast, { Toaster } from "react-hot-toast";

import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit } = useForm();

  const onSubmitContactForm = async (data: any) => {
    const contactForm = {
      ...data,
      access_key: "2f2565b5-6092-48eb-9706-db71a8825125",
    };

    const json = JSON.stringify(contactForm);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success(
        <GradientText
          sx={(theme) => ({
            fontFamily: "Bebasneue",
            letterSpacing: 2,
          })}
        >
          Successfully Sent Message. Thank You.
        </GradientText>
      );
    } else if (res.error) {
      toast.error(
        <Typography
          sx={(theme) => ({
            fontFamily: "Bebasneue",
            letterSpacing: 2,
            color: "red",
          })}
        >
          Error Submitting Form,Please Try again later !
        </Typography>
      );
    }
  };

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
            whileInView
            once
          />
        </GradientText>
        <Box
          component={"form"}
          autoComplete="off"
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
          onSubmit={handleSubmit(onSubmitContactForm)}
        >
          <TextField
            variant="standard"
            label="Name"
            {...register("name", { required: true })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
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
            {...register("email", {
              required: true,
            })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
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
            {...register("subject", { required: true })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
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
            {...register("message", { required: true })}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
              }
            }}
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
          <Button
            type="submit"
            onClick={handleSubmit(onSubmitContactForm)}
            sx={(theme) => ({
              background:
                "linear-gradient(90deg, rgba(247,119,15,1) 0%, rgba(232,66,15,1) 34%, rgba(246,0,232,1) 100%)",
              color: "white",
              fontFamily: "Bebasneue",
              fontWeight: "bold",
              fontSize: 20,
              px: 22,
              transition: "all 0.3s ease",
              borderRadius: 50,
              letterSpacing: 2,
              mt: 2,
              "&:hover": {
                backgroundColor: "homePage.navButtons",
                transform: "scale(1.2)",
              },
              [theme.breakpoints.down("xs")]: {
                px: 18,
              },
              [theme.breakpoints.down("xxs")]: {
                px: 14,
              },
            })}
          >
            Submit
          </Button>
          <Toaster />
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

export default memo(Contact);
