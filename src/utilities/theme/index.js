import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#E6535A",
    },
    secondary: {
      main: "#E6535A",
    },
  },
  typography: {
    fontFamily: ["Open Sans", "sans-serif"].join(","),
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: () => ({
          backgroundColor: "#F2F2F2",
          height: "5.2rem",
        }),
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          height: "45px",
          borderRadius: "10px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderStyle: "none",
          },
          "& .MuiOutlinedInput-root": {
            border: ownerState.error
              ? "1px solid #ED725D"
              : "1px solid transparent",
          },
          "& .MuiInputLabel-root": {
            color: "#000000B8",
          },
          "& .MuiInputLabel-root.MuiInputLabel-shrink": {
            color: "#000000B8",
            marginTop: "15px",
          },
          ...(ownerState.label && {
            "& .MuiInputBase-input": {
              position: "relative",
              top: "10px",
            },
          }),
          "& .MuiFormHelperText-root.Mui-error": {
            fontSize: "1.4rem",
            color: "#ED725D",
            position: "relative",
            right: "10px",
            paddingTop: "3px",
          },
        }),
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
      styleOverrides: {
        root: {
          "&:disabled": {
            backgroundColor: "#F2F2F2",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: () => ({
          minWidth: 0,
          padding: "5px 10px",
          color: "white",
          background: "#E6535A",
          borderRadius: "50px",
          boxShadow: "none",
          "&:hover": {
            opacity: 0.9,
            background: "#E6535A",
          },
        }),
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#E6535A",
          color: "white",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "transparent",
          boxShadow: "none",
          color: "black",
        },
      },
    },
  },
});

export default theme;
