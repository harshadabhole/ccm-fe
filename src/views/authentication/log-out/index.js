import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  Button,
  Grid,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import { Formik, Form} from "formik";
import { logout } from "../../../store/slices/authSlices";

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

  const handleSubmit = () => {
    navigate('/signin');
    dispatch(logout());
  }

  return (
    <MainContainer>
      <LeftSection sx={{width: { xs: '100%', md: '50%' },}}>
        <Formik
        >
          {({ }) => (
            <Form
              sx={{
                display: "flex",
                alignItems: "center"
              }}>
              <Typography
                variant="body"
                gutterBottom
                sx={{
                  // fontFamily:
                  //   "sharp-sans-bold, fallback-font, Arial, sans-serif",
                  fontSize: "22px",
                  lineHeight: "32px",
                  letterSpacing: "0em",
                  textTransform: "none",
                  marginBottom: "12px",
                  fontWeight: 800,
                  // color: "#0477C5",
                  display: "flex",
                  justifyContent: "center"
                }}
              >
                Want to Log out ?
              </Typography>
              <Typography
                gutterBottom
                varient='body'
                sx={{
                  // fontFamily:
                  //   "sharp-sans-bold, fallback-font, Arial, sans-serif",
                  fontSize: "18px",
                  lineHeight: "32px",
                  letterSpacing: "0em",
                  textTransform: "none",
                  marginBottom: "12px",
                  fontWeight: 800,
                  color: "#0477C5",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Are you sure ?         
              </Typography>
              <Button
                variant="contained"
                fullWidth
                style={{
                  marginTop: "16px",
                  backgroundColor: "#FFF",
                  color: "black",
                  marginBottom: "16px",
                  fontWeight: 600,
                  width: "400px",
                  // fontFamily: 'body'
                }}
                onClick={handleSubmit}
              >
                Yes, Log me logout
              </Button>
            </Form>
          )}
        </Formik>
      </LeftSection >
      <RightSection
        sx={{
          display: { xs: 'none', sm: 'none', md: 'block' },
        }}/>
    </MainContainer>
  );
}

export default LoginPage;
