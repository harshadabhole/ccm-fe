import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
 
} from "chart.js";
import { Box, CardContent, Grid, Typography, Card, Paper, Divider,  TextField, IconButton } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { DatePicker } from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const,
      display: false,
    },
    title: {
      display: true,
      text: "",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: true,
      },
      min: 0,
      max: 800,
      scaleLabel: { display: true },
      ticks: {
        stepSize: 200,
      },
    },
  },
};

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [300, 400, 300, 400, 500, 600, 700, 800, 600, 700, 400, 200],
      backgroundColor:'#42427C',
    },
  ],
};

export function BarChart() {

  const monthHandler = () => {
    
  }
  
  return (
    <Box>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12} md={5}>
          <Typography sx={{fontWeight: 800}}>New Patients for CCM Program</Typography>
        </Grid>
        <Grid item xs={12} md={3}>
          <Paper elevation={3}>
            <Grid
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 2,
                padding: '2px'
              }}
            >
              <IconButton onClick={monthHandler}>
              <Typography color='primary' sx={{fontWeight: 700}}>Month</Typography>
              </IconButton>
              <Divider orientation="vertical" flexItem/>
              <IconButton onClick={monthHandler}>
              <Typography color='primary' sx={{fontWeight: 700}}>Week</Typography>
              </IconButton>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} md={3}>
          <DatePicker
            label="Select Date"
            value={null} // You can set the selected date here
            onChange={(date) => {
              // Handle date selection here
              console.log("Selected Date:", date);
            }}
            renderInput={(params) => <TextField {...params} />}
            // adapter={AdapterDateFns}
          />
        </Grid>
      </Grid>
      <Bar options={options} data={data} />
    </Box>
  );
}
