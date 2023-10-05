import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Avatar,
  Box,
} from "@mui/material";
import userImage from "../../../../../assets/avatar-s-11.jpg";

const containerStyle = {
  position: "relative",
};

const avatarStyle = {
  position: "relative",
  height: 300,
  background:
    'url("https://www.shutterstock.com/shutterstock/photos/1416955070/display_1500/stock-vector-abstract-medical-background-with-flat-icons-and-symbols-template-design-with-concept-and-idea-for-1416955070.jpg")', // Replace with the actual path to your background image
  backgroundSize: "cover",
  backgroundColor: "rgba(238, 231, 231, 0.7)",
};

const userProfileStyle = {
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  flexDirection: "column",
  padding: "16px",
  color: "#fff", // Set text color
};

function UserProfileDetails() {
  return (
    <Grid container spacing={2} padding={3} sx={containerStyle}>
      <Grid item xs={12}>
        <Card sx={{ boxShadow: 3 }}>
          <CardContent sx={{ alignItems: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{ marginBottom: "30px" }}
            >
              Profile
            </Typography>
            <Grid item xs={12} padding={1}>
              <Box style={avatarStyle} sx={{marginBottom:"30px"}}>
                <Box style={userProfileStyle}>
                  <Avatar
                    alt="User Profile Photo"
                    src={userImage} // Replace with the actual path to your profile photo
                    sx={{ width: 100, height: 100, marginBottom: "0px" }}
                  />
                </Box>
              </Box>
              <Grid container xs={12} spacing={2}>
                <Grid item xs={6} spacing={2}>
                <Grid container xs={12} spacing={2}>
                  <Grid item xs={4} spacing={2}>
                  <Typography
              variant="h6"
              component="div"
              sx={{ marginBottom: "30px", fontSize:"18px" }}
            >
              Specialty :
            </Typography>
                  </Grid>
                  <Grid item xs={8} spacing={2}>
                  <Typography
              variant="h6"
              component="div"
              sx={{ marginBottom: "30px", fontSize:"18px", fontWeight:400 }}
            >
              Orthologist
            </Typography>
                    
                  </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={6} spacing={2}>
                <Grid container xs={12} spacing={2}>
                  <Grid item xs={4} spacing={2}>
                  <Typography
              variant="h6"
              component="div"
              sx={{ marginBottom: "30px", fontSize:"18px" }}
            >
              Role :
            </Typography>
                  </Grid>
                  <Grid item xs={8} spacing={2}>
                  <Typography
              variant="h6"
              component="div"
              sx={{ marginBottom: "30px", fontSize:"18px", fontWeight:400 }}
            >
              Admin
            </Typography>
                    
                  </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default UserProfileDetails;
