import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";

const ProviderProfile = () => {
  return (
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12}>
        <Card sx={{ boxShadow: 5 }}>
          <CardContent>
            Profile!
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default ProviderProfile;
