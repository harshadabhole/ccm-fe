import React,{useRef, useState} from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Paper
} from "@mui/material";
import ProviderList from "./components/Provider-List/provider-list";


const Provider = () => {

  const scrollableContainerRef = useRef(null);

  return (
    <Grid container spacing={3} padding={3}>
      <Grid item xs={12}>
      <Card sx={{boxShadow:5}}>
        <CardContent>
          <ProviderList/>
        </CardContent>
      </Card>
      </Grid>
    </Grid>
  );
};

export default Provider;
