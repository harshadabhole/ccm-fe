import { Grid, Typography, Checkbox } from "@mui/material";
import React from "react";
import DataTable from "react-data-table-component";

function NotificationSettings() {

  const customStyles = {
    rows: {
      style: {
        borderBottom: "none",
      },
    },
  };

  const initialNotificationSettings = [
    {
      id: 1,
      notification_type: "Alerts",
      settings: [
        {
          type: "Low",
          text: true,
          email: false,
          push_notification: true,
        },
        {
          type: "Medium",
          text: true,
          email: true,
          push_notification: true,
        },
        {
          type: "High",
          text: false,
          email: true,
          push_notification: false,
        },
      ],
      sortable: false,
    },
    {
      id: 2,
      notification_type: "Billing",
      settings: [
        {
          type: "Monthly Bill Generate",
          text: false,
          email: true,
          push_notification: false,
        },
        {
          type: "Payment Reminder",
          text: true,
          email: false,
          push_notification: true,
        },
      ],
      sortable: false,
    },
    {
      id: 3,
      notification_type: "Task",
      settings: [
        {
          type: "Reminder",
          text: true,
          email: false,
          push_notification: true,
        },
      ],
      sortable: false,
    },
    {
      id: 3,
      notification_type: "Note",
      settings: [
        {
          type: "Add",
          text: true,
          email: false,
          push_notification: true,
        },
        {
          type: "Delete",
          text: true,
          email: true,
          push_notification: true,
        },
        {
          type: "Update",
          text: false,
          email: false,
          push_notification: true,
        },
      ],
      sortable: false,
    },
  ];

  const columns = [
    {
      name: "Notification Names",
      selector: "notification_type",
      sortable: false,
      spanAbove: true, // Merge cells in this column
    },
    {
      name: "Type",
      selector: "settings",
      cell: (row) =>
        row.settings.map((setting, index) => (
          <div key={index}>
            <Typography variant="body2">{setting.type}</Typography>
          </div>
        )),
      sortable: false,
      style: {
        // Add custom style to remove dividers
        borderBottom: "0px",
      },
    },
    {
      name: "Text",
      selector: "settings",
      cell: (row) =>
        row.settings.map((setting, index) => (
          <div key={index}>
            <Checkbox checked={setting.text} />
          </div>
        )),
      sortable: false,
      style: {
        // Add custom style to remove dividers
        borderRight: "none",
      },
    },
    {
      name: "Email",
      selector: "settings",
      cell: (row) =>
        row.settings.map((setting, index) => (
          <div key={index}>
            <Checkbox checked={setting.email} />
          </div>
        )),
      sortable: false,
      style: {
        // Add custom style to remove dividers
        borderRight: "none",
      },
    },
    {
      name: "Push Notification",
      selector: "settings",
      cell: (row) =>
        row.settings.map((setting, index) => (
          <div key={index}>
            <Checkbox checked={setting.push_notification} />
          </div>
        )),
      sortable: false,
      style: {
        // Add custom style to remove dividers
        borderRight: "none",
      },
    },
  ];

  // Flatten the settings into individual rows
  const notificationSettings = initialNotificationSettings.flatMap((item) =>
    item.settings.map((setting, index) => ({
      id: `${item.id}_${index}`,
      notification_type: index === 0 ? item.notification_type : "",
      settings: [setting],
      noDivider:true ,
    }))
  );

  return (
    <Grid container spacing={2} padding={3} sx={2}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <DataTable columns={columns} data={notificationSettings} responsive  customStyles={customStyles} noDivider={true}/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NotificationSettings;
