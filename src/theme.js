import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h3: {
      fontFamily: "Arial, Helvetica, sans-serif",
      fontWeight: 600,
      fontSize: "3vw",
      letterSpacing: "-1px",
      color: "#ffffff",
      textShadow: "0px 0px 25px #00000080",
      textTransform: "initial",
    },
    h2: {
      fontFamily: "Helvetica",
      fontSize: "42px",
      fontWeight: 500,
    },
    body1: {
      margin: 0,
      fontFamily: "Roboto-Regular",
      textAlign: "center",
    },
    body2: {
      fontFamily: "Helvetica",
      fontSize: "14px",
      fontWeight: 400,
      color: "#777777",
    },
    button: {
      fontFamily: "Helvetica",
      fontSize: "16px",
      letterSpacing: "1.25px",
    },
    subtitle1: {
      margin: 0,
      fontFamily: "Roboto-Regular",
      textAlign: "center",
      letterSpacing: "3px",
      fontSize: ".6vw",
      paddingBottom: "5px",
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
          padding: "0.7vw 2vw",
          marginTop: 2,
          fontSize: "0.8vw",
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
