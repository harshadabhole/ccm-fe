import React from "react";
import {  Typography, Divider, Grid, Paper } from "@mui/material";
import cardStyle from "../../../../../theme/card-layout";

function UsedDevice({item}) {
  return (
    <Paper elevation={3} style={cardStyle}>
      <Grid
      container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: 'space-around',
        padding: '2px',
        marginTop: '15px'
      }}
      >
      <Grid item xs={12} sm={2}>
      <img
        src={item.url}
        alt="Circular Avatar"
        style={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          marginRight: 2,
        }}
      />
      </Grid>
      <Grid item xs={12} sm={2}>
        <Typography >{item.name}</Typography>
        </Grid>
        {/* <Divider orientation="vertical" flexItem/> */}
        <Grid item xs={12} sm={6}>
        <Typography  color="textSecondary">
          {item.description}
        </Typography>
        </Grid>
    </Grid>
    </Paper>
  );
}

export default UsedDevice;
