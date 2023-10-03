// main component

import React, { lazy } from "react";
import {
  DashboardOutlinedIcon,
  AccountCircleRoundedIcon,
  SettingsOutlinedIcon,
  LogoutRoundedIcon,
  CallIcon,
  TaskOutlinedIcon,
  BatteryAlertOutlinedIcon,
  MessageOutlinedIcon,
  LocalLibraryOutlinedIcon,
  SchoolOutlinedIcon,
  PaymentsOutlinedIcon,
} from "../assets/Icons/SideBarIcons";

// Provider component
const Analytics = lazy(() => import("../views/workspaces/Analytics"));
const Patients = lazy(() => import("../views/workspaces/Patients"));
const Logout = lazy(() => import("../views/authentication/log-out"));

export const Provider = [
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
    id: "patients",
    title: "Patients",
    type: "item",
    icon: <AccountCircleRoundedIcon />,
    url: `/patients`,
    breadcrumbs: true,
    element: <Patients />,
  },
  {
    id: "call_scheduler",
    title: "Call Scheduler",
    type: "item",
    icon: <CallIcon />,
    url: `/call_scheduler`,
    breadcrumbs: true,
  },
  {
    id: "task",
    title: "Task",
    type: "item", // Change type to 'group' for nested children
    icon: <TaskOutlinedIcon />,
    url: "/task",
    breadcrumbs: true,
  },
  {
    id: "alerts",
    title: "Alerts",
    type: "item",
    icon: <BatteryAlertOutlinedIcon />,
    url: "/alerts",
    breadcrumbs: true,
  },
  {
    id: "message",
    title: "Message",
    type: "item",
    icon: <MessageOutlinedIcon />,
    url: "/message",
    breadcrumbs: true,
  },
  {
    id: "education",
    title: "Education",
    type: "item",
    icon: <SchoolOutlinedIcon />,
    url: "/education",
    breadcrumbs: true,
  },
  {
    id: "assesment_library",
    title: "Assesment Library",
    type: "item",
    icon: <LocalLibraryOutlinedIcon />,
    url: "/assesment_library",
    breadcrumbs: true,
  },
  {
    id: "billing",
    title: "Billing",
    type: "item",
    icon: <PaymentsOutlinedIcon />,
    url: "/billing",
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
