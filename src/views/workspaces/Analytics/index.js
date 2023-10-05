import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import PatientCard from "./components/patient-card";
import TaskCard from "./components/task-card";
import ProgramCard from "./components/program-card";
import { CustomScrollbars } from "../../../ui-component/ScrollBar";

const Analytics = () => {
  const patientCard = [
    {
      title: "Patient Enrolled",
      value: "500",
      growth: "10",
    },
    {
      title: "Non-Complex",
      value: "500",
      growth: "10",
    },
    {
      title: "Complex",
      value: "50",
      growth: "10",
    },
    {
      title: "Compliance",
      value: "75",
      growth: "9",
    },
    {
      title: "Improvement",
      value: "84",
      growth: "10",
    },
  ];

  const taskData = [
    {
      url: "Patient Enrolled",
      task: "Reach out o patient",
      name: "John Doe",
    },
    {
      url: "Patient Enrolled",
      task: "Reach out o patient",
      name: "John Doe",
    },
    {
      url: "Patient Enrolled",
      task: "Reach out o patient",
      name: "John Doe",
    },
    {
      url: "Patient Enrolled",
      task: "Reach out o patient",
      name: "John Doe",
    },
  ];

  const programData = [
    { text: "New Enrollment", value: 123 },
    { text: "Initial Interview & Care Plan Assigned", value: 456 },
    { text: "Device Supplied", value: 789 },
    { text: "Initial 20 min monitoring", value: 234 },
    { text: "Add 20 min monitoring", value: 567 },
    { text: "Initial 20 min personal monitoring", value: 890 },
    { text: "Add 20 min personal monitoring", value: 321 },
    { text: "Initial 60 min personal consultation", value: 654 },
    { text: "Initial 60 min personal consultation", value: 987 },
  ];

  return (
    <Grid container spacing={2} padding={3}>
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {patientCard.map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={2.4} xl={2.4} key={index}>
              <PatientCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card sx={{ boxShadow: 5, height: 450 }} spacing={2} >
        <CustomScrollbars height={440}>
          <CardContent>
            <Grid container spacing={2}>
              {programData?.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={index}>
                  <ProgramCard item={item} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
          </CustomScrollbars>
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={3} xl={3}>
        <Card sx={{ boxShadow: 5, height: 450 }}>
          <CardContent>
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Typography variant="h6">Today's Task</Typography>
              <Button variant="text" sx={{ textTransform: "none" }}>
                View All
              </Button>
            </Grid>
            {taskData.map((item, index) => (
              <Grid key={index}>
                <TaskCard item={item} />
              </Grid>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Analytics;
