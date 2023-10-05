import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import UserProfileDetails from "./UserProfileDetails";

function AdminUser() {
  return (
    <UserProfileDetails/>
    // <Grid container spacing={1} padding={3}>
    //   <Card
    //     sx={{
    //       width: "100vw",
    //       boxShadow: "5", // Set box shadow
    //     }}
    //   >
    //     <CardContent sx={{ display: "flex", alignItems: "center" }}>
    //       <Grid item xs={12}>
    //         <Typography variant="h6" component="div" sx={{ flex: 1 }}>
    //           Admin User
    //         </Typography>
    //       </Grid>


    //     </CardContent>
    //   </Card>
    // </Grid>
  );
}

export default AdminUser;
