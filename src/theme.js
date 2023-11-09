import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h3: {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: 600,
      fontSize: "2.25rem",
      textTransform: "initial",
    },
    h4: {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: 500,
      fontSize: "1.625rem",
      textTransform: "initial",
    },
    h5: {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: 500,
      fontSize: "1rem",
      textTransform: "initial",
    },
    body2: {
      fontFamily: "Roboto-Regular, Helvetica, sans-serif",
      fontSize: "0.875rem",
      lineHeight: "1.75rem",
      letterSpacing: "0.016rem",
      fontWeight: 400,
      color: "#777777",
    },
    caption: {
      fontFamily: "Roboto-Regular, Helvetica, sans-serif",
      fontSize: "0.875rem",
      lineHeight: "1.75rem",
      letterSpacing: "0.016rem",
      color: "#777777",
    },
    button: {
      fontFamily: "Helvetica",
      fontSize: "1rem",
      letterSpacing: "1.25px",
    },
    subtitle1: {
      margin: 0,
      fontFamily: "Roboto-Regular, Helvetica, sans-serif",
      letterSpacing: "0.188rem",
      fontSize: "0.813rem",
      paddingBottom: "0.313rem",
      fontWeight: 100,
      textTransform: "uppercase",
      color: "#fff",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 50,
          color: "#fff",
        },
        outlined: {
          borderColor: "#fff",
          paddingLeft: 20,
          paddingRight: 20,
          paddingTop: 5,
          paddingBottom: 5,
          "&:hover": {
            backgroundColor: "#C8A74B",
            border: "none",
          },
        },
        contained: {
          background: "#d4b254",
          boxShadow: "0px 2px 10px #00000033",
          borderRadius: 30,
          padding: "5px 20px 5px 20px",
          marginTop: 2,
          fontSize: "0.7rem",
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#C8A74B",
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
          position: "absolute",
          top: "20px",
          left: "0",
          width: "100%",
          minWidth: "360px",
          zIndex: 99,
        },
      },
    },
  },
});
