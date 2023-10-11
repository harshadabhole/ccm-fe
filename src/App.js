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
import { useDispatch} from "react-redux";
import { closeDrawer } from "./store/slices/drawerSlices";
import UserProfileDetails from "./views/workspaces/Settings/Components/AdminUser/UserProfileDetails";
import "./assets/css/style.css"
// header and sidenav
const Header = lazy(() => import("./views/Header"));
const SideNav = lazy(() => import("./views/Side-Nav"));
const NotFound = lazy(() => import("./views/errors"));

// export const loggedInUserType = "Provider";
export const loggedInUserType = "Admin";

function App() {
  const dispatch = useDispatch();
  const styles = useBoxStyles();
  const loggedIn = true;
  const [routes, setRoutes] = useState([]);
  const [childRoute, setChildRoute] = useState([])
  const ExtraRoutes = [{
    url: `/settings/adminUser/profile`,
    breadcrumbs: true,
    element: <UserProfileDetails/>,
  },]
  useEffect(() => {
    if (loggedIn) {
      if (loggedInUserType === "Admin") {
        let childRoutes = []
        Admin.forEach((route)=>{
          if(route?.children){
            childRoutes.push(...route?.children)
          }
        })
        setChildRoute(childRoutes)
        setRoutes([...Admin, ...AuthRoutes, ...childRoutes, ...ExtraRoutes]);
      } else if (loggedInUserType === "Provider") {
        let childRoutes = []
        Provider.forEach((route)=>{
          if(route?.children){
            childRoutes.push(...route?.children)
          }
        })
        setChildRoute(childRoutes)
        setRoutes([...Provider, ...AuthRoutes, ...childRoutes]);
      } else if (loggedInUserType === "User") {
        setRoutes([...User, ...AuthRoutes]);
      }
    } else {
      // set auth routes
      setRoutes(AuthRoutes);
    }
  }, [loggedInUserType, loggedIn]);



  const allAuthRouteUrls = [...AuthRoutes].map((route) => route?.url);
  const allProtectedRouteUrls = [...Admin, ...Provider, ...User, ...childRoute, ...ExtraRoutes].map(
    (route) => route?.url
  );

  useEffect(() => {
    if(allAuthRouteUrls.includes(window.location.pathname))
    dispatch(closeDrawer())
  },[loggedIn, window.location.pathname])

  
  return (
    <Router>
      <Suspense fallback={<Loadable />}>
        {loggedIn && !allAuthRouteUrls.includes(window.location.pathname) ? (
          <>
            {console.log("loggedIn1", loggedIn)}
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
                {/* show not found page */}
                <Route
                  path="*"
                  element={<NotFound loggedIn={!loggedIn ? true : false} />}
                />
              </Routes>
            </Box>
          </>
        ) : (
          <Routes>
            {console.log("loggedIn2", loggedIn)}
            {routes?.map((route) => (
              <Route
                key={route?.url}
                path={route?.url}
                element={route?.element}
              />
            ))}
            <Route
              path="*"
              element={
                // Check if the requested route exists in your application's routes
                !loggedIn &&
                allProtectedRouteUrls?.includes(window.location.pathname) ? (
                  // show access denied page
                  <NotFound loggedIn={false} />
                ) : ![...allProtectedRouteUrls, ...allAuthRouteUrls].includes(
                    window.location.pathname
                  ) ? (
                  <NotFound loggedIn={true} />
                ) : null
              }
            />
          </Routes>
        )}
      </Suspense>
      <Snackbar />
    </Router>
  );
}

export default App;
