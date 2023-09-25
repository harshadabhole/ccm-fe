import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import LogoutRoundedIcon from "@mui/icons-material/LogoutRounded";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CallIcon from "@mui/icons-material/Call";
import TaskOutlinedIcon from "@mui/icons-material/TaskOutlined";
import BatteryAlertOutlinedIcon from "@mui/icons-material/BatteryAlertOutlined";
import MessageOutlinedIcon from "@mui/icons-material/MessageOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import LocalLibraryOutlinedIcon from "@mui/icons-material/LocalLibraryOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";

export const menus = {
  id: "projectMenuItems",
  type: "group",
  children: [
    {
      id: "analytics",
      title: "Analytics",
      type: "item",
      icon: <DashboardOutlinedIcon />,
      url: `/analytics`,
      breadcrumbs: true,
    },
    {
      id: "patients",
      title: "Patients",
      type: "item",
      icon: <AccountCircleRoundedIcon />,
      url: `/patients`,
      breadcrumbs: true,
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
    },
  ],
};
