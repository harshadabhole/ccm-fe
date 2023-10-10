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
  Card,
  CardContent,
} from "@mui/material";
import { styled } from "@mui/system";
import { BarChart } from "./ccm-chart/bar-chart";
import UsedDevice from "./used-device/used-device";
import Avatar from "../../../../assets/avatar-s-11.jpg";
import ProviderGroupTable from "./provider-group";
import TotalCount from "./total-count/total-count";
import PatientDataTable from "./Patient-Table";
import MediaCard from "./test-table/patient";
import cardStyle from "../../../../theme/card-layout";
import { RevenueChart } from "./revenue/revenue-chart";

export const Analytics = () => {
  const navigate = useNavigate();
  const value = 75;

  const data = [
    {
      name: "Blood Pressure device",
      url: Avatar,
      description:
        "This is a sample description text. You can replace it with your own content.",
    },
    {
      name: "Fully body tracker",
      url: Avatar,
      description:
        "This is a sample description text. You can replace it with your own content.",
    },
    {
      name: "Pulse oximeter",
      url: Avatar,
      description:
        "This is a sample description text. You can replace it with your own content.",
    },
  ];

  const programData = [
    { text: "Provider Group", value: 123 },
    { text: "Provider", value: 456 },
    { text: "Patient", value: 789 },
    { text: "CCM Program", value: 234 },
    { text: "Device", value: 567 },
  ];

  return (
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            boxShadow: "0px 0px 8px #00000029",
            borderRadius: "5px",
            opacity: 1,
            // height:75,
          }}>
          <CardContent>
            <BarChart />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            boxShadow: "0px 0px 8px #00000029",
            borderRadius: "5px",
            opacity: 1,
            // height:75,
          }}>
          <CardContent>
            <RevenueChart />
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Card
          sx={{
            boxShadow: 5,
            boxShadow: "0px 0px 8px #00000029",
            borderRadius: "5px",
            opacity: 1,
          }}
          spacing={3}
        >
          <CardContent>
            <Typography sx={{ fontWeight: 800, marginBottom: "10px" }}>
              Total Count
            </Typography>
            <Grid container spacing={2}>
              {programData?.map((item, index) => (
                <Grid item xs={12} sm={6} md={6} lg={2.4} xl={2.4} key={index}>
                  <TotalCount item={item} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6}>
        <Paper
          elevation={3}
          sx={{
            padding: "10px",
            boxShadow: "0px 0px 8px #00000029",
            borderRadius: "5px",
            opacity: 1,
          }}
        >
          <Typography sx={{ fontWeight: 800, marginBottom: "10px" }}>
            Used Device
          </Typography>
          {data.map((item, index) => (
            <UsedDevice item={item} key={index} />
          ))}
        </Paper>
      </Grid>
      <Grid item xs={12} md={12}>
        <Paper elevation={3} sx={{ padding: "10px" }}>
          <Typography
            variant="body"
            sx={{ fontWeight: 800, marginBottom: "10px" }}
          >
            Provider Group
          </Typography>
          <ProviderGroupTable />
        </Paper>
      </Grid>
    </Grid>
  );
};
