import React, { useState } from "react";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import { List, ListItem } from "@mui/material";
import FieldWithVisibilityToggle from "./FieldWithVisibilityToggle";

const validRequirementStyle = {
  color: "green", // Change to your desired color for valid requirements
};

const invalidRequirementStyle = {
  color: "red", // Change to your desired color for invalid requirements
};

const isRequirementMet = (requirementName, yourPassword) => {
  // Create a regular expression for each condition
  const regexPatterns = {
    minLength: /^.{8,}$/, // Minimum 8 characters long
    hasLowerCase: /[a-z]/, // At least one lowercase character
    hasUpperCase: /[A-Z]/, // At least one uppercase character
    hasNumber: /[0-9]/, // At least one number
    hasSymbol: /[@#$%^&+=]/, // At least one symbol
  };

  // Check the specified requirement
  switch (requirementName) {
    case "Minimum 8 characters long - the more, the better":
      return regexPatterns.minLength.test(yourPassword); // Replace yourPassword with the actual password to test
    case "At list one LowerCase character":
      return regexPatterns.hasLowerCase.test(yourPassword); // Replace yourPassword with the actual password to test
    case "At list one UpperCase character":
      return regexPatterns.hasUpperCase.test(yourPassword); // Replace yourPassword with the actual password to test
    case "At list one Number":
      return regexPatterns.hasNumber.test(yourPassword); // Replace yourPassword with the actual password to test
    case "At list one symbol":
      return regexPatterns.hasSymbol.test(yourPassword); // Replace "yourPassword" with the actual password to test
    default:
      // Handle other requirements or throw an error for unknown requirements
      throw new Error(`Unknown requirement: ${requirementName}`);
  }
};

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
  const [NewPasswordValues, setNewPasswordValues] = useState()
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
                  style={{
                    marginRight: "8px",
                    textTransform: "none",
                    width: "263px",
                  }}
                  onClick={() => props.handleClose()}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  style={{
                    marginRight: "8px",
                    textTransform: "none",
                    width: "263px",
                  }}
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
                  sx={{ marginBottom: "5px" }}
                >
                  Change Password
                </Typography>
              </Grid>

              <Grid container spacing={2} xs={12}>
                <Grid item xs={12} md={10} lg={8} sm={12}>
                  <Form>
                    <Grid item xs={12} md={10} lg={8} sm={12} marginBottom={1}>
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

                <Grid container xs={12} sx={3} padding={2}>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: "18px",
                      marginBottom: "10px",
                      fontWeight: "500",
                    }}
                  >
                    Password Requirements :
                  </Typography>
                  <Grid item xs={12}>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "400",
                      }}
                    >
                      Ensure that this requirement are met:
                    </Typography>
                  </Grid>

                  <List>
                    {PasswordRequirements.map((field) => {
                      const isMet = isRequirementMet(
                        field.lable,
                        // values.newPassword
                      ); // Pass the new password to isRequirementMet
                      return (
                        <ListItem key={field.lable}>
                          <Typography
                            variant="body1"
                            sx={{
                              fontSize: "18px",
                              ...(isMet
                                ? validRequirementStyle
                                : invalidRequirementStyle),
                            }}
                          >
                            {field.lable}
                          </Typography>
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
