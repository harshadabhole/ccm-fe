import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import NotificationSwitch from "./NotificationSwitch";
import FieldWithVisibilityToggle from "./FieldWithVisibilityToggle";

const validationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Current Password is required"),
  newPassword: Yup.string()
    .required("New Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(
      /^(?=.*[a-z])/,
      "Password must contain at least one lowercase letter"
    )
    .matches(
      /^(?=.*[A-Z])/,
      "Password must contain at least one uppercase letter"
    )
    .matches(/^(?=.*\d)/, "Password must contain at least one number")
    .matches(/^(?=.*[@#$%^&+=])/, "Password must contain at least one symbol"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm Password is required"),
});

function ChangePassword() {
  const [showPasswordFields, setShowPasswordFields] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const PasswordData = [
    {
      name: "currentPassword",
      lable: "Current Password",
    },
    {
      name: "newPassword",
      lable: "New Password",
    },
    {
      name: "confirmPassword",
      lable: "Confirm Password",
    },
  ];

  const PasswordRequirements = [
    { lable: "Minimum 8 characters long - the more, the better" },
    { lable: "At list one LowerCase character" },
    { lable: "At list one UpperCase character" },
    { lable: "At list one Number" },
    { lable: "At list one symbol" },
  ];

  const initialNotificationSwitches = [
    {
      name: "chatNotification",
      label: "Chat notification",
      info: "Notify me when anyone sent message",
    },
    {
      name: "fileUpload",
      label: "File uploaded notification",
      info: "Notify me when file uploaded",
    },
    {
      name: "fileDownload",
      label: "File downloaded notification",
      info: "Notify me when file downloaded",
    },
    {
      name: "fileDelete",
      label: "File deleted notification",
      info: "Notify me when file deleted",
    },
  ];

  const [notificationSwitches, setNotificationSwitches] = useState(
    initialNotificationSwitches.reduce(
      (acc, cur) => ({ ...acc, [cur.name]: false }),
      {}
    )
  );

  const handleSwitchChange = (name) => {
    setNotificationSwitches((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleToggleVisibility = (field) => {
    setShowPasswordFields((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <Grid
      container
      spacing={1}
      padding={3}
      justifyContent="center"
      alignItems="center"
    >
      <Card sx={{ width: "100%", boxShadow: "5" }}>
        <Formik
          initialValues={{
            currentPassword: "",
            newPassword: "",
            confirmPassword: "",
            ...notificationSwitches,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            const formData = {
              currentPassword: values.currentPassword,
              newPassword: values.newPassword,
              confirmPassword: values.confirmPassword,
              chatNotification: values.chatNotification,
              fileUpload: values.fileUpload,
              fileDownload: values.fileDownload,
              fileDelete: values.fileDelete,
            };
            console.log("Form Data:", formData);
            // Handle form submission here
          }}
        >
          {({ handleSubmit }) => (
            <CardContent>
              <Grid
                container
                xs={12}
                sx={{ flex: 1, alignItems: "center", marginBottom: "30px" }}
              >
                <Grid item xs={6}>
                  <Typography variant="h6" sx={{ fontSize: "22px" }}>
                    Settings
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  sx={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    variant="outlined"
                    color="error"
                    style={{ marginRight: "8px" }}
                  >
                    Cancel
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ marginRight: "8px" }}
                    onClick={handleSubmit}
                  >
                    Save
                  </Button>
                </Grid>
              </Grid>
              <Typography
                variant="h6"
                component="div"
                xs={12}
                sx={{ fontSize: "22px", marginBottom: "10px" }}
              >
                Password
              </Typography>
              <Grid
                container
                xs={12}
                sx={{ flex: 1, alignItems: "top", gap: "30px" }}
              >
                <Grid item xs={5}>
                  <Grid item xs={12} overflow="hidden">
                    <Typography
                      variant="h6"
                      component="div"
                      xs={12}
                      sx={{ fontSize: "22px", marginBottom: "5px" }}
                    >
                      Change Password
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    overflow="hidden"
                    sx={{ marginBottom: "30px" }}
                  >
                    <Typography
                      variant="p"
                      sx={{ fontWeight: "light", fontSize: "18px" }}
                    >
                      Do you want to change your password?
                    </Typography>
                  </Grid>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Form>
                        <Grid item xs={8} marginBottom={1}>
                          {PasswordData.map((field) => (
                            <FieldWithVisibilityToggle
                              key={field.name}
                              name={field.name}
                              lables={field.lable}
                              show={showPasswordFields[field.name]}
                              handleToggleVisibility={() =>
                                handleToggleVisibility(field.name)
                              }
                            />
                          ))}
                        </Grid>
                      </Form>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        sx={{
                          fontSize: "22px",
                          marginBottom: "10px",
                        }}
                      >
                        Password Requirements :
                      </Typography>
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: "20px",
                          marginBottom: "10px",
                        }}
                      >
                        Ensure that this requirement are met:
                      </Typography>

                      {PasswordRequirements.map((field) => {
                        return (
                          <Typography
                            key={field.lable}
                            sx={{
                              fontWeight: "400",
                              fontSize: "18px",
                              marginBottom: "3px",
                            }}
                          >
                            {field.lable}
                          </Typography>
                        );
                      })}
                    </Grid>
                    <Grid item xs={12}></Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <Typography
                        variant="h6"
                        component="div"
                        xs={12}
                        sx={{ fontSize: "22px", marginBottom: "5px" }}
                      >
                        Notification
                      </Typography>
                    </Grid>
                    <Grid item xs={12}>
                      <Form>
                        {initialNotificationSwitches.map((switchData) => (
                          <NotificationSwitch
                            key={switchData.name}
                            {...switchData}
                            switchState={notificationSwitches[switchData.name]}
                            handleSwitchChange={handleSwitchChange}
                          />
                        ))}
                      </Form>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </CardContent>
          )}
        </Formik>
      </Card>
    </Grid>
  );
}

export default ChangePassword;
