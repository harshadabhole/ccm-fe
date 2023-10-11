import { Grid, Typography, Checkbox } from "@mui/material";
import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { customNotificationTableStyle } from "../../../../ccm-constant";

function NotificationSettings() {
  const initialNotificationSettings = [
    {
      id: 0,
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
      id: 1,
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
      id: 2,
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
  const [checkboxValues, setCheckboxValues] = useState(
    initialNotificationSettings
  );

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
            <Typography
              variant="body1"
              sx={{
                font: "normal normal medium 14px Gilroy",
                letterSpacing: "0px",
                color: "#4C4C4CB2",
                opacity: 1,
              }}
            >
              {setting.type}
            </Typography>
          </div>
        )),
      sortable: false,
      style: {
        borderBottom: "0px",
      },
    },
    {
      name: "Text",
      selector: "settings",
      cell: (row) =>
        row.settings.map((setting, index) => (
          <div key={index}>
            <Checkbox
              checked={setting.text}
              onClick={() => handleCheckboxClick(row.id, "text")}
            />
          </div>
        )),
      sortable: false,
      style: {
        borderRight: "none",
      },
    },
    {
      name: "Email",
      selector: "settings",
      cell: (row) =>
        row.settings.map((setting, index) => (
          <div key={index}>
            <Checkbox
              checked={setting.email}
              onClick={() => handleCheckboxClick(row.id, "email")}
            />
          </div>
        )),
      sortable: false,
      style: {
        borderRight: "none",
      },
    },
    {
      name: "Push Notification",
      selector: "settings",
      cell: (row) =>
        row.settings.map((setting, index) => (
          <div key={index}>
            <Checkbox
              checked={setting.push_notification}
              onClick={() => handleCheckboxClick(row.id, "push_notification")}
            />
          </div>
        )),
      sortable: false,
      style: {
        borderRight: "none",
      },
    },
  ];

  const handleCheckboxClick = (notificationIndex, field) => {
    const updatedSettings = [...checkboxValues];
    updatedSettings[notificationIndex.split("_")[0]].settings[
      notificationIndex.split("_")[1]
    ][field] =
      !updatedSettings[notificationIndex.split("_")[0]].settings[
        notificationIndex.split("_")[1]
      ][field];

    setCheckboxValues(updatedSettings);
    console.log("updatedSettings", updatedSettings);
  };

  // Flatten the settings into individual rows
  const notificationSettings = checkboxValues.flatMap((item) =>
    item.settings.map((setting, index) => ({
      id: `${item.id}_${index}`,
      notification_type: index === 0 ? item.notification_type : "",
      settings: [setting],
      noDivider: true,
    }))
  );

  return (
    <Grid container spacing={2} padding={3} sx={2}>
      <Grid item xs={12}>
        <Grid item xs={12}>
          <DataTable
            columns={columns}
            data={notificationSettings}
            responsive
            customStyles={customNotificationTableStyle}
            noDivider={true}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default NotificationSettings;
