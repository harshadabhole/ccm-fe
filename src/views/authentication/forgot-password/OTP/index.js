import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/system";
import { TextField, Grid, Button, Typography } from "@mui/material";
import { useFormik } from "formik";
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

const OTPForm = () => {
  const navigate = useNavigate();

  const validationSchema = Yup.object().shape({
    digit1: Yup.string()
      .matches(/^\d$/, "Enter a single digit")
      .required("Required"),
    digit2: Yup.string()
      .matches(/^\d$/, "Enter a single digit")
      .required("Required"),
    digit3: Yup.string()
      .matches(/^\d$/, "Enter a single digit")
      .required("Required"),
    digit4: Yup.string()
      .matches(/^\d$/, "Enter a single digit")
      .required("Required"),
    digit5: Yup.string()
      .matches(/^\d$/, "Enter a single digit")
      .required("Required"),
    digit6: Yup.string()
      .matches(/^\d$/, "Enter a single digit")
      .required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      digit1: "",
      digit2: "",
      digit3: "",
      digit4: "",
      digit5: "",
      digit6: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const otp = `${values.digit1}${values.digit2}${values.digit3}${values.digit4}${values.digit5}${values.digit6}`;
      // Handle OTP submission here
      console.log("Submitted OTP: ", otp);
      navigate("/resetPassword");
    },
  });

  const [timer, setTimer] = useState(90); // Initial timer value in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1); // Decrement the timer by 1 second
      }
    }, 1000); // Update the timer every 1000 milliseconds (1 second)

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [timer]);

  // Convert the timer value into "mm:ss" format
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <form onSubmit={formik.handleSubmit}>
      <Typography
        variant="body"
        gutterBottom
        sx={{
          // fontFamily: 'sharp-sans-bold, fallback-font, Arial, sans-serif',
          fontSize: "24px",
          lineHeight: "32px",
          letterSpacing: "0em",
          textTransform: "none",
          marginBottom: "12px",
          fontWeight: 800,
          // color: '#0477C5',
        }}
      >
        Enter OTP
      </Typography>
      <Typography
        gutterBottom
        varient="body"
        sx={{
          // fontFamily: 'sharp-sans-bold, fallback-font, Arial, sans-serif',
          fontSize: "16px",
          lineHeight: "32px",
          letterSpacing: "0em",
          textTransform: "none",
          marginBottom: "12px",
          // fontWeight: 800,
          // color: "#0477C5",
        }}
      >
        We have sent otp on your email.
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            height: "20px",
          },
        }}
      >
        {[1, 2, 3, 4, 5, 6].map((index) => (
          <Grid item xs={2} key={index}>
            <TextField
              fullWidth
              // size='small'
              variant="outlined"
              name={`digit${index}`}
              type="number"
              color="primary"
              inputProps={{ maxLength: 1 }}
              {...formik.getFieldProps(`digit${index}`)}
              error={
                formik.touched[`digit${index}`] &&
                Boolean(formik.errors[`digit${index}`])
              }
              helperText={
                formik.touched[`digit${index}`] &&
                formik.errors[`digit${index}`]
              }
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{
              marginTop: "16px",
              color: "#FFF",
              // marginBottom: "16px",
              height: "40px",
              fontWeight: 700,
            }}
          >
            Submit OTP
          </Button>
        </Grid>
        <Grid>
          <Button>
            <Typography
              gutterBottom
              type="button"
              varient="body"
              sx={{
                // fontFamily: 'sharp-sans-bold, fallback-font, Arial, sans-serif',
                fontSize: "16px",
                lineHeight: "32px",
                letterSpacing: "0em",
                textTransform: "none",
                // color: '#0477C5',
                marginLeft: "8px",
                marginTop: "3px",
              }}
            >
              Reset OTP again
            </Typography>
          </Button>
        </Grid>
      </Grid>
      <Grid>
        <Typography
          gutterBottom
          varient="body"
          sx={{
            // fontFamily: 'sharp-sans-bold, fallback-font, Arial, sans-serif',
            fontSize: "12px",
            lineHeight: "32px",
            letterSpacing: "0em",
            textTransform: "none",
            // color: "#0477C5",
          }}
        >
          Resend otp in{" "}
          <span style={{ color: "primary" }}>
            {minutes}:{seconds < 10 ? `0${seconds}` : seconds} secs
          </span>
        </Typography>
      </Grid>
    </form>
  );
};

const OTP = () => {
  return (
    <MainContainer>
      <LeftSection sx={{ width: { xs: "100%", md: "50%" } }}>
        <OTPForm />
      </LeftSection>
      <RightSection
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
        }}
      />
    </MainContainer>
  );
};

export default OTP;
