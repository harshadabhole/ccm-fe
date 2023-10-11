import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#42427C",
    },
    secondary: {
      main: "#FFFFFF",
    },
    error: {
      main: "#FF0000",
    },
  },
  typography: {
    fontFamily:
      "'-apple-system, BlinkMacSystemFont', Segoe UI, Roboto, Oxygen,Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,sans-serif", // Replace 'Your Font Family' with your desired font
    h6: {
      fontSize: "2rem",
      fontWeight: "bold",
      font: "normal normal bold 20px/25px Gilroy",
      letterSpacing: "0px",
      color: "#4C4C4C",
    },
    subtitle1: {
      textAlign: "left",
      font: "normal normal bold 18px/23px Gilroy",
      letterSpacing: "0px",
      color: "#4C4C4C",
      opacity: 1,
      fontWeight: "bold",
    },
    body1: {
      textAlign: "left",
      font: "normal normal bold 18px/21px Gilroy",
      letterSpacing: "0px",
      color: "#4C4C4CCC",
      opacity: 1,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
