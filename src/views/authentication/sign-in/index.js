import React, { useEffect } from "react";
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
} from "@mui/material";
import { styled } from "@mui/system";
import { Link as RouterLink } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { closeDrawer, openDrawer, toggleDrawer } from "../../../store/slices/drawerSlices";

const MainContainer = styled(Grid)({
  height: "100vh",
  display: "flex",
});

const LeftSection = styled(Grid)({
  width: "50%",
  background: "white",
  padding: "10rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const RightSection = styled(Grid)({
  width: "50%",
  background: "#42427C",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(closeDrawer())
  // })
  
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  return (
    <MainContainer>
      <LeftSection
        sx={{
          width: { xs: "100%", md: "50%" },
          ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            height: "15px",
          },
        }}
      >
        <Formik
          initialValues={{
            email: "",
            password: "",
            rememberMe: false,
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(openDrawer());
            navigate("/analytics");
          }}
        >
          {({ handleSubmit }) => (
            <Form>
              <Grid item xs={12} marginBottom={1}>
                <Typography
                  // variant="h4"
                  gutterBottom
                  sx={{
                    fontSize: "24px",
                    lineHeight: "32px",
                    letterSpacing: "0em",
                    textTransform: "none",
                    fontWeight: 800,
                    marginBottom: "25px",
                    // color: "#4C4C4C",
                  }}
                >
                  Hey, good to see you
                </Typography>
              </Grid>
              <Grid item xs={12} marginBottom={1}>
                <Typography
                  // variant="h6"
                  sx={{
                    fontSize: "20px",
                    lineHeight: "32px",
                    letterSpacing: "0em",
                    textTransform: "none",
                    fontWeight: 800,
                    marginBottom: "15px",
                    // color: "#0477C5",
                  }}
                >
                  Let's Sign in you
                </Typography>
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper elevation={5}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      placeholder="Email"
                      name="email"
                      size="small"
                    />
                  </Paper>
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={3}>
                    <Field
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      size="small"
                      placeholder="Password"
                      name="password"
                      type="password"
                    />
                  </Paper>
                  <ErrorMessage
                    name="password"
                    component="div"
                    style={{ color: "red" }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Grid>
                    <FormControlLabel
                      control={
                        <Checkbox
                          name="rememberMe"
                          color="primary"
                          size="small"
                        />
                      }
                      label="Remember me"
                    />
                    <ErrorMessage
                      name="rememberMe"
                      component="div"
                      style={{ color: "red" }}
                    />
                  </Grid>
                  <Grid>
                    <Typography
                      variant="body"
                      style={{
                        marginTop: "10px",
                        marginBottom: "8px",
                        cursor: "pointer",
                      }}
                    >
                      <Link
                        color="primary"
                        component={RouterLink}
                        to="/forgotPassword"
                      >
                        Forgot Password?
                      </Link>
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                fullWidth
                style={{
                  marginTop: "16px",
                  color: "#FFF",
                  marginBottom: "16px",
                  height: "40px",
                  fontWeight: 700,
                }}
                onClick={handleSubmit}
              >
                Let's get started
              </Button>
            </Form>
          )}
        </Formik>
      </LeftSection>
      <RightSection
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
    </MainContainer>
  );
}

export default LoginPage;
