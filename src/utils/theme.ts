import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    homePage: {
      border: string;
      navButtons: string;
      navBar: string;
      background: string;
      profileBadge: string;
    };
  }

  interface BreakpointOverrides {
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    ipad?: true;
    sipad?: true;
  }
}

export const getDesignTokens = () => {
  const theme = createTheme({
    palette: {
      homePage: {
        border: "#3b4751",
        navButtons: "#f7770f",
        navBar: "#0e171e",
        background: "#000810",
        profileBadge: "#44b700",
      },
    },
    breakpoints: {
      values: {
        xxs: 400,
        xs: 540,
        sm: 650,
        sipad: 810,
        ipad: 950,
        md: 1200,
        lg: 1500,
        xl: 1800,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#6b6b6b #2b2b2b",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "blue",
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#6b6b6b",
              minHeight: 24,
              border: "3px solid #2b2b2b",
            },
            "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus":
              {
                backgroundColor: "blue",
              },
            "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active":
              {
                backgroundColor: "blue",
              },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover":
              {
                backgroundColor: "blue",
              },
            "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
              backgroundColor: "blue",
            },
          },
        },
      },
    },
  });

  return theme;
};
