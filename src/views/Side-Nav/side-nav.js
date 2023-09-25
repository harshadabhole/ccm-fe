import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box,
  Grid,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Collapse from "@mui/material/Collapse";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { toggleDrawer } from "../../store/slices/drawerSlices";
import { drawerWidth } from "../../ccm-constant";
import { menus } from "./menus";

export const SideNav = () => {
  const [selectedItem, setSelectedItem] = useState("Analytics");
  const [openGroups, setOpenGroups] = useState({});
  const navigate = useNavigate();
  const store = useSelector((state) => state);
  console.log("store", store);

  const location = useLocation();
  const routesWithoutHeader = [
    "/signin",
    "/forgotPassword",
    "/resetPassword",
    "/otp",
    "/logout",
    "/",
  ];

  // Create a state object to track the open state of each group
  const toggleGroup = (groupId) => {
    // Toggle the open state of the clicked group
    setOpenGroups((prevState) => ({
      ...prevState,
      [groupId]: !prevState[groupId],
    }));
  };

  const handleItemClick = (item) => {
    setSelectedItem(item.title);
    navigate(`${item.url}`);
  };

  // Use the useEffect hook to update the selectedItem based on location.pathname
  useEffect(() => {
    // Find the corresponding menu item based on the current URL
    const menuItem = menus.children.find(
      (item) => item.url === location.pathname
    );

    // Set the selectedItem to the found menu item's title
    if (menuItem) {
      setSelectedItem(menuItem.title);
    }
  }, [location.pathname]);

  // set children menu position
  const renderMenuItems = (items, depth = 0) => {
    const marginLeft = depth * 20;
    if (routesWithoutHeader.includes(location.pathname)) {
      return null;
    }

    return (
      <List>
        {items.map((item) => (
          <div key={item.id}>
            {item.type === "item" ? (
              <ListItem
                button
                onClick={() => handleItemClick(item)}
                selected={item.title === selectedItem}
                sx={{
                  marginLeft: `${marginLeft}px`,
                  borderRadius: "8px",
                  "&:hover": {
                    backgroundColor: "#D3D3FF",
                    // border: '1px solid #42427C',
                  },
                  marginBottom: "5px",
                  "&.Mui-selected": {
                    backgroundColor: "#D3D3FF !important",
                    // border: '1px solid #42427C',
                  },
                  "& .MuiTypography-body1 ": item.title === selectedItem && {
                    color: "#42427C",
                    fontWeight: 600,
                  },
                  "& .MuiListItemIcon-root": item.title === selectedItem && {
                    color: "#42427C",
                  },
                }}
              >
                <ListItemIcon sx={{ minWidth: "40px" }}>
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.title} />
              </ListItem>
            ) : item.type === "group" ? (
              <div>
                <ListItem
                  button
                  onClick={() => toggleGroup(item.id)}
                  sx={{
                    marginLeft: `${marginLeft}px`,
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "#D3D3FF",
                      // border: '1px solid #42427C',
                    },
                    marginBottom: "5px",
                    "&.Mui-selected": {
                      backgroundColor: "#D3D3FF !important",
                      // border: '1px solid #42427C',
                    },
                    "& .MuiTypography-body1 ": item.title === selectedItem && {
                      color: "#42427C",
                      fontWeight: 600,
                    },
                    "& .MuiListItemIcon-root": {
                      color: "#42427C",
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: "40px" }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.title} />
                  <ListItemIcon>
                    {openGroups[item.id] ? (
                      <KeyboardArrowUpIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    )}
                  </ListItemIcon>
                </ListItem>
                <Collapse in={openGroups[item.id]}>
                  {renderMenuItems(item.children, depth + 1)}
                </Collapse>
              </div>
            ) : null}
          </div>
        ))}
      </List>
    );
  };

  if (routesWithoutHeader.includes(location.pathname)) {
    return null;
  }

  return (
    <Grid style={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "64px",
          },
          display: "flex",
          alignItems: "center",
        }}
        variant="persistent"
        anchor="left"
        open={store.drawer.open}
        onClose={toggleDrawer}
      >
        <Box sx={{ width: "80%", marginLeft: "25px", marginTop: "10px" }}>
          {renderMenuItems(menus.children)}
        </Box>
      </Drawer>
    </Grid>
  );
};
