import React, { lazy } from "react";
import {
  DashboardOutlinedIcon,
  AccountCircleRoundedIcon,
  SettingsOutlinedIcon,
  LogoutRoundedIcon,
  TaskOutlinedIcon,
} from "../assets/Icons/SideBarIcons";
import Settings from "../views/workspaces/Settings";

// Provider component
const Analytics = lazy(() => import("../views/workspaces/Dashboard"));
const Provider = lazy(() => import("../views/workspaces/Provider"));
const Logout = lazy(() => import("../views/authentication/log-out"));
const ProviderProfile = lazy(() => import("../views/workspaces/Provider/components/provider-profile"));

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
    children: [
      {
      id: "provider-group",
      title: "Provider Group",
      type: "item",
      icon: <AccountCircleRoundedIcon />,
      url: `/provider-group/:name`,
      breadcrumbs: true,
      element: <ProviderProfile />,
      }
    ]
  },
  // {
  //   id: "devices",
  //   title: "Devices",
  //   type: "item", // Change type to 'group' for nested children
  //   icon: <TaskOutlinedIcon />,
  //   url: "/devices",
  //   breadcrumbs: true,
  // },
  {
    id: "settings",
    title: "Settings",
    type: "item",
    icon: <SettingsOutlinedIcon />,
    url: "/settings",
    breadcrumbs: true,
    element: <Settings/>
    // children: [
    //   {
    //     id: "password",
    //     title: "Password",
    //     type: "item",
    //     icon: <AccountCircleRoundedIcon />,
    //     url: "/settings/password",
    //     element: <Password />,
    //   },
    //   {
    //     id: "adminUser",
    //     title: "Admin user",
    //     type: "item",
    //     icon: <AccountCircleRoundedIcon />,
    //     url: "/settings/adminUser",
    //     element: <AdminUser />,
    //   },
    // ],
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
