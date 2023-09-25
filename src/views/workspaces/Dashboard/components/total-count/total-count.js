import React from 'react';
import Chart from 'react-apexcharts';
import { HelpOutline } from '@mui/icons-material';
import { Card, CardHeader, Typography, Grid, Box, Paper, Input} from '@mui/material';

const TotalCount = ({name}) => {
  // const data = {
  //   completed: "786,617",
  //   inProgress: "13,561"
  // };

  const options = {
    chart: {
      sparkline: {
        enabled: true,
      },
      dropShadow: {
        enabled: true,
        blur: 3,
        left: 1,
        top: 1,
        opacity: 0.1,
      },
    },
    colors: ['#51e5a8'],
    plotOptions: {
      radialBar: {
        offsetY: 10,
        startAngle: -150,
        endAngle: 150,
        hollow: {
          size: '60%',
        },
        track: {
          background: '#ebe9f1',
          strokeWidth: '50%',
        },
        dataLabels: {
          name: {
            show: false,
          },
          value: {
            color: '#5e5873',
            fontFamily: 'Montserrat',
            fontSize: '1rem',
            fontWeight: '800',
          },
        },
      },
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'dark',
        type: 'horizontal',
        shadeIntensity: 0.5,
        gradientToColors: [""],
        inverseColors: true,
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100],
      },
    },
    stroke: {
      lineCap: 'round',
    },
    grid: {
      padding: {
        bottom: 20,
      },
    },
  };

  const series = [83];

  return (
    <Box textAlign="center">
      <Paper elevation={3} >
        <Typography >{name}</Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <Chart options={options} series={series} type="radialBar" height={150} />
        </Grid>
      </Grid>
      </Paper>
    </Box>
  );
};

export default TotalCount;
