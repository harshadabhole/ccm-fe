import React from "react";
import { Card, CardContent, Grid, Typography } from "@mui/material";
import Avatar from "../../../../assets/avatar-s-11.jpg";

const TaskCard = ({ item }) => {
  return (
    <Grid container spacing={2} sx={{ display: "flex", alignItems: "center" }}>
      <Grid item xs={3}>
        <img
          src={Avatar}
          alt="Circular Avatar"
          style={{
            width: 60,
            height: 60,
            borderRadius: "50%",
            marginRight: 2,
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Grid>
          <Typography variant="h7" color="primary">
            {item.task}
          </Typography>
        </Grid>
        <Grid>
          <Typography variant="body" color="primary">
            {item.name}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TaskCard;
