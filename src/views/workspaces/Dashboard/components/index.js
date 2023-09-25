import React from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Link,
  Box,
  FormControlLabel,
  Checkbox,
  Paper,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import { BarChart } from "./ccm-chart/bar-chart";
import UsedDevice from "./used-device/used-device";
import Avatar from '../../../../assets/avatar-s-11.jpg'
import ProviderGroupTable from "./provider-group";
import TotalCount from "./total-count/total-count";
import PatientDataTable from "./Patient-Table";
import MediaCard from "./test-table/patient";

export const Analytics = () => {
  const navigate = useNavigate();
  const value = 75

  const data = [
    {
      name: 'Blood Pressure device',
      url: Avatar,
      description: 'This is a sample description text. You can replace it with your own content.'
    },
    {
      name: 'Fully body tracker',
      url: Avatar,
      description: 'This is a sample description text. You can replace it with your own content.'
    },
    {
      name: 'Pulse oximeter',
      url: Avatar,
      description: 'This is a sample description text. You can replace it with your own content.'
    }
  ]

  return (
    <Grid container spacing={2} padding={3} >
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: "10px" }}>
          <BarChart />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: "10px" }}>
          <Typography sx={{ fontWeight: 800, marginBottom: '10px' }}>Total Count</Typography>
          <Grid container spacing={1} direction="row">
            <Grid item xs={6} sm={6}>
              <TotalCount name='Provider Group'/>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TotalCount name='Provider'/>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TotalCount name='CCM Program'/>
            </Grid>
            <Grid item xs={6} sm={6}>
              <TotalCount name='Device'/>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper elevation={3} sx={{ padding: "10px" }}>
        <Typography sx={{fontWeight: 800, marginBottom: '10px'}}>Used Device</Typography>
          {data.map((item, index) => (
            <UsedDevice item={item} key={index } />
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper elevation={3} sx={{ padding: "10px" }}>
        <Typography variant='body' sx={{fontWeight: 800, marginBottom: '10px'}}>Provider Group</Typography>
          <ProviderGroupTable />
        </Paper>
      </Grid>
    </Grid>
  );
}
