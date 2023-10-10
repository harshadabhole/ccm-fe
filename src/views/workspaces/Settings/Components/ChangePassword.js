import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { List, ListItem } from "@mui/material";
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

function ChangeMyPassword(props) {
  console.log("props", props);
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

  const handleToggleVisibility = (field) => {
    setShowPasswordFields((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  return (
    <Grid container spacing={1} padding={2} justifyContent="center">
      <Formik
        initialValues={{
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
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
        }}
      >
        {({ handleSubmit }) => (
          <>
            <Grid
              container
              xs={12}
              sx={{ flex: 1, alignItems: "center", marginBottom: "30px" }}
            >
              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "flex-end" }}
              >
                <Button
                  variant="outlined"
                  color="error"
                  style={{ marginRight: "8px" }}
                  onClick={() => props.handleClose()}
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

            <Grid container xs={12} sx={{ flex: 1, alignItems: "top" }}>
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
                <Grid item xs={6}>
                  <Form>
                    <Grid item xs={12} marginBottom={1}>
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

                <Grid container xs={12}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontSize: "22px",
                      marginBottom: "10px",
                    }}
                  >
                    Password Requirements :
                  </Typography>
                  <Grid item xs={12}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "400",
                        fontSize: "20px",
                      }}
                    >
                      Ensure that this requirement are met:
                    </Typography>
                  </Grid>

                  <List>
                    {PasswordRequirements.map((field) => {
                      return (
                        <ListItem
                          key={field.lable}
                          sx={{
                            fontWeight: "400",
                            fontSize: "18px",
                            marginBottom: "3px",
                          }}
                        >
                          {field.lable}
                        </ListItem>
                      );
                    })}
                  </List>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </Formik>
    </Grid>
  );
}

export default ChangeMyPassword;
