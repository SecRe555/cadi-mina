import { createTheme } from "@mui/material";

const PRIMARY_COLOR = "#005cff";
const SECONDARY_COLOR_LIGHT = "#ff0037";
const SECONDARY_COLOR_DARK = "#E7333C";

const BG_COLOR_LIGHT = "#EEEEEE";
const BG_COLOR_CARDS_LIGHT = "#F8F8F8";
const BG_COLOR_DARK = "#333333";
const BG_COLOR_CARDS_DARK = "#0A0A0A";

const ERROR_COLOR_LIGHT = "#D67206";
const ERROR_COLOR_DARK = "#FF8F00";

export const lightTheme = createTheme({
  palette: {
    mode: "light",
    primary: { main: PRIMARY_COLOR },
    secondary: { main: SECONDARY_COLOR_LIGHT },
    background: { default: BG_COLOR_LIGHT, paper: BG_COLOR_CARDS_LIGHT },
  },
  typography: {
    fontFamily: "Montserrat",
    fontSize: 18,
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: PRIMARY_COLOR,
          },
          "&:hover .MuiInputLabel-root": {
            color: SECONDARY_COLOR_LIGHT,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "0 10px",
          "&::before": {
            borderBottom: `2px solid ${PRIMARY_COLOR}`,
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: `2px solid ${SECONDARY_COLOR_LIGHT}`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: PRIMARY_COLOR,
            borderRadius: "15px",
            minWidth: "200px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: SECONDARY_COLOR_LIGHT,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: ERROR_COLOR_LIGHT,
          },
          "& .MuiIconButton-root": {
            color: PRIMARY_COLOR,
            marginRight: 1,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: ERROR_COLOR_LIGHT,
          },
          "&.Mui-focused": {
            color: ERROR_COLOR_LIGHT,
          },
          "&.MuiFormLabel-root.Mui-error.Mui-focused": {
            color: ERROR_COLOR_LIGHT,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: ERROR_COLOR_LIGHT,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 15,
          textTransform: "none",
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          borderTop: `3px solid ${PRIMARY_COLOR}`,
          boxShadow: "0px -5px 15px rgba(0, 0, 0, 0.25)",
          padding: "5px 0",
          zIndex: "999",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          cursor: "pointer",
          "&.MuiLink-underlineAlways": {
            textDecorationColor: PRIMARY_COLOR,
            "&:hover": {
              textDecorationColor: SECONDARY_COLOR_LIGHT,
            },
          },
          "&.MuiLink-underlineHover": {
            textDecorationColor: "#FFFFFF00",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Montserrat";
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
        }
      `,
    },
  },
});

export const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: PRIMARY_COLOR },
    secondary: { main: SECONDARY_COLOR_DARK },
    background: { default: BG_COLOR_DARK, paper: BG_COLOR_CARDS_DARK },
  },
  colorSchemes: {
    dark: true,
  },
  typography: {
    fontFamily: "Barlow",
    fontSize: 18,
    allVariants: {
      color: BG_COLOR_CARDS_LIGHT,
    },
  },
  components: {
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputLabel-root": {
            color: PRIMARY_COLOR,
          },
          "&:hover .MuiInputLabel-root": {
            color: SECONDARY_COLOR_DARK,
          },
          "& .MuiOutlinedInput-notchedOutline": {
            borderWidth: 2,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          padding: "0 10px",
          "&::before": {
            borderBottom: `2px solid ${PRIMARY_COLOR}`,
          },
          "&:hover:not(.Mui-disabled, .Mui-error):before": {
            borderBottom: `2px solid ${SECONDARY_COLOR_DARK}`,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: PRIMARY_COLOR,
            borderRadius: "15px",
            minWidth: "200px",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: SECONDARY_COLOR_LIGHT,
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: ERROR_COLOR_DARK,
          },
          "& .MuiIconButton-root": {
            color: PRIMARY_COLOR,
            marginRight: 1,
          },
        },
      },
    },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: ERROR_COLOR_DARK,
          },
          "&.Mui-focused": {
            color: ERROR_COLOR_DARK,
          },
          "&.MuiFormLabel-root.Mui-error.Mui-focused": {
            color: ERROR_COLOR_DARK,
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          "&.Mui-error": {
            color: ERROR_COLOR_DARK,
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          borderRadius: 15,
          textTransform: "none",
          color: BG_COLOR_CARDS_DARK,
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        variant: "contained",
      },
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          borderTop: `3px solid ${PRIMARY_COLOR}`,
          padding: "5px 0",
          zIndex: "999",
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&.MuiLink-underlineAlways": {
            textDecorationColor: PRIMARY_COLOR,
            "&:hover": {
              textDecorationColor: SECONDARY_COLOR_DARK,
            },
          },
          "&.MuiLink-underlineHover": {
            textDecorationColor: "#FFFFFF00",
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Barlow";
          font-style: normal;
          font-weight: 300;
          font-size: 24px;
        }
      `,
    },
  },
});
