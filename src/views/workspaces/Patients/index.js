import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { Grid, Button, Typography } from '@mui/material';
import DrawerComponent from '../../../ui-component/Drawer';

const Index = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const data = () => {
    return (
      <Typography variant="h6">Drawer Content</Typography>
    )
  }
  return (
    <Grid sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Button variant='contained' onClick={handleOpen}>Open drawer</Button>
      <DrawerComponent open={open} handleOpen={handleOpen} handleClose={handleClose} data={ data} />
    </Grid>
  )
}

export default Index
