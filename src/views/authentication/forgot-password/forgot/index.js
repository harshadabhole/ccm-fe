import React from "react";
import { useNavigate } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Link,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

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

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  });
  

  return (
    <MainContainer>
      <LeftSection sx={{width: { xs: '100%', md: '50%' },'.css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input':{height: "15px",}}}>
        <Formik
          initialValues={{
            email: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values, "values");
            navigate("/otp");
          }}
        >
          {({ handleSubmit }) => (
            <Form>
              <Grid item xs={12} marginBottom={1}>
              <Typography
                variant="body"
                gutterBottom
                sx={{
                  // fontFamily:
                  //   "sharp-sans-bold, fallback-font, Arial, sans-serif",
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "0em",
                  textTransform: "none",
                  marginBottom: "12px",
                  fontWeight: 800,
                  // color: "#0477C5",
                }}
              >
                Forgot Password
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
                    />
                  </Paper>
                  <ErrorMessage
                    name="email"
                    component="div"
                    style={{ color: "red", marginTop: '8px' }}
                  />
                </Grid>
                <Grid
                  item
                  xs={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    // variant="body1"
                    style={{
                      cursor: "pointer"
                    }}
                    component={RouterLink}
                    to="/signin"
                  >
                    <ArrowBackIosNewOutlinedIcon
                      color='primary'
                      sx={{
                        fontSize: "12px",
                        marginRight: "10px",
                        fontWeight: 700,
                      }}
                    />
                    <Link  color='primary'>
                      Back to Sign in
                    </Link>
                  </Typography>
                </Grid>
              </Grid>
              <Button
                variant="contained"
                color="primary"
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
                Send OTP
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
