import React, { useState } from 'react';
import { Avatar, Menu, MenuItem, Typography } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { loggedInUserType } from '../../../App';


function UserProfile({ name, photo }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
  
    const handleOpenMenu = (event) => {
      setAnchorEl(event.currentTarget);
      setIsOpen(true);
    };
  
    const handleCloseMenu = () => {
      setAnchorEl(null);
      setIsOpen(false);
    };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <Avatar src={photo} alt={`${name}'s Profile`} sx={{ width: 80, height: 80, marginRight: 2 }} />
      <div style={{ flex: 1 }}>
        {/* <h4 sx={{ margin: 0, padding: 0 }}>User Name</h4> */}
        <Typography
            variant="h6"
            display="block"
            sx={{ cursor: 'pointer', fontSize:"20px" }}
          >
            {name}
          </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            variant="button"
            display="block"
            onClick={handleOpenMenu}
            sx={{ cursor: 'pointer', fontWeight:400 }}
          >
            {loggedInUserType}
          </Typography>
          <ArrowDropDownIcon onClick={handleOpenMenu} sx={{ cursor: 'pointer' }} />
        </div>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
        >
          <MenuItem onClick={handleCloseMenu}>View profile</MenuItem>
          <MenuItem onClick={handleCloseMenu}>Edit profile</MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default UserProfile;
