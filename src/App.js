import React, { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Snackbar from "./ui-component/snackbar";
import Loadable from "./ui-component/Loadable";
import useBoxStyles from "./theme/main-layout";
import "./index.css";
import { AuthRoutes } from "./routes/AuthRoutes";
import { Provider } from "./routes/ProviderRoutes";
import { Admin } from "./routes/AdminRoutes";
import { User } from "./routes/UserRoutes";

// header and sidenav
const Header = lazy(() => import("./views/Header"));
const SideNav = lazy(() => import("./views/Side-Nav"));
const NotFound = lazy(() => import("./views/errors"));

export const loggedInUserType = "Provider";

function App(props) {
  const styles = useBoxStyles();
  const loggedIn = true;

  const [routes, setRoutes] = useState([]);
  console.log("@@@@@@@@@@@@", props);
  useEffect(() => {
    if (loggedIn) {
      if (loggedInUserType === "Admin") {
        setRoutes([...Admin, ...AuthRoutes]);
      } else if (loggedInUserType === "Provider") {
        setRoutes([...Provider, ...AuthRoutes]);
      } else if (loggedInUserType === "User") {
        setRoutes([...User, ...AuthRoutes]);
      }
    } else {
      // Unauthorized users
      setRoutes(AuthRoutes);
    }
  }, [loggedInUserType, loggedIn]);

  return (
    <Router>
      <Suspense fallback={<Loadable />}>
        {loggedIn ? (
          <>
            <Header />
            <SideNav />
            <Box sx={styles.box}>
              <Routes>
                {routes?.map((route) => (
                  <Route
                    key={route?.url}
                    path={route?.url}
                    element={route?.element}
                  />
                ))}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </>
        ) : (
          <Routes>
            {routes?.map((route) => (
              <Route
                key={route?.url}
                path={route?.url}
                element={route?.element}
              />
            ))}
            {/* Add conditions for authenticated routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        )}
      </Suspense>
      <Snackbar />
    </Router>
  );
}

export default App;
