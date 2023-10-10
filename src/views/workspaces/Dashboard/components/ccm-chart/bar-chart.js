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
import Flatpickr from 'react-flatpickr'


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
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <Typography sx={{fontWeight: 800}}>New Patients for CCM Program</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          {/* <Paper elevation={3}> */}
          <Grid
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              padding: "2px",
              background: "#FFFFFF 0% 0% no-repeat padding-box",
              boxShadow: "0px 0px 8px #00000029",
              borderRadius: "5px",
              opacity: 1,
              width: '80%'
            }}
          >
              <IconButton onClick={monthHandler}>
              <Typography color='primary' sx={{fontWeight: 700, fontSize: '14px'}}>Month</Typography>
              </IconButton>
              <Divider orientation="vertical" flexItem/>
              <IconButton onClick={monthHandler}>
              <Typography color='primary' sx={{fontWeight: 700, fontSize: '14px'}}>Week</Typography>
              </IconButton>
            </Grid>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4} >
        <Flatpickr
            options={{
              mode: 'range',
              // eslint-disable-next-line no-mixed-operators
              defaultDate: [new Date(), new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000)]
            }}
          />
          {/* <DatePicker/> */}
        </Grid>
      </Grid>
      <Bar options={options} data={data} />
    </Box>
  );
}
