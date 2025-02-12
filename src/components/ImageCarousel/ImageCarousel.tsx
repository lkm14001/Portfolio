import { IconButton, SxProps, Theme } from "@mui/material";
import { Box } from "@mui/system";
import { cloneElement } from "react";

import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface ImageCarouselProps {
  containerStyle?: SxProps<Theme>;
  projectStyle?: SxProps<Theme>;
  projects: [];
}

const ImageCarousel = ({
  containerStyle,
  projects,
  projectStyle,
}: ImageCarouselProps) => {
  return (
    <Box
      component="div"
      sx={Array.isArray(containerStyle) ? containerStyle : [containerStyle]}
    >
      <IconButton sx={(theme) => ({})}>
        <FaAngleLeft />
      </IconButton>
      {projects.map((project, index) => (
        <Box
          component="div"
          key={index}
          sx={Array.isArray(projectStyle) ? projectStyle : [projectStyle]}
        >
          {cloneElement(project)}
        </Box>
      ))}
      <IconButton sx={(theme) => ({})}>
        <FaAngleRight />
      </IconButton>
    </Box>
  );
};

export default ImageCarousel;
