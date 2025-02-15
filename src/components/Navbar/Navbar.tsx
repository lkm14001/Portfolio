import {
  Box,
  Button,
  IconButton,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "../../assets/Images/logo.png";
import { useNavigate } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import { useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "motion/react";

const Navbar = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false);
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const lastScrollYRef = useRef(0);

  const BoxMotion = motion(Box<"div">);
  const IconButtonMotion = motion(IconButton);
  const NavHashLinkMotion = motion(NavHashLink);

  const menuVariants = {
    closed: {
      x: "100%",
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.2,
        staggerDirection: -1,
        when: "afterChildren",
      },
    },
    open: {
      x: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.2,
        delayChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    closed: {
      x: 50,
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  useMotionValueEvent(scrollY, "change", (scrollPixels) => {
    const difference = scrollPixels - lastScrollYRef.current;
    if (Math.abs(difference) > 10) {
      setIsHidden(difference > 0);
      lastScrollYRef.current = scrollPixels;
    }
  });

  const navBarItems: SxProps<Theme> = (theme) => ({
    fontSize: 28,
    fontFamily: "Bebasneue",
    letterSpacing: 1,
    color: "white",
    position: "relative",
    opacity: 0.75,
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    [theme.breakpoints.up("ipad")]: {
      "&:hover": {
        opacity: 1,
        transition: "300ms",
        backgroundColor: "homePage.navButtons",
        paddingX: 3,
        paddingY: 0.3,
        borderRadius: 10,
        cursor: "pointer",
      },
    },
    [theme.breakpoints.down("lg")]: {
      fontSize: 22,
    },
    [theme.breakpoints.down("md")]: {
      fontSize: 20,
    },
    [theme.breakpoints.down("sipad")]: {
      fontSize: 15,
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: 30,
      fontWeight: "bolder",
      textTransform: "uppercase",
    },
  });

  return (
    <>
      <BoxMotion
        component="div"
        sx={(theme) => ({
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          position: "fixed",
          boxSizing: "border-box",
          width: "100%",
          padding: 6,
          zIndex: 100,
          [theme.breakpoints.down("xs")]: {
            display: "none",
          },
        })}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: 0,
            transition: {duration: 0.5, type: "spring"},
          },
        }}
        animate={isHidden ? "hidden" : "visible"}
        transition={{ duration: 0.2 }}
      >
        <Box
          component="div"
          sx={(theme) => ({
            display: "flex",
            justifyContent: "space-between",
            padding: 2,
            boxSizing: "border-box",
            alignItems: "center",
            width: "60%",
            backgroundColor: "homePage.navBar",
            height: "9vh",
            borderRadius: 50,
            border: "2px solid",
            borderColor: "homePage.border",
            [theme.breakpoints.down("md")]: {
              width: "70%",
            },
            [theme.breakpoints.down("sipad")]: {
              width: "80%",
            },
            [theme.breakpoints.down("sm")]: {
              width: "90%",
            },
          })}
        >
          {/* Logo */}
          <Box
            component="img"
            sx={{
              height: "8.2vh",
              filter: "invert(1)",
              cursor: "pointer",
            }}
            src={logo}
            onClick={() => navigate("/")}
          />
          {/* Navbar */}
          <Box
            component="div"
            sx={{
              display: "flex",
              justifyContent: "space-around",
              // gap: 8,
              alignItems: "center",
              boxSizing: "border-box",
              width: "50%",
            }}
          >
            <NavHashLink
              to="/#home"
              smooth
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography sx={navBarItems}>Home</Typography>
            </NavHashLink>

            <NavHashLink
              to="/#about"
              smooth
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography sx={navBarItems}>About</Typography>
            </NavHashLink>

            <NavHashLink
              to="/#mywork"
              smooth
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Typography sx={navBarItems}>My Work</Typography>
            </NavHashLink>
          </Box>
          {/* contact */}
          <Button
            sx={(theme) => ({
              fontSize: "1rem",
              fontFamily: "Bebasneue",
              letterSpacing: 3,
              backgroundColor: "homePage.navButtons",
              borderRadius: 48,
              paddingX: 4,
              paddingY: 1.5,
              color: "white",
              fontWeight: "bolder",
              textTransform: "capitalize",
              transition: "all 0.3s ease",
              [theme.breakpoints.down("lg")]: {
                paddingX: 3,
                paddingY: 1.2,
              },
              [theme.breakpoints.down("md")]: {
                paddingX: 2,
                paddingY: 1,
                fontSize: "0.9rem",
              },

              [theme.breakpoints.down("sipad")]: {
                paddingX: 1.5,
                fontSize: "0.7rem",
              },
            })}
          >
            Reach out
          </Button>
        </Box>
      </BoxMotion>
      <BoxMotion
        component="div"
        sx={(theme) => ({
          [theme.breakpoints.up("xs")]: {
            display: "none",
          },
          [theme.breakpoints.down("xs")]: {
            height: "10vh",
            position: "fixed",
            boxSizing: "border-box",
            width: "100%",
            padding: 6,
            zIndex: 10,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          },
        })}
        variants={{
          hidden: {
            y: "-100%",
          },
          visible: {
            y: 0,
            transition: {duration: 0.5, type: "spring"},
          },
        }}
        animate={isHidden ? 'hidden' : 'visible'}
        transition={{duration: 0.2}}
      >
        {!open && (
          <>
            <Box
              component="img"
              sx={{
                height: "7vh",
                filter: "invert(1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              src={logo}
              onClick={() => navigate("/")}
            />
            <IconButtonMotion
              onClick={() => setOpen(true)}
              sx={(theme) => ({})}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <MenuIcon
                sx={(theme) => ({
                  color: "white",
                  cursor: "pointer",
                  fontSize: "5vh",
                })}
              />
            </IconButtonMotion>
          </>
        )}
      </BoxMotion>
      {/* Mobile Navigation */}
      {open && (
        <BoxMotion
          sx={(theme) => ({
            width: "100%",
            height: "100vh",
            backdropFilter: "blur(10px)",
            background: "rgba(0,0,0,0.5)",
            position: "fixed",
            zIndex: 10,
            transition: "all 0.5s ease-in-out",
            boxSizing: "border-box",
          })}
          initial="closed"
          animate={open ? "open" : "closed"}
          variants={menuVariants}
        >
          <Box
            component="div"
            sx={(theme) => ({
              height: "10vh",
              width: "100%",
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              padding: 6,
              boxSizing: "border-box",
            })}
          >
            <IconButtonMotion
              onClick={() => setOpen(false)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 1.5 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <CloseIcon
                sx={(theme) => ({
                  color: "white",
                  cursor: "pointer",
                  fontSize: "5vh",
                })}
              />
            </IconButtonMotion>
          </Box>
          <BoxMotion
            component="div"
            sx={(theme) => ({
              width: "100%",
              height: "90vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              alignItems: "center",
              paddingY: 10,
              boxSizing: "border-box",
            })}
            initial="closed"
            animate={open ? "open" : "closed"}
            variants={menuVariants}
          >
            <NavHashLinkMotion
              to="/#home"
              smooth
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setOpen(false)}
              variants={itemVariants}
            >
              <Typography sx={navBarItems}>Home</Typography>
            </NavHashLinkMotion>

            <NavHashLinkMotion
              to="/#about"
              smooth
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setOpen(false)}
              variants={itemVariants}
            >
              <Typography sx={navBarItems}>About</Typography>
            </NavHashLinkMotion>

            <NavHashLinkMotion
              to="/#mywork"
              smooth
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setOpen(false)}
              variants={itemVariants}
            >
              <Typography sx={navBarItems}>My Work</Typography>
            </NavHashLinkMotion>
            <NavHashLinkMotion
              to="/#contact"
              smooth
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={() => setOpen(false)}
              variants={itemVariants}
            >
              <Typography sx={navBarItems}>Contact</Typography>
            </NavHashLinkMotion>
          </BoxMotion>
        </BoxMotion>
      )}
    </>
  );
};

export default Navbar;
