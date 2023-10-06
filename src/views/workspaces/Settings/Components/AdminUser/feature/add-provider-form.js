import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
  Paper,
  RadioGroup,
  Radio,
  Input,
  CardContent,
  Card,
  IconButton,
} from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { styled } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { IconUpload } from "@tabler/icons-react";

const MainContainer = styled(Grid)({
  height: "100vh",
  display: "flex",
  marginTop: "20px",
});

function AddProvider() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);

  const fileTypes = ["JPEG", "PNG", "GIF"];

  const handleChange = (file) => {
    setFile(file);
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
    phoneNumber: Yup.string().required("Phone Number is required"),
    country: Yup.string().required("Country is required"),
    specialty: Yup.string().required("Specialty is required"),
    state: Yup.string().required("State is required"),
    website: Yup.string()
      .url("Invalid URL format")
      .required("Website is required"),
    zipCode: Yup.string().required("ZipCode is required"),
    physicalAddress: Yup.string().required("Physical Address is required"),
    addressLine1: Yup.string().required("Address Line1 is required"),
    addressLine2: Yup.string().required("Address Line2 is required"),
    country2: Yup.string().required("Country is required"),
    zipCode2: Yup.string().required("ZipCode is required"),
    providerGroupName: Yup.string().required("Provider Group Name is required"),
  });

  const DropBox = () => {
    return (
      <Grid container>
        <Card
          sx={{
            height: "20vh",
            width: "50vw",
            // marginLeft: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: 5,
          }}
        >
          <CardContent>
            <IconButton sx={{ marginLeft: "32px" }}>
              <IconUpload color="#42427C" />
            </IconButton>
            <Typography>Drop Logo Here</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
  };

  const content = DropBox();

  return (
    <MainContainer>
      <Formik
        initialValues={{
          email: "",
          providerGroupName: "",
          password: "",
          rememberMe: false,
          phoneNumber: "",
          country: "",
          specialty: "",
          state: "",
          website: "",
          zipCode: "",
          physicalAddress: "",
          addressLine1: "",
          addressLine2: "",
          country2: "",
          zipCode2: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          // dispatch(openDrawer());
          // navigate("/analytics");
          console.log("values", values);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <Grid container>
              <Grid item xs={6}>
                <Typography
                  // variant="h6"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    letterSpacing: "0em",
                    textTransform: "none",
                    fontWeight: 600,
                    marginBottom: "15px",
                    // color: "#0477C5",
                  }}
                >
                  Add Provider Group
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{ display: "flex", justifyContent: "end", marginBottom: 2 }}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  style={{
                    height: "40px",
                    fontWeight: 700,
                    width: "100px",
                  }}
                  // onClick={handleSubmit}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  style={{
                    height: "40px",
                    fontWeight: 700,
                    marginLeft: "20px",
                    width: "100px",
                  }}
                  onClick={handleSubmit}
                >
                  Save
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Typography
                  // variant="h6"
                  sx={{
                    fontSize: "18px",
                    lineHeight: "32px",
                    letterSpacing: "0em",
                    textTransform: "none",
                    fontWeight: 600,
                    // marginBottom: "15px",
                    // color: "#0477C5",
                  }}
                >
                  Demographics
                </Typography>
              </Grid>
              <Grid
                item
                xs={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "18px",
                    lineHeight: "32px",
                    letterSpacing: "0em",
                    textTransform: "none",
                    fontWeight: 600,
                    marginLeft: "7px",
                  }}
                >
                  Billing Address
                </Typography>
                <Field name="gender">
                  {({ field }) => (
                    <FormControlLabel
                      value="same as primary address"
                      control={<Radio {...field} />}
                      label="Same as primary address"
                      labelPlacement="end" // Place the label after the radio button
                    />
                  )}
                </Field>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">
                    Provider Group Name
                  </Typography>
                  <Paper elevation={5}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="Provider Group Name"
                      name="providerGroupName"
                    />
                  </Paper>
                  <ErrorMessage
                    name="providerGroupName"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Address Line 1</Typography>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="Address Line 1"
                      name="addressLine1"
                    />
                  </Paper>
                  <ErrorMessage
                    name="addressLine1"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Email Id</Typography>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="Email Id"
                      name="email"
                    />
                  </Paper>
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Address Line 2</Typography>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="Address Line 2"
                      name="addressLine2"
                    />
                  </Paper>
                  <ErrorMessage
                    name="addressLine2"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Phone Number</Typography>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="Phone Number"
                      name="phoneNumber"
                    />
                  </Paper>
                  <ErrorMessage
                    name="phoneNumber"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Country</Typography>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="Country"
                      name="country"
                    />
                  </Paper>
                  <ErrorMessage
                    name="country"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Speciality</Typography>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="Speciality"
                      name="specialty"
                    />
                  </Paper>
                  <ErrorMessage
                    name="specialty"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">State</Typography>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="State"
                      name="state"
                    />
                  </Paper>
                  <ErrorMessage
                    name="state"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">Website</Typography>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="Website"
                      name="website"
                    />
                  </Paper>
                  <ErrorMessage
                    name="website"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="subtitle1">ZipCode</Typography>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="ZipCode"
                      name="zipCode"
                    />
                  </Paper>
                  <ErrorMessage
                    name="zipCode"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid
                  container
                  spacing={3}
                  sx={{ paddingTop: "24px", paddingLeft: "24px", spacing: 3 }}
                >
                  <Grid item xs={6}>
                    <Typography
                      // variant="h6"
                      sx={{
                        fontSize: "20px",
                        lineHeight: "32px",
                        letterSpacing: "0em",
                        textTransform: "none",
                        fontWeight: 600,
                        marginBottom: "15px",
                        // color: "#0477C5",
                      }}
                    >
                      Physical Address
                    </Typography>
                    <Grid item >
                      <Typography variant="subtitle1">ZipCode</Typography>
                      <Paper elevation={3}>
                        <Field
                          as={TextField}
                          variant="outlined"
                          fullWidth
                          placeholder="ZipCode"
                          name="zipCode"
                        />
                      </Paper>
                      <ErrorMessage
                        name="zipCode"
                        component="div"
                        style={{ color: "red" }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item xs={6}>
                    <FileUploader
                      multiple={true}
                      handleChange={handleChange}
                      name="file"
                      types={fileTypes}
                      label="Drop Here Logo"
                      children={content}
                    />
                    <Typography
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      {file
                        ? `File name: ${file[0].name}`
                        : "no files uploaded yet"}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </MainContainer>
  );
}

export default AddProvider;
