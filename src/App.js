import React , { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Box } from "@mui/material";

import Snackbar from "./ui-component/snackbar";
import Loadable from "./ui-component/Loadable";
import useBoxStyles from "./theme/main-layout";
import './index.css'

// header and sidenav
const Header = lazy(() => import("./views/Header"));
const SideNav = lazy(() => import("./views/Side-Nav"));

// main component
const Analytics = lazy(() => import("./views/workspaces/Dashboard"));
const Patients = lazy(() => import("./views/workspaces/Patients"));

// auth component
const Signin = lazy(() => import('./views/authentication/sign-in'));
const ForgotPassword = lazy(() => import('./views/authentication/forgot-password/forgot'));
const OTP = lazy(() => import('./views/authentication/forgot-password/OTP'));
const ResetPassword = lazy(() => import('./views/authentication/forgot-password/reset'));
const Logout = lazy(() => import('./views/authentication/log-out'));
const NotFound = lazy(() => import('./views/errors'));

function App() {

  
  const styles = useBoxStyles();

  return (
    <Router>
      <Header />
      <SideNav/>
      <Suspense fallback={<Loadable />}>
        {/* Auth Routes */}
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/otp" element={<OTP/>} />
          <Route path="/resetPassword" element={<ResetPassword/>} />
          <Route path="/logout" element={<Logout />} />
          {/* Not Found Route */}
          <Route  element={<NotFound />} />
        </Routes>
        {/* Main Routes */}
        <Box sx={styles.box}>
          <Routes>
            <Route path="/analytics"  element={<Analytics />}  />
            <Route path="/patients"  element={<Patients />} />
          </Routes>
      </Box>
      </Suspense>
      <Snackbar />
    </Router>
  );
}

export default App;

