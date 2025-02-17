import { Avatar, Badge, Box, styled, Typography } from "@mui/material";
import { motion } from "motion/react";
import { FiMessageCircle } from "react-icons/fi";
import me from "../../assets/me.jpg";
import AnimatedText from "../AnimatedText/AnimatedText";

const AboutInfoTooltip = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      backgroundColor: "#44b700",
      color: "red",
      boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    },
  }));

  const TooltipContent = styled(Box)(({ theme }) => ({
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    borderRadius: theme.shape.borderRadius * 2,
    padding: theme.spacing(2),
    maxWidth: 550,
    boxShadow: theme.shadows[3],
    "&::before": {
      content: '""',
      position: "absolute",
      left: -10,
      top: 20,
      width: 0,
      height: 0,
      borderTop: "8px solid transparent",
      borderRight: "10px solid white",
      borderBottom: "8px solid transparent",
      filter: "drop-shadow(-2px 2px 2px rgba(0,0,0,0.1))",
    },
    [theme.breakpoints.down("ipad")]: {
      maxWidth: 350,
      transition: "all 0.3s ease",
    },
    [theme.breakpoints.down("xs")]: {
      maxWidth: 280,
    },
    [theme.breakpoints.down("xxs")]: {
      maxWidth: 240,
    },
  }));

  const BoxMotion = motion.create(Box<"div">);

  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        alignItems: "flex-start",
        gap: 3,
      })}
    >
      {/* Profile Photo */}
      <StyledBadge
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot"
        sx={(theme) => ({
          [theme.breakpoints.up("sipad")]: {
            display: "none",
          },
        })}
      >
        <Avatar
          src={me}
          alt="Leela Krishna Mohan"
          sx={{ width: 56, height: 56 }}
        />
      </StyledBadge>

      <BoxMotion
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
            duration: 0.4,
            scale: { type: "spring", visualDuration: 0.3, bounce: 0.5 },
        }}
      >
        <TooltipContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
            <FiMessageCircle size={20} color="#2196f3" />
            <Typography component="h1" sx={{ fontWeight: 600, fontFamily: "BebasNeue", letterSpacing: '1.8px' }}>
              Leela krishna Mohan
            </Typography>
          </Box>
          <Typography color="text.secondary" sx={(theme) => ({
            fontSize: 20,
            transition: 'all 0.3s ease',
            [theme.breakpoints.down('ipad')]:{
              fontSize: 18
            },
            fontFamily: 'BebasNeue',
            ml: 4
          })}>
            I can transform Your Ideas into Functional, Scalable, and Stunning Websites
          </Typography>
        </TooltipContent>
      </BoxMotion>
    </Box>
  );
};

export default AboutInfoTooltip;
