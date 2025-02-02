import { Box, SxProps, Theme } from "@mui/material";
import { motion, MotionStyle } from "motion/react";

interface LayoutProps {
  sx: SxProps<Theme>;
  children: React.ReactElement;
  id?: string;
  motionStyle?: MotionStyle;
}

const Layout = ({ children, sx, id, motionStyle }: LayoutProps) => {
  const BoxMotion = motion(Box);
  return (
    <>
      <BoxMotion
        style={motionStyle}
        sx={sx}
        id={id}
        className="layout" 
      >
        {children}
      </BoxMotion>
    </>
  );
};

export default Layout;
