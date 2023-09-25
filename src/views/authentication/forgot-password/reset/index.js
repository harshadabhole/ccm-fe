import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNotification } from "../../../../hooks/use-notification";


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
  const { notifySuccess } = useNotification();

  const validationSchema = Yup.object().shape({
    new_password: Yup.string().required("Field is required"),
    confirm_password: Yup.string().required("Field is required")
    .oneOf([Yup.ref("new_password"), null], "Passwords must match"),

  });

  return (
    <MainContainer>
      <LeftSection sx={{width: { xs: '100%', md: '50%' },'.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{height: "15px"}}}>
        <Formik
          initialValues={{
            new_password: "",
            confirm_password: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values, "values");
            notifySuccess("Password Successfully Updated")
            navigate("/signin");
          }}
        >
          {({ handleSubmit }) => (
            <Form>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  // fontSize: "24px",
                  // lineHeight: "32px",
                  // letterSpacing: "0em",
                  // textTransform: "none",
                  marginBottom: "15px",
                  fontWeight: 700,
                  // color: "#0477C5",
                }}
              >
                Reset Password
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Paper elevation={3}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    size='small'
                    fullWidth
                    placeholder="Enter New Password"
                    name="new_password"
                  />
                  </Paper>
                  <ErrorMessage
                    name="new_password"
                    component="div"
                    style={{ color: "red", marginTop:"10px" }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Paper elevation={3}>
                  <Field
                    as={TextField}
                    variant="outlined"
                    fullWidth
                    size='small'
                    placeholder="Enter Confirm Password"
                    name="confirm_password"
                    type="password"
                  />
                  </Paper>
                  <ErrorMessage
                    name="confirm_password"
                    component="div"
                    style={{ color: "red", marginTop:"10px" }}
                  />
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color='primary'
                fullWidth
                style={{
                  marginTop: "16px",
                  color: "#FFF",
                  marginBottom: "16px",
                  height: "40px", 
                  fontWeight: 700
                }}
                onClick={handleSubmit}
              >
                Update Password
              </Button>
            </Form>
          )}
        </Formik>
      </LeftSection>
      <RightSection
       sx={{
        display: { xs: 'none', sm: 'none', md: 'block' },
      }}/>
    </MainContainer>
  );
}

export default LoginPage;
