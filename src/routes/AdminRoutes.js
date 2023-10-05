import React, { lazy } from "react";
import {
  DashboardOutlinedIcon,
  AccountCircleRoundedIcon,
  SettingsOutlinedIcon,
  LogoutRoundedIcon,
  TaskOutlinedIcon,
} from "../assets/Icons/SideBarIcons";
import Password from "../views/workspaces/Settings/Components/Password";
import AdminUser from "../views/workspaces/Settings/Components/AdminUser/Index";

// Provider component
const Analytics = lazy(() => import("../views/workspaces/Dashboard"));
const Provider = lazy(() => import("../views/workspaces/Provider"));
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
    element: <Provider />,
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
    type: "group",
    icon: <SettingsOutlinedIcon />,
    url: "/settings",
    breadcrumbs: true,
    children: [
      {
        id: "password",
        title: "Password",
        type: "item",
        icon: <AccountCircleRoundedIcon />,
        url: "/settings/password",
        element: <Password />,
      },
      {
        id: "adminUser",
        title: "Admin user",
        type: "item",
        icon: <AccountCircleRoundedIcon />,
        url: "/settings/adminUser",
        element: <AdminUser />,
      },
    ],
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
