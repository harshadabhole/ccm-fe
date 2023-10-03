import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Avatar, Grid, LinearProgress } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PersonAddAltIcon from "@mui/icons-material/PersonAddAlt";
import HotelOutlinedIcon from "@mui/icons-material/HotelOutlined";
import NoteAltOutlinedIcon from "@mui/icons-material/NoteAltOutlined";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";

export default function PatientCard({ item }) {
  const [progress, setProgress] = useState(40);

  const renderIcon = () => {
    const iconStyle = { color: "#42427C", fontSize: 40 };
    switch (item.title) {
      case "Non-Complex":
        return <PersonAddAlt1Icon sx={iconStyle} />;
      case "Complex":
        return <HotelOutlinedIcon sx={iconStyle} />;
      case "Compliance":
        return <NoteAltOutlinedIcon sx={iconStyle} />;
      case "Improvement":
        return <TrendingUpRoundedIcon sx={iconStyle} />;
      default:
        return <AssignmentIcon sx={iconStyle} />;
    }
  };

  // const getCardHeight = () => {
  //   return {
  //     xs: "100px", // Height for extra-small screens
  //     sm: "120px", // Height for small screens
  //     md: "250px", // Height for medium screens
  //     lg: "180px", // Height for large screens
  //     xl: "200px", // Height for extra-large screens
  //   }[item.breakpoint];
  // };

  return (
    <Card sx={{ boxShadow: 4 }}>
      <CardContent>
        <Grid
          container
          spacing={1}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Grid>
            <Avatar
              variant="rounded"
              sx={{ bgcolor: "#D3D3FF", width: "60px", height: "60px" }}
            >
              {renderIcon()}
            </Avatar>
          </Grid>
          <Grid>
            <Grid item xs={12} overflow="hidden">
              <Typography variant="h6" color="primary">
                {/* Patient Enrolled */}
                {item.title}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" color="primary" fontWeight="700">
                {item.value}{" "}
                {(item.title === "Compliance" || item.title === "Improvement") && <span>%</span>}
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <LinearProgress
              variant="determinate"
              color="warning"
              value={progress}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "start",
            }}
          >
            {item.growth >= 10 ? (
              <ArrowUpwardIcon color="primary" />
            ) : (
              <ArrowDownwardIcon color="primary" />
            )}
            <Typography variant="body" color="primary">
              {item.growth}% since last month
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
