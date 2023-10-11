import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import {
  Box,
  CardContent,
  Grid,
  Typography,
  Card,
  Paper,
  Divider,
  TextField,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Bar } from "react-chartjs-2";
import cardStyle from "../../../../../theme/card-layout";

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
      max: 80000, // Set the maximum value to match your data range
      scaleLabel: {
        display: true,
        labelString: "Revenue",
      },
      ticks: {
        stepSize: 10000, // Set the step size to 10,000 to match your data range
        callback: function (value, index, values) {
          return `$${value / 1000}K`;
        },
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
      data: [
        30000, 40000, 30000, 40000, 50000, 60000, 70000, 80000, 60000, 70000,
        40000, 20000,
      ],
      backgroundColor: "#66ADDC",
      borderRadius: 20,
    },
  ],
};

export function RevenueChart() {
  const [startDate, setStartDate] = useState(new Date());
  const monthHandler = () => {};

  return (
    <Box>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
          <Typography  sx={{ fontWeight: 800 }}>
            New Patients for CCM Program
          </Typography>
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
              width: '90%'
            }}
          >
            {/* <IconButton onClick={monthHandler}>
              <Typography color='primary' sx={{fontWeight: 600, fontSize: '14px'}}>Admin</Typography>
              </IconButton>
              <Divider orientation="vertical" flexItem/> */}
            <IconButton onClick={monthHandler}>
              <Typography
                color="primary"
                sx={{ fontWeight: 600, fontSize: "14px" }}
              >
                Provider
              </Typography>
            </IconButton>
            <Divider orientation="vertical" flexItem />
            <IconButton onClick={monthHandler}>
              <Typography
                color="primary"
                sx={{ fontWeight: 600, fontSize: "14px" }}
              >
                Provider Group
              </Typography>
            </IconButton>
          </Grid>
          {/* </Paper> */}
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={4}>
        
        </Grid>
      </Grid>
      <Bar options={options} data={data} />
    </Box>
  );
}
