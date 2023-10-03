import React from 'react'
import { Card, CardContent, Typography, Grid, Divider } from '@mui/material'

const ProgramCard = ({item}) => {
  return (
    <Card sx={{boxShadow: 3, height:200}}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography>{item.text}</Typography>
          </Grid>
          <Grid item xs={12} mb={1}>
            <Typography variant="h5" color="primary" fontWeight="700">{item.value}</Typography>
          </Grid>
        </Grid>
        <Divider orientation="horizontal" flexItem/>
        <Typography mt={1}>Eligible for billing CPT code</Typography>
      </CardContent>
    </Card>
  )
}

export default ProgramCard
