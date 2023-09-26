import React, { lazy} from "react";

// auth component
export const Signin = lazy(() => import("../views/authentication/sign-in"));
const ForgotPassword = lazy(() =>
  import("../views/authentication/forgot-password/forgot")
);
const OTP = lazy(() => import("../views/authentication/forgot-password/OTP"));
const ResetPassword = lazy(() =>
  import("../views/authentication/forgot-password/reset")
);
const Logout = lazy(() => import("../views/authentication/log-out"));

export const AuthRoutes = [
    { url: "/", element: <Signin/> },
    { url: "/signin", element:<Signin/>},
    { url: "/signup", element:<Signin/>}, // add sign up route
    { url: "/resetPassword", element: <ResetPassword/> },
    { url: "/otp", element: <OTP/>},
    { url: "/forgotPassword", element: <ForgotPassword/> },
    { url: "/logout", element: <Logout/> },
];
