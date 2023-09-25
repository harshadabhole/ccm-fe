import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

const Index = () => {
  const navigate = useNavigate();
  function handle() {
    navigate('/alerts')
}
  return (
    <Grid sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      Patient data!
    </Grid>
  )
}

export default Index
