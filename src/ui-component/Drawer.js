import React from "react";
import { Box, Drawer } from "@mui/material";

const DrawerComponent = ({ open, handleClose, data }) => {
  const content = data();
  return (
    <Drawer open={open} onClose={handleClose} anchor="right">
      <Box sx={{ width: "50vw", padding: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {content}
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
