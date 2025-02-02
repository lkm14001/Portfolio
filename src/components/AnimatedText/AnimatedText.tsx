import { motion, useInView } from "motion/react";
import { Theme, Typography } from "@mui/material";
import { SxProps } from "@mui/material";

interface AnimatedTextProps {
  text: string;
  sx?: SxProps<Theme>;
  scaleStyle?: any;
  className?: any;
  component: string;
}

const textAnimations = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
};

const AnimatedText = ({
  text,
  sx,
  scaleStyle,
  className,
  component,
}: AnimatedTextProps) => {
  const MotionText = motion(Typography<any>);

  return (
    <>
      <MotionText
        className={className}
        style={{ scale: scaleStyle ? scaleStyle : {} }}
        component={component}
        transition={{ staggerChildren: 0.1 }}
        initial="initial"
        animate="animate"
        whileInView="animate"
      >
        {text.split("").map((character, index) => (
          <MotionText
            component="span"
            sx={sx}
            style={{ display: "inline-block" }}
            key={index}
            variants={textAnimations}
          >
            {character === " " && <span>&nbsp;</span>}
            {character}
          </MotionText>
        ))}
      </MotionText>
    </>
  );
};

export default AnimatedText;