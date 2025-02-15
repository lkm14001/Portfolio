import { SxProps, Theme } from "@mui/material";
import Typography from "@mui/material/Typography";

interface IGradientText {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
}

const GradientText = ({ sx, children }: IGradientText) => {
  return (
    <Typography
      component="span"
      sx={[
        {
          background:
            "linear-gradient(90deg, rgba(247,119,15,1) 0%, rgba(232,66,15,1) 34%, rgba(246,0,232,1) 100%)",
          color: "transparent",
          backgroundClip: "text",
          fontFamily: "inherit",
          fontSize: "inherit",
          fontWeight: "bolder",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {children}
    </Typography>
  );
};

export default GradientText;