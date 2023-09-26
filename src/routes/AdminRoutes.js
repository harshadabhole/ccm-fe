import React, { lazy } from "react";
import {
  DashboardOutlinedIcon,
  AccountCircleRoundedIcon,
  SettingsOutlinedIcon,
  LogoutRoundedIcon,
  TaskOutlinedIcon,
} from "../assets/Icons/SideBarIcons";

// Provider component
const Analytics = lazy(() => import("../views/workspaces/Dashboard"));
const Patients = lazy(() => import("../views/workspaces/Patients"));
const Logout = lazy(() => import("../views/authentication/log-out"));

export const Admin = [
  {
    id: "analytics",
    title: "Analytics",
    type: "item",
    icon: <DashboardOutlinedIcon />,
    url: `/analytics`,
    breadcrumbs: true,
    element: <Analytics />,
  },
  {
    id: "provider-group",
    title: "Provider Group",
    type: "item",
    icon: <AccountCircleRoundedIcon />,
    url: `/provider-group`,
    breadcrumbs: true,
    element: <Patients />,
  },
  {
    id: "devices",
    title: "Devices",
    type: "item", // Change type to 'group' for nested children
    icon: <TaskOutlinedIcon />,
    url: "/devices",
    breadcrumbs: true,
  },
  {
    id: "settings",
    title: "Settings",
    type: "item",
    icon: <SettingsOutlinedIcon />,
    url: "/settings",
    breadcrumbs: true,
  },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <LogoutRoundedIcon />,
    url: "/logout",
    breadcrumbs: true,
    element: <Logout />,
  },
];
